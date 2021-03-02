const CompAside ={
  name:"comp-aside",
  props:['ativa','projetos'],
  template:`
    <nav class="continer-left-nav">
    <ul>
      <li class="continer-left-nav-li">
        <a href="" v-on:click.prevent="setPage('page-home')" class="">
          <p>
            <i  class="fa fa-home" aria-hidden="true"></i>
            <span>Home</span>
          </p>
        </a>
      </li>
      <li class="continer-left-nav-li">
        <a href="" v-on:click.prevent="setPage('page-task')">
          <p>
            <i  class="fa fa-list"></i>
            <span>Task</span>
          </p>
        </a>
      </li>
      <li class="continer-left-nav-li">
        <a href="" v-on:click.prevent="setPage('page-task-important')">
          <p>
            <i  class="fa fa-star-o "></i>
            <span>Importantes</span>
          </p>
        </a>
      </li>
      <li class="li-border">
        <button class="button-dropdown continer-left-nav-li" v-on:click="activateUlDropDownFunction">
          <p>
            <i v-bind:class="[activateUlDropDown?'fa fa-folder-open-o':'fa fa-folder-o' ]"></i>
            <span>Projetos</span>
          </p>
          <span class="" v-on:click="abrirModalProjeto">
            <i  class="fa fa-plus span-btn-pulus"></i>
          </span>
        </button>
        <ul class="ul-dropdown" v-if="activateUlDropDown">
          
          <li class="continer-left-nav-li" v-for="projeto in projetos" v-bind:key="projeto.id">
            <a href="#" v-on:click.prevent="setPage('page-task-projeto')">
              <p>
                <span class="ul-dropdown-span-i">
                  <i  class="fa fa-circle" v-bind:style="{'color':projeto.cor}"></i>
                </span>
                <span class="ul-dropdown-span-text" >
                  {{projeto.nome}} 
                </span>
              </p>
            </a>
          </li>
          
        </ul>  
      </li>
    </ul>
  </nav>
  `,
  data:function(){
    return{
      activateUlDropDown:false,
    }
  },
  methods:{
    AdicionarNovorProjeto(projeto){
      this.projetos.push(projeto);
    },
    abrirModalProjeto(){
      this.$emit("abrirmodal");
      //console.log('teste');
    },
    activateUlDropDownFunction(event){
      if(event.target===event.currentTarget){
        this.activateUlDropDown = !this.activateUlDropDown;
      }else{
        this.activateUlDropDown = true;
      } 
    },
    setPage(page){
      this.$emit("trocarpagina",page);
    }
  }
}

export default CompAside;