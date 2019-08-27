<template>
    <div class="el-search" @click="toSearch">
        <p><span></span><input type="text" placeholder="输入你想搜索的商品"/></p>
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

        }
    },
    computed:{

    },
    methods:{
        toSearch(){
            this.$router.push("/search");
        }
    },
    created(){

    },
    mounted(){

    }
}
</script>
<style  lang="scss">
    .el-search{
        @include width(100%);
        @include height(44px);
        >p{
            @include width(90%);
            @include height(80%);
            border-radius: 20px;
            background: #f5f5f5;
            display: flex;
            margin: 0 auto;
            line-height: pxTorem(44px);
            >span{
                @include width(pxTorem(60px));
                @include height(100%);
                
            }
            >input{
                flex:1;
            }
        }
    }
    ::placeholder{
        color:#ccc;
        font-size:pxTorem(14px);
        
    }
</style>