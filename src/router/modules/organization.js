import Layout from '@/layout'

const organizationRouter = {
  path: '/organization',
  component: Layout,
  redirect: '/organization/organizationInfor',
  name: 'tree',
  meta: {
    title: '养老机构',
    icon: '机构'
  },
  children: [{
      path: 'userStatistics',
      name: 'userStatistics',
      component: () => import('@/views/ky_organization/userStatistics'),
      redirect:'',
      meta: {
        title: '用户统计',
      },
      children: [{
        path: 'user',
        name: 'user',
        component: () => import('@/views/ky_organization/userStatistics/user'),
        meta: {
          title: '用户',
        }
      }, {
        path: 'yanglaoOrganization',
        name: 'yanglaoOrganization',
        component: () => import('@/views/ky_organization/userStatistics/yanglaoOrganization'),
        meta: {
          title: '养老机构',
        }
      }]
    },
    {
      path: 'organizationManage',
      name: 'organizationManage',
      component: () => import('@/views/ky_organization/organizationManage'),
      meta: {
        title: '养老机构管理',
      }
    },
    {
      path: 'attestationManage',
      name: 'attestationManage',
      component: () => import('@/views/ky_organization/attestationManage'),
      meta: {
        title: '认证管理',
      }
    },
    {
      path: 'experienceManage',
      name: 'experienceManage',
      component: () => import('@/views/ky_organization/experienceManage'),
      meta: {
        title: '入住体验管理',
      }
    },
    {
      path: 'orgOrder',
      name: 'orgOrder',
      component: () => import('@/views/ky_organization/orgOrder'),
      meta: {
        title: '订单管理',
        // roles: ['admin', 'yq666']
      }
    },
    {
      path: 'orgEvaluate',
      name: 'orgEvaluate',
      component: () => import('@/views/ky_organization/orgEvaluate'),
      meta: {
        title: '评价管理',
      }
    },
    {
      path: 'orgCollect',
      name: 'orgCollect',
      component: () => import('@/views/ky_organization/orgCollect'),
      meta: {
        title: '收藏记录',
      }
    },
    {
      path: 'orgConfiguration',
      name: 'orgConfiguration',
      component: () => import('@/views/ky_organization/orgConfiguration'),
      meta: {
        title: '养老机构配置',
      }
    }
  ]
}
export default organizationRouter
