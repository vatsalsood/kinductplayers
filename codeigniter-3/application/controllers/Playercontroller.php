<?php

defined('BASEPATH') OR exit('No direct script access allowed');

header('Access-Control-Allow-Origin: *');

if($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type');
    exit;
}

//required for REST API
require(APPPATH . '\libraries\REST_Controller.php');
require(APPPATH . '\libraries\Format.php');
use Restserver\Libraries\REST_Controller;

class playerController extends REST_Controller {
    
    function __construct() {
        parent::__construct();
        $this->load->model('player_model', 'wm');
        $this->load->helper('url');
        $this->load->helper("security");
    }
    
    function players_get() {
        $players = $this->wm->get_player_list();

        if ($players) {
            $this->response($players, 200);
        } else {
            $this->response(array(), 200);
        }
    }

    function player_get() {
        if (!$this->get('id')) { //query parameter, example, players?id=1
            $this->response(NULL, 400);
        }

        $player = $this->wm->get_player($this->get('id'));

        if ($player) {
            $this->response($player, 200); // 200 being the HTTP response code
        } else {
            $this->response(array(), 500);
        }
    }

    function player_upload_post(){
        $status = true;
        try{
            $arr = $this->post('data');   
            foreach ($arr as $key => $value) {
                foreach($value as $idx=> $person){
                    if(isset($person['Name']) AND isset($person['Age']) AND isset($person['Location']['City']) AND isset($person['Location']['Province']) AND isset($person['Location']['Country'])){//&& isset($item['Age']) && isset($item['Location']['City']) && isset($item['Location']['Province']) && isset($item['Location']['Country'])){
                        $player_name = $this->security->xss_clean($person['Name']);
                        $player_age = $this->security->xss_clean($person['Age']);
                        $player_city = $this->security->xss_clean($person['Location']['City']);
                        $player_province = $this->security->xss_clean($person['Location']['Province']);
                        $player_country = $this->security->xss_clean($person['Location']['Country']);
                        $this->wm->add_player($player_name, $player_age, $player_city, $player_province, $player_country);
                    }else{
                        $status = false;
                    }
                   
                }
            }
        }
        catch(Exception $e){
                $this->response(array('status' => 'failed','error message' => $e->getMessage() ),200);
        }
        if ($status === FALSE) {
            $this->response(array('status' => 'failed'));
        } else {
            $this->response(array('status' => 'success'));
        }    
    }
    
    function player_post() {
        if(isset($item['Name']) && isset($item['Age']) && isset($item['Location']['City']) && isset($item['Location']['Province']) && isset($item['Location']['Country'])){
            $player_name = $this->security->xss_clean($this->post('name'));
            $player_age = $this->security->xss_clean($this->post('age'));
            $player_city = $this->security->xss_clean($this->post('city'));
            $player_province = $this->security->xss_clean($this->post('province'));
            $player_country = $this->security->xss_clean($this->post('country'));
            $result = $this->wm->add_player($player_name, $player_age, $player_city, $player_province, $player_country);
        }
        else{
            if ($result === FALSE) {
                $this->response(array('status' => 'failed'));
            } else {
                $this->response(array('status' => 'success'));
            }            
        }
    }

    function player_put() {
        $player_id = $this->security->xss_clean($this->put('id'));
        $player_name = $this->security->xss_clean($this->post('name'));
        $player_age = $this->security->xss_clean($this->post('age'));
        $player_city = $this->security->xss_clean($this->post('city'));
        $player_province = $this->security->xss_clean($this->post('province'));
        $player_country = $this->security->xss_clean($this->post('country'));

        $result = $this->wm->update_player($player_id, $player_name, $player_age, $player_city, $player_province, $player_country);

        if ($result === FALSE) {
            $this->response(array('status' => 'failed'));
        } else {
            $this->response(array('status' => 'success'));
        }
    }
    
    function player_delete($player_id) { //path parameter, example, /delete/1

        $result = $this->wm->delete_player($player_id);

        if ($result === FALSE) {
            $this->response(array('status' => 'failed'));
        } else {
            $this->response(array('status' => 'success'));
        }
    }
    
}