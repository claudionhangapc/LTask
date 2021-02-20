const CompAside ={
  template:`
    <nav class="continer-left-nav">
    <ul>
      <li class="continer-left-nav-li">
        <a href="" class="">
          <p>
            <i  class="fa fa-home" aria-hidden="true"></i>
            <span>Home</span>
          </p>
        </a>
      </li>
      <li class="continer-left-nav-li">
        <a href="">
          <p>
            <i  class="fa fa-list"></i>
            <span>Task</span>
          </p>
        </a>
      </li>
      <li class="continer-left-nav-li">
        <a href="">
          <p>
            <i  class="fa fa-star-o "></i>
            <span>Importantes</span>
          </p>
        </a>
      </li>
      <li class="li-border">
        <button class="button-dropdown continer-left-nav-li" v-on:click="activateUlDropDown=!activateUlDropDown">
          <p>
            <i v-bind:class="[activateUlDropDown?'fa fa-folder-open-o':'fa fa-folder-o' ]"></i>
            <span>Projetos</span>
          </p>
          <span class="" v-on:click="activaModalProjeto= !activaModalProjeto">
            <i  class="fa fa-plus span-btn-pulus"></i>
          </span>
        </button>
        <ul class="ul-dropdown" v-if="activateUlDropDown">
          
          <li class="continer-left-nav-li" v-for="projeto in  projetos" v-bind:key="projeto.id">
            <a href="#">
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
      activaModalProjeto:false,
      corAtualProjeto:'',
      projetoNovo:{id:20,nome:"",cor:"",listaTask:[]},
      projetos:[
        {id:1,nome:"programacao",cor:"#006400",listaTask:[1,2,3,5]
        },
        {id:2,nome:"Analise de sistemas",cor:"#8B0000",listaTask:[1,2,3,5]
        },
        {id:3,nome:"sera que este projeto",cor:"#8B3A62",listaTask:[1,2,3,5]
        }
        ]
    }
  },
  methods:{
    AdicionarNovorProjeto(projeto){
      this.projetos.push(projeto);
    }
  },
}

export default CompAside;