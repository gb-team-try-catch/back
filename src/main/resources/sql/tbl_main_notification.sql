-- ============================================================
create table tbl_main_notification
(
    id                        bigint unsigned auto_increment primary key comment '알림 ID',
    member_id      bigint unsigned not null comment '수신자 (개인회원) ID',
    notification_type         enum ('experience_apply', 'qna', 'skill_log') not null comment '알림 유형',
    notification_title        varchar(255) not null comment '제목',
    notification_content      text comment '내용',
    notification_is_read      boolean  default false comment '읽음 여부',
    notification_receive_at   datetime default current_timestamp comment '수신 시각',
    created_datetime          datetime default current_timestamp,
    updated_datetime          datetime default current_timestamp ,
    constraint fk_main_notification_member foreign key (member_id) references tbl_individual_member (id)
) comment '메인 헤더 알림 슈퍼타입';


