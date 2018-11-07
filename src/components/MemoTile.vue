<template>
  <div class="container ">
    <div class="flip memotile">
      <div class="card green">
        <div class="face front">
          <div class="well well-sm inner"> Front</div>
        </div>
        <div class="face back">
          <div class="well well-sm inner"> Back</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'memotile',
    props: {
      flipped: 'test',
      color: 'green'
    },
    data() {
      return {

      }
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
  #tits {
    height: 500px;
    width: 200px;
    margin: 0 !important;
    padding: 0 !important;
  }
</style>

