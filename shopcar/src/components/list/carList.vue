<template>
    <dl class="car-list">
        <span><span :class="['ischeck',checked?'actived':'']" @click="changeCheck" ></span></span>
        <dt>
            <img :src="item.cover"/>
        </dt>
        <dd>
            <h4>{{item.name}}</h4>
            <span>规格：1.2kg/盒</span>
            <li>
                <p>
                    <span>￥</span>
                    <b>{{item.price}}</b>
                    <strong>100</strong>
                </p>
                <car-add :count="count" :id="item.id"></car-add>
            </li>
        </dd>
    </dl>
</template>
<script>
import {mapMutations} from "vuex"
export default {
    props:{
        item:{
            type:Object,
            default:{}
        },
        count:{
            type:Number,
            default:0
        },
        index:{
            type:Number,
            default:0
        },
        checked:{
            type:Boolean,
            default:false
        }
    },
    components:{

    },
    data(){
        return {
            check:false,
        }
    },
    computed:{

    },
    methods:{
        ...mapMutations('car',['checkone']),
        changeCheck(){
            this.checkone(this.index);
        }
    },
    created(){
        
    },
    mounted(){

    }
}
</script>
<style  lang="scss">
.car-list{
    @include width(100%);
    @include height(pxTorem(120px));
    // text-indent:pxTorem(15px);
    display: flex;
    align-items: center;
    background: #fff;
    >span{
        @include width(pxTorem(30px));
        @include height(100%);
        text-align: center;
        line-height: pxTorem(120px);
        margin:0 pxTorem(5px);
        >.ischeck{
            display: inline-block;
            @include width(pxTorem(20px));
            @include height(pxTorem(20px));
            border:1px solid #ccc;
            border-radius: 50%;
        }
    }
    >dt{
        @include width(pxTorem(80px));
        @include height(pxTorem(80px));
        margin:0 pxTorem(10px);
        >img{
            @include width(100%);
            @include height(100%);
        }
    }
    >dd{
        flex:1;
        >h4{
            @include width(80%);
            @include height(30%);
            font-size:pxTorem(16px);
            font-weight: 600;
            overflow: hidden;
            text-overflow:ellipsis;
            white-space: nowrap;
        }
        >span{
            display: inline-block;
            @include width(100%);
            @include height(20%);
            font-size:pxTorem(12px);
            color:#ccc;
        }
        >li{
            @include width(100%);
            @include height(50%);
            display: flex;
            align-items: center;
            >p{
                @include width(50%);
                @include height(100%);
                >span{
                    color:#f90;
                    font-size:pxTorem(14px);
                }
                >b{
                    color:#f90;
                    font-size:pxTorem(18px);
                }
                >strong{
                    color:#ccc;
                    font-size:pxTorem(14px);
                }
            }
            >.add{
                flex:1;
                
            }
        }
    }
}
.actived{
    background: #f90;
}
</style>