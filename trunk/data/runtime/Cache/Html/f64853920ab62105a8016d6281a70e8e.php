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
<link rel="stylesheet" type="text/css" href="/application/Html/Dist/css/dialog.css" />
<body>
<div class="aui-content newtask-content">
	<ul class="aui-list aui-media-list"> 
        <li class="aui-list-item">
            <div class="aui-media-list-item-inner">
                <div class="aui-list-item-media">
                    开始时间
                </div>
                <div class="aui-list-item-inner aui-list-item-arrow">
                    <div class="aui-list-item-text">
                        <div class="aui-list-item-title">
                        </div>
                        <div class="aui-list-item-right" style="max-width: 100%;margin-top: 3px;">
                            <span class="startDate" id="startDate">请选择</span>
                        </div>
                    </div>
                </div>
            </div>
        </li>
         <li class="aui-list-item">
            <div class="aui-media-list-item-inner">
                <div class="aui-list-item-media">
                    结束时间
                </div>
                <div class="aui-list-item-inner aui-list-item-arrow">
                    <div class="aui-list-item-text">
                        <div class="aui-list-item-title">
                        </div>
                        <div class="aui-list-item-right" style="max-width: 100%;margin-top: 3px;">
                            <span class="endDate" id="endDate">请选择</span>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    </ul>
	<div class="btns-wrapper">
        <button class="search-btn">查询</button>
    </div>
</div>
<input type="hidden" name="footerActive" value="0" />
<script type="text/javascript" src="/application/Html/Dist/js/jquery.js" ></script>
<script type="text/javascript" src="/application/Html/Dist/js/aui/aui-toast.js" ></script>
<script type="text/javascript" src="/application/Html/Dist/js/aui/aui-dialog.js" ></script>
<script type="text/javascript" src="/application/Html/Dist/js/aui/aui-popup.js" ></script>
<script type="text/javascript" src="/application/Html/Dist/js/sha1.js" ></script>
<script type="text/javascript" src="/application/Html/Dist/js/js-base64.js" ></script>
<script type="text/javascript" src="/application/Html/Dist/js/md5.js" ></script>
<script type="text/javascript" src="/application/Html/Dist/js/mobileSelect.js" ></script>
<script type="text/javascript" src="/application/Html/Dist/js/common.js" ></script>
    <footer class="aui-bar aui-bar-tab" id="footer">
        <div class="aui-bar-tab-item" tapmode>
            <div class="aui-bar-tab-label">任务列表</div>
        </div>
        <div class="aui-bar-tab-item" tapmode>
            <div class="aui-bar-tab-label">新建任务</div>
        </div>
        <div class="aui-bar-tab-item" tapmode>
            <div class="aui-bar-tab-label">任务审核</div>
        </div> 
    </footer>
</body>

<script type="text/javascript">
    var urlArr = ["<?php echo U('tasklist/index');?>", "<?php echo U('newtask/index');?>", "<?php echo U('review/index');?>"];
    Footer.init();
</script>
</html>
<script type="text/javascript" src="/application/Html/Dist/js/dialog.js" ></script>
<script type="text/javascript" src="/application/Html/Dist/js/mobile-select-date.js" ></script>
<script type="text/javascript">
	var searchUrl = "<?php echo U('tasklist/index');?>";
	var selectStartDate = new MobileSelectDate();
	selectStartDate.init({trigger:'#startDate',min:'2017/07/20',max:'2027/07/20',position:"bottom"});
	var selectEndDate = new MobileSelectDate();
	selectEndDate.init({trigger:'#endDate',min:'2017/11/10',max:'2027/07/20',position:"bottom"});
	DateSearch.init();
</script>
</body>