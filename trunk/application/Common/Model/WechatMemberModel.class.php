<?php
namespace Common\Model;
use Think\Log;
class WechatMemberModel extends CommonModel{
    //声明属性
    private $_log;//日志对象
    /*日志常量*/
    const INFO = 'INFO';  // 流水日志
    const ERR = 'ERR';  // 一般错误
    const LOG_FILE = 3;

    public function __construct()
    {
        parent::__construct();
        $this->_log = new Log();//声明日志对象
    }
	protected function _before_write(&$data) {
		parent::_before_write($data);
	}

    /**
     * 函数用途描述:根据条件，统计微信用户数量
     * @author:risoli
     * @param null $condition
     * @param $count
     * @param $msg
     * @return bool|int
     */
	public function count_wechat_member($condition = null,&$count,&$msg){
	    $count = $this->where($condition)->count();
        if($count === false){
            $msg = set_err_msg('统计微信用户数量失败。',104);
            $this->_log->write_array($this->getLastSql(),$msg, self::ERR, __CLASS__.'\\'.__FUNCTION__.'\\'.__LINE__,self::LOG_FILE);
            return 104;
        }
        return true;
    }

    /**
     * 函数用途描述:创建微信用户
     * @author:risoli
     * @param $data
     * @param $account_id
     * @param $msg
     * @return bool|int
     */
    public function create_wechat_member($data, &$wechat_member_id, &$msg){
        if( count($data) < 1 ){
            $msg = set_err_msg('缺少必须参数。',101);
            return 101;
        }
        $ret = $this->add($data);
        if($ret === false){
            $msg = set_err_msg('创建微信用户信息失败。',104);
            $this->_log->write_array($this->getLastSql(),$msg, self::ERR, __CLASS__.'\\'.__FUNCTION__.'\\'.__LINE__,self::LOG_FILE);
            return 104;
        }
        $wechat_member_id = $ret;
        return true;
    }

    /**
     * 函数用途描述:根据手机号查找微信用户信息
     * @author:risoli
     * @param $mobile
     * @param $account_info
     * @param $msg
     * @return int
     */
    public function get_wechat_member_by_mobile($mobile,&$wechat_member_info,&$msg){
        if(empty($mobile)){
            $msg = set_err_msg('缺少手机号。',104);
            return 101;
        }
        $condition = array(
            'wm_mobile' => $mobile
        );
        $wechat_member_info = $this->where($condition)->find();
        if($wechat_member_info === false){
            $msg = set_err_msg('查找微信用户信息失败。',104);
            $this->_log->write_array($this->getLastSql(),$msg, self::ERR, __CLASS__.'\\'.__FUNCTION__.'\\'.__LINE__,self::LOG_FILE);
            return 104;
        }
        return true;
    }

    /**
     * 函数用途描述:根据id查找微信外部信息
     * @author:risoli
     * @param $member_id
     * @param $member_info
     * @param $msg
     * @return bool|int
     */
    public function get_wechat_member_info_by_id($member_id,&$member_info,&$msg){
        if(empty($member_id)){
            $msg = set_err_msg('缺少id。',101);
            return 101;
        }
        $condition = array(
            'wm_id' => $member_id
        );
        $member_info = $this->where($condition)->find();
        if($member_info === false){
            $msg = set_err_msg('查找微信外部用户信息失败。',104);
            $this->_log->write_array($this->getLastSql(),$msg, self::ERR, __CLASS__.'\\'.__FUNCTION__.'\\'.__LINE__,self::LOG_FILE);
            return 104;
        }
        return true;
    }





}