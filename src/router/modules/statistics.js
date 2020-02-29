import Layout from '@/layout'

const statisticsRouter = {
  path: '/ky_statistics',
  component: Layout,
  redirect: '/ky_statistics/user_reg_stat',
  name: 'KyStatistics',
  meta: {
    title: '数据统计',
    icon: '数据统计'
  },
  children: [{
      path: 'search_history',
      name: 'SearchHistory',
      component: () => import('@/views/ky_statistics/searchHistory'),
      meta: {
        title: '搜索记录',
      }
    },
    {
      path: 'user_reg_stat',
      name: 'UserRegStat',
      component: () => import('@/views/ky_statistics/userRegStat'),
      meta: {
        title: '用户注册统计',
      }
    },
    {
      path: 'user_login_stat',
      name: 'UserLoginStat',
      component: () => import('@/views/ky_statistics/userLoginStat'),
      meta: {
        title: '用户登录统计',
      }
    },
    {
      path: 'user_transaction',
      name: 'UserTransaction',
      component: () => import('@/views/ky_statistics/userTransaction'),
      meta: {
        title: '用户交易记录',
      }
    },
    {
      path: 'certification',
      name: 'Certification',
      component: () => import('@/views/ky_statistics/certification'),
      meta: {
        title: '实名认证统计',
      }
    }
  ]
}

export default statisticsRouter
