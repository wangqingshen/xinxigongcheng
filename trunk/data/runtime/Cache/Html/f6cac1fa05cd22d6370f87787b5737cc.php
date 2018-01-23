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
<link rel="stylesheet" type="text/css" href="/application/Html/Dist/css/aui/aui-pull-refresh.css" />
<link rel="stylesheet" type="text/css" href="/application/Html/Dist/css/mobileSelect.css" />
<link rel="stylesheet" type="text/css" href="/application/Html/Dist/css/fsgallery.css" />
<body>
<div class="task-content aui-refresh-content">
	<ul class="aui-list aui-media-list" style="background: none;">
		
	</ul>
</div>
<div class="copy-content aui-hide">
<li class="aui-list-item aui-list-item-arrow">
    <div class="aui-media-list-item-inner">
        <div class="aui-list-item-inner">
            <div class="aui-list-item-text">
                <div class="aui-list-item-title"></div>
                <div class="aui-list-item-right">
                    <span class="task-date"></span>
                    <span class="task-progress"></span>
                </div>
            </div>
        </div>
    </div>
</li>
</div>
<div id="dialog-inner-content" class="copy-dialog-content aui-hide">
    <div class="popup-content">
        <ul class="aui-list aui-media-list"> 
            <li class="aui-list-item" > 
                <div class="aui-media-list-item-inner">
                    <div class="aui-list-item-media">
                        任务标题：
                    </div>
                    <div class="aui-list-item-inner">
                        <div class="aui-list-item-text">
                            <div class="aui-list-item-title">
                            </div>
                            <div class="aui-list-item-right task-name" style="max-width: 100%;margin-top: 3px;">
                                
                            </div>
                        </div>
                    </div>
                </div>
            </li>
            <li class="aui-list-item task-content-item" > 
                <div class="aui-media-list-item-inner">
                    <div class="aui-list-item-media">
                        任务描述：
                    </div>
                    <div class="aui-list-item-inner">
                        <div class="aui-list-item-text">
                            <div class="aui-list-item-title">
                            </div>
                            <div class="aui-list-item-right popup-task-content" style="max-width: 100%;margin-top: 3px;">
                
                            </div>
                        </div>
                    </div>
                </div>
            </li>
            <li class="aui-list-item task-img-item" style="display: none;"> 
                <div class="aui-media-list-item-inner">
                    <div class="aui-list-item-media">
                        任务图片：
                    </div>
                    <div class="aui-list-item-inner">
                        <div class="aui-list-item-text">
                            <div class="aui-list-item-title">
                            </div>
                            <div class="aui-list-item-right task-img-content" style="max-width: 100%;margin-top: 3px;">
                                <img src="" alt="任务图片" style="width: 90px;height: 90px;"/>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
            <li class="aui-list-item task-explain-item" style="display: none;"> 
                <div class="aui-media-list-item-inner">
                    <div class="aui-list-item-media">
                        提交说明：
                    </div>
                    <div class="aui-list-item-inner">
                        <div class="aui-list-item-text">
                            <div class="aui-list-item-title">
                            </div>
                            <div class="aui-list-item-right task-explain-content" style="max-width: 100%;margin-top: 3px;">
        
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</div>
<div class="item-copy aui-hide">
     <li class="aui-list-item" > 
        <div class="aui-media-list-item-inner">
            <div class="aui-list-item-media task-step">
            
            </div>
            <div class="aui-list-item-inner">
                <div class="aui-list-item-text">
                    <div class="aui-list-item-title task-step-name">
                    </div>
                    <div class="aui-list-item-right" style="max-width: 100%;margin-top: 3px;">
                        <span class="task-step-mob"></span>
                    </div>
                </div>
            </div>
        </div>
    </li>
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
        <div class="aui-bar-tab-item item-filter" tapmode>
            <div class="aui-bar-tab-label" aui-popup-for="filter-type">筛选</div>
            <div class="aui-popup aui-popup-bottom-right" id="filter-type">
                <div class="aui-popup-arrow"></div>
                <div class="aui-popup-content">
                    <ul class="aui-list aui-list-noborder">
                        <li class="aui-list-item" data-type="filter-date" data-url="<?php echo U('tasklist/datesearch');?>">
                            <div class="aui-list-item-inner aui-list-item-middle">
                                时间
                            </div>
                        </li>
                        <li class="aui-list-item" data-type="filter-type">
                            <div class="aui-list-item-inner filter-type">
                                任务类型
                            </div>
                        </li>
                        <li class="aui-list-item" data-type="filter-stage">
                            <div class="aui-list-item-inner filter-stage">
                                任务进程
                            </div>
                        </li>
                    </ul>
                </div>
             </div>
        </div>
        <div class="aui-bar-tab-item item-create" tapmode>
            <div class="aui-bar-tab-label">新建任务</div>
        </div>
        <div class="aui-bar-tab-item item-review" tapmode>
            <div class="aui-bar-tab-label">任务审核</div>
        </div> 
    </footer>
</body>

<script type="text/javascript">
    var urlArr = ["<?php echo U('tasklist/index');?>", "<?php echo U('newtask/index');?>", "<?php echo U('review/index');?>"];
    var popup = new auiPopup();
    Specfooter.init();
</script>
</html>
<script type="text/javascript" src="/application/Html/Dist/js/aui/aui-scroll.js" ></script>
<script type="text/javascript" src="/application/Html/Dist/js/aui/aui-pull-refresh.js"></script>
<script type="text/javascript" src="/application/Html/Dist/js/fsgallery.js" ></script>
<script type="text/javascript">
TaskList.init();
</script>