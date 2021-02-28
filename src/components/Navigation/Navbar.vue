<template>
  <header>
    <nav class="navbar">
      <div class="nav-logo">
        <a href="#" class="logo"><span>Tech</span>Solutions</a>
      </div>
      <div class="nav-menu">
        <ul class="nav-list">
          <li><a href="#">Serviços</a></li>
          <li><a href="#">Clientes</a></li>
          <li><a href="#">Contato</a></li>
        </ul>
        <div class="signin">
          <a href="#" class="btn-signin">Entrar</a>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Navbar',
};
</script>

<style lang="scss">
@import '../../assets/styles/scss/navbar';
</style>
