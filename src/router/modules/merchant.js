import Layout from '@/layout'
// ........................商城商家管理............................
const merchantRouter = {
  path: '/merchant',
  component: Layout,
  redirect: '/merchant/basicInfor',
  name: 'tree',
  meta: {
    title: '商城商家管理',
    icon: 'shangcheng'
  },
  children: [{
      path: 'audit',
      name: 'audit',
      component: () => import('@/views/ky_merchant/index'),
      meta: {
        title: '商家入驻审核',
      }
    },
    {
      path: 'basicInfor',
      name: 'basicInfor',
      component: () => import('@/views/ky_merchant/merchantInfor/index'),
      meta: {
        title: '商家基本信息',
      }
    },
    {
      path: 'message',
      name: 'message',
      component: () => import('@/views/ky_organization/organizationMessage/index'),
      meta: {
        title: '商家消息管理',
      }
    },
    {
      path: 'bigdata',
      name: 'bigdata',
      component: () => import('@/views/ky_merchant/merchantData/index'),
      meta: {
        title: '商家大数据',
      }
    },
    {
      path: 'order',
      name: 'Order',
      component: () => import('@/views/ky_merchant/merchantOrder'),
      meta: {
        title: '商家下单管理',
      }
    }, {
      path: 'putaway',
      name: 'Putaway',
      component: () => import('@/views/ky_merchant/merchantPutaway'),
      meta: {
        title: '商家上架管理',
      }
    }, {
      path: 'bigdata3',
      name: 'bigdata3',
      component: () => import('@/views/ky_merchant/merchantAccount/index'),
      meta: {
        title: '商家账户管理',
      }
    }, {
      path: 'bigdata4',
      name: 'bigdata4',
      component: () => import('@/views/ky_merchant/merchantDistribution/index'),
      meta: {
        title: '商家分销管理',
      }
    }, {
      path: 'bigdata5',
      name: 'bigdata5',
      component: () => import('@/views/ky_merchant/merchantAftersale/index'),
      meta: {
        title: '商家售后管理',
      }
    },
    {
      path: 'jc',
      name: 'jc',
      component: () => import('@/views/ky_merchant/merchantData/index'),
      meta: {
        title: '市场行情监测',
      }
    },
    {
      path: 'ts',
      component: () => import('@/views/ky_merchant/merchantContent/index'),
      name: 'merchantContent',
      meta: {
        title: '商家投诉管理'
      },
      children: [{
        path: 'mer_pl',
        name: 'mer_pl',
        component: () => import('@/views/ky_merchant/merchantContent/mer_conment_audit'),
        meta: {
          title: '商家投诉管理',
        }
      }, {
        path: 'mer_serve',
        name: 'mer_serve',
        component: () => import('@/views/ky_merchant/merchantContent/mer_postserve_audit'),
        meta: {
          title: '消费者投诉管理',
        }
      }]
    },
    {
      path: 'merchantContent',
      component: () => import('@/views/ky_merchant/merchantContent/index'),
      name: 'merchantContent',
      meta: {
        title: '商家内容审核'
      },
      children: [{
        path: 'mer_pl',
        name: 'mer_pl',
        component: () => import('@/views/ky_merchant/merchantContent/mer_conment_audit'),
        meta: {
          title: '商家评论审核',
        }
      }, {
        path: 'mer_serve',
        name: 'mer_serve',
        component: () => import('@/views/ky_merchant/merchantContent/mer_postserve_audit'),
        meta: {
          title: '商家上架产品审核',
        }
      }, {
        path: 'mer_postjob',
        name: 'mer_postjob',
        component: () => import('@/views/ky_merchant/merchantContent/mer_postjob_audit'),
        meta: {
          title: '商家发布职位审核',
        }
      }, ]
    },

    {
      path: 'asset',
      component: () => import('@/views/ky_merchant/merchantSuoervice/index'),
      name: 'asset',
      meta: {
        title: '商家资产管理',
      },
      children: [{
        path: 'merchantSuoervice',
        component: () => import('@/views/ky_merchant/merchantSuoervice/merchant_jy'),
        name: 'merchantSuoervice',
        meta: {
          title: '商家经营监测',
        }
      }, {
        path: 'pay',
        name: 'pay',
        component: () => import('@/views/ky_merchant/merchantSuoervice/merchant_zf'),
        meta: {
          title: '商家支付管理',
        }
      }, {
        path: 'fund',
        name: 'fund',
        component: () => import('@/views/ky_merchant/merchantSuoervice/merchant_zj'),
        meta: {
          title: '商家资金管理',
        },
        children: [{
          path: 'merchantSuoervice',
          component: () => import('@/views/ky_merchant/merchantSuoervice/merchant_jy'),
          name: 'merchantSuoervice',
          meta: {
            title: '打款管理',
          }
        }, {
          path: 'pay',
          name: 'pay',
          component: () => import('@/views/ky_merchant/merchantSuoervice/merchant_zf'),
          meta: {
            title: '货款管理',
          }
        }]
      }]
    },

  ]

}
export default merchantRouter
