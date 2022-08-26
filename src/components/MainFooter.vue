<template>
  <footer class="container-footer text-center">
    <div class="top-button" v-on:click="scrollToTop()">
      <span class="glyphicon glyphicon-triangle-top top-button"></span> 올라가기
    </div>
    <span class="glyphicon glyphicon-grain"></span> 주 헌 👼
  </footer>
</template>

<script>
  export default {
    name: 'Footer',

    methods: {
      scrollToTop: function () {
        $('html, body').animate({scrollTop: '0px'}, 350);
      }
    }
  }
</script>

<style lang="stylus">
@import "../variables";

div.top-button {
  height: 30px
}

span.top-button {
  margin-top: 5px
  margin-bottom: 10px
}

.container-footer {
  height: 70px
  font-size: 14px
  background-color: #fafafa
  margin-top: 30px
}
</style>
