<?php
namespace Api\Event;

use Think\Log;

class SnsEvent
{
    private $_log;//日志对象
    /*日志常量*/
    const INFO = 'INFO';  // 流水日志
    const ERR = 'ERR';  // 一般错误
    const LOG_FILE = 5;
    public function __construct()
    {
        $this->_log = new Log();
    }

    /**
     * 函数用途描述:
     * @author:risoli
     * @param $data
     * @param null $result
     * @return bool|int
     */
    public function send_seccode($data, &$result = null){
        $params = array('mobile');
        $ret = check_must_params($data, $params);
        if ($ret !== true) {
            return $ret;
        }
        $mobile = $data['mobile'];
        $seccode = rand(0,9).rand(0,9).rand(0,9).rand(0,9).rand(0,9).rand(0,9);//生成6位数字验证码

        vendor('LinkaiSns');
        $linkai_obj = new \LinkaiSns();
        $ret = $linkai_obj->send_seccode($mobile,$seccode);
        if($ret !== true){
            return $ret;
        }
        //发送成功后，计入缓存
        S($mobile.'seccode',$seccode,300);
        return true;
    }

}