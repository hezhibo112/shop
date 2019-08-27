<template>
    <div class="list" >
        <dt @click="gotodetail(item)">
            <img :src="item.cover" alt=""/>
        </dt>
        <dd>
            <h4 :class="classify?classify:''">{{item.name}}</h4>
            <p>累计{{volume}}万份 / 已拼{{item.stock}}份</p>
            <p>
                <!-- <span v-for="(items,index) in specs" :key="index">{{items.key}}</span> -->
                <span>自营</span>
                <span>团购</span>
            </p>
            <div class="list-car">
                <p><span>￥</span><b>{{item.price}}</b><strong>{{item.oldPrice && item.oldPrice}}</strong></p>
                <span @click="gotoCar(item)">
                    <img src="../../static/img/car.png"/>
                </span>
            </div>
        </dd>
    </div>
</template>
<script>
import {mapState,mapActions} from "vuex"
export default {
    props:{
        item:{
            type:Object,
            default:{}
        },
        classify:{
            type:String,
            default:""
        }
    },
    computed:{
        specs(){
            return JSON.parse(this.item.specs);
        },
        volume(){
            return (this.item.volume/10000).toFixed(2)
        }
    },
    methods:{
        ...mapActions('car',['addCar']),
        gotoCar(item){
            let phone = JSON.parse(window.localStorage.getItem("phone"));
            if(phone){
                this.addCar({user_id:phone.userid,shop_id:item.id});
            }
            else{
                this.$router.push("/login")
            }
        },
        gotodetail(item){
          this.$router.push({
              path:"/detail",
              query:item
          })
        }
    }
}
</script>
<style lang="scss">
    .list{
        @include width( 100%);
        @include height(pxTorem(151px));
        text-indent:pxTorem(15px);
        display: flex;
        >dt{
            @include width( pxTorem(120px));
            @include height(pxTorem(120px));
            margin-top:pxTorem(17px);
            margin-right:pxTorem(20px);
            >img{
                @include width( 100%);
                @include height(100%);
            }
        }
        >dd{
            flex:1;
            display:flex;
            flex-direction: column;
            margin-top:pxTorem(15px);
            >h4{
                @include width( pxTorem(230px));
                @include height(pxTorem(25px));
                overflow: hidden;
                text-overflow:ellipsis;
                white-space: nowrap;
            }
            .classify{
                @include width( pxTorem(144px));
                @include height(pxTorem(25px));
                overflow: hidden;
                text-overflow:ellipsis;
                white-space: nowrap;
            }
            >p{
                @include width( 100%);
                @include height(pxTorem(20px));
                font-size:pxTorem(12px);
                color:#ccc;

                >span{
                    display: inline-block;
                    border-radius: 20px;
                    padding-right:pxTorem(15px);
                    color:#fff;
                    background: #FE3113;
                    margin-right:pxTorem(10px);
                }
            }
            >.list-car{
                flex:1;
                display: flex;
                margin-top:pxTorem(30px);
                >p{
                    flex:1;
                    >b{
                        font-size:pxTorem(24px);
                        color:#FE3113;
                        font-weight:500;
                    }
                    >span{
                        font-size:pxTorem(12px);
                        color:#FE3113;
                        
                    }
                    >strong{
                        color:#ccc;
                        text-decoration:line-through
                    }
                }
                >span{
                    @include width( pxTorem(92px));
                    @include height(100%);
                    text-align: center;
                    
                    >img{
                        @include width( pxTorem(33px));
                        @include height( pxTorem(33px));
                    }
                }
            }
        }
    }
</style>


