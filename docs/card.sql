/*==============================================================*/
/* DBMS name:      MySQL 5.0                                    */
/* Created on:     2015/2/9 14:40:07                            */
/*==============================================================*/


drop table if exists cards;

drop table if exists users;

/*==============================================================*/
/* Table: cards                                                 */
/*==============================================================*/
create table cards
(
   card_id              int(11) not null auto_increment comment '贺卡id',
   user_id              int(11) comment '用户ID',
   role                 varchar(32) comment '角色id',
   greet                varchar(32) comment '祝福语id',
   created_at           datetime comment '创建日期',
   updated_at           timestamp comment '更新日期',
   is_deleted           tinyint(1) default 0 comment '是否删除',
   primary key (card_id)
);

alter table cards comment '贺卡';

/*==============================================================*/
/* Table: users                                                 */
/*==============================================================*/
create table users
(
   user_id              int(11) not null auto_increment comment '用户ID',
   openid               varchar(128) comment 'openid',
   username             varchar(128) comment '用户昵称',
   head_img             varchar(255) comment '用户头像',
   created_at           datetime comment '创建日期',
   updated_at           timestamp comment '更新日期',
   is_deleted           tinyint(1) default 0 comment '是否删除',
   primary key (user_id)
);

alter table users comment '用户';

alter table cards add constraint FK_Reference_1 foreign key (user_id)
      references users (user_id) on delete restrict on update restrict;

