const { createApp } = Vue;

createApp({
  data(){
    return{
      messaggio: 'Ciao da Vue',
      image: 'https://picsum.photos/400',

    }; 
  }
}).mount('#app');