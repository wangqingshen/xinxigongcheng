<?php
namespace Api\Event;

use Think\Log;

class AdminEvent
{
    private $_log;//日志对象
    private $_users_model;
    /*日志常量*/
    const INFO = 'INFO';  // 流水日志
    const ERR = 'ERR';  // 一般错误
    const LOG_FILE = 2;
    public function __construct()
    {
        $this->_log = new Log();
        $this->_users_model = D('Users');
    }
    /**
     * 函数用途描述:管理员登陆
     * @author:risoli
     * @param $data
     * @param null $result
     * @return bool|int
     */
    public function a_login($data, &$result = null){
        $params = array('user_name','user_pwd');
        $ret = check_must_params($data, $params);
        if ($ret !== true) {
            return $ret;
        }
        $count = 0;
        $condition = array(
            'user_login' => $data['user_name'],
            'user_pass' => $data['user_pwd']
        );
        $ret = $this->_users_model->count_user_by_condition($condition,$count,$msg);
        if($ret !== true){
            $this->_log->write_array(null,$msg, self::ERR, __CLASS__.'\\'.__FUNCTION__.'\\'.__LINE__,self::LOG_FILE);
            return $ret;
        }
        if($count == 0){
            return 10002;
        }
        //查找账户信息
        $user_info = array();
        $ret = $this->_users_model->get_user_info_by_condition($condition,$user_info,$msg);
        if($ret !== true){
            return $ret;
        }
        if($user_info['user_status'] == 0){
            return 10001;
        }
        $result = array(
            'user_id' => $user_info['id']
        );
        return true;
    }

}