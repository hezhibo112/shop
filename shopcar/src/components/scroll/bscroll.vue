<template>
  <div ref="wrapper" class="wrapper">
    <div>
      <slot></slot>
      <div class="loading" v-if="loading">上拉加载...</div>
    </div>
  </div>
</template>
<script>
import BScroll from "better-scroll";
export default {
  props: {
    probeType: {
      type: Number,
      default: 2
    },
    click: {
      type: Boolean,
      default: true
    },
    direction: {
      type: String,
      default: "vertical"
    },
    loading: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      scroll: null,
      loadingOpen: false
    };
  },
  methods: {
    
  },
  mounted() {
      if (!this.$refs.wrapper) {
        return;
      }
      this.scroll = new BScroll(this.$refs.wrapper, {
        probeType: this.probeType,
        click: this.click,
        scrollX: this.direction === "horizontal",
        scrollY: this.direction === "vertical"
      });
      this.$nextTick(() => {
        this.scroll.refresh();
      });
      this.scroll.on("scroll", () => {
        let { y, maxScrollY } = this.scroll;
        if (y < maxScrollY - 50) {
          this.loadingOpen = true;
          // 
          console.log("加载")
        } else if (y < maxScrollY - 20) {
          this.loadingOpen = false;
        }
      });
      this.scroll.on("scrollEnd", () => {
        this.loadingOpen = false;
      })
      this.scroll.on("touchEnd", () => {
        if (this.loadingOpen) {
          this.$emit("scrollLoad");
          this.$nextTick(() => {
            this.scroll.refresh();
          });
          this.loadingOpen = false;
        }
      })
    
    
  }
};
</script>
<style scoped lang="scss">
.wrapper {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.wrapper > div {
  position: relative;
}
.loading {
  width: 100%;
  height: 50px;
  background: #eee;
  position: absolute;
  bottom: -50px;
  left: 0;
  text-align: center;
  line-height: 50px;
}
</style>