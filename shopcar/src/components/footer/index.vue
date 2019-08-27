<template>
    <footer>
        <router-link
             v-for="(item,index) in footerList"
             :key="index"
             :to="item.link" 
             tag="div" 
             class="footer_item"
            >
             <span  :style="'background-position-x:'+item.icon"></span>
            <strong>{{item.title}}</strong>
        </router-link>
    </footer>
</template>
<script>
export default {
    props:{

    },
    components:{

    },
    data(){
        return {
            footerList:[
                {
                    title:"首页",
                    link:"/home",
                    icon:"-9px"
                },
                {
                    title:"分类",
                    link:"/classify",
                    icon:"-93px"
                },
                {
                    title:"购物车",
                    link:"/car",
                    icon:"-181px"
                },
                {
                    title:"我的",
                    link:"/my",
                    icon:"-265px"
                },

            ]
        }
    },
    computed:{

    },
    methods:{

    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
    footer{
    @include width(100%);
    @include height(pxTorem(50px));
    @include box_flex;
    .footer_item{
        flex:1;
        @include box_flex;
        @include direction(column);
        @include align;
        @include sizing;
        color:#666666;
        font-size: 12px;
        span{
            display: block;
            margin-top: pxTorem(7px);
            @include width(pxTorem(28px));
            @include height(pxTorem(25px));
            background: url("../../static/img/icon.png") no-repeat;  
            background-position-y:-431px;  
        }
    }
    .router-link-active{
        color: #FE583F;
        span{
             background-position-y:-471px;
        }
    }
}


</style>