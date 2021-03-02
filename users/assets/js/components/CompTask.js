const CompTask={
  template:`
    <div>
          <div class="container-task">
          <h2 class="container-task-titulo">Tasks</h2>
          <div>
            <p class="p-add-tarefa" v-on:click="activeTarefaFunction" v-if="!activeTarefa">
              <span class="p-add-tarefa-text-i">
                <i  class="fa fa-plus "></i>
              </span>
              <span class="p-add-tarefa-text">
                Adicionar tarefa
              </span>
            </p>
          </div>
          <div class="div-add-tarefa" v-if="activeTarefa">
            <div class="div-add-tarefa-input">
              <input type="text" placeholder="Nome da tarefa" autofocus>
            </div>
            <div class="div-add-tarefa-info">
              <div class="div-add-tarefa-info-left">
                <div class="margin-right-20 div-add-tarefa-style-btn">
                  <span><i  class="fa fa-folder-o"></i></span>
                  <span> Escolher Projeto</span>
                </div>
                <div class="margin-right-20 div-add-tarefa-style-btn">
                  <span><i  class="fa fa-calendar"></i></span>
                  <span> Agendar</span>
                </div>
                <div class="margin-right-20 div-add-tarefa-style-btn">
                  <span><i  class="fa  fa-bell-o"></i></span>
                </div>
                <div class="margin-right-20 div-add-tarefa-style-btn">
                  <span><i  class="fa fa-circle-o"></i></span>
                  <span> Categoria</span>
                </div>
              </div>
              <div class="div-add-tarefa-info-right">
                <span class="margin-right-20 div-add-tarefa-style-btn-save" v-on:click="">
                  Adicionar Terefa
                </span>
                <span class="div-add-tarefa-style-btn-cancelar" v-on:click="activeTarefaFunction">
                  Cancelar
                </span>
              </div>
            </div>
          </div>
        </div>
        <ul class="">
        <li v-for = "task in tasks" v-bind:key="task.id" class="li-content-tesk  task-li">
            <div class="flex-box-row flex-box-align-items-center">
              <div>
                <span>
                  <i  class="fa fa-circle-o"></i>
                </span>
              </div>
              <div class="margin-left-20 ">
                <p class="li-content-tesk-p-title">
                  {{task.titulo}}
                </p>
                <div  class="flex-box-row li-content-tesk-div-info">
                  <div class="margin-right-20">
                    <span><i  class="fa fa-folder-o"></i></span>
                    <span>{{task.projeto}}</span>
                  </div>
                  <div class="margin-right-20">
                    <span><i  class="fa fa-bell-o"></i></span>
                  </div>
                  <div class="margin-right-20">
                    <span><i  class="fa fa-calendar"></i></span>
                    <span>{{task.data_execucao}}</span>
                  </div>
                  <div class="margin-right-20">
                    <span><i  class="fa fa fa-circle-o"></i></span>
                    <span>{{task.categoria}}</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="div-content-tesk-star">
              <span>
                <span><i  class="fa fa fa-star-o"></i></span>
              </span>
            </div>
        </li>      
      </ul>  
    </div>
  `,
  data:function(){
    return{
      activeTarefa:false,
      tasks:[
        {id:1,titulo:'Trabalhando com java', projeto:'programação',data_execucao:'Domingo, Fevereiro 17',categoria:'Categoria'},
        {id:2,titulo:'Trabalhando com java', projeto:'programação',data_execucao:'Domingo, Fevereiro 17',categoria:'Categoria'},
        {id:3,titulo:'Trabalhando com java', projeto:'programação',data_execucao:'Domingo, Fevereiro 17',categoria:'Categoria'}
      ],
    }
  },
  methods:{
    activeTarefaFunction(){
      this.activeTarefa  = !this.activeTarefa;
    }
   }
}

export default CompTask;
