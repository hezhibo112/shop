<template>
    <div class="dialog" v-if="open">
        <div class="dialog-content">
            <div class="dialog-content-title">
                请输入验证码
            </div>
            <div class="dialog-content-body">
                <div class="checkIpt">
                    <p>此验证码发送至{{phone}}</p>
                    <div class="password-wrapper">
                        <input type="tel" class="input-box" v-model="checkcode" maxlength="6" @keyup="inputNumber">
                        <ul class="show-ul">
                            <li :class="['show-li',{'active':index+1 === numList.length}]" v-for="(i,index) in 6" :key="index">{{numList[index]}}</li>
                        </ul>
                    </div>
                    <p>{{second}}秒后可重新发送</p>
                </div>
            </div>
            <div class="dialog-content-btns">
                <div :class="flag ? 'subactive':''" 
                    :disabled="flag"
                    @click="getCheck"
                    value="获取验证码"
                    >获取验证码</div>
            </div>
        </div>
    </div>
</template>
<script>
import api from "../../api/index.js"
import { setInterval, clearInterval } from 'timers';
export default {
    props:{
        phone:{
            type:String,
            default:""
        }
    },
    data(){
        return {
            open:true,
            flag:true,
            numList:[],
            checkcode:"",
            second:60,
            timer:null
        }
    },
    mounted(){
        this.timers();
    },
    methods:{
        getCheck(){
            if(!this.flag){
                this.submitFn();
            }
        },
        submitFn(){
            this.open = false;
            api.getLogin({phone:this.phone,checkcode:this.checkcode}).then(res=>{
                let {code} = res;
                if(code){
                    this.$message({
                        message:"登录成功",
                        type:"alert"
                    })
                    window.localStorage.phone = JSON.stringify(res.data);
                    window.localStorage.token = res.data.token
                    this.$router.push("/home");
                }
                else{
                     this.$message({
                        message:"可能是验证码输入有误",
                        type:"alert"
                    })
                }
            })
        },
        timers(){
            this.timer = setInterval(()=>{
            this.second = --this.second;
                if(!this.second){
                    clearInterval(this.timer);
                    this.timer = null;
                    this.timer = 60;
                }
            },1000)
        },
        inputNumber(res) {  
            if ((this.numList.length < 6) && (res.key !== "Backspace")) {
                this.numList.push(res.key);
            }
            if(this.numList.length === 6){
                this.submitFn();

            }
            if (res.key === "Backspace") {
                this.numList.pop();
            }

        },
    }
}
</script>
<style scoped lang="scss">
.dialog{
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.4);
    position: fixed;
    top: 0;
    left: 0;
    .dialog-content{
        width: 80%;
        border-radius: 5px;
        background: #fff;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        padding: 10px;
        .dialog-content-title{
            width: 100%;
            display: flex;
            font-size:24px;
            p{
                flex:1;
            }
            >span{
                width: 50px;
                height: 100%;
            }
        }
        .dialog-content-body{
            padding-top:10px;
        }
        .dialog-content-btns{
            width: 100%;
            height: 40px;
            text-align: center;
            >div{
                width: 90%;
                height: 40px;
                border-radius: 30px;
                background: #f90;
                border:0;
                color:#fff;
                text-align: center;
                left: 40px;
                font-size:14px;
                line-height: 40px;
            }
        }
    }
}
.checkIpt{
    font-size:pxTorem(16px);
    @include width(100%);
    @include height(pxTorem(140px));
    p{
        @include width(100%);
        @include height(pxTorem(40px));
        font-size:pxTorem(14px);
        color:#666;
    }
    .password-wrapper{
        input{
            @include width(90%);
            @include height(pxTorem(40px));

        }
    }
    
}
.password-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  .input-box {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    color: transparent;
    opacity: 0;
    // width: 100%;
    // visibility: hidden;
  }
  .show-ul {
    flex: 1;
    display: flex;
    height: 50px;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 5px;
    .show-li {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      border-right: 1px solid #ccc;
      &:last-child {
        border-right: none;
      }
    }
  }
}
.active{
    border:1px solid #f90;
}
.subactive{
    background: #ccc!important;
}
</style>