-- ============================================================
create table tbl_qna_job_category_small
(
    id                     bigint unsigned auto_increment primary key comment '직무 카테고리 ID',
    job_category_parent_id bigint unsigned not null comment '부모 카테고리 ID',
    job_category_small_name      varchar(255) not null comment '카테고리명',
    job_category_small_code      varchar(255) comment '카테고리 고유 식별 코드 (예: DEV_BACKEND_JAVA, DESIGN_UI_FIGMA 등)',
    constraint fk_qna_job_category_small foreign key (job_category_parent_id) references tbl_qna_job_category (id)
);

set FOREIGN_KEY_CHECKS = 1;

drop table tbl_qna_job_category_small;
