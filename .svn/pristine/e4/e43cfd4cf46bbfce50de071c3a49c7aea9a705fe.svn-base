<?php
namespace Html\Controller;
use Think\Controller;
use Think\Log;
class IndexController extends Controller {
    private $_wechat_obj;
    private $_account_model;
    private $_log;
    /*日志常量*/
    const INFO = 'INFO';  // 流水日志
    const ERR = 'ERR';  // 一般错误
    const LOG_FILE = 4;


    public function _initialize(){
        Vendor('Wechat');
        $this->_wechat_obj = new \Wechat();
        $this->_account_model = D('Account');
        $this->_log = new Log();
    }

    /**
     * 函数用途描述:进入入口
     * @author:risoli
     */
    public function index(){
        $enter_type = I('enter');
        $this->assign('enter_type',$enter_type);
        $this->assign('head_title','');
        $this->display('Login/enter');
    }

    /**
     * 函数用途描述:判断是否已绑定系统
     * @author:risoli
     */
    public function wechat_auth(){
        $account_id = I('account_id');
        $wechat_member_id = I('wechat_member_id');
        $enter_type = I('enter');
        if($enter_type == 'fans'){
            $id = $wechat_member_id;
        }else{
            $id = $account_id;
        }
        if(empty($id)){
            $redirect_uri = 'http://'.$_SERVER['SERVER_NAME'].'/wap.php/Index/employee/enter_type/'.$enter_type;
            $this->_wechat_obj->get_wechat_code($redirect_uri);
        }else{
            switch ($enter_type){
                case 'expert':
                    redirect('index.php?s=/Expert/index/');
                    break;
                case 'fans':
                    redirect('index.php?s=/Answer/index/');
                    break;
                case 'account':
                    redirect('index.php?s=/Employee/index/');
                    break;
                case 'admin':
                    redirect('index.php?s=/Tasklist/index/');
                    break;
            }

        }
    }

    /**
     * 函数用途描述:进入账户绑定页面
     * @author:risoli
     */
    public function employee() {
        $enter_type = I('enter_type');
        //微信鉴权
        $wechat_code = I('code');
        $res_wechat = $this->_wechat_obj->get_wechat_info($wechat_code);
        $openid = $res_wechat['openid'];
        $access_token = $res_wechat['access_token'];
        //获取用户微信信息
//        $wechat_member_info = $this->_wechat_obj->get_member_wechat_info($access_token,$openid);
        //判定进入页面
        switch ($enter_type){
            case 'expert'://专家用户
                $title = '本系统需验证手机是否为专家用户';
                $html = 'Login/employee';
                break;
            case 'fans'://关注用户
                $title = '注册之后才能向专家进行咨询';
                $html = 'Login/employee';
                break;
            case 'account'://账户用户
                $title = '本系统需验证手机是否为账户用户';
                $html = 'Login/employee';
                break;
            case 'admin'://管理员用户
                $title = '请填写管理员的账号和密码进行登录';
                $html = 'Login/index';
                break;
        }
        $this->assign('head_title','');
        $this->assign('title',$title);
        $this->assign('wechat_openid',$openid);
        $this->assign('enter_type',$enter_type);
//        $this->assign('nick_name',bin2hex($wechat_member_info['nickname']));
        $this->display($html);

    }


    public function verify() {
    	$this->display('Login/verify');
    }

    public function admin() {
    	$this->display('Login/index');
    }

    public function clear(){
        $this->display('Login/clear');
    }
}