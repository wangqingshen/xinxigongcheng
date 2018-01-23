<?php
return array(
    //api权限配置
    'application_cfg' => array(
        'wechat' => 100,//微信访问
    ),
    'err_code' => array(
        '-1' => '未知错误',
        '101' => '缺少必须参数',
        '102' => '参数类型错误',
        '103' => '网络异常',
        '104' => '系统处理失败',
        '105' => '请求数据不存在',
        '106' => '未查找到数据',
        '107' => '数据已存在',
        '108' => '未获取到post数据',
        '1001' => '不支持的请求方式',
        '1002' => '请求数据过大',
        '1003' => '不支持的接口请求',
        '1004' => '接入验证失败',
        '1005' => '权限验证失败',
        '1006' => '获取微信ticket失败',
        '1007' => '缺少微信openid',
        //管理员相关验证码
        '10001' => '该账号已被禁用',
        '10002' => '您的账号不存在，请联系CMS管理人员进行添加',
        //任务相关
        '10100' => '任务图片保存失败',
        //账户相关
        '10200' => '系统无法绑定您的账号，请联系管理员增加账户信息',
        '10201' => '您的账号已被冻结，请联系管理员',
        '10202' => '提交的账户未被激活',
        '10203' => '该手机号码账户已添加',
        //短信相关
        '10300' => '短信验证码和手机号码不匹配，请重新输入',
    ),
    'interface_method' => array(
        /*管理员相关api*/
        'a_login'               => 'Admin',
        /*账户相关api*/
        'test'                  => 'Account',
        'get_accounts'          => 'Account',
        'bind_account'          => 'Account',
        'get_expert_account'    => 'Account',
        /*任务相关api*/
        'task_global_params'        => 'Task',
        'create_task'               => 'Task',
        'a_task_list'               => 'Task',
        'task_examine_list'         => 'Task',
        'get_task_examine_info'     => 'Task',
        'update_task_status'        => 'Task',
        'account_task_list'         => 'Task',
        'get_account_task_info'     => 'Task',
        'update_process_imgs'       => 'Task',
        'process_next'              => 'Task',
        'apply_examine_task'        => 'Task',
        'change_process_account'    => 'Task',
        'update_account_status'     => 'Task',
        /*系统参数相关api*/
        'get_wechat_signature'      => 'Sys',
        /*咨询单据相关*/
        'create_consult_task'      => 'Consult',
        'get_consult_list'         => 'Consult',
        'consult_global_params'    => 'Consult',
        'get_consult_info'         => 'Consult',
        'consult_reply'            => 'Consult',
        'get_reply_list'           => 'Consult',
        'allocation_expert'        => 'Consult',
        'end_consult'              => 'Consult',
        /*短信相关*/
        'send_seccode'             => 'Sns',
    ),

);
