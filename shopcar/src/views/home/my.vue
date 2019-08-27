<template>
  <div class="wrap">
    <Header>我的</Header>
    <div class="main main-bg">
      <div class="my-box">
        <div class="my-box-tologin" v-if="islogin">
          <h2 @click="goLogin">去登录</h2>
        </div>
        <div class="my-box-person" v-else>
          <div class="my-box-person-dis">
            <h2>{{person.nickname}}</h2>
            <p>开启美好一天...</p>
          </div>
          <div class="my-box-person-img">
            <img :src="`http://169.254.25.25:7002`+person.avatar">
          </div>
        </div>
        <div class="my-box-shop">
          <div class="my-box-shop-title">
            <span>我的订单</span>
            <span>查看全部></span>
          </div>
          <div class="my-box-shop-content">
            <div></div>
          </div>
        </div>
      </div>
      <div class="my-cheap">
        <div class="my-cheap-div" v-for="(item,index) in cheapList" :key="index">
          <span :style="'background-position-x:'+item.bg"></span>
          <p>{{item.title}}</p>
        </div>
        <!-- <div class="my-cheap-div">
          <span></span>
          <h2>111</h2>
        </div> -->
      </div>
    </div>
    <Footer/>
  </div>
</template>
<script>
export default {
  props: {},
  components: {},
  data() {
    return {
      cheapList: [
        {
          title: "我的优惠券",
          bg: "-20px"
        },
        {
          title: "资质规则",
          bg: "-90px"
        },
        {
          title: "联系客服",
          bg: "-158px"
        }
      ],
      islogin:true,
      person:{

      }
    };
  },
  computed: {},
  methods: {
    //去登录
    goLogin(){
      this.$router.push('/login')
    },
    //获取登录信息
    isLogin(){
      let person=JSON.parse(window.localStorage.getItem('phone'))
      if(person){
        this.person=person;
        this.islogin=false
      }else{
        this.islogin=true
      }
    }
  },
  created() {
    this.isLogin()
  },
  mounted() {}
};
</script>
<style scoped lang="scss">
.main-bg {
  background: rgba(248, 248, 248, 1);
}
header{
    font-size:pxTorem(16px);
    line-height:pxTorem(44px);
}
.my-box {
  height: pxTorem(132px);
  background: rgba(254, 49, 19, 1);
  box-shadow: 0px 1px 1px 0px rgba(255, 64, 54, 0.2);
  @include absolute(relative);
  .my-box-person {
    width: pxTorem(350px);
    @include box_flex;
    justify-content: space-between;
    margin: 0 auto;
    .my-box-person-dis {
      h2 {
        font-size: pxTorem(20px);
        @include height(pxTorem(56px));
        line-height: pxTorem(56px);
        font-weight: 500;
        color: rgba(255, 255, 255, 1);
        margin-top: pxTorem(10px);
      }
      p {
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        font-size: pxTorem(12px);
        @include height(pxTorem(15px));
        line-height: pxTorem(15px);
      }
    }
    .my-box-person-img {
      img {
        margin-top: pxTorem(22px);
        width: pxTorem(42px);
        height: pxTorem(45px);
      }
    }
  }
  .my-box-shop {
    height: pxTorem(150px);
    width: pxTorem(350px);
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 33px 20px -20px rgba(0, 0, 0, 0.11),
      0px 0px 17px -3px rgba(0, 0, 0, 0.06);
    border-radius: pxTorem(6px);
    border: 1px solid rgba(240, 240, 240, 1);
    @include absolute(absolute);
    left: 3%;
    top: 80%;
    .my-box-shop-title {
      height: pxTorem(57px);
      width: pxTorem(330px);
      @include box_flex;
      justify-content: space-between;
      margin: 0 auto;
      line-height: pxTorem(57px);
      span:nth-child(1) {
        color: rgba(17, 17, 17, 1);
        font-size: pxTorem(14px);
      }
      span:nth-child(2) {
        font-size: pxTorem(12px);
        color: rgba(153, 153, 153, 1);
      }
    }
    .my-box-shop-content {
      div {
        width: pxTorem(330px);
        height: pxTorem(93px);
        margin: 0 auto;
        background: url("../../static/img/icon.png") no-repeat;
        background-position-x: 10px;
        background-position-y: -300px;
      }
    }
  }
  .my-box-tologin{
    width: pxTorem(350px);
    margin: 0 auto;
    h2 {
        font-size: pxTorem(20px);
        @include height(pxTorem(10px));
        line-height: pxTorem(100px);
        font-weight: 500;
        color: rgba(255, 255, 255, 1);
        margin-top: pxTorem(10px);
        padding-left: pxTorem(20px);
      }
  }
}
.my-cheap {
  width: pxTorem(350px);
  margin: 40% auto 0;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 17px -3px rgba(0, 0, 0, 0.06);
  border-radius: pxTorem(12px);
  border: 1px solid rgba(240, 240, 240, 1);
  .my-cheap-div {
    width: pxTorem(320px);
    height: pxTorem(57px);
    margin: 0 auto;
    font-size: pxTorem(14px);
    line-height: pxTorem(57px);
    @include align;
    @include box_flex;
    span {
      width: pxTorem(48px);
      height: pxTorem(30px);
      text-align: center;
      background: url("../../static/img/icon.png") no-repeat;

      background-position-y: 5px;
    }
  }
}
</style>
