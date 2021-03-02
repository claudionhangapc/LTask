const CompModalProjeto = {
  props:['ativamodal'],
  template:`
  <section class="modal-projeto" v-if="ativamodal" v-on:click=" fecharModalProjeto">
        <div class="modal-projeto-container">
          <!--<span class="modal-container-btn-close" v-on:click="">
            <span><i  class="fa  fa-times"></i></span>
          </span>-->
          <div class="modal-projeto-container-titulo border-botton">
            <p>Adicionar Novo Projeto {{ativamodal}}</p>
          </div>
          <div class="modal-projeto-container-content">
            <div>
              <label for="">Nome do projeto</label>
              <input v-model="projetoNovo.nome" type="text" placeholder="Ex: Trabalhando com java">
            </div>
            <div class="position-relative">
              <label for="">cor do projeto</label>
              <select v-model="projetoNovo.cor" >
                <option value="" disabled selected>seleciona a cor do projeto</option>
                <option value="#006400">Verde escuro</option>
                <option value="#8B0000">Vermelho escuro</option>
                <option value="#FFD700">Dourado</option>
                <option value="#8B3A62">HotPink3</option>
                <option value="#8B8B83">Ivory4</option>
              </select>
              <span class="modal-projeto-sapn-color" v-bind:style="{'background-color':projetoNovo.cor}">
              </span>
            </div>
            <div class="modal-projeto-container-content-text">
              <p>
                Projetos são a melhor forma de organizar atividades
                que estão relacionadas.
              </p>
            </div>
            <div>
              <div class="modal-projeto-div-btn border-top">
                <span class="margin-right-20 div-add-tarefa-style-btn-save" v-on:click="AdicionarNovorProjeto(projetoNovo)">
                  Adicionar Projeto
                </span>
                <span class="div-add-tarefa-style-btn-cancelar" v-on:click="fecharModalProjetoCancelar">
                  Cancelar
                </span>
              </div>
            </div>
          </div>
          <!-- Fim Seção modal-projeto-container-tontent -->
      
        </div>
    </section>
  `,
  data:function(){
    return{
      projetoNovo:{id:20,nome:"",cor:"",listaTask:[]},
    }
  },
  methods:{
    fecharModalProjeto:function(event){
      if(event.target===event.currentTarget){
        //this.ativamodal=false;
        this.fecharModalProjetoCancelar();
      }
    },
    fecharModalProjetoCancelar(){
      //this.ativamodal=false;
      this.$emit('closemodal');
      
    },
    AdicionarNovorProjeto(){
      if(this.projetoNovo.cor=="" || this.projetoNovo.nome==""){
        if(this.projetoNovo.cor=="" && this.projetoNovo.nome==""){
          alert("Por favor, prencha os campos"); 
        }else{
          if(this.projetoNovo.cor==""){
            alert("Por favor, informa a cor do projeto"); 
          }else{
            alert("Por favor, informa o nome projeto"); 
          }
        } 
      }else{
        let projeto={};
         projeto.nome = this.projetoNovo.nome;
         projeto.cor = this.projetoNovo.cor;
         projeto.listaTask = this.projetoNovo.listaTask;
         this.$emit("addprojetonovo",projeto);
         //this.setDefaultNovoProjeto();
        //this.fecharModalProjetoCancelar();
      }
    },
    setDefaultNovoProjeto(){
      this.projetoNovo.cor="";
      this.projetoNovo.nome="";
    }
  }
  
}

export default CompModalProjeto;