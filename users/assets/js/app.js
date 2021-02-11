const app = new Vue({
  el:"#app",
  data:{
    activateUlDropDown:false,
    activeTarefa:false,
    activaTarefaRapida:false,
    activaModalProjeto:false,
    corAtualProjeto:'',
    projetoNovo:{id:20,nome:"",cor:"",listaTask:[]},
    tasks:[
      {id:1,titulo:'Trabalhando com java', projeto:'programação',data_execucao:'Domingo, Fevereiro 17',categoria:'Categoria'},
      {id:2,titulo:'Trabalhando com java', projeto:'programação',data_execucao:'Domingo, Fevereiro 17',categoria:'Categoria'},
      {id:3,titulo:'Trabalhando com java', projeto:'programação',data_execucao:'Domingo, Fevereiro 17',categoria:'Categoria'}
    ],
    projetos:[
      {id:1,nome:"programacao",cor:"#006400",listaTask:[1,2,3,5]
      },
      {id:2,nome:"Analise de sistemas",cor:"#8B0000",listaTask:[1,2,3,5]
      },
      {id:3,nome:"sera que este projeto",cor:"#8B3A62",listaTask:[1,2,3,5]
      }
      ]
  },
  methods:{
    AdicionarNovorProjeto(projeto){
      this.projetos.push(projeto);
    }
  }
  
});

