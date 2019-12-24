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
import { mockXHR } from '../mock'
if (process.env.NODE_ENV === 'production') {
  mockXHR()
}
// 获取在招职业请求
const getQueryOpenPositions = axios.create({
  baseURL: 'http://120.25.214.5:8081/openposition/queryOpenPositions'
});
// 把axios写入Vue原型，方便子组件调用
Vue.prototype.$axios = axios;
// Vue.prototype.$getResumes = getResumes;
Vue.prototype.$getQueryOpenPositions = getQueryOpenPositions;

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
