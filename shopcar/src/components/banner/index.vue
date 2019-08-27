<template>
    <div class="banner">
        <swiper ref="mySwiper" :options="swiperOption" class="swiper-container" >
            <swiper-slide class="swiper-item" v-for='item of swiperList' :key='item.id'>
                <img class='swiper-img' :src='item.image' :key="item.active_name" />
            </swiper-slide>
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
                notNextTict:true,
                loop:true,
                autoplay:true,
                speed:1000,
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
