import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en' // lang i18n

import '@/styles/index.scss' // global css

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

/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online! ! !
 */
import { mockXHR } from '../mock'
if (process.env.NODE_ENV === 'production') {
  mockXHR()
}
// 查询简历默认配置
// const getResumes = axios.create({

//   baseURL: 'http://192.168.0.154:8086/resume/queryResumes'
// });
// 获取在招职业请求
const getQueryOpenPositions = axios.create({

  baseURL: 'http://120.25.214.5:8081/openposition/queryOpenPositions'
});
// 把axios写入Vue原型，方便子组件调用
Vue.prototype.$axios = axios;
// Vue.prototype.$getResumes = getResumes;
Vue.prototype.$getQueryOpenPositions = getQueryOpenPositions;
// set ElementUI lang to EN
// Vue.use(ElementUI, { locale })
// 如果想要中文版 element-ui，按如下方式声明
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
