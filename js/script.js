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
      if(effect.value =='opacity') this.effectSelected = 'opacity'; 
      else if(effect.value =='scale') this.effectSelected = 'scale';
      else if(effect.value =='translate') this.effectSelected = 'translate';
      else this.effectSelected = ''
    }
  },
  mounted(){
    
    this.applyEffect()
    
  }
}).mount('#app');