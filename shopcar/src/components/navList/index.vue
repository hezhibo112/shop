<template>
    <div class="home_nav">
        <div class="home_nav_item" v-for="(item,index) in navData" :key="index">
            <span :style="'background-position-x:'+item.bg"></span>
            <b>{{item.title}}</b>
        </div>
    </div>
</template>
<script>
export default {
  props: {},
  components: {},
  data() {
    return {
      navData: [
        {
          title: "蔬菜每日鲜",
          bg: "-0px"
        },
        {
          title: "肉蛋禽",
          bg: "-75px"
        },
        {
          title: "母婴天地",
          bg: "-155px"
        },
        {
          title: "进店必买",
          bg: "-225px"
        },
        {
          title: "美通卡",
          bg: "-300px"
        },
        {
          title: "早晚市",
          bg: "-370px"
        },
        {
          title: "品牌汇",
          bg: "-450px"
        },
        {
          title: "领劵中心",
          bg: "-520px"
        },
        {
          title: "支付优惠",
          bg: "-599px"
        },
        {
          title: "直采品牌",
          bg: "-670px"
        }
      ],
      swiperOption: {
        notNextTick: true,
        // some swiper options/callbacks
        // 所有的参数同 swiper 官方 api 参数
        //pagination: ".swiper-pagination", //分页器挂载到swiper-pagination类对应的元素上
        loop: true, //开启轮播图前后循环模式
        autoplay: true,
        speed: 1000
      },
    };
  },
  computed: {
      
  },
  methods: {
   

  },
  created() {
     
  },
  mounted() {}
};
</script>
<style scoped lang="scss">
.home_location {
  @include width(100%);
  @include height(pxTorem(49px));
  // background:
  font-size: pxTorem(12px);
  font-weight: 400;
  color: #999999;
  background: #ccc;
}
.home_banner {
  @include width(100%);
  @include height(pxTorem(138px));
  overflow: hidden;
  img {
    @include width(100%);
    @include height(100%);
  }
}
.home_nav {
  @include width(100%);
  @include height(pxTorem(156px));
  @include box_flex;
  flex-wrap: wrap;
  .home_nav_item {
    @include width(20%);
    @include height(50%);
    color: #b3b3b3;
    font-size: pxTorem(12px);
    @include box_flex;
    @include direction(column);
    @include justify;
    @include align;
    span {
      @include width(80%);
      @include height(pxTorem(44px));
      background: url("../../static/img/navlist.png");
      background-repeat: no-repeat;
      background-position-y: -0px;
    }
    b {
      margin: pxTorem(4px) 0;
    }
  }
}
</style>