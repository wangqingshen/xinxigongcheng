<?php
function SendDataByCurl($url,$data=array(),&$errorCode){
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);

//    curl_setopt($ch, CURLOPT_SSLVERSION, CURL_SSLVERSION_TLSv1);
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);
    curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, FALSE);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_HEADER, false);
    curl_setopt($ch,CURLOPT_TIMEOUT,1000);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
    $output = curl_exec($ch);
    $errorCode = curl_errno($ch);
    curl_close($ch);
    if(0 !== $errorCode) {
        return false;
    }
    return 	$output;
}

$appid = 100;
$nonce = rand(0, 9).rand(0, 9).rand(0, 9).rand(0, 9).rand(0, 9);
$timestamp = date("ymdHis");
$sid = $timestamp.$nonce;
$signature = sha1($timestamp.$nonce);
$signature = sha1($signature.$appid);

$data = array(
    /*ceshi*/
    'task_global_params' => array(
        'header' => array(
            'signature' => $signature,
            'timestamp' => $timestamp,
            'nonce' => $nonce
        ),
        'cmd' => array(
            'name' => 'task_global_params'
        ),
        'data' => array(
        )
    ),
    /*管理员登陆*/
    'a_login' => array(
        'header' => array(
            'signature' => $signature,
            'timestamp' => $timestamp,
            'nonce' => $nonce
        ),
        'cmd' => array(
            'name' => 'a_login'
        ),
        'data' => array(
            'user_name' => 'test',
            'user_pwd' => '###8672413f2ac72ea28c5b2ad70d8f9b26'
        )
    ),
    /*新建任务*/
    'create_task' => array(
        'header' => array(
            'signature' => $signature,
            'timestamp' => $timestamp,
            'nonce' => $nonce
        ),
        'cmd' => array(
            'name' => 'create_task'
        ),
        'data' => array(
            'title' => '任务标题',
            'content' => '任务内容1任务内容2任务内容3任务内容4,任务内容1任务内容2任务内容3任务内容4,任务内容1任务内容2任务内容3任务内容4,任务内容1任务内容2任务内容3任务内容4,任务内容1任务内容2任务内容3任务内容4,',
            'task_type' => 1,
            'task_img' => 'base64编码',
            'user_id' => 1,
            'process' => array(
                4 => array(
                    'a_id' => 1,
                    'a_name' => '张三',
                    'a_type' => 1
                ),
                2 => array(
                    'a_id' => 2,
                    'a_name' => '张四',
                    'a_type' => 2
                )
            )
        )
    ),
    /*获取管理员任务列表*/
    'a_task_list' => array(
        'header' => array(
            'signature' => $signature,
            'timestamp' => $timestamp,
            'nonce' => $nonce
        ),
        'cmd' => array(
            'name' => 'a_task_list'
        ),
        'data' => array(
            'type' => 3,
            'time_area' => array(
                'start_time' => strtotime(date("2017-10-22 00:00:00")),
                'end_time'   => strtotime(date("2017-10-23 23:59:59")),
            ),
            'task_type' => 2,
            'stage_id' => 1,
            'page' => 1,
            'page_size' => 10
        )
    ),
    /*获取管理员审核列表*/
    'task_examine_list' => array(
        'header' => array(
            'signature' => $signature,
            'timestamp' => $timestamp,
            'nonce' => $nonce
        ),
        'cmd' => array(
            'name' => 'task_examine_list'
        ),
        'data' => array(
            'page' => 1,
            'page_size' => 10
        )
    ),
    /*任务审核详情页*/
    'get_task_examine_info' => array(
        'header' => array(
            'signature' => $signature,
            'timestamp' => $timestamp,
            'nonce' => $nonce
        ),
        'cmd' => array(
            'name' => 'get_task_examine_info'
        ),
        'data' => array(
            'task_id' => 93
        )
    ),
    /*更新任务状态*/
    'update_task_status' => array(
        'header' => array(
            'signature' => $signature,
            'timestamp' => $timestamp,
            'nonce' => $nonce
        ),
        'cmd' => array(
            'name' => 'update_task_status'
        ),
        'data' => array(
            'task_id' => 130,
            'examine_explain' => '多撒滚滚滚',
            'status' => 4
        )
    ),
    /*获取账户任务列表*/
    'account_task_list' => array(
        'header' => array(
            'signature' => $signature,
            'timestamp' => $timestamp,
            'nonce' => $nonce
        ),
        'cmd' => array(
            'name' => 'account_task_list'
        ),
        'data' => array(
            'type' => 1,
            'account_id' => 13,
            'page' => 1,
            'page_size' => 10
        )
    ),
    /*获取账户任务信息*/
    'get_account_task_info' => array(
        'header' => array(
            'signature' => $signature,
            'timestamp' => $timestamp,
            'nonce' => $nonce
        ),
        'cmd' => array(
            'name' => 'get_account_task_info'
        ),
        'data' => array(
            'task_id' => 135
        )
    ),
    /*上传流程图片*/
    'update_process_imgs' => array(
        'header' => array(
            'signature' => $signature,
            'timestamp' => $timestamp,
            'nonce' => $nonce
        ),
        'cmd' => array(
            'name' => 'update_process_imgs'
        ),
        'data' => array(
            'process_id' => 3,
            'account_id' => 13,
            'imgcodes' => ''
        )
    ),
    /*任务流程流转*/
    'process_next' => array(
        'header' => array(
            'signature' => $signature,
            'timestamp' => $timestamp,
            'nonce' => $nonce
        ),
        'cmd' => array(
            'name' => 'process_next'
        ),
        'data' => array(
            'process_id' => 3,
            'task_id' => 18,
            'account_id' => 13
        )
    ),
    /*根据账户类型，获取账户*/
    'get_accounts' => array(
        'header' => array(
            'signature' => $signature,
            'timestamp' => $timestamp,
            'nonce' => $nonce
        ),
        'cmd' => array(
            'name' => 'get_accounts'
        ),
        'data' => array(
            'account_type' => 1
        )
    ),
    /*绑定账户*/
    'bind_account' => array(
        'header' => array(
            'signature' => $signature,
            'timestamp' => $timestamp,
            'nonce' => $nonce
        ),
        'cmd' => array(
            'name' => 'bind_account'
        ),
        'data' => array(
            'mobile' => '18628062002',
            'wechat_openid' => 'oMd5Rwybfz-4ItebCjoKGEsPkNUM',
            'type' => 'fans',
            'sns_code' => '123456'
        )
    ),
    /*获取微信签名*/
    'get_wechat_signature' => array(
        'header' => array(
            'signature' => $signature,
            'timestamp' => $timestamp,
            'nonce' => $nonce
        ),
        'cmd' => array(
            'name' => 'get_wechat_signature'
        ),
        'data' => array(
            'nonce_str' => '123456',
            'timestamp' => '123456789',
        )
    ),
    /*申请任务审核或者任务中止*/
    'apply_examine_task' => array(
        'header' => array(
            'signature' => $signature,
            'timestamp' => $timestamp,
            'nonce' => $nonce
        ),
        'cmd' => array(
            'name' => 'apply_examine_task'
        ),
        'data' => array(
            'process_id' => 124,
            'task_id' => 93,
            'type' => 1,
            'examine_content' => 'dsadasggfgffgffg大时代滚滚滚'
        )
    ),
    /*申请变更执行人*/
    'change_process_account' => array(
        'header' => array(
            'signature' => $signature,
            'timestamp' => $timestamp,
            'nonce' => $nonce
        ),
        'cmd' => array(
            'name' => 'change_process_account'
        ),
        'data' => array(
            'process_id' => 124,
            'task_id' => 93,
            'examine_content' => 'dsadasggfgffgffg大时代滚滚滚'
        )
    ),
    /*创建咨询单*/
    'create_consult_task' => array(
        'header' => array(
            'signature' => $signature,
            'timestamp' => $timestamp,
            'nonce' => $nonce
        ),
        'cmd' => array(
            'name' => 'create_consult_task'
        ),
        'data' => array(
            'member_id' => 1,
            'consult_title' => '测试咨询123455&*',
            'consult_content' => 'dsadasggfgffgffg大时代滚滚滚',
            'consult_type' => 2
        )
    ),
    /*获取咨询列表*/
    'get_consult_list' => array(
        'header' => array(
            'signature' => $signature,
            'timestamp' => $timestamp,
            'nonce' => $nonce
        ),
        'cmd' => array(
            'name' => 'get_consult_list'
        ),
        'data' => array(
            'user_type' => 1,
            'user_id' => 1,
            'page' => 1,
            'page_size' => 10
        )
    ),
    /*发送短信验证码*/
    'send_seccode' => array(
        'header' => array(
            'signature' => $signature,
            'timestamp' => $timestamp,
            'nonce' => $nonce
        ),
        'cmd' => array(
            'name' => 'send_seccode'
        ),
        'data' => array(
            'mobile' => '18628062001'
        )
    ),
    /*获取咨询相关全局参数*/
    'consult_global_params' => array(
        'header' => array(
            'signature' => $signature,
            'timestamp' => $timestamp,
            'nonce' => $nonce
        ),
        'cmd' => array(
            'name' => 'consult_global_params'
        ),
        'data' => array(
        )
    ),
    /*获取咨询内容*/
    'get_consult_info' => array(
        'header' => array(
            'signature' => $signature,
            'timestamp' => $timestamp,
            'nonce' => $nonce
        ),
        'cmd' => array(
            'name' => 'get_consult_info'
        ),
        'data' => array(
            'consult_id' => 1
        )
    ),
    /*回复咨询*/
    'consult_reply' => array(
        'header' => array(
            'signature' => $signature,
            'timestamp' => $timestamp,
            'nonce' => $nonce
        ),
        'cmd' => array(
            'name' => 'consult_reply'
        ),
        'data' => array(
            'consult_id' => 1,
            'replyer_id' => 1,
            'replyer_type' => 1,
            'reply_content' => '阿达撒郭德纲发发发的'
        )
    ),
    /*获取回复列表*/
    'get_reply_list' => array(
        'header' => array(
            'signature' => $signature,
            'timestamp' => $timestamp,
            'nonce' => $nonce
        ),
        'cmd' => array(
            'name' => 'get_reply_list'
        ),
        'data' => array(
            'consult_id' => 1,
            'page' => 1,
            'page_size' => 10
        )
    ),
    /*分配专家*/
    'allocation_expert' => array(
        'header' => array(
            'signature' => $signature,
            'timestamp' => $timestamp,
            'nonce' => $nonce
        ),
        'cmd' => array(
            'name' => 'allocation_expert'
        ),
        'data' => array(
            'consult_id' => 1,
            'expert_id' => 1,
        )
    ),
    /*根据专家类型，获取专家*/
    'get_expert_account' => array(
        'header' => array(
            'signature' => $signature,
            'timestamp' => $timestamp,
            'nonce' => $nonce
        ),
        'cmd' => array(
            'name' => 'get_expert_account'
        ),
        'data' => array(
            'expert_type' => 8
        )
    ),
    /*结束咨询*/
    'end_consult' => array(
        'header' => array(
            'signature' => $signature,
            'timestamp' => $timestamp,
            'nonce' => $nonce
        ),
        'cmd' => array(
            'name' => 'end_consult'
        ),
        'data' => array(
            'consult_id' => 1
        )
    ),
    /*变更任务执行人*/
    'update_account_status' => array(
        'header' => array(
            'signature' => $signature,
            'timestamp' => $timestamp,
            'nonce' => $nonce
        ),
        'cmd' => array(
            'name' => 'update_account_status'
        ),
        'data' => array(
            'task_id' => 118,
            'examine_explain' => '我要申请变更执行人',
            'process_id' => 176,
            'account_type' => 2,
            'account_id' => 30,
            'account_name' => '李想小号'
        )
    ),
);

$data = json_encode($data['update_account_status']);

$data = base64_encode($data);
$data = json_encode(array($data,$appid));
$data = base64_encode($data);
$url = 'http://local.xxgc.com/api.php';//本地
//$url = 'http://xxgc.manyouku.com/api.php';//测试
var_dump(SendDataByCurl($url,$data, $errorCode));
?>

