<template>
  <div id="app">
    <navigation></navigation>
    <!--<img src="./assets/logo.png">-->
    <router-view />
  </div>
</template>

<script>
  import Navigation from './components/navigation'
  import Memotile from './components/memotile';
  export default {
    name: 'App',
    components: {
      Navigation, Memotile
    }
}
</script>


<style lang="scss">
  @import '../node_modules/bootstrap/scss/bootstrap.scss';
  @import 'styles/main.scss';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
