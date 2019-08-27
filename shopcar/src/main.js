import Vue from 'vue'
import App from './App'
import router from "./router/index"
import store from "./store/index"
import "@/static/scss/common.scss";
import "@/static/scss/_minix.scss"
import plugins from "./plugins/index"
import Message from './plugins/message.js'
import VueAwesomeSwiper from 'vue-awesome-swiper'



import vantUI from 'vant-ui';

// import 'vant-ui/scss/base.scss'
import 'swiper/dist/css/swiper.css'




Vue.use(vantUI)

Vue.use(VueAwesomeSwiper, /* { default global options } */)

Vue.config.productionTip = false

Vue.use(plugins) // 插件挂载
Vue.use(Message) // 弹出框挂载

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
