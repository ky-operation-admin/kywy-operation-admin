import Layout from '@/layout'
// ........................商城商家管理............................
const merchantRouter = {
  path: '/merchant',
  component: Layout,
  redirect: '/merchant/merchantInfor',
  name: 'Merchant',
  meta: {
    title: '商城商家管理',
    icon: 'shangcheng'
  },
  children: [{
      path: 'merchant_audit',
      name: 'MerchantAudit',
      component: () => import('@/views/ky_merchant/index'),
      meta: {
        title: '商家入驻审核',
      }
    },
    {
      path: 'merchantInfor',
      name: 'MerchantInfor',
      component: () => import('@/views/ky_merchant/merchantInfor/index'),
      meta: {
        title: '商家基本信息',
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
      path: 'mer_complain',
      component: () => import('@/views/ky_merchant/merchantContent/index'),
      name: 'MerComplain',
      meta: {
        title: '商家投诉管理'
      },
      children: [{
        path: 'mer_ts',
        name: 'mer_ts',
        component: () => import('@/views/ky_merchant/merchantContent/mer_conment_audit'),
        meta: {
          title: '商家投诉管理',
        }
      }, {
        path: 'consumer_ts',
        name: 'ConsumerTs',
        component: () => import('@/views/ky_merchant/merchantContent/mer_postserve_audit'),
        meta: {
          title: '消费者投诉管理',
        }
      }]
    },
    {
      path: 'merchantContent_audit',
      component: () => import('@/views/ky_merchant/merchantContent/index'),
      name: 'MerchantContentAudit',
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
        path: 'merchant_pay',
        name: 'MerchantPay',
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
          path: 'merchant_dk',
          component: () => import('@/views/ky_merchant/merchantSuoervice/merchant_jy'),
          name: 'MerchantDk',
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
