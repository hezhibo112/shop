<template>
    <div class="add">
        <template v-if="count">
            <span @click="setAddCar(false)">-</span>
            <span>{{count}}</span>
        </template>
        <span @click="setAddCar(true)">+</span>
    </div>
</template>
<script>
import {mapActions} from "vuex"
export default {
    props:{
        count:{
            type:Number,
            default:1
        },
        id:{
            type:Number,
            default:0
        }
    },
    data(){
        return {
            addFlag:true,
            removeFlag:true,
            phone:null
        }
    },
    methods:{
        ...mapActions('car',['addCar','getShopList','removeCar']),
        async setAddCar(flag){
            if(flag){
                console.log('add')
                this.addFlag = false;
                await this.addCar({shop_id:this.id,user_id:this.phone.userid});
                await this.getShopList({user_id:this.phone.userid})
                this.addFlag = true;
            }
            else{
                console.log('remove');
                if(this.count <= 1) return;
                this.removeFlag = false;
                await this.removeCar({shop_id:this.id,user_id:this.phone.userid});
                await this.getShopList({user_id:this.phone.userid});
                this.removeFlag = true;
            }
        }
    },
    created(){
        this.phone = JSON.parse(window.localStorage.getItem("phone"));
    }
}
</script>
<style lang="scss">
    .add{
        @include width(100%);
        @include height(100%);
        display: flex;
        >span{
            flex:1;
        }
    }

</style>

