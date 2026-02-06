create table tbl_skill_log_file
(
    id                  bigint unsigned primary key comment '파일 ID (tbl_file.id)',
    skill_log_id        bigint unsigned                           not null comment '스킬로그 ID (FK)',
    skill_log_file_type enum ('thumbnail', 'image', 'attachment') not null comment '파일 유형',
    constraint fk_skill_log_file foreign key (id) references tbl_file (id),
    constraint fk_skill_log_file_log foreign key (skill_log_id) references tbl_skill_log (id)
) comment '기술 블로그 파일 서브타입';


