<?php
namespace Common\Model;
use Common\Model\CommonModel;
class UsersModel extends CommonModel
{
	
	protected $_validate = array(
		//array(验证字段,验证规则,错误提示,验证条件,附加规则,验证时间)
		array('user_login', 'require', '用户名称不能为空！', 1, 'regex', CommonModel:: MODEL_INSERT  ),
		array('user_pass', 'require', '密码不能为空！', 1, 'regex', CommonModel:: MODEL_INSERT ),
		array('user_login', 'require', '用户名称不能为空！', 0, 'regex', CommonModel:: MODEL_UPDATE  ),
		array('user_pass', 'require', '密码不能为空！', 0, 'regex', CommonModel:: MODEL_UPDATE  ),
		array('user_login','','用户名已经存在！',0,'unique',CommonModel:: MODEL_BOTH ), // 验证user_login字段是否唯一
	    array('mobile','','手机号已经存在！',0,'unique',CommonModel:: MODEL_BOTH ), // 验证mobile字段是否唯一
		array('user_email','require','邮箱不能为空！',0,'regex',CommonModel:: MODEL_BOTH ), // 验证user_email字段是否唯一
		array('user_email','','邮箱帐号已经存在！',0,'unique',CommonModel:: MODEL_BOTH ), // 验证user_email字段是否唯一
		array('user_email','email','邮箱格式不正确！',0,'',CommonModel:: MODEL_BOTH ), // 验证user_email字段格式是否正确
	);
	
	protected $_auto = array(
	    array('create_time','mGetDate',CommonModel:: MODEL_INSERT,'callback'),
	    array('birthday','',CommonModel::MODEL_UPDATE,'ignore')
	);
	
	//用于获取时间，格式为2012-02-03 12:12:12,注意,方法不能为private
	function mGetDate() {
		return date('Y-m-d H:i:s');
	}
	
	protected function _before_write(&$data) {
		parent::_before_write($data);
		
		if(!empty($data['user_pass']) && strlen($data['user_pass'])<25){
			$data['user_pass']=sp_password($data['user_pass']);
		}
	}

    /**
     * 函数用途描述:统计管理员数量
     * @author:risoli
     * @param $condition
     * @param $count
     * @param $msg
     * @return bool|int
     */
	public function count_user_by_condition($condition, &$count, &$msg){
        $count = $this->where($condition)->count();
        if($count === false){
            $msg = set_err_msg('统计管理员数量失败。',104);
            $this->_log->write_array($this->getLastSql(),$msg, self::ERR, __CLASS__.'\\'.__FUNCTION__.'\\'.__LINE__,self::LOG_FILE);
            return 104;
        }
        return true;
    }

    /**
     * 函数用途描述:根据条件获取管理员信息
     * @author:risoli
     * @param $condition
     * @param $user_info
     * @param $msg
     * @return bool
     */
    public function get_user_info_by_condition($condition, &$user_info, &$msg){
        if(count($condition) < 1){
            $msg = set_err_msg('缺少查询条件',101);
            return false;
        }
        $user_info = $this->where($condition)->find();
        if($user_info === false){
            $msg = set_err_msg('查询管理员信息失败',104);
            $this->_log->write_array($this->getLastSql(),$msg, self::ERR, __CLASS__.'\\'.__FUNCTION__.'\\'.__LINE__,self::LOG_FILE);
            return false;
        }
        return true;
    }
	
}

