<template>
  <div class="map">
    <div class="amap-page-container">
      <el-amap-search-box
        class="search-box"
        :search-option="searchOption"
        :on-search-result="onSearchResult"
      ></el-amap-search-box>
      <el-amap vid="amapDemo" :center="mapCenter" :zoom="12" class="amap-demo">
        <el-amap-marker v-for="(marker,index) in markers" :position="marker" :key="index"></el-amap-marker>
      </el-amap>
    </div>
    <el-amap class="amap-box" vid="amapDemo" :zoom="zoom" :center="center" :plugin="plugin">
      
      <!-- 标记点 -->
      <el-amap-marker :position="center" vid="marker"></el-amap-marker>
      <!-- 圆 -->
      <el-amap-circle
        vid="circle"
        :center="center"
        :radius="radius"
        fill-opacity="0.2"
        strokeColor="#38f"
        strokeOpacity="0.8"
        strokeWeight="1"
        fillColor="#38f"
      ></el-amap-circle>
    </el-amap>
  </div>
</template>
<script>
export default {
  props: {},
  components: {},
  data() {
    let self = this;
    return {
      zoom: 14,
      center: [116.3, 39.95], //圆心位置
      radius: 200, //圆半径，单位:米
      loaded: false,
      plugin: [
        {
          pName: "Geolocation",
          showMarker: false,
          events: {
            init(o) {
              //定位成功 自动将marker和circle移到定位点
              o.getCurrentPosition((status, result) => {
                console.log(result);
                if (result && result.position) {
                  self.center = [result.position.lng, result.position.lat];
                  self.loaded = true;
                  if(result.formattedAddress){
                    sessionStorage.address = result.formattedAddress //获取到的定位保存到一次性本地存储中
                    console.log(result.formattedAddress,'-----for')
                    // self.$router.push({
                    //   path:'/home',
                    //   query:result.formattedAddress
                    // })
                  }
                } else {
                  this.$message({message:`定位失败`,type:"alert"});
                }
              });
            }
          }
        }
      ],
      // 搜索框  start
      markers: [
        [121.59996, 31.197646],
        [121.40018, 31.197622],
        [121.69991, 31.207649]
      ],
      searchOption: {
        city: "上海",
        citylimit: true
      },
      mapCenter: [121.59996, 31.197646]
      // 搜索框  end
    };
  },
  methods: {
    addMarker: function() {
      let lng = 121.5 + Math.round(Math.random() * 1000) / 10000;
      let lat = 31.197646 + Math.round(Math.random() * 500) / 10000;
      this.markers.push([lng, lat]);
    },
    onSearchResult(pois) {
      let latSum = 0;
      let lngSum = 0;
      if (pois.length > 0) {
        pois.forEach(poi => {
          let { lng, lat } = poi;
          lngSum += lng;
          latSum += lat;
          this.markers.push([poi.lng, poi.lat]);
        });
        let center = {
          lng: lngSum / pois.length,
          lat: latSum / pois.length
        };
        this.mapCenter = [center.lng, center.lat];
      }
    }
    // 搜索框 end
  },
  mounted() {
    console.log(window.sessionStorage.id); //可以获取到经纬度

    //搜索框 start
  }
};
</script>
<style scoped lang="scss">
.map {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 100;
}
.amap-page-container,.amap-demo{
  width: 100%;
  height: 100%;
}
.amap-wrapper {
  width: 100%;
  height: 500px;
}

.search-box {
  width: 90%;
  position: absolute;
  top: 25px;
  left: 20px;
}

.amap-page-container {
  position: relative;
  
}
</style>
