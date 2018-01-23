/*
Navicat MySQL Data Transfer

Source Server         : 个人云服
Source Server Version : 50637
Source Host           : 120.132.49.203:3306
Source Database       : xxgc

Target Server Type    : MYSQL
Target Server Version : 50637
File Encoding         : 65001

Date: 2017-12-19 16:14:35
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
INSERT INTO `xxgc_account` VALUES ('63', '13688073506', '谢松', '1', '1', '26', null, 'oMd5Rw8Gz8pds8MVS0b93V0I7zq0', 'e697b6e7a9bae588bbe5baa6e8b0a2', 'http://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTI8wUmTibR7leXJcGM375LfgibeXEVI9XCU0evzGev3GWeefurL1LibtiabSiamj3icLszDOAv60Q2hxV1A/0', '1');
INSERT INTO `xxgc_account` VALUES ('64', '18011463062', '邱永静', '1', '2', '26', null, 'oMd5Rw0a81QyFadTv1BpKm08fh9g', 'e4b880e4b8aae89891e88f87', 'http://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJ4kV1MOgeWbaYbv4TEufVmjFvETa63hRQ55YtwdQ5DFGpqw1mDxRoSRRA1Y9CjDZIxpianwuGzMZg/0', '1');
INSERT INTO `xxgc_account` VALUES ('65', '18428333400', '汪飘', '1', '2', '26', null, 'oMd5Rwz50eRO6yI-k1VfLouc23Go', 'e6b1aae9a398', 'http://wx.qlogo.cn/mmopen/vi_32/OwLmW6Xbg7oF3NsDUaVFdA0gzxdnXXYKqn0yUGuWZ8Cqj7RPAfQISOic85pkH2wuDwPicOIEx1WiaeYeyDouib55sA/0', '1');
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
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of xxgc_activity_msg
-- ----------------------------
INSERT INTO `xxgc_activity_msg` VALUES ('1', '1512652270', '1', '18628062001', 'tong', 'http://www.baidu.com');
INSERT INTO `xxgc_activity_msg` VALUES ('2', '1513664658', '1', '18428333400', '测试通知', 'http://www.baidu.com');

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
INSERT INTO `xxgc_auth_access` VALUES ('2', 'admin/activity/activity_msg', 'admin_url');
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
INSERT INTO `xxgc_auth_access` VALUES ('2', 'admin/setting/password_post', 'admin_url');
INSERT INTO `xxgc_auth_access` VALUES ('2', 'admin/setting/password', 'admin_url');
INSERT INTO `xxgc_auth_access` VALUES ('2', 'user/indexadmin/default', 'admin_url');
INSERT INTO `xxgc_auth_access` VALUES ('2', 'admin/account/contact_account_index', 'admin_url');
INSERT INTO `xxgc_auth_access` VALUES ('2', 'admin/account/county_account_index', 'admin_url');
INSERT INTO `xxgc_auth_access` VALUES ('2', 'admin/account/city_account_index', 'admin_url');
INSERT INTO `xxgc_auth_access` VALUES ('2', 'admin/index/index', 'admin_url');
INSERT INTO `xxgc_auth_access` VALUES ('3', 'admin/index/index', 'admin_url');
INSERT INTO `xxgc_auth_access` VALUES ('3', 'admin/account/city_account_index', 'admin_url');
INSERT INTO `xxgc_auth_access` VALUES ('3', 'admin/account/county_account_index', 'admin_url');
INSERT INTO `xxgc_auth_access` VALUES ('3', 'admin/account/contact_account_index', 'admin_url');
INSERT INTO `xxgc_auth_access` VALUES ('3', 'admin/account/expert_account_index', 'admin_url');
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
INSERT INTO `xxgc_menu` VALUES ('113', '132', 'Admin', 'Setting', 'password', '', '1', '1', '修改密码', '', '', '0');
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
) ENGINE=InnoDB AUTO_INCREMENT=249 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of xxgc_process
-- ----------------------------
INSERT INTO `xxgc_process` VALUES ('1', '1', '1', '诉求登记', '1', '65', '汪飘', '1472781900', '1472785200', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('2', '1', '1', '诉求登记', '1', '65', '汪飘', '1472781900', '1472785200', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('3', '1', '2', '快速对接', '2', '68', '畅欢', '1472785200', '1472788800', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('4', '1', '4', '实地勘察', '1', '62', '张惠', '1472788800', '1472796000', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('5', '1', '2', '快速对接', '2', '68', '畅欢', '1472796000', '1472799600', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('6', '1', '6', '跟进结案', '1', '62', '张惠', '1472799600', '1472804100', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('7', '2', '1', '诉求登记', '1', '65', '汪飘', '1477965600', '1478239200', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('8', '2', '2', '快速对接', '1', '69', '施燕', '1478239200', '1478509200', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('9', '2', '4', '实地勘察', '1', '62', '张惠', '1478509200', '1479798000', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('10', '2', '5', '反馈进展', '1', '62', '张惠', '1479798000', '1482829200', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('11', '3', '4', '实地勘察', '1', '66', '王灿', '1478484000', '1478491200', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('12', '3', '1', '诉求登记', '1', '64', '邱永静', '1478829600', '1478854800', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('13', '3', '5', '反馈进展', '1', '67', '白帆', '1479090600', '1479095400', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('14', '4', '2', '快速对接', '1', '60', '姚明达', '1479362400', '1479373200', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('15', '5', '3', '初期干预计划', '1', '65', '汪飘', '1480554000', '1480651200', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('16', '5', '2', '快速对接', '1', '65', '汪飘', '1480651200', '1480658400', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('17', '5', '3', '初期干预计划', '1', '64', '邱永静', '1480665600', '1480669200', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('18', '5', '4', '实地勘察', '1', '66', '王灿', '1480816800', '1480824000', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('19', '5', '5', '反馈进展', '1', '63', '谢松', '1480834800', '1480838400', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('20', '6', '2', '快速对接', '1', '65', '汪飘', '1480640400', '1480669200', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('21', '6', '3', '初期干预计划', '1', '64', '邱永静', '1480726800', '1480842000', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('22', '6', '4', '实地勘察', '1', '64', '邱永静', '1480813200', '1480827600', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('23', '7', '4', '实地勘察', '1', '66', '王灿', '1481245200', '1481247000', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('24', '7', '3', '初期干预计划', '1', '66', '王灿', '1481247000', '1481248500', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('25', '7', '2', '快速对接', '1', '64', '邱永静', '1481248500', '1481251200', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('26', '7', '5', '反馈进展', '1', '64', '邱永静', '1481251200', '1481251800', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('27', '7', '7', '反馈评估', '1', '60', '姚明达', '1481251800', '1481257800', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('28', '8', '3', '初期干预计划', '1', '65', '汪飘', '1481950800', '1481952000', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('29', '8', '4', '实地勘察', '1', '65', '汪飘', '1481952000', '1481952900', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('30', '8', '2', '快速对接', '1', '64', '邱永静', '1481952900', '1481956200', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('31', '8', '5', '反馈进展', '1', '62', '张惠', '1481956200', '1481961600', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('32', '8', '7', '反馈评估', '1', '62', '张惠', '1481961600', '1481965200', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('33', '9', '3', '初期干预计划', '1', '66', '王灿', '1480816200', '1481619600', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('34', '9', '4', '实地勘察', '1', '67', '白帆', '1482213600', '1482221100', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('35', '9', '5', '反馈进展', '1', '64', '邱永静', '1482285900', '1482308100', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('36', '9', '6', '跟进结案', '1', '65', '汪飘', '1482372900', '1482379500', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('37', '9', '7', '反馈评估', '1', '60', '姚明达', '1482389100', '1482397200', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('38', '10', '3', '初期干预计划', '1', '66', '王灿', '1481856300', '1482137100', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('39', '10', '2', '快速对接', '1', '65', '汪飘', '1482115500', '1482482700', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('40', '10', '4', '实地勘察', '1', '64', '邱永静', '1482372000', '1482483600', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('41', '10', '7', '反馈评估', '1', '62', '张惠', '1482571800', '1482580800', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('42', '11', '3', '初期干预计划', '1', '64', '邱永静', '1482717600', '1483174800', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('43', '11', '2', '快速对接', '2', '70', '柳强', '1483324200', '1483331400', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('44', '11', '4', '实地勘察', '1', '63', '谢松', '1483338600', '1483347600', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('45', '11', '7', '反馈评估', '1', '60', '姚明达', '1483425000', '1483432200', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('46', '12', '3', '初期干预计划', '1', '66', '王灿', '1483579800', '1483779600', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('47', '12', '4', '实地勘察', '1', '62', '张惠', '1483855200', '1483866000', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('48', '12', '2', '快速对接', '1', '64', '邱永静', '1483925400', '1484296200', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('49', '12', '6', '跟进结案', '1', '62', '张惠', '1484445600', '1484470800', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('50', '13', '3', '初期干预计划', '3', '72', '王玲', '1484272800', '1484470800', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('51', '13', '5', '反馈进展', '1', '73', '陈曦', '1484528400', '1484902800', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('52', '13', '4', '实地勘察', '1', '71', '刘永光', '1484993400', '1485075600', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('53', '13', '7', '反馈评估', '1', '74', '徐珍珍', '1485133800', '1485137400', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('54', '14', '3', '初期干预计划', '1', '74', '徐珍珍', '1486516200', '1486544400', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('55', '14', '2', '快速对接', '3', '72', '王玲', '1486602600', '1486714200', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('56', '14', '6', '跟进结案', '1', '73', '陈曦', '1486777800', '1486785600', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('57', '15', '3', '初期干预计划', '3', '72', '王玲', '1487037600', '1487149200', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('58', '15', '2', '快速对接', '1', '74', '徐珍珍', '1487296800', '1487322000', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('59', '15', '4', '实地勘察', '1', '74', '徐珍珍', '1487314800', '1487322000', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('60', '15', '6', '跟进结案', '1', '62', '张惠', '1487383200', '1487390400', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('61', '16', '3', '初期干预计划', '1', '66', '王灿', '1487556000', '1487581200', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('62', '16', '2', '快速对接', '1', '67', '白帆', '1487556000', '1487926800', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('63', '16', '6', '跟进结案', '1', '73', '陈曦', '1487988000', '1488015000', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('64', '17', '3', '初期干预计划', '1', '62', '张惠', '1488243600', '1488272400', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('65', '17', '2', '快速对接', '1', '71', '刘永光', '1488247200', '1488618000', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('66', '17', '6', '跟进结案', '1', '67', '白帆', '1488675600', '1488686400', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('67', '18', '3', '初期干预计划', '1', '65', '汪飘', '1488765600', '1488790800', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('68', '18', '2', '快速对接', '1', '64', '邱永静', '1488852000', '1488877200', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('69', '18', '5', '反馈进展', '1', '71', '刘永光', '1488938400', '1488877200', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('70', '19', '3', '初期干预计划', '1', '66', '王灿', '1488679200', '1488938400', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('71', '19', '2', '快速对接', '1', '64', '邱永静', '1489024800', '1489136400', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('72', '19', '4', '实地勘察', '1', '63', '谢松', '1489111200', '1489118400', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('73', '19', '6', '跟进结案', '3', '72', '王玲', '1489194000', '1489221600', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('74', '20', '4', '实地勘察', '1', '62', '张惠', '1489626000', '1489636800', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('75', '20', '3', '初期干预计划', '1', '63', '谢松', '1489712400', '1489741200', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('76', '20', '2', '快速对接', '1', '65', '汪飘', '1489712400', '1490000400', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('77', '20', '5', '反馈进展', '1', '67', '白帆', '1490335200', '1490346000', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('78', '20', '6', '跟进结案', '1', '60', '姚明达', '1490419800', '1490434200', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('79', '21', '1', '诉求登记', '1', '66', '王灿', '1490838900', '1490846400', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('80', '21', '2', '快速对接', '1', '63', '谢松', '1490925600', '1490932800', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('81', '21', '6', '跟进结案', '1', '60', '姚明达', '1491008400', '1491015600', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('82', '22', '3', '初期干预计划', '3', '72', '王玲', '1490925600', '1490950800', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('83', '22', '4', '实地勘察', '3', '72', '王玲', '1491354000', '1491364800', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('84', '22', '5', '反馈进展', '1', '74', '徐珍珍', '1491526800', '1491555600', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('85', '22', '6', '跟进结案', '1', '62', '张惠', '1491613200', '1491638400', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('86', '23', '3', '初期干预计划', '1', '62', '张惠', '1491962400', '1492336800', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('87', '23', '5', '反馈进展', '2', '75', '徐颖', '1492394400', '1492682400', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('88', '23', '7', '反馈评估', '1', '62', '张惠', '1492682400', '1492768800', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('89', '24', '2', '快速对接', '1', '62', '张惠', '1493344800', '1493517600', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('90', '24', '5', '反馈进展', '1', '62', '张惠', '1493533800', '1493541000', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('91', '24', '7', '反馈评估', '1', '62', '张惠', '1493546400', '1493632800', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('92', '25', '3', '初期干预计划', '1', '65', '汪飘', '1493690400', '1493776800', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('93', '25', '5', '反馈进展', '1', '62', '张惠', '1493875800', '1493888400', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('94', '25', '7', '反馈评估', '1', '66', '王灿', '1493949600', '1494036000', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('95', '26', '3', '初期干预计划', '1', '62', '张惠', '1494122400', '1494130200', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('96', '26', '4', '实地勘察', '1', '64', '邱永静', '1494759600', '1494766200', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('97', '26', '5', '反馈进展', '1', '66', '王灿', '1495360800', '1495370400', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('98', '26', '7', '反馈评估', '1', '65', '汪飘', '1496570400', '1496575800', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('99', '27', '2', '快速对接', '1', '62', '张惠', '1490355000', '1490360400', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('100', '27', '5', '反馈进展', '1', '63', '谢松', '1494640800', '1494727200', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('101', '28', '4', '实地勘察', '1', '62', '张惠', '1495245600', '1495270800', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('102', '29', '2', '快速对接', '1', '60', '姚明达', '1495693800', '1495697400', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('103', '29', '3', '初期干预计划', '2', '76', '廖睿', '1495697400', '1495701000', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('104', '29', '7', '反馈评估', '1', '62', '张惠', '1495701000', '1495787400', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('105', '30', '3', '初期干预计划', '1', '62', '张惠', '1496282400', '1496800800', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('106', '30', '4', '实地勘察', '2', '77', '段莹莹', '1496800800', '1496995200', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('107', '30', '7', '反馈评估', '1', '62', '张惠', '1496995200', '1497081600', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('108', '31', '3', '初期干预计划', '1', '62', '张惠', '1495591200', '1495677600', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('109', '31', '5', '反馈进展', '1', '67', '白帆', '1495695600', '1495702800', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('110', '31', '7', '反馈评估', '1', '62', '张惠', '1495764000', '1495792800', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('111', '32', '3', '初期干预计划', '1', '62', '张惠', '1495764000', '1495850400', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('112', '32', '5', '反馈进展', '1', '65', '汪飘', '1496628000', '1496714400', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('113', '32', '7', '反馈评估', '1', '64', '邱永静', '1497232800', '1497751200', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('114', '33', '2', '快速对接', '1', '62', '张惠', '1498183200', '1498269600', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('115', '33', '3', '初期干预计划', '2', '75', '徐颖', '1498356000', '1498442400', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('116', '33', '5', '反馈进展', '1', '66', '王灿', '1498456800', '1498464000', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('117', '34', '3', '初期干预计划', '1', '62', '张惠', '1498874400', '1499220000', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('118', '34', '4', '实地勘察', '2', '78', '罗艳丽', '1499220000', '1499583600', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('119', '34', '7', '反馈评估', '1', '62', '张惠', '1499583600', '1499594400', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('120', '35', '3', '初期干预计划', '1', '62', '张惠', '1501293600', '1501380000', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('121', '35', '7', '反馈评估', '1', '62', '张惠', '1501380000', '1501398000', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('122', '36', '2', '快速对接', '1', '67', '白帆', '1501552800', '1501639200', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('123', '36', '5', '反馈进展', '2', '79', '谢爽', '1501655400', '1501660800', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('124', '36', '7', '反馈评估', '1', '62', '张惠', '1501660800', '1501747200', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('125', '37', '3', '初期干预计划', '1', '62', '张惠', '1501466400', '1501812000', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('126', '37', '7', '反馈评估', '1', '62', '张惠', '1501812000', '1501905600', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('127', '38', '3', '初期干预计划', '1', '62', '张惠', '1503367200', '1503396000', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('128', '38', '5', '反馈进展', '1', '62', '张惠', '1503396000', '1503482400', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('129', '39', '3', '初期干预计划', '1', '62', '张惠', '1503799200', '1503972000', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('130', '39', '5', '反馈进展', '1', '65', '汪飘', '1503972000', '1503990000', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('131', '39', '7', '反馈评估', '1', '63', '谢松', '1503990000', '1504076400', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('132', '40', '3', '初期干预计划', '1', '67', '白帆', '1505012400', '1505124000', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('133', '40', '5', '反馈进展', '1', '64', '邱永静', '1505192400', '1505206800', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('134', '40', '7', '反馈评估', '1', '62', '张惠', '1505206800', '1505293200', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('135', '41', '2', '快速对接', '2', '80', '蒲天乐', '1499306400', '1499320800', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('136', '41', '5', '反馈进展', '1', '81', '舒婧', '1499320800', '1499335200', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('137', '42', '2', '快速对接', '2', '80', '蒲天乐', '1491357600', '1492480800', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('138', '42', '5', '反馈进展', '1', '82', '王林琳', '1499392800', '1499400000', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('139', '43', '3', '初期干预计划', '2', '83', '冯小东', '1499047200', '1499133600', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('140', '43', '5', '反馈进展', '2', '84', '谢晶晶', '1499133600', '1499162400', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('141', '43', '7', '反馈评估', '1', '82', '王林琳', '1499162400', '1499248800', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('142', '44', '3', '初期干预计划', '1', '81', '舒婧', '1500084000', '1500343200', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('143', '44', '5', '反馈进展', '1', '81', '舒婧', '1500343200', '1500364800', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('144', '44', '7', '反馈评估', '1', '82', '王林琳', '1500364800', '1500451200', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('145', '45', '3', '初期干预计划', '2', '85', '周兰', '1500512400', '1500523200', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('146', '45', '5', '反馈进展', '1', '81', '舒婧', '1500523200', '1500537600', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('147', '45', '7', '反馈评估', '1', '82', '王林琳', '1500537600', '1500624000', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('148', '46', '3', '初期干预计划', '1', '65', '汪飘', '1499130000', '1499158800', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('149', '46', '4', '实地勘察', '1', '64', '邱永静', '1499234400', '1499245200', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('150', '46', '2', '快速对接', '2', '86', '何云娇', '1499306400', '1499760000', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('151', '46', '6', '跟进结案', '2', '86', '何云娇', '1499824800', '1499850000', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('152', '47', '3', '初期干预计划', '1', '64', '邱永静', '1502071200', '1502442000', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('153', '47', '4', '实地勘察', '1', '65', '汪飘', '1502503200', '1502787600', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('154', '47', '5', '反馈进展', '2', '87', '吕刚', '1503277200', '1503565200', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('155', '47', '6', '跟进结案', '1', '66', '王灿', '1506819600', '1507104000', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('156', '47', '7', '反馈评估', '2', '87', '吕刚', '1507683600', '1507690800', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('157', '48', '3', '初期干预计划', '1', '64', '邱永静', '1505354400', '1505379600', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('158', '48', '4', '实地勘察', '1', '67', '白帆', '1505437200', '1506589200', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('159', '48', '5', '反馈进展', '1', '63', '谢松', '1508724000', '1508749200', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('160', '48', '6', '跟进结案', '2', '87', '吕刚', '1509154200', '1509161400', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('161', '49', '1', '诉求登记', '3', '88', '张学玉', '1431825060', '1431826800', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('162', '49', '2', '快速对接', '3', '90', '尹婉琎', '1431829800', '1431831600', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('163', '49', '6', '跟进结案', '3', '88', '张学玉', '1432346400', '1432351800', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('164', '50', '1', '诉求登记', '3', '89', '刘婕', '1494983460', '1431826800', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('165', '51', '1', '诉求登记', '3', '90', '尹婉琎', '1493290800', '1493296800', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('166', '51', '2', '快速对接', '3', '89', '刘婕', '1493344800', '1493348400', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('167', '51', '6', '跟进结案', '3', '88', '张学玉', '1494640800', '1494642600', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('168', '52', '1', '诉求登记', '3', '91', '袁海容', '1502968260', '1502970000', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('169', '52', '2', '快速对接', '3', '89', '刘婕', '1502937000', '1502938800', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('170', '52', '6', '跟进结案', '3', '92', '郭一辛', '1503453600', '1503459000', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('171', '53', '1', '诉求登记', '3', '93', '李志禺', '1509542340', '1509546180', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('172', '54', '1', '诉求登记', '3', '94', '杨橙', '1460251800', '1460254800', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('173', '54', '5', '反馈进展', '3', '88', '张学玉', '1472799600', '1472804100', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('174', '55', '1', '诉求登记', '3', '89', '刘婕', '1399532400', '1399620000', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('175', '55', '2', '快速对接', '3', '92', '郭一辛', '1399615200', '1399616400', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('176', '55', '4', '实地勘察', '3', '90', '尹婉琎', '1399617000', '1399620600', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('177', '55', '5', '反馈进展', '3', '88', '张学玉', '1399620600', '1399622400', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('178', '55', '6', '跟进结案', '3', '89', '刘婕', '1399687200', '1399688400', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('179', '56', '1', '诉求登记', '3', '90', '尹婉琎', '1465992300', '1465995600', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('180', '57', '1', '诉求登记', '3', '91', '袁海容', '1404097200', '1404098400', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('181', '57', '2', '快速对接', '3', '92', '郭一辛', '1404180600', '1404181200', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('182', '57', '4', '实地勘察', '3', '91', '袁海容', '1404181800', '1404183600', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('183', '57', '5', '反馈进展', '3', '92', '郭一辛', '1404184200', '1404185400', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('184', '57', '6', '跟进结案', '3', '89', '刘婕', '1404284400', '1404285300', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('185', '58', '1', '诉求登记', '3', '90', '尹婉琎', '1463722080', '1463721480', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('186', '59', '1', '诉求登记', '3', '92', '郭一辛', '1410142800', '1410144000', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('187', '59', '2', '快速对接', '3', '90', '尹婉琎', '1410228600', '1410229800', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('188', '59', '4', '实地勘察', '3', '91', '袁海容', '1410229800', '1410233400', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('189', '59', '5', '反馈进展', '3', '90', '尹婉琎', '1410234000', '1410235200', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('190', '59', '6', '跟进结案', '3', '91', '袁海容', '1410418800', '1410421500', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('191', '60', '1', '诉求登记', '3', '92', '郭一辛', '1455437280', '1455437280', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('192', '61', '2', '快速对接', '3', '93', '李志禺', '1411527000', '1411527600', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('193', '61', '4', '实地勘察', '3', '92', '郭一辛', '1411528200', '1411530000', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('194', '61', '5', '反馈进展', '3', '90', '尹婉琎', '1411530000', '1411530600', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('195', '61', '6', '跟进结案', '3', '93', '李志禺', '1411542000', '1411543200', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('196', '62', '1', '诉求登记', '3', '94', '杨橙', '1467893520', '1467893520', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('197', '63', '1', '诉求登记', '3', '88', '张学玉', '1422950400', '1422951600', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('198', '63', '2', '快速对接', '3', '91', '袁海容', '1423018200', '1423019400', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('199', '63', '4', '实地勘察', '3', '89', '刘婕', '1423019700', '1423022400', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('200', '63', '5', '反馈进展', '3', '92', '郭一辛', '1423023000', '1423024200', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('201', '63', '6', '跟进结案', '3', '88', '张学玉', '1423189800', '1423191300', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('202', '64', '1', '诉求登记', '3', '89', '刘婕', '1471962900', '1471966500', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('203', '65', '1', '诉求登记', '3', '90', '尹婉琎', '1427875200', '1427876400', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('204', '65', '2', '快速对接', '3', '94', '杨橙', '1427877000', '1427878800', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('205', '65', '3', '初期干预计划', '3', '90', '尹婉琎', '1427878800', '1427880000', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('206', '66', '1', '诉求登记', '3', '90', '尹婉琎', '1461590100', '1461590100', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('207', '67', '2', '快速对接', '3', '91', '袁海容', '1427940000', '1427940600', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('208', '67', '4', '实地勘察', '3', '90', '尹婉琎', '1427940600', '1427944200', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('209', '67', '5', '反馈进展', '3', '88', '张学玉', '1427944200', '1427945400', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('210', '67', '6', '跟进结案', '3', '91', '袁海容', '1428044400', '1428045600', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('211', '68', '1', '诉求登记', '3', '92', '郭一辛', '1470273300', '1470273300', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('212', '69', '1', '诉求登记', '3', '93', '李志禺', '1436666100', '1436667600', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('213', '69', '2', '快速对接', '3', '91', '袁海容', '1436853600', '1436854800', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('214', '69', '4', '实地勘察', '3', '92', '郭一辛', '1436855400', '1436859600', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('215', '69', '5', '反馈进展', '3', '93', '李志禺', '1436860200', '1436861400', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('216', '69', '6', '跟进结案', '3', '93', '李志禺', '1436929200', '1436930100', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('217', '70', '1', '诉求登记', '3', '94', '杨橙', '1475986140', '1475989800', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('218', '71', '1', '诉求登记', '3', '88', '张学玉', '1451529000', '1451530200', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('219', '71', '2', '快速对接', '3', '92', '郭一辛', '1451542200', '1451542800', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('220', '71', '4', '实地勘察', '3', '90', '尹婉琎', '1451543400', '1451547600', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('221', '71', '5', '反馈进展', '3', '93', '李志禺', '1451547600', '1451548800', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('222', '71', '6', '跟进结案', '3', '88', '张学玉', '1451700000', '1451701500', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('223', '72', '1', '诉求登记', '3', '89', '刘婕', '1481256540', '1481260200', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('224', '73', '1', '诉求登记', '3', '90', '尹婉琎', '1509593580', '1509596400', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('225', '73', '2', '快速对接', '3', '94', '杨橙', '1509676200', '1509678600', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('226', '73', '3', '初期干预计划', '3', '93', '李志禺', '1509688800', '1509690600', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('227', '73', '5', '反馈进展', '3', '90', '尹婉琎', '1509692400', '1509693600', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('228', '74', '1', '诉求登记', '3', '91', '袁海容', '1422932460', '1422936000', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('229', '75', '1', '诉求登记', '3', '92', '郭一辛', '1460775660', '1460779200', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('230', '76', '1', '诉求登记', '3', '93', '李志禺', '1425351660', '1425355200', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('231', '77', '1', '诉求登记', '3', '94', '杨橙', '1428807660', '1428811200', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('232', '78', '1', '诉求登记', '3', '88', '张学玉', '1490331660', '1490335200', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('233', '79', '1', '诉求登记', '3', '89', '刘婕', '1453946700', '1453950000', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('234', '80', '1', '诉求登记', '3', '90', '尹婉琎', '1463382060', '1463385600', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('235', '81', '1', '诉求登记', '3', '91', '袁海容', '1453863900', '1453867200', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('236', '82', '1', '诉求登记', '3', '92', '郭一辛', '1453950300', '1453953600', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('237', '83', '1', '诉求登记', '3', '93', '李志禺', '1430622060', '1430625600', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('238', '84', '1', '诉求登记', '3', '94', '杨橙', '1420599660', '1420603200', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('239', '85', '1', '诉求登记', '3', '88', '张学玉', '1439953260', '1439956800', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('240', '86', '1', '诉求登记', '3', '89', '刘婕', '1429412460', '1429416000', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('241', '87', '1', '诉求登记', '3', '90', '尹婉琎', '1426734060', '1426737600', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('242', '88', '1', '诉求登记', '3', '91', '袁海容', '1428026460', '1428030000', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('243', '89', '1', '诉求登记', '3', '92', '郭一辛', '1433484060', '1433487600', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('244', '90', '1', '诉求登记', '3', '93', '李志禺', '1461485100', '1461488400', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('245', '91', '1', '诉求登记', '3', '94', '杨橙', '1428634860', '1428638400', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('246', '92', '1', '诉求登记', '3', '88', '张学玉', '1452823500', '1452826800', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('247', '93', '1', '诉求登记', '3', '91', '袁海容', '1463328060', '1463331600', null, null, null, null, null, null, null, null, null);
INSERT INTO `xxgc_process` VALUES ('248', '93', '2', '快速对接', '3', '92', '郭一辛', '1463457600', '1463461260', null, null, null, null, null, null, null, null, null);

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
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COMMENT='角色表';

-- ----------------------------
-- Records of xxgc_role
-- ----------------------------
INSERT INTO `xxgc_role` VALUES ('1', '超级管理员', '0', '1', '拥有网站最高管理员权限！', '1329633709', '1329633709', '0');
INSERT INTO `xxgc_role` VALUES ('2', '系统管理员', null, '1', '包含账户管理，活动通知管理', '1498378303', '1508299696', '0');
INSERT INTO `xxgc_role` VALUES ('3', '账户管理角色', null, '1', '', '1513663991', '0', '0');

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
INSERT INTO `xxgc_role_user` VALUES ('3', '4');

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
  `t_stage_id` tinyint(2) DEFAULT NULL,
  `user_id` bigint(20) NOT NULL,
  `t_examine_explain` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`t_id`),
  KEY `index_search` (`t_create_time`,`t_type`,`t_status`,`t_stage_id`)
) ENGINE=InnoDB AUTO_INCREMENT=94 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of xxgc_task
-- ----------------------------
INSERT INTO `xxgc_task` VALUES ('1', '1472439600', '四川文轩职业学院关于新生偷拿同学物品被打事件', '四川文轩职业学院五年制高职新生何巨芬（女），因偷拿同寝室新生董某（女）等人的衣物拒不承认，双方发生口角和肢体冲突，之后现场视频流出，引发不明真相的网民围观、热议。截至8月31日9时许，百度贴吧关于此事的主题帖已达41条，此外一些微博也在转发，引起广泛的网络舆情，被打女生何巨芬因此承受了巨大的心理压力。', '1', 'null', '4', '6', '62', '张惠', '6', '2', null);
INSERT INTO `xxgc_task` VALUES ('2', '1477447200', '大学生求职诈骗案', '正读大四的小黄今年7月初进入复兴教育科技有限公司实习，据其介绍，公司曾到学校做过宣讲，面试时对方保证“一般通过4个月实习都能通过考核，工资在4500-5000元，购买五险一金。不能通过考核也将推荐就业。”但都需要交纳19800元费用，由于没有一次支付能力，小黄选择了公司推荐的网贷进行支付。但签订实习协议时，该项费用称为“实习培养费”。与小黄有类似经历的还有20多名大四在校生，20多位实习生仅3人通过考核，绝大多数未通过考核者都未实现就业。且大部分学生是通过公司推荐的网贷缴纳实习费，仍需自己承担这笔贷款。', '3', 'null', '4', '10', '62', '张惠', '5', '2', null);
INSERT INTO `xxgc_task` VALUES ('3', '1478484000', '12岁男孩离家出走案件', '11月7日，华西都市报爆出12岁的初一学生小鹏（化名）突然离家出走。失踪前三天，小鹏还与母亲于秀英写短信，称自己去朋友家散散心，几天就回来。可于秀英担心，孩子会不会已经被坏人控制，拐骗到其他地方，后来联系完全中断了。响应中心工作人员在查阅到此条新闻后，迅速与孩子母亲取得了联系，了解到孩子目前结识了社会不良青年，并且有轻微厌学情绪，通过后续跟进，孩子已于11月11日归家，但中途又短时间离家出走了一次，为了解孩子离家出走的真正原因，以及提供更加针对性的服务，响应中心将于近期开展入户走访。', '4', 'null', '4', '13', '67', '白帆', '5', '2', null);
INSERT INTO `xxgc_task` VALUES ('4', '1479362400', '首次防拐进校园讨论会', '为了更好地提升校园学生安全防范意识，成都团市委指导成都青年之声@互动∙社交∙维权网络响应中心拟联合苏坡桥派出所开展防拐知识进校园活动。为了确保活动效果，2016年11月17日，响应中心4名工作人员来到了苏坡桥派出所，与何所长及经验丰富的熊警官就讲座内容进行了热烈的工作讨论，事后派出所民警着力PPT课程制作，响应中心开始情景剧本撰写及排演。', '4', 'null', '4', '14', '60', '姚明达', '2', '2', null);
INSERT INTO `xxgc_task` VALUES ('5', '1480557600', '提升安全意识之情境测试活动', '2016年12月1日，成都青年之声@互动∙社交∙维权网络响应中心发布了一条招募信息——安全防范意识情境测试。在消息发出后，收到了众多家长的网络、电话报名，根据本次情境安排，共选定了5名学生作为测试者，测试项目为假扮熟人、金钱诱惑以及假扮好人等测试小学生的安全意识并进行相关教育。', '4', 'null', '4', '19', '63', '谢松', '5', '2', null);
INSERT INTO `xxgc_task` VALUES ('6', '1480644000', '防拐进校园之情景剧拍摄工作', '响应中心为前往成都实验小学开展防拐进校园宣传活动，为确保实地宣传活动取得良好成效，响应中心在温江区涌泉学校及部分学生家长的大力支持下，于2016年12月2日-4日联合西南财经大学社会工作研究生志愿者，在学校及家中共拍摄了四组情景剧视频，拍摄组总共设定了三个情景剧本，分别为金钱诱惑、冒充熟人及假装好人获取信任三种类型，并挑选了5名学生友情出演，尽管孩子们都没有表演经验，但整个情景剧当中没有太多表演成分，活灵活现地展现了他们身处拐卖情景时，正确与错误的真实表现。', '4', 'null', '4', '22', '64', '邱永静', '4', '2', null);
INSERT INTO `xxgc_task` VALUES ('7', '1481247000', '天府新区参访活动', '为了青年人更加了解成都以及天府新区的发展概况，促进青年人之间的互动交流，缓解青年人面临的职业困境和烦恼，引导其树立积极向上的事业观，为其后期的职业生涯规划助力，响应中心于2016年12月9日组织开展了“青年就业邦——纵览天府新区，畅谈美好未来”主题活动。此次活动主要通过QQ、微信、微博线上招募有此需求的在校大学生，并紧紧围绕青年人的职业需求设计活动内容，包括成都市规划馆参访、座谈会两个环节。在成都市规划馆参访中，参与活动的一行人领略了成都的古往今来。', '7', 'null', '4', '27', '60', '姚明达', '7', '2', null);
INSERT INTO `xxgc_task` VALUES ('8', '1481950800', '白鹭湾骑行交友减压趴', '随着社会压力不断增大，青年正常工作日忙加班，周末忙休息睡觉已成为了一种常态，成都青年之声网络平台也不时有青年反映被生活重担压得喘不过气来，甚至已经失去了亲近大自然的机会。因此成都青年之声@互动·社交·维权网络响应中心于2016年12月17日，在三圣乡白鹭湾湿地公园组织了一场主题为“释放压力·享受生活”的青年骑行交友减压活动。参与此次活动的中有80%青年都表示存在一定程度的生活压力，甚至有20%青年表示压力已经严重负荷，随时面临崩塌倾向，而这也表明为青年开展系列压力释放活动已成为迫切诉求。', '5', 'null', '4', '32', '62', '张惠', '7', '2', null);
INSERT INTO `xxgc_task` VALUES ('9', '1482385800', '儿童防拐安全教育活动', '近几个月来，关于儿童被拐的报道屡见不鲜。如何有效减少及避免儿童被拐事件发生，既需要家庭、学校、社区共同防御，同时也需要提升学生自身防拐意识与能力。基于此，团市委组织响应中心于2016年12月22日，在成都实验小学西区分校针对300余名学生开展防拐普法宣传活动。此次活动采取讲座与情景剧表演、普法视频相结合的创新方式开展，旨在内化及提升在校学生安全意识。', '4', 'null', '4', '37', '60', '姚明达', '7', '2', null);
INSERT INTO `xxgc_task` VALUES ('10', '1482564600', '“银色圣诞∙真挚相约”平安夜社交主题活动', '夜色阑珊，流光溢彩，2016年的尾声即将敲响，圣诞的脚步也悄然而至。在新年即将到来之际，大家不仅会回望一年的付出和收获，同时也感叹时光荏苒，想念家的温暖和友情的陪伴。基于这一需求，成都青年之声@互动∙社交∙维权网络响应中心于2016年12月24日17:30-20:00，在武侯区社会治理创新服务园组织策划了一场“银色圣诞∙真挚相约”平安夜主题狂欢活动，通过精心筹备和设计，旨在让青年人一起度过一个幸福、祥和、狂欢的平安夜，丰富其精神文化生活，促进青年之间的交流与互动。', '6', 'null', '4', '41', '62', '张惠', '7', '2', null);
INSERT INTO `xxgc_task` VALUES ('11', '1483425000', '共青团与人大代表、政协委员面对面', '面对面活动是引导青年有序政治参与的有效方式和代表维护青年合法权益的重要举措，探索了共青团在青年中传播党的政治行为和组织行为的新路径。通过开展面对面活动，共青团可以通过深入调查研究，倾听、了解青年呼声，广泛了解、准确把握涉及青年合法权益维护和发展的典型个案和普遍性问题，在“两会”上发出集中呼吁，推动政策制定和法律法规的制定、修改和完善，更好地维护青年群体的个体利益和群体利益，从而团结和凝聚更广大青年，进一步增强共青团组织的吸引力和凝聚力。', '6', 'null', '4', '45', '60', '姚明达', '7', '2', null);
INSERT INTO `xxgc_task` VALUES ('12', '1484445600', '“刚好遇见你”青年社交联谊', ' 随着现代生活与工作压力的俱增，越来越多的青年群体因工作太忙、交友圈太窄、择偶要求太高等因素，逐渐步入单身贵族行列。然而随着年龄递增，大龄剩男剩女也开始为此困扰，面对家人、朋友催婚，通常只能用“没有遇到合适的”予以回应。但若没有合适的交友平台，没有靠谱的同龄群体，又怎能遇到合适的TA呢？基于此，成都青年之声@互动∙社交∙维权网络响应中心特组织了一场交友联谊活动，通过搭建平台、聚集青年，为广大单身朋友提供一个相识异性的机会。', '6', 'null', '4', '49', '62', '张惠', '6', '2', null);
INSERT INTO `xxgc_task` VALUES ('13', '1484964000', '西昌文化生活户外活动', '随着社会压力不断增大，青年正常工作日忙加班，周末忙休息睡觉已成为了一种常态，成都青年之声网络平台也不时有青年反映被生活重担压得喘不过气来，甚至已经失去了亲近大自然的机会。2017年1月22-23日，成都青年之声网络响应中心联合光华社工共同开展了“西昌琼海湿地公园&泸山户外活动”，此次活动由四川光华社会工作服务中心统筹协调，成都青年之声网络响应中心负责活动策划及执行，共计70余名光华员工及社会青年参与了此次为期两天的户外活动。', '6', 'null', '4', '53', '74', '徐珍珍', '7', '2', null);
INSERT INTO `xxgc_task` VALUES ('14', '1486777800', '欢乐元宵活动', '一年一度的元宵节来临之际，商业街社区青年之家携手成都青年之声网络响应中心，于2月11日上午在商业街社区开展了扎花灯、包汤圆的欢乐元宵活动，来自党政机关、武警支队、高校、房地产等行业的20余名青年参与了此次活动。青年制作出了各式各样的南瓜灯。来自社区的核心志愿者教授还教大家包汤圆，青年们各自分工，一些人摆盘，一些人和面，一些人分馅，整个过程都其乐融融，大家也充分发挥创意，包出了麻将、象棋、炸弹等独具特色的汤圆。', '7', 'null', '4', '56', '73', '陈曦', '6', '2', null);
INSERT INTO `xxgc_task` VALUES ('15', '1487383200', '金龙长城登山减压行', '随着人们生活水平不断提高，青年群体的生活及工作压力也越来越大，成都青年之声网站上也不时有青年反映缺乏压力释放渠道、长时间没有亲近自然、甚至丢掉了健康生活方式等问题。基于此，成都青年之声@互动·社交·维权网络响应中心于2017年2月18日，特在龙泉驿金龙长城组织了一场主题为“乐享自然·金龙长城登山减压行”户外活动。响应中心通过线上招募的方式，招募到了来自党政机关、金融、建筑、保险、公益、个体工商户等行业的19名青年参与了此次活动。', '6', 'null', '4', '60', '62', '张惠', '6', '2', null);
INSERT INTO `xxgc_task` VALUES ('16', '1487988000', '雷风年会志愿服务行动', '在成都有这样一支志愿服务组织，它诞生于2008年汶川地震，前后九年时间里，开展了数百次防灾减灾、应急救援及困难帮扶工作，累计服务了上万人次，它就是雷风防灾减灾应急志愿者总队。在雷风志愿服务总队年会之际，为进一步加深志愿者的归属感及认同感，成都青年之声@互动·社交·维权网络响应中心于2017年2月25日，受邀为其在锦江区文化院坝策划实施了一场别开生面的年会活动，整个活动由节目表演、互动游戏、抽奖环节组成，来自雷风志愿总队的40多位志愿者参与了此次活动。', '7', 'null', '4', '63', '73', '陈曦', '6', '2', null);
INSERT INTO `xxgc_task` VALUES ('17', '1488679200', '学雷锋行动', '在一年一度的学雷锋纪念日之际，越来多青年群体反馈想要参加志愿服务活动，而部分残障青年也反馈城市无障碍道路存在违占违停现象，以至于残障青年不便于出行。为更好地弘扬雷锋精神及促进残健共融，成都青年之声网络响应中心特联合暖心残障事业发展中心，于3月5日带领20余名青年群体走进武侯区九如村社区，开展了城市无障碍道路文明劝导服务，在一定程度上深化青年的无障碍服务意识，也方便了残障群体出行。', '4', 'null', '4', '66', '67', '白帆', '6', '2', null);
INSERT INTO `xxgc_task` VALUES ('18', '1488938400', '“把爱带回家”水果DIY&专属画作活动', '在一年一度的三八妇女节之际，不少女性青年也被单位获许放假半天，为了让这些女性青年度过一个不一样的妇女节，成都青年之声特在四川省妇联的支持下，于2017年3月8日在四川省妇女干部学校，联合英特尔、成都根与芽、心传青少年、木瞳木作坊等多家单位，共同为女性青年开展了DIY水果拼盘&专属画作、木工体验、花艺沙龙、竹编体验等活动。', '7', 'null', '4', '69', '71', '刘永光', '5', '2', null);
INSERT INTO `xxgc_task` VALUES ('19', '1489194000', '“女生青春期自我保护”营会活动', '2017年3月11日，温江区涌泉滴水公益社会组织服务中心联合成都青年之声网络响应中心，在温江区涌泉学校针对44名10-13岁的女生开展了“女生青春期自我保护”营会活动。此次营会主要包含认识自己、接纳自己、身体界限三个环节的主题内容。一方面通过小组活动，结合知识讲解，帮助成员初步了解青春期生理变化，解答青春期女生问题困惑，引导女生认识自己、接纳自己；另一方面通过情景剧模拟现实性骚扰情况，引导女生关注、学习性侵相关知识及技巧，并正确看待两性关系，树立正向的人生观与价值观。', '4', 'null', '4', '73', '72', '王玲', '6', '2', null);
INSERT INTO `xxgc_task` VALUES ('20', '1489627800', '“刚好遇见你”社交联谊主题活动', '随着现代生活与工作压力的俱增，越来越多的青年群体因工作太忙、交友圈太窄、择偶要求太高等因素，逐渐步入单身贵族行列。然而随着年龄递增，大龄剩男剩女也开始为此困扰，面对家人、朋友催婚，通常只能用“没有遇到合适的”予以回应。但若没有合适的交友平台，没有靠谱的同龄群体，又怎能遇到合适的TA呢？基于此，成都青年之声@互动∙社交∙维权网络响应中心特组织了一场交友联谊活动，通过搭建平台、聚集青年，为广大单身朋友提供一个相识异性的机会。', '4', 'null', '4', '78', '60', '姚明达', '6', '2', null);
INSERT INTO `xxgc_task` VALUES ('21', '1490842500', '大学生艾思邦求职被骗案', '2017年3月30日，成都团市委接到一通维权电话，来自四川师范大学的李同学，声称埃思邦公司借由实习和创业培训对成都多名大学生进行诈骗，现多名学生面临蜡笔分期网贷平台暴力催贷的情形。并希望团市委介入并关注该事件，参加3月31日下午两点半在成都航天科技大厦43楼众创空间会议室举行的见面会。接到此通电话后，团委书记高度重视，立马安排权益部及青年之声网络响应中心与其对接。', '3', 'null', '4', '81', '60', '姚明达', '6', '2', null);
INSERT INTO `xxgc_task` VALUES ('22', '1491629400', '“爱情延长线”绿道骑游活动', ' 随着现代交通工具便捷，越来越私家车走上马路，大都市经常也被堵得水泄不通。为了方便出行，许多市民不断呼吁节能环保、低碳出行，但仍有不少市民攀比成风，也在社会上营造了一种“炫富攀比”的风气。为呼吁青年切实解决城市拥堵问题，以及启发青年不攀比的婚恋价值观，成都青年之声@互动∙社交∙维权网络响应中心特针对夫妻及情侣组织策划了一场“爱情延长线”低碳出游活动，通过实际行动践行低碳出行的环保理念，并通过游戏互动环节让青年群体体会相知相守到白头的婚恋真谛，从而摒弃攀比的婚恋价值观。', '6', 'null', '4', '85', '62', '张惠', '6', '2', null);
INSERT INTO `xxgc_task` VALUES ('23', '1492999200', '“净水丽成都”之成都污水处理青年参访', '此次活动主要参观了兴蓉集团的污水处理厂及污泥处理厂，期间工作人员详细耐心讲解污水处理流程和工作原理，青年大学生也认真倾听，并纷纷拿出相机记录了污水及污泥处理工序。此后在交流座谈期间，青年大学生也踊跃提问，纷纷抛出对污水、污泥处理过程中的疑问，也有青年疑惑饮用水中是否会有污水处理厂排出的水，工作人员详细解释了饮用水在河道上游，并有严格的质监、质检和消毒流程，因而不用担心饮用自来水问题。', '4', 'null', '4', '88', '62', '张惠', '7', '2', null);
INSERT INTO `xxgc_task` VALUES ('24', '1493533800', '普法维权站——“向校园欺凌say no”文艺汇演', '成都青少年普法维权纠纷调解响应中心计划开展一场200-300人的“向校园欺凌say no”文艺汇演活动，以学生为主要表演者，围绕“防校园欺凌”的主线，安排一场包含皮影戏、无声电影、音乐剧、诗歌朗诵、演讲、歌曲演唱（改编为防欺凌）等文艺演出，其中贯穿校园欺凌的不同场景、形式、应对等内容，通过一场视听盛宴，让学生学习到防校园欺凌的正确做法，让社会大众引起对校园欺凌事件的重视程度，从而在社会层面营造一个和谐友爱的社会氛围。', '7', 'null', '4', '91', '62', '张惠', '7', '2', null);
INSERT INTO `xxgc_task` VALUES ('25', '1493863200', '“寻找低碳践行者”宣传活动', '成都青年之声网络响应中心特联合商业街社区青年之家在宽窄巷子及人民公园共同开展了“绿色低碳 ∙ 发现美丽中国典范城市践行者”活动。通过知识竞答、徒步、路演、派发绿丝带及践行者便利贴的方式，呼吁市民朋友在日常生活中践行绿色低碳理念，真正达到全面建设美丽中国典范城市的目的。', '4', 'null', '4', '94', '66', '王灿', '7', '2', null);
INSERT INTO `xxgc_task` VALUES ('26', '1494133200', '“轻松出发吧”青年减压小组活动', '2017年5月7日，在西南财经大学柳林校区通博楼A509活动室成功开展了“轻松出发吧”青年减压小组的前两节活动。本次活动的目的主要是让组员相互认识，初步建立小组关系以及帮助组员初识压力。在持续2小时的减压小组活动中，“接公仔”、“找相似”的游戏互动，让组员一步步地加深彼此认识和了解；“最高纪律”、“压力馅饼”以一种形象轻松的方式让组员能够认识和表达自己的压力，同时也起到了增进小组凝聚力的效果。小组通过游戏互动的形式，营造轻松的小组氛围，让组员对小组充满信心和期待，并乐于在小组中贡献自己的力量。', '4', 'null', '4', '98', '65', '汪飘', '7', '2', null);
INSERT INTO `xxgc_task` VALUES ('27', '1494637200', '第二届成都社会组织篮球联赛', '由四川省群团组织社会服务中心支持，成都社会组织篮球联赛组委会主办的第二届成都社会组织篮球联赛5月13日在成都体育学院篮球场激情开赛。当天近30家社会组织组成的9支队伍整齐亮相，同场竞技吸引了近200位公益同仁到场观战助威。', '7', 'null', '4', '100', '63', '谢松', '5', '2', null);
INSERT INTO `xxgc_task` VALUES ('28', '1495245600', '520中式婚礼体验', '随着现代生活压力增大，越来越多青年群体因工作太忙、交友圈太窄等因素，逐渐步入单身行列，然而伴随年龄递增，被父母逼婚的情况也越来越普遍。基于此，团中央专门发文要大力解决大龄青年的婚恋问题，因而成都团市委旗下的成都青年之声@互动∙社交∙维权网络响应中心，于2017年5月20日针对24-28岁的单身青年，组织了一场“一见青心、缘来是你”低碳中式传统婚礼体验活动。整场活动精彩纷呈，青春洋溢，不仅仅给单身青年提供了相识、相知的机会，而且排解了大家的工作和生活带来的压力，搭建了一座友谊的桥梁，拓展了原本相对狭小的交际面和单调的生活空间，促进了单身青年之间的相互了解与沟通，得到了青年朋友们的充分肯定。\n', '7', 'null', '4', '101', '62', '张惠', '4', '2', null);
INSERT INTO `xxgc_task` VALUES ('29', '1495674000', '青年大学生青春自护专题座谈活动', '成都团市委联合成都青年之声网络响应中心，在青羊区团委的大力支持下，邀请了24名人大代表、政协委员及即将毕业的高校大学生，于2017年5月25日在西南财经大学光华校区开展了青年大学生青春自护专题座谈活动，共同探讨了青年大学生求职过程中容易遇到的问题及困惑，以及遇到求职陷阱后如何有效维权等相关议题内容。', '4', 'null', '4', '104', '62', '张惠', '7', '2', null);
INSERT INTO `xxgc_task` VALUES ('30', '1496988000', '低碳手工之咖啡渣作画活动', '成都青年之声网络响应中心特联合成华区团委、手工制作单位，于2017年6月9日，在成华区保和街道团结社区青年之家开展了低碳手工再利用——咖啡渣作画活动。通过将废弃的咖啡渣制作成美丽的绘画工艺品，一方面充分利用了咖啡渣的实际功效，避免浪费，另一方面也做到了资源再利用，减少了咖啡渣对环境的污染，从而通过实际行动来践行低碳理念。', '4', 'null', '4', '107', '62', '张惠', '7', '2', null);
INSERT INTO `xxgc_task` VALUES ('31', '1495677600', '“助力青年家长，关爱儿童成长”教育讲座', '本次讲座由王玲主讲，围绕主题“跟随孩子的脚步——关注幼儿心理发展敏感期”展开。讲座内容涉及不同年龄阶段儿童的敏感期是特征？如何发展儿童敏感性？父母的应对方式及注意事项等等。讲座生动形象，同时又接近现实生活，现场家长积极与讲师互动，分享自己在教养孩子过程中的问题和心得。讲座结束后的交流环节中，青年家长们纷纷提出自己的疑问和困惑，讲师王玲都尽力一一解答，分享自己的心得，同时也把好的关于家庭教育的书籍、信息资源等分享给大家。', '4', 'null', '4', '110', '62', '张惠', '7', '2', null);
INSERT INTO `xxgc_task` VALUES ('32', '1497762000', '“刚好遇见你”社交联谊主题活动', '锦江区团委特联合成都青年之声于2017年6月18日，在成都市锦江区镋钯街88号（88号青年空间）特组织了一场“刚好遇见你”大龄青年社交联谊主题活动，通过搭建平台、聚集青年，为广大单身朋友提供一个相识异性的机会，同时鼓励青年通过徒步等低碳出行方式前来参加活动，用实际行动践行低碳生活理念。', '7', 'null', '4', '113', '64', '邱永静', '7', '2', null);
INSERT INTO `xxgc_task` VALUES ('33', '1498460400', '禁毒宣传观影活动', '成都青年之声网络响应中心特联合锦江区团委，于2017年6月26日在E78青年空间，针对20余名青年群体开展了禁毒电影《明天》的观影活动。这种观影宣传模式，打破了传统的传单及讲座宣传，而通过视觉冲击深化了大家对毒品的认识，也警醒更多青年远离毒品。', '4', 'null', '4', '116', '66', '王灿', '5', '2', null);
INSERT INTO `xxgc_task` VALUES ('34', '1499560200', '生态绿色乡村游活动', '成都青年之声联合四川光华社会工作服务中心崇州社工站组织了19名青年群体，于2017年7月9日来到了崇州桤泉镇荷风水村，通过与当地居民游戏互动、赏荷花、摘葡萄、看孔雀、吃农家饭等方式，切实体验了农家生活。', '7', 'null', '4', '119', '62', '张惠', '7', '2', null);
INSERT INTO `xxgc_task` VALUES ('35', '1501380000', '“珍爱寻缘”相亲交友主题活动', '成都团市委旗下的成都青年之声@互动∙社交∙维权网络响应中心特联合珍爱网成都分公司，于2017年7月30日针对28-35岁的大龄青年，在成都市青羊区西村大院开麦啦休闲吧组织了一场“珍爱寻缘”相亲交友主题活动。', '7', 'null', '4', '121', '62', '张惠', '7', '2', null);
INSERT INTO `xxgc_task` VALUES ('36', '1501653600', '暑期青少年安全教育面对面活动', '为有效普及暑期青少年安全教育，以及减少青少年意外事故的发生，成都团市委特在双流区团委的大力支持下，邀请了双流区的人大代表、政协委员、10名学生及家长，于2017年8月2日在binggo咖啡开展了为期半天的共青团与人大代表、政协委员暑期安全教育面对面活动。此次活动通过面对面座谈、培训宣讲、应急演练等方式，让参与学生及家长在生动有趣的座谈会、视频播放、PPT演示、实战演练等过程中，收获到了暑期安全教育的有用知识，也更好地在人大代表、政协委员及青少年之间搭建一条沟通桥梁，以走近青少年的真实生活、了解青少年的真实想法，推动服务范围的扩大化和服务人群的多样化。', '4', 'null', '4', '124', '62', '张惠', '7', '2', null);
INSERT INTO `xxgc_task` VALUES ('37', '1501916400', '“手工插花，增绿宜家”活动', '成都青年之声网络响应中心特于2017年8月5日，邀请了专业花艺老师，在武侯区社会治理创新服务园，针对20名青年群体开展了“手工插花，增绿宜家”活动。', '7', 'null', '4', '126', '62', '张惠', '7', '2', null);
INSERT INTO `xxgc_task` VALUES ('38', '1503381600', '暑期青少年防灾减灾安全教育体验之旅', '成都青年之声特联合温江区涌泉学校于2017年8月22日，组织了36名9-13岁的青少年来到四川省防灾减灾教育馆，开展了暑期青少年防灾减灾安全教育体验之旅活动，通过切身体验来深化青少年的防灾减灾安全教育知识。整个体验环节层层相扣，既会讲述灾害发生的原理，也会直观感受灾害给人带来的不良感受，同时也会传授防灾减灾的应对方法。青少年们听得津津有味，尤其在体验地震灾害和泥石流的过程中不断惊呼，那一刻才真正深刻体会到灾害给我们带来的巨大危害，后面关于防雷击、地震躲避、火灾逃离等实战演练环节，青少年们也切身学习到了逃生的正确方法。', '4', 'null', '4', '128', '62', '张惠', '5', '2', null);
INSERT INTO `xxgc_task` VALUES ('39', '1503986400', '女童安全教育活动', '成都青年之声特于2017年8月29日，组织了30名7-10岁的青少年来到晋阳社区真爱梦想中心活动室，专门开展了女童安全教育讲座，通过生动的课堂讲解、体验式情景剧模拟、趣味小游戏及自我保护小视频，加深了自我保护的安全意识。', '4', 'null', '4', '131', '63', '谢松', '7', '2', null);
INSERT INTO `xxgc_task` VALUES ('40', '1505181600', '青少年生命安全教育大型公益活动', '成都团市委旗下的成都青年之声网络响应中心联合四川光华社会工作服务中心，于2017年9月12日，在成都实验小学西区分校针对100余名青少年开展了“青少年生命安全教育大型公益活动”，来自全市各地区的10余位青年社工志愿者参与了此次志愿活动。本次活动通过团市委联合四川光华社会工作服务中心招募了来自全市各地区的社工志愿者和文艺志愿者，旨在于通过让青年社工参与少年儿童的社会教育工作，引导儿童建立正确的认知观念和集体主义意识，培养学生在思考问题和处事交往方面的责任感。', '4', 'null', '4', '134', '62', '张惠', '7', '2', null);
INSERT INTO `xxgc_task` VALUES ('41', '1499306400', '“情暖童心 欢乐夏日——2017年成都市关爱留守儿童活动”', '为营造全社会关爱留守儿童的良好氛围，市文明办、团市委动员广大青年志愿者组织、社会组织、团队组织参与到关爱留守手拉手志愿服务项目中。活动现场，共青团成都文理学院委员会、成都市青年文明号金堂县第一人民医院康复医学科和成都春雨益教社会工作服务中心分别与金堂县韩滩慈济小学、成师附小金堂分校四（2）中队以及金堂县平桥乡石栀子村留守儿童之家签约结对，签署常态化关爱留守儿童工作协议，有针对性地开展学业辅导、法律咨询、健康检查、金秋助学等关爱活动，精准帮扶农村留守儿童。此外，市文明办、团市委还向留守儿童代表赠送了精美的假期礼物。', '7', 'null', '4', '136', '81', '舒婧', '5', '2', null);
INSERT INTO `xxgc_task` VALUES ('42', '1499392800', '返乡就业 陪伴是最好的关爱 ', '今年4月起，团市委联合金堂县委启动了减少农村留守学生（儿童）存量试点工作。按照“引回来”与“输出去”两个工作思路，一方面，开展留守儿童父母职业技能培训，提升与岗位需求的相适性，推动留守儿童父母立足本地就近就业；另一方面，积极协调留守儿童父母工作地政府职能部门，简化农民工子女随迁就读手续程序，鼓励有条件的外出务工家庭带领小孩外出共同生活，尽可能减少金堂县农村留守学生（儿童）存量。', '7', 'null', '4', '138', '82', '王林琳', '5', '2', null);
INSERT INTO `xxgc_task` VALUES ('43', '1499133600', '“安全小卫士”青少年暑期安全教育', '为了增强社区青少年暑假期间的居家安全意识，天府青少年活动阵地社工在7月4日，组织开展了“安全小卫士”青少年暑期安全教育活动。活动运用互动游戏的方式，让青少年加深对主题内容的印象，起到让青少年一看到危险物品就联想到危险后果的作用，同时也提高了青少年对居家安全的警惕性。', '4', 'null', '4', '141', '82', '王林琳', '7', '2', null);
INSERT INTO `xxgc_task` VALUES ('44', '1500084000', '七彩假期“爱心师者”关爱留守儿童志愿服务', '此次活动以“快乐学校”为载体，以留守儿童为活动对象，“爱心师者”关爱留守儿童志愿服务团的大学生青年志愿者担任上课老师，在暑期开展为期14天的志愿服务。志愿服务主要通过上趣味课形式进行，通过与传统课堂不一样的课程活动，让孩子们了解外面的世界；另外，团队将对学生进行走访，深入了解当地留守儿童现状，撰写报告，为教育事业的发展做出努力。', '7', 'null', '4', '144', '82', '王林琳', '7', '2', null);
INSERT INTO `xxgc_task` VALUES ('45', '1500530400', '“情暖童心”关爱保护农村留守儿童', '龙泉驿区“情暖童心”关爱保护农村留守儿童项目的各项工作都始终围绕着“服务农民群众的现实需求和给农民群众带来实惠”这个目标，关爱“留守学生”工作作为服务农民群众的一项重要工作，不仅让“留守学生”们感受到了家的温暖，也为外出务工人员安心出行解除了后顾之忧，同时还将整个关爱活动辐射到了农村的贫困学生、城市农民子女、单亲儿童、残疾儿童等更多需要帮助和关爱的青少年中，为促进和谐幸福首善区的建设作出了积极的贡献。', '5', 'null', '4', '147', '82', '王林琳', '7', '2', null);
INSERT INTO `xxgc_task` VALUES ('46', '1499738400', '“幸福新津，情暖童心”夏令营活动', '为使留守儿童度过一个充实、平安、快乐、有意义的暑期生活，团县委依托村（社区）留守儿童之家、青年之家，以“项目化”、“社会化”的运转模式，面向村（社区）青少年，围绕“幸福新津 情暖童心”主题，在全县12个镇乡（街道）开展乡村少年宫夏令营系列活动，为社区青少年提供思想引领、学业辅导、亲情陪伴、安全自护等菜单式服务，努力满足留守儿童多元化需求，引导社区留守儿童建立自信心，促进留守儿童知识、学识、见识及综合素质的提高。', '4', 'null', '4', '151', '86', '何云娇', '6', '2', null);
INSERT INTO `xxgc_task` VALUES ('47', '1502503200', '“快乐留守 予爱童行”七彩夏令营', '为深入贯彻落实共青团崇州市第十五次代表大会精神，崇州市“快乐留守•予爱童行”七彩夏令营活动以帮助留守儿童健康成长为宗旨，以帮扶留守儿童弥补感情缺失、提高道德素养为目标，本着“真诚、真心、真爱、真行动”的原则，开设体验式教学、法治教育、幸福成都游等3大系列主题课程活动。活动主要针对我市6至14周岁的留守儿童，分3期组织300名留守儿童开展4天3晚的七彩夏令营活动。由各乡镇（街道）团委按申报程序组织辖区内留守儿童免费报名参加。', '4', 'null', '4', '156', '87', '吕刚', '7', '2', null);
INSERT INTO `xxgc_task` VALUES ('48', '1505354400', '“情暖童心”关爱留守儿童微心愿圆梦行动', '为深入贯彻落实共青团崇州市第十五次代表大会精神，共青团崇州市委以“情暖童心”为主题，本着“真诚、真心、真爱、真行动”的原则，通过网络新媒体和自媒体为主要传播渠道，发动社会人士通过结对形式帮助留守儿童实现了“微心愿”，传播了城市温暖。活动包括收集心愿、征集认领、结对圆梦等三大部分。', '6', 'null', '4', '160', '87', '吕刚', '6', '2', null);
INSERT INTO `xxgc_task` VALUES ('49', '1431824400', '救救我的侄女', '泸州某女士来电称：泸州合江马街中学开始传播蓝鲸游戏（又称死亡游戏，最初由俄罗斯传入），其侄女（该校高一学生，17岁）已被卷入，近一个月来发现孩子有怪异行为：手上刺有蓝鲸图案；有划伤痕迹；半夜起来看恐怖电影；爬上当地最高的水台等。侄女过去学习成绩很好担任班长，自迷上该游戏以来，出现厌世情绪，辍学在家躲在被窝里玩游戏，不吃饭不外出不与家人交流，唯有意愿与心理老师交谈，家长为此感到非常担忧和害怕。目前家长在泸州找到关工委，关工委建议找共青团，故查询到12355心理热线，希望通过团委系统，派驻心里专家进入学校进行心里辅导与干预，同时请求公安系统对相关网站QQ群进行屏蔽。', '5', 'null', '4', '163', '88', '张学玉', '6', '2', null);
INSERT INTO `xxgc_task` VALUES ('50', '1431824400', '我想摆脱抑郁', '目前在新南门一家传媒公司做网络直播，上班时间为13：00-22：00。跟母亲住在一起（未提及其他家庭成员）。根据朋友给的资料和网上查询结果、以及母亲判断，认定自己患抑郁症，己自行购买药物进行治疗。无论咨询师怎么劝解，始终不愿意去医院接受诊断，希望寻求固定咨询师每天进行电话咨询。', '5', 'null', '4', '164', '89', '刘婕', '1', '2', null);
INSERT INTO `xxgc_task` VALUES ('51', '1493290800', '绝望的呼救', '自述，在考虑是否提前请假回家。觉得已走到生命的尽头，没法和任何人相处，在大街上看到对面来人也想避开，有时对面有同学走过，都会全身僵硬，已经影响到学习，很难受，想弃学回家，但父母不允许。去年在华西住院9天，医生诊断为强迫症，觉得吃药后有不良反应就闹着出院了，但治疗效果不理想。曾有跳楼、割腕的想法，觉得可能太痛或者没有死成功反而成残废，谈到还是找一个密闭的房间烧炭自杀比较合适。认为“自杀”并不是一种极端的方式，而是绝望的人的解脱和逃避。和妈妈说过想自杀，妈妈只是说：“你死都不怕，还怕什么活着痛苦呢！”平时24点睡，早上7点多醒。每天吃一顿或者两顿饭。曾在不同的地方断断续续做过几次咨询，觉得没有用。这种状况有一年时间。目前唯一希望就是父母同意带自己去华西治疗，但他们不相信自己有病，而是意志力不坚强。', '5', 'null', '4', '167', '88', '张学玉', '6', '2', null);
INSERT INTO `xxgc_task` VALUES ('52', '1502968260', '救救我孙子', '某老人自述：现已70多岁，与老伴单独生活。孙子A于今年6月毕业于成都市邛崃西街小学，9月将就读我市中学。目前孙子出现情绪不稳定，急躁、易怒。行为异常：将水泼在电视机、机顶盒上，剪断网线，用脚踹门、用灭火器对着门和楼梯喷洒，并大声直呼我的名字，扬言要和我们同归于尽，感觉我和老伴生命安全受到严重威胁。曾寻求社区工作人员帮助，社区工作人员告知：如再遇安全受到威胁时请立即报警，若感觉无法管教可送少管所。我觉得孙子还小，希望在假期得到相关机构专业人员帮助，改善其不良行为。', '5', 'null', '4', '170', '92', '郭一辛', '6', '2', null);
INSERT INTO `xxgc_task` VALUES ('53', '1509542340', '我该怎么走出现在的困惑', '某女士，和弟弟做生意。结婚8年。4年前，老公精神分裂。现在和公婆生活在一起。儿子上1年级以来，婆婆和自己对娃娃的教育理念不同，发生了很多矛盾，担心婆婆的强势教育对孩子的成长不好，感觉很压抑、纠结，希望尽快走出目前困境。', '5', 'null', '4', '171', '93', '李志禺', '1', '2', null);
INSERT INTO `xxgc_task` VALUES ('54', '1460251800', '文科还是理科', '某同学，女，17岁，家住雅安市，高二在读，文理分班时因为理科发展前景更好故选择读理科，但学习几个月后感觉非常吃力，尤其是化学，虽然很努力但成绩一直不能提高。学文科很有天赋，但大家都认为是成绩不好、不肯努力的人才会选择文科，而且老师也说文科不好挑选专业，所以最后选择了理科。现在很矛盾，想转去文科。', '6', 'null', '4', '173', '88', '张学玉', '5', '2', null);
INSERT INTO `xxgc_task` VALUES ('55', '1399532400', '对“保鲜膜男孩”开展心理援助工作', '12355成都中心安排专业心理咨询师前往成都市第二人民医院探望“保鲜膜男孩”小良陈，为小良陈进行心理援助和心理干预。在长达2个多小时的交谈中，小良陈敞开心扉，畅谈了他的学习生活、兴趣爱好等情况，表达了对未来生活的美好愿望和憧憬。心理咨询师对小良陈积极向上、乐观独立的精神表示了肯定，鼓励他战胜疾病，乐观阳光的面对将来的生活。同时，通过交流心理咨询师发现了小良陈心智不够健全、内心压抑缺少必要的社会交流等问题，及时通过专业方法帮助小良陈舒缓压力，破除心理障碍，树立正确的人生观念。', '5', 'null', '4', '178', '89', '刘婕', '6', '2', null);
INSERT INTO `xxgc_task` VALUES ('56', '1465992300', '不想上学的女儿', '某女士，38岁，籍贯遂宁，有一女儿，11岁，1岁开始由外婆带大，与父母关系关系非常淡漠。我和他爸爸分别在成都、上海工作。没陪伴孩子一直觉得愧对女儿，前年将女儿从老家接到身边一起生活。由于工作原因经常出差常忽略孩子，孩子出现叛逆，不想学习，自己想了很多办法但没效果。最近自己出现失眠多梦，全身患湿疹，多次往返各大医院就诊，疗效不佳。', '5', 'null', '4', '179', '90', '尹婉琎', '1', '2', null);
INSERT INTO `xxgc_task` VALUES ('57', '1404097200', '对“阳台被打男孩”开展心理援助', '“阳台被打男孩”小阳阳，被父亲关在阳台不给饭吃，24小时内被殴打多次。12355安排专业心理咨询师专程前往金牛区抚琴西北街社区看望小阳阳，与小阳阳亲切交流，让他从恐惧中慢慢敞开心扉，述说了被打经历等情况，表达了对未来学习生活的美好愿望。心理咨询师对小阳阳积极、向上、独立的精神表示了肯定，鼓励他乐观阳光的面对以后的生活，早日回到学校。通过交流，心理咨询师发现小阳阳内心压抑缺少必要的沟通，心理咨询师通过专业方法帮助小阳阳舒缓心理压力，帮助他走出被打的心理阴影，树立正确的人生观念。', '5', 'null', '4', '184', '89', '刘婕', '6', '2', null);
INSERT INTO `xxgc_task` VALUES ('58', '1463722080', '焦虑妈妈', '张女士，35岁，与父母同住，夫妻长期分居，因儿子教育问题主动求助；儿子上小学，常常不能按时完成作业，儿子对妈妈的管理和要求有抵触、对抗和内疚等情绪反应。丈夫长期在外工作不能为其分担，心理对丈夫积有怨气，加之儿子不听话，父母年迈教育观念与自己不能达成一致，常因这些与父母发生争执，近期心情烦躁、焦虑不安，出现入睡困难，半夜易惊醒等症状。', '5', 'null', '4', '185', '90', '尹婉琎', '1', '2', null);
INSERT INTO `xxgc_task` VALUES ('59', '1410142800', '对“双流被关智障男孩”开展心理、法律援助工作', '“双流被关智障男孩”亮亮，患有先天性疾病，智力低下，被家人关在家里，不与外界接触。12355成都中心安排专业心理咨询师和法律援助队专业律师前往双流太平镇了解亮亮具体情况，通过与本人及其家属详细交流，对亮亮一家的情况、家里所面对困难和急待解决的实际问题进行了全面了解。心理咨询师对亮亮及其家人的境遇表达了同情与理解，并通过专业方法对亮亮一家进行情绪安抚和压力舒缓。律师就亮亮一家急待解决的问题在法律层面给出了专业建议和解决办法，并鼓励他们积极乐观面对以后的生活。', '3', 'null', '4', '190', '91', '袁海容', '6', '2', null);
INSERT INTO `xxgc_task` VALUES ('60', '1455437280', '我是一个有问题的人', '某女，17岁，高三，从幼儿园开始有把自己弄伤的行为，但很多年未出现。去年开始，隔段时间就把手指头弄出血，很痛但看见出血就有兴奋，感觉很放松，等伤口长好后再弄伤如此反复，曾经在学校做过咨询不见效果，有密集恐惧症，想象自己浑身长满了虫子，很恐惧、害怕、恶心。好朋友跟我说她跟他男朋友有性行为，受基督教影响，我觉得25岁才能发生性关系。', '5', 'null', '4', '191', '92', '郭一辛', '1', '2', null);
INSERT INTO `xxgc_task` VALUES ('61', '1411527000', '看望、了解“阳台被打男孩”就读成都52中学情况', '对“阳台被打男孩”阳阳就读成都52中学情况进行了解，12355成都中心组织专业心理咨询师到成都52中学，与阳阳进行亲切交流，从学习、生活、交友等多个角度了解阳阳近况，阳阳表示对中心给予的帮助非常感谢，很喜欢新的学校、同学和老师，自己也会积极的面对今后学习、生活。', '5', 'null', '4', '195', '93', '李志禺', '6', '2', null);
INSERT INTO `xxgc_task` VALUES ('62', '1467893520', '抑郁案例', '某女，20岁，会计，因失恋心情很不好，不想吃饭，身上很脏，不想洗，什么都不想做。交过很多男朋友，从20多岁到40多岁的男人都有，但感觉跟刚分手这个男友感情很纯真，因此非常痛苦情绪低落。自觉人际关系不好，跟同事相处不融洽，情绪起伏不定。觉得全家人都想控制自己，想杀了他们。入睡困难半夜易惊醒，听到有人在剧家里的柜子，敲盆子的声音，闻到腐烂的味道。', '5', 'null', '4', '196', '94', '杨橙', '1', '2', null);
INSERT INTO `xxgc_task` VALUES ('63', '1422950400', '对“父亲被撞身亡成为孤儿”少年开展心理、法律援助工作', '小远，13岁，唯一亲人被撞身亡，苦寻目击者。知此消息后，团省委、团市委领导高度重视，12355成都中心安排专业心理咨询师和法律援助队专业律师，前往小远在新都的租住地从心理咨询、法律援助等专业角度，对小远及其亲属给予帮助。与小远及其亲属亲切交流，详细了解事发过程，和小远现在的具体情况、所面临的困难和急待解决的实际问题，律师从法律层面就小远及其亲属急待解决的问题给出了专业建议和解决办法；中心专业的心理咨询师对小远的境遇表达了同情与理解，并通过专业方法对小远进行情绪安抚和心理疏导，鼓励小远能振作起来，以积极的心态勇敢面对以后的生活，相信父亲也会希望看到一个坚强勇敢的自己。', '5', 'null', '4', '201', '88', '张学玉', '6', '2', null);
INSERT INTO `xxgc_task` VALUES ('64', '1471962900', '高中生学习障碍个案', '李同学，男，18岁, 刚进入高三，学习成绩中等偏上，平时注意力不集中，易受干扰。刚开始还能按照拟定的学习计划完成，但随作业量增加、考试增多，成绩提升不明显，逐渐有无力感，出现松懈的念头。到现在，跟不上学习进度，觉得自己很没用，想放弃，虽然每天想很多学习方面的事情，都无结果，很苦恼。所以来电寻求帮助，想知道该如何去面对现在这样的状况。', '5', 'null', '4', '202', '89', '刘婕', '1', '2', null);
INSERT INTO `xxgc_task` VALUES ('65', '1427875200', '对“15岁留守少女怀孕产子”事件提供专业建议和帮助', '小燕，15岁，留守少女，与男友发生关系后怀孕，足月在医院待产，男友避而不见，小燕奶奶寻求帮助，被媒体报道后，12355成都中心高度关注，接受成都市电视台深夜快递栏目记者采访，就“15岁留守少女怀孕产子”事件，从心理援助和法律援助层面提供专业、全面的分析、建议和帮助。', '3', 'null', '4', '205', '90', '尹婉琎', '3', '2', null);
INSERT INTO `xxgc_task` VALUES ('66', '1461590100', '亲子关系个案', '某女士，离异，单身，按摸技师。儿子8岁，自觉儿子出现：1、没安全感，做事小心谨慎，怕做错事；2、见钱眼开；3、性格偏内向、4、急了用头撞墙，用本子敲头等等问题。因前夫外遇导致离婚，儿子辗转广汉、安岳、绵阳等地读书。担心儿子在学校被人欺负。今年将母亲和儿子一同接到身边一起生活，但跟孩子沟通很困难，不被理解，很抵触，深感孩子出现这些状况而无力改变感到焦虑。', '5', 'null', '4', '206', '90', '尹婉琎', '1', '2', null);
INSERT INTO `xxgc_task` VALUES ('67', '1427940000', '对“15岁留守少女怀孕产子”展开心理援助', '小燕，15岁，留守少女，与男友发生关系后怀孕，足月在医院待产，男友避而不见，小燕奶奶寻求帮助，被媒体报道后，12355成都中心高度关注，4月1日接受成都市电视台深夜快递栏目记者采访后，4月2日，中心组织专业心理咨询师前往天回镇成都军区总医院探望“15岁留守少女怀孕产子”小燕，从生活上、心理上为小燕给予有效帮助与关爱。专业咨询师通过专业方法对小燕进行情绪安抚和心理疏导，舒缓压力，破除心理障碍，鼓励小燕乐观阳光的面对将来的生活。', '4', 'null', '4', '210', '91', '袁海容', '6', '2', null);
INSERT INTO `xxgc_task` VALUES ('68', '1470273300', '孤独的自己', '小严（化名），男，17岁，高一学生，单亲家庭，继父病亡，现住姑姑家。从未见过亲生父亲，同学问及父亲，谎称在上班，怕被同学轻视。9岁时母亲找了继父，经常被继父打骂。因给继父治病母亲卖掉唯一的房子，但继父还是病故。为还账，母亲外出务工，因放暑假不能住校，只能在姑姑家住，帮姑姑店铺打扫卫生、做饭，觉得姑姑和姑父都很嫌弃自己，做什么都错，近期姑姑全家人出外旅游，自己不知何去何从。看到表妹们受父母宠爱很幸福，自己像难民，心理落差大。常感自卑、焦虑抑郁。', '5', 'null', '4', '211', '92', '郭一辛', '1', '2', null);
INSERT INTO `xxgc_task` VALUES ('69', '1436666100', '对“父亲被撞身亡女孩”开展法律、心理援助工作', '苗苗，6岁，父亲被撞身亡，肇事者逃逸。多家主流媒体对事件予以了转载报道，引发了社会和广大网友的广泛关注。12355成都中心积极响应跟进，安排专业心理咨询师和法律援助队专业律师前往苗苗在金牛区的住地，详细了解事发过程，询问掌握苗苗现在的生活状况，共同探讨急待解决的实际问题。专业律师从法律层面给苗苗及其亲属面临的法律困境给出了建议和解决办法，同时将继续提供后续的法律援助；专业心理咨询师对苗苗的境遇表达了同情与理解，并通过专业方法对苗苗及其亲属进行了情绪安抚和心理疏导。', '6', 'null', '4', '216', '93', '李志禺', '6', '2', null);
INSERT INTO `xxgc_task` VALUES ('70', '1475986140', '婚恋情感类典型个案', '李某某，女，35岁，已婚，育有一子。丈夫因车祸高位残疾，生活不能自理，无法工作，经济窘迫，虽然有赔偿金和存款，但每月几千元保险金，儿子读书费用，丈夫医疗费用，生活费等等感到压力大焦虑不安。单位男同事很照顾我，互相有感情，计划结婚，一方面可以解决我一人承担家庭和抚养孩子的重担，一方面自己有了依靠。但我对丈夫深感愧疚，倍感煎熬不知该怎么办。', '5', 'null', '4', '217', '94', '杨橙', '1', '2', null);
INSERT INTO `xxgc_task` VALUES ('71', '1451529000', '12355青少年服务台成都中心跟进媒体报道《妈妈，你救救我》事件', '17岁的胡山罹患再生障碍性贫血，家境不好药费高昂，他没有放弃生的希望。获知此消息后，共青团成都市委员会领导高度重视，12355成都中心积极响应，于31日下午前往成都中医药大学附属医院血液科，了解并关心胡山及其亲属现状。', '4', 'null', '4', '222', '88', '张学玉', '6', '2', null);
INSERT INTO `xxgc_task` VALUES ('72', '1481256540', '亲子关系案例', '某女，31岁，未婚，母亲去世早，独居在母亲遗留的房屋，父亲和女友同居。几年前，由于经常因一些小事和父亲发生口角，父女关系紧张，离家出走，去外地亲戚家，从此，和父亲及其他亲戚的关系变得更差。母亲离世，父亲跟女友生活，倍感孤独，感觉被抛弃，出现失眠多梦、神情恍惚，拉肚子，头晕，心情低落，希望通过12355热线得到帮助。', '5', 'null', '4', '223', '89', '刘婕', '1', '2', null);
INSERT INTO `xxgc_task` VALUES ('73', '1509593580', '高危来电—南鲸游戏（1）', '杨爸爸的儿子，十四岁，初三，厌学，辍学；2017年10月份前后参加蓝鲸游戏，割腕（在家用刀片伤手臂威胁爸爸妈妈，在学校上课期间也在课上划伤手腕）拿针在手腕上刺蓝鲸图案，并照片传上QQ空间，10月12日开始不上学，待在家里面看电视、玩游戏 拒绝任何形式的心理咨询，该事件尚未报警。12355成都中心热线员接线后，妥善处理，安排专业咨询师跟进进展，并在后续持续跟进。', '4', 'null', '4', '227', '90', '尹婉琎', '5', '2', null);
INSERT INTO `xxgc_task` VALUES ('74', '1422932460', '厌学情绪疏导案例', '由于从农村来，一直被同学瞧不起，自卑，人际关系不好，经常独处。语文、英语较差，数学很好，经常考第一。自诉不喜欢语文和英语老师，数学老师又不公平，经常把发言的机会让给其他同学，觉得上数学课也不好耍，经常不完成家庭作业，出现逃学情况。这周开始不愿上学，躲在家里不出门。', '5', 'null', '4', '228', '91', '袁海容', '1', '2', null);
INSERT INTO `xxgc_task` VALUES ('75', '1460775660', '孩子为何“偷窃”', '梁女士打来电话，称自己年仅十岁的女儿有偷窃的行为，为此她也打过女儿无数次，可就是改不了女儿的这个恶习。自己都不知道该怎么办了。', '5', 'null', '4', '229', '92', '郭一辛', '1', '2', null);
INSERT INTO `xxgc_task` VALUES ('76', '1425351660', '焦虑妈妈', '来访者述，儿子今年9月上小学，常常不能按时完成作业，经常辅导孩子作业至晚上十点，儿子对妈妈的管理和要求有抵触、对抗和内疚等情绪反应。来访者虽因期末在即，寒假便可不再为孩子作业操心而感轻松，但想到很快就要开学，且到了二年级、三年级学习要求更高，感到十分焦虑。', '5', 'null', '4', '230', '93', '李志禺', '1', '2', null);
INSERT INTO `xxgc_task` VALUES ('77', '1428807660', '恐惧“鬼”', '最近和同学看了某恐怖故事书，当时同学对故事中“鬼”的形象、画面进行了详细描述，最近两、三周小元每当一人独处时就很害怕，总是会想起故事中描述的画面。晚上睡觉也曾有两次梦到那个恐怖情景而惊醒哭闹。爸爸妈妈总是呵斥小元：男子汉不应该这么胆小。', '5', 'null', '4', '231', '94', '杨橙', '1', '2', null);
INSERT INTO `xxgc_task` VALUES ('78', '1490331660', '黎先生的烦恼', '来电者黎先生是一名九里堤青少年活动中心的保安，月收入2000以上，两岁时父亲去世，17岁时母亲去世。从此受到成都市西安路街道办事处的帮扶，有低保。成都市省医院与第四人民医院诊断为癔症。在省医院接受过面询，第四医院接受过团体治疗，每周一次，并坚持服用药物，来电者感觉效果不佳。因为咨询师生小孩就中断心理咨询，来电人希望在咨询师生小孩的八个月时间里，12355青少年服务台成都中心能够提供免费面询咨询', '5', 'null', '4', '232', '88', '张学玉', '1', '2', null);
INSERT INTO `xxgc_task` VALUES ('79', '1453946700', '楼上女孩的哭声', '张女士向12355成都中心反映：楼上邻居经常有打骂小孩的迹象。孩子是男孩，小名叫小石头，大约9岁。今天一早张女士就被楼上打孩子的“咚咚”声吵醒，张女士说，三、四年前就经常会有打孩子的声音传出来，常常听到他们家传出哭声、吵闹声、叫骂声，以及孩子“饿、饿、饿”的呼声。孩子也很少下楼玩耍，感觉这个家庭几乎不和邻居往来，也很少看到他们家人有笑容。张女士回忆，有一次楼上邻居用拖把打孩子，情况很严重，小区物管干涉过，但也无济于事。', '5', 'null', '4', '233', '89', '刘婕', '1', '2', null);
INSERT INTO `xxgc_task` VALUES ('80', '1463382060', '心理压力缓解咨询', '刘某，心里很焦虑、困惑。两周前在按摩店和小姐发生了关系，今年共去过按摩店3次，虽然每次均采取了安全措施（带避孕套），但仍然担心自己得性病、艾滋病，觉得“找小姐”很可耻，每次事后都后悔，但还是忍不住又去按摩店。不接受自己有性的冲动，想要完全消除性的冲动。和同寝室男生相处较好，但从不交流与性有关的事。不知怎么和异性相处，这些都让自己焦虑，白天精神状态不好。', '5', 'null', '4', '234', '90', '尹婉琎', '1', '2', null);
INSERT INTO `xxgc_task` VALUES ('81', '1453863900', '青春的烦恼 ', '初一第一学期时，父母在夜里发生了一次激烈的争吵，来访者在睡梦中被吵醒，劝阻父母无效，感到十分的害怕，来访者偶然得知父亲在四川某地购买了两处房产，来访者怀疑父亲出轨。今年来访者与另一个班的小关成为了男女朋友。近一月前，来访者喜欢上了小关 “闺蜜”小莫。来访者在追求小莫时是瞒着现任女友的，一方面来访者感到内疚觉得害怕伤害到了现任女友，一方面，觉得自己与小莫的关系不会长久，在两种压力情况下，来访者开始出现了情绪困扰，焦虑，夜间睡眠不好等情况。 ', '5', 'null', '4', '235', '91', '袁海容', '1', '2', null);
INSERT INTO `xxgc_task` VALUES ('82', '1453950300', '湿湿的想念', '来访者这段时间经常做噩梦，梦到被人追，梦到鬼。常会莫名的想哭、烦躁。和同学关系相处较好。父母工作较忙，相处也算融洽，和爷爷感情好。爷爷已去世2年。爷爷离世时，自己上高二，虽然有心理准备，但回家看到当时情景（灵堂），还是觉得很突然，脑子一片空白。回想当时场景，现在能体会到难过，愧疚，接受不了。觉得没有照顾好爷爷，没有做的更多。“爷爷在从小就说要带我去一个地方，一直都没实现。', '5', 'null', '4', '236', '92', '郭一辛', '1', '2', null);
INSERT INTO `xxgc_task` VALUES ('83', '1430622060', '为什么我不快乐', '一位自称“豆豆”（化名）的女生，电话中情绪非常低落，不想吃饭，身上很脏，但是不想洗，什么都不想做。以前交过很多男朋友，从20多岁到40多岁的男人都有，但感觉跟刚分手这个男友感情很纯真，因此非常痛苦。豆豆觉得自己人际关系不好，跟同事相处不融洽，情绪上有时很兴奋，有时低落。觉得全家人都想控制自己，想杀了他们。有时睡眠不好，半夜醒来。 一年前自杀过，手上有很多的伤疤，后来自杀就变成了自残。很在意咨询师对自己的看法，担心跟咨询师的关系也会因为随着时间推移而淡漠了。', '5', 'null', '4', '237', '93', '李志禺', '1', '2', null);
INSERT INTO `xxgc_task` VALUES ('84', '1420599660', '文科还是理科', '高二在读，文理分班时因为理科发展前景更好故选择读理科，但学习几个月后感觉非常吃力，尤其是化学，虽然很努力但成绩一直不能提高。学文科很有天赋，但大家都认为是成绩不好、不肯努力的人才会选择文科，而且老师也说文科不好挑选专业，所以最后选择了理科。现在很矛盾，想转去文科。', '5', 'null', '4', '238', '94', '杨橙', '1', '2', null);
INSERT INTO `xxgc_task` VALUES ('85', '1439953260', '我该何去何从', '去年4月高某丈夫因车祸导致高位残疾，生活不能自理，同时也失去了性能力，家庭经济重担落在高某一个人肩上。其丈夫虽然每月有保险金，但还存在后续治疗，感觉压力很大。婆婆帮忙照顾丈夫和儿子，但高某仍感觉身心疲惫，很希望有人能帮忙支持和分担。在这期间，高某和单位一同事开始了婚外情，该同事表示希望和高某结婚，并愿意和她共同承担现在生活中的困境。高某内心很冲突，一方面高某和丈夫仍有感情，希望保持完整的家，另一方面高某很难拒绝条件较优越男同事的感情，觉得难以自拔，现在不知该怎么办？', '5', 'null', '4', '239', '88', '张学玉', '1', '2', null);
INSERT INTO `xxgc_task` VALUES ('86', '1429412460', '我该怎么样对面这份情感', '作为家里独生女，筱米被寄予厚望，父母以养育男孩的方式养育她，导致筱米性格偏男子气且在表达自我方面存在一定困难。男友晟是上海人，从德国留学回来，比筱米年长六岁，家庭条件好，钢琴弹得好，个子高，很帅。尽管晟对筱米一直很尊重也很包容，但筱米总有一种自卑感，难以自如地与他交往。筱米在生活中看到同学和朋友能够自信地表达自我，感到自己更加地自卑。近段时间，经常注意力难以集中，易激惹和不安,觉得生活很灰暗。去医院检查，各项生理指标均正常,未发现躯体障碍，医院推荐接受心理咨询。', '5', 'null', '4', '240', '89', '刘婕', '1', '2', null);
INSERT INTO `xxgc_task` VALUES ('87', '1426734060', '我和父亲怎么了', '一次因为一件小事和父亲发生了口角，离家出走，之后给父亲打过电话，可是电话一直没人接。父亲也告诉小玉，在她离家出走的那段时间，一直在给她打电话，但电话都处于关机状态。小玉却表示电话一直没有关机。。现在，小玉一直住在母亲留给自己的房子里，找了一份工作，但薪资很低，在小玉的心里一直认为父亲所做的一切全是因为想要自己的房子。小玉在拨打12355热线之前，身体状况很差，失眠、拉肚子，心情很不好，希望通过12355热线得到帮助。', '5', 'null', '4', '241', '90', '尹婉琎', '1', '2', null);
INSERT INTO `xxgc_task` VALUES ('88', '1428030060', '我是一个有问题的人', '从幼儿园开始有把脚趾头和手咬出血的行为，但很多年没出现这种现象。去年开始，我隔段时间就把手指头弄出血，虽然很痛，但看见出血就有兴奋的感觉，一段时间就很放松，等伤口长好后，再弄伤如此反复。我还有密集恐惧症，想象自己浑身长满了虫子，很恐惧、害怕、恶心，我想到医院做暴露疗法，心理老师说必须满18岁到正规医院才能治疗。我们班某女生跟我说她已经跟他男朋友发生性关系，我可以理解，但我不认同，我受基督教的影响，觉得25岁才能发生性关系，谈恋爱可以拥抱接吻，但不能有性生活。', '5', 'null', '4', '242', '91', '袁海容', '1', '2', null);
INSERT INTO `xxgc_task` VALUES ('89', '1433473260', '我想找回原来的亲情', '前夫之前在外面有了其他女人，后来我们离婚。觉得儿子现在有心理问题：1、没安全感，做事小心谨慎，怕做错事；2、见钱眼开；3、性格偏内向、4、急了用头撞墙，用本子敲头。因离婚的原因，儿子幼儿园在广汉，一年级在安岳，二年级在绵阳。担心儿子在学校被人欺负。想在成都租套房子，把母亲和儿子都接过来。觉得好多时候都是儿子在照顾我：回家后问我累不累，先上楼替我把灯打开等。我们互相很依赖，我也很享受这样的感觉。以后会更爱儿子，把欠他的补偿回来。前夫之前每月还给抚养费，这近几个月都没有给了。', '5', 'null', '4', '243', '92', '郭一辛', '1', '2', null);
INSERT INTO `xxgc_task` VALUES ('90', '1461467100', '小闵的烦恼', '小闵，男，高三学生。来电者表示由于快要面临高考了，自己的学习又不好，人际关系也不是很好，想要在毕业前的最后一段时间里能和同学好好相处，交一些朋友，不给高中留下遗憾，但感觉周围的同学都不太愿意和我说话，不管是在教室还是在宿舍都是自己一个人。想考大学，又不能集中注意力学习，成绩实在是不理想，更怕父母对自己失望。上课也胡思乱想，平时做作业、考试注意力特别不集中。到了晚上经常会莫名其妙紧张，焦虑，睡不着觉。也不知道自己的目标是什么，感觉未来很迷茫。', '5', 'null', '4', '244', '93', '李志禺', '1', '2', null);
INSERT INTO `xxgc_task` VALUES ('91', '1428634860', '爷爷对不起 ', '这段时间经常做噩梦，梦到被人追，梦到鬼。常会莫名的想哭、烦躁。和同学关系相处较好。小时候和爷爷住的时间较多，和爷爷感情好。爷爷已去世2年。爷爷离世时，自己上高二，虽然有心理准备，但回家看到当时情景（灵堂），还是觉得很突然，脑子一片空白。回想当时场景，现在能体会到难过，愧疚，接受不了。觉得没有照顾好爷爷，没有做的更多。“爷爷在从小就说要带我去一个地方，一直都没实现。不知道这个地方是哪里，也不知道名字，对这个地方的感觉是很美，有山，很舒畅，放松。如果爷爷还在，我想带爷爷去！”', '5', 'null', '4', '245', '94', '杨橙', '1', '2', null);
INSERT INTO `xxgc_task` VALUES ('92', '1452823500', '只要考试我就发烧', '赵同学出生在知识分子家庭，父母都是老师因此对其要求很严。从小学到初中，学习成绩一直都名列前茅。第一次期中考试，成绩排列班里第十三名，父母希望赵同学通过努力能在期末考试时进入前十名，虽然一直努力学习，但是学习成绩一直是中等偏上。一次数学考试前赵同学发烧请假在家复习，但父母觉得情有可原也没有指责他。后来，只要临近考试就会发烧，考试结束不用吃药都会好。高三开学后，老师宣布准备一周后按高考要求进行模拟考试并排名次，赵同学第二天又开始发烧，几天后头上竟然出现了秃斑，为此陷于极度苦恼之中', '5', 'null', '4', '246', '88', '张学玉', '1', '2', null);
INSERT INTO `xxgc_task` VALUES ('93', '1463328060', '自杀干预个案', '2016年5月16日凌晨零点来电称准备自杀，已备好了50片安眠药。由于无业、抑郁、失眠等原因一直感觉生活无意义。经常被父亲骂“没出息的东西，连自己都养活不了，更别指望你为我们家传宗接代，我们家就毁在你手里了。” 母亲一直不怎么管我，每次父亲责骂时，她都不会劝阻，但我很希望母亲在爸爸骂我的时候劝说几句，帮我一下。姐姐会经常给些钱，但她要养孩子，有自己的一家人。', '5', 'null', '4', '248', '92', '郭一辛', '2', '2', null);

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
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COMMENT='用户表';

-- ----------------------------
-- Records of xxgc_users
-- ----------------------------
INSERT INTO `xxgc_users` VALUES ('1', 'admin', '###3ec2f9a7e469c084fea814bbfc465378', 'admin', 'aa@dd.com', '', null, '0', '2000-01-01', null, '101.207.125.162', '2017-12-19 10:23:59', '2017-06-25 02:40:11', '', '1', '0', '1', '0', '');
INSERT INTO `xxgc_users` VALUES ('2', 'test', '###fa0e6d8067ef85e7e08e2195e1673a82', '', 'ddds@aa.com', '', null, '0', '2000-01-01', null, '118.114.241.214', '2017-12-19 14:59:27', '2017-06-27 23:39:35', '', '1', '0', '1', '0', '');
INSERT INTO `xxgc_users` VALUES ('4', 'lixiang', '###8672413f2ac72ea28c5b2ad70d8f9b26', '', 'saddsa@dsada.com', '', null, '0', '2000-01-01', null, '182.148.58.246', '2017-12-19 14:14:02', '2017-12-19 14:13:48', '', '1', '0', '1', '0', '');

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
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;

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
INSERT INTO `xxgc_wechat_member` VALUES ('15', '18582459860', 'oMd5RwygLSgZ6I9tW7_0ccFZueCE', '夏末', 'http://wx.qlogo.cn/mmopen/vi_32/hU35eOUoWmnFxSkNTmR33jpp8eQzVAHfCOl3ibZNg8W8nFjIa7jTWUo3YEXkQ99aK20XiceDCS4on3ia5kYT19fibA/0');
INSERT INTO `xxgc_wechat_member` VALUES ('16', '15883313298', 'oMd5Rw89WRt76uTyYkcprbRlM_bE', '半夏泽兰', 'http://wx.qlogo.cn/mmopen/vi_32/AaiasliaIa5S69AzSp6TyxhbF9mzRgZNicjltWqicibQPOwKmjHYN73DrWLHkrW3crplOJUedxQv6ss0lrsd91W1OnQ/0');
