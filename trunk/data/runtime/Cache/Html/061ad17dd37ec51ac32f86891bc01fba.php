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
<div class="aui-content newtask-content">
    <ul class="aui-list aui-list-in">
        <li class="aui-list-item" style="background: none;">
            <div class="aui-list-item-inner">
                <div class="aui-list-item-label">
                   任务名称
                </div>
                <div class="aui-list-item-input">
                    <input type="text" placeholder="请填写任务名称" name="taskname" class="taskname">
                </div>
            </div>
        </li>
    </ul>
    <ul class="aui-list aui-media-list"> 
        <li class="aui-list-item">
            <div class="aui-media-list-item-inner">
                <div class="aui-list-item-media">
                    任务类型
                </div>
                <div class="aui-list-item-inner aui-list-item-arrow">
                    <div class="aui-list-item-text">
                        <div class="aui-list-item-title">
                        </div>
                        <div class="aui-list-item-right" style="max-width: 100%;margin-top: 3px;">
                            <span class="select-task-type">请选择</span>
                        </div>
                    </div>
                </div>
            </div>
        </li>
        <li class="aui-list-item" > 
            <div class="aui-media-list-item-inner">
                <div class="aui-list-item-media">
                    上传图片
                </div>
                <div class="aui-list-item-inner aui-list-item-arrow">
                    <div class="aui-list-item-text">
                        <div class="aui-list-item-title">
                        </div>
                        <div class="aui-list-item-right" style="max-width: 100%;margin-top: 3px;">
                            <span class="select-img">选择上传</span>
                        </div>
                    </div>
                </div>
            </div>
        </li>
        <li class="aui-list-item address-textarea" style="border-top: 0;">
            <div class="aui-media-list-item-inner">
                <div class="aui-list-item-inner">
                    <div class="aui-list-item-text">
                        <div class="aui-list-item-title">任务描述</div>
                    </div>
                    <div class="aui-list-item-text">
                        <div class="f-textarea">
                            <textarea name="tcontent" placeholder="请填入详细的任务过程" maxlength="240"></textarea>
                        </div>
                    </div>
                </div>
            </div>
        </li>
        <li class="aui-list-item address-textarea" style="background: none;">
            <div class="aui-media-list-item-inner">
                <div class="aui-list-item-inner">
                    <div class="aui-list-item-text">
                        <div class="aui-list-item-title">任务设置</div>
                        <a href="javascript:void(0)" class="add-stage-btn">+添加阶段</a>
                    </div>
                    <div class="aui-list-item-text step-list" style="display: block;margin-top: 10px;">
                    </div>
                </div>
            </div>
        </li>
    </ul>
    <div class="btns-wrapper">
        <button class="publish-btn">发布任务</button>
    </div>
</div>
<div class="copy-content aui-hide">
    <div class="stage-item">
        <div class="col-sm-4">
            <select class="s-step">
                
            </select>
        </div>
        <div class="col-sm-4">
            <select class="s-level">
                
            </select>
        </div>
        <div class="col-sm-4">
            <select class="s-user">
        
            </select>
        </div>
        <a href="javascript:void(0)" class="stage-rm-btn">X</a>
    </div>
</div>
<div id="dialog-inner-content" class="aui-hide">
    <div class="popup-content publish-popup-content">
        确认发布？
    </div>
</div>
<input type="hidden" name="footerActive" value="1" />
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
        <div class="aui-bar-tab-item" tapmode>
            <div class="aui-bar-tab-label">专家分配</div>
        </div> 
    </footer>
</body>

<script type="text/javascript">
    var urlArr = ["<?php echo U('tasklist/index');?>", "<?php echo U('newtask/index');?>", "<?php echo U('review/index');?>", "<?php echo U('expert/index');?>"];
    Footer.init();
</script>
</html>
<script type="text/javascript" src="/application/Html/Dist/js/wx.js" ></script>
<script type="text/javascript">
var listUrl = "<?php echo U('tasklist/index');?>";
Newtask.init();
</script>
</body>