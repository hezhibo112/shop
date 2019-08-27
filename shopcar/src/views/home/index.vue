<template>
    <div class="wrap" ref="wrap">
        <div class="map" v-if="mapimg">
            <img src="../../static/img/定位.png"/>
        </div>
        <Header>校园超市</Header>
        <main class="main">
            <Scrolltop @shopData="shopData">
                <Search :local="local"/>
                <My-swiper :swiperList="banner"/>
                <NavList/>
                <div class="hot-day">
                    <div class="hot-top">
                        <p>
                            <img src="../../static/img/gou.png" alt="">
                        </p>
                        <span>大家都在买</span>
                    </div>
                    <div class="hot-bottom">
                        <a href="https://i.dmall.com/#dshopmodules/view/weixin/weixin:code=i8HtDkXKzcpgJT&erpStoreId=206&dmfrom=wx&from=wx&shareKey=1565924972873" >
                            <img src="../../static/img/生鲜.png"/>
                        </a>
                        <a href="https://i.dmall.com/#dshopmodules/view/weixin/weixin:code=eg83yJzumh&erpStoreId=206&dmfrom=wx&from=wx&shareKey=1565924972873" >
                            <img src="../../static/img/shipin.png"/>
                        </a>
                        <a href="https://i.dmall.com/#dshopmodules/view/weixin/weixin:code=JypSDxYUBW6&erpStoreId=206&dmfrom=wx&from=wx&shareKey=1565924972873" >
                            <img src="../../static/img/jiafang.png"/>
                        </a>
                    </div>
                </div>
                <div class="main-list">
                    <List v-for="item in shopList" 
                    :key="item.id" 
                    :item="item"/>
                </div>
            </Scrolltop> 
        </main>
        <Footer></Footer>
        <!-- <button @click="dialogShow">弹框出现</button> -->
    </div>
</template>
<script>
import api from "@/api/index"
import {mapGetters,mapState,mapActions} from "vuex"
import { getMap } from "@/utils/map.js"
export default {
    name:"home",
    data(){
        return {
            banner:[],
            pageid:0,
            limit:10,
            mapimg: true, // 进入首页之前的位置获取
            local: "" // 位置的本地存储
        }
    },
    computed:{
        ...mapGetters("home",["get_shop_list"]),
        ...mapState('home',['shopList'])
    },
    methods:{
        ...mapActions("home",["set_shop_actions"]),
        // 获取首页商品数据
        shopData(){
            this.set_shop_actions({limit:this.limit+=5,pageid:this.pageid++});
        },
        // 登陆后进行位置定位获取
        init() {
            const that = this;
            this.geolocation.getCurrentPosition((status, result) => {
                // 获取到进入首页
                if (status === "complete") {
                    window.localStorage.setItem("local", result.formattedAddress);
                    this.local = window.localStorage.getItem("local");
                    this.mapimg = false;
                } else { // 没有的话手动输入地址信息
                    that.$router.push("/seat");
                }
            });
        },
        // 判断是否要定位
        async mapFn() {
            let local = window.localStorage.getItem("local"); // 本地存储中是否有位置信息
            if (local) {
                this.mapimg = false;
                this.local = local;
            } else {
                //触发获取AMap
                this.geolocation = await getMap("AMap.Geolocation");
                //获取自动定位函数
                this.init();
            }
        }
    },
    created(){
        api.getBanner().then(res=>{
            let data = res.data.filter(item=>{
                return (new Date(item.start_time)*1 <= new Date()*1) &&  (new Date()*1 <= new Date(item.end_time)*1)
            })
            this.banner = data
        })
        
        this.set_shop_actions({limit:this.limit,pageid:this.pageid});
        //判断是否要定位
        this.mapFn();
    }
}
</script>
<style lang="scss">
    .map{
        @include width(100%);
        @include height(100%);
        background: #ccc;
        position: fixed;
        top:0;
        left:0;
        z-index:99;
        >img{
            @include width(100%);
            @include height(100%);
        }
    }
    .hot-day{
        @include width(100%);
        @include height(pxTorem(192px));
        display: flex;
        flex-direction: column;
        >.hot-top{
            @include width(100%);
            @include height(pxTorem(40px));
            display: flex;
            align-items: center;
            >p{
                margin-left:pxTorem(20px);
                @include width(pxTorem(80px));
                @include height(100%);
                line-height: pxTorem(40px);
                >img{
                    @include width(pxTorem(67px));
                    @include height(pxTorem(17px));
                }
            }
            >span{
                flex:1;
                font-size:pxTorem(14px);
            }
        }
        >.hot-bottom{
            flex:1;
            display: flex;
            a{
                @include width(33.33%);
                @include height(100%);
                >img{
                    @include width(100%);
                    @include height(100%);
                }
            }
        }
    }
</style>

