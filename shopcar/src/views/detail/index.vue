<template>
    <div>
        <div class="detail">
            <div class="img"><img :src="arr.cover"/></div>
            <h4>{{arr.name}}</h4>
            <div class="price">
                <span>{{arr.price}}</span>
                <span>已售{{arr.volume}}</span>
            </div>
            <div class="addcar">
                <span></span>
                <span></span>
                <button class="btn1">加入购物车</button>
                <button class="btn2">直接够买</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:{

    },
    components:{

    },
    data(){
        return {
            arr:[]
        }
    },
    computed:{

    },
    methods:{
        
    },
    created(){ 
       let arr = this.$route.query;
       this.arr = arr;
       console.log(this.arr)
    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
.detail{
    width:100%;
    height: 100%;
}
    .img{
        width:100%;
        height: pxTorem(400px);
        img{
            width:100%;
            height: pxTorem(400px);
        }
    }
    h4{
        width:100%;
        height: pxTorem(70px);
        line-height: pxTorem(70px);
        font-size: pxTorem(24px);
    }
    .price{
        width:100%;
        height: pxTorem(50px);
        line-height: pxTorem(50px);
        display: flex;
        justify-content: space-around;
        font-size: pxTorem(20px);
        span:nth-child(1){
            margin-left:-60px;
            color:red;
        }
        span:nth-child(2){
            margin-left:50px;
        }
    }
    .addcar{
        width:100%;
        height: pxTorem(60px);
        position:absolute;
        bottom:5px;
       .btn1{
            background: rgb(255,186,47);
            border:none;
            width:50%;
            height: 100%;
            color:white;
            font-size: pxTorem(20px);
        }
        .btn2{
            background: rgb(254,50,18);
            border:none;
            width:50%;
            font-size: pxTorem(20px);
            height: 100%;
            color:white;
        }
    }
</style>