import api from "@/api/";
const classification = {
    namespaced: true,
    state: {

        shopTypeList: [],

        selectType: [],

        type_id: "",

        children: [],

        childrenType: []
    },
    mutations: {

        set_shopType_mutations(state, opt) {
            state.shopTypeList = opt;
            opt[0].children.unshift({
                name: "全部",
                id: "all",
                parent_id: ""
            })
            state.children = opt[0].children;

        },


        set_selectType_mutations(state, opt) {
            state.selectType = opt;
        },
        set_shopChildren_mutations(state, opt) {
            state.children = opt;
        },

        set_childrenType_mutations(state, opt) {
            state.childrenType = opt
        }
    },
    getters: {

        get_shopType_list(state) {
            return state.shopTypeList
        },

        get_selectType_list(state) {
            return state.selectType
        }
    },
    actions: {

        set_shopType_actions({
            commit
        }) {
            api.ShopType().then(({
                data
            }) => {
                commit("set_shopType_mutations", data)
            })
        },

        set_selectType_actions(state, obj) {
            api.SelectType(obj).then(({
                data
            }) => {
                state.commit("set_selectType_mutations", data)
            });
        },

        set_childrenType_actions(state, item) {

            api.SelectType(item).then(({
                data
            }) => {
                state.commit("set_selectType_mutations", data)
            });
        }
    },

}
export default classification;