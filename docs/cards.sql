/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50520
Source Host           : localhost:3306
Source Database       : cards

Target Server Type    : MYSQL
Target Server Version : 50520
File Encoding         : 65001

Date: 2015-02-11 11:18:18
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `cards`
-- ----------------------------
DROP TABLE IF EXISTS `cards`;
CREATE TABLE `cards` (
  `card_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '贺卡id',
  `user_id` int(11) DEFAULT NULL COMMENT '用户ID',
  `openid` varchar(128) DEFAULT NULL,
  `username` varchar(128) DEFAULT NULL,
  `head_img` varchar(255) DEFAULT NULL,
  `role` varchar(32) DEFAULT NULL COMMENT '角色id',
  `greet` varchar(32) DEFAULT NULL COMMENT '祝福语id',
  `created_at` datetime DEFAULT NULL COMMENT '创建日期',
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新日期',
  `is_deleted` tinyint(1) DEFAULT '0' COMMENT '是否删除',
  PRIMARY KEY (`card_id`),
  KEY `FK_Reference_1` (`user_id`),
  CONSTRAINT `FK_Reference_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COMMENT='贺卡';

-- ----------------------------
-- Records of cards
-- ----------------------------
INSERT INTO `cards` VALUES ('1', null, '', 'frank', 'http://wx.qlogo.cn/mmopen/g3MonUZtNHkdmzicIlibx6iaFqAc56vxLSUfpb6n5WKSYVY0ChQKkiaJSgQ1dZuTOgvLLrhJbERQQ4eMsv84eavHiaiceqxibJxCfHe/46', '1', '2', '2015-02-10 15:50:12', '2015-02-10 15:50:12', '0');
INSERT INTO `cards` VALUES ('2', null, '', 'frank', 'http://wx.qlogo.cn/mmopen/g3MonUZtNHkdmzicIlibx6iaFqAc56vxLSUfpb6n5WKSYVY0ChQKkiaJSgQ1dZuTOgvLLrhJbERQQ4eMsv84eavHiaiceqxibJxCfHe/46', '1', '2', '2015-02-10 15:53:08', '2015-02-10 15:53:08', '0');
INSERT INTO `cards` VALUES ('3', null, '', 'frank', 'http://wx.qlogo.cn/mmopen/g3MonUZtNHkdmzicIlibx6iaFqAc56vxLSUfpb6n5WKSYVY0ChQKkiaJSgQ1dZuTOgvLLrhJbERQQ4eMsv84eavHiaiceqxibJxCfHe/46', '1', '2', '2015-02-10 15:53:44', '2015-02-10 15:53:44', '0');
INSERT INTO `cards` VALUES ('4', null, '', 'frank', 'http://wx.qlogo.cn/mmopen/g3MonUZtNHkdmzicIlibx6iaFqAc56vxLSUfpb6n5WKSYVY0ChQKkiaJSgQ1dZuTOgvLLrhJbERQQ4eMsv84eavHiaiceqxibJxCfHe/46', '1', '2', '2015-02-10 15:54:59', '2015-02-10 15:54:59', '0');

-- ----------------------------
-- Table structure for `users`
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '用户ID',
  `openid` varchar(128) DEFAULT NULL COMMENT 'openid',
  `username` varchar(128) DEFAULT NULL COMMENT '用户昵称',
  `head_img` varchar(255) DEFAULT NULL COMMENT '用户头像',
  `created_at` datetime DEFAULT NULL COMMENT '创建日期',
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新日期',
  `is_deleted` tinyint(1) DEFAULT '0' COMMENT '是否删除',
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COMMENT='用户';

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('1', '', '', '', '2015-02-10 14:25:19', '2015-02-10 14:25:19', '0');
