<template>
  <div class="gamearea col-xs-6 col-md-12">
    <h1>here comes gamearea</h1>
    <div v-for="tile in tiles">
      <memotile :color="tile.color" ></memotile>
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
      this.tiles = generateTiles(1);
    },
    mounted: function () {
      $('.flip').click(function () {
        $(this).find('.card').toggleClass('flipped');
      });

    }
  }

  var rearrangeArray = function (array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  var getRandomColor = function () {
    var colors = ['green', 'orange', 'blue'];
    var index = Math.floor((Math.random() * 3));
    return colors[index];
  }

  var getRandomImageUrls = function (size, level) {
    var urls = [];
    var baseUrl = '../assets/images/diff' + level + '/';


    for (let i = 1; i <= size; i++) {
      let url = baseUrl + i + '.png';
      urls.push(url);
    }

    return urls;
  }

  var generateTiles = function (level) {

    let tiles = [];
    var number;

    switch (level) {
      case 1: number = 9; break;
      case 2: number = 10; break;
      case 3: number = 12; break;
      default: number = 10; break;
    };

    var imageUrls = getRandomImageUrls(number, 1);

    for (var i = 0; i < number; i++) {
      let tile = {
        color: getRandomColor(),
        image: imageUrls[i]
      };
      let siblingTile = {
        color: getRandomColor(),
        image: imageUrls[i]
      };

      tiles.push(tile);
      tiles.push(siblingTile);
    }

    console.log(tiles)
    return rearrangeArray(tiles);
  }

</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
