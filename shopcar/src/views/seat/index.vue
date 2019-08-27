<template>
  <div class="wrap wrapBg">
    <Header></Header>
    <div class="main">
      <div class="search-header">
        <span>北京 ></span>
        <div>
          <input type="text" placeholder="搜索地址" v-model="val">
        </div>
        <span @click="go">返回</span>
      </div>
      <div class="search-content">
        <ul>
          <li
            v-for="(item,index) in tips"
            :key="index"
            @click="change(item.district)"
          >{{item.district}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { getMap } from "@/utils/map.js";
export default {
  props: {},
  components: {},
  data() {
    return {
      val: "",
      tips: []
    };
  },
  computed: {},
  methods: {
    change(local) {
      window.localStorage.setItem("local", local);
      this.$router.push("/home");
    },
    go() {
      this.$router.push("/home");
    }
  },
  created() {},
  async mounted() {
    this.search = await getMap('AMap.Autocomplete',{
      city: "北京"
    });
  },
  watch: {
    val(val) {
      this.search.search(val, (status, result) => {
        if (status === "no_data") {
          alert("暂无该地址");
        } else if (status === "complete") {
          this.tips = result.tips;
        }
      });
    }
  }
};
</script>
<style scoped lang="scss">
.wrapBg {
  background: rgba(248, 248, 248, 1);
}
.search-header {
  @include height(pxTorem(50px));
  display: flex;
  background: #fff;
  span {
    @include width(pxTorem(68px));
    font-size: pxTorem(12px);
    text-align: center;
    line-height: pxTorem(50px);
    color: rgba(0, 0, 0, 1);
  }
  > div {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    input {
      @include width(90%);
      @include height(pxTorem(32px));
      border-radius: pxTorem(16px);
      background: rgba(246, 246, 246, 1);
      font-size: pxTorem(12px);
      color: rgba(0, 0, 0, 1);
      text-indent: 2em;
    }
  }
}
.search-content {
  ul {
    li {
      height: pxTorem(40px);
      font-size: pxTorem(12px);
      line-height: pxTorem(40px);
      padding-left: pxTorem(30px);
      border-bottom: pxTorem(1px) solid #f3f3f3;
    }
  }
}
</style>