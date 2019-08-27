import Vue from "vue";
import Router from "vue-router";
import Login from "../views/login/index"
import Home from "../views/home/index"
import Classify from "../views/home/classify"
import Car from "../views/home/car"
import My from "../views/home/my"
import Seat from "../views/seat/index"
import Search from "../views/search/index"
import Detail from "../views/detail"
Vue.use(Router);


const router=new Router({
    mode:"history",
    routes:[
        {
            path:"/",
            redirect:"home"
        },
        {
            path:"/login",
            name:"login",
            component:Login
        },
        {
            path:"/home",
            name:"home",
            component:Home
        },
        {
            path:"/classify",
            name:"classify",
            component:Classify
        },
        {
            path:"/car",
            name:"car",
            component:Car
        },
        {
            path:"/my",
            name:"my",
            component:My
        },
        {
            path:"/seat",
            name:"seat",
            component:Seat
        },
        {
            path:"/search",
            name:"search",
            component:Search
        },
        {
            path:"/detail",
            name:"detail",
            component:Detail
        }
    ]
})

export default router;