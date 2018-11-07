<template>
  <nav class="navbar navbar-expand-md bg-dark navbar-dark">
    <!-- Brand -->
    <router-link to="/" class="navbar-brand">Memo</router-link>

    <!-- Toggler/collapsibe Button -->
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>

    <!-- Navbar links -->
    <div class="collapse navbar-collapse" id="collapsibleNavbar">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/play" class="nav-link">Play</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/highscores" class="nav-link">Highscores</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link">About</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
  export default {
    name: 'navigation',
    data() {
      return {
        title: 'Welcome to Memo'
      }
    }
  }</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

