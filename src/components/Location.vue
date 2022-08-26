<template>
  <div class="row">
    <div class="col-xs-12">
      <h4 class="page-header">오시는 길</h4>

      <div class="location-header">
        <h4>돌잔치 장소</h4>
      </div>
      <div class="map-container" id="map"></div>
      <div class="location-body">
        <p>코트야드 메리어트 서울 판교, 8층 모모룸</p>
        <p class="p-inner">
          <span class="glyphicon glyphicon-map-marker" aria-hidden="true"></span> 경기 성남시 분당구 판교역로192번길 12
        </p>
        <p class="p-inner">
          <a href="tel:050714212041" class="loc-link">
            <span class="glyphicon glyphicon-earphone" aria-hidden="true"></span>
            0507-1421-2041 <span class="map-link">통화하기</span>
          </a>
        </p>
      </div>

      <br><br><br>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Location',

    mounted: function () {
      // Load Map.js
      const el = document.createElement('script')
      el.onload = function () {
        var position = new naver.maps.LatLng(37.3976747, 127.1104788)
        var map = new naver.maps.Map('map', {
          center: position,
          zoom: 9,
          minZoom: 1,
          zoomControl: true,
          zoomControlOptions: {
            position: naver.maps.Position.TOP_RIGHT
          },
          draggable: false,
          pinchZoom: false,
          scrollWheel: false,
          keyboardShortcuts: false,
          disableDoubleTapZoom: true,
          disableDoubleClickZoom: true,
          disableTwoFingerTapZoom: true
        })
        var marker = new naver.maps.Marker({
          map: map,
          position: position
        })
      }
      el.setAttribute('type', 'text/javascript')
      el.setAttribute('src', 'https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=2754uh55v1')
      document.getElementsByTagName('head')[0].appendChild(el)
    }
  }
</script>

<style lang="stylus">
@import "../variables";

p.p-inner {
  padding-left: 10px
}

.location-header {
  padding-top: 10px
  padding-left: 15px
}

.location-body {
  padding-top: 10px
  padding-left: 15px
}

.map-container {
  width: 100%
  height: 250px
  padding-left: 0
  padding-right: 0
}

</style>