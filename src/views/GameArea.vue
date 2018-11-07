<template>
  <div>
    <h1>here comes gamearea</h1>
    <memotile></memotile>

  </div>

</template>


<script>


  //$('#tits').html("<p>faen</p>");

  import Memotile from '../components/memotile';
  export default {
    name: 'gamearea',
    data () {
      return {
        title: 'Welcome to Memo',
        tiles: [],
        number: 4
      }
    },
    components: {
      'memotile': Memotile
    },
    created: function () {
      this.tiles = [1, 2, 3];
    }
  }


</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
