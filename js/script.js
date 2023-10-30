const { createApp } = Vue;

createApp({
  data(){
    return{
      nome: 'pippo',
      tasks:[],
      newMessage: "",
      
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
      console.log(this.newMessage);

    }
  },

  mounted(){
      this.getList();
  }


}).mount('#app');