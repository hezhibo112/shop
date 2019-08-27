<template>
    <div class="wrap">
        <div class="main">
            <div class="login_title">
                手机号登录
            </div>
            <div class="phone">
                <input type="text" v-model="phone" placeholder="手机号">
            </div>
            <button :class="isCheck?'checkcode':''" @click='showFn'>获取验证码</button>
            <checkCode v-if='open' :phone='phone'></checkCode>
        </div>
    </div>
</template>
<script>
import api from "../../api/index.js"
export default {
    props:{

    },
    components:{

    },
    data(){
        return {
            open:false,
            phone:"",
            isCheck:true,
            timer:null
        }   
    },
    computed:{

    },
    methods:{
        showFn(){
            this.open = true;
            this.isCheck = false;   
            this.timer = setTimeout(()=>{
                this.isCheck = true;
                this.timer = null;
            },60000)
            api.getCheckCode({phone:this.phone}).then(res=>{
                if(!res.code){
                    this.$message({
                        type:"alert",
                        message:"手机号没有注册"
                    })
                }
            
            })
        },
        

    },
    created(){
        
    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
.main{
     @include sizing;
     padding: pxTorem(0px) pxTorem(30px);
     .login_title{
        @include width(100%);
        @include height(pxTorem(66px));
        font-size: pxTorem(30px);
        @include box_flex;
        @include align;

    }
    button{
        @include width(100%);
        @include height(pxTorem(40px));
        border-radius: pxTorem(20px);
        background: #EEEEEE;
        color:#D0D0D0;
        border: none;
        outline: none;
        margin-top:pxTorem(48px) ;
    }
    .checkcode{
         background:orangered;
         color:#fff;
    }
    .phone{
        @include width(100%);
        @include height(pxTorem(84px));
        @include box_flex;
        @include align;
        @include sizing;
        border-bottom: pxTorem(2px) solid #F5F5F5;
        @include setBottomLine(#F5F5F5);
        input{
            font-size: pxTorem(14px);
            @include width(100%); 
            @include height(pxTorem(40px));
            color: #B2B2B2;
        }
    }
}



</style>