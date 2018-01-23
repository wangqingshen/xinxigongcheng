<?php
namespace Api\Event;

use Think\Log;

class SysEvent
{
    private $_log;//日志对象
    private $_wechat_obj;
    /*日志常量*/
    const INFO = 'INFO';  // 流水日志
    const ERR = 'ERR';  // 一般错误
    const LOG_FILE = 5;
    public function __construct()
    {
        $this->_log = new Log();
        Vendor('Wechat');
        $this->_wechat_obj = new \Wechat();
    }

    /**
     * 函数用途描述:获取微信签名
     * @author:risoli
     * @param $data
     * @param null $result
     * @return bool|int
     */
    public function get_wechat_signature($data, &$result = null){
        $params = array('nonce_str','timestamp','url');
        $ret = check_must_params($data, $params);
        if ($ret !== true) {
            return $ret;
        }
        //tick信息
        $ret = $this->_wechat_obj->get_jsapi_ticket();
        if($ret['errcode'] !== 0){
            $this->_log->write_array($ret,null, self::ERR, __CLASS__.'\\'.__FUNCTION__.'\\'.__LINE__,self::LOG_FILE);
            return 1006;
        }
        $ticket = $ret['ticket'];
//        $ticket = 'sM4AOVdWfPE4DxkXGEs8VChV0_GN1DAZBqa-B7gxKhPSBZbQtwkuVwEFxKbWTvR4x7pNqG63upbbkfR1Wr96tQ';
        $signature = array(
            'jsapi_ticket' => $ticket,
            'noncestr' => $data['nonce_str'],
            'timestamp' => $data['timestamp'],
            'url' => $data['url']
        );
        $str = '';
        foreach ($signature as $key => $value){
            $str .= $key.'='.$value.'&';
        }
        $str = rtrim($str,'&');
        $signature = sha1($str);
        $result['signature'] = $signature;
        return true;
    }



}