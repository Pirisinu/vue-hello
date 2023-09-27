const { createApp } = Vue;
let effect = document.getElementById('effects');
const button = document.querySelector('button');


createApp({
  data(){
    return{
      messaggio: 'Ciao da Vue',
      image: 'https://picsum.photos/400',

      effectSelected: ''
    }; 
  },
  methods: {
    applyEffect(){
      if(effect.value =='opacity') effectSelected = 'opacity'; 
      else if(effect.value =='scale') effectSelected = 'scale';
      else if(effect.value =='translate') effectSelected = 'translate';

      console.log(effectSelected)
    }
  },
  mounted(){
    
    applyEffect()
  }
}).mount('#app');