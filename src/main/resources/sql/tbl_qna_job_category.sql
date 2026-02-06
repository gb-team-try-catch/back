-- ============================================================
create table tbl_qna_job_category
(
    id                     bigint unsigned auto_increment primary key comment '직무 카테고리 ID',
    job_category_name      varchar(255) not null comment '카테고리명',
    job_category_code      varchar(255) comment '카테고리 고유 식별 코드 (예: DEV_BACKEND, DEV_FRONTEND, DESIGN_UI 등)',
    job_category_is_active boolean  default true comment '활성 상태',
    created_datetime       datetime default current_timestamp,
    updated_datetime       datetime default current_timestamp
);
