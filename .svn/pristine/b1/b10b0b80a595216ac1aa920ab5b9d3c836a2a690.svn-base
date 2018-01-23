/*
Navicat MySQL Data Transfer

Source Server         : 个人云服
Source Server Version : 50637
Source Host           : 120.132.49.203:3306
Source Database       : xxgc

Target Server Type    : MYSQL
Target Server Version : 50637
File Encoding         : 65001

Date: 2017-12-19 13:58:58
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `xxgc_account`
-- ----------------------------
DROP TABLE IF EXISTS `xxgc_account`;
CREATE TABLE `xxgc_account` (
  `a_id` int(4) NOT NULL AUTO_INCREMENT,
  `a_mobile` char(11) NOT NULL,
  `a_name` char(20) NOT NULL,
  `a_type` tinyint(2) NOT NULL,
  `a_sex` tinyint(1) DEFAULT '0',
  `a_department_id` tinyint(4) DEFAULT '0',
  `a_expert_id` tinyint(4) DEFAULT NULL,
  `a_wechat_open_id` varchar(50) DEFAULT NULL,
  `a_nick_name` varchar(50) DEFAULT NULL,
  `a_head_img` varchar(200) DEFAULT NULL,
  `status` tinyint(2) NOT NULL DEFAULT '2',
  PRIMARY KEY (`a_id`),
  KEY `index_mobile` (`a_mobile`),
  KEY `index_type` (`a_type`),
  KEY `index_expert` (`a_expert_id`)
) ENGINE=InnoDB AUTO_INCREMENT=95 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of xxgc_account
-- ----------------------------
INSERT INTO `xxgc_account` VALUES ('17', '18428003668', '叶云婧', '1', '2', '5', null, null, null, null, '2');
INSERT INTO `xxgc_account` VALUES ('18', '17381849915', '徐光辉', '1', '1', '6', null, 'oMd5Rw-K00yE95QJnCZxPZBrRBBA', 'e58589e8be89', 'http://wx.qlogo.cn/mmopen/vi_32/cOqHzStYzAjgxjOwJicfibMVxkeOJ7hrNwPYmicVmzDOPhBLqskToYALoAcyCkEJpcVysY02OG8gbeSBpnu8QSibWw/0', '1');
INSERT INTO `xxgc_account` VALUES ('19', '13882031089', '赵朝生', '1', '1', '7', null, null, null, null, '2');
INSERT INTO `xxgc_account` VALUES ('20', '18190899802', '陈伟', '1', '1', '8', null, 'oMd5Rw0Aqdr38psdzuM8sMKh8OfI', 'e89389e59f8ee69585e9878c', 'http://wx.qlogo.cn/mmopen/vi_32/MrK1Ls34ShdTgtVFq7P38YmtalxWIyVRVv2ylQB16qUib0ViakoS6kjv91INibzgdiaTKpviccfHDSMY6S6soApBWqg/0', '1');
INSERT INTO `xxgc_account` VALUES ('21', '15982229275', '刘通', '2', '1', '26', null, 'oMd5Rw2xSzfPYU_FYhHS-YPbIYL0', 'e6b0b4e58588e7949fe38082ee858c', 'http://wx.qlogo.cn/mmopen/vi_32/PiajxSqBRaELx018o2uIbiaicsMbT3nT8ZstP4bV3oia836vpdOr6tWseUQeO1XeKNbTJF3LI5gS9ajKw4qkv57Ecg/0', '1');
INSERT INTO `xxgc_account` VALUES ('22', '13558778996', '王雪力', '2', '2', '26', null, null, null, null, '2');
INSERT INTO `xxgc_account` VALUES ('23', '13881757192', '骆勇平', '1', '1', '9', null, null, null, null, '2');
INSERT INTO `xxgc_account` VALUES ('24', '13908209927', '周婷', '2', '2', '26', null, null, null, null, '2');
INSERT INTO `xxgc_account` VALUES ('25', '13558610860', '刘江梅', '2', '2', '26', null, 'oMd5RwxDeJFEUKZRdOhCYd5vHkcE', 'e58898e5b08fe6b19f', 'http://wx.qlogo.cn/mmopen/vi_32/kHoDdV15McUjVSFTK2ApC2icRUOg0FY3N5PIHNKvanRQAIyQUUOD3lTyLIqKRA1xlVWDbZ1xEZdcZnpVqRSw78g/0', '1');
INSERT INTO `xxgc_account` VALUES ('26', '13882152967', '于兴均', '1', '1', '10', null, null, null, null, '2');
INSERT INTO `xxgc_account` VALUES ('27', '13808067454', '陶星秀', '2', '2', '26', null, null, null, null, '2');
INSERT INTO `xxgc_account` VALUES ('28', '13982078286', '周梅莉', '1', '2', '11', null, null, null, null, '2');
INSERT INTO `xxgc_account` VALUES ('29', '15196767253', '董玲', '2', '2', '26', null, null, null, null, '2');
INSERT INTO `xxgc_account` VALUES ('30', '15198260113', '柯苏娱', '2', '2', '26', null, null, null, null, '2');
INSERT INTO `xxgc_account` VALUES ('31', '18111618277', '舒家乐', '1', '1', '13', null, null, null, null, '2');
INSERT INTO `xxgc_account` VALUES ('32', '13666175247', '唐由鑫', '2', '1', '26', null, 'oMd5Rw0gDSJSIJSNggRSM_PQYYWE', 'e59490e794b1e991ab', 'http://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLxyECuhxq9G0FOI8VZWqRSz0cBuLl811Ce9TkibsKJtD0z2ctzUyiceaZX2sbNpicG8GIDjLFuwGCzw/0', '1');
INSERT INTO `xxgc_account` VALUES ('33', '18583673026', '李青', '2', '2', '26', null, 'oMd5Rw_GJvGAk1IqXTsg8cah3WOw', 'f09f8d8944616e61', 'http://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83eppsUuXCSh55yPeeiclKaeunqEhLZsDOgC51viblF2rm2CRldXiblN262X2lb0HtFHZFxRCflR0ibZYOg/0', '1');
INSERT INTO `xxgc_account` VALUES ('34', '15928118642', '郭晋玥', '1', '2', '14', null, null, null, null, '2');
INSERT INTO `xxgc_account` VALUES ('35', '18090437093', '罗能伟', '1', '1', '15', null, 'oMd5Rw3v8GmgWUzW_YRJ8oje6eiA', 'e5ae89e784b6', 'http://wx.qlogo.cn/mmopen/vi_32/GdBSn228utPpMm4icTR27wEl04qgYV9RLMAM9MJRtovdQgpiaiaU4D49huibFl5YEa59L1aJQFAcwrTzVtN4ibWjAkA/0', '1');
INSERT INTO `xxgc_account` VALUES ('36', '13550065685', '张弦', '2', '1', '26', null, 'oMd5Rw3nNpSWfFVTKZD8DAYOLEOk', 'e4be9de784b6e78388e781ab', 'http://wx.qlogo.cn/mmopen/vi_32/oXXSQuES5awT9YkzYcaonNKs6EMYFbhY5lU732VgibTNhU5EIz9Q1Q2JcribEWjHvqqUKb04Ke5Kp2Zc3pDH7I0A/0', '1');
INSERT INTO `xxgc_account` VALUES ('37', '13699069463', '唐瑞英', '1', '2', '17', null, null, null, null, '2');
INSERT INTO `xxgc_account` VALUES ('38', '18782939114', '郭金', '2', '2', '26', null, null, null, null, '2');
INSERT INTO `xxgc_account` VALUES ('39', '18683791392', '贾璐', '2', '2', '26', null, 'oMd5Rw8XhKrAKE5O_RHBcnsEmoyA', 'e6bd9eefbd9e6c75', 'http://wx.qlogo.cn/mmopen/vi_32/ZJjl8bEt5zfOR9OUeW1FYe4sDOs4opD2Xic0knaCl6njcY4htI7ibjJTiaXQODsrrxib5rY1B782CvSkJ1Vj2gNc0w/0', '1');
INSERT INTO `xxgc_account` VALUES ('40', '18144390061', '张红琴', '1', '2', '18', null, 'oMd5Rw4JDxWIqcjyrUvn01SH_K6Q', 'e6b585e697b6e58589e38080426f6e6e656e754920', 'http://wx.qlogo.cn/mmopen/vi_32/Y4euFqMr1D6wJCWaoOuwGoI6LribsefBzQBYscW69R8K3wrhhGhw982azhR6IialMxKc8aPqpk4dQOibQznnlu9rw/0', '1');
INSERT INTO `xxgc_account` VALUES ('41', '13541395487', '邓诗豪', '2', '1', '26', null, 'oMd5RwwHG4BtYZEZ8AJinlv2yGmA', '447665656e', 'http://wx.qlogo.cn/mmopen/vi_32/fyH5ycdXIpVPLbicptIq43FSnsJt1mTqZkluv8gx7ZpoYKiaYpHBLTpKD6Cf7PbVYLfmHE3kxhI0QZpibdDZnB9UQ/0', '1');
INSERT INTO `xxgc_account` VALUES ('42', '15397635115', '杨铃', '2', '2', '26', null, null, null, null, '2');
INSERT INTO `xxgc_account` VALUES ('43', '13568897878', '江波', '1', '1', '19', null, null, null, null, '2');
INSERT INTO `xxgc_account` VALUES ('44', '15828655529', '史远多', '2', '2', '26', null, null, null, null, '2');
INSERT INTO `xxgc_account` VALUES ('45', '13882201515', '邹巍', '2', '1', '26', null, 'oMd5Rw7X7bpGKlQ9ZJubFG4NBbtw', 'e79086e8aebae6b3a2e584bfe8b9a6', 'http://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83erXvRib1fKvpJUAXubTibWLMObOv1XhiaN6FyiaJbV0OWqS5y1jo9TJibKp9drmDdHFN2QuibiabbibDsIxAA/0', '1');
INSERT INTO `xxgc_account` VALUES ('46', '13679091557', '周利', '1', '2', '27', null, 'oMd5Rw0zb-205lw6LvK8P9pU9Cdw', 'e7baa6e5ae9af09f8d92', 'http://wx.qlogo.cn/mmopen/vi_32/icibCI2Mc6v7tPdqvW2r4Jib8gNOVxHQ9oZhiajMmubjBlvoPaapPOIvMaKLt0QdC1rTbnOMSkbGT3eKmIsK2stKAw/0', '1');
INSERT INTO `xxgc_account` VALUES ('47', '18615753531', '王薇', '2', '2', '26', null, 'oMd5Rw2jLS5UlmtIe_CsXi4YEqik', '56', 'http://wx.qlogo.cn/mmopen/vi_32/jdcEibbu6EicF5exxwEe1mWTEzKgBPLRnVxiabyMeEAIOticaFaIkACjSLwJwLuCMk1SHdx4CBQuL94fMLyNG2nicCw/0', '1');
INSERT INTO `xxgc_account` VALUES ('48', '13882052289', '曹琳', '1', '2', '20', null, 'oMd5Rw002XUSggniE_WFKpeIH0Iw', 'f09f9293e78caae78caaf09f9293', 'http://wx.qlogo.cn/mmopen/vi_32/mbOToKXibw8GTGGyHWuwtHCn4XNRAR0ubdhxGppWgqsqnMY8eYUBWiagBwEKwKJOTbvEE40Fz8g4piaQfNUwFaBDA/0', '1');
INSERT INTO `xxgc_account` VALUES ('49', '18227108733', '罗敏', '2', '2', '26', null, null, null, null, '2');
INSERT INTO `xxgc_account` VALUES ('50', '13908098614', '张 翼', '1', '2', '23', null, null, null, null, '2');
INSERT INTO `xxgc_account` VALUES ('51', '13881916711', '孙璨', '2', '1', '26', null, null, null, null, '2');
INSERT INTO `xxgc_account` VALUES ('52', '17708053564', '梁佳柱', '2', '1', '26', null, 'oMd5Rw0UjgTJH1DrFWGyWEHKo9rA', 'e5a58be69697efbc81e5b08fe99d92e5b9b4efbc81', 'http://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83epX5ic3xUUlPOJCKJHpVX0Eoot4QrDn9K5Iq4msaoEgymtQcvOTs8hm62weKKQrKsYVv3THnUjUI4A/0', '1');
INSERT INTO `xxgc_account` VALUES ('53', '13980479986', '王溦玮', '1', '2', '24', null, null, null, null, '2');
INSERT INTO `xxgc_account` VALUES ('54', '13880873321', '李一凡', '1', '1', '28', null, 'oMd5Rwwd2v_si1iC3AMdBQ1wbrlE', 'e69d8ee4b880e587a1', 'http://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJSvOhfrsWluZTAsiahpNfmwYnnf4u6znu1OpGkco8rfRmIIMx6yibjibwxf5KkQXE6xoppLbrO9xrSw/0', '1');
INSERT INTO `xxgc_account` VALUES ('55', '17711326375', '任江波', '1', '1', '2', null, null, null, null, '2');
INSERT INTO `xxgc_account` VALUES ('56', '13258370880', '刘露', '1', '2', '16', null, null, null, null, '2');
INSERT INTO `xxgc_account` VALUES ('57', '13730664956', '肖栋', '1', '1', '19', null, null, null, null, '2');
INSERT INTO `xxgc_account` VALUES ('58', '18628062001', '相关李想', '3', '1', '26', null, 'oMd5Rwybfz-4ItebCjoKGEsPkNUM', 'e9a38ee4b98be683b3', 'http://wx.qlogo.cn/mmopen/vi_32/cKuFQO8UEyL1pdDIHW8kFjZsUicqy2UukHBm5QU2bIic7wp4ydt2QKfoYU5IvyQIJhAElL61xyuwAM0CtNkF2LoA/0', '1');
INSERT INTO `xxgc_account` VALUES ('59', '18111247718', '专家李小', '4', '1', '0', '3', 'oMd5Rw-P3AIztVPmphR8bD5mwmuk', 'e9a38ef09f90b1e683b3', 'http://wx.qlogo.cn/mmopen/vi_32/9w6luUaFR1Mgjy8eyWnd385Owcfy2VNw9Lmp2Q6IoAe0vlHRAKCWVczvjic82jyEPFHHAXbvqibmHaxoXUkKE6Fw/0', '1');
INSERT INTO `xxgc_account` VALUES ('60', '13982003299', '姚明达', '1', '1', '26', null, 'oMd5RwzXNkghgC8h4Ta4eUf3V6OU', 'e5a4a7e5a4a7', 'http://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKw8ictgYcqf6gUf01koia1qk4917xJVdeJHrmPBs2VkibcUhkEXjVib7V8jGDKc4RdsxuMkjqpQ4vFvw/0', '1');
INSERT INTO `xxgc_account` VALUES ('61', '13540773966', '任娜', '1', '2', '26', null, 'oMd5Rwy0d2yFjKfNPTJjXKzXk2SQ', 'e5a4a7e5ae9defbc8ce5a4a9e5a4a9e8a781efbc81', 'http://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83eob3po3jUsyNMMmUYTj9Z46icey9PoIqbDOdN19da5aJjtfLI5o21BLvA7Q6wlDNzbziaWbkec1EbkA/0', '1');
INSERT INTO `xxgc_account` VALUES ('62', '15881114017', '张惠', '1', '2', '26', null, null, null, null, '1');
INSERT INTO `xxgc_account` VALUES ('63', '13688073506', '谢松', '1', '1', '26', null, null, null, null, '1');
INSERT INTO `xxgc_account` VALUES ('64', '18011463062', '邱永静', '1', '2', '26', null, null, null, null, '1');
INSERT INTO `xxgc_account` VALUES ('65', '18428333400', '汪飘', '1', '2', '26', null, null, null, null, '1');
INSERT INTO `xxgc_account` VALUES ('66', '15528209570', '王灿', '1', '1', '26', null, null, null, null, '1');
INSERT INTO `xxgc_account` VALUES ('67', '15884521914', '白帆', '1', '1', '26', null, null, null, null, '1');
INSERT INTO `xxgc_account` VALUES ('68', '13408461691', '畅欢', '2', '2', '26', null, null, null, null, '1');
INSERT INTO `xxgc_account` VALUES ('69', '13982003780', '施燕', '1', '2', '21', null, null, null, null, '1');
INSERT INTO `xxgc_account` VALUES ('70', '18782257677', '柳强', '2', '1', '26', null, null, null, null, '1');
INSERT INTO `xxgc_account` VALUES ('71', '18678933313', '刘永光', '1', '1', '9', null, null, null, null, '1');
INSERT INTO `xxgc_account` VALUES ('72', '18328364678', '王玲', '3', '2', '26', null, null, null, null, '1');
INSERT INTO `xxgc_account` VALUES ('73', '18980466498', '陈曦', '1', '2', '26', null, null, null, null, '1');
INSERT INTO `xxgc_account` VALUES ('74', '15882318890', '徐珍珍', '1', '2', '26', null, null, null, null, '1');
INSERT INTO `xxgc_account` VALUES ('75', '13982265716', '徐颖', '2', '2', '26', null, null, null, null, '1');
INSERT INTO `xxgc_account` VALUES ('76', '13628066790', '廖睿', '2', '1', '26', null, null, null, null, '1');
INSERT INTO `xxgc_account` VALUES ('77', '13880637741', '段莹莹', '2', '2', '26', null, null, null, null, '1');
INSERT INTO `xxgc_account` VALUES ('78', '13980519393', '罗艳丽', '2', '2', '26', null, null, null, null, '1');
INSERT INTO `xxgc_account` VALUES ('79', '13881812516', '谢爽', '2', '2', '26', null, null, null, null, '1');
INSERT INTO `xxgc_account` VALUES ('80', '13880777189', '蒲天乐', '2', '1', '26', null, null, null, null, '1');
INSERT INTO `xxgc_account` VALUES ('81', '13908090919', '舒婧', '1', '2', '26', null, null, null, null, '1');
INSERT INTO `xxgc_account` VALUES ('82', '13881771778', '王林琳', '1', '2', '26', null, null, null, null, '1');
INSERT INTO `xxgc_account` VALUES ('83', '13981889030', '冯小东', '2', '1', '26', null, null, null, null, '1');
INSERT INTO `xxgc_account` VALUES ('84', '13882133953', '谢晶晶', '2', '2', '26', null, null, null, null, '1');
INSERT INTO `xxgc_account` VALUES ('85', '13688011055', '周兰', '2', '2', '26', null, null, null, null, '1');
INSERT INTO `xxgc_account` VALUES ('86', '13982295074', '何云娇', '2', '2', '26', null, null, null, null, '1');
INSERT INTO `xxgc_account` VALUES ('87', '13982169403', '吕刚', '2', '1', '26', null, null, null, null, '1');
INSERT INTO `xxgc_account` VALUES ('88', '13540043228', '张学玉', '3', '2', '26', null, null, null, null, '1');
INSERT INTO `xxgc_account` VALUES ('89', '13981839728', '刘婕', '3', '2', '26', null, null, null, null, '1');
INSERT INTO `xxgc_account` VALUES ('90', '13980951550', '尹婉琎', '3', '2', '26', null, null, null, null, '1');
INSERT INTO `xxgc_account` VALUES ('91', '18008094733', '袁海容', '3', '2', '26', null, null, null, null, '1');
INSERT INTO `xxgc_account` VALUES ('92', '15828240125', '郭一辛', '3', '1', '26', null, null, null, null, '1');
INSERT INTO `xxgc_account` VALUES ('93', '18280397377', '李志禺', '3', '1', '26', null, null, null, null, '1');
INSERT INTO `xxgc_account` VALUES ('94', '15208181986', '杨橙', '3', '2', '26', null, null, null, null, '1');

-- ----------------------------
-- Table structure for `xxgc_activity_msg`
-- ----------------------------
DROP TABLE IF EXISTS `xxgc_activity_msg`;
CREATE TABLE `xxgc_activity_msg` (
  `am_id` int(4) NOT NULL AUTO_INCREMENT,
  `am_create_time` int(11) NOT NULL,
  `am_type` tinyint(2) DEFAULT '0',
  `am_receiver` char(20) NOT NULL,
  `am_content` varchar(200) NOT NULL,
  `am_link` varchar(100) DEFAULT 'null',
  PRIMARY KEY (`am_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of xxgc_activity_msg
-- ----------------------------
INSERT INTO `xxgc_activity_msg` VALUES ('1', '1512652270', '1', '18628062001', 'tong', 'http://www.baidu.com');

-- ----------------------------
-- Table structure for `xxgc_asset`
-- ----------------------------
DROP TABLE IF EXISTS `xxgc_asset`;
CREATE TABLE `xxgc_asset` (
  `aid` bigint(20) NOT NULL AUTO_INCREMENT,
  `uid` int(11) NOT NULL DEFAULT '0' COMMENT '用户 id',
  `key` varchar(50) NOT NULL COMMENT '资源 key',
  `filename` varchar(50) DEFAULT NULL COMMENT '文件名',
  `filesize` int(11) DEFAULT NULL COMMENT '文件大小,单位Byte',
  `filepath` varchar(200) NOT NULL COMMENT '文件路径，相对于 upload 目录，可以为 url',
  `uploadtime` int(11) NOT NULL COMMENT '上传时间',
  `status` int(2) NOT NULL DEFAULT '1' COMMENT '状态，1：可用，0：删除，不可用',
  `meta` text COMMENT '其它详细信息，JSON格式',
  `suffix` varchar(50) DEFAULT NULL COMMENT '文件后缀名，不包括点',
  `download_times` int(11) NOT NULL DEFAULT '0' COMMENT '下载次数',
  PRIMARY KEY (`aid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='资源表';

-- ----------------------------
-- Records of xxgc_asset
-- ----------------------------

-- ----------------------------
-- Table structure for `xxgc_auth_access`
-- ----------------------------
DROP TABLE IF EXISTS `xxgc_auth_access`;
CREATE TABLE `xxgc_auth_access` (
  `role_id` mediumint(8) unsigned NOT NULL COMMENT '角色',
  `rule_name` varchar(255) NOT NULL COMMENT '规则唯一英文标识,全小写',
  `type` varchar(30) DEFAULT NULL COMMENT '权限规则分类，请加应用前缀,如admin_',
  KEY `role_id` (`role_id`),
  KEY `rule_name` (`rule_name`) USING BTREE
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='权限授权表';

-- ----------------------------
-- Records of xxgc_auth_access
-- ----------------------------
INSERT INTO `xxgc_auth_access` VALUES ('2', 'admin/account/expert_account_index', 'admin_url');
INSERT INTO `xxgc_auth_access` VALUES ('2', 'admin/user/cancelban', 'admin_url');
INSERT INTO `xxgc_auth_access` VALUES ('2', 'admin/user/ban', 'admin_url');
INSERT INTO `xxgc_auth_access` VALUES ('2', 'admin/user/add_post', 'admin_url');
INSERT INTO `xxgc_auth_access` VALUES ('2', 'admin/user/add', 'admin_url');
INSERT INTO `xxgc_auth_access` VALUES ('2', 'admin/user/edit_post', 'admin_url');
INSERT INTO `xxgc_auth_access` VALUES ('2', 'admin/user/edit', 'admin_url');
INSERT INTO `xxgc_auth_access` VALUES ('2', 'admin/user/delete', 'admin_url');
INSERT INTO `xxgc_auth_access` VALUES ('2', 'admin/user/index', 'admin_url');
INSERT INTO `xxgc_auth_access` VALUES ('2', 'admin/rbac/roleadd_post', 'admin_url');
INSERT INTO `xxgc_auth_access` VALUES ('2', 'admin/rbac/roleadd', 'admin_url');
INSERT INTO `xxgc_auth_access` VALUES ('2', 'admin/rbac/roledelete', 'admin_url');
INSERT INTO `xxgc_auth_access` VALUES ('2', 'admin/rbac/roleedit_post', 'admin_url');
INSERT INTO `xxgc_auth_access` VALUES ('2', 'admin/rbac/roleedit', 'admin_url');
INSERT INTO `xxgc_auth_access` VALUES ('2', 'admin/rbac/authorize_post', 'admin_url');
INSERT INTO `xxgc_auth_access` VALUES ('2', 'admin/rbac/authorize', 'admin_url');
INSERT INTO `xxgc_auth_access` VALUES ('2', 'admin/rbac/member', 'admin_url');
INSERT INTO `xxgc_auth_access` VALUES ('2', 'admin/rbac/index', 'admin_url');
INSERT INTO `xxgc_auth_access` VALUES ('2', 'user/indexadmin/default', 'admin_url');
INSERT INTO `xxgc_auth_access` VALUES ('2', 'admin/account/contact_account_index', 'admin_url');
INSERT INTO `xxgc_auth_access` VALUES ('2', 'admin/account/county_account_index', 'admin_url');
INSERT INTO `xxgc_auth_access` VALUES ('2', 'admin/account/city_account_index', 'admin_url');
INSERT INTO `xxgc_auth_access` VALUES ('2', 'admin/index/index', 'admin_url');
INSERT INTO `xxgc_auth_access` VALUES ('2', 'admin/activity/activity_msg', 'admin_url');
INSERT INTO `xxgc_auth_access` VALUES ('2', 'admin/activity/msg_list', 'admin_url');
INSERT INTO `xxgc_auth_access` VALUES ('2', 'admin/statistics/index', 'admin_url');
INSERT INTO `xxgc_auth_access` VALUES ('2', 'admin/statistics/consult_task_type', 'admin_url');
INSERT INTO `xxgc_auth_access` VALUES ('2', 'admin/statistics/account_type', 'admin_url');
INSERT INTO `xxgc_auth_access` VALUES ('2', 'admin/statistics/month_consult_task', 'admin_url');
INSERT INTO `xxgc_auth_access` VALUES ('2', 'admin/statistics/expert_type', 'admin_url');
INSERT INTO `xxgc_auth_access` VALUES ('2', 'admin/task/index', 'admin_url');
INSERT INTO `xxgc_auth_access` VALUES ('2', 'admin/task/task_list', 'admin_url');

-- ----------------------------
-- Table structure for `xxgc_auth_rule`
-- ----------------------------
DROP TABLE IF EXISTS `xxgc_auth_rule`;
CREATE TABLE `xxgc_auth_rule` (
  `id` mediumint(8) unsigned NOT NULL AUTO_INCREMENT COMMENT '规则id,自增主键',
  `module` varchar(20) NOT NULL COMMENT '规则所属module',
  `type` varchar(30) NOT NULL DEFAULT '1' COMMENT '权限规则分类，请加应用前缀,如admin_',
  `name` varchar(255) NOT NULL DEFAULT '' COMMENT '规则唯一英文标识,全小写',
  `param` varchar(255) DEFAULT NULL COMMENT '额外url参数',
  `title` varchar(20) NOT NULL DEFAULT '' COMMENT '规则中文描述',
  `status` tinyint(1) NOT NULL DEFAULT '1' COMMENT '是否有效(0:无效,1:有效)',
  `condition` varchar(300) NOT NULL DEFAULT '' COMMENT '规则附加条件',
  PRIMARY KEY (`id`),
  KEY `module` (`module`,`status`,`type`)
) ENGINE=MyISAM AUTO_INCREMENT=223 DEFAULT CHARSET=utf8 COMMENT='权限规则表';

-- ----------------------------
-- Records of xxgc_auth_rule
-- ----------------------------
INSERT INTO `xxgc_auth_rule` VALUES ('1', 'Admin', 'admin_url', 'admin/content/default', null, '内容管理', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('2', 'Api', 'admin_url', 'api/guestbookadmin/index', null, '所有留言', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('3', 'Api', 'admin_url', 'api/guestbookadmin/delete', null, '删除网站留言', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('4', 'Comment', 'admin_url', 'comment/commentadmin/index', null, '评论管理', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('5', 'Comment', 'admin_url', 'comment/commentadmin/delete', null, '删除评论', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('6', 'Comment', 'admin_url', 'comment/commentadmin/check', null, '评论审核', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('7', 'Portal', 'admin_url', 'portal/adminpost/index', null, '文章管理', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('8', 'Portal', 'admin_url', 'portal/adminpost/listorders', null, '文章排序', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('9', 'Portal', 'admin_url', 'portal/adminpost/top', null, '文章置顶', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('10', 'Portal', 'admin_url', 'portal/adminpost/recommend', null, '文章推荐', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('11', 'Portal', 'admin_url', 'portal/adminpost/move', null, '批量移动', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('12', 'Portal', 'admin_url', 'portal/adminpost/check', null, '文章审核', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('13', 'Portal', 'admin_url', 'portal/adminpost/delete', null, '删除文章', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('14', 'Portal', 'admin_url', 'portal/adminpost/edit', null, '编辑文章', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('15', 'Portal', 'admin_url', 'portal/adminpost/edit_post', null, '提交编辑', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('16', 'Portal', 'admin_url', 'portal/adminpost/add', null, '添加文章', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('17', 'Portal', 'admin_url', 'portal/adminpost/add_post', null, '提交添加', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('18', 'Portal', 'admin_url', 'portal/adminterm/index', null, '分类管理', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('19', 'Portal', 'admin_url', 'portal/adminterm/listorders', null, '文章分类排序', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('20', 'Portal', 'admin_url', 'portal/adminterm/delete', null, '删除分类', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('21', 'Portal', 'admin_url', 'portal/adminterm/edit', null, '编辑分类', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('22', 'Portal', 'admin_url', 'portal/adminterm/edit_post', null, '提交编辑', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('23', 'Portal', 'admin_url', 'portal/adminterm/add', null, '添加分类', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('24', 'Portal', 'admin_url', 'portal/adminterm/add_post', null, '提交添加', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('25', 'Portal', 'admin_url', 'portal/adminpage/index', null, '页面管理', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('26', 'Portal', 'admin_url', 'portal/adminpage/listorders', null, '页面排序', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('27', 'Portal', 'admin_url', 'portal/adminpage/delete', null, '删除页面', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('28', 'Portal', 'admin_url', 'portal/adminpage/edit', null, '编辑页面', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('29', 'Portal', 'admin_url', 'portal/adminpage/edit_post', null, '提交编辑', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('30', 'Portal', 'admin_url', 'portal/adminpage/add', null, '添加页面', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('31', 'Portal', 'admin_url', 'portal/adminpage/add_post', null, '提交添加', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('32', 'Admin', 'admin_url', 'admin/recycle/default', null, '回收站', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('33', 'Portal', 'admin_url', 'portal/adminpost/recyclebin', null, '文章回收', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('34', 'Portal', 'admin_url', 'portal/adminpost/restore', null, '文章还原', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('35', 'Portal', 'admin_url', 'portal/adminpost/clean', null, '彻底删除', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('36', 'Portal', 'admin_url', 'portal/adminpage/recyclebin', null, '页面回收', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('37', 'Portal', 'admin_url', 'portal/adminpage/clean', null, '彻底删除', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('38', 'Portal', 'admin_url', 'portal/adminpage/restore', null, '页面还原', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('39', 'Admin', 'admin_url', 'admin/extension/default', null, '扩展工具', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('40', 'Admin', 'admin_url', 'admin/backup/default', null, '备份管理', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('41', 'Admin', 'admin_url', 'admin/backup/restore', null, '数据还原', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('42', 'Admin', 'admin_url', 'admin/backup/index', null, '数据备份', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('43', 'Admin', 'admin_url', 'admin/backup/index_post', null, '提交数据备份', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('44', 'Admin', 'admin_url', 'admin/backup/download', null, '下载备份', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('45', 'Admin', 'admin_url', 'admin/backup/del_backup', null, '删除备份', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('46', 'Admin', 'admin_url', 'admin/backup/import', null, '数据备份导入', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('47', 'Admin', 'admin_url', 'admin/plugin/index', null, '插件管理', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('48', 'Admin', 'admin_url', 'admin/plugin/toggle', null, '插件启用切换', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('49', 'Admin', 'admin_url', 'admin/plugin/setting', null, '插件设置', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('50', 'Admin', 'admin_url', 'admin/plugin/setting_post', null, '插件设置提交', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('51', 'Admin', 'admin_url', 'admin/plugin/install', null, '插件安装', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('52', 'Admin', 'admin_url', 'admin/plugin/uninstall', null, '插件卸载', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('53', 'Admin', 'admin_url', 'admin/slide/default', null, '幻灯片', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('54', 'Admin', 'admin_url', 'admin/slide/index', null, '幻灯片管理', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('55', 'Admin', 'admin_url', 'admin/slide/listorders', null, '幻灯片排序', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('56', 'Admin', 'admin_url', 'admin/slide/toggle', null, '幻灯片显示切换', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('57', 'Admin', 'admin_url', 'admin/slide/delete', null, '删除幻灯片', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('58', 'Admin', 'admin_url', 'admin/slide/edit', null, '编辑幻灯片', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('59', 'Admin', 'admin_url', 'admin/slide/edit_post', null, '提交编辑', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('60', 'Admin', 'admin_url', 'admin/slide/add', null, '添加幻灯片', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('61', 'Admin', 'admin_url', 'admin/slide/add_post', null, '提交添加', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('62', 'Admin', 'admin_url', 'admin/slidecat/index', null, '幻灯片分类', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('63', 'Admin', 'admin_url', 'admin/slidecat/delete', null, '删除分类', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('64', 'Admin', 'admin_url', 'admin/slidecat/edit', null, '编辑分类', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('65', 'Admin', 'admin_url', 'admin/slidecat/edit_post', null, '提交编辑', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('66', 'Admin', 'admin_url', 'admin/slidecat/add', null, '添加分类', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('67', 'Admin', 'admin_url', 'admin/slidecat/add_post', null, '提交添加', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('68', 'Admin', 'admin_url', 'admin/ad/index', null, '网站广告', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('69', 'Admin', 'admin_url', 'admin/ad/toggle', null, '广告显示切换', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('70', 'Admin', 'admin_url', 'admin/ad/delete', null, '删除广告', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('71', 'Admin', 'admin_url', 'admin/ad/edit', null, '编辑广告', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('72', 'Admin', 'admin_url', 'admin/ad/edit_post', null, '提交编辑', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('73', 'Admin', 'admin_url', 'admin/ad/add', null, '添加广告', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('74', 'Admin', 'admin_url', 'admin/ad/add_post', null, '提交添加', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('75', 'Admin', 'admin_url', 'admin/link/index', null, '友情链接', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('76', 'Admin', 'admin_url', 'admin/link/listorders', null, '友情链接排序', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('77', 'Admin', 'admin_url', 'admin/link/toggle', null, '友链显示切换', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('78', 'Admin', 'admin_url', 'admin/link/delete', null, '删除友情链接', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('79', 'Admin', 'admin_url', 'admin/link/edit', null, '编辑友情链接', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('80', 'Admin', 'admin_url', 'admin/link/edit_post', null, '提交编辑', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('81', 'Admin', 'admin_url', 'admin/link/add', null, '添加友情链接', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('82', 'Admin', 'admin_url', 'admin/link/add_post', null, '提交添加', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('83', 'Api', 'admin_url', 'api/oauthadmin/setting', null, '第三方登陆', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('84', 'Api', 'admin_url', 'api/oauthadmin/setting_post', null, '提交设置', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('85', 'Admin', 'admin_url', 'admin/menu/default', null, '菜单管理', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('86', 'Admin', 'admin_url', 'admin/navcat/default1', null, '前台菜单', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('87', 'Admin', 'admin_url', 'admin/nav/index', null, '菜单管理', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('88', 'Admin', 'admin_url', 'admin/nav/listorders', null, '前台导航排序', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('89', 'Admin', 'admin_url', 'admin/nav/delete', null, '删除菜单', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('90', 'Admin', 'admin_url', 'admin/nav/edit', null, '编辑菜单', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('91', 'Admin', 'admin_url', 'admin/nav/edit_post', null, '提交编辑', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('92', 'Admin', 'admin_url', 'admin/nav/add', null, '添加菜单', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('93', 'Admin', 'admin_url', 'admin/nav/add_post', null, '提交添加', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('94', 'Admin', 'admin_url', 'admin/navcat/index', null, '菜单分类', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('95', 'Admin', 'admin_url', 'admin/navcat/delete', null, '删除分类', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('96', 'Admin', 'admin_url', 'admin/navcat/edit', null, '编辑分类', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('97', 'Admin', 'admin_url', 'admin/navcat/edit_post', null, '提交编辑', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('98', 'Admin', 'admin_url', 'admin/navcat/add', null, '添加分类', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('99', 'Admin', 'admin_url', 'admin/navcat/add_post', null, '提交添加', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('100', 'Admin', 'admin_url', 'admin/menu/index', null, '后台菜单', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('101', 'Admin', 'admin_url', 'admin/menu/add', null, '添加菜单', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('102', 'Admin', 'admin_url', 'admin/menu/add_post', null, '提交添加', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('103', 'Admin', 'admin_url', 'admin/menu/listorders', null, '后台菜单排序', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('104', 'Admin', 'admin_url', 'admin/menu/export_menu', null, '菜单备份', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('105', 'Admin', 'admin_url', 'admin/menu/edit', null, '编辑菜单', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('106', 'Admin', 'admin_url', 'admin/menu/edit_post', null, '提交编辑', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('107', 'Admin', 'admin_url', 'admin/menu/delete', null, '删除菜单', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('108', 'Admin', 'admin_url', 'admin/menu/lists', null, '所有菜单', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('109', 'Admin', 'admin_url', 'admin/setting/default', null, '系统管理', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('110', 'Admin', 'admin_url', 'admin/setting/userdefault', null, '个人信息', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('111', 'Admin', 'admin_url', 'admin/user/userinfo', null, '修改信息', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('112', 'Admin', 'admin_url', 'admin/user/userinfo_post', null, '修改信息提交', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('113', 'Admin', 'admin_url', 'admin/setting/password', null, '修改密码', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('114', 'Admin', 'admin_url', 'admin/setting/password_post', null, '提交修改', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('115', 'Admin', 'admin_url', 'admin/setting/site', null, '网站信息', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('116', 'Admin', 'admin_url', 'admin/setting/site_post', null, '提交修改', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('117', 'Admin', 'admin_url', 'admin/route/index', null, '路由列表', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('118', 'Admin', 'admin_url', 'admin/route/add', null, '路由添加', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('119', 'Admin', 'admin_url', 'admin/route/add_post', null, '路由添加提交', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('120', 'Admin', 'admin_url', 'admin/route/edit', null, '路由编辑', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('121', 'Admin', 'admin_url', 'admin/route/edit_post', null, '路由编辑提交', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('122', 'Admin', 'admin_url', 'admin/route/delete', null, '路由删除', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('123', 'Admin', 'admin_url', 'admin/route/ban', null, '路由禁止', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('124', 'Admin', 'admin_url', 'admin/route/open', null, '路由启用', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('125', 'Admin', 'admin_url', 'admin/route/listorders', null, '路由排序', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('126', 'Admin', 'admin_url', 'admin/mailer/default', null, '邮箱配置', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('127', 'Admin', 'admin_url', 'admin/mailer/index', null, 'SMTP配置', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('128', 'Admin', 'admin_url', 'admin/mailer/index_post', null, '提交配置', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('129', 'Admin', 'admin_url', 'admin/mailer/active', null, '注册邮件模板', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('130', 'Admin', 'admin_url', 'admin/mailer/active_post', null, '提交模板', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('131', 'Admin', 'admin_url', 'admin/setting/clearcache', null, '清除缓存', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('132', 'User', 'admin_url', 'user/indexadmin/default', null, '权限管理', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('133', 'User', 'admin_url', 'user/indexadmin/default1', null, '用户组', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('134', 'User', 'admin_url', 'user/indexadmin/index', null, '本站用户', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('135', 'User', 'admin_url', 'user/indexadmin/ban', null, '拉黑会员', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('136', 'User', 'admin_url', 'user/indexadmin/cancelban', null, '启用会员', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('137', 'User', 'admin_url', 'user/oauthadmin/index', null, '第三方用户', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('138', 'User', 'admin_url', 'user/oauthadmin/delete', null, '第三方用户解绑', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('139', 'User', 'admin_url', 'user/indexadmin/default3', null, '管理组', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('140', 'Admin', 'admin_url', 'admin/rbac/index', null, '角色管理', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('141', 'Admin', 'admin_url', 'admin/rbac/member', null, '成员管理', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('142', 'Admin', 'admin_url', 'admin/rbac/authorize', null, '权限设置', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('143', 'Admin', 'admin_url', 'admin/rbac/authorize_post', null, '提交设置', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('144', 'Admin', 'admin_url', 'admin/rbac/roleedit', null, '编辑角色', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('145', 'Admin', 'admin_url', 'admin/rbac/roleedit_post', null, '提交编辑', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('146', 'Admin', 'admin_url', 'admin/rbac/roledelete', null, '删除角色', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('147', 'Admin', 'admin_url', 'admin/rbac/roleadd', null, '添加角色', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('148', 'Admin', 'admin_url', 'admin/rbac/roleadd_post', null, '提交添加', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('149', 'Admin', 'admin_url', 'admin/user/index', null, '系统管理员', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('150', 'Admin', 'admin_url', 'admin/user/delete', null, '删除管理员', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('151', 'Admin', 'admin_url', 'admin/user/edit', null, '管理员编辑', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('152', 'Admin', 'admin_url', 'admin/user/edit_post', null, '编辑提交', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('153', 'Admin', 'admin_url', 'admin/user/add', null, '管理员添加', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('154', 'Admin', 'admin_url', 'admin/user/add_post', null, '添加提交', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('155', 'Admin', 'admin_url', 'admin/plugin/update', null, '插件更新', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('156', 'Admin', 'admin_url', 'admin/storage/index', null, '文件存储', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('157', 'Admin', 'admin_url', 'admin/storage/setting_post', null, '文件存储设置提交', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('158', 'Admin', 'admin_url', 'admin/slide/ban', null, '禁用幻灯片', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('159', 'Admin', 'admin_url', 'admin/slide/cancelban', null, '启用幻灯片', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('160', 'Admin', 'admin_url', 'admin/user/ban', null, '禁用管理员', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('161', 'Admin', 'admin_url', 'admin/user/cancelban', null, '启用管理员', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('162', 'Demo', 'admin_url', 'demo/adminindex/index', null, '', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('163', 'Demo', 'admin_url', 'demo/adminindex/last', null, '', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('166', 'Admin', 'admin_url', 'admin/mailer/test', null, '测试邮件', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('167', 'Admin', 'admin_url', 'admin/setting/upload', null, '上传设置', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('168', 'Admin', 'admin_url', 'admin/setting/upload_post', null, '上传设置提交', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('169', 'Portal', 'admin_url', 'portal/adminpost/copy', null, '文章批量复制', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('170', 'Admin', 'admin_url', 'admin/menu/backup_menu', null, '备份菜单', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('171', 'Admin', 'admin_url', 'admin/menu/export_menu_lang', null, '导出后台菜单多语言包', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('172', 'Admin', 'admin_url', 'admin/menu/restore_menu', null, '还原菜单', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('173', 'Admin', 'admin_url', 'admin/menu/getactions', null, '导入新菜单', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('174', 'Admin', 'admin_url', 'admin/goods/index', null, '商品管理', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('175', 'Admin', 'admin_url', 'admin/order/index', null, '订单管理', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('176', 'Admin', 'admin_url', 'admin/voucher/voucher_list', null, '优惠券管理', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('177', 'Admin', 'admin_url', 'admin/member/member_list', null, '用户信息', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('178', 'Admin', 'admin_url', 'admin/goods/goods_spec', null, '商品规格', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('179', 'Admin', 'admin_url', 'admin/goods/goods_list', null, '商品列表', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('180', 'Admin', 'admin_url', 'admin/fooddelivery/delivery_list', null, '送餐配置', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('181', 'Admin', 'admin_url', 'admin/fooddelivery/add_delivery', null, '添加送餐点', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('182', 'Admin', 'admin_url', 'admin/fooddelivery/edit_meal_place', null, '编辑送餐地点', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('183', 'Admin', 'admin_url', 'admin/fooddelivery/del_tak_place_post', null, '删除取餐点', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('184', 'Admin', 'admin_url', 'admin/fooddelivery/add_meal_place', null, '添加取餐点', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('185', 'Admin', 'admin_url', 'admin/fooddelivery/add_meal_place_post', null, '取餐点post方法', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('186', 'Admin', 'admin_url', 'admin/voucher/add_voucher', null, '添加优惠券', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('187', 'Admin', 'admin_url', 'admin/voucher/bind_goods_list', null, '指定商品', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('188', 'Admin', 'admin_url', 'admin/voucher/get_voucher_qr_img', null, '查看二维码', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('189', 'Admin', 'admin_url', 'admin/voucher/add_voucher_post', null, '添加优惠券post方法', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('190', 'Admin', 'admin_url', 'admin/goods/del_spec_post', null, '删除商品规格', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('191', 'Admin', 'admin_url', 'admin/goods/add_spec_post', null, '添加份量', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('192', 'Admin', 'admin_url', 'admin/goods/add_goods', null, '添加商品', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('193', 'Admin', 'admin_url', 'admin/goods/add_goods_post', null, '添加商品post方法', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('194', 'Admin', 'admin_url', 'admin/goods/goods_info', null, '查看spu商品信息', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('195', 'Admin', 'admin_url', 'admin/goods/edit_goods_spu', null, '编辑spu商品信息', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('196', 'Admin', 'admin_url', 'admin/goods/edit_sku', null, '编辑sku商品', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('197', 'Admin', 'admin_url', 'admin/goods/recommend_goods', null, '添加编辑推荐商品', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('198', 'Admin', 'admin_url', 'admin/goods/get_recommend_list', null, '查看推荐商品', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('199', 'Admin', 'admin_url', 'admin/goods/add_recommend_goods_post', null, '选中推荐商品', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('200', 'Admin', 'admin_url', 'admin/goods/edit_sku_post', null, '修改sku商品方法', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('201', 'Admin', 'admin_url', 'admin/goods/edit_goods_spu_post', null, '编辑spu商品post方法', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('202', 'Admin', 'admin_url', 'admin/order/change_order_state', null, '变更订单状态', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('203', 'Admin', 'admin_url', 'admin/order/order_info', null, '查看订单详情', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('204', 'Admin', 'admin_url', 'admin/order/export_today_order_excel', null, '当日订单下载', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('205', 'Admin', 'admin_url', 'admin/order/export_today_amount', null, '当日配送金额下载', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('206', 'Admin', 'admin_url', 'admin/order/change_order_state_post', null, '变更订单状态post方法', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('207', 'Admin', 'admin_url', 'admin/order/batch_change_order_state', null, '批量变更订单状态', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('208', 'Admin', 'admin_url', 'admin/fooddelivery/add_delivery_post', null, '添加送餐点post方法', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('209', 'Admin', 'admin_url', 'admin/index/index', null, '账户管理', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('210', 'Admin', 'admin_url', 'admin/account/city_account_index', null, '市级账户', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('211', 'Admin', 'admin_url', 'admin/account/county_account_index', null, '区县账户', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('212', 'Admin', 'admin_url', 'admin/account/contact_account_index', null, '相关账户', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('213', 'Admin', 'admin_url', 'admin/activity/activity_msg', null, '活动通知管理', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('214', 'Admin', 'admin_url', 'admin/activity/msg_list', null, '通知列表', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('215', 'Admin', 'admin_url', 'admin/account/expert_account_index', null, '专家账户', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('216', 'Admin', 'admin_url', 'admin/statistics/index', null, '统计管理', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('217', 'Admin', 'admin_url', 'admin/task/index', null, '任务管理', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('218', 'Admin', 'admin_url', 'admin/statistics/consult_task_type', null, '任务类型统计', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('219', 'Admin', 'admin_url', 'admin/statistics/account_type', null, '账户类型', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('220', 'Admin', 'admin_url', 'admin/statistics/month_consult_task', null, '月度任务统计', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('221', 'Admin', 'admin_url', 'admin/statistics/expert_type', null, '咨询类型统计', '1', '');
INSERT INTO `xxgc_auth_rule` VALUES ('222', 'Admin', 'admin_url', 'admin/task/task_list', null, '任务列表', '1', '');

-- ----------------------------
-- Table structure for `xxgc_consult_task`
-- ----------------------------
DROP TABLE IF EXISTS `xxgc_consult_task`;
CREATE TABLE `xxgc_consult_task` (
  `ct_id` int(4) NOT NULL AUTO_INCREMENT,
  `ct_create_time` int(11) NOT NULL,
  `ct_update_time` int(11) DEFAULT NULL,
  `member_id` int(4) NOT NULL,
  `expert_id` int(4) DEFAULT NULL,
  `ct_title` varchar(100) NOT NULL,
  `ct_content` varchar(500) NOT NULL,
  `ct_type` tinyint(2) NOT NULL,
  `ct_status` tinyint(2) NOT NULL,
  `ct_satisfaction` tinyint(2) DEFAULT '0',
  PRIMARY KEY (`ct_id`),
  KEY `index_type` (`ct_type`),
  KEY `index_time` (`ct_create_time`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of xxgc_consult_task
-- ----------------------------
INSERT INTO `xxgc_consult_task` VALUES ('1', '1512575655', '1512575655', '1', '4', '咨询资格', '警民关系协会', '4', '3', '0');
INSERT INTO `xxgc_consult_task` VALUES ('2', '1512576082', '1512576082', '2', null, '海口 v 进出口处看', '发个广告的', '3', '3', '2');
INSERT INTO `xxgc_consult_task` VALUES ('3', '1512576581', '1512576581', '3', null, '你插翅难飞呢', 'vnncnvnc', '3', '1', '0');
INSERT INTO `xxgc_consult_task` VALUES ('4', '1512611846', '1512611846', '3', '4', '请问高新区还能读公益幼儿园吗？', '明年读幼儿园怎么报名', '3', '2', '0');
INSERT INTO `xxgc_consult_task` VALUES ('5', '1512638011', '1512638011', '2', '4', '我想咨询一下迁移户口问题', '怎么迁入高新区？', '1', '2', '0');
INSERT INTO `xxgc_consult_task` VALUES ('6', '1512695544', '1512695544', '2', '59', '咨询一下演示的事情', '麻烦回答一下', '3', '3', '1');
INSERT INTO `xxgc_consult_task` VALUES ('7', '1512701815', '1512701815', '5', null, '试试', '试试', '10', '1', '0');
INSERT INTO `xxgc_consult_task` VALUES ('8', '1512701860', '1512701860', '4', null, '大学生回家乡开特色农家乐有政策帮扶么？', '大学生回家乡开特色农家乐有政策帮扶么？已经进展3年，初步成型，开始营业了。', '6', '1', '0');
INSERT INTO `xxgc_consult_task` VALUES ('9', '1512701982', '1512701982', '8', null, '怎么迁移户口', '咨询天府新区入户', '1', '1', '0');
INSERT INTO `xxgc_consult_task` VALUES ('10', '1512702004', '1512702004', '9', null, '双流区公益幼儿园免费吗？', '双流公益幼儿园免费吗？', '1', '1', '0');
INSERT INTO `xxgc_consult_task` VALUES ('11', '1512702107', '1512702107', '6', null, '户口迁移', '怎么迁移户口', '7', '3', '0');
INSERT INTO `xxgc_consult_task` VALUES ('12', '1512702532', '1512702532', '8', null, '怎么入学双流公益幼l儿园', '在公益幼儿园读书', '1', '1', '0');
INSERT INTO `xxgc_consult_task` VALUES ('13', '1512703085', '1512703085', '4', null, '我要做什么', '我在需要在这个平台做什么？', '3', '1', '0');

-- ----------------------------
-- Table structure for `xxgc_links`
-- ----------------------------
DROP TABLE IF EXISTS `xxgc_links`;
CREATE TABLE `xxgc_links` (
  `link_id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `link_url` varchar(255) NOT NULL COMMENT '友情链接地址',
  `link_name` varchar(255) NOT NULL COMMENT '友情链接名称',
  `link_image` varchar(255) DEFAULT NULL COMMENT '友情链接图标',
  `link_target` varchar(25) NOT NULL DEFAULT '_blank' COMMENT '友情链接打开方式',
  `link_description` text NOT NULL COMMENT '友情链接描述',
  `link_status` int(2) NOT NULL DEFAULT '1' COMMENT '状态，1显示，0不显示',
  `link_rating` int(11) NOT NULL DEFAULT '0' COMMENT '友情链接评级',
  `link_rel` varchar(255) DEFAULT NULL COMMENT '链接与网站的关系',
  `listorder` int(10) NOT NULL DEFAULT '0' COMMENT '排序',
  PRIMARY KEY (`link_id`),
  KEY `link_visible` (`link_status`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COMMENT='友情链接表';

-- ----------------------------
-- Records of xxgc_links
-- ----------------------------
INSERT INTO `xxgc_links` VALUES ('1', 'http://www.thinkcmf.com', 'ThinkCMF', '', '_blank', '', '1', '0', '', '0');

-- ----------------------------
-- Table structure for `xxgc_menu`
-- ----------------------------
DROP TABLE IF EXISTS `xxgc_menu`;
CREATE TABLE `xxgc_menu` (
  `id` smallint(6) unsigned NOT NULL AUTO_INCREMENT,
  `parentid` smallint(6) unsigned NOT NULL DEFAULT '0',
  `app` varchar(30) NOT NULL DEFAULT '' COMMENT '应用名称app',
  `model` varchar(30) NOT NULL DEFAULT '' COMMENT '控制器',
  `action` varchar(50) NOT NULL DEFAULT '' COMMENT '操作名称',
  `data` varchar(50) NOT NULL DEFAULT '' COMMENT '额外参数',
  `type` tinyint(1) NOT NULL DEFAULT '0' COMMENT '菜单类型  1：权限认证+菜单；0：只作为菜单',
  `status` tinyint(1) unsigned NOT NULL DEFAULT '0' COMMENT '状态，1显示，0不显示',
  `name` varchar(50) NOT NULL COMMENT '菜单名称',
  `icon` varchar(50) DEFAULT NULL COMMENT '菜单图标',
  `remark` varchar(255) NOT NULL DEFAULT '' COMMENT '备注',
  `listorder` smallint(6) unsigned NOT NULL DEFAULT '0' COMMENT '排序ID',
  PRIMARY KEY (`id`),
  KEY `status` (`status`),
  KEY `parentid` (`parentid`),
  KEY `model` (`model`)
) ENGINE=MyISAM AUTO_INCREMENT=236 DEFAULT CHARSET=utf8 COMMENT='后台菜单表';

-- ----------------------------
-- Records of xxgc_menu
-- ----------------------------
INSERT INTO `xxgc_menu` VALUES ('222', '0', 'Admin', 'Index', 'index', '', '1', '1', '账户管理', 'user', '', '1');
INSERT INTO `xxgc_menu` VALUES ('223', '222', 'Admin', 'Account', 'city_account_index', '', '1', '1', '市级账户', '', '', '1');
INSERT INTO `xxgc_menu` VALUES ('224', '222', 'Admin', 'Account', 'county_account_index', '', '1', '1', '区县账户', '', '', '2');
INSERT INTO `xxgc_menu` VALUES ('225', '222', 'Admin', 'Account', 'contact_account_index', '', '1', '1', '相关账户', '', '', '3');
INSERT INTO `xxgc_menu` VALUES ('226', '0', 'Admin', 'Activity', 'activity_msg', '', '1', '1', '活动通知管理', 'bullhorn', '', '2');
INSERT INTO `xxgc_menu` VALUES ('227', '226', 'Admin', 'Activity', 'msg_list', '', '1', '1', '通知列表', '', '', '0');
INSERT INTO `xxgc_menu` VALUES ('85', '109', 'Admin', 'Menu', 'default', '', '1', '1', '菜单管理', 'list', '', '20');
INSERT INTO `xxgc_menu` VALUES ('100', '85', 'Admin', 'Menu', 'index', '', '1', '1', '后台菜单', '', '', '0');
INSERT INTO `xxgc_menu` VALUES ('101', '100', 'Admin', 'Menu', 'add', '', '1', '0', '添加菜单', '', '', '0');
INSERT INTO `xxgc_menu` VALUES ('102', '101', 'Admin', 'Menu', 'add_post', '', '1', '0', '提交添加', '', '', '0');
INSERT INTO `xxgc_menu` VALUES ('103', '100', 'Admin', 'Menu', 'listorders', '', '1', '0', '后台菜单排序', '', '', '0');
INSERT INTO `xxgc_menu` VALUES ('104', '100', 'Admin', 'Menu', 'export_menu', '', '1', '0', '菜单备份', '', '', '1000');
INSERT INTO `xxgc_menu` VALUES ('105', '100', 'Admin', 'Menu', 'edit', '', '1', '0', '编辑菜单', '', '', '1000');
INSERT INTO `xxgc_menu` VALUES ('106', '105', 'Admin', 'Menu', 'edit_post', '', '1', '0', '提交编辑', '', '', '0');
INSERT INTO `xxgc_menu` VALUES ('107', '100', 'Admin', 'Menu', 'delete', '', '1', '0', '删除菜单', '', '', '1000');
INSERT INTO `xxgc_menu` VALUES ('108', '100', 'Admin', 'Menu', 'lists', '', '1', '0', '所有菜单', '', '', '1000');
INSERT INTO `xxgc_menu` VALUES ('109', '0', 'Admin', 'Setting', 'default', '', '0', '1', '系统管理', 'cogs', '', '0');
INSERT INTO `xxgc_menu` VALUES ('110', '109', 'Admin', 'Setting', 'userdefault', '', '0', '0', '个人信息', '', '', '0');
INSERT INTO `xxgc_menu` VALUES ('111', '110', 'Admin', 'User', 'userinfo', '', '1', '1', '修改信息', '', '', '0');
INSERT INTO `xxgc_menu` VALUES ('112', '111', 'Admin', 'User', 'userinfo_post', '', '1', '0', '修改信息提交', '', '', '0');
INSERT INTO `xxgc_menu` VALUES ('113', '110', 'Admin', 'Setting', 'password', '', '1', '1', '修改密码', '', '', '0');
INSERT INTO `xxgc_menu` VALUES ('114', '113', 'Admin', 'Setting', 'password_post', '', '1', '0', '提交修改', '', '', '0');
INSERT INTO `xxgc_menu` VALUES ('115', '109', 'Admin', 'Setting', 'site', '', '1', '0', '网站信息', '', '', '0');
INSERT INTO `xxgc_menu` VALUES ('116', '115', 'Admin', 'Setting', 'site_post', '', '1', '0', '提交修改', '', '', '0');
INSERT INTO `xxgc_menu` VALUES ('117', '115', 'Admin', 'Route', 'index', '', '1', '0', '路由列表', '', '', '0');
INSERT INTO `xxgc_menu` VALUES ('118', '115', 'Admin', 'Route', 'add', '', '1', '0', '路由添加', '', '', '0');
INSERT INTO `xxgc_menu` VALUES ('119', '118', 'Admin', 'Route', 'add_post', '', '1', '0', '路由添加提交', '', '', '0');
INSERT INTO `xxgc_menu` VALUES ('120', '115', 'Admin', 'Route', 'edit', '', '1', '0', '路由编辑', '', '', '0');
INSERT INTO `xxgc_menu` VALUES ('121', '120', 'Admin', 'Route', 'edit_post', '', '1', '0', '路由编辑提交', '', '', '0');
INSERT INTO `xxgc_menu` VALUES ('122', '115', 'Admin', 'Route', 'delete', '', '1', '0', '路由删除', '', '', '0');
INSERT INTO `xxgc_menu` VALUES ('123', '115', 'Admin', 'Route', 'ban', '', '1', '0', '路由禁止', '', '', '0');
INSERT INTO `xxgc_menu` VALUES ('124', '115', 'Admin', 'Route', 'open', '', '1', '0', '路由启用', '', '', '0');
INSERT INTO `xxgc_menu` VALUES ('125', '115', 'Admin', 'Route', 'listorders', '', '1', '0', '路由排序', '', '', '0');
INSERT INTO `xxgc_menu` VALUES ('126', '109', 'Admin', 'Mailer', 'default', '', '1', '0', '邮箱配置', '', '', '0');
INSERT INTO `xxgc_menu` VALUES ('127', '126', 'Admin', 'Mailer', 'index', '', '1', '1', 'SMTP配置', '', '', '0');
INSERT INTO `xxgc_menu` VALUES ('128', '127', 'Admin', 'Mailer', 'index_post', '', '1', '0', '提交配置', '', '', '0');
INSERT INTO `xxgc_menu` VALUES ('129', '126', 'Admin', 'Mailer', 'active', '', '1', '1', '注册邮件模板', '', '', '0');
INSERT INTO `xxgc_menu` VALUES ('130', '129', 'Admin', 'Mailer', 'active_post', '', '1', '0', '提交模板', '', '', '0');
INSERT INTO `xxgc_menu` VALUES ('131', '109', 'Admin', 'Setting', 'clearcache', '', '1', '1', '清除缓存', '', '', '1');
INSERT INTO `xxgc_menu` VALUES ('132', '222', 'User', 'Indexadmin', 'default', '', '1', '1', '权限管理', 'group', '', '0');
INSERT INTO `xxgc_menu` VALUES ('140', '132', 'Admin', 'Rbac', 'index', '', '1', '1', '角色管理', '', '', '0');
INSERT INTO `xxgc_menu` VALUES ('141', '140', 'Admin', 'Rbac', 'member', '', '1', '0', '成员管理', '', '', '1000');
INSERT INTO `xxgc_menu` VALUES ('142', '140', 'Admin', 'Rbac', 'authorize', '', '1', '0', '权限设置', '', '', '1000');
INSERT INTO `xxgc_menu` VALUES ('143', '142', 'Admin', 'Rbac', 'authorize_post', '', '1', '0', '提交设置', '', '', '0');
INSERT INTO `xxgc_menu` VALUES ('144', '140', 'Admin', 'Rbac', 'roleedit', '', '1', '0', '编辑角色', '', '', '1000');
INSERT INTO `xxgc_menu` VALUES ('145', '144', 'Admin', 'Rbac', 'roleedit_post', '', '1', '0', '提交编辑', '', '', '0');
INSERT INTO `xxgc_menu` VALUES ('146', '140', 'Admin', 'Rbac', 'roledelete', '', '1', '1', '删除角色', '', '', '1000');
INSERT INTO `xxgc_menu` VALUES ('147', '140', 'Admin', 'Rbac', 'roleadd', '', '1', '1', '添加角色', '', '', '1000');
INSERT INTO `xxgc_menu` VALUES ('148', '147', 'Admin', 'Rbac', 'roleadd_post', '', '1', '0', '提交添加', '', '', '0');
INSERT INTO `xxgc_menu` VALUES ('149', '132', 'Admin', 'User', 'index', '', '1', '1', '系统管理员', '', '', '0');
INSERT INTO `xxgc_menu` VALUES ('150', '149', 'Admin', 'User', 'delete', '', '1', '0', '删除管理员', '', '', '1000');
INSERT INTO `xxgc_menu` VALUES ('151', '149', 'Admin', 'User', 'edit', '', '1', '0', '管理员编辑', '', '', '1000');
INSERT INTO `xxgc_menu` VALUES ('152', '151', 'Admin', 'User', 'edit_post', '', '1', '0', '编辑提交', '', '', '0');
INSERT INTO `xxgc_menu` VALUES ('153', '149', 'Admin', 'User', 'add', '', '1', '0', '管理员添加', '', '', '1000');
INSERT INTO `xxgc_menu` VALUES ('154', '153', 'Admin', 'User', 'add_post', '', '1', '0', '添加提交', '', '', '0');
INSERT INTO `xxgc_menu` VALUES ('156', '109', 'Admin', 'Storage', 'index', '', '1', '0', '文件存储', '', '', '0');
INSERT INTO `xxgc_menu` VALUES ('157', '156', 'Admin', 'Storage', 'setting_post', '', '1', '0', '文件存储设置提交', '', '', '0');
INSERT INTO `xxgc_menu` VALUES ('160', '149', 'Admin', 'User', 'ban', '', '1', '0', '禁用管理员', '', '', '0');
INSERT INTO `xxgc_menu` VALUES ('161', '149', 'Admin', 'User', 'cancelban', '', '1', '0', '启用管理员', '', '', '0');
INSERT INTO `xxgc_menu` VALUES ('166', '127', 'Admin', 'Mailer', 'test', '', '1', '0', '测试邮件', '', '', '0');
INSERT INTO `xxgc_menu` VALUES ('167', '109', 'Admin', 'Setting', 'upload', '', '1', '0', '上传设置', '', '', '0');
INSERT INTO `xxgc_menu` VALUES ('168', '167', 'Admin', 'Setting', 'upload_post', '', '1', '0', '上传设置提交', '', '', '0');
INSERT INTO `xxgc_menu` VALUES ('174', '100', 'Admin', 'Menu', 'backup_menu', '', '1', '0', '备份菜单', '', '', '0');
INSERT INTO `xxgc_menu` VALUES ('175', '100', 'Admin', 'Menu', 'export_menu_lang', '', '1', '0', '导出后台菜单多语言包', '', '', '0');
INSERT INTO `xxgc_menu` VALUES ('176', '100', 'Admin', 'Menu', 'restore_menu', '', '1', '0', '还原菜单', '', '', '0');
INSERT INTO `xxgc_menu` VALUES ('177', '100', 'Admin', 'Menu', 'getactions', '', '1', '0', '导入新菜单', '', '', '0');
INSERT INTO `xxgc_menu` VALUES ('228', '222', 'Admin', 'Account', 'expert_account_index', '', '1', '1', '专家账户', '', '', '4');
INSERT INTO `xxgc_menu` VALUES ('229', '0', 'Admin', 'Statistics', 'index', '', '1', '1', '统计管理', 'bar-chart', '', '3');
INSERT INTO `xxgc_menu` VALUES ('230', '0', 'Admin', 'Task', 'index', '', '1', '1', '任务管理', 'tasks', '', '4');
INSERT INTO `xxgc_menu` VALUES ('231', '229', 'Admin', 'Statistics', 'consult_task_type', '', '1', '1', '任务类型统计', '', '', '0');
INSERT INTO `xxgc_menu` VALUES ('232', '229', 'Admin', 'Statistics', 'account_type', '', '1', '1', '账户类型', '', '', '1');
INSERT INTO `xxgc_menu` VALUES ('233', '229', 'Admin', 'Statistics', 'month_consult_task', '', '1', '1', '月度任务统计', '', '', '2');
INSERT INTO `xxgc_menu` VALUES ('234', '229', 'Admin', 'Statistics', 'expert_type', '', '1', '1', '咨询类型统计', '', '', '3');
INSERT INTO `xxgc_menu` VALUES ('235', '230', 'Admin', 'Task', 'task_list', '', '1', '1', '任务列表', '', '', '0');

-- ----------------------------
-- Table structure for `xxgc_message_board`
-- ----------------------------
DROP TABLE IF EXISTS `xxgc_message_board`;
CREATE TABLE `xxgc_message_board` (
  `mb_id` int(4) NOT NULL AUTO_INCREMENT,
  `ct_id` int(4) NOT NULL,
  `replyer_id` int(4) NOT NULL,
  `replyer_type` tinyint(2) NOT NULL,
  `content` varchar(500) DEFAULT NULL,
  `reply_time` int(11) NOT NULL,
  PRIMARY KEY (`mb_id`),
  KEY `index_ct` (`ct_id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of xxgc_message_board
-- ----------------------------
INSERT INTO `xxgc_message_board` VALUES ('1', '1', '4', '2', '你有问题吗？', '1512575746');
INSERT INTO `xxgc_message_board` VALUES ('2', '1', '1', '1', '哈哈', '1512575769');
INSERT INTO `xxgc_message_board` VALUES ('3', '1', '4', '2', '高高兴兴', '1512575780');
INSERT INTO `xxgc_message_board` VALUES ('4', '1', '4', '2', '低成本保持', '1512575785');
INSERT INTO `xxgc_message_board` VALUES ('5', '1', '4', '2', '刚才小宝宝', '1512575790');
INSERT INTO `xxgc_message_board` VALUES ('6', '1', '1', '1', '恩', '1512575793');
INSERT INTO `xxgc_message_board` VALUES ('7', '1', '4', '2', '哦欧派金宝贝', '1512575795');
INSERT INTO `xxgc_message_board` VALUES ('8', '1', '4', '2', '真不错从不', '1512575806');
INSERT INTO `xxgc_message_board` VALUES ('9', '4', '3', '1', '现在还有名额吗？', '1512618382');
INSERT INTO `xxgc_message_board` VALUES ('10', '4', '4', '2', '比较麻烦', '1512618405');
INSERT INTO `xxgc_message_board` VALUES ('11', '5', '2', '1', '补充一下，高新区不行的话天府新区的条件呢？', '1512638046');
INSERT INTO `xxgc_message_board` VALUES ('12', '5', '2', '1', '五城区有什么限制呢？', '1512638067');
INSERT INTO `xxgc_message_board` VALUES ('13', '5', '4', '2', '同仁堂', '1512651870');
INSERT INTO `xxgc_message_board` VALUES ('14', '6', '59', '2', '什么问题？', '1512695685');
INSERT INTO `xxgc_message_board` VALUES ('15', '6', '2', '1', '投影仪怎么用？', '1512695713');
INSERT INTO `xxgc_message_board` VALUES ('16', '10', '9', '1', '好久回复哦？', '1512702170');
INSERT INTO `xxgc_message_board` VALUES ('17', '8', '4', '1', '到底有没有啊？算不算大学生创业', '1512702238');
INSERT INTO `xxgc_message_board` VALUES ('18', '7', '5', '1', '怎么用', '1512702974');
INSERT INTO `xxgc_message_board` VALUES ('19', '10', '9', '1', '如何办理入园手续？', '1512703296');

-- ----------------------------
-- Table structure for `xxgc_oauth_user`
-- ----------------------------
DROP TABLE IF EXISTS `xxgc_oauth_user`;
CREATE TABLE `xxgc_oauth_user` (
  `id` int(20) NOT NULL AUTO_INCREMENT,
  `from` varchar(20) NOT NULL COMMENT '用户来源key',
  `name` varchar(30) NOT NULL COMMENT '第三方昵称',
  `head_img` varchar(200) NOT NULL COMMENT '头像',
  `uid` int(20) NOT NULL COMMENT '关联的本站用户id',
  `create_time` datetime NOT NULL COMMENT '绑定时间',
  `last_login_time` datetime NOT NULL COMMENT '最后登录时间',
  `last_login_ip` varchar(16) NOT NULL COMMENT '最后登录ip',
  `login_times` int(6) NOT NULL COMMENT '登录次数',
  `status` tinyint(2) NOT NULL,
  `access_token` varchar(512) NOT NULL,
  `expires_date` int(11) NOT NULL COMMENT 'access_token过期时间',
  `openid` varchar(40) NOT NULL COMMENT '第三方用户id',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='第三方用户表';

-- ----------------------------
-- Records of xxgc_oauth_user
-- ----------------------------

-- ----------------------------
-- Table structure for `xxgc_options`
-- ----------------------------
DROP TABLE IF EXISTS `xxgc_options`;
CREATE TABLE `xxgc_options` (
  `option_id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `option_name` varchar(64) NOT NULL COMMENT '配置名',
  `option_value` longtext NOT NULL COMMENT '配置值',
  `autoload` int(2) NOT NULL DEFAULT '1' COMMENT '是否自动加载',
  PRIMARY KEY (`option_id`),
  UNIQUE KEY `option_name` (`option_name`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COMMENT='全站配置表';

-- ----------------------------
-- Records of xxgc_options
-- ----------------------------
INSERT INTO `xxgc_options` VALUES ('1', 'member_email_active', '{\"title\":\"ThinkCMF\\u90ae\\u4ef6\\u6fc0\\u6d3b\\u901a\\u77e5.\",\"template\":\"<p>\\u672c\\u90ae\\u4ef6\\u6765\\u81ea<a href=\\\"http:\\/\\/www.thinkcmf.com\\\">ThinkCMF<\\/a><br\\/><br\\/>&nbsp; &nbsp;<strong>---------------<strong style=\\\"white-space: normal;\\\">---<\\/strong><\\/strong><br\\/>&nbsp; &nbsp;<strong>\\u5e10\\u53f7\\u6fc0\\u6d3b\\u8bf4\\u660e<\\/strong><br\\/>&nbsp; &nbsp;<strong>---------------<strong style=\\\"white-space: normal;\\\">---<\\/strong><\\/strong><br\\/><br\\/>&nbsp; &nbsp; \\u5c0a\\u656c\\u7684<span style=\\\"FONT-SIZE: 16px; FONT-FAMILY: Arial; COLOR: rgb(51,51,51); LINE-HEIGHT: 18px; BACKGROUND-COLOR: rgb(255,255,255)\\\">#username#\\uff0c\\u60a8\\u597d\\u3002<\\/span>\\u5982\\u679c\\u60a8\\u662fThinkCMF\\u7684\\u65b0\\u7528\\u6237\\uff0c\\u6216\\u5728\\u4fee\\u6539\\u60a8\\u7684\\u6ce8\\u518cEmail\\u65f6\\u4f7f\\u7528\\u4e86\\u672c\\u5730\\u5740\\uff0c\\u6211\\u4eec\\u9700\\u8981\\u5bf9\\u60a8\\u7684\\u5730\\u5740\\u6709\\u6548\\u6027\\u8fdb\\u884c\\u9a8c\\u8bc1\\u4ee5\\u907f\\u514d\\u5783\\u573e\\u90ae\\u4ef6\\u6216\\u5730\\u5740\\u88ab\\u6ee5\\u7528\\u3002<br\\/>&nbsp; &nbsp; \\u60a8\\u53ea\\u9700\\u70b9\\u51fb\\u4e0b\\u9762\\u7684\\u94fe\\u63a5\\u5373\\u53ef\\u6fc0\\u6d3b\\u60a8\\u7684\\u5e10\\u53f7\\uff1a<br\\/>&nbsp; &nbsp; <a title=\\\"\\\" href=\\\"http:\\/\\/#link#\\\" target=\\\"_self\\\">http:\\/\\/#link#<\\/a><br\\/>&nbsp; &nbsp; (\\u5982\\u679c\\u4e0a\\u9762\\u4e0d\\u662f\\u94fe\\u63a5\\u5f62\\u5f0f\\uff0c\\u8bf7\\u5c06\\u8be5\\u5730\\u5740\\u624b\\u5de5\\u7c98\\u8d34\\u5230\\u6d4f\\u89c8\\u5668\\u5730\\u5740\\u680f\\u518d\\u8bbf\\u95ee)<br\\/>&nbsp; &nbsp; \\u611f\\u8c22\\u60a8\\u7684\\u8bbf\\u95ee\\uff0c\\u795d\\u60a8\\u4f7f\\u7528\\u6109\\u5feb\\uff01<br\\/><br\\/>&nbsp; &nbsp; \\u6b64\\u81f4<br\\/>&nbsp; &nbsp; ThinkCMF \\u7ba1\\u7406\\u56e2\\u961f.<\\/p>\"}', '1');
INSERT INTO `xxgc_options` VALUES ('6', 'site_options', '            {\n            		\"site_name\":\"魇食\",\n            		\"site_host\":\"http://local.yanshi.com/\",\n            		\"site_root\":\"\",\n            		\"site_icp\":\"\",\n            		\"site_admin_email\":\"aa@dd.com\",\n            		\"site_tongji\":\"\",\n            		\"site_copyright\":\"\",\n            		\"site_seo_title\":\"魇食\",\n            		\"site_seo_keywords\":\"ThinkCMF,php,内容管理框架,cmf,cms,简约风, simplewind,framework\",\n            		\"site_seo_description\":\"魇食\"\n        }', '1');

-- ----------------------------
-- Table structure for `xxgc_plugins`
-- ----------------------------
DROP TABLE IF EXISTS `xxgc_plugins`;
CREATE TABLE `xxgc_plugins` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '自增id',
  `name` varchar(50) NOT NULL COMMENT '插件名，英文',
  `title` varchar(50) NOT NULL DEFAULT '' COMMENT '插件名称',
  `description` text COMMENT '插件描述',
  `type` tinyint(2) DEFAULT '0' COMMENT '插件类型, 1:网站；8;微信',
  `status` tinyint(1) NOT NULL DEFAULT '1' COMMENT '状态；1开启；',
  `config` text COMMENT '插件配置',
  `hooks` varchar(255) DEFAULT NULL COMMENT '实现的钩子;以“，”分隔',
  `has_admin` tinyint(2) DEFAULT '0' COMMENT '插件是否有后台管理界面',
  `author` varchar(50) DEFAULT '' COMMENT '插件作者',
  `version` varchar(20) DEFAULT '' COMMENT '插件版本号',
  `createtime` int(11) unsigned NOT NULL DEFAULT '0' COMMENT '插件安装时间',
  `listorder` smallint(6) NOT NULL DEFAULT '0' COMMENT '排序',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='插件表';

-- ----------------------------
-- Records of xxgc_plugins
-- ----------------------------

-- ----------------------------
-- Table structure for `xxgc_process`
-- ----------------------------
DROP TABLE IF EXISTS `xxgc_process`;
CREATE TABLE `xxgc_process` (
  `p_id` int(4) NOT NULL AUTO_INCREMENT,
  `t_id` int(4) NOT NULL,
  `p_stage_id` tinyint(2) NOT NULL,
  `p_stage_name` varchar(20) NOT NULL,
  `a_type` tinyint(2) NOT NULL,
  `a_id` int(4) NOT NULL,
  `a_name` char(20) NOT NULL,
  `p_start_time` int(11) DEFAULT '0',
  `p_finish_time` int(11) DEFAULT '0',
  `p_img_0` varchar(100) DEFAULT NULL,
  `p_img_1` varchar(100) DEFAULT NULL,
  `p_img_2` varchar(100) DEFAULT NULL,
  `p_img_3` varchar(100) DEFAULT NULL,
  `p_img_4` varchar(100) DEFAULT NULL,
  `p_img_5` varchar(100) DEFAULT NULL,
  `p_img_6` varchar(100) DEFAULT NULL,
  `p_img_7` varchar(100) DEFAULT NULL,
  `p_img_8` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`p_id`),
  KEY `index_t_id_stage` (`t_id`,`p_stage_id`) USING BTREE,
  KEY `index_a_id_finish_time` (`a_id`,`p_finish_time`)
) ENGINE=InnoDB AUTO_INCREMENT=74 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of xxgc_process
-- ----------------------------
INSERT INTO `xxgc_process` VALUES ('33', '24', '1', '诉求登记', '1', '1', '市级账户小圆', '1512573324', '0', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('34', '24', '3', '初期干预计划', '2', '2', '区县账户李想', '0', '0', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('35', '25', '7', '反馈评估', '2', '2', '区县账户李想', '1512573333', '0', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('36', '25', '1', '诉求登记', '1', '1', '市级账户小圆', '0', '0', 'data/upload/account/201712062322182_2.jgp', null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('37', '26', '3', '初期干预计划', '2', '2', '区县账户李想', '1512573371', '0', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('38', '26', '1', '诉求登记', '1', '1', '市级账户小圆', '0', '0', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('41', '28', '7', '反馈评估', '2', '2', '区县账户李想', '1512573920', '1512573968', 'data/upload/account/201712062325541_2.jgp', null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('42', '28', '1', '诉求登记', '1', '1', '市级账户小圆', '1512573968', '1512574007', 'data/upload/account/201712062326331_1.jgp', 'data/upload/account/201712062326333_1.jgp', 'data/upload/account/201712062326334_1.jgp', null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('43', '29', '5', '反馈进展', '4', '4', '韩国专家', '1512574176', '1512574217', 'data/upload/account/201712062330132_4.jgp', null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('44', '29', '7', '反馈评估', '1', '1', '市级账户小圆', '1512574217', '1512574312', 'data/upload/account/201712062331493_1.jgp', null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('45', '29', '3', '初期干预计划', '2', '2', '区县账户李想', '1512574312', '1512574344', 'data/upload/account/201712062332192_2.jgp', null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('46', '29', '1', '诉求登记', '2', '3', '区县账户李小', '1512574344', '1512574526', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('47', '30', '2', '快速对接', '1', '1', '市级账户小圆', '1512574650', '1512574680', 'data/upload/account/201712062337564_1.jgp', null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('48', '30', '4', '实地勘察', '2', '2', '区县账户李想', '1512574680', '1512574700', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('49', '30', '7', '反馈评估', '4', '4', '韩国专家', '1512574700', '1512574717', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('50', '30', '5', '反馈进展', '2', '3', '区县账户李小', '1512574717', '1512574768', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('51', '31', '1', '诉求登记', '2', '3', '区县账户李小', '1512575415', '1512575440', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('52', '31', '3', '初期干预计划', '2', '3', '区县账户李小', '1512575440', '1512575456', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('53', '32', '1', '诉求登记', '1', '1', '市级账户小圆', '1512576186', '1512576222', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('54', '32', '7', '反馈评估', '4', '4', '韩国专家', '1512576222', '1512576279', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('55', '32', '2', '快速对接', '2', '2', '区县账户李想', '1512576279', '0', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('56', '32', '4', '实地勘察', '2', '3', '区县账户李小', '0', '0', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('57', '33', '1', '诉求登记', '2', '2', '区县账户李想', '1512619522', '1512626854', 'data/upload/account/201712071233333_2.jgp', null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('58', '33', '3', '初期干预计划', '2', '3', '区县账户李小', '1512626854', '1512628413', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('59', '34', '4', '实地勘察', '2', '2', '区县账户李想', '1512630670', '1512635859', 'data/upload/account/201712071637294_2.jgp', null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('60', '34', '1', '诉求登记', '2', '3', '区县账户李小', '1512635859', '1512636533', 'data/upload/account/201712071648231_3.jgp', null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('61', '35', '1', '诉求登记', '2', '3', '区县账户李小', '1512637482', '1512637579', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('62', '36', '1', '诉求登记', '2', '2', '区县账户李想', '1512637726', '0', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('63', '37', '1', '诉求登记', '3', '58', '相关李想', '1512692839', '1512693376', 'data/upload/account/201712080836021_58.jgp', null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('64', '37', '1', '诉求登记', '4', '59', '专家李小', '1512693376', '0', 'data/upload/account/201712081133064_59.jgp', 'data/upload/account/201712081133064_59.jgp', null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('65', '38', '1', '诉求登记', '3', '58', '相关李想', '1512692957', '1512693395', 'data/upload/account/201712080836291_58.jgp', null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('66', '38', '3', '初期干预计划', '4', '59', '专家李小', '1512693395', '0', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('67', '39', '1', '诉求登记', '3', '58', '相关李想', '1512693092', '1512693420', 'data/upload/account/201712080836573_58.jgp', null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('68', '39', '2', '快速对接', '4', '59', '专家李小', '1512693420', '0', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('69', '40', '1', '诉求登记', '3', '58', '相关李想', '1512693297', '1512693466', 'data/upload/account/201712080837431_58.jgp', null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('70', '40', '1', '诉求登记', '4', '59', '专家李小', '1512693466', '0', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('71', '41', '1', '诉求登记', '1', '40', '张红琴', '1512703008', '1512703261', 'data/upload/account/201712081120454_40.jgp', null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('72', '41', '2', '快速对接', '4', '59', '专家李小', '1512703261', '1512703308', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('73', '42', '1', '诉求登记', '3', '58', '相关李想', '1513261355', '0', 'data/upload/account/201712142222585_58.jgp', 'data/upload/account/201712142222584_58.jgp', null, null, null, null, null, null, null);

-- ----------------------------
-- Table structure for `xxgc_role`
-- ----------------------------
DROP TABLE IF EXISTS `xxgc_role`;
CREATE TABLE `xxgc_role` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL COMMENT '角色名称',
  `pid` smallint(6) DEFAULT NULL COMMENT '父角色ID',
  `status` tinyint(1) unsigned DEFAULT NULL COMMENT '状态',
  `remark` varchar(255) DEFAULT NULL COMMENT '备注',
  `create_time` int(11) unsigned NOT NULL DEFAULT '0' COMMENT '创建时间',
  `update_time` int(11) unsigned NOT NULL DEFAULT '0' COMMENT '更新时间',
  `listorder` int(3) NOT NULL DEFAULT '0' COMMENT '排序字段',
  PRIMARY KEY (`id`),
  KEY `parentId` (`pid`),
  KEY `status` (`status`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COMMENT='角色表';

-- ----------------------------
-- Records of xxgc_role
-- ----------------------------
INSERT INTO `xxgc_role` VALUES ('1', '超级管理员', '0', '1', '拥有网站最高管理员权限！', '1329633709', '1329633709', '0');
INSERT INTO `xxgc_role` VALUES ('2', '系统管理员', null, '1', '包含账户管理，活动通知管理', '1498378303', '1508299696', '0');

-- ----------------------------
-- Table structure for `xxgc_role_user`
-- ----------------------------
DROP TABLE IF EXISTS `xxgc_role_user`;
CREATE TABLE `xxgc_role_user` (
  `role_id` int(11) unsigned DEFAULT '0' COMMENT '角色 id',
  `user_id` int(11) DEFAULT '0' COMMENT '用户id',
  KEY `group_id` (`role_id`),
  KEY `user_id` (`user_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='用户角色对应表';

-- ----------------------------
-- Records of xxgc_role_user
-- ----------------------------
INSERT INTO `xxgc_role_user` VALUES ('2', '2');

-- ----------------------------
-- Table structure for `xxgc_route`
-- ----------------------------
DROP TABLE IF EXISTS `xxgc_route`;
CREATE TABLE `xxgc_route` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '路由id',
  `full_url` varchar(255) DEFAULT NULL COMMENT '完整url， 如：portal/list/index?id=1',
  `url` varchar(255) DEFAULT NULL COMMENT '实际显示的url',
  `listorder` int(5) DEFAULT '0' COMMENT '排序，优先级，越小优先级越高',
  `status` tinyint(1) DEFAULT '1' COMMENT '状态，1：启用 ;0：不启用',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='url路由表';

-- ----------------------------
-- Records of xxgc_route
-- ----------------------------

-- ----------------------------
-- Table structure for `xxgc_task`
-- ----------------------------
DROP TABLE IF EXISTS `xxgc_task`;
CREATE TABLE `xxgc_task` (
  `t_id` int(4) NOT NULL AUTO_INCREMENT,
  `t_create_time` int(11) NOT NULL,
  `t_title` varchar(50) NOT NULL,
  `t_content` text NOT NULL,
  `t_type` tinyint(2) NOT NULL,
  `t_img` varchar(100) DEFAULT 'null',
  `t_status` tinyint(2) NOT NULL,
  `p_id` int(4) DEFAULT NULL,
  `a_id` int(4) NOT NULL,
  `a_name` char(20) NOT NULL,
  `t_stage_id` tinyint(2) NOT NULL,
  `user_id` bigint(20) NOT NULL,
  `t_examine_explain` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`t_id`),
  KEY `index_search` (`t_create_time`,`t_type`,`t_status`,`t_stage_id`)
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of xxgc_task
-- ----------------------------
INSERT INTO `xxgc_task` VALUES ('24', '1512573324', 'sasa', 'dsds', '1', 'null', '1', '33', '1', '市级账户小圆', '1', '2', null);
INSERT INTO `xxgc_task` VALUES ('25', '1512573333', '111111', '的萨达撒多撒', '2', 'null', '1', '36', '2', '区县账户李想', '7', '2', null);
INSERT INTO `xxgc_task` VALUES ('26', '1512573371', 'dsdaas', 'dsdsd', '1', 'null', '1', '38', '2', '区县账户李想', '3', '2', null);
INSERT INTO `xxgc_task` VALUES ('28', '1512573920', '222222', 'dsadsadsaas', '1', 'null', '4', '42', '1', '市级账户小圆', '1', '2', '宝贝潮男潮女');
INSERT INTO `xxgc_task` VALUES ('29', '1512574176', '测试任务流程', '这个流程有四个为执行人', '3', 'data/upload/task/201712062329362_2.jgp', '5', '46', '3', '区县账户李小', '1', '2', '统一');
INSERT INTO `xxgc_task` VALUES ('30', '1512574650', '测试审核流程', '反倒是梵蒂冈丰东股份', '4', 'null', '4', '50', '3', '区县账户李小', '5', '2', '哦哦');
INSERT INTO `xxgc_task` VALUES ('31', '1512574820', '测试变更流程', '的萨达撒', '1', 'null', '4', '52', '3', '区县账户李小', '3', '2', 'fdsf ');
INSERT INTO `xxgc_task` VALUES ('32', '1512576186', '测试样式', '丁俊晖吃饭饭', '2', 'null', '6', '55', '2', '区县账户李想', '2', '2', 'vnvc');
INSERT INTO `xxgc_task` VALUES ('33', '1512619522', '演示截图任务', '的萨达撒多撒多撒所多', '2', 'null', '2', '58', '3', '区县账户李小', '3', '2', '防腐剂');
INSERT INTO `xxgc_task` VALUES ('34', '1512630670', '演示录屏', '这里填写任务的详细内容说明，上传图片是一些补充信息资料', '3', 'data/upload/task/201712071511105_2.jgp', '4', '60', '3', '区县账户李小', '1', '2', '通过');
INSERT INTO `xxgc_task` VALUES ('35', '1512637482', '录频任务中止', '方便录频建立', '3', 'null', '5', '61', '3', '区县账户李小', '1', '2', '同意中止');
INSERT INTO `xxgc_task` VALUES ('36', '1512637540', '录频任务变更执行人', '方便录频变更执行人', '3', 'null', '1', '62', '2', '区县账户李想', '1', '2', '此任务可以由完成，符合条件');
INSERT INTO `xxgc_task` VALUES ('37', '1512692839', '演示任务流转', '这里由相关账户流转到专家账户', '3', 'data/upload/task/201712080827195_2.jgp', '1', '64', '59', '专家李小', '1', '2', null);
INSERT INTO `xxgc_task` VALUES ('38', '1512692957', '演示任务申请中止', '这里的内容主要是任务申请中止的操作', '2', 'data/upload/task/201712080829175_2.jgp', '1', '66', '59', '专家李小', '3', '2', null);
INSERT INTO `xxgc_task` VALUES ('39', '1512693092', '演示任务执行人变更', '这里演示执行人申请变更的操作', '4', 'data/upload/task/201712080831321_2.jgp', '1', '68', '59', '专家李小', '2', '2', null);
INSERT INTO `xxgc_task` VALUES ('40', '1512693297', '演示任务申请审核', '这里演示完成任务', '7', 'data/upload/task/201712080834574_2.jgp', '1', '70', '59', '专家李小', '1', '2', null);
INSERT INTO `xxgc_task` VALUES ('41', '1512703008', '演示互动', '方法', '2', 'null', '4', '72', '59', '专家李小', '2', '2', '通过');
INSERT INTO `xxgc_task` VALUES ('42', '1513261355', '再一次我的问题', '开户行附近的酒店', '3', 'null', '1', '73', '58', '相关李想', '1', '2', null);

-- ----------------------------
-- Table structure for `xxgc_users`
-- ----------------------------
DROP TABLE IF EXISTS `xxgc_users`;
CREATE TABLE `xxgc_users` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `user_login` varchar(60) NOT NULL DEFAULT '' COMMENT '用户名',
  `user_pass` varchar(64) NOT NULL DEFAULT '' COMMENT '登录密码；sp_password加密',
  `user_nicename` varchar(50) NOT NULL DEFAULT '' COMMENT '用户美名',
  `user_email` varchar(100) NOT NULL DEFAULT '' COMMENT '登录邮箱',
  `user_url` varchar(100) NOT NULL DEFAULT '' COMMENT '用户个人网站',
  `avatar` varchar(255) DEFAULT NULL COMMENT '用户头像，相对于upload/avatar目录',
  `sex` smallint(1) DEFAULT '0' COMMENT '性别；0：保密，1：男；2：女',
  `birthday` date DEFAULT '2000-01-01' COMMENT '生日',
  `signature` varchar(255) DEFAULT NULL COMMENT '个性签名',
  `last_login_ip` varchar(16) DEFAULT NULL COMMENT '最后登录ip',
  `last_login_time` datetime NOT NULL DEFAULT '2000-01-01 00:00:00' COMMENT '最后登录时间',
  `create_time` datetime NOT NULL DEFAULT '2000-01-01 00:00:00' COMMENT '注册时间',
  `user_activation_key` varchar(60) NOT NULL DEFAULT '' COMMENT '激活码',
  `user_status` int(11) NOT NULL DEFAULT '1' COMMENT '用户状态 0：禁用； 1：正常 ；2：未验证',
  `score` int(11) NOT NULL DEFAULT '0' COMMENT '用户积分',
  `user_type` smallint(1) DEFAULT '1' COMMENT '用户类型，1:admin ;2:会员',
  `coin` int(11) NOT NULL DEFAULT '0' COMMENT '金币',
  `mobile` varchar(20) NOT NULL DEFAULT '' COMMENT '手机号',
  PRIMARY KEY (`id`),
  KEY `user_login_key` (`user_login`),
  KEY `user_nicename` (`user_nicename`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COMMENT='用户表';

-- ----------------------------
-- Records of xxgc_users
-- ----------------------------
INSERT INTO `xxgc_users` VALUES ('1', 'admin', '###3ec2f9a7e469c084fea814bbfc465378', 'admin', 'aa@dd.com', '', null, '0', '2000-01-01', null, '101.207.125.162', '2017-12-19 10:23:59', '2017-06-25 02:40:11', '', '1', '0', '1', '0', '');
INSERT INTO `xxgc_users` VALUES ('2', 'test', '###8672413f2ac72ea28c5b2ad70d8f9b26', '', 'ddds@aa.com', '', null, '0', '2000-01-01', null, '117.136.64.89', '2017-12-19 13:50:34', '2017-06-27 23:39:35', '', '1', '0', '1', '0', '');

-- ----------------------------
-- Table structure for `xxgc_wechat_member`
-- ----------------------------
DROP TABLE IF EXISTS `xxgc_wechat_member`;
CREATE TABLE `xxgc_wechat_member` (
  `wm_id` int(4) NOT NULL AUTO_INCREMENT,
  `wm_mobile` char(11) NOT NULL,
  `wm_open_id` varchar(50) DEFAULT NULL,
  `wm_nick_name` varchar(50) DEFAULT NULL,
  `wm_head_img` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`wm_id`),
  KEY `index_mobile` (`wm_mobile`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of xxgc_wechat_member
-- ----------------------------
INSERT INTO `xxgc_wechat_member` VALUES ('1', '13438347004', 'oMd5Rw-kLbMx0rbW4bwEq9p-1ncc', '嘿！大叔', 'http://wx.qlogo.cn/mmopen/vi_32/BiblaKjthHdzc403U1ib4gqxibq1Ay0CBkXkia2AB9r51JYmfzuyGDia2QK6Mw7icxLIIPxMSiaKnFia13niadpia4A2vQCw/0');
INSERT INTO `xxgc_wechat_member` VALUES ('2', '18628062001', 'oMd5Rwybfz-4ItebCjoKGEsPkNUM', '风之想', 'http://wx.qlogo.cn/mmopen/vi_32/cKuFQO8UEyL1pdDIHW8kFjZsUicqy2UukHBm5QU2bIic7wp4ydt2QKfoYU5IvyQIJhAElL61xyuwAM0CtNkF2LoA/0');
INSERT INTO `xxgc_wechat_member` VALUES ('3', '18111247718', 'oMd5Rwybfz-4ItebCjoKGEsPkNUM', '风之想', 'http://wx.qlogo.cn/mmopen/vi_32/cKuFQO8UEyL1pdDIHW8kFjZsUicqy2UukHBm5QU2bIic7wp4ydt2QKfoYU5IvyQIJhAElL61xyuwAM0CtNkF2LoA/0');
INSERT INTO `xxgc_wechat_member` VALUES ('4', '13666175247', 'oMd5Rw0gDSJSIJSNggRSM_PQYYWE', '唐由鑫', 'http://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLxyECuhxq9G0FOI8VZWqRSz0cBuLl811Ce9TkibsKJtD0z2ctzUyiceaZX2sbNpicG8GIDjLFuwGCzw/0');
INSERT INTO `xxgc_wechat_member` VALUES ('5', '13880873321', 'oMd5Rwwd2v_si1iC3AMdBQ1wbrlE', '李一凡', 'http://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJSvOhfrsWluZTAsiahpNfmwYnnf4u6znu1OpGkco8rfRmIIMx6yibjibwxf5KkQXE6xoppLbrO9xrSw/0');
INSERT INTO `xxgc_wechat_member` VALUES ('6', '17381849915', 'oMd5Rw-K00yE95QJnCZxPZBrRBBA', '光辉', 'http://wx.qlogo.cn/mmopen/vi_32/cOqHzStYzAjgxjOwJicfibMVxkeOJ7hrNwPYmicVmzDOPhBLqskToYALoAcyCkEJpcVysY02OG8gbeSBpnu8QSibWw/0');
INSERT INTO `xxgc_wechat_member` VALUES ('7', '13541395487', 'oMd5RwwHG4BtYZEZ8AJinlv2yGmA', 'Dveen', 'http://wx.qlogo.cn/mmopen/vi_32/fyH5ycdXIpVPLbicptIq43FSnsJt1mTqZkluv8gx7ZpoYKiaYpHBLTpKD6Cf7PbVYLfmHE3kxhI0QZpibdDZnB9UQ/0');
INSERT INTO `xxgc_wechat_member` VALUES ('8', '13882152967', 'oMd5Rw6V42z2O0Jm1Do8IbRF1qHg', '于兴均', 'http://wx.qlogo.cn/mmopen/vi_32/AyNbxopZI89vn4ajVTO3vVOYsaicK0EqeJlyiaK49N8rtMAWPwuqRIFbeN7xHD6OMamCLOHnjsGiaIjEXJ1CofdEg/0');
INSERT INTO `xxgc_wechat_member` VALUES ('9', '18190899802', 'oMd5Rw0Aqdr38psdzuM8sMKh8OfI', '蓉城故里', 'http://wx.qlogo.cn/mmopen/vi_32/MrK1Ls34ShdTgtVFq7P38YmtalxWIyVRVv2ylQB16qUib0ViakoS6kjv91INibzgdiaTKpviccfHDSMY6S6soApBWqg/0');
INSERT INTO `xxgc_wechat_member` VALUES ('10', '18090437093', 'oMd5Rw3v8GmgWUzW_YRJ8oje6eiA', '安然', 'http://wx.qlogo.cn/mmopen/vi_32/GdBSn228utPpMm4icTR27wEl04qgYV9RLMAM9MJRtovdQgpiaiaU4D49huibFl5YEa59L1aJQFAcwrTzVtN4ibWjAkA/0');
INSERT INTO `xxgc_wechat_member` VALUES ('11', '13908098614', 'oMd5Rw8n2oDQ1yLrXAlNEyQRGR28', '小原虫', 'http://wx.qlogo.cn/mmopen/vi_32/BUI7BupTSiavwlkicbppeTmsiba03V8ILoaARjoKB7YGmEKqk51VmJ5ZnIwxe9s0Qzf82JByshytQrQMe0yxD7Gxw/0');
INSERT INTO `xxgc_wechat_member` VALUES ('12', '17708053564', 'oMd5Rw0UjgTJH1DrFWGyWEHKo9rA', '奋斗！小青年！', 'http://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83epX5ic3xUUlPOJCKJHpVX0Eoot4QrDn9K5Iq4msaoEgymtQcvOTs8hm62weKKQrKsYVv3THnUjUI4A/0');
INSERT INTO `xxgc_wechat_member` VALUES ('13', '15982229275', 'oMd5Rw2xSzfPYU_FYhHS-YPbIYL0', '水先生。', 'http://wx.qlogo.cn/mmopen/vi_32/PiajxSqBRaELx018o2uIbiaicsMbT3nT8ZstP4bV3oia836vpdOr6tWseUQeO1XeKNbTJF3LI5gS9ajKw4qkv57Ecg/0');
INSERT INTO `xxgc_wechat_member` VALUES ('14', '18683791392', 'oMd5Rw8XhKrAKE5O_RHBcnsEmoyA', '潞～lu', 'http://wx.qlogo.cn/mmopen/vi_32/ZJjl8bEt5zfOR9OUeW1FYe4sDOs4opD2Xic0knaCl6njcY4htI7ibjJTiaXQODsrrxib5rY1B782CvSkJ1Vj2gNc0w/0');
