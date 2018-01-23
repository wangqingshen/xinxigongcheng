<?php
namespace Common\Model;
use Think\Log;
class MessageBoardModel extends CommonModel{
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
     * 函数用途描述:获取最新一条回复信息
     * @author:risoli
     * @param $condition
     * @param $field
     * @param $message_list
     * @param $msg
     * @return bool|int
     */
    public function get_last_reply($condition,&$message_info,&$msg){
        $order = 'mb_id desc';
        $message_info = $this->where($condition)->order($order)->limit(1)->find();
        if($message_info === false){
            $msg = set_err_msg('查找回复信息失败。',104);
            $this->_log->write_array($this->getLastSql(),$msg, self::ERR, __CLASS__.'\\'.__FUNCTION__.'\\'.__LINE__,self::LOG_FILE);
            return 104;
        }
        return true;
    }

    /**
     * 函数用途描述:统计消息数量
     * @author:risoli
     * @param $condition
     * @param $count
     * @param $msg
     * @return bool|int
     */
    public function count_message($condition, &$count, &$msg){
        $count = $this->where($condition)->count();
        if($count === false){
            $msg = set_err_msg('统计消息数量失败。',104);
            $this->_log->write_array($this->getLastSql(),$msg, self::ERR, __CLASS__.'\\'.__FUNCTION__.'\\'.__LINE__,self::LOG_FILE);
            return 104;
        }
        return true;
    }
    /**
     * 函数用途描述:创建回复内容
     * @author:risoli
     * @param $data
     * @param $message_id
     * @param $msg
     * @return bool|int
     */
    public function create_reply_message($data, &$message_id, &$msg){
        if( count($data) < 1 ){
            $msg = set_err_msg('缺少必须参数。',101);
            return 101;
        }
        $ret = $this->add($data);
        if($ret === false){
            $msg = set_err_msg('创建回复失败。',104);
            $this->_log->write_array($this->getLastSql(),$msg, self::ERR, __CLASS__.'\\'.__FUNCTION__.'\\'.__LINE__,self::LOG_FILE);
            return 104;
        }
        $message_id = $ret;
        return true;
    }

    /**
     * 函数用途描述:获取消息列表
     * @author:risoli
     * @param null $condition
     * @param string $field
     * @param null $order
     * @param null $offset
     * @param $num
     * @param $message_list
     * @param $msg
     * @return bool|int
     */
    public function get_message_list($condition = null, $field = '*', $order=null, $offset = null, $num, &$message_list, &$msg){
        if( count($condition) < 1 ){
            $msg = set_err_msg('缺少必须参数。',101);
            return 101;
        }
        $message_list = $this->where($condition)->limit($offset, $num)->order($order)->field($field)->select();
        if($message_list === false){
            $msg = set_err_msg('查找消息list失败。',104);
            $this->_log->write_array($this->getLastSql(),$msg, self::ERR, __CLASS__.'\\'.__FUNCTION__.'\\'.__LINE__,self::LOG_FILE);
            return 104;
        }
        return true;
    }
}