<?php
namespace Admin\Controller;

use Common\Controller\AdminbaseController;

class StatisticsController extends AdminbaseController{
	private $_task_type;
    private $_select_time_area;
    private $_account_type;
    private $_expert_type;

    private $_task_model;
    private $_consult_task_model;
	
	public function _initialize() {
        $this->_task_type = C('task_type');
        $this->_select_time_area = array(
            '30_days' => '30天',
            '3_months' => '3个月',
            '6_months' => '6个月',
            '1_year' => '1年'
        );
        $this->_account_type = C('account_type');
        $this->_expert_type = C('expert_type');

        $this->_task_model = D('Task');
        $this->_consult_task_model = D('ConsultTask');
	}
    /**
     * 函数用途描述:统计任务类型
     * @author:risoli
     * @param $condition
     */
    public function consult_task_type(){
        $select_time = I('select_time');
        switch ($select_time){
            case '3_months':
                $time_area = array(
                    array('EGT',time()-3600*24*30*3),
                    array('ELT',time())
                );
                break;
            case '6_months':
                $time_area = array(
                    array('EGT',time()-3600*24*30*6),
                    array('ELT',time())
                );
                break;
            case '1_year':
                $time_area = array(
                    array('EGT',time()-3600*24*30*12),
                    array('ELT',time())
                );
                break;
            case '30_days':
            default:
                $time_area = array(
                    array('EGT',time()-3600*24*30*1),
                    array('ELT',time())
                );
                break;
        }
	    //按照类型进行统计
        $res_count = array();
	    foreach ($this->_task_type as $key => $type){
            $condition = array(
                't_type' => $key,
                't_create_time' => $time_area
            );
            $count = 0;
            $ret = $this->_task_model->count_task($condition,$count,$msg);
            if($ret !== true){
                $this->error($msg);
                exit;
            }
            $res_count[$key] = array(
                'type_name' => $type,
                'type_count' => $count
            );
        }
        $this->assign('select_val',$select_time);
        $this->assign('select_time_area',$this->_select_time_area);
        $this->assign('res_count',json_encode($res_count));
        $this->display();
    }
    /**
     * 函数用途描述:统计账户类型下的任务数
     * @author:risoli
     * @param $condition
     */
    public function account_type(){
        $select_time = I('select_time');
        switch ($select_time){
            case '3_months':
                $time_area = array(
                    array('EGT',time()-3600*24*30*3),
                    array('ELT',time())
                );
                break;
            case '6_months':
                $time_area = array(
                    array('EGT',time()-3600*24*30*6),
                    array('ELT',time())
                );
                break;
            case '1_year':
                $time_area = array(
                    array('EGT',time()-3600*24*30*12),
                    array('ELT',time())
                );
                break;
            case '30_days':
            default:
                $time_area = array(
                    array('EGT',time()-3600*24*30*1),
                    array('ELT',time())
                );
                break;
        }
        //按照账户类型统计
        $res_count = array();
        foreach ($this->_account_type as $key => $value){
            $count = 0;
            $ret = $this->_task_model->count_task_by_account_type($key,$time_area,$count,$msg);
            if($ret !== true){
                $this->error($msg);
                exit;
            }
            $res_count[$key] = array(
                'type_name' => $value,
                'type_count' => $count
            );
        }

        $this->assign('select_val',$select_time);
        $this->assign('select_time_area',$this->_select_time_area);
        $this->assign('res_count',json_encode($res_count));
        $this->display();
    }

    public function month_consult_task(){
        $select_year = I('select_year')?I('select_year'):date("Y");
        //根据年份获取当年月份开始和结束时间
        $res_month = array();
        for($i=1;$i<=12;$i++){
            $month = str_pad($i,2,'0',STR_PAD_LEFT);
            $firstday = date($select_year.'-'.$month.'-01');
            $lastday = date('Y-m-d', strtotime("$firstday +1 month -1 day"));
            //根据月份统计信息
            $time_area = array(
                array('EGT',strtotime($firstday.' 00:00:01')),
                array('ELT',strtotime($lastday.' 23:59:59'))
            );
            $condition = array(
                't_create_time' => $time_area
            );
            $count = 0;
            $ret = $this->_task_model->count_task($condition,$count,$msg);
            if($ret !== true){
                $this->error($msg);
                exit;
            }
            $res_month[] = array(
                'month' => $month,
                'count' => $count
            );
        }
        $this->assign('select_year',$select_year);
        $this->assign('res_month',json_encode($res_month));
        $this->display();
    }

    public function expert_type(){
        $select_time = I('select_time');
        switch ($select_time){
            case '3_months':
                $time_area = array(
                    array('EGT',time()-3600*24*30*3),
                    array('ELT',time())
                );
                break;
            case '6_months':
                $time_area = array(
                    array('EGT',time()-3600*24*30*6),
                    array('ELT',time())
                );
                break;
            case '1_year':
                $time_area = array(
                    array('EGT',time()-3600*24*30*12),
                    array('ELT',time())
                );
                break;
            case '30_days':
            default:
                $time_area = array(
                    array('EGT',time()-3600*24*30*1),
                    array('ELT',time())
                );
                break;
        }
        //按咨询类型统计
        $res_count = array();
        foreach ($this->_expert_type as $key => $value){
            $condition = array(
                'ct_type' => $key,
                'ct_create_time' => $time_area
            );
            $count = 0;
            $ret = $this->_consult_task_model->count_consult($condition,$count,$msg);
            if($ret !== true){
                $this->error($msg);
                exit;
            }
            $res_count[$key] = array(
                'type_name' => $value,
                'type_count' => $count
            );
        }


        $this->assign('select_val',$select_time);
        $this->assign('select_time_area',$this->_select_time_area);
        $this->assign('res_count',json_encode($res_count));
        $this->display();
    }


}