<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE HTML>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="maximum-scale=1.0,minimum-scale=1.0,user-scalable=0,width=device-width,initial-scale=1.0"/>
    <meta name="format-detection" content="telephone=no,email=no,date=no,address=no">
    <meta http-equiv="Pragma" content="no-cache">
	<meta http-equiv="Cache-Control" content="no-cache">
	<meta http-equiv="Expires" content="0">
    <title>任务分发</title>
    <link rel="stylesheet" type="text/css" href="/application/Html/Dist/css/aui/aui.css" />
    <link rel="stylesheet" type="text/css" href="/application/Html/Dist/css/mobileSelect.css" />
    <link rel="stylesheet" type="text/css" href="/application/Html/Dist/css/style.css" />
<body>
<div class="aui-content consultation-content">
    <ul class="aui-list aui-list-in">
        <li class="aui-list-item" style="background: none;">
            <div class="aui-list-item-inner">
                <div class="aui-list-item-label">
                   咨询标题
                </div>
                <div class="aui-list-item-input" style="padding-right: 0;">
                    <input type="text" placeholder="请填写咨询标题" name="consultationName" class="consultation-name" style="text-align: right;">
                </div>
            </div>
        </li>
    </ul>
    <ul class="aui-list aui-media-list"> 
        <li class="aui-list-item">
            <div class="aui-media-list-item-inner">
                <div class="aui-list-item-media aui-icon-question aui-iconfont">
                    咨询类型
                </div>
                <div class="aui-list-item-inner aui-list-item-arrow">
                    <div class="aui-list-item-text">
                        <div class="aui-list-item-title">
                        </div>
                        <div class="aui-list-item-right" style="max-width: 100%;margin-top: 3px;">
                            <span class="select-consultation-type">请选择</span>
                        </div>
                    </div>
                </div>
            </div>
        </li>
        <li class="aui-list-item" style="border-top: 0;background: 0;">
            <div class="aui-media-list-item-inner">
                <div class="aui-list-item-inner">
                    <div class="aui-list-item-text">
                        <div class="aui-list-item-title">咨询内容</div>
                    </div>
                    <div class="aui-list-item-text">
                        <div class="f-textarea">
                            <textarea name="tcontent" placeholder="请填入详细的咨询内容" maxlength="500"></textarea>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    </ul>
</div>
<div id="dialog-inner-content" class="aui-hide">
    <div class="popup-content explain-popup-content">
       <ul>
            <li><label>生活常识：</label><span>常识、交通、商业、健康、保养</span></li>
            <li><label>科技文化：</label><span>文化、互联网、历史、地理、政治、数学、人文等</span></li>
            <li><label>学习教育：</label><span>留学、育儿、高考、考研、大学</span></li>
            <li><label>休闲娱乐：</label><span>电影、音乐、旅行、汽车、美食、阅读、兴趣、体育</span></li>
            <li><label>心理健康：</label><span>情感、压力、心理咨询</span></li>
            <li><label>就业创业：</label><span>就业、职业发展、创业、投资</span></li>
            <li><label>法律政策：</label><span>政策咨询、法律问题、权益维护、时事政治</span></li>
            <li><label>人际关系：</label><span>职场、婚恋、交友，青年交流、人际关系、家庭</span></li>
            <li><label>社会参与：</label><span>志愿者、支教、共青团、入党、环保、社团、村官</span></li>
            <li><label>其他：</label><span>除上述分类的情况</span></li>
       </ul>
    </div>
</div>
<footer class="aui-bar aui-bar-tab" id="footer">
    <div class="aui-bar-tab-item" tapmode>
        <div class="aui-bar-tab-label">提交咨询</div>
    </div>
</footer>
<script type="text/javascript" src="/application/Html/Dist/js/jquery.js" ></script>
<script type="text/javascript" src="/application/Html/Dist/js/aui/aui-toast.js" ></script>
<script type="text/javascript" src="/application/Html/Dist/js/aui/aui-dialog.js" ></script>
<script type="text/javascript" src="/application/Html/Dist/js/aui/aui-popup.js" ></script>
<script type="text/javascript" src="/application/Html/Dist/js/sha1.js" ></script>
<script type="text/javascript" src="/application/Html/Dist/js/js-base64.js" ></script>
<script type="text/javascript" src="/application/Html/Dist/js/md5.js" ></script>
<script type="text/javascript" src="/application/Html/Dist/js/mobileSelect.js" ></script>
<script type="text/javascript" src="/application/Html/Dist/js/common.js" ></script>
<script type="text/javascript">
var listUrl = "<?php echo U('answer/index');?>";
AddAnswer.init();
</script>
</body>