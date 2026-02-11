// ==========================================
//  비밀번호 표시/숨김 토글
// ==========================================
const passwordInput = document.getElementById("U_PWD");
const passwordToggle = document.querySelector(".dev-password-dp");

if (passwordToggle && passwordInput) {
    passwordToggle.addEventListener("click", () => {
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            passwordToggle.querySelector("span").textContent = "숨김";
        } else {
            passwordInput.type = "password";
            passwordToggle.querySelector("span").textContent = "표시";
        }
    });
}

// ==========================================
//  비밀번호 도움말 버튼
// ==========================================
const btnHelp = document.querySelector(".btnHelp");
const passwordHelpRow = document.querySelector(".mbr_passwd");
const passwordHelpChat = document.querySelector(".lyHelp");

// ★ 초기 상태: 도움말 숨김 처리
if (passwordHelpChat) {
    passwordHelpChat.style.display = "none";
}

if (btnHelp && passwordHelpRow && passwordHelpChat) {
    btnHelp.addEventListener("click", () => {
        passwordHelpRow.style.zIndex =
            passwordHelpRow.style.zIndex === "9100" ? "auto" : "9100";
        passwordHelpChat.style.display =
            passwordHelpChat.style.display === "block" ? "none" : "block";
    });
}

// ==========================================
//  사업자등록번호 자동 하이픈
// ==========================================
const corpRegNum = document.getElementById("Corp_RegNum");

if (corpRegNum) {
    corpRegNum.addEventListener("input", () => {
        let value = corpRegNum.value.replace(/[^0-9]/g, "");

        if (value.length > 3 && value.length <= 5) {
            value = value.slice(0, 3) + "-" + value.slice(3);
        } else if (value.length > 5) {
            value =
                value.slice(0, 3) +
                "-" +
                value.slice(3, 5) +
                "-" +
                value.slice(5, 10);
        }

        corpRegNum.value = value;
    });
}

// ==========================================
//  사업자등록증명원 발급번호 자동 하이픈
// ==========================================
const certIssueNo = document.getElementById("CRTFCT_Issue_No");

if (certIssueNo) {
    certIssueNo.addEventListener("input", () => {
        let value = certIssueNo.value.replace(/[^0-9]/g, "");

        // 형식: 0000-000-0000-000
        if (value.length > 4 && value.length <= 7) {
            value = value.slice(0, 4) + "-" + value.slice(4);
        } else if (value.length > 7 && value.length <= 11) {
            value =
                value.slice(0, 4) +
                "-" +
                value.slice(4, 7) +
                "-" +
                value.slice(7);
        } else if (value.length > 11) {
            value =
                value.slice(0, 4) +
                "-" +
                value.slice(4, 7) +
                "-" +
                value.slice(7, 11) +
                "-" +
                value.slice(11, 14);
        }

        certIssueNo.value = value;
    });
}

// ==========================================
//  전화번호 자동 하이픈
// ==========================================
const corpPhone = document.getElementById("Corp_Phone");

if (corpPhone) {
    corpPhone.addEventListener("input", () => {
        let value = corpPhone.value.replace(/[^0-9]/g, "");

        if (value.length > 3 && value.length <= 7) {
            value = value.slice(0, 3) + "-" + value.slice(3);
        } else if (value.length > 7) {
            value =
                value.slice(0, 3) +
                "-" +
                value.slice(3, 7) +
                "-" +
                value.slice(7, 11);
        }

        corpPhone.value = value;
    });
}

// ==========================================
//  사업자등록증명원 발급번호 입력가이드 팝업
// ==========================================
const corpCertInfoBtn = document.querySelector(".devCorpCertInfo");
const corpCertInfoPopup = document.querySelector(".devCorpCertInfoPopup");
const corpCertInfoClose = document.querySelector(".devCorpCertInfoCls");

if (corpCertInfoBtn && corpCertInfoPopup) {
    corpCertInfoBtn.addEventListener("click", () => {
        corpCertInfoPopup.style.display = "flex";
    });
}

if (corpCertInfoClose && corpCertInfoPopup) {
    corpCertInfoClose.addEventListener("click", () => {
        corpCertInfoPopup.style.display = "none";
    });
}

// 팝업 외부 클릭 시 닫기
if (corpCertInfoPopup) {
    const popupDim = corpCertInfoPopup.querySelector(".layer-popup-dim");
    if (popupDim) {
        popupDim.addEventListener("click", () => {
            corpCertInfoPopup.style.display = "none";
        });
    }
}

// ==========================================
//  입력정보 포커스/블러 및 유효성 검증
//  ★ 사업자등록증명원(CRTFCT_Issue_No) 제거 - 필수 항목 아님
// ==========================================
const fields = [
    {
        input: "U_ID",
        selector: ".mbr_id",
        notice: "notice_msg_id",
        regexp: /^[a-z0-9]{4,16}$/,
        errorMsg: "4~16자의 영문 소문자, 숫자만 사용 가능합니다.",
    },
    {
        input: "U_PWD",
        selector: ".mbr_passwd",
        notice: "notice_msg_pwd",
        regexp: /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[~!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,16}$/,
        errorMsg: "8~16자의 영문, 숫자, 특수문자를 모두 포함해야 합니다.",
    },
    {
        input: "Mem_Name",
        selector: ".mbr_manager_name",
        notice: "notice_msg_name",
        regexp: /^[가-힣a-zA-Z\s]{2,12}$/,
        errorMsg: "2~12자의 한글, 영문만 입력 가능합니다.",
    },
    {
        input: "Corp_Phone",
        selector: ".mbr_phone",
        notice: "notice_msg_phone",
        regexp: /^0\d{1,2}-?\d{3,4}-?\d{4}$/,
        errorMsg: "올바른 전화번호를 입력해주세요.",
    },
    {
        input: "email",
        selector: ".mbr_email",
        notice: "notice_msg_mail",
        regexp: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        errorMsg: "올바른 이메일 형식을 입력해주세요.",
    },
    {
        input: "Corp_RegNum",
        selector: ".company_num",
        notice: "notice_msg_regnum",
        regexp: /^\d{3}-?\d{2}-?\d{5}$/,
        errorMsg: "올바른 사업자등록번호를 입력해주세요.",
    },
    {
        input: "Corp_Name",
        selector: ".company_name",
        notice: "notice_msg_corp_name",
        regexp: /^.{1,50}$/,
        errorMsg: "회사명을 입력해주세요.",
    },
    {
        input: "Boss_Name",
        selector: ".company_bossname",
        notice: "notice_msg_ceo_name",
        regexp: /^[가-힣a-zA-Z\s]{2,20}$/,
        errorMsg: "대표자명을 입력해주세요.",
    },
];

// 포커스 / 블러 이벤트
fields.forEach(({ input, selector, notice, regexp, errorMsg }) => {
    const inputEl = document.getElementById(input);
    const col1 = document.querySelector(`${selector} .col_1`);
    const col2 = document.querySelector(`${selector} .col_2`);
    const noticeEl = document.getElementById(notice);

    if (!inputEl) return;

    // 포커스
    inputEl.addEventListener("focus", () => {
        if (col1) col1.classList.add("focus");
        if (col2) col2.classList.add("focus");
    });

    // 블러 (포커스 해제)
    inputEl.addEventListener("blur", () => {
        // 값 없으면 포커스 스타일 제거
        if (!inputEl.value) {
            if (col1) col1.classList.remove("focus");
            if (col2) col2.classList.remove("focus");
        }

        // 정규식 검증
        if (regexp && noticeEl) {
            if (!inputEl.value) {
                noticeEl.innerHTML = "필수 입력 항목입니다.";
                noticeEl.classList.add("failure");
                noticeEl.style.display = "block";
            } else if (!regexp.test(inputEl.value)) {
                noticeEl.innerHTML = errorMsg;
                noticeEl.classList.add("failure");
                noticeEl.style.display = "block";
            } else {
                noticeEl.innerHTML = "";
                noticeEl.classList.remove("failure");
                noticeEl.style.display = "none";
            }
        }
    });
});

// ==========================================
//  사업자등록증명원 포커스/블러 (필수 아님, 별도 처리)
// ==========================================
const certInput = document.getElementById("CRTFCT_Issue_No");
const certCol1 = document.querySelector(".certificate_num .col_1");
const certCol2 = document.querySelector(".certificate_num .col_2");

if (certInput) {
    certInput.addEventListener("focus", () => {
        if (certCol1) certCol1.classList.add("focus");
        if (certCol2) certCol2.classList.add("focus");
    });

    certInput.addEventListener("blur", () => {
        if (!certInput.value) {
            if (certCol1) certCol1.classList.remove("focus");
            if (certCol2) certCol2.classList.remove("focus");
        }
    });
}

// ==========================================
//  체크박스 전체 선택 / 개별 선택
// ==========================================
const inputChkAll = document.getElementById("lb_chk_all");
const chkAll = document.querySelector(".chk_all");
const checkBoxInputs = document.querySelectorAll(".devAgreeCheck");
const checkBoxLabels = [
    document.querySelector(".chk_service"),
    document.querySelector(".chk_sms"),
    document.querySelector(".chk_privacyOptional"),
];

// 전체 선택
if (inputChkAll && chkAll) {
    inputChkAll.addEventListener("change", () => {
        const isChecked = inputChkAll.checked;

        chkAll.classList.toggle("on", isChecked);

        checkBoxInputs.forEach((input, idx) => {
            input.checked = isChecked;
            if (checkBoxLabels[idx]) {
                checkBoxLabels[idx].classList.toggle("on", isChecked);
            }
        });
    });
}

// 개별 선택
checkBoxInputs.forEach((input, idx) => {
    input.addEventListener("change", () => {
        if (checkBoxLabels[idx]) {
            checkBoxLabels[idx].classList.toggle("on", input.checked);
        }

        const allChecked = Array.from(checkBoxInputs).every((cb) => cb.checked);

        if (inputChkAll) {
            inputChkAll.checked = allChecked;
            if (chkAll) {
                chkAll.classList.toggle("on", allChecked);
            }
        }
    });
});

// ==========================================
//  약관 내용보기 토글
// ==========================================
const policyBtns = document.querySelectorAll(".mbrBtnPolicy");

policyBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        e.preventDefault();

        btn.classList.toggle("on");

        const policyTplBox = btn.closest(".row").querySelector(".policyTplBox");

        if (policyTplBox) {
            policyTplBox.style.display =
                policyTplBox.style.display === "block" ? "none" : "block";
        }
    });
});

// ==========================================
//  가입하기 버튼 - 유효성 검증
// ==========================================
const submitBtn = document.querySelector(".dev-submit");

if (submitBtn) {
    submitBtn.addEventListener("click", (e) => {
        e.preventDefault();

        let isValid = true;

        // 기업형태 검증
        const corpTypeSelect = document.getElementById("Corp_Type");
        if (corpTypeSelect && !corpTypeSelect.value) {
            alert("기업형태를 선택해주세요.");
            corpTypeSelect.focus();
            isValid = false;
            return;
        }

        // 입력 필드 검증
        fields.forEach(({ input, notice, regexp, errorMsg }) => {
            const inputEl = document.getElementById(input);
            const noticeEl = document.getElementById(notice);

            if (!inputEl) return;

            if (!inputEl.value) {
                if (noticeEl) {
                    noticeEl.innerHTML = "필수 입력 항목입니다.";
                    noticeEl.classList.add("failure");
                    noticeEl.style.display = "block";
                }
                isValid = false;
            } else if (regexp && !regexp.test(inputEl.value)) {
                if (noticeEl) {
                    noticeEl.innerHTML = errorMsg;
                    noticeEl.classList.add("failure");
                    noticeEl.style.display = "block";
                }
                isValid = false;
            } else {
                if (noticeEl) {
                    noticeEl.innerHTML = "";
                    noticeEl.classList.remove("failure");
                    noticeEl.style.display = "none";
                }
            }
        });

        // 회사주소 검증
        const zipCode = document.getElementById("addressZipcode");
        const addrNotice = document.getElementById("msg_addr");
        if (zipCode && !zipCode.value) {
            if (addrNotice) {
                addrNotice.innerHTML = "회사주소를 입력해주세요.";
                addrNotice.classList.add("failure");
                addrNotice.style.display = "block";
            }
            isValid = false;
        } else {
            if (addrNotice) {
                addrNotice.innerHTML = "";
                addrNotice.classList.remove("failure");
                addrNotice.style.display = "none";
            }
        }

        // 필수 약관 검증
        const requiredAgrees = document.querySelectorAll(
            ".required .devAgreeCheck",
        );
        const agreeNotice = document.getElementById("notice_msg_agree");
        const allRequiredChecked = Array.from(requiredAgrees).every(
            (cb) => cb.checked,
        );

        if (!allRequiredChecked) {
            if (agreeNotice) {
                agreeNotice.style.display = "block";
            }
            isValid = false;
        } else {
            if (agreeNotice) {
                agreeNotice.style.display = "none";
            }
        }

        // 검증 결과
        if (!isValid) {
            alert("필수 항목을 확인해주세요.");
        } else {
            document.getElementById("form").submit();
        }
    });
}

// ==========================================
//  본인인증 버튼
// ==========================================
const certifyBtn = document.querySelector(".devCertifyBtn");

if (certifyBtn) {
    certifyBtn.addEventListener("click", () => {
        alert("본인인증 기능은 별도 구현이 필요합니다.");
    });
}

// ==========================================
//  비밀번호 표시 버튼 토글
// ==========================================
const mbrBtnAuth = document.querySelector(".mbrBtnAuth.dev-password-dp");

if (mbrBtnAuth) {
    mbrBtnAuth.addEventListener("click", (e) => {
        mbrBtnAuth.classList.toggle("selected");
    });
}

// ==========================================
//  Select 요소 포커스/블러 및 유효성 검증
// ==========================================
const selectFields = [
    {
        select: "Corp_Type",
        selector: ".mbr_co_type",
        required: true,
        errorMsg: "기업형태를 선택해주세요.",
    },
];

selectFields.forEach(({ select, selector, required, errorMsg }) => {
    const selectEl = document.getElementById(select);
    const col1 = document.querySelector(`${selector} .col_1`);
    const col2 = document.querySelector(`${selector} .col_2`);
    const noticeEl = document.querySelector(`${selector} .notice_msg`);

    if (!selectEl) return;

    selectEl.addEventListener("focus", () => {
        if (col1) col1.classList.add("focus");
        if (col2) col2.classList.add("focus");
    });

    selectEl.addEventListener("blur", () => {
        if (!selectEl.value) {
            if (col1) col1.classList.remove("focus");
            if (col2) col2.classList.remove("focus");

            if (
                required &&
                noticeEl &&
                selectEl.closest(".row").style.display !== "none"
            ) {
                noticeEl.innerHTML = errorMsg;
                noticeEl.classList.add("failure");
                noticeEl.style.display = "block";
            }
        } else {
            if (noticeEl) {
                noticeEl.innerHTML = "";
                noticeEl.classList.remove("failure");
                noticeEl.style.display = "none";
            }
        }
    });

    selectEl.addEventListener("change", () => {
        if (selectEl.value) {
            if (col1) col1.classList.add("focus");
            if (col2) col2.classList.add("focus");

            if (noticeEl) {
                noticeEl.innerHTML = "";
                noticeEl.classList.remove("failure");
                noticeEl.style.display = "none";
            }
        }
    });
});