import router from './router'
import store from './store'
import {
  Message
} from 'element-ui'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import {
  getToken
} from '@/utils/auth' // get token from cookie
import getPageTitle from '@/utils/get-page-title'

NProgress.configure({
  showSpinner: false
}) // NProgress 页面导航

const whiteList = ['/login'] // 白名单
router.beforeEach(async (to, from, next) => {
  // 开始进度条
  NProgress.start()

  // 设置页面标题
  document.title = getPageTitle(to.meta.title)
  const hasToken = getToken()
  if (hasToken) {
    if (to.path === '/login') {
      //如果是进入登录页面 则不需要权限 直接进入
      next({
        path: '/'
      })
      NProgress.done()
    } else {
      // next()
      // NProgress.done()
    //   console.log('store.getters',store.getters);
      const hasRoles = store.getters.roles && store.getters.roles.length > 0
      if (hasRoles) {
        next()
      } else {
        try {
          // get user info
          // roles必须是一个数组
          const {
            roles
          } = await store.dispatch('user/getInfo')
          //   console.log("roles", roles);
          // 根据角色生成可访问路由映射
          const accessRoutes = await store.dispatch('permission/generateRoutes', roles)
          // 动态添加可访问路由
          router.addRoutes(accessRoutes)
        //   console.log("accessRoutes", accessRoutes);
          // 破解方法必须确保addRoutes完整
          // 设置replace: true，这样导航就不会留下历史记录
          next({
            ...to,
            replace: true
          })
        // next()
        } catch (error) {
          // 删除令牌，进入登录页面重新登录
          await store.dispatch('user/resetToken')
          Message.error(error || 'Has Error')
          next(`/login?redirect=${to.path}`)
          NProgress.done()
        }
      }
    }
  } else {
    /* 没有token*/
    console.log('store.getters');
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
