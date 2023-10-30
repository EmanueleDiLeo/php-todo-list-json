const { createApp } = Vue;

createApp({
  data(){
    return{
      nome: 'pippo',
      tasks:[],
      newMessage: "",
      apiUrl: 'server.php'
      
    }
  },

  methods:{
    getList(){
      axios.get('server.php')
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
        console.log(res.data);
        this.tasks = res.data;
      })
      .catch((err)=>{
        console.log(err);
      })

    }
  },

  mounted(){
      this.getList();
  }


}).mount('#app');