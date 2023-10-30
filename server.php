<?php

$taskStringJson = file_get_contents('todo-list.json');
$taskList = json_decode($taskStringJson,true);

if(isset($_POST['newTask'])){
  $newItem = $_POST['newTask'];
  $taskList[] = array(
    "message" => $_POST["newTask"],
    "done" => false
  );
  file_put_contents('todo-list.json', json_encode($taskList));
}


header('Content-Type: application/json');

echo json_encode($taskList);

?>