<?php

class Controller {
    public $load;
    public $model;

    function __construct($PageURI = NULL){
        $this->load = new Load();
        $this->model = new Model();

        $this->$PageURI();
    }

    function home(){
        $data = $this->model->dbGetData();
        $this->load->view('app',$data);
    }

    function apiCreateTables(){
        $data = $this->model->dbCreateTables();
        $this->load->view('viewMessage',$data);
    }

    function apiInsertData(){
        $data = $this->model->dbInsertData();
        $this->load->view('viewMessage',$data);
    }
}