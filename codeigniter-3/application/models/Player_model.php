<?php

class player_model extends CI_Model {

    private $player = 'player';
	
    function get_player_list() {
        $query = $this->db->get($this->player);
        if ($query) {
            return $query->result();
        }
        return NULL;
    }

    function get_player($id) {
        $query = $this->db->get_where($this->player, array("id" => $id));
        if ($query) {
            return $query->row();
        }
        return NULL;
    }
	
    function add_player($player_name, $player_age, $player_city, $player_province, $player_country) {
        $data = array('name' => $player_name, 'age' => $player_age, 'city' => $player_city, 'province' => $player_province, 'country' => $player_country);
    $res = $this->db->insert($this->player, $data);
       
        return $res;
    }

    function update_player($player_id, $player_name, $player_age, $player_city, $player_province, $player_country) {
        $data = array('name' => $player_name, 'age' => $player_age, 'city' => $player_city, 'province' => $player_province, 'country' => $player_country);
        $this->db->where('id', $player_id);
       return $this->db->update($this->player, $data);
    }
	
    function delete_player($player_id) {
        $this->db->where('id', $player_id);
        return $this->db->delete($this->player);
    }

}