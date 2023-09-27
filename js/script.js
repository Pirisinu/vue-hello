const { createApp } = Vue;

createApp({
  data(){
    return{
      messaggio: 'Ciao da Vue'
    }
  }
}).mount('#app');