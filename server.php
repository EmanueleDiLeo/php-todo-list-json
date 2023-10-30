<?php

$taskStringJson = file_get_contents('todo-list.json');
$taskList = json_decode($taskStringJson,true);
header('Content-Type: application/json');

echo json_encode($taskList);

?>