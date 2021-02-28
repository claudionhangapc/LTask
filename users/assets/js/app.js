import CompMenu from "./components/CompMenu.js";
import CompAside from "./components/CompAside.js";
import CompModalProjeto from "./components/CompModalProjeto.js";
import CompModalTask from "./components/CompModalTask.js";

const header = new Vue({
  el:"#header",
  data:{
    mensagem:"oiiiiiiii"
  },
  components:{
    "comp-menu":CompMenu
  }
})


const aside = new Vue({
  el:"#aside",
  components:{
    "comp-aside":CompAside
  },
  methods:{
    ativaModalProjetoFromSide(){
      modalContainer.ativaModalProjetoFunction();
    }
  }
})


// Componentes para a modal
const modalContainer = new Vue({
  el:"#modal-container",
  components:{
    "comp-modal-projeto":CompModalProjeto,
    "comp-modal-task": CompModalTask
  },
  data:{
    ativaModalProjeto:false,
  },
  methods:{
    ativaModalProjetoFunction(){
      this.ativaModalProjeto = true;
      alert(this.ativaModalProjeto);
    }
  }
})

/*
const app = new Vue({
  el:"#app",
  data:{
    activeTarefa:false,
    activaTarefaRapida:false,
    tasks:[
      {id:1,titulo:'Trabalhando com java', projeto:'programação',data_execucao:'Domingo, Fevereiro 17',categoria:'Categoria'},
      {id:2,titulo:'Trabalhando com java', projeto:'programação',data_execucao:'Domingo, Fevereiro 17',categoria:'Categoria'},
      {id:3,titulo:'Trabalhando com java', projeto:'programação',data_execucao:'Domingo, Fevereiro 17',categoria:'Categoria'}
    ],
    
  },
 components:{
  "comp-modal-projeto":CompModalProjeto,
  "comp-modal-task": CompModalTask,
 }
});
*/




