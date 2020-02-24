import Layout from '@/layout'

const organizationRouter = {
    path: '/organization',
    component: Layout,
    redirect: '/organization/organizationInfor',
    name: 'tree',
    meta: {
      title: '养老机构管理',
      icon: '机构'
    },
    children: [{
        path: 'org_audit',
        name: 'OrgAudit',
        component: () => import('@/views/ky_organization/index'),
        meta: {
          title: '养老机构入驻审核',
        }
      },
      {
        path: 'organizationInfor',
        name: 'OrganizationInfor',
        component: () => import('@/views/ky_organization/organizationInfor/index'),
        meta: {
          title: '养老机构基本信息',
        }
      },
      {
        path: 'org_message',
        name: 'OrgMessage',
        component: () => import('@/views/ky_organization/organizationMessage/index'),
        meta: {
          title: '养老机构消息管理',
        }
      },
      {
        path: 'org_bigdata',
        name: 'org_bigdata',
        component: () => import('@/views/ky_organization/organizationData/index'),
        meta: {
          title: '养老机构大数据',
        }
      },
      {
        path: 'org_order',
        name: 'org_order',
        component: () => import('@/views/ky_organization/organizationOrder/index'),
        meta: {
          title: '养老机构下单管理',
        }
      },
      {
        path: 'org_putaway',
        name: 'org_Putaway',
        component: () => import('@/views/ky_organization/organizationPutaway/index'),
        meta: {
          title: '养老机构上架管理',
        }
      },
      {
        path: 'org_account',
        name: 'org_Account',
        component: () => import('@/views/ky_organization/organizationAccount/index'),
        meta: {
          title: '养老机构账户管理',
        }
      },
      {
        path: 'org_distribution',
        name: 'org_Distribution',
        component: () => import('@/views/ky_organization/organizationDistribution/index'),
        meta: {
          title: '养老机构分销管理',
        }
      },
      {
        path: 'org_aftersale',
        name: 'org_Aftersale',
        component: () => import('@/views/ky_organization/organizationAftersale/index'),
        meta: {
          title: '养老机构售后管理',
        }
      },
      {
        path: 'org_complain',
        component: () => import('@/views/ky_merchant/merchantContent/index'),
        name: 'OrgComplain',
        meta: {
          title: '养老机构投诉管理'
        },
        children: [{
          path: 'org_pl',
          name: 'OrgPl',
          component: () => import('@/views/ky_organization/organizationContent/org_conment_audit'),
          meta: {
            title: '养老机构投诉管理',
          }
        }, {
          path: 'org_serve',
          name: 'OrgServe',
          component: () => import('@/views/ky_organization/organizationContent/org_conment_audit'),
          meta: {
            title: '消费者投诉管理',
          }
        }]
      },
      {
        path: 'organizationContent',
        component: () => import('@/views/ky_organization/organizationContent/index'),
        name: 'OrganizationContent',
        meta: {
          title: '养老机构内容审核'
        },
        children: [{
          path: 'or_pl',
          name: 'Or_pl',
          component: () => import('@/views/ky_organization/organizationContent/org_conment_audit'),
          meta: {
            title: '养老机构评论审核',
          }
        }, {
          path: 'or_serve',
          name: 'Or_serve',
          component: () => import('@/views/ky_organization/organizationContent/org_postserve_audit'),
          meta: {
            title: '养老机构上架服务审核',
          }
        }, {
          path: 'or_postjob',
          name: 'Or_postjob',
          component: () => import('@/views/ky_organization/organizationContent/org_postjob_audit'),
          meta: {
            title: '养老机构发布职位审核',
          }
        }, ]
      }

    ]
  }
  export default organizationRouter