<template>
    <div class="banner">
        <swiper ref="mySwiper" :options="swiperOption" class="swiper-container" >
            <!-- slides -->
            <swiper-slide class="swiper-item" v-for='item of swiperList' :key='item.id'>
                <img class='swiper-img' :src='item.image' :key="item.active_name" />
            </swiper-slide>
            <!-- Optional controls ,显示小点-->
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>
<script>
import 'swiper/dist/css/swiper.css'
 
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
    props:{
        swiperList:{
            type:Array,
            default:[]
        }
    },
    created(){
       
    },
    data(){
        return {
            swiperOption:{
                // 参数选项,显示小点
                notNextTict:true,
                //循环
                loop:true,
                //每张播放时长3秒，自动播放
                autoplay:true,
                //滑动速度
                speed:1000,
                // delay:1000
            },
        }
    },
    components: {
        swiper,
        swiperSlide
    },
    computed:{
        
    }
}
</script>

<style lang="scss">
    .banner{
        width: 100%;
        height: pxTorem(140px);
        background: #eee;
    }
    img{
        width: 100%;
        height: pxTorem(140px);
    }
</style>
