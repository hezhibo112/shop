1.项目名称:多点超市

2.主要作用:满足各种人类人群的服务 不用在亲自去超市买东西 很快捷 很方便 实现了在网上购物的便捷

3.vue-cli 3.0
多点超市项目的各种接口封装
2019-08-30 

4.技术栈
vue + vuex + vue-router + webpack + ES6+ sass + flex + flexble + icon + axios + element-ui

5.项目运行
git网址: https://github.com/hezhibo112/shop

运行服务:npm run serve

6.关于接口数据
此项目的所有接口数据都来源于配套的后台系统

clinet
|——build
|——config
|——node_modules
|——src                       // 主入口文件夹
|  |——api
|  | ——index.js                // 所有的接口文档
|  | ——assets
|  |  | ——logo.png              // 静态文件
|  | ——components
|  |  | ——Dialog.vue            // 点击时的蒙层
|  |  | ——header.vue            // 头部
|  |  | ——banner.vue            // 轮播图
|  |  | ——list.vue              // 首页的每一条列表
|  |  | ——scroll.vue            // 封装的上拉加载
|  |  | ——slideMove.vue         // 手指滑动删除
|  |  | ——my.vue                // 关于我的组件
|  | ——plugins                 
|  |  | ——message.js            // 弹出消息得内容
|  |  | ——swiper.js             // 轮播图插件
|  |  | 
|  |  |
|  | ——router
|  |  | ——index.js              // 所有的路由表配置
|  | ——static                  // 静态资源文价夹
|  |  | ——img              
|  |  |  | ——status.jpg
|  |  | ——icon                  // 所有的icon图标
|  |  |  | 
|  |  | ——scss                  // 需要用到的scss文件
|  |  |  | ——_minix.scss
|  |  |  | ——common.scss
|  |  |  | ——flexble.js          // 响应式布局
|  | ——store        
|  |  | ——index.js              // vuex数据仓库
|  |—— utils                   // 公用方法封装
|  |  | ——files.js                 // 上传附件时的判断
|  |  |—— request.js               // 二次封装axios
|  | ——views                      // 视图文件夹
|  |  | ——home
|  |  |  | ——index.vue            // 首页
|  |  | ——detail
|  |  |  | ——index.vue            // 列表详情页
|  |  | ——login
|  |  |  | ——index.vue            // 登录页面
|  |  | ——map
|  |  |  | ——index.vue            // 地图页面
|  |  | ——search
|  |  |  | ——index.vue           // 搜索页面
|  | ——App.vue                 // 主入口页面
|  | ——main.js                 // 主入口文件
| ——static                    // 静态文件
| ——babelrc                   // 配置项
.
.
.
| ——之间为脚手架中的内容

| ——package.lock.json 
| ——package.json              // 依赖的文件 npm install 下载的文件
| ——README.md
