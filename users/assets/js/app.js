import CompMenu from "./components/CompMenu.js";
import CompAside from "./components/CompAside.js";
import CompModalProjeto from "./components/CompModalProjeto.js";
import CompModalTask from "./components/CompModalTask.js";

import CompHome from "./components/CompHome.js";
import CompTask from "./components/CompTask.js";
import CompTaskImportant from "./components/CompTaskImportant.js"
import CompTaskProjeto from "./components/CompTaskProjeto.js"



const header = new Vue({
  el:"#header",
  data:{
    mensagem:"oiiiiiiii"
  },
  components:{
    "comp-menu":CompMenu
  },
  methods:{
    abrirModalTask(){
      //alert("oi como voce esta caludio nhanga");
      modalContainer. abrirModaltaskFromContainer();
    }
    
  }
})


const aside = new Vue({
  el:"#aside",
  data:{
    projetos:[
      {id:1,nome:"programacao",cor:"#006400",listaTask:[1,2,3,5]
      },
      {id:2,nome:"Analise de sistemas",cor:"#8B0000",listaTask:[1,2,3,5]
      },
      {id:3,nome:"sera que este projeto",cor:"#8B3A62",listaTask:[1,2,3,5]
      }
      ]
  },
  components:{
    "comp-aside":CompAside
  },
  methods:{
    ativaModalProjetoFromSide(){
      modalContainer.ativaModalProjetoFunction();
    },
    setpage(pagina){
      containerContent.setPageContent(pagina);
    },
    addProjetoNovo(projeto){
      this.projetos.push(projeto);
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
    ativaModalTask:false
  },
  methods:{
    ativaModalProjetoFunction(){
      this.ativaModalProjeto = true;
      //alert(this.ativaModalProjeto);
    },
    closeModalProjeto(){
      this.ativaModalProjeto=false; 
    },
    closeModalTask(){
      this.ativaModalTask=false;
    },
    abrirModaltaskFromContainer(){
      this.ativaModalTask=true;
      //alert("oi claudio tudo bem com voce ");
    },
    addProjetoNovoFromModal(projeto){
      aside.addProjetoNovo(projeto);
    }
  }
})


const containerContent = new Vue({
  el:"#container-content",
  data:{
    currentPage:'page-task-projeto'
  },
 components:{
  "page-home":CompHome,
  "page-task":CompTask,
  "page-task-important":CompTaskImportant,
  "page-task-projeto":CompTaskProjeto,
 },
 methods:{
  activeTarefaFunction(){
    this.activeTarefa  = !this.activeTarefa;
  },
  setPageContent(page){
    this.currentPage=page;
  }
 }
});





