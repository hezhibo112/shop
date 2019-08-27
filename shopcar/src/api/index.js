import axios from "../utils/axios"
export default {
    // 获取验证码
    getCheckCode:(data)=>axios('post',"/api/user/checkCode",{...data}),
    // 登录
    getLogin:(data)=>axios('post',"/api/user/login",{...data}),

    // 获取banner数据
    getBanner:()=>axios('get',"/api/home/banner"),
    // 获取首页数据
    getHomeShop:(data)=>axios('get',"/api/home/shop",{...data}),
    // 获取分类页面分类
    ShopType:()=>axios('get',"/api/shop/shopType"),
    // 筛选分类页面商品
    SelectType:(data)=>axios('get',"/api/shop/selectType",{...data}),

    // 添加购物车
    addCarShop:(data)=>axios('post',"/api/car/addCar",{...data}),
    // 删除购物车商品件数
    removeShopCount:(data)=>axios('post',"/api/car/removeCar",{...data}),
    // 删除购物车商品
    removeShop:(data)=>axios('post',"/api/car/removeShop",{...data}),
    // 获取购物车数据
    getCarData:(data)=>axios('get',"/api/car/getCar",{...data})
}