const CompMenu = {
  template:`
  <nav class="nav-header">
  <div class="nav-header-left">
    <div class="div-munu-hamburg">
      <input type="checkbox" id="menu-check">
      <label  for="menu-check">
        <i class="fa fa-bars 2x" id="icon-menu">
        </i>
      </label>
    </div>
    <div class="logo">
      <a href="">
        <span>L</span>Task
      </a>
    </div>
  </div>
  <div class="nav-header-right">
    <div class="div-search">
      <span class="span-icon-search" >
        <i  class="fa fa-search fa-1x fa-rotate-90"></i>
      </span>
      <input type="text" placeholder="Buscar">  
    </div>
    <div class="nav-header-right-info">
      <div class="div-plus-sign">
        <span v-on:click="activaTarefaRapida= !activaTarefaRapida">
          <i  class="fa fa-plus "></i>
        </span>
      </div>
      <div class="nav-header-right-info-name">
        <span>Claudio João Andre ...</span>
      </div>
      <div class="div-img-perfil">
        <img src="" alt="">
      </div>
    </div>   
  </div>
</nav>
  `,
  methods:{
    
  }
}

export default CompMenu;