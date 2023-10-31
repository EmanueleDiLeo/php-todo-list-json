const { createApp } = Vue;

createApp({
  data(){
    return{
      tasks:[],
      newMessage: "",
      apiUrl: 'server.php',
      isErrorNewTask:false,
      isErrorDeleteTask:false,
      
    }
  },

  methods:{
    getList(){
      axios.get(this.apiUrl)
        .then(result => {
          this.tasks = result.data;
          console.log(this.tasks)
        })
        .catch((err) => {
          console.log(err);
        })
    },

    addTask(){
      if(this.newMessage.length > 3){
        const dataF = new FormData();
        dataF.append('newTask', this.newMessage);
        axios.post(this.apiUrl, dataF)
        .then((res)=> {
          this.tasks = res.data;
        })
        .catch((err)=>{
          console.log(err);
        })
        newMessage: "";
      }
      else{
        this.isErrorNewTask = true;
        setTimeout( () => {
          this.isErrorNewTask = false;
        },3000);
      }
      
    },

    changeDone(index){
      const dataF = new FormData();
      dataF.append('doneChange', index);
      axios.post(this.apiUrl, dataF)
      .then((res)=> {
        this.tasks = res.data;
      })
      .catch((err)=>{
        console.log(err);
      })
    },

    removeTask(index){
      console.log()
      if(this.tasks[index].done){
        const dataF = new FormData();
        dataF.append('removeTask', index);
        axios.post(this.apiUrl, dataF)
        .then((res)=> {
          this.tasks = res.data;
        })
        .catch((err)=>{
          console.log(err);
        })
      }
      else{
        this.isErrorDeleteTask = true;
        setTimeout( () => {
          this.isErrorDeleteTask = false;
        },3000);
      }

    },



  },

  mounted(){
      this.getList();
  }


}).mount('#app');