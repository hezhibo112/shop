import Vuex from "vuex";
import Vue from "vue"
import home from "./modules/home"
import classification from "./modules/classification"
import car from "./modules/car"
Vue.use(Vuex);


const store = new Vuex.Store({
    modules:{
        home,
        classification,
        car
    }
})

export default store;