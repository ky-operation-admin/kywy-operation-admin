import Vue from 'vue'

import 'normalize.css/normalize.css' // 一个现代的替代CSS重置
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'
import App from './App'
import i18n from './i18n'
import store from './store'
import router from './router'
import axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css'
import '@/styles/index.scss'
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

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  i18n,
  store,
  render: h => h(App)
})
