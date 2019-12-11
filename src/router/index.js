import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [{
    path: '/login',
    component: () => import('@/views/ky_login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: {
        title: '管理首页',
        icon: 'dashboard'
      }
    }]
  },
  // ........................消费者管理............................
  {
    path: '/consumer',
    component: Layout,
    redirect: '/consumer/basicInfor',
    name: 'Example',
    meta: {
      title: '消费者管理',
      icon: 'table'
    },
    children: [{
        path: '/basicInfor',
        name: 'basicInfor',
        component: () => import('@/views/ky_consumer/index'),
        meta: {
          title: '消费者基本信息',
        }
      },
      {
        path: '/account',
        name: 'account',
        component: () => import('@/views/ky_consumer/consumerAcc/index'),
        meta: {
          title: '消费者账号管理',
        }
      },
      {
        path: '/health',
        name: 'health',
        component: () => import('@/views/ky_consumer/healthData/index'),
        meta: {
          title: '消费者健康数据',
        }
      },
      {
        path: '/cpfw',
        name: 'cpfw',
        component: () => import('@/views/ky_consumer/consumer_cpfw/index'),
        meta: {
          title: '消费者产品服务',
        }
      },
      {
        path: '/bigdata',
        name: 'bigdata',
        component: () => import('@/views/ky_consumer/consumer_bigdata/index'),
        meta: {
          title: '消费者大数据分析',
        }
      },
    ]
  },
  // ........................机构与商家管理............................
  {
    path: '/organization',
    component: Layout,
    redirect: '/organization/basicInfor',
    name: 'tree',
    meta: {
      title: '机构与商家管理',
      icon: 'example'
    },
    children: [{
        path: 'audit',
        name: 'audit',
        component: () => import('@/views/ky_organization/index'),
        meta: {
          title: '机构与商家审核',
        }
      },
      {
        path: 'basicInfor',
        name: 'basicInfor',
        component: () => import('@/views/ky_organization/organizationInfor/index'),
        meta: {
          title: '机构与商家基本信息',
        }
      }, {
        path: 'bigdata',
        name: 'bigdata',
        component: () => import('@/views/ky_organization/organizationData/index'),
        meta: {
          title: '机构与商家大数据',
        }
      }
    ]
  },
  // ........................用户管理............................
  {
    path: '/user',
    component: Layout,
    redirect: '/user/basicInfor',
    name: 'tree',
    meta: {
      title: '用户管理',
      icon: 'user'
    },
    children: [{
        path: 'basicInfor',
        name: 'basicInfor',
        component: () => import('@/views/ky_user/index'),
        meta: {
          title: '基本信息',
        }
      },
      {
        path: 'bbgl',
        name: 'bbgl',
        component: () => import('@/views/ky_user/user_bbgl/index'),
        meta: {
          title: '版本管理',
        }
      },
      {
        path: 'userFeedback',
        name: 'userFeedback',
        component: () => import('@/views/ky_user/user_feedback/index'),
        meta: {
          title: '用户反馈',
        }
      }
    ]
    // children: [{
    //   path: 'index',
    //   name: 'user',
    //   component: () => import('@/views/ky_user/index'),
    //   meta: {
    //     title: '用户管理',
    //     icon: 'form'
    //   }
    // }]
  },
  // ........................广告管理............................
  {
    path: '/advertising',
    component: Layout,
    children: [{
      path: 'index',
      name: 'advertising',
      component: () => import('@/views/ky_advertising/index'),
      meta: {
        title: '广告管理',
        icon: 'link'
      }
    }]
  },
   // ........................评论管理............................
  {
    path: '/conment',
    component: Layout,
    children: [{
      path: 'index',
      name: 'conment',
      component: () => import('@/views/ky_conment/index'),
      meta: {
        title: '评论管理',
        icon: 'form'
      }
    }]
  },

  //   {
  //     path: '/talents',
  //     component: Layout,
  //     redirect: '/talents/resume',
  //     name: 'talents',
  //     meta: {
  //       title: '人事人才管理',
  //       icon: 'example'
  //     },
  //     children: [{
  //         path: 'resume',
  //         name: 'resume',
  //         component: () => import('@/views/ky_resume/index'),
  //         meta: {
  //           title: '简历/人才库',
  //           icon: 'table'
  //         }
  //       },
  //       {
  //         path: 'jobsAvailable',
  //         name: 'jobsAvailable',
  //         component: () => import('@/views/ky_jobsAvailable/index'),
  //         meta: {
  //           title: '查看在招职位',
  //           icon: 'tree'
  //         }
  //       }, {
  //         path: 'beonjob',
  //         name: 'beonjob',
  //         component: () => import('@/views/ky_beOnJob/index'),
  //         meta: {
  //           title: '查看公司职位',
  //           icon: 'tree'
  //         }
  //       }, {
  //         path: 'postPosition',
  //         name: 'postPosition',
  //         component: () => import('@/views/ky_postPosition/index'),
  //         meta: {
  //           title: '发布新职位',
  //           icon: 'tree'
  //         }
  //       }
  //     ]
  //   },
  // 404 page must be placed at the end !!!
  {
    path: '*',
    redirect: '/404',
    hidden: true
  }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({
    y: 0
  }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
