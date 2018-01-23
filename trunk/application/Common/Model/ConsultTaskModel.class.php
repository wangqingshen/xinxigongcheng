<?php
namespace Common\Model;
use Think\Log;
class ConsultTaskModel extends CommonModel{
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
     * 函数用途描述:统计咨询数
     * @author:risoli
     * @param null $condition
     * @param $count
     * @param $msg
     * @return bool|int
     */
    public function count_consult($condition = null,&$count,&$msg){
        $count = $this->where($condition)->count();
        if($count === false){
            $msg = set_err_msg('统计咨询数量失败。',104);
            $this->_log->write_array($this->getLastSql(),$msg, self::ERR, __CLASS__.'\\'.__FUNCTION__.'\\'.__LINE__,self::LOG_FILE);
            return 104;
        }
        return true;
    }
    /**
     * 函数用途描述:创建咨询单
     * @author:risoli
     * @param $data
     * @param $c_id
     * @param $msg
     * @return bool|int
     */
    public function create_consult($data, &$c_id, &$msg){
        if( count($data) < 1 ){
            $msg = set_err_msg('缺少必须参数。',101);
            return 101;
        }
        $ret = $this->add($data);
        if($ret === false){
            $msg = set_err_msg('创建咨询信息失败。',104);
            $this->_log->write_array($this->getLastSql(),$msg, self::ERR, __CLASS__.'\\'.__FUNCTION__.'\\'.__LINE__,self::LOG_FILE);
            return 104;
        }
        $c_id = $ret;
        return true;
    }

    /**
     * 函数用途描述:获取咨询列表
     * @author:risoli
     * @param null $condition
     * @param string $field
     * @param null $order
     * @param null $offset
     * @param $num
     * @param $task_list
     * @param $msg
     * @return bool|int
     */
    public function get_consult_list($condition = null, $field = '*', $order=null, $offset = null, $num, &$consult_list, &$msg){
        $consult_list = $this->where($condition)->limit($offset, $num)->order($order)->field($field)->select();
        if($consult_list === false){
            $msg = set_err_msg('查找订单list失败。',104);
            $this->_log->write_array($this->getLastSql(),$msg, self::ERR, __CLASS__.'\\'.__FUNCTION__.'\\'.__LINE__,self::LOG_FILE);
            return 104;
        }
        return true;
    }

    /**
     * 函数用途描述:获取咨询详情
     * @author:risoli
     * @param $consult_id
     * @param $consult_info
     * @param $msg
     * @return bool|int
     */
    public function get_consult_info_by_id($consult_id,&$consult_info,&$msg){
        if(empty($consult_id)){
            $msg = set_err_msg('缺少咨询id。',101);
            return 101;
        }
        $condition = array(
            'ct_id' => $consult_id
        );
        $consult_info = $this->where($condition)->find();
        if($consult_info === false){
            $msg = set_err_msg('查找咨询详情失败。',104);
            $this->_log->write_array($this->getLastSql(),$msg, self::ERR, __CLASS__.'\\'.__FUNCTION__.'\\'.__LINE__,self::LOG_FILE);
            return 104;
        }
        return true;
    }

    /**
     * 函数用途描述:更新咨询信息
     * @author:risoli
     * @param $condition
     * @param $data
     * @param $msg
     * @return bool|int
     */
    public function update_consult_task($condition,$data,&$msg){
        if(count($condition) < 1){
            $msg = set_err_msg('缺少更新条件。',101);
            return 101;
        }
        if(count($data) < 1){
            $msg = set_err_msg('缺少更新数据。',101);
            return 101;
        }
        $ret = $this->where($condition)->save($data);
        if($ret === false){
            $msg = set_err_msg('更新咨询信息失败。',104);
            $this->_log->write_array($this->getLastSql(),$msg, self::ERR, __CLASS__.'\\'.__FUNCTION__.'\\'.__LINE__,self::LOG_FILE);
            return 104;
        }
        return true;
    }



}