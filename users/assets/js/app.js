const app = new Vue({
  el:"#app",
  data:{
    activate:false,
    activeTarefa:false,
    activaTarefaRapida:false,
    activaModalProjeto:false,
    tasks:[
      {id:1,titulo:'Trabalhando com java', projeto:'programação',data_execucao:'Domingo, Fevereiro 17',categoria:'Categoria'},
      {id:2,titulo:'Trabalhando com java', projeto:'programação',data_execucao:'Domingo, Fevereiro 17',categoria:'Categoria'},
      {id:3,titulo:'Trabalhando com java', projeto:'programação',data_execucao:'Domingo, Fevereiro 17',categoria:'Categoria'}
    ]
  },
  methods:{
    
  }
  
});

