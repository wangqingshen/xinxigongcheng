var apiUrl = 'http://www.cdqsnwq.com/api.php';
var wechat = 100;
var appid = 'wxd1d0f0098446708c';
var timestamp, nonceStr;
var stageList = {};
var typeList = {};
var account_type = {};

var page = 1;
var pagesize = 10;

//获取url后面的哈希值
function get_url_hash(key){
 	var param = {};
    var url = location.href;
    var str = url.split("?")[1];
    var arr = str.split("&");
    for(var i=0; i<arr.length; i++){
        var key_str = arr[i].split('=')[0];
        var val_str = arr[i].split('=')[1];
        param[key_str] = val_str
    }
    return param[key]
}

function setRefreshHeight() {
	var _h = window.screen.height;
	$('.aui-refresh-content').css('min-height', _h-50+'px');
}

function getTaskParams(taskParamsSucc) {
	var info = mergeInfo('task_global_params', '');
	ajaxFun(info, taskParamsSucc, '');
}

function getAnswerType(consultationParamsSucc) {
	var info = mergeInfo('consult_global_params', '');
	ajaxFun(info, consultationParamsSucc, '');
}

/**
 * 随机生成一个n位的随机数
 * @param [Int] [n] 一个正整数
 * @return {String} [str] 生成的随机数
 * @author wxy
 * @private
 */
function getRandStr(n) {
	var str = '';
	for (var i = 0; i < n; i++) {
		str += Math.floor(Math.random() * 10).toString();
	}
	return str;
}

/**
 * 获取当前时间格式为ymdhis的时间字符串
 * @return {String} ymdhis
 * @author wxy
 */

function getCurTime() {
	var date = new Date(),
		y = date.getFullYear().toString().substr(2),
		m = (date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1).toString(),
		d = date.getDate() < 10 ? '0' + date.getDate() : date.getDate().toString(),
		h = date.getHours() % 12 < 10 ? '0' + date.getHours() % 12 : (date.getHours() % 12).toString(),
		i = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes().toString(),
		s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds().toString();
	return (y + m + d + h + i + s);
}

function wxChooseImage() {  
    wx.chooseImage({  
        count: 1,  
        needResult: 1,  
        sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有  
        sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有  
        success: function (data) {  
            localIds = data.localIds[0].toString(); // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片  
            if (rh.tostr(localIds)) {  
                wxuploadImage(localIds);  
            }  
        },  
        fail: function (res) {  
            alterShowMessage("操作提示", JSON.stringify(res), "1", "确定", "", "", "");  
        }  
    });  
}  

function wxBasicInfo(wxSuccssFn) {
	timestamp = Date.parse(new Date()).toString();
	nonceStr = '123456';
	var data = {
		'nonce_str': nonceStr,
		'timestamp': timestamp,
		'url': location.href
	};
	var info = mergeInfo('get_wechat_signature', data);
	ajaxFun(info, wxSuccssFn, '');
}

/**
 * mad5加密密码
 * @author wxy
 * @private
 */
function md5_pwd(v) {
	var authcode = 'WKhioMgQ7OhErmvIuM';
	var re = "###" + md5(md5(authcode + v));
	return re;
}

/**
 * ajax公共方法
 * @author wxy
 * @private
 */
function ajaxFun(info, successFun, beforeF) {
	$.ajax({
		type: 'POST',
		url: apiUrl,
		data: info,
		dataType: 'html',
		contentType: "application/json; charset=utf-8",
	 	beforeSend: beforeF,
    	success: successFun,
    	// complete: completeFun,
    	error: errorFun
    })
}

function beforeLoadFun(dom) {
	var load = createLoadDom();
	dom.append(load);
}

function beforeDialogFun() {
	var mark = createDialog();
	$('body').append(mark);
}

function errorFun() {
	$('.zhezhao, .loading-more').remove();
	// alert('网络错误，请刷新重试');
}

// 动态创建loading dom
function createLoadDom() {
	var d = $('<div />').addClass('load-wrapper loading-more'),
		l = $('<img />').attr('src', localStorage.localStorage_url+'loading.gif'),
		s = $('<span />').text('加载中');
	d.append(l,s);
	return d;
}

// 动态创建遮罩层
function createDialog() {
	var d = $('<div />').addClass('zhezhao'),
		l = $('<img />').attr('src', localStorage.localStorage_url+'loading.gif');
	d.append(l);
	return d;
}

function createEmptyDom() {
	var e = $('<div />').addClass('empty'),
		s = $('<span />').text('无更多数据');
	e.append(s);
	return e;
}

/**
 * 自动组合api接口所需的信息
 * @param {String} [apiName] api接口的方法名
 * @param {Object} [data] 传给api的data对象
 * @return {Object} [info] 组合以后的info对象
 * @author wxy
 * @private
 */
function mergeInfo(apiName, data) {
	var appId = wechat,
		randStr = getRandStr(5),
		date = getCurTime(),
		// timestamp = new Date().getTime(),
		signature = hex_sha1(hex_sha1(date + randStr) + appId),
		info = {
			"header": {
				"timestamp": date,
				"nonce": randStr,
				"signature": signature
			},
			"cmd": {
				"name": apiName
			},
			"data": data
		};
	info = JSON.stringify(info);
	info = Base64.encode(info);
	var arr = [];
	arr.push(info);
	arr.push(appId);
	arr = Base64.encode(JSON.stringify(arr));
	return arr;
}

function decodeMsg(msg) {
	msg = JSON.parse(Base64.decode(JSON.parse(Base64.decode(msg))[0]));
	return msg;
}

// 管理员登录注册
var Login = (function($){
	var toast = new auiToast();
	var module = {
		init: function(){
			window.localStorage.setItem('localStorage_url', $('.localStorage-url').val());
			module.checkUserInfo();
		}, 

		checkUserInfo: function() {
			$('.login-btn').bind('click', function(e){
				e.stopPropagation();
				var username = $('.username').val(),
					pwd = $('.userpwd').val();
				if(!username) {
					toast.fail({
	                    title:"请输入用户名",
	                    duration:5000
	                });
	                $('.username').focus();
	                return false;
				}
				if(!pwd) {
					toast.fail({
	                    title:"请输入密码",
	                    duration:5000
	                });
	                $('.userpwd').focus();
	                return false;
				}
				pwd = md5_pwd(pwd);
				var data = {
					'user_name': username,
					'user_pwd': pwd
				};
				var info = mergeInfo('a_login', data);
				ajaxFun(info, module.successFun, beforeDialogFun);
			});
		},

		successFun: function(data) {
			$('.zhezhao').remove();
			var msg = decodeMsg(data);
			if(msg.errcode == 1) {
				var user_id = msg.data.user_id;
				window.localStorage.setItem('user_id', user_id);
				window.location.href = taskUrl;
			} else {
				alert(msg.errmsg);
			}
		} 
	};
	return {
		init: module.init
	};
}(jQuery))

// 管理员任务列表
var TaskList = (function($){
	var type = ['1', '2', '3', '4']; //1、时间 2、类型 3、阶段 4、默认
	var curType = 4;
	var curPage = 1;
	var task_type, stage_id;
	var scrollState = false;
	var module = {
		init: function(){			  
			setRefreshHeight();
			getTaskParams(module.footerSuccFun);
			var startDate = get_url_hash('startDate');
			if(startDate != undefined) {
				curType = 1;
			}
			module.getTaskList();
			module.pullRefresh();
		}, 

		filterEnsure: function() {
			$('.ensure').click(function(e){
				e.stopPropagation();
				curType = $(this).attr('data-type'),
				_id = $(this).attr('data-id');
				if(curType == '2') {
					task_type = _id;
				}else if(curType == '3') {
					stage_id = _id;
				}
				curPage = 1;
				$('.task-content .aui-list').children().remove();
				module.getTaskList();
			});
		},

		getTaskList: function() {
			var data = {
				'type': curType,
				'page': curPage,
				'page_size': pagesize
			};
			if(curType == '2') {
				data.task_type = task_type;
			}
			if(curType == '3') {
				data.stage_id = stage_id;
			}
			if(curType == '1') {
				var startDate = get_url_hash('startDate'),
					endDate = get_url_hash('endDate');
				var timearea = {
					'start_time': startDate,
					'end_time': endDate
				};
				data.timearea = timearea;
			}
			var info = mergeInfo('a_task_list', data);
			ajaxFun(info, module.successFun, beforeLoadFun($('.task-content .aui-list')));
		},

		pullRefresh: function() {
			var pullRefresh = new auiPullToRefresh({
			        container: document.querySelector('.aui-refresh-content'),
			        triggerDistance: 100
			},function(ret){
				 if(ret.status=="success"){
				 	setTimeout(function(){
	                	curPage = 1; // 初始化数据
		       			$('.task-content .aui-list').children().remove();
		       			module.getTaskList();
						pullRefresh.cancelLoading(); //刷新成功后调用此方法隐藏
	                },1500)
				 }	
			})
		},

		scrollAddMore: function() {
			var scroll = new auiScroll({
		        listen:true,
		        distance:0 //判断到达底部的距离，isToBottom为true
		    },function(ret){
		    	if(ret.isToBottom && scrollState && $("body").scrollTop() > 0) {
		    		// addFun ajax加载更多方法
		    		scrollState = false;
		    		curPage++;
		    		module.getTaskList();
		    	}
		    })
		},

		getTaskInfo: function() {
			$('.task-content .aui-list>li').bind('click', function(e){
				e.stopPropagation();
				var t_id = $(this).attr('data-t-id');
				var d = {
					'task_id': t_id
				};
				var info = mergeInfo('get_task_examine_info', d);
				ajaxFun(info, module.successFun1, beforeDialogFun);
				
			});
		},

		successFun1: function(data) {
			$('.zhezhao').remove();
			var msg = decodeMsg(data);
			if(msg.errcode == 1) {
				var _c = $('.copy-dialog-content').clone();
				var m = msg.data;
				var t = m.title,
					c = m.content,
					status = m.status,
					p = m.process,
					_img = m.task_img,
					_explain = m.task_examine_explain;
				_c.find('.task-name').text(t);
				_c.find('.popup-task-content').text(c);
				if(_img != 'null') {
					_c.find('.task-img-content>img').attr('src', _img);
					_c.find('.task-img-item').removeAttr('style');
				}
				if(_explain != null) {
					_c.find('.task-explain-content').text(_explain);
					_c.find('.task-explain-item').removeAttr('style');
				}
				for(var i in p) {
					var _copy = $('.item-copy').clone();
					_copy.find('.task-step').text(p[i].stage_name+'执行人：');
					_copy.find('.task-step-name').text(p[i].account_name);
					var _a = $('<a />').attr('href', 'tel:'+p[i].mobile).text(p[i].mobile);
					_copy.find('.task-step-mob').append(_a);
					_c.find('.aui-list').append(_copy.html());
				}
				var dialog = new auiDialog();
				dialog.alert({
		           	title:"",
		            msg:_c.html(),
		            buttons:['关闭']
		        },function(ret){
		    		if(ret.buttonIndex == 1) {
		    			dialog.remove();
	                    $('.aui-mask-in').remove();
		    		}
		        });
		      	if(_img != null) {
		      		$('.aui-dialog .task-img-content>img').fsgallery();
		      	}
		        // $("body").click(function(e) {
		        // 	alert(e.target.className);
		        // 	e.stopPropagation();
	         //        var checkclass = e.target.className;
	         //        if (checkclass.indexOf("aui-mask-in") >= 0){
	         //            dialog.remove();
	         //            $('.aui-mask-in').remove();
	         //        }
	         //    });
			} else {
				alert(msg.errmsg);
			}
		},

		successFun: function(data) {
			$('.loading-more').remove();
			var msg = decodeMsg(data);
			if(msg.errcode == 1) {
				var list = msg.data.list,
					count = msg.data.count;
				if(list.length) {
					for(var i in list) {
						var _clone = $('.copy-content').clone(true);
						_clone.find('li').attr({
							'data-t-id': list[i].t_id,
							'data-stage-id': list[i].t_stage_id
						});
						_clone.find('.aui-list-item-title').text(list[i].t_title);
						_clone.find('.task-date').text(list[i].create_time);
						_clone.find('.task-progress').text(list[i].stage_name);
						$('.task-content .aui-list').append(_clone.html());
					}
					scrollState = true;
					module.scrollAddMore();
					module.getTaskInfo();
				} else {
					var _e = createEmptyDom();
					$('.task-content .aui-list').append(_e);
				}
			} else {
				alert(msg.errmsg);
			}
		},

		filterPopEvt: function() {
			$('.item-filter .aui-popup-content').find('.aui-list-item').each(function(){
				var type = $(this).attr('data-type');
				if(type == 'filter-date') {
					$(this).click(function(e){
						e.stopPropagation();
						popup.hide(document.getElementById("filter-type"));
						window.location.href=$(this).attr('data-url');
					});
				}else if(type == 'filter-type') {
					var select = new MobileSelect({
						trigger: '.aui-list-item-inner.' + type, 
						title: '',  
						wheels: [{data: typeList}]
					});

				}else if(type == 'filter-stage') {
					var select = new MobileSelect({
						trigger: '.aui-list-item-inner.' + type, 
						title: '',  
						wheels: [{data: stageList}]
					});
				}
			});
			module.filterEnsure();
		},

		footerSuccFun: function(data) {
			var msg = decodeMsg(data);
			if(msg.errcode == 1) {
				stageList = msg.data.stage;
				typeList = msg.data.task_type;
				account_type = msg.data.account_type;
				module.filterPopEvt();
			}
		},

	};
	return {
		init: module.init
	};
}(jQuery))

// 时间查询
var DateSearch = (function($){
	var toast = new auiToast();
	var module = {
		init: function(){
			$('.search-btn').bind('click', function(e){
				e.stopPropagation();
				beforeDialogFun();
				module.checkDateInfo();
			});
		}, 

		checkDateInfo: function() {
			var startDate = $('#startDate').text(),
				endDate = $('#endDate').text();
			if(startDate == '请选择') {
				$('.zhezhao').remove();
				toast.fail({
	                title:"请选择开始时间",
	                duration:5000
	            });
	            return false;
			}
			if(endDate == '请选择') {
				$('.zhezhao').remove();
				toast.fail({
	                title:"请选择结束时间",
	                duration:5000
	            });
	            return false;
			}
			setTimeout(function(){
				 $('.zhezhao').remove();
				window.location.href = searchUrl + '&startDate='+startDate+'&endDate='+endDate;
			}, 1000);
		}


	};
	return {
		init: module.init
	};
}(jQuery))

// 新加任务
var Newtask = (function($){
	var maxStep = 6;
	var dialog = new auiDialog();
	var toast = new auiToast();
	var _parent;
	var imgSrc;
	var module = {
		init: function(){
			getTaskParams(module.taskParamsSucc);
			module.addStageStep();
			module.createTask();
			wxBasicInfo(module.wxSuccssFn);
		}, 

		createTask: function() {
			$('.publish-btn').on('click', function(e){
				e.stopPropagation();
				var task_name = $('input[name="taskname"]').val(),
					task_type = $('.select-task-type').attr('data-id'),
					content = $('textarea[name="tcontent"]').val();
				if(!task_name) {
					toast.fail({
		                title:"请输入任务名",
		                duration:5000
		            });
		            return false;
				}
				if(!task_type || task_type == undefined) {
					toast.fail({
		                title:"请选择任务类型",
		                duration:5000
		            });
		            return false;
				}
				if(!content) {
					toast.fail({
		                title:"请输入任务描述",
		                duration:5000
		            });
		            return false;
				}
 				var _l = module.getStageList();
 				if(_l) {
 					var data = {
 						'title': task_name,
 						'content': content,
 						'task_type': task_type,
 						'user_id': localStorage.user_id,
 						'process': _l
 					};
 				}else{
 					return false;
 				}
 				if(imgSrc != undefined) {
 					data.task_img = imgSrc;
 				}
 				dialog.alert({
		           	title:"",
		            msg:document.getElementById('dialog-inner-content').innerHTML,
		            buttons:['确认', '取消']
		        },function(ret){
		            if(ret.buttonIndex == 1){
		                var info = mergeInfo('create_task', data);
						ajaxFun(info, module.successFun, beforeDialogFun);
		            }else{
		            	dialog.remove();
	            		$('.aui-mask-in').remove();
		            }
		        });
			});
		},

		wxSuccssFn: function(data) {
			var msg = decodeMsg(data);
			if(msg.errcode == 1) {
				var signature = msg.data.signature;
				wx.config({  
			        debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。  
			       	appId: appid, // 必填，公众号的唯一标识  
			        timestamp: timestamp, // 必填，生成签名的时间戳  
			        nonceStr: nonceStr, // 必填，生成签名的随机串  
			        signature: signature,// 必填，签名，见附录1  
			        jsApiList: ['chooseImage', 'uploadImage'], // 必填，需要使用的JS接口列表，所有JS接口列表见附录2  
			    });  
			    wx.ready(function(){
			    	var images = {
		                localId: [],
		                serverId: []
		            };
			    	$('.select-img').click(function(e){
			    		e.stopPropagation();
			    		wx.chooseImage({
		                    success: function(res) {
		                        var localIds = res.localIds;
		                        if(localIds.length > 1) {
				                  	toast.fail({
							            title:"只能选择一张图片",
							            duration:5000
							        });
				                }else{
				                	getImgInfo(localIds);
				                }
		                    }
		                });
			    	});

			    	var getImgInfo = function(localIds) {
			    		var localId = localIds.pop();
			    		wx.getLocalImgData({
						    localId: localId, // 图片的localID
						    success: function (res) {
						        var localData = res.localData; // localData是图片的base64数据，可以用img标签显示
						        var u = navigator.userAgent;
						  		var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端		
						   		if(isAndroid) {
						   			var base_data = localData;
						   			localData = 'data:image/jgp;base64,' + base_data;
						   		}
						   		imgSrc = localData;
						   		$('.select-img').text('已选择').attr('data-status', '1');
						    }
						});
			    	}
			    	// var syncUpload = function(localIds) {
		      //           var localId = localIds.pop();
		      //           wx.uploadImage({
		      //               localId: localId,
		      //               isShowProgressTips: 1,
		      //               success: function(res) {
		      //                   var serverId = res.serverId; 
		      //                   console.log(serverId);
		      //                   if (localIds.length > 0) {
		      //                       syncUpload(localIds);
		      //                   }
		      //               }
		      //           });
		      //       };
			    })
			    wx.error(function(res) {
		            alert(res.errMsg);
		        });
			}
		},

		taskParamsSucc: function(data) {
			var msg = decodeMsg(data);
			if(msg.errcode == 1) {
				stageList = msg.data.stage;
				typeList = msg.data.task_type;
				account_type = msg.data.account_type;
				var select = new MobileSelect({
					trigger: '.select-task-type', 
					title: '',  
					wheels: [{data: typeList}]
				});
				var _copy = $('.copy-content');
				var num = 0;
				for(var i in stageList) {
					var _opt = $('<option />');
					_opt.val(i).text(stageList[i]);
					_copy.find('.s-step').append(_opt);
					num++;
				}
				maxStep = num;
				for(var j in account_type) {
					var _opt1 = $('<option />');
					_opt1.val(j).text(account_type[j]);
					_copy.find('.s-level').append(_opt1);
				}
				_parent = $('.copy-content');
				module.getAccount(_copy.find('.s-level').val());
			}
		}, 

		getAccount: function(t) {
			var data = {
				'account_type': t
			};
			var info = mergeInfo('get_accounts', data);
			ajaxFun(info, module.accountSucc , '');
		},

		selectLevelEvt: function() {
			$('.step-list .s-level').change(function(){
				var t = $(this).val();
				_parent = $(this).parents('.stage-item');
				module.getAccount(t);

			});
		},

		accountSucc: function(data) {
			var msg = decodeMsg(data);
			if(msg.errcode == 1) {
				var list = msg.data;
				_parent.find('.s-user>option').remove();
				for(var i in list) {
					var _opt = $('<option />');
					_opt.val(list[i]['a_id']).text(list[i]['a_name']);
					_parent.find('.s-user').append(_opt);
				}
			}
		},

		successFun: function(d) {
			$('.zhezhao').remove();
			var msg = decodeMsg(d);
			if(msg.errcode == 1) {
				dialog.remove();
	            $('.aui-mask-in').remove();
	            window.location.href = listUrl; 
			} else {
				alert(msg.errmsg);
			}
		},

		getStageList: function() {
			var _list = $('.step-list').children();
			if(_list.length) {
				var arr = [];
				_list.each(function(){
					var _s_step = $(this).find('.s-step'),
						_s_level = $(this).find('.s-level'),
						_s_user = $(this).find('.s-user');
					var b = {};
					var _step_id = _s_step.val(),
						_level_id = _s_level.val(),
						_user_id = _s_user.val(),
						_user_text = _s_user.find('option:selected').text();
					b.a_id = _user_id;
					b.a_name = _user_text;
					b.a_type = _level_id;
					b.stage_id = _step_id;
					arr.push(b);
				});
				var len = 0;
				for(var i in arr) {
					len++;
				}
				if(_list.length > len) {
					alert('阶段不能重复，请重新选择');
					return false;
				}else{
					return arr;
				}
			}else{
				alert('任务设置不能为空');
				return false;
			}
		},

		addStageStep: function() {
			$('.add-stage-btn').bind('click', function(e) {
				e.stopPropagation();
				var _list = $('.step-list').children();
				if(_list.length < maxStep) {
					var _clone = $('.copy-content').clone();
					$('.step-list').append(_clone.html());
					module.removeStageStep();
					module.selectLevelEvt();
				}else{
					alert('已达到最大流程设置');
				}
			})
		},

		removeStageStep: function() {
			$('.step-list .stage-rm-btn').click(function(e){
				e.stopPropagation();
				$(this).parent().remove();
			});
		}


	};
	return {
		init: module.init
	};
}(jQuery))

//任务审核
var Review = (function($){
	var toast = new auiToast();
	var dialog = new auiDialog();
	var curPage = 1;
	var scrollState = false;
	var t_id;
	var module = {
		init: function(){
			setRefreshHeight();
			module.getReviewList();
			module.pullRefresh();
		}, 

		getReviewInfo: function() {
			$('.review-content .aui-list>li').bind('click', function(e){
				$('body, .review-content .aui-list').css('overflow', 'hidden');
				e.stopPropagation();
				t_id = $(this).attr('data-t-id');
				var d = {
					'task_id': t_id
				};
				var info = mergeInfo('get_task_examine_info', d);
				ajaxFun(info, module.successFun1, beforeDialogFun);
				
			});
		},

		getReviewList: function() {
			var data = {
				'page': curPage,
				'page_size': pagesize
			};
			var info = mergeInfo('task_examine_list', data);
			ajaxFun(info, module.successFun, beforeLoadFun($('.review-content .aui-list')));
		},

		updateStatus: function(s, c) {
			var data = {
				'task_id': t_id,
				'examine_explain': c,
				'status': s
			};
			var info = mergeInfo('update_task_status', data);
			ajaxFun(info, module.successFun2, beforeDialogFun);
		},

		updateAccountStatus: function(c, process_id) {
			var account_type = $('.aui-dialog .task-level').val(),
				account_id = $('.aui-dialog .task-user').val(),
				account_name = $('.aui-dialog .task-user').find('option:selected').text();
			var data = {
				'task_id': t_id,
				'examine_explain': c,
				'process_id': process_id,
				'account_type': account_type,
				'account_id': account_id,
				'account_name': account_name
			};
			var info = mergeInfo('update_account_status', data);
			ajaxFun(info, module.successFun2, beforeDialogFun);
		},

		successFun2: function(data) {
			$('.zhezhao').remove();
			var msg = decodeMsg(data);
			if(msg.errcode == 1) {
				toast.success({
		            title:"操作成功",
		            duration:5000
		        });
				dialog.remove();
	            $('.aui-mask-in').remove();
	            window.location.reload(); 
			} else {
				alert(msg.errmsg);
			}
		},

		successFun1: function(data) {
			$('.zhezhao').remove();
			var msg = decodeMsg(data);
			if(msg.errcode == 1) {
				var _c = $('.copy-dialog-content').clone();
				var m = msg.data;
				var t = m.title,
					c = m.content,
					status = m.status,
					p = m.process,
					_img = m.task_img,
					_explain = m.task_examine_explain;
				_c.find('.task-name').text(t);
				_c.find('.popup-task-content').text(c);
				if(_img != 'null') {
					_c.find('.task-img-content>img').attr('src', _img);
					_c.find('.task-img-item').removeAttr('style');
				}
				if(_explain != null) {
					_c.find('.task-explain-content').text(_explain);
					_c.find('.task-explain-item').removeAttr('style');
				}
				for(var i in p) {
					var _copy = $('.item-copy').clone();
					_copy.find('.task-step').text(p[i].stage_name+'执行人：');
					_copy.find('.task-step-name').text(p[i].account_name);
					var _a = $('<a />').attr('href', 'tel:'+p[i].mobile).text(p[i].mobile);
					_copy.find('.task-step-mob').append(_a);
					_c.find('.task-explain-item').after(_copy.html());
				}
				if(status == 6) {
					_c.find('.task-change-process').removeAttr('style');
					getTaskParams(module.taskParamsSucc);
				}
				dialog.alert({
		           	title:"",
		            msg:_c.html(),
		            buttons:['关闭', '审核通过', '审核不通过', '同意中止', '不同意中止', '变更']
		        },function(ret){
		        	var c = $('.aui-dialog #review-remark').val();
		        	if(!c && ret.buttonIndex != 1) {
		        		alert('请输入备注');
		                return false;
			        }
		        	var _index =ret.buttonIndex;
		        	var s;
		        	if(_index == 3 || _index == 5) {
		        		s = 1;
		        	}else if(_index == 2) {
		        		s = 4;
		        	}else if(_index == 4){
		        		s = 5;
		        	}
		        	if(_index != 1 && _index != 6) {
		        		module.updateStatus(s, c);
		        	}else if(_index == 6){
		        		var p_id = m.process_id;
		        		module.updateAccountStatus(c, p_id);
		        	}else{
		        		$('body, .review-content .aui-list').css('overflow', 'auto');
		        		dialog.remove();
	            		$('.aui-mask-in').remove();
		        	}  
		        });
		        if(_img != 'null') {
		      		$('.aui-dialog .task-img-content>img').fsgallery();
		      	}
				if(status == 2) {
					$('.aui-dialog-footer .aui-dialog-btn[button-index=3]').hide();
					$('.aui-dialog-footer .aui-dialog-btn[button-index=4]').hide();
					$('.aui-dialog-footer .aui-dialog-btn[button-index=5]').hide();
				}else if (status == 3) {
					$('.aui-dialog-footer .aui-dialog-btn[button-index=1]').hide();
					$('.aui-dialog-footer .aui-dialog-btn[button-index=2]').hide();
					$('.aui-dialog-footer .aui-dialog-btn[button-index=5]').hide();
				}else if(status == 6) {
					$('.aui-dialog-footer .aui-dialog-btn[button-index=1]').hide();
					$('.aui-dialog-footer .aui-dialog-btn[button-index=2]').hide();
					$('.aui-dialog-footer .aui-dialog-btn[button-index=3]').hide();
					$('.aui-dialog-footer .aui-dialog-btn[button-index=4]').hide();
				}else{
					$('.aui-dialog .remark-item').hide();
					$('.aui-dialog-footer .aui-dialog-btn').hide();
					$('.aui-dialog-footer .aui-dialog-btn[button-index=0]').show();
				}
		        $("body").click(function(e) {
		        	e.stopPropagation();
	                var checkclass = e.target.className ;  
	                if (checkclass.indexOf("aui-mask-in") >= 0){
	                    dialog.remove();
	                    $('.aui-mask-in').remove();
	                }
	            });
			} else {
				alert(msg.errmsg);
			}
		},

		taskParamsSucc: function(data) {
			var msg = decodeMsg(data);
			if(msg.errcode == 1) {
				var account_type = msg.data.account_type;
				
				for(var i in account_type) {
					var _opt= $('<option />');
					_opt.val(i).text(account_type[i]);
					$('.aui-dialog .task-level').append(_opt);
				}
				module.getAccount($('.aui-dialog .task-level').val());
				module.selectLevelEvt();
			}
		}, 

		getAccount: function(t) {
			var data = {
				'account_type': t
			};
			var info = mergeInfo('get_accounts', data);
			ajaxFun(info, module.accountSucc , '');
		},

		selectLevelEvt: function() {
			$('.aui-dialog .task-level').change(function(){
				var t = $(this).val();
				module.getAccount(t);
			});
		},

		accountSucc: function(data) {
			var msg = decodeMsg(data);
			if(msg.errcode == 1) {
				var list = msg.data;
				$('.aui-dialog .task-user>option').remove();
				for(var i in list) {
					var _opt = $('<option />');
					_opt.val(list[i]['a_id']).text(list[i]['a_name']);
					$('.aui-dialog .task-user').append(_opt);
				}
			}
		},

		successFun: function(data) {
			$('.loading-more').remove();
			var msg = decodeMsg(data);
			if(msg.errcode == 1) {
				var list = msg.data.list,
					count = msg.data.count;
				if(list.length) {
					for(var i in list) {
						var _clone = $('.copy-content').clone(true);
						_clone.find('li').attr({
							'data-t-id': list[i].t_id
						});
						_clone.find('.aui-list-item-title').text(list[i].t_title);
						_clone.find('.task-date').text(list[i].create_time);
						_clone.find('.task-progress').text(list[i].task_status);
						$('.review-content .aui-list').append(_clone.html());
					}
					scrollState = true;
					module.scrollAddMore();
					module.getReviewInfo();
				} else {
					var _e = createEmptyDom();
					$('.review-content .aui-list').append(_e);
				}
			} else {
				alert(msg.errmsg);
			}
		},

		pullRefresh: function() {
			var pullRefresh = new auiPullToRefresh({
			        container: document.querySelector('.aui-refresh-content'),
			        triggerDistance: 100
			},function(ret){
				 if(ret.status=="success"){
				 	setTimeout(function(){
	                	curPage = 1; // 初始化数据
		       			$('.review-content .aui-list').children().remove();
		       			module.getReviewList();
						pullRefresh.cancelLoading(); //刷新成功后调用此方法隐藏
	                },1500)
				 }	
			})
		},

		scrollAddMore: function() {
			var scroll = new auiScroll({
		        listen:true,
		        distance:0 //判断到达底部的距离，isToBottom为true
		    },function(ret){
		    	if(ret.isToBottom && scrollState && $("body").scrollTop() > 0) {
		    		// addFun ajax加载更多方法
		    		scrollState = false;
		    		curPage++;
		    		module.getReviewList();
		    	}
		    })
		},

	};
	return {
		init: module.init
	};
}(jQuery))

// Footer 
var Specfooter = (function($){
	var module = {
		init: function(){
			module.addActiveFun();
			$('footer.aui-bar-tab>.aui-bar-tab-item').click(function(e){
				e.stopPropagation();
				if($(this).index() != 0) {
					window.location.href = urlArr[$(this).index()];
				}
			});
		}, 

		addActiveFun: function() {
			var _index = $('input[name="footerActive"]').val();
			$('footer.aui-bar-tab>.aui-bar-tab-item').eq(_index).addClass('aui-active');
		}

	};
	return {
		init: module.init
	};
}(jQuery))

// Footer 
var Footer = (function($){
	var module = {
		init: function(){
			module.addActiveFun();
			$('footer.aui-bar-tab>.aui-bar-tab-item').click(function(e){
				e.stopPropagation();
				if($(this).hasClass('aui-active')) {
					return false;
				}else{
					window.location.href = urlArr[$(this).index()];
				}
			});
		}, 

		addActiveFun: function() {
			var _index = $('input[name="footerActive"]').val();
			$('footer.aui-bar-tab>.aui-bar-tab-item').eq(_index).addClass('aui-active');
		}

	};
	return {
		init: module.init
	};
}(jQuery))

//employee 
var Employee = (function($){
	var curPage = 1;
	var curType = 1;
	var scrollState = false;
	var module = {
		init: function(){
			setRefreshHeight();
			module.getEmployeeList();
			module.tabSelectEvt();
			module.pullRefresh();
		}, 

		getReviewInfo: function() {
			$('.employee-content .aui-list>li').bind('click', function(e){
				e.stopPropagation();
				var t_id = $(this).attr('data-t-id');
				window.location.href = detailUrl + '&task_id='+t_id;
			});
		},

		tabSelectEvt: function() {
			$('#footer').children('.aui-bar-tab-item').click(function(e){
				e.stopPropagation();
				var s = $(this).attr('data-id');
				if($(this).hasClass('aui-active')) return;
				$('#footer').children('.aui-bar-tab-item').removeClass('aui-active');
				$(this).addClass('aui-active');
				curType = s;
				curPage = 1;
				$('.employee-content .aui-list').children().remove();
				module.getEmployeeList();
			})
		},

		getEmployeeList: function() {
			var data = {
				'type': curType,
				'account_id': localStorage.account_id,
				'page': curPage,
				'page_size': pagesize
			};
			var info = mergeInfo('account_task_list', data);
			ajaxFun(info, module.successFun, beforeLoadFun($('.employee-content .aui-list')));
		},

		successFun: function(data) {
			$('.loading-more').remove();
			var msg = decodeMsg(data);
			if(msg.errcode == 1) {
				var list = msg.data.list,
					count = msg.data.count;
				if(list.length) {
					for(var i in list) {
						var _clone = $('.copy-content').clone(true);
						_clone.find('li').attr({
							'data-t-id': list[i].task_id
						});
						_clone.find('.aui-list-item-title').text(list[i].task_title);
						_clone.find('.task-date').text(list[i].create_time);
						_clone.find('.task-progress').text(list[i].stage);
						$('.employee-content .aui-list').append(_clone.html());
					}
					scrollState = true;
					module.scrollAddMore();
					module.getReviewInfo();
				} else {
					var _e = createEmptyDom();
					$('.employee-content .aui-list').append(_e);
				}
			} else {
				alert(msg.errmsg);
			}
		},

		pullRefresh: function() {
			var pullRefresh = new auiPullToRefresh({
			        container: document.querySelector('.aui-refresh-content'),
			        triggerDistance: 100
			},function(ret){
				 if(ret.status=="success"){
				 	setTimeout(function(){
	                	curPage = 1; // 初始化数据
		       			$('.employee-content .aui-list').children().remove();
		       			module.getEmployeeList();
						pullRefresh.cancelLoading(); //刷新成功后调用此方法隐藏
	                },1500)
				 }	
			})
		},

		scrollAddMore: function() {
			var scroll = new auiScroll({
			    listen:true,
			    distance:0 //判断到达底部的距离，isToBottom为true
			},function(ret){
				if(ret.isToBottom && scrollState && $("body").scrollTop() > 0) {
					// addFun ajax加载更多方法
					scrollState = false;
					curPage++;
					module.getEmployeeList();
				}
			})
		},

	};
	return {
		init: module.init
	};
}(jQuery))

var Employeedetail = (function($){
	var dialog = new auiDialog();
	var toast = new auiToast();
	var maxImgNum = 9;
	var p_id, a_id, t_id, t_status, p_status = false;
	var imgcodes = [];
	var imgDialog = [];
	var module = {
		init: function(){
			module.getDetailInfo();
		}, 

		getDetailInfo: function() {
			var task_id = get_url_hash('task_id');
			var data = {
				'task_id': task_id
			};
			var info = mergeInfo('get_account_task_info', data);
			ajaxFun(info, module.successFun, beforeDialogFun);
		},

		successFun: function(data) {
			$('.zhezhao').remove();
			var msg = decodeMsg(data);
			if(msg.errcode == 1) {
				var _p = msg.data.process_list,
					_t = msg.data.task_title,
					_c = msg.data.task_content,
					_img = msg.data.task_img,
					_explain = msg.data.task_examine_plain;
				t_id = msg.data.task_id;
				t_status = msg.data.task_status;
				p_id = msg.data.now_process_id;
				a_id = msg.data.account_id;
				$('.task_title').text(_t);
				$('.task_content').text(_c);
				if(_img != 'null' && _img) {
					$('.task-info img').attr('src', _img).fsgallery();
					$('.task-info').removeClass('aui-hide');
				}
				if(_explain != null) {
					$('.task-explain-content').text(_explain);
					$('.task-explain').removeClass('aui-hide');
				}
				var num = 0;
				for(var i in _p) {
					num++;
					var _copy;
					if(i%2 == 0) {
						_copy= $('.copy-item-right').clone();
					}else {
						_copy = $('.copy-item-left').clone();
					}
					_copy.find('.tree-item').css('top', (i*50)+'px');
					_copy.find('.item-stage').text(_p[i].stage_name);
					_copy.find('.item-user').text(_p[i].account_name);
					_copy.find('.item-date').text(_p[i].start_time ? _p[i].start_time : '');
					if(_p[i]['img'][0]) {
						_copy.find('.item-img>img').attr({'src': _p[i]['img'][0], 'data-index': i});
					}
					imgDialog.push(_p[i]['img']);
					if(_p[i].start_time == 0) {
						_copy.find('.tree-item').addClass('completed');
					}
					$('.tree-list').append(_copy.html());
				}
				if(_p[num-1].process_id == p_id) {
					p_status = true;
				}
				module.imgDialogEvt();
				module.tabDisplayEvt();
				$('.tree-list').css('height', (80*num)+'px');
			} else {
				alert(msg.errmsg);
			}
		},

		imgDialogEvt: function() {
			$('.tree-list .item-img>img').click(function(){
				$('#task-img-dialog .img-popup-content').text('');
				if($(this).attr('data-index') != undefined) {
					$('#task-img-dialog .img-popup-content').children().remove();
					var _index = $(this).attr('data-index');
					var list = imgDialog[_index];
					for(var i in list) {
						if(list[i]) {
							var _i = $('<img />').attr('src', list[i]);
							$('#task-img-dialog .img-popup-content').append(_i);
						}
					}
				}else{
					$('#task-img-dialog .img-popup-content').text('还未上传图片');
				}
				dialog.alert({
			        title:"",
			        msg:document.getElementById('task-img-dialog').innerHTML,
			        buttons:['关闭']
			    },function(ret){
			    	if(ret.buttonIndex == 1){
			       		dialog.remove();
		           		$('.aui-mask-in').remove();	
			       }
			    });
			    $('.aui-dialog-body .img-popup-content img').fsgallery();
 			});
		},

		tabDisplayEvt: function() {
			if(t_status == 1) {
				module.taskChange();
				module.taskOver();
				if(localStorage.account_id == a_id) {
					$('.detail-footer>.aui-bar-tab-item').eq(0).css('display', 'table-cell');
					$('.detail-footer>.aui-bar-tab-item').eq(2).css('display', 'table-cell');
					$('.detail-footer>.aui-bar-tab-item').eq(3).css('display', 'table-cell');
					module.addImgDialog();
					if(p_status) {
						$('.detail-footer>.aui-bar-tab-item').eq(4).css('display', 'table-cell');
						module.taskReview();
					}else{
						$('.detail-footer>.aui-bar-tab-item').eq(1).css('display', 'table-cell');
						module.taskTransfer();
					}
				}
			}else if(t_status == 2) {
				$('.detail-footer>.aui-bar-tab-item').eq(5).css('display', 'table-cell');
			}else if(t_status == 3) {
				$('.detail-footer>.aui-bar-tab-item').eq(6).css('display', 'table-cell');
			}else if(t_status == 4) {
				$('.detail-footer>.aui-bar-tab-item').eq(7).css('display', 'table-cell');
			}else if(t_status == 5) {
				$('.detail-footer>.aui-bar-tab-item').eq(8).css('display', 'table-cell');
			}else if(t_status == 6) {
				$('.detail-footer>.aui-bar-tab-item').eq(9).css('display', 'table-cell');
			}
		},

		wxSuccssFn: function(data) {
			var msg = decodeMsg(data);
			if(msg.errcode == 1) {
				var signature = msg.data.signature;
				wx.config({  
			        debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。  
			       	appId: appid, // 必填，公众号的唯一标识  
			        timestamp: timestamp, // 必填，生成签名的时间戳  
			        nonceStr: nonceStr, // 必填，生成签名的随机串  
			        signature: signature,// 必填，签名，见附录1  
			        jsApiList: ['chooseImage', 'uploadImage'], // 必填，需要使用的JS接口列表，所有JS接口列表见附录2  
			    });  
			    wx.ready(function(){
			    	var images = {
		                localId: [],
		                serverId: []
		            };
			    	$('.aui-dialog-body .chooseImgBtn').click(function(e){
			    		e.stopPropagation();
			    		wx.chooseImage({
		                    success: function(res) {
		                        var localIds = res.localIds;
		                        var len = $('.aui-dialog-body .img-content').children().length;
		                        if(localIds.length > maxImgNum || (len + localIds.length) > (maxImgNum+1)) {
		                        	alert('最多上传9张图片');
		                        }else{
		                        	 getImgInfo(localIds, 0);
		                        }
		                    }
		                });
			    	});

			    	var getImgInfo = function(localIds, id) {
			    		var localId = localIds.pop();
			    		wx.getLocalImgData({
						    localId: localId, // 图片的localID
						    success: function (res) {
						        var localData = res.localData; // localData是图片的base64数据，可以用img标签显示
						        var u = navigator.userAgent;
						  		var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
						   		if(isAndroid) {
						   			var base_data = localData;
						   			localData = 'data:image/jgp;base64,' + base_data;
						   		}
						   		var _i = $('<img />').attr({'src': localData, 'data-id': id}).on('click', function(e){
						   			e.stopPropagation();
						   			module.changeImage($(this));
						   		});
						   		imgcodes.push(localData);
						   		$('.aui-dialog-body .img-content').append(_i);
						   		if(localIds.length>0) {
						   			id++;
						   			getImgInfo(localIds, id);
						   		}
				
						    }
						});
			    	}
			    })
			    wx.error(function(res) {
		            alert(res.errMsg);
		        });
			}
		},

		changeImage: function(d) {
			wx.ready(function(){
				wx.chooseImage({
		           	success: function(res) {
		           	    var localIds = res.localIds;
		           	    if(localIds.length > 1) {
		                  	toast.fail({
					            title:"只能选择一张图片",
					            duration:5000
					        });
		                }else{
		                   	changeImgInfo(localIds);
		               	}
		            }
		        });

		        var changeImgInfo = function(localIds) {
			    	var localId = localIds.pop();
			    	wx.getLocalImgData({
					    localId: localId, // 图片的localID
					    success: function (res) {
					        var localData = res.localData; // localData是图片的base64数据，可以用img标签显示
					        var u = navigator.userAgent;
						  	var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端		
						   	if(isAndroid) {
						   		var base_data = localData;
						   		localData = 'data:image/jgp;base64,' + base_data;
						   	}
					   		d.attr('src', localData);
					   		var id = d.attr('data-id');
					   		imgcodes.splice(id, 1);
					   		imgcodes.push(localData);
					    }
					});
			    }
			})
		},

		uploadImage: function() {
			if(imgcodes.length) {
				var data = {
			        'process_id': p_id,
			        'account_id': localStorage.account_id,
			        'imgcodes': imgcodes
			    };
			    var info = mergeInfo('update_process_imgs', data);
				ajaxFun(info, module.uploadSuccessFn, beforeDialogFun);
			}else{
				toast.fail({
				    title:"请先添加图片再上传",
				    duration:5000
				});
			}
		},

		uploadSuccessFn: function(data) {
			$('.zhezhao').remove();
			var msg = decodeMsg(data);
			if(msg.errcode == 1) {
				toast.success({
		            title:"照片上传成功",
		            duration:5000
		        });
		        window.location.reload(); 
			}else{
				alert(msg.errmsg);
			}
		},

		addImgDialog: function() {
			$('.task-img-btn').on('click', function(e){
				e.stopPropagation();
				dialog.alert({
			        title:"",
			        msg:document.getElementById('img-dialog').innerHTML,
			        buttons:['上传', '关闭']
			    },function(ret){
			    	if(ret.buttonIndex == 1){
			       		module.uploadImage();
			       }else{
			       	dialog.remove();
			       	imgcodes = [];
		           	$('.aui-mask-in').remove();
			       }
			    })
			    wxBasicInfo(module.wxSuccssFn);
			});
		},

		taskTransfer: function() {
			$('.task-transfer-btn').on('click', function(e){
				e.stopPropagation();
				dialog.alert({
		           	title:"",
		            msg:document.getElementById('task-transfer-dialog').innerHTML,
		            buttons:['确认', '取消']
		        },function(ret){
		            if(ret.buttonIndex == 1){
		            	var data = {
		            		'process_id': p_id,
		            		'task_id': t_id
		            	};
		                var info = mergeInfo('process_next', data);
						ajaxFun(info, module.successFun1, beforeDialogFun);
		            }else{
		            	dialog.remove();
	            		$('.aui-mask-in').remove();
		            }
		        });
			});

		},

		successFun1: function(data) {
			$('.zhezhao').remove();
			var msg = decodeMsg(data);
			if(msg.errcode == 1) {
				toast.success({
		            title:"流转提交成功",
		            duration:5000
		        });
		        window.location.href = taskUrl;
			}else{
				alert(msg.errmsg);
			}
		},

		taskChange: function() {
			$('.task-change-btn').on('click', function(e){
				e.stopPropagation();
				dialog.alert({
		           	title:"",
		            msg:document.getElementById('task-change-dialog').innerHTML,
		            buttons:['提交', '取消']
		        },function(ret){
		            if(ret.buttonIndex == 1){
		            	if(!$('.aui-dialog .change-content>textarea').val()) {
		       
					        alert('请输入变更原因');
					        return false;
		            	}
		            	var data = {
		            		'process_id': p_id,
		            		'task_id': t_id,
		            		'examine_content': $('.aui-dialog .change-content>textarea').val()
		            	};
		                var info = mergeInfo('change_process_account', data);
						ajaxFun(info, module.successFun2, beforeDialogFun);
		            }else{
		            	dialog.remove();
	            		$('.aui-mask-in').remove();
		            }
		        });
			});
		},

		successFun2: function(data) {
			$('.zhezhao').remove();
			var msg = decodeMsg(data);
			if(msg.errcode == 1) {
				toast.success({
		            title:"变更提交成功",
		            duration:5000
		        });
		        window.location.reload(); 
			}else{
				alert(msg.errmsg);
			}
		},

		successFun3: function(data) {
			$('.zhezhao').remove();
			var msg = decodeMsg(data);
			if(msg.errcode == 1) {
				toast.success({
		            title:"中止提交成功",
		            duration:5000
		        });
		        window.location.reload(); 
			}else{
				alert(msg.errmsg);
			}
		},

		successFun4: function(data) {
			$('.zhezhao').remove();
			var msg = decodeMsg(data);
			if(msg.errcode == 1) {
				toast.success({
		            title:"申请提交成功",
		            duration:5000
		        });
		        window.location.reload(); 
			}else{
				alert(msg.errmsg);
			}
		},



		taskOver: function() {
			$('.task-over-btn').on('click', function(e){
				e.stopPropagation();
				dialog.alert({
		           	title:"",
		            msg:document.getElementById('task-over-dialog').innerHTML,
		            buttons:['提交', '取消']
		        },function(ret){
		            if(ret.buttonIndex == 1){
		            	if(!$('.aui-dialog .over-content>textarea').val()) {
		            		toast.fail({
					            title:"请输入中止原因",
					            duration:5000
					        });
					        return false;
		            	}
		            	var data = {
		            		'process_id': p_id,
		            		'task_id': t_id,
		            		'examine_content': $('.aui-dialog .over-content>textarea').val(),
		            		'type': 2
		            	};
		                var info = mergeInfo('apply_examine_task', data);
						ajaxFun(info, module.successFun3, beforeDialogFun);
		            }else{
		            	dialog.remove();
	            		$('.aui-mask-in').remove();
		            }
		        });
			});
		},

		taskReview: function() {
			$('.task-review-btn').on('click', function(e){
				e.stopPropagation();
				dialog.alert({
		           	title:"",
		            msg:document.getElementById('task-review-dialog').innerHTML,
		            buttons:['确认', '取消']
		        },function(ret){
		            if(ret.buttonIndex == 1){
		            	if(!$('.aui-dialog .review-content>textarea').val()) {
		            		toast.fail({
					            title:"请输入审核原因",
					            duration:5000
					        });
					        return false;
		            	}
		            	var data = {
		            		'process_id': p_id,
		            		'task_id': t_id,
		            		'examine_content': $('.aui-dialog .review-content>textarea').val(),
		            		'type': 1
		            	};
		                var info = mergeInfo('apply_examine_task', data);
						ajaxFun(info, module.successFun4, beforeDialogFun);
		            }else{
		            	dialog.remove();
	            		$('.aui-mask-in').remove();
		            }
		        });
			})
		}

	};
	return {
		init: module.init
	};
}(jQuery))

var Answer = (function($){
	var curPage = 1;
	var scrollState = false;
	var module = {
		init: function() {
			setRefreshHeight();
			module.getAnswerList();
			module.pullRefresh();
		},

		pullRefresh: function() {
			var pullRefresh = new auiPullToRefresh({
			        container: document.querySelector('.aui-refresh-content'),
			        triggerDistance: 100
			},function(ret){
				 if(ret.status=="success"){
				 	setTimeout(function(){
	                	curPage = 1; // 初始化数据
		       			$('.answer-content .aui-list').children().remove();
		       			module.getAnswerList();
						pullRefresh.cancelLoading(); //刷新成功后调用此方法隐藏
	                },1500)
				 }	
			})
		},

		getAnswerInfo: function() {
			$('.answer-content .aui-list>li').bind('click', function(e){
				e.stopPropagation();
				var t_id = $(this).attr('data-a-id');
				window.location.href = detailUrl + '&answer_id='+t_id;
			});
		},

		getAnswerList: function() {
			var data = {
				'user_type': '1',
				'user_id': localStorage.wechat_member_id,
				'page': curPage,
				'page_size': pagesize
			};
			var info = mergeInfo('get_consult_list', data);
			ajaxFun(info, module.successFun, beforeLoadFun($('.answer-content .aui-list')));
		},

		successFun: function(data) {
			$('.loading-more').remove();
			var msg = decodeMsg(data);
			if(msg.errcode == 1) {
				var list = msg.data.list,
					count = msg.data.count;
				if(list.length) {
					for(var i in list) {
						var _clone = $('.copy-content').clone(true);
						_clone.find('li').attr({
							'data-a-id': list[i].consult_id
						});
						_clone.find('.answer-title').text(list[i].consult_title);
						_clone.find('.answer-news').text(list[i].last_reply == null ? '' : list[i].last_reply);
						_clone.find('.answer-date').text(list[i].new_reply_time);
						_clone.find('.answer-status').text(list[i].consult_status);
						$('.answer-content .aui-list').append(_clone.html());
					}
					scrollState = true;
					module.scrollAddMore();
					module.getAnswerInfo();
				} else {
					var _e = createEmptyDom();
					$('.answer-content .aui-list').append(_e);
				}
			} else {
				alert(msg.errmsg);
			}
		},

		scrollAddMore: function() {
			var scroll = new auiScroll({
			    listen:true,
			    distance:0 //判断到达底部的距离，isToBottom为true
			},function(ret){
				if(ret.isToBottom && scrollState && $("body").scrollTop() > 0) {
					// addFun ajax加载更多方法
					scrollState = false;
					curPage++;
					module.getAnswerList();
				}
			})
		}


	};
	return {
		init: module.init
	};
}(jQuery))

var AnswerFooter = (function($){
	var module = {
		init: function(){
			$('footer.aui-bar-tab>.aui-bar-tab-item').click(function(e){
				e.stopPropagation();
				window.location.href = url;
			});
		}

	};
	return {
		init: module.init
	};
}(jQuery))

var AddAnswer = (function($){
	var dialog = new auiDialog();
	var toast = new auiToast();
	var module = {
		init: function() {
			getAnswerType(module.consultationParamsSucc);
			module.explainPopup();
			module.submitEvt();
		},

		submitEvt: function() {
			$('footer.aui-bar-tab>.aui-bar-tab-item').click(function(e){
				e.stopPropagation();
				var name = $('input[name="consultationName"]').val(),
					type = $('.select-consultation-type').attr('data-id'),
					content = $('textarea[name="tcontent"]').val();
				if(!name) {
					toast.fail({
		                title:"请输入咨询标题",
		                duration:3000
		            });
		            return false;
				}
				if(!type || type == undefined) {
					toast.fail({
		                title:"请选择咨询类型",
		                duration:3000
		            });
		            return false;
				}
				if(!content) {
					toast.fail({
		                title:"请输入咨询内容",
		                duration:3000
		            });
		            return false;
				}
				var data = {
 					'consult_title': name,
 					'consult_content': content,
 					'consult_type': type,
 					'member_id': localStorage.wechat_member_id
 				};
 				var info = mergeInfo('create_consult_task', data);
				ajaxFun(info, module.successFun, beforeDialogFun);
			});
		},

		successFun: function(d) {
			$('.zhezhao').remove();
			var msg = decodeMsg(d);
			if(msg.errcode == 1) {
	            $('.aui-mask-in').remove();
	            window.location.href = listUrl; 
			} else {
				alert(msg.errmsg);
			}
		},

		consultationParamsSucc: function(data) {
			var msg = decodeMsg(data);
			if(msg.errcode == 1) {
				var list = msg.data.expert_type;
				var select = new MobileSelect({
					trigger: '.select-consultation-type', 
					title: '',  
					wheels: [{data: list}]
				});
			}
		}, 

		explainPopup: function() {
			$('.aui-icon-question').on('click', function(e){
				e.stopPropagation();
				dialog.alert({
			        title:"",
			        msg:document.getElementById('dialog-inner-content').innerHTML,
			        buttons:['关闭']
			    },function(ret){
			    	if(ret.buttonIndex == 1){
			       		dialog.remove();
		           		$('.aui-mask-in').remove();	
			       }
			    });
			});
		}		
	};
	return {
		init: module.init
	};
}(jQuery))

var AnswerDetail = (function($){
	var dialog = new auiDialog();
	var toast = new auiToast();
	var consult_id = get_url_hash('answer_id');
	var curPage = 1;
	var pagesize = 5;
	var scrollState = false;
	var module = {
		init: function(){
			module.getDetailInfo();
		},

		getDetailInfo: function() {
			var data = {
				'consult_id': consult_id
			};
			var info = mergeInfo('get_consult_info', data);
			ajaxFun(info, module.successFun, beforeDialogFun);
		},

		successFun: function(data) {
			$('.zhezhao').remove();
			var msg = decodeMsg(data);
			if(msg.errcode == 1) {
				var _t = msg.data.consult_title,
					_c = msg.data.consult_content;
				$('.answer-detail-title').text(_t);
				$('.task_content').text(_c);
				if(msg.data.consult_status == 3) {
					$('.answer-footer').text('已结束').addClass('over');
				}else{
					module.consultReply();
					module.consultEnd();
				}
				module.getReplyList();
			} else {
				alert(msg.errmsg);
			}
		},	

		getReplyList: function() {
			var data = {
				'consult_id': consult_id,
				'page': curPage,
				'page_size': pagesize
			};
			var info = mergeInfo('get_reply_list', data);
			ajaxFun(info, module.listSuccessFun, beforeLoadFun($('#message-content')));
		},

		listSuccessFun: function(data) {
			$('.loading-more').remove();
			var msg = decodeMsg(data);
			if(msg.errcode == 1) {
				var list = msg.data.list,
					count = msg.data.count;
				if(list.length) {
					for(var i in list) {
						var _clone;
						if(list[i].replyer_type == 1) {
							_clone = $('.copy-item-left').clone(true);
						}else if (list[i].replyer_type == 2) {
							_clone = $('.copy-item-right').clone(true);
						}
						_clone.find('img').attr('src', list[i].head_img);
						_clone.find('.wx-name').text(list[i].nick_name);
						_clone.find('.wx-date').text(list[i].reply_time);
						_clone.find('.wx-content').text(list[i].reply_content);
						$('#message-content').append(_clone.html());
					}
					scrollState = true;
					module.scrollAddMore();
				} else {
					var e = $('<div />').addClass('empty'),
						s = $('<span />').text('暂无互动信息');
					e.append(s);
					$('#message-content').append(e);
				}
			} else {
				alert(msg.errmsg);
			}
		},

		scrollAddMore: function() {
			var scroll = new auiScroll({
			    listen:true,
			    distance:0 //判断到达底部的距离，isToBottom为true
			},function(ret){
				if(ret.isToBottom && scrollState && $("body").scrollTop() > 0) {
					// addFun ajax加载更多方法
					scrollState = false;
					curPage++;
					module.getReplyList();
				}
			})
		},

		consultReply: function() {
			$('.add-btn').bind('click', function(e){
				e.stopPropagation();
				var content = $('.answer-footer textarea').val();
				if(!content) {
					toast.fail({
		                title:"请输入咨询内容",
		                duration:3000
		            });
		            return false;
				}
				var data = {
					'consult_id': consult_id,
					'replyer_id': localStorage.wechat_member_id,
					'replyer_type': '1',
					'reply_content': content
				};
				var info = mergeInfo('consult_reply', data);
				ajaxFun(info, module.replySuccessFun, beforeDialogFun);
			})
		},

		replySuccessFun: function(data) {
			$('.zhezhao').remove();
			var msg = decodeMsg(data);
			if(msg.errcode == 1) {
				window.location.reload();
			} else {
				alert(msg.errmsg);
			}
		},

		consultEnd: function() {
			$('.over-btn').bind('click', function(e){
				e.stopPropagation();
				dialog.alert({
		           	title:"",
		            msg:document.getElementById('dialog-inner-content').innerHTML,
		            buttons:['满意', '不满意', '关闭']
		        },function(ret){
		        	if(ret.buttonIndex != 3) {
		        		var data = {
							'consult_id': consult_id,
							'satisfaction': ret.buttonIndex
						};
						var info = mergeInfo('end_consult', data);
						ajaxFun(info, module.endSuccessFun, beforeDialogFun);
		        	}else{
		        		dialog.remove();
	                    $('.aui-mask-in').remove();
		        	}
		        	
		        });
				
			});
		},

		endSuccessFun: function(data) {
			$('.zhezhao').remove();
			var msg = decodeMsg(data);
			if(msg.errcode == 1) {
				toast.success({
	                title:"感谢您的评价与支持",
	                duration:2000
	            });
				setTimeout(function(){
					window.location.reload();
				}, 2000);	
			} else {
				alert(msg.errmsg);
			}
		}

	};
	return {
		init: module.init
	};
}(jQuery))

var Expert = (function($){
	var curPage = 1;
	var scrollState = false;
	var module = {
		init: function() {
			var _h = window.screen.height;
			$('.aui-refresh-content').css('min-height', _h+'px');
			module.getAnswerList();
			module.pullRefresh();
		},

		pullRefresh: function() {
			var pullRefresh = new auiPullToRefresh({
			        container: document.querySelector('.aui-refresh-content'),
			        triggerDistance: 100
			},function(ret){
				 if(ret.status=="success"){
				 	setTimeout(function(){
	                	curPage = 1; // 初始化数据
		       			$('.answer-content .aui-list').children().remove();
		       			module.getAnswerList();
						pullRefresh.cancelLoading(); //刷新成功后调用此方法隐藏
	                },1500)
				 }	
			})
		},

		getAnswerInfo: function() {
			$('.answer-content .aui-list>li').bind('click', function(e){
				e.stopPropagation();
				var t_id = $(this).attr('data-a-id');
				window.location.href = detailUrl + '&answer_id='+t_id;
			});
		},

		getAnswerList: function() {
			var data = {
				'user_type': '2',
				'user_id': localStorage.account_id,
				'page': curPage,
				'page_size': pagesize
			};
			var info = mergeInfo('get_consult_list', data);
			ajaxFun(info, module.successFun, beforeLoadFun($('.answer-content .aui-list')));
		},

		successFun: function(data) {
			$('.loading-more').remove();
			var msg = decodeMsg(data);
			if(msg.errcode == 1) {
				var list = msg.data.list,
					count = msg.data.count;
				if(list.length) {
					for(var i in list) {
						var _clone = $('.copy-content').clone(true);
						_clone.find('li').attr({
							'data-a-id': list[i].consult_id
						});
						_clone.find('.answer-title').text(list[i].consult_title);
						_clone.find('.answer-news').text(list[i].last_reply == null ? '' : list[i].last_reply);
						_clone.find('.answer-date').text(list[i].new_reply_time);
						_clone.find('.answer-status').text(list[i].consult_status);
						$('.answer-content .aui-list').append(_clone.html());
					}
					scrollState = true;
					module.scrollAddMore();
					module.getAnswerInfo();
				} else {
					var _e = createEmptyDom();
					$('.answer-content .aui-list').append(_e);
				}
			} else {
				alert(msg.errmsg);
			}
		},

		scrollAddMore: function() {
			var scroll = new auiScroll({
			    listen:true,
			    distance:0 //判断到达底部的距离，isToBottom为true
			},function(ret){
				if(ret.isToBottom && scrollState && $("body").scrollTop() > 0) {
					// addFun ajax加载更多方法
					scrollState = false;
					curPage++;
					module.getAnswerList();
				}
			})
		}


	};
	return {
		init: module.init
	};
}(jQuery))

var ExpertDetail = (function($){
	var toast = new auiToast();
	var consult_id = get_url_hash('answer_id');
	var curPage = 1;
	var pagesize = 5;
	var scrollState = false;
	var module = {
		init: function(){
			module.getDetailInfo();
		},

		getDetailInfo: function() {
			var data = {
				'consult_id': consult_id
			};
			var info = mergeInfo('get_consult_info', data);
			ajaxFun(info, module.successFun, beforeDialogFun);
		},

		successFun: function(data) {
			$('.zhezhao').remove();
			var msg = decodeMsg(data);
			if(msg.errcode == 1) {
				var _t = msg.data.consult_title,
					_c = msg.data.consult_content;
				$('.answer-detail-title').text(_t);
				$('.task_content').text(_c);
				if(msg.data.consult_status == 3) {
					$('.answer-footer').text('已结束').addClass('over');
				}else{
					module.consultReply();
				}
				module.getReplyList();
			} else {
				alert(msg.errmsg);
			}
		},	

		getReplyList: function() {
			var data = {
				'consult_id': consult_id,
				'page': curPage,
				'page_size': pagesize
			};
			var info = mergeInfo('get_reply_list', data);
			ajaxFun(info, module.listSuccessFun, beforeLoadFun($('#message-content')));
		},

		listSuccessFun: function(data) {
			$('.loading-more').remove();
			var msg = decodeMsg(data);
			if(msg.errcode == 1) {
				var list = msg.data.list,
					count = msg.data.count;
				if(list.length) {
					for(var i in list) {
						var _clone;
						if(list[i].replyer_type == 1) {
							_clone = $('.copy-item-left').clone(true);
						}else if (list[i].replyer_type == 2) {
							_clone = $('.copy-item-right').clone(true);
						}
						_clone.find('img').attr('src', list[i].head_img);
						_clone.find('.wx-name').text(list[i].nick_name);
						_clone.find('.wx-date').text(list[i].reply_time);
						_clone.find('.wx-content').text(list[i].reply_content);
						$('#message-content').append(_clone.html());
					}
					scrollState = true;
					module.scrollAddMore();
				} else {
					var e = $('<div />').addClass('empty'),
						s = $('<span />').text('暂无互动信息');
					e.append(s);
					$('#message-content').append(e);
				}
			} else {
				alert(msg.errmsg);
			}
		},

		scrollAddMore: function() {
			var scroll = new auiScroll({
			    listen:true,
			    distance:0 //判断到达底部的距离，isToBottom为true
			},function(ret){
				if(ret.isToBottom && scrollState && $("body").scrollTop() > 0) {
					// addFun ajax加载更多方法
					scrollState = false;
					curPage++;
					module.getReplyList();
				}
			})
		},

		consultReply: function() {
			$('.add-btn').bind('click', function(e){
				e.stopPropagation();
				var content = $('.answer-footer textarea').val();
				if(!content) {
					toast.fail({
		                title:"请输入回复内容",
		                duration:3000
		            });
		            return false;
				}
				var data = {
					'consult_id': consult_id,
					'replyer_id': localStorage.account_id,
					'replyer_type': '2',
					'reply_content': content
				};
				var info = mergeInfo('consult_reply', data);
				ajaxFun(info, module.replySuccessFun, beforeDialogFun);
			})
		},

		replySuccessFun: function(data) {
			$('.zhezhao').remove();
			var msg = decodeMsg(data);
			if(msg.errcode == 1) {
				window.location.reload();
			} else {
				alert(msg.errmsg);
			}
		}

	};
	return {
		init: module.init
	};
}(jQuery))

var AdminExpert = (function($){
	var curPage = 1;
	var scrollState = false;
	var module = {
		init: function() {
			setRefreshHeight();
			module.getAnswerList();
			module.pullRefresh();
		},

		pullRefresh: function() {
			var pullRefresh = new auiPullToRefresh({
			        container: document.querySelector('.aui-refresh-content'),
			        triggerDistance: 100
			},function(ret){
				 if(ret.status=="success"){
				 	setTimeout(function(){
	                	curPage = 1; // 初始化数据
		       			$('.answer-content .aui-list').children().remove();
		       			module.getAnswerList();
						pullRefresh.cancelLoading(); //刷新成功后调用此方法隐藏
	                },1500)
				 }	
			})
		},

		getAnswerInfo: function() {
			$('.answer-content .aui-list>li').bind('click', function(e){
				e.stopPropagation();
				var t_id = $(this).attr('data-a-id');
				window.location.href = detailUrl + '&answer_id='+t_id;
			});
		},

		getAnswerList: function() {
			var data = {
				'user_type': '3',
				'user_id': localStorage.user_id,
				'page': curPage,
				'page_size': pagesize
			};
			var info = mergeInfo('get_consult_list', data);
			ajaxFun(info, module.successFun, beforeLoadFun($('.answer-content .aui-list')));
		},

		successFun: function(data) {
			$('.loading-more').remove();
			var msg = decodeMsg(data);
			if(msg.errcode == 1) {
				var list = msg.data.list,
					count = msg.data.count;
				if(list.length) {
					for(var i in list) {
						var _clone = $('.copy-content').clone(true);
						_clone.find('li').attr({
							'data-a-id': list[i].consult_id
						});
						_clone.find('.answer-title').text(list[i].consult_title);
						_clone.find('.answer-news').text(list[i].last_reply == null ? '' : list[i].last_reply);
						_clone.find('.answer-date').text(list[i].new_reply_time);
						_clone.find('.answer-status').text(list[i].consult_status);
						$('.answer-content .aui-list').append(_clone.html());
					}
					scrollState = true;
					module.scrollAddMore();
					module.getAnswerInfo();
				} else {
					var _e = createEmptyDom();
					$('.answer-content .aui-list').append(_e);
				}
			} else {
				alert(msg.errmsg);
			}
		},

		scrollAddMore: function() {
			var scroll = new auiScroll({
			    listen:true,
			    distance:0 //判断到达底部的距离，isToBottom为true
			},function(ret){
				if(ret.isToBottom && scrollState && $("body").scrollTop() > 0) {
					// addFun ajax加载更多方法
					scrollState = false;
					curPage++;
					module.getAnswerList();
				}
			})
		}


	};
	return {
		init: module.init
	};
}(jQuery))


var AdminExpertDetail = (function($){
	var toast = new auiToast();
	var consult_id = get_url_hash('answer_id');
	var curPage = 1;
	var pagesize = 5;
	var scrollState = false;
	var module = {
		init: function(){
			module.getDetailInfo();
		},

		getExpertType: function(expert_type) {
			var data = {
				'expert_type': expert_type
			};
			var info = mergeInfo('get_expert_account', data);
			ajaxFun(info, module.expertParamsSucc, '');
		},

		expertParamsSucc: function(data) {
			var msg = decodeMsg(data);
			if(msg.errcode == 1) {
				var list = msg.data;
				if(list.length) {
					var select = new MobileSelect({
						trigger: '.select-expert-type', 
						title: '',  
						wheels: [{data: list}]
					});
				}
			}
		}, 

		getDetailInfo: function() {
			var data = {
				'consult_id': consult_id
			};
			var info = mergeInfo('get_consult_info', data);
			ajaxFun(info, module.successFun, beforeDialogFun);
		},

		successFun: function(data) {
			$('.zhezhao').remove();
			var msg = decodeMsg(data);
			if(msg.errcode == 1) {
				var _t = msg.data.consult_title,
					_c = msg.data.consult_content;
				$('.answer-detail-title').text(_t);
				$('.task_content').text(_c);
				if(msg.data.consult_status != 1) {
					$('.expert-type-inner, .expert-list-inner').removeClass('aui-list-item-arrow');
					$('.select-expert-list').text(msg.data.expert_type);
					$('.select-expert-type').text(msg.data.consult_expert_name);
					$('.fp-btn').text('');
				}else{
					getAnswerType(module.eParamsSucc);
					module.consultReply();
				}
				module.getReplyList();
			} else {
				alert(msg.errmsg);
			}
		},

		eParamsSucc: function(data) {
			var msg = decodeMsg(data);
			if(msg.errcode == 1) {
				var list = msg.data.expert_type;
				var select = new MobileSelect({
					trigger: '.select-expert-list', 
					title: '',  
					wheels: [{data: list}]
				});
			}
			module.ensureEvt();
		},	

		ensureEvt: function() {
			$('.wheels.select-expert-list').parents('.mobileSelect').find('.ensure ').click(function(){
				var expert_id = $('.select-expert-list').attr('data-id');
				module.getExpertType(expert_id);
			});
		},

		getReplyList: function() {
			var data = {
				'consult_id': consult_id,
				'page': curPage,
				'page_size': pagesize
			};
			var info = mergeInfo('get_reply_list', data);
			ajaxFun(info, module.listSuccessFun, beforeLoadFun($('#message-content')));
		},

		listSuccessFun: function(data) {
			$('.loading-more').remove();
			var msg = decodeMsg(data);
			if(msg.errcode == 1) {
				var list = msg.data.list,
					count = msg.data.count;
				if(list.length) {
					for(var i in list) {
						var _clone;
						if(list[i].replyer_type == 1) {
							_clone = $('.copy-item-left').clone(true);
						}else if (list[i].replyer_type == 2) {
							_clone = $('.copy-item-right').clone(true);
						}
						_clone.find('img').attr('src', list[i].head_img);
						_clone.find('.wx-name').text(list[i].nick_name);
						_clone.find('.wx-date').text(list[i].reply_time);
						_clone.find('.wx-content').text(list[i].reply_content);
						$('#message-content').append(_clone.html());
					}
					scrollState = true;
					module.scrollAddMore();
				} else {
					var e = $('<div />').addClass('empty'),
						s = $('<span />').text('暂无互动信息');
					e.append(s);
					$('#message-content').append(e);
				}
			} else {
				alert(msg.errmsg);
			}
		},

		scrollAddMore: function() {
			var scroll = new auiScroll({
			    listen:true,
			    distance:0 //判断到达底部的距离，isToBottom为true
			},function(ret){
				if(ret.isToBottom && scrollState && $("body").scrollTop() > 0) {
					// addFun ajax加载更多方法
					scrollState = false;
					curPage++;
					module.getReplyList();
				}
			})
		},

		consultReply: function() {
			$('.fp-btn').bind('click', function(e){
				e.stopPropagation();
				if($('.select-expert-list').attr('data-id') == undefined) {
					toast.fail({
	                    title:"请选择专家类型",
	                    duration:3000
	                });
	                return false;
				}
				if($('.select-expert-type').attr('data-id') == undefined) {
					toast.fail({
	                    title:"请选择分配专家",
	                    duration:3000
	                });
	                return false;
				}
				var data = {
					'consult_id': consult_id,
					'expert_id': $('.select-expert-type').attr('data-id')
				};
				var info = mergeInfo('allocation_expert', data);
				ajaxFun(info, module.replySuccessFun, beforeDialogFun);
			})
		},

		replySuccessFun: function(data) {
			$('.zhezhao').remove();
			var msg = decodeMsg(data);
			if(msg.errcode == 1) {
				toast.success({
	                title:"分配成功",
	                duration:2000
	            });
				setTimeout(function(){
					window.location.reload();
				}, 2000);	
			} else {
				alert(msg.errmsg);
			}
		}

	};
	return {
		init: module.init
	};
}(jQuery))


// 职员登录注册
var Employeelogin = (function($){
	var toast = new auiToast();
	var module = {
		init: function(){
			window.localStorage.setItem('localStorage_url', $('.localStorage-url').val());
			module.checkUserInfo();
			module.getVerCode();
		}, 

		checkUserInfo: function() {
			$('.next-btn').bind('click', function(e){
				e.stopPropagation();
				var mob = $('.mob').val();
				var code = $('.verify').val();
				var re =/^1[3|7|5|8]\d{9}$/;
				if(!re.test(mob)) {
					toast.fail({
	                    title:"请输入手机号",
	                    duration:3000
	                });
	                $('.mob').focus();
	                return false;
				}
				if(code == '') {
					toast.fail({
	                    title:"请输入验证码",
	                    duration:3000
	                });
	                $('.verify').focus();
	                return false;
				} else if (code.length < 6) {
					toast.fail({
	                    title:"验证码格式不正确",
	                    duration:3000
	                });
	                $('.verify').focus();
	                return false;
	            } 
				var data = {
					'wechat_openid': $('.openid').val(),
					'mobile': mob, 
					'type': type,
					'sns_code': code
				};
				var info = mergeInfo('bind_account', data);
				ajaxFun(info, module.successFun, beforeDialogFun);
			});
		},

		successFun: function(data) {
			$('.zhezhao').remove();
			var msg = decodeMsg(data);
			var str = '';
			if(msg.errcode == 1) {
				var account_id = msg.data.account_id;
				var wechat_member_id = msg.data.wechat_member_id;
				if(account_id != undefined) {
					window.localStorage.setItem('account_id', account_id);
				}
				if(wechat_member_id != undefined) {
					window.localStorage.setItem('wechat_member_id', wechat_member_id);
				}
				window.localStorage.setItem('account_name', msg.data.account_name);
				window.localStorage.setItem('account_type', msg.data.account_type);
				// window.localStorage.setItem('account_logo', msg.data.account_logo);
				str = '&status=success';
			} else {
				str = '&status=fail';
			}
			window.location.href = nextUrl+str+'&type='+ type;
		},

		getVerCode: function() {
			$('.get-verify-btn').bind('click', function(e){
				e.stopPropagation();
				var _this = $(this);
				var mob = $('.mob').val();
				var re =/^1[3|7|5|8]\d{9}$/;
				if(re.test(mob)) {
					var data = {'mobile': mob},
						info = mergeInfo('send_seccode', data);
					$.ajax({
						type: 'POST',
						url: apiUrl,
						data: info,
						dataType: 'html',
						contentType: "application/json; charset=utf-8",
					 	beforeSend: function() {
					 		_this.attr('disabled', true);
					 	},
				    	success: function(data) {
				    		var msg = decodeMsg(data);
				    		if(msg.errcode == 1) {
				    			_this.css('background-color', '#ccc');
				    			var d = new Date();
									d.setSeconds(d.getSeconds() + 59);
									var m = d.getMonth() + 1;
									var time = d.getFullYear() + '-' + m + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
									var end_time = new Date(Date.parse(time.replace(/-/g, "/"))).getTime(),
									//月份是实际月份-1
									sys_second = (end_time - new Date().getTime()) / 1000;
									var timer = setInterval(function() {
										if (sys_second > 1) {
											sys_second -= 1;
											var day = Math.floor((sys_second / 3600) / 24);
											var hour = Math.floor((sys_second / 3600) % 24);
											var minute = Math.floor((sys_second / 60) % 60);
											var second = Math.floor(sys_second % 60);
											var time_text = '';
											if (day > 0) {
											time_text += day + '天';
											}
											if (hour > 0) {
											if (hour < 10) {
											hour = '0' + hour;
											}
											time_text += hour + '小时';
											}
											if (minute > 0) {
											if (minute < 10) {
											minute = '0' + minute;
											}
											time_text += minute + '分';
											}
											if (second > 0) {
											if (second < 10) {
											second = '0' + second;
											}
											time_text += second + '秒';
											}
											_this.text(time_text);
											} else {
											clearInterval(timer);
											_this.attr("disabled", false);
											_this.text('重新获取验证码');
											_this.css('background-color','#00bcd4');
										}
									},
									1000);
								} else {
									toast.fail({
				                    	title:"获取验证码失败",
				                    	duration:2000
				                	});
				                	_this.attr("disabled", false);
								}
				    	},
				    	error: function (data) {
				    		console.log('error:' + data);
				    		_this.attr("disabled", false);
				    	}
				    })
				}else{
					toast.fail({
	                    title:"请输入正确的手机号",
	                    duration:3000
	                });
	                $('.mob').focus();
	                return false;
				}
			
			})
		}
	};
	return {
		init: module.init
	};
}(jQuery))

var VerifyEmployee = (function($){
	var module = {
		init: function(){
			var status = get_url_hash('status');
			var type = get_url_hash('type');
			if(type == 'fans') {
				$('.outer-content').removeClass('aui-hide');
				if(status == 'success') {
					// $('.outer-content').find('.user-logo>img').attr('src', localStorage.account_logo);
					$('.outer-content').find('.verify-success').show();
					$('.outer-content .go-btn').bind('click', function(e){
						e.stopPropagation();
						window.location.href = outTaskUrl;
					});
				} else if(status == 'fail') {
					$('.outer-content').find('.verify-error').show();
				}
			} else {
				$('.inner-content').removeClass('aui-hide');
				if(status == 'success') {
					var url;
					$('.inner-content .user-name').text(localStorage.account_name);
					if(type == 'expert') {
						$('.inner-content .stage-lebel').text('');
					}else {
						$('.inner-content .stage-lebel').text(localStorage.account_type);
					}
					$('.inner-content .verify-success').show();
					type == 'account' ? url = taskUrl : url = expertUrl;
					$('.inner-content .go-btn').bind('click', function(e){
						e.stopPropagation();
						window.location.href = url;
					});
				}else if(status == 'fail') {
					$('.inner-content .verify-error').show();
				}
			}
		}
	};
	return {
		init: module.init
	};
}(jQuery))



