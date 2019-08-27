<template>
    <div class="search" @click="toSeat">
        <p>
            <!-- {{window.sessionStorage.getItem("address")}} -->
            {{local}}
        </p>
        <span >
            
        </span>
    </div>
</template>
<script>
export default {
    props:{
        local:{
            type:String,
            default:""
        }
    },
    methods:{
        toSeat() {
            this.$router.push("/seat");
        },
    }
}
</script>
<style lang="scss">
    .search{
        width: 100%;
        height: pxTorem(49px);
        display: flex;
        p{
            text-indent:pxTorem(8px);
            flex:1;
            line-height: pxTorem(49px);
            color:#999;
            font-size:pxTorem(14px);
        }   
        span{
            line-height: pxTorem(49px);
            width: pxTorem(30px);
            height: 100%;
            background: url("../../static/img/icon.png") no-repeat;  
            background-position:-88px -100px;
        }
    }
</style>

