<template>
  <div class="row">
    <div class="col-xs-12">
      <h4 class="page-header">주헌 👼</h4>

      <span class="glyphicon glyphicon-heart timeline-heart" aria-hidden="true"></span>

    <div class="panel panel-default right">
        <div class="panel-heading">
          <h5><strong>2021년 9월 16일, 주헌 태어나다</strong></h5>
        </div>
        <div class="panel-image">
          <img src="../assets/images/IMG_ABOUT_01.jpeg" class="img-responsive">
        </div>
        <div class="panel-body">
          <p>#3kg #소띠 #용인</p>
        </div>
      </div>
    </div>

      <div class="timeline">
        <div class="panel panel-default left">
          <div class="panel-heading">
            <h5><strong>1989년 1월, 근호 태어나다</strong></h5>
          </div>
          <div class="panel-image">
            <img src="../assets/images/IMG_ABOUT_06.jpeg" class="img-responsive">
          </div>
          <div class="panel-body">
            <p></p>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutUs',

  mounted () {
    this.$ga.trackPage('/aboutus')
  }
}
</script>

<style lang="stylus">
@import "../variables";

.timeline {
  padding-top: 20px;
}
.timeline:before {
    content: '';
    position: absolute;
    z-index: -1;
    width: 0.5em;
    height: 100%;
    left: 50%;
    margin-left: -0.25em;
    background: #f2c63d;
}

.timeline-heart {
  font-size: 1.8em;
  -webkit-font-smoothing: antialiased;
  position: absolute;
  z-index: -1;
  top: 1.5em;
  left: -0.0417em;
  width: 100%;
  text-align: center;
  color: $special-color
}

.timeline > .panel {
  margin-bottom: 25px
}

.timeline > .right {
  margin-left: 20px
}

.timeline > .left {
  margin-right: 20px
}

</style>