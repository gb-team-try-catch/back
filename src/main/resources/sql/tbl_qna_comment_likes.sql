create table tbl_qna_comment_likes
(
    id                   bigint unsigned auto_increment primary key comment '좋아요 ID',
    individual_member_id bigint unsigned not null comment '좋아요 누른 회원 ID',
    qna_comment_id       bigint unsigned not null comment 'QnA 댓글 ID',
    created_datetime     datetime default current_timestamp,
    constraint fk_qna_comment_likes_member foreign key (individual_member_id) references tbl_individual_member (id) on delete cascade,
    constraint fk_qna_comment_likes_comment foreign key (qna_comment_id) references tbl_qna_comment (id) on delete cascade,
    unique key uk_member_qna_comment (individual_member_id, qna_comment_id)
) comment 'QnA 댓글 좋아요';
