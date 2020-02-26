import Vue from 'vue'

import 'normalize.css/normalize.css' // 一个现代的替代CSS重置
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en'
import '@/styles/index.scss'
import App from './App'
import store from './store'
import router from './router'
import axios from 'axios'
import 'font-awesome/css/font-awesome.min.css'
import '@/assets/iconfont/iconfont.css'

// 引入大图查看器
import VueDirectiveImagePreviewer from 'vue-directive-image-previewer'
import 'vue-directive-image-previewer/dist/assets/style.css'
Vue.use(VueDirectiveImagePreviewer)

import '@/icons' // icon
import '@/permission' // 拦截器
// import '@/viewer'  //图片放大缩放器

/**
 模拟数据，上线前删除！
 */
import {
  mockXHR
} from '../mock'
if (process.env.NODE_ENV === 'production') {
  mockXHR()
}

const instance1 = axios.create({
  baseURL: "http://39.107.33.189:8081",
})
const instance2 = axios.create({
  baseURL: "http://192.168.1.171:8081",
})
const instance3 = axios.create({
  baseURL: "http://192.168.1.10:8081",
})

Vue.prototype.$axios = axios;
Vue.prototype.$instance1 = instance1;
Vue.prototype.$instance2 = instance2;
Vue.prototype.$instance3 = instance3;
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
