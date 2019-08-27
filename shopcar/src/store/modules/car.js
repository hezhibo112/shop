import api from "@/api/";
const reducePrcie = (state) => {
    return state.carList.reduce((prev, item) => {
        let {
            price
        } = item.shopdata;
        let {
            count,
            checked
        } = item;
        prev += checked ? price * count : 0;
        return prev;
    }, 0);
}

const reduceCount = (state) => {
    return state.carList.reduce((prev, item) => {
        let {
            count,
            checked
        } = item;
        prev += checked ? count : 0;
        return prev;
    }, 0);
}

const car = {
    namespaced: true,
    state: {
        carList: [],
        allPrice: 0,
        allCheck: false,
        shopCount: 0
    },
    mutations: {

        setCarList(state, payload) {
            state.carList = payload.filter(item => {
                item.checked = (state.carList.length && state.carList.find(val => val.id === item.id).checked) || false;
                return item;
            });
            state.allPrice = reducePrcie(state);
            state.shopCount = reduceCount(state);
        },

        checkone(state, index) {
            state.carList[index].checked = !state.carList[index].checked;
            state.allCheck = state.carList.every(item => item.checked);
            state.allPrice = reducePrcie(state);
            state.shopCount = reduceCount(state);
        },

        setallCheck(state) {
            state.allCheck = !state.allCheck;
            state.carList.map(item => item.checked = state.allCheck);
            state.allPrice = reducePrcie(state);
            state.shopCount = reduceCount(state);
        },

    },
    getters: {
        getcarList(state) {
            return state.carList;
        }
    },
    actions: {

        async addCar(state, data) {
            await api.addCarShop(data)
        },

        async removeCar(state, data) {
            await api.removeShopCount(data)
        },

        getShopList(state, data) {
            api.getCarData(data).then(res => {
                state.commit("setCarList", res.data);
            })
        },
    }
}
export default car;