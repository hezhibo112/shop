<template>
    <div class="bscroll">
        <div>
            <slot></slot>
        </div>
    </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
    props:{

    },
    components:{

    },
    data(){
        return {
            satrY: 0
        }
    },
    computed:{

    },
    methods:{

    },
    created(){

    },
    mounted(){
        this.BScroll = new BScroll('.bscroll',{
            probeType: 3,
            click: 3,
            startY: this.satrY
        })
        
        let that = this;
        //手指松开
        this.BScroll.on('touchEnd',function(){
            let maxY = Math.abs(this.maxScrollY);
            let Y = Math.abs(this.y);
            this.satrY = maxY;

            if(Y >= maxY+100){
                that.$emit('shopData')
            }
        })

        //滚动结束
        this.BScroll.on('scrollEnd',function(){
            this.refresh();
        })
    }
}
</script>
<style scoped lang="scss">
    .bscroll{
        width: 100%;
        height: 100%;
    }
</style>