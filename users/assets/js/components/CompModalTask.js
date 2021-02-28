const CompModalTask ={
  template:`
    <section class="modal" v-if="activaModalTask" v-on:click="fecharModalTask">
        <div class="modal-container">
        <!--<span class="modal-container-btn-close" v-on:click="activaTarefaRapida= !activaTarefaRapida">
          <span><i  class="fa  fa-times"></i></span>
        </span>-->
        <div class="modal-add-titulo">
          <p>Adicionar Tarefa rapida</p>
        </div>
        <div class="modal-container-tarefa">
          <div class="div-add-tarefa" >
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
                <span class="div-add-tarefa-style-btn-cancelar" v-on:click="activaModalTask = false">
                  Cancelar
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>   
  </section>
  `,
  data:function(){
    return{
      activaModalTask:false
    }
  },
  methods:{
    fecharModalTask:function(event){
      if(event.target===event.currentTarget){
        this.activaModalTask=false;
      }
    }
  }
}

export default CompModalTask;