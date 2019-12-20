import router from './router'
import store from './store'
import { Message } from 'element-ui'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import { getToken } from '@/utils/auth' // get token from cookie
import getPageTitle from '@/utils/get-page-title'

NProgress.configure({
  showSpinner: false
}) // NProgress 页面导航

const whiteList = ['/login'] // 白名单

router.beforeEach(async(to, from, next) => {
  // 开始进度条
  NProgress.start()

  // 设置页面标题
  document.title = getPageTitle(to.meta.title)

  // 确定用户是否已登录
  const hasToken = getToken()
//   window.console.log('hasToken', hasToken)
  if (hasToken) {
    if (to.path === '/login') {
      //如果是进入登录页面 则不需要权限 直接进入
      next({ path: '/' })
      NProgress.done()
    } else {
        next()
        NProgress.done()
    //   const hasGetUserInfo = store.getters.name
    //   window.console.log('hasGetUserInfo', hasGetUserInfo);
    //   if (hasGetUserInfo) {
    //     next()
    //   } else {
    //     try {
    //       // 获取用户信息
    //       await store.dispatch('user/getInfo')
    //       next()
    //     } catch (error) {
    //       // 删除token，进入登录页面重新登录
    //       await store.dispatch('user/resetToken')
    //       Message.error(error || 'Has Error')
    //       next(`/login?redirect=${to.path}`)
    //       NProgress.done() // 页面导航结束
    //     }
    //   }
    }
  } else {
    /* 没有token*/

    if (whiteList.indexOf(to.path) !== -1) {
      // 在白名单 直接进
      next()
    } else {
      // 否则全到登陆页面
      next(`/login?redirect=${to.path}`)
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})
