<?php

$taskStringJson = file_get_contents('todo-list.json');
$taskList = json_decode($taskStringJson,true);

if(isset($_POST['newTask'])){
  $newItem = $_POST['newTask'];
  $taskList[] = array(
    "message" => $newItem,
    "done" => false
  );
  file_put_contents('todo-list.json', json_encode($taskList));
}

if(isset($_POST['doneChange'])){
  $indexDone = $_POST['doneChange'];
  $taskList[$indexDone]["done"] = !$taskList[$indexDone]["done"];

  file_put_contents('todo-list.json', json_encode($taskList));
}

if(isset($_POST['removeTask'])){
  $indexRemove = $_POST['removeTask'];
  if($taskList[$indexRemove]["done"]){
    array_splice($taskList,$indexRemove,1);
  }

  file_put_contents('todo-list.json', json_encode($taskList));
}


header('Content-Type: application/json');

echo json_encode($taskList);

?>