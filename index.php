<?php

?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512- 
iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous"/>

<!-- Bootstrap -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>

<!-- Vue -->
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>

<!-- Axios -->
<script src="https://unpkg.com/axios@1.1.2/dist/axios.min.js"></script>

<!-- My style -->
<link rel="stylesheet" href="css/style.css">

  <title>Document</title>
</head>
<body>

  <div id="app">

  <div  class="container">
    <div class="my_bg p-4">

      <div class="pb-5">
        <div class="input-group mb-2" >
          <input type="text" class=" form-control " placeholder="Nuovo Task" v-model.trim="newMessage" @keyup.enter="addTask">
          <button class="btn btn-outline-success " @click="addTask">Invia</button>
        </div>
        <p v-if="isErrorNewTask">La task deve avere almeno 4 caratteri</p>
        <p v-if="isErrorDeleteTask">Devi prima fare la task per poterla eliminare</p>
      </div>

      <ul class="list-group">
        <li v-for="(item, index) in tasks"
          class=" list-group-item d-flex justify-content-between align-items-center  "
          @click.stop="changeDone(index)"
          :class="{'line': item.done}"
          >
          {{item.message}}
          <button class="btn btn-outline-danger " @click.stop="removeTask(index)">
            <i class="fa-solid fa-trash-can"></i>
          </button>
          
        </li>
      </ul>
    </div>

  </div>


  </div>
    

  <!-- Script -->
  <script src="js/script.js"></script>


</body>
</html>