const { createApp } = Vue;

createApp({
  data(){
    return{
      nome: 'pippo',
      tasks:[],
      
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
  },

  mounted(){
      this.getList();
  }


}).mount('#app');