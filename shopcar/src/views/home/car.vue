<template>
    <div class="wrap car">
        <Header>购物车</Header>
        <main class="main" v-if="phone">
            <move-list :height="height" :id="item.shopid" v-for="(item,index) in carList" :key="index" >
                <car-list  
                    :item="item.shopdata" 
                    :index="index"
                    :checked="item.checked"
                    :count="item.count">
                </car-list>
            </move-list>
            
        </main>
        <div class="main phone" v-else>
            您还没有登录，现在去-<router-link to="/login">登录</router-link>
        </div>
        <div class="sum">
            <span>
                <span :class="['ischeck',allCheck?'actived':'']" @click="changeCheck" ></span>
                <b>全选</b>
            </span>
            <p>合计<span>￥</span><b>{{allPrice}}</b></p>
            <button>结算({{shopCount}})</button>
        </div>
        <Footer></Footer>
    </div>
</template>
<script>
import {mapActions,mapState,mapGetters, mapMutations} from "vuex"
export default {
    data(){
        return {
            phone:"",
            height:120
        }
    },
    async mounted(){
        this.phone = JSON.parse(window.localStorage.phone);
        await this.getShopList({user_id:this.phone.userid});
    },
    computed:{
        ...mapState('car',['carList','allCheck','allPrice','shopCount']), 
    },
    methods:{   
        ...mapActions('car',['getShopList']),
        ...mapMutations('car',['setallCheck']),
        changeCheck(){
            this.setallCheck();
        }
    }
}
</script>

<style lang="scss">
.car{
    background: #f8f8f8;
    header{
        background: #f8f8f8;
    }
}
.phone{
    @include width(100%);
    @include height(100%);
    >img{
        @include width(100%);
        @include height(100%);
    }
}
.sum{
    @include width(100%);
    @include height(pxTorem(50px));
    display: flex;;
    background: #fff;
    
    >span{
        @include width(30%);
        @include height(100%);
        justify-content: center;
        display: flex;
        align-items: center;
        font-size:pxTorem(14px);
        >b{
            font-size:pxTorem(14px);
            margin-left:pxTorem(10px);
        }
        >.ischeck{
            display: inline-block;
            @include width(pxTorem(20px));
            @include height(pxTorem(20px));
            border:1px solid #999;
            border-radius: 50%;
        }
    }
    >p{
        @include width(40%);
        @include height(100%);
        font-size:pxTorem(14px);
        display: flex;
        justify-content: center;
        align-items: center;
        >span{
            color:#f90;
            font-size:pxTorem(14px);
        }
        >b{
            color:#f90;
            font-size:pxTorem(18px);
        }
    }
    >button{
        @include width(30%);
        @include height(100%);
        background: #f90;
        color:#fff;
        border:0;
        font-size:pxTorem(14px);
    }
}
.actived{
    background: #f90;
}

</style>
