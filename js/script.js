const { createApp } = Vue;

createApp({
  data(){
    return{
      messaggio: 'Ciao da Vue',
      image: 'https://picsum.photos/400',
      effectClass: ['opacity', 'scale', 'translate'],
      effectClass2: 'opacity'
    };


    
  }
}).mount('#app');