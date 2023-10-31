const { createApp } = Vue;

createApp({
  data(){
    return{
      tasks:[],
      newMessage: "",
      apiUrl: 'server.php'
      
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


    
  },

  mounted(){
      this.getList();
  }


}).mount('#app');