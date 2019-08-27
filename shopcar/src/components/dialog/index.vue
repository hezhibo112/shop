<template>
    <div class="dialog" v-show="open">
        <div class="dialog-content">
            <div class="dialog-content-title">
                <p> {{message}}</p>
                <span v-if="showClose" @click="closeDialog">&times;</span>
            </div>
            <div class="dialog-content-body">
                <slot></slot>
            </div>
            <div class="dialog-content-btns" v-if="type!=='alert'">
                <button @click="sureFn">{{sure}}</button>
                <button @click="cancelFn">{{not}}</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        type:{
            type:String,
            default:"alert"
        },
        showClose:{
            type:Boolean,
            default:false
        },
        message:{
            type:String,
            default:''
        },
        sure:{
            type:String,
            default:'确定'
        },
        not:{
            type:String,
            default:"取消"
        },
        sureEvent:{
            type:Function,
            default:()=>{}
        },
        cancelEvent:{
            type:Function,
            default:()=>{}
        }
    },
    data(){
        return {
            open:false,
            timer:null
        }
    },
    methods:{
        sureFn(){
            this.sureEvent();
            this.closeDialog()
        },
        cancelFn(){
            this.cancelEvent();
            this.closeDialog()
        },
        openDialog(){
            this.open = true;
            this.timeClose();
        },
        closeDialog(){
            this.open = false;
            clearTimeout(this.timer);
        },
        timeClose(){
            if(this.type !== 'alert'){
                return ;
            }
            clearTimeout(this.timer);
            this.timer = setTimeout(()=>{
                this.closeDialog();
            },3000)
        }
    },
    created(){

    },
    mounted(){
        this.openDialog()
    },
    beforeDestroy(){
        clearTimeout(this.timer);
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
            p{
                flex:1;
            }
            >span{
                width: 50px;
                height: 100%;
            }
        }
    }
}
</style>