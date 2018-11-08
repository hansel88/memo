<template>
  <div class="gamearea col-xs-6 col-md-12">
    <h1>here comes gamearea</h1>
    <div v-for="tile in tiles" :id="tile.id" v-on:click="checkTile(tile.id, tile.pair)">
      <memotile :color="tile.color" :imageUrl="tile.image" :class="tile.pair"></memotile>
    </div>
    <!--<memotile></memotile>-->

  </div>

</template>


<script>


  //$('#tits').html("<p>faen</p>");
  var lastPickedPair = null;
  var lastPickedId = null;

  var disableClick = false;

  var delay = 3000; //dependent on level? :)

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
      /*
      $('.flip').click(function () {
        $(this).find('.card').toggleClass('flipped');
      });
      */
    },
    methods: {
      checkTile: function (id, pair) {

        if (disableClick)
          return;

        disableClick = true;

        console.log('clicked, id: ', id);
        console.log('clicked, pair: ', pair);

        if($('#' + id).hasClass("correct")){
          console.log('was correct');
          return;
        }

        if (lastPickedId == null) {
          lastPickedId = id;
          lastPickedPair = pair;
          showTile(id);
          disableClick = false;
        }
        else {
          if (lastPickedPair == pair) {
            console.log('correct');
            showTile(id);
            success(pair);
            resetLastPicked();
            disableClick = false;
          }
          else {
            showTile(id);
            hideTile(id, delay)
            hideTile(lastPickedId, delay);
            resetLastPicked(); 
            setTimeout(function () {
              disableClick = false;
            }, delay);
          }
        }
      }
    }
  }

  var resetLastPicked = function () {
    lastPickedId = null;
    lastPickedPair = null;
  }

  var hideTile = function (id, delay) {
    console.log('hideTile called');
    setTimeout(function () {
      $('#' + id).find('.card').removeClass('flipped');
    }, delay);
  }

  var showTile = function (id) {
    console.log('show called');
    $('#' + id).find('.card').addClass('flipped');
  }

  var success = function (pair) {
    $('.' + pair).each(function () {
      $(this).addClass("correct");
    });
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
    var baseUrl = 'http://htodap.com/memo/tiles/diff' + level + '/';


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
        image: imageUrls[i],
        id: i,
        pair: 'memotile' + i
      };
      let siblingTile = {
        color: getRandomColor(),
        image: imageUrls[i],
        id: i + 'sibling',
        pair: 'memotile' + i
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
