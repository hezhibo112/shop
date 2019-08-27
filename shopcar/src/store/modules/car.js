import api from "@/api/";

//用来计算总价
// const allPrice=(state)=>{
//     return state.allCar.reduce((prev,cur)=>prev+(cur.flag && cur.shopdata.price*cur.count),0)
// }
// //用来计算总数
// const allCount=(state)=>{
//     return state.allCar.reduce((prev,cur)=>prev+(cur.flag && cur.count),0)
// }

//用来计算总价
const reducePrcie = (state)=>{
    return state.carList.reduce((prev,item)=>{
        let {price} = item.shopdata;
        let {count,checked} = item;
        prev += checked ? price * count : 0;
        return prev;
    },0);
}
//用来计算总数
const reduceCount = (state)=>{
    return state.carList.reduce((prev,item)=>{
        let {count,checked} = item;
        prev += checked ? count : 0;
        return prev;
    },0);
}

const car = {
    namespaced: true,
    state:{
        carList:[],
        allPrice:0,
        allCheck:false,
        shopCount:0
    },
    mutations:{
        // 设置购物车列表
        setCarList(state,payload){
            state.carList = payload.filter(item=>{
                item.checked = (state.carList.length && state.carList.find(val=>val.id===item.id).checked) || false;
                return item;
            });
            state.allPrice = reducePrcie(state);
            state.shopCount = reduceCount(state);
        },
        // 点击每一件商品的选中状态
        checkone(state,index){
            state.carList[index].checked = !state.carList[index].checked;
            state.allCheck = state.carList.every(item=>item.checked);
            state.allPrice = reducePrcie(state);
            state.shopCount = reduceCount(state);
        },
        // 点击全选商品的状态
        setallCheck(state){
            state.allCheck = !state.allCheck;
            state.carList.map(item=>item.checked = state.allCheck);
            state.allPrice = reducePrcie(state);
            state.shopCount = reduceCount(state);
        },
        
    },
    getters:{
        getcarList(state){
            return state.carList;
        }
    },
    actions:{
        // 添加购物车件数
        async addCar(state,data){
            await api.addCarShop(data)
        },
        // 删除购物车件数
        async removeCar(state,data){
            await api.removeShopCount(data)
        },
        // 获取购物车列表
        getShopList(state,data){
            api.getCarData(data).then(res=>{
                state.commit("setCarList",res.data);
            })
        },
    }
}
export default car;