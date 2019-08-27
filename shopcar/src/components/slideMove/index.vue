<template>
  <div
    class="slide"
    :style="{
      height:height+'px'
  }"
    @touchstart="touchstart"
    @touchmove="touchmove"
    @touchend="touchend"
    ref="slide"
  >
    <div :style="{transform: `translateX(${pos.movex}px)`}" class="slide-box">
      <slot></slot>
    </div>
    <div
      class="slide-btn"
      :style="{
        height:height+'px',
        right:`${-80-pos.movex}px`
    }"
    @click="delShopCar"
    >删除</div>
  </div>
</template>
<script>
import {mapActions,mapMutations} from "vuex";
export default {
  props: {
    height: {
      type: Number
    },
    id:{
      type: String
    }
  },
  components: {},
  data() {
    return {
      pos: {
        startx: 0,
        starty: 0,
        movex: 0,
        movey: 0,
        curx: 0,
        cury: 0
      }
    };
  },
  computed: {},
  methods: {
    ...mapActions("car",["del_removeShop_actions"]),
    ...mapMutations("car",["del_removeShop_mutations"]),
    touchstart(e) {
      let { clientX: x, clientY: y } = e.touches[0];
      this.pos.startx = x;
      this.pos.starty = y;
    },
    touchmove(e) {
      let { clientX: x, clientY: y } = e.touches[0];
      this.pos.curx = x;
      this.pos.cury = y;
    },
    touchend() {
      let movex = this.pos.curx - this.pos.startx;
      let movey = this.pos.cury - this.pos.starty;
      const slide =this.$refs['slide'];
      if (Math.abs(movey) > 10) {
        return;
      }
      if (movex > 20) {
        this.pos.movex = 0;
      }
      if (movex < 20) {
        document.querySelectorAll('.slide').forEach(item=>{
            if(slide!==item){
                item.querySelector('.slide-box').style.transform=`translateX(0px)`;
                item.querySelector('.slide-btn').style.right='-80px';
            }
        })
        this.pos.movex =- 80;
        slide.querySelector('.slide-box').style.transform=`translateX(${this.pos.movex}px)`;
        slide.querySelector('.slide-btn').style.right=`${-80-this.pos.movex}px`
      }
    },
    delShopCar(){
      
    }
  },
  
  created() {},
  mounted() {}
};
</script>
<style lang="scss">
.slide {
  @include width(100%);
  @include absolute(relative);
  @include hidden;
  > div {
    transition: all 0.2s linear;
  }
  .slide-btn {
    @include absolute(absolute);
    background: red;
    color: #fff;
    color: #fff;
    font-size: pxTorem(12px);
    width: pxTorem(80px);
    top: 0;
    right: -80px;
    line-height: pxTorem(128px);
    @include center(center);
  }
}
</style>