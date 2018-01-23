<?php
namespace Admin\Controller;

use Common\Controller\AdminbaseController;

class AccountController extends AdminbaseController{
    
	private $_account_model;
	private $_dep_arr;
	private $_expert_arr;
	private $_account_type;
	
	public function _initialize() {
	    $this->_dep_arr = C('dep_arr');
	    $this->_expert_arr = C('expert_type');
	    $this->_account_type = C('account_type');

        $this->_account_model = D('Account');
	}

    /**
     * 函数用途描述:根据传入条件，查询账户list，并调用分页方法
     * @author:risoli
     * @param $condition
     */
	private function _get_account_list($condition){
        //统计账户总数
        $account_count = 0;
        $ret = $this->_account_model->count_account($condition, $account_count);
        //实例化分页类
        $size = 20;//默认20条
        $page = $this->Page($account_count,$size);
        $show = $page->show('Admin');
        $order = 'a_id desc';
        $account_list = array();
        $ret = $this->_account_model->get_account_list_show($condition,'*',$page,$order,$account_list ,$msg);
        if($ret !== true){
            $this->error($msg);
        }
        foreach ($account_list as $key => $value){
            //性别中文
            if($value['a_sex'] == 1){
                $account_list[$key]['a_sex_cn'] = '男';
            }elseif ($value['a_sex'] == 2){
                $account_list[$key]['a_sex_cn'] = '女';
            }else{
                $account_list[$key]['a_sex_cn'] = '未知';
            }
            //状态中文
            if($value['status'] == 1){
                $account_list[$key]['status_cn'] = '已激活';
            }elseif ($value['status'] == 2){
                $account_list[$key]['status_cn'] = ' 未激活';
            }elseif ($value['status'] == 3){
                $account_list[$key]['status_cn'] = ' 冻结';
            }
            //是否专家账号
            if($value['a_type'] == 4){
                $account_list[$key]['a_expert_cn']  = $this->_expert_arr[$value['a_expert_id']];
            }else{
                $account_list[$key]['a_dep_cn']  = $this->_dep_arr[$value['a_department_id']];
            }
        }
        $this->assign('departments',$this->_dep_arr);
        $this->assign("page_show",$show);
        $this->assign('account_list',$account_list);
    }

    /**
     * 函数用途描述:市级账户列表
     * @author:risoli
     */
	public function city_account_index(){
	    $condition = array(
	        'a_type' => 1
        );
	    $this->_get_account_list($condition);
        $this->assign('add_account_cn','添加市级账户');
        $this->assign('account_fun','city_account_index');
        $this->assign('account_type',1);
		$this->display('account_list');
	}
    /**
     * 函数用途描述:区县账户列表
     * @author:risoli
     */
	public function county_account_index(){
        $condition = array(
            'a_type' => 2
        );
        $this->_get_account_list($condition);
        $this->assign('add_account_cn','添加区县账户');
        $this->assign('account_fun','county_account_index');
        $this->assign('account_type',2);
        $this->display('account_list');
    }
    /**
     * 函数用途描述:区县账户列表
     * @author:risoli
     */
    public function contact_account_index(){
        $condition = array(
            'a_type' => 3
        );
        $this->_get_account_list($condition);
        $this->assign('add_account_cn','添加相关账户');
        $this->assign('account_fun','contact_account_index');
        $this->assign('account_type',3);
        $this->display('account_list');
    }

    /**
     * 函数用途描述:市级账户列表
     * @author:risoli
     */
    public function expert_account_index(){
        $condition = array(
            'a_type' => 4
        );
        $this->_get_account_list($condition);
        $this->assign('add_account_cn','添加专家账户');
        $this->assign('account_fun','expert_account_index');
        $this->assign('account_type',4);
        $this->display('account_list');
    }

    /**
     * 函数用途描述:添加账户页面
     * @author:risoli
     */
	public function add_account(){
	    $account_type = I('account_type');
	    switch ($account_type){
            case 1:
                $this->assign('add_account_cn','添加市级账户');
                $this->assign('account_fun','city_account_index');
                break;
            case 2:
                $this->assign('add_account_cn','添加区县账户');
                $this->assign('account_fun','county_account_index');
                break;
            case 3:
                $this->assign('add_account_cn','添加相关账户');
                $this->assign('account_fun','contact_account_index');
                break;
            case 4:
                $this->assign('add_account_cn','添加专家账户');
                $this->assign('account_fun','expert_account_index');
                break;
            default:
                $this->error('页面访问出错');
        }
        $this->assign('account_type',$account_type);
        $this->assign('departments',C('dep_arr'));
        $this->assign('expert_type',C('expert_type'));
        $this->display('add_account');
    }

    /**
     * 函数用途描述:添加账户信息数据
     * @author:risoli
     */
    public function add_account_post(){
	    $account_type = I('account_type');
	    $name = I('real_name');
	    $mobile = I('mobile');
	    $sex = I('select_sex');
	    $select_dep = I('select_dep');
	    $select_expert = I('select_expert');

	    if($account_type == 4){
            $data = array(
                'a_mobile' => $mobile,
                'a_name' => $name,
                'a_type' => $account_type,
                'a_sex' => $sex,
                'a_expert_id' => $select_expert,
                'status' => 2
            );
        }else{
            $data = array(
                'a_mobile' => $mobile,
                'a_name' => $name,
                'a_type' => $account_type,
                'a_sex' => $sex,
                'a_department_id' => $select_dep,
                'status' => 2
            );
        }

	    $account_id = '';
        $ret = $this->_account_model->create_account($data,$account_id,$msg);
        if($ret !== true){
            $this->error($msg);
        }
        switch ($account_type){
            case 1:
                $this->success('添加市级账户成功', __CONTROLLER__.'/city_account_index');
                break;
            case 2:
                $this->success('添加区县账户成功', __CONTROLLER__.'/county_account_index');
                break;
            case 3:
                $this->success('添加相关账户成功', __CONTROLLER__.'/contact_account_index');
                break;
            case 4:
                $this->success('添加专家账户成功', __CONTROLLER__.'/expert_account_index');
                break;
        }
    }

    /**
     * 函数用途描述:编辑账户信息页面
     * @author:risoli
     */
    public function edit_account(){
        $account_id = I('account_id');
        $account_type = I('account_type');
        switch ($account_type){
            case 1:
                $this->assign('edit_account_cn','修改市级账户');
                $this->assign('account_fun','city_account_index');
                break;
            case 2:
                $this->assign('edit_account_cn','修改区县账户');
                $this->assign('account_fun','county_account_index');
                break;
            case 3:
                $this->assign('edit_account_cn','修改相关账户');
                $this->assign('account_fun','contact_account_index');
                break;
            case 4:
                $this->assign('edit_account_cn','修改专家账户');
                $this->assign('account_fun','expert_account_index');
                break;
            default:
                $this->error('页面访问出错');
        }
        //查找市级账户信息
        $account_info = array();
        $ret = $this->_account_model->get_account_info_by_id($account_id, $account_info, $msg);
        if($ret !== true){
            $this->error($msg);
        }
        $this->assign('account_type',$account_type);
        $this->assign('departments',$this->_dep_arr);
        $this->assign('expert_type',$this->_expert_arr);
        $this->assign('account_info',$account_info);
        $this->display('edit_account');
    }

    /**
     * 函数用途描述:修改账户信息
     * @author:risoli
     */
    public function edit_account_post(){
        $account_id = I('account_id');
        $account_type = I('account_type');
        $name = I('real_name');
        $mobile = I('mobile');
        $sex = I('select_sex');
        $select_dep = I('select_dep');
        $select_expert = I('select_expert');

        if($account_type == 4){
            $data = array(
                'a_mobile' => $mobile,
                'a_name' => $name,
                'a_sex' => $sex,
                'a_expert_id' => $select_expert,
            );
        }else{
            $data = array(
                'a_mobile' => $mobile,
                'a_name' => $name,
                'a_sex' => $sex,
                'a_department_id' => $select_dep,
            );
        }
        $condition = array(
            'a_id' => $account_id
        );

        $ret = $this->_account_model->update_account($condition,$data,$msg);
        if($ret !== true){
            $this->error($msg);
        }
        switch ($account_type){
            case 1:
                $this->success('修改市级账户成功', __CONTROLLER__.'/city_account_index');
                break;
            case 2:
                $this->success('修改市级账户成功', __CONTROLLER__.'/county_account_index');
                break;
            case 3:
                $this->success('修改市级账户成功', __CONTROLLER__.'/contact_account_index');
                break;
            case 4:
                $this->success('修改专家账户成功', __CONTROLLER__.'/expert_account_index');
                break;
        }
    }

    /**
     * 函数用途描述:冻结和启动账户
     * @author:risoli
     */
    public function lock_account(){
        $account_id = I('account_id');
        $type = I('type');
        switch ($type){
            case 2:
                $status = 2;//启动，操作后都是未激活状态，需要重新绑定
                break;
            case 3:
                $status = 3;//冻结
            break;
        }
        $data = array(
            'status' => $status
        );
        $ret = $this->_account_model->update_account($account_id,$data,$msg);
        if($ret !== true){
            $result = array(
                'errcode' => 0,
                'msg' => $msg
            );
        }else{
            $result = array(
                'errcode' => 1,
                'msg' => '操作账户状态成功！'
            );
        }
        $this->ajaxReturn($result);
    }

    public function get_account_by_type(){
        $account_type = I('account_type');
        //获取类型下的账户
        $res_account = array();
        $condition = array(
            'a_type' => $account_type,
            'status' => 1
        );
        $field = 'a_id,a_name';
        $ret = $this->_account_model->get_account_by_condition($condition,$field,$res_account,$msg);
        if($ret !== true){
            $result = array(
                'errcode' => 0,
                'msg' => $msg
            );
            $this->ajaxReturn($result);
            exit;
        }
        $result = array(
            'errcode' => 1,
            'data' => $res_account
        );
        $this->ajaxReturn($result);
    }

    /**
     * 导出账号信息
     */
    public function export_account(){
        $account_type = I('account_type');
        //获取账户信息
        $account_list = array();
        $account_condition = array(
            'a_type' => $account_type,
        );
        $field = '*';
        $ret = $this->_account_model->get_account_by_condition($account_condition,$field,$account_list,$msg);
        if($ret !== true){
            $this->error($msg);
            exit;
        }
        //导出excel
        vendor('PHPExcel.PHPExcel');
        $excel = new \PHPExcel();
        $xls_name =  date("Y-m-d").'.xls';//导出文件命名
        //判断是否ie
        if(strpos($_SERVER["HTTP_USER_AGENT"],'MSIE')!==false || strpos($_SERVER["HTTP_USER_AGENT"],'rv:11.0')){
            $xls_name = urlencode($xls_name);
        }
        $sheet = $excel->getActiveSheet();

        $sheet->setCellValue('A1', '姓名');
        $sheet->setCellValue('B1', '手机号');
        $sheet->setCellValue('C1', '性别');
        if($account_type == 4){
            $sheet->setCellValue('D1', '专家类型');
        }else{
            $sheet->setCellValue('D1', '部门');
        }
        $sheet->setCellValue('E1', '激活状态');
        //设置导出内容
        $i = 2;
        foreach ($account_list as $key => $value){
            $sheet->setCellValue('A'.$i, $value['a_name']);
            $sheet->setCellValue('B'.$i, $value['a_mobile']);
            if($value['a_sex'] == 1){
                $sheet->setCellValue('C'.$i, '男');
            }elseif ($value['a_sex'] == 2){
                $sheet->setCellValue('C'.$i, '女');
            }
            if($account_type == 4){
                $sheet->setCellValue('D'.$i, $this->_expert_arr[$value['a_expert_id']]);
            }else{
                $sheet->setCellValue('D'.$i, $this->_dep_arr[$value['a_department_id']]);
            }
            if($value['status'] == 1){
                $sheet->setCellValue('E'.$i, '已激活');
            }elseif ($value['status'] == 2){
                $sheet->setCellValue('E'.$i, '未激活');
            }elseif ($value['status'] == 3){
                $sheet->setCellValue('E'.$i, '已冻结');
            }
            $i++;
        }
        $objWriter = new \PHPExcel_Writer_Excel5($excel);
        ob_end_clean();//清除缓冲区,避免乱码
        header("Pragma: public");
        header("Expires: 0");
        header("Cache-Control: must-revalidate, post-check=0, pre-check=0");
        header("Content-Type: application/force-download");
        header("Content-Type: application/download");
        header("Content-Disposition: attachment;filename=$xls_name");
        header("Content-Transfer-Encoding: binary ");
        $objWriter->save('php://output');
        exit;//此结束符必须存在
    }

}