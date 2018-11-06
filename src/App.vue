<template>
  <div id="app">
    <img src="./assets/logo.png">
    <navigation></navigation>
    <router-view />
  </div>
</template>

<script>
  import Navigation from './components/navigation'
  export default {
    name: 'App',
    components: {
      Navigation
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
  margin-top: 60px;
}
</style>
