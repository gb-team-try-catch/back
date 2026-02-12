package com.app.trycatch.controller.member;

import com.app.trycatch.dto.member.CorpMemberDTO;
import com.app.trycatch.dto.member.IndividualMemberDTO;
import com.app.trycatch.dto.member.MemberDTO;
import com.app.trycatch.service.member.CorpService;
import com.app.trycatch.service.member.IndividualMemberService;
import com.app.trycatch.service.oauth.KakaoService;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;
import org.springframework.web.servlet.view.RedirectView;

@Controller
@RequestMapping("/main")
@RequiredArgsConstructor
@Slf4j
public class MemberController {
    private final IndividualMemberService individualMemberService;
    private final CorpService corpService;
    private final KakaoService kakaoService;
    private HttpSession session;

    @GetMapping("individual-join")
    public String goIndividualJoinForm(){
        return "main/individual-join";
    }

    @GetMapping("company-join")
    public String goCompanyJoinForm(){
        return "main/company-join";
    }

    @PostMapping("individual-join")
    public RedirectView individualJoin(IndividualMemberDTO individualMemberDTO){
        log.info("========== individualJoin() 호출됨 ==========");
        individualMemberService.joinIndividual(individualMemberDTO);
        return new RedirectView("/main/log-in");
    }
    @PostMapping("company-join")
    public RedirectView companyJoin(CorpMemberDTO  corpMemberDTO){
        corpService.joinCorp(corpMemberDTO);
        return  new RedirectView("/main/log-in");
    }

    @GetMapping("kakao-join")
    public String kakaoCallback(@RequestParam("code") String code, Model model) {
        log.info("========== kakaoCallback() GET 호출됨, code={} ==========", code);
        IndividualMemberDTO kakaoInfo = kakaoService.kakaoLogin(code);

        if (kakaoInfo.getId() != null) {
            return "redirect:/main/log-in";
        }

        model.addAttribute("memberEmail", kakaoInfo.getMemberEmail());
        model.addAttribute("memberName", kakaoInfo.getMemberName());
        return "main/kakao-join";
    }

    @PostMapping("kakao-join")
    public RedirectView kakaoJoin(IndividualMemberDTO individualMemberDTO) {
        log.info("========== kakaoJoin() 호출됨 ==========");
        log.info("받은 데이터: email={}, name={}, birth={}",
            individualMemberDTO.getMemberEmail(),
            individualMemberDTO.getMemberName(),
            individualMemberDTO.getIndividualMemberBirth());
        individualMemberService.kakaoJoin(individualMemberDTO);
        return new RedirectView("/main/log-in");
    }

    @GetMapping("log-in")
    public String goLoginForm(){
        return "main/log-in";
    }



}
