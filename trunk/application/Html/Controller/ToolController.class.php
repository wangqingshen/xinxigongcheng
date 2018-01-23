<?php
namespace Html\Controller;
use Think\Controller;
use Think\Log;
class ToolController extends Controller {
    private $_account_model;
    private $_task_model;
    private $_process_model;
    private $_consult_task;
    private $_message_board_model;

    private $_stage;
    private $_log;
    /*日志常量*/
    const INFO = 'INFO';  // 流水日志
    const ERR = 'ERR';  // 一般错误
    const LOG_FILE = 4;


    public function _initialize(){
        $this->_account_model = D('Account');
        $this->_task_model = D('Task');
        $this->_process_model = D('Process');
        $this->_consult_task = D('ConsultTask');
        $this->_message_board_model = D('MessageBoard');

        $this->_log = new Log();
        $this->_stage = C('stage');

    }

    private function _set_obj_excel($file_name){
        vendor('PHPExcel.PHPExcel');
        vendor('PHPExcel.PHPExcel.IOFactory');
        $objReader = new \PHPExcel_Reader_Excel2007();
        $objPHPExcel = $objReader->load($file_name);
        return $objPHPExcel;
    }
    //获取excel的账户信息
    public function create_account_excel(){
        $file_name = './data/upload/account.xlsx';//设置excel地址
        $objPHPExcel = $this->_set_obj_excel($file_name);
        $sheet = $objPHPExcel->getSheet(1);
        $highestRow = $sheet->getHighestRow(); // 取得总行数

        $have_num = 0;//已存在数量
        $insert_fail_num = 0;//创建失败数量
        for($i=2;$i<=$highestRow;$i++){
            $mobile = (string)$sheet->getCell('A'.$i)->getValue();
            $name = (string)$sheet->getCell('B'.$i)->getValue();
            $type = $sheet->getCell('C'.$i)->getValue();
            $sex = $sheet->getCell('D'.$i)->getValue();
            $department_id = $sheet->getCell('E'.$i)->getValue();
            //判断手机号是否已录入
            $count = 0;
            $account_condition = array(
                'a_mobile' => $mobile
            );
            $ret = $this->_account_model->count_account($account_condition,$count);
            if($count > 0){
                $have_num++;
                continue;
            }
            //设置导入的数据
            $insert_account_data = array(
                'a_mobile' => $mobile,
                'a_name' => $name,
                'a_type' => $type,
                'a_sex' => $sex,
                'a_department_id' => $department_id,
                'status' => 1
            );
            $ret = $this->_account_model->create_account($insert_account_data);
            if($ret !== true){
                $insert_fail_num++;
            }
        }
        $msg = '已存在的账户数：'.$have_num.'。创建失败的数量：'.$insert_fail_num;
        echo $msg;
        exit;

    }

    public function create_task_excel(){
        $this->_task_model = M('Task');

        $file_name = './data/upload/account.xlsx';//设置excel地址
        $objPHPExcel = $this->_set_obj_excel($file_name);
        $sheet = $objPHPExcel->getSheet(2);
        $highestRow = $sheet->getHighestRow(); // 取得总行数

        $fail_account_num = 0;
        $fail_create_num = 0;
        for($i=2;$i<=$highestRow;$i++){
            //获取任务对应的账户
            $mobile = (string)$sheet->getCell('F'.$i)->getValue();
            $account_info = array();
            $ret = $this->_account_model->get_account_by_mobile($mobile,$account_info);
            if($ret !== true){
                $fail_account_num++;
                continue;
            }

            //组装需要创建的任务信息
            $insert_task_data = array(
                't_create_time' => strtotime((string)$sheet->getCell('B'.$i)->getValue()),
                't_title' => (string)$sheet->getCell('C'.$i)->getValue(),
                't_content' => (string)$sheet->getCell('D'.$i)->getValue(),
                't_type' => $sheet->getCell('E'.$i)->getValue(),
                't_status' => 4,
                'a_id' => $account_info['a_id'],
                'a_name' => $account_info['a_name'],
                't_stage_id' => 1,
                'user_id' => 2
            );

            $ret = $this->_task_model->add($insert_task_data);
            if($ret === false){
                $fail_create_num++;
                continue;
            }

        }
        $msg = "没有找到对应的账户数：$fail_account_num。创建任务失败数：$fail_create_num";
        echo $msg;
        exit;
    }

    public function create_process_excel(){
        $file_name = './data/upload/account.xlsx';//设置excel地址
        $objPHPExcel = $this->_set_obj_excel($file_name);
        $sheet = $objPHPExcel->getSheet(3);
        $highestRow = $sheet->getHighestRow(); // 取得总行数

        $fail_account_num = 0;
        $fail_create_num = 0;
        $fail_update_num = 0;
        for($i=2;$i<=$highestRow;$i++){
            $p_stage_id = $sheet->getCell('B'.$i)->getValue();
            $p_stage_name = $this->_stage[$p_stage_id];
            //获取执行人的账户信息
            $mobile = (string)$sheet->getCell('C'.$i)->getValue();
            $account_info = array();
            $ret = $this->_account_model->get_account_by_mobile($mobile,$account_info);
            if($ret !== true){
                $fail_account_num++;
                continue;
            }
            //创建流程信息
            $t_id = $sheet->getCell('A'.$i)->getValue();
            $insert_process_data = array(
                't_id' => $t_id,
                'p_stage_id' => $p_stage_id,
                'p_stage_name' => $p_stage_name,
                'a_type' => $account_info['a_type'],
                'a_id' => $account_info['a_id'],
                'a_name' => $account_info['a_name'],
                'p_start_time' => strtotime((string)$sheet->getCell('D'.$i)->getValue()),
                'p_finish_time' => strtotime((string)$sheet->getCell('E'.$i)->getValue()),
            );
            $ret = $this->_process_model->add($insert_process_data);
            if($ret === false){
                $fail_create_num++;
                continue;
            }
            //更新任务信息
            $task_update_data = array(
                'p_id' => $ret,
                't_stage_id' => $p_stage_id,
                'a_id' => $account_info['a_id'],
                'a_name' => $account_info['a_name']
            );
            $task_condition = array(
                't_id' => $t_id
            );
            $ret = $this->_task_model->update_task($task_condition,$task_update_data);
            if($ret === false){
                $fail_update_num++;
            }
        }
        $msg = "没有找到对应的账户数：$fail_account_num。创建流程失败数：$fail_create_num。更新任务失败数：$fail_update_num";
        echo $msg;
        exit;
    }

    //获取excel的账户信息
    public function create_export_account_excel(){
        $file_name = './data/upload/account.xlsx';//设置excel地址
        $objPHPExcel = $this->_set_obj_excel($file_name);
        $sheet = $objPHPExcel->getSheet(0);
        $highestRow = $sheet->getHighestRow(); // 取得总行数

        $have_num = 0;//已存在数量
        $insert_fail_num = 0;//创建失败数量
        for($i=2;$i<=$highestRow;$i++){
            $mobile = (string)$sheet->getCell('A'.$i)->getValue();
            $name = (string)$sheet->getCell('B'.$i)->getValue();
            $type = $sheet->getCell('C'.$i)->getValue();
            $sex = $sheet->getCell('D'.$i)->getValue();
            $expert_id = $sheet->getCell('E'.$i)->getValue();
            //判断手机号是否已录入
            $count = 0;
            $account_condition = array(
                'a_mobile' => $mobile
            );
            $ret = $this->_account_model->count_account($account_condition,$count);
            if($count > 0){
                $have_num++;
                continue;
            }
            //设置导入的数据
            $insert_account_data = array(
                'a_mobile' => $mobile,
                'a_name' => $name,
                'a_type' => $type,
                'a_sex' => $sex,
                'a_expert_id' => $expert_id,
                'status' => 1
            );
            $ret = $this->_account_model->create_account($insert_account_data);
            if($ret !== true){
                $insert_fail_num++;
            }
        }
        $msg = '已存在的账户数：'.$have_num.'。创建失败的数量：'.$insert_fail_num;
        echo $msg;
        exit;

    }


    public function create_consult_task_excel(){
        $this->_task_model = M('Task');

        $file_name = './data/upload/consulttask.xlsx';//设置excel地址
        $objPHPExcel = $this->_set_obj_excel($file_name);
        $sheet = $objPHPExcel->getSheet(0);
        $highestRow = $sheet->getHighestRow(); // 取得总行数

        $fail_not_found_expert_num = 0;
        $fail_create_num = 0;
        for($i=2;$i<=$highestRow;$i++){
            //处理excel中的时间
            $create_time = (string)$sheet->getCell('B'.$i)->getValue();
            $create_time = strtotime(preg_replace('/:/',' ',$create_time,1));
            //根据手机号获取专家信息
            $mobile = (string)$sheet->getCell('C'.$i)->getValue();
            $expert_account = array();
            $ret = $this->_account_model->get_account_by_mobile($mobile,$expert_account);
            if($ret !== true){
                $fail_not_found_expert_num++;
                continue;
            }
            //组装需要创建的咨询信息
            $insert_consult_task_data = array(
                'ct_create_time' => $create_time,
                'member_id' => 3,//咨询用户根据客户要求，使用统一的一个虚假微信id
                'expert_id' => $expert_account['a_id'],
                'ct_title' => (string)$sheet->getCell('D'.$i)->getValue(),
                'ct_content' => (string)$sheet->getCell('E'.$i)->getValue(),
                'ct_type' => $sheet->getCell('F'.$i)->getValue(),
                'ct_status' => 3,
                'ct_satisfaction' => 0,
            );
            $ret = $this->_consult_task->add($insert_consult_task_data);
            if($ret === false){
                $fail_create_num++;
                continue;
            }

        }
        $msg = "因没有对应专家失败的次数：".$fail_not_found_expert_num."。创建咨询失败数：".$fail_create_num;
        echo $msg;
        exit;
    }

    public function create_message_board_excel(){
        $file_name = './data/upload/consulttask.xlsx';//设置excel地址
        $objPHPExcel = $this->_set_obj_excel($file_name);
        $sheet = $objPHPExcel->getSheet(1);
        $highestRow = $sheet->getHighestRow(); // 取得总行数

        $fail_not_found_expert_num = 0;
        $fail_create_num = 0;
        $fail_update_num = 0;
        for($i=2;$i<=$highestRow;$i++){
            $ct_id = $sheet->getCell('A'.$i)->getValue();
            $replyer_type = $sheet->getCell('B'.$i)->getValue();
            if($replyer_type == 1){
                $replyer_id = 3;
            }else{
                //根据手机号查找专家id
                $mobile = (string)$sheet->getCell('C'.$i)->getValue();
                $expert_account = array();
                $ret = $this->_account_model->get_account_by_mobile($mobile,$expert_account);
                if($ret !== true || empty($expert_account)){
                    $fail_not_found_expert_num++;
                    continue;
                }
                $replyer_id = $expert_account['a_id'];
            }
            //处理excel中的时间
            $reply_time = (string)$sheet->getCell('E'.$i)->getValue();
            $reply_time = strtotime(preg_replace('/:/',' ',$reply_time,1));
            //创建流程信息
            $insert_message_board_data = array(
                'ct_id' => $ct_id,
                'replyer_type' => $replyer_type,
                'replyer_id' => $replyer_id,
                'content' => (string)$sheet->getCell('D'.$i)->getValue(),
                'reply_time' => $reply_time
            );
            $ret = $this->_message_board_model->add($insert_message_board_data);
            if($ret === false){
                $fail_create_num++;
                continue;
            }
            //更新咨询信息
            $task_update_data = array(
                'ct_update_time' => $reply_time,
            );
            $task_condition = array(
                'ct_id' => $ct_id
            );
            $ret = $this->_consult_task->update_consult_task($task_condition,$task_update_data);
            if($ret === false){
                $fail_update_num++;
            }
        }
        $msg = "因没有对应专家失败的次数：".$fail_not_found_expert_num."。创建咨询失败数：".$fail_create_num;
        echo $msg;
        exit;
    }


}