create table tbl_skill_log_comment
(
    id                        bigint unsigned auto_increment primary key,
    skill_log_id              bigint unsigned not null comment '스킬로그 ID',
    member_id                 bigint unsigned not null comment '작성자 ID (FK: tbl_member)',
    skill_log_comment_parent  bigint unsigned comment '부모 댓글 ID',
    skill_log_comment_content text            not null comment '댓글 내용',
    skill_log_like_count      int      default 0 comment '좋아요 수',
    created_datetime          datetime default current_timestamp,
    updated_datetime          datetime default current_timestamp on update current_timestamp,
    constraint fk_skill_log_comment_log foreign key (skill_log_id) references tbl_skill_log (id),
    constraint fk_skill_log_comment_member foreign key (member_id) references tbl_member (id) ,
    constraint fk_skill_log_comment_parent foreign key (skill_log_comment_parent) references tbl_skill_log_comment (id)
);


