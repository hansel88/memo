<template>
  <div>
    <h1>here comes gamearea</h1>
    <div v-for="tile in tiles">
      <memotile :color="tile.color"></memotile>
    </div>
    <!--<memotile></memotile>-->

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

      let tile = {
        color: 'orange'
      };

      let tile2 = {
        color: 'blue'
      };

      let tile3 = {
        color: 'green'
      }
      this.tiles = [];
      this.tiles.push(tile);
      this.tiles.push(tile2);
      this.tiles.push(tile3);
      this.tiles.push(tile);
      this.tiles.push(tile2);
      this.tiles.push(tile3);
      this.tiles.push(tile);
      this.tiles.push(tile2);
      this.tiles.push(tile2);
      this.tiles.push(tile3);

      var array = this.tiles;
      for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }

      this.tiles = array;
    },
    mounted: function () {
      $('.flip').click(function () {
        $(this).find('.card').toggleClass('flipped');
      });
    }
  }


</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
