import api from "@/api/";
const home = {
    namespaced: true,
    state: {

        bannerList: [],

        shopList: []

    },
    mutations: {

        set_shop_mutations(state, opt) {
            state.shopList = opt;
        },

        set_banner_mutations(state, opt) {
            state.bannerList = opt;
        }
    },
    getters: {

        get_shop_list(state) {
            return state.shopList
        },

        get_banner_list(state) {
            return state.bannerList
        }
    },
    actions: {

        set_shop_actions({
            commit
        }, obj) {
            api.getHomeShop(obj).then(({
                data
            }) => {
                commit("set_shop_mutations", data)
            })
        },

        set_banner_actions({
            commit
        }) {
            api.Banner().then(({
                data
            }) => {
                data = data.filter(item => {
                    if (new Date(item.end_time) * 1 > new Date() * 1) {
                        return item;
                    }
                });
                commit("set_banner_mutations", data)
            });
        },
    },

}
export default home;