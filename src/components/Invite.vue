<template>
  <!-- header -->
  <div class="row">
    <div class="col-xs-12">
      <h4 class="page-header">김주헌 첫 돌 👼</h4>

      <!-- 메인 이미지! -->
      <img src="../assets/images/MAIN_1.jpg" class="img-responsive">

      <div class="text-center">
        <blockquote class="text-center">
          <p>세상에 이렇게 기쁠 수가</p>
          <p>얼굴 가득 고 귀여움이</p>
          <p>입 가득 스며있는 앙증함</p>
          <p>벙긋벙긋 말문 열릴 때마다</p>
          <p>까르륵 토해내는 순전한 마알감</p>
          <footer><cite title="정윤목">정윤목</cite>, &lt;어린이 찬가&gt; 중</footer>
        </blockquote>
        <p>주헌이의 첫 생일에 초대합니다.</p>
        <p></p>
        <p></p>
      </div>
      <br>
      <br>
      <div class="text-center">
        <img src="../assets/cake.png" class="img-icon">
      </div>

      <div class="text-center">
        <h4>2022년 9월 3일 토요일, 오후 12시</h4>
        <p>코트야드 메리어트 서울 판교, 8층 모모룸</p>
      </div>
    </div>

    <br><br>

    <div class="col-xs-12">
      <ul class="list-group text-center">

        <li class="list-group-item">
          <router-link to="/about" class="bottom-navbar-list">
            <span class="glyphicon glyphicon-heart" aria-hidden="true"></span>
            주헌이 역사
          </router-link>
        </li>
        <li class="list-group-item">
          <router-link to="/photos" class="bottom-navbar-list">
            <span class="glyphicon glyphicon-camera" aria-hidden="true"></span>
            사진 보기
          </router-link>
        </li>
        <li class="list-group-item">
          <router-link to="/location" class="bottom-navbar-list">
            <span class="glyphicon glyphicon-map-marker" aria-hidden="true"></span>
            돌잔치 장소
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Invite',

  mounted () {
    this.$ga.trackPage('/invite')
  }
}
</script>

<style lang="stylus">
@import "../variables";

blockquote {
  letter-spacing: 1px
}

a.loc-link {
  color: $text-color
}

span.map-link {
  font-size: 13px
  font-weight: bold
  color: $link-color
}

span.name {
  font-size: 1.2em
  letter-spacing: 2px
}

img.img-icon {
  height: 25px
  width: 25px
}

ul.list-group {
  align-content: center;
  padding: 60px 20px 10px 20px
  max-width: 25em;
  margin: 0 auto;
}

a.bottom-navbar-list.router-link-active {
  /*border-bottom: 2px solid $special-color;*/
  /*padding-bottom: 1px;*/
  color: #111!important;
  text-decoration: none;
}

li.list-group-item > a.bottom-navbar-list {
  color: #777
  letter-spacing: 1.15px;
  font-size: 15.5px;
  padding: 15px 6px 3px 6px!important;
  font-weight: 400;
}
</style>