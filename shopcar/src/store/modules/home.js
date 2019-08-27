import api from "@/api/";
const home={
    namespaced: true,
    state: {
        //轮播图数据
        bannerList: [],
        //首页商品数据
        shopList:[]

    },
    mutations: {
        // 设置首页的商品数据
        set_shop_mutations(state,opt){
            state.shopList=opt;
        },
        // 首页的banner数据
        set_banner_mutations(state,opt){
            state.bannerList=opt;
        }
    },
    getters:{
        // 拿到首页的商品数据
        get_shop_list(state){
            return state.shopList
        },
        /// 拿到首页的banner
        get_banner_list(state){
            return state.bannerList
        }
    },
    actions: {
        //获取首页数据
        set_shop_actions({commit},obj){
            api.getHomeShop(obj).then(({ data }) => {
               commit("set_shop_mutations",data)
            })
        },
        //获取banner 图片数据
        set_banner_actions({commit}){
            api.Banner().then(({ data }) => {
                data = data.filter(item => {
                  if (new Date(item.end_time) * 1 > new Date() * 1) {
                    return item;
                  }
             });
             commit("set_banner_mutations",data)
            });
        },
    },

}
export default home;