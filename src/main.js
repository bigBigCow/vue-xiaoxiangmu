// 打包的入口文件，把需要的第三方包和需要的组件从这里导入
import Vue from 'vue' //导入vue
import MintUi from 'mint-ui' //导入mint-ui
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import 'mint-ui/lib/style.css' //mint-ui官网上面没有写，但是github上面有，这个很容易忘记
import Mui from '../static/mui/css/mui.css'
import moment from 'moment'
Vue.use(VueRouter)
Vue.use(MintUi)
Vue.use(VueResource)
Vue.use(Mui)

Vue.filter('timeFilers',(input,dataFmtString)=>{
    const lastTime = dataFmtString || 'YYYY-MM-DD HH'
    // 参数1：要格式化的原始数据
    // 参数2：格式化变成的样子
    return moment(input).format(lastTime)
})
//App.vue   导入路由
import home from './component/home/home.vue'
import category from './component/category/category.vue'
import cart from './component/cart/cart.vue'
import login from './component/login/login.vue'
import news from './component/newslist/news.vue' 

import '../static/css/site.css'
import App from './App.vue' //相当于var App = require('./App.vue')，导入App.vue
//创建路由规则
var routes = [{
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: home
    },
    {
        path: '/category',
        component: category
    },
    {
        path: '/cart',
        component: cart
    },
    {
        path: '/login',
        component: login
    },
    {
        path:'/news',
        component:news
    }
]
//创建路由对象，并在vue根实例中注入
var router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
})
//创建根实例
new Vue({
    el: '#app',
    router,
    render: function (createElement) { //用户看到的第一个组件
        return createElement(App);
    }
})