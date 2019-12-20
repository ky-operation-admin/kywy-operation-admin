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
        icon: '首页'
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
      icon: 'xiaofeizhe'
    },
    children: [{
        path: 'basicInfor',
        name: 'basicInfor',
        component: () => import('@/views/ky_consumer/index'),
        meta: {
          title: '消费者基本信息',
        }
      },
      {
        path: 'account',
        name: 'account',
        component: () => import('@/views/ky_consumer/consumerAcc/index'),
        meta: {
          title: '消费者账号管理',
        }
      },
      {
        path: 'health',
        name: 'health',
        component: () => import('@/views/ky_consumer/healthData/index'),
        meta: {
          title: '消费者健康数据',
        }
      },
      {
        path: 'cpfw',
        name: 'cpfw',
        component: () => import('@/views/ky_consumer/consumer_cpfw/index'),
        meta: {
          title: '消费者产品服务',
        }
      },
      {
        path: 'bigdata',
        name: 'bigdata',
        component: () => import('@/views/ky_consumer/consumer_bigdata/index'),
        meta: {
          title: '消费者大数据分析',
        }
      },
    ]
  },
  // ........................养老机构管理............................
  {
    path: '/organization',
    component: Layout,
    redirect: '/organization/basicInfor',
    name: 'tree',
    meta: {
      title: '养老机构管理',
      icon: '机构'
    },
    children: [{
        path: 'audit',
        component: () => import('@/views/ky_organization/index'),
        meta: {
          title: '养老机构入驻审核',
        }
      },
      {
        path: 'basicInfor',
        component: () => import('@/views/ky_organization/organizationInfor/index'),
        meta: {
          title: '养老机构基本信息',
        }
      },
      {
        path: 'message',
        component: () => import('@/views/ky_organization/organizationMessage/index'),
        meta: {
          title: '养老机构消息管理',
        }
      },
      {
        path: 'bigdata',
        component: () => import('@/views/ky_organization/organizationData/index'),
        meta: {
          title: '养老机构大数据',
        }
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
  },

  // ........................商城商家管理............................
  {
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
      }, {
        path: 'bigdata',
        name: 'bigdata',
        component: () => import('@/views/ky_merchant/merchantData/index'),
        meta: {
          title: '商家大数据',
        }
      },
      {
        path: 'ts',
        component: () => import('@/views/ky_merchant/merchantData/index'),
        meta: {
          title: '商家投诉管理',
        }
      },
      {
        path: 'user_complaint',
        component: () => import('@/views/ky_merchant/user_complaint/index'),
        meta: {
          title: '消费者投诉',
        }
      },
      {
        path: 'jc',
        component: () => import('@/views/ky_merchant/merchantData/index'),
        meta: {
          title: '市场行情监测',
        }
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
          component: () => import('@/views/ky_merchant/merchantSuoervice/merchant_zf'),
          meta: {
            title: '商家支付管理',
          }
        }, {
          path: 'fund',
          component: () => import('@/views/ky_merchant/merchantSuoervice/merchant_zj'),
          meta: {
            title: '商家资金管理',
          }
        }, ]
      },

    ]

  },
  // ........................商家投诉管理............................
  // {
  //   path: '/conment1',
  //   component: Layout,
  //   children: [{
  //     path: 'index',
  //     name: 'conment',
  //     component: () => import('@/views/ky_conment/index'),
  //     meta: {
  //       title: '商家投诉管理',
  //       icon: 'pinglun'
  //     }
  //   }]
  // },
  // ........................消费者投诉管理............................
  // {
  //   path: '/conment2',
  //   component: Layout,
  //   children: [{
  //     path: 'index',
  //     name: 'conment',
  //     component: () => import('@/views/ky_conment/index'),
  //     meta: {
  //       title: '消费者投诉管理',
  //       icon: 'pinglun'
  //     }
  //   }]
  // },

  // ........................社区管理............................
  {
    path: '/community',
    component: Layout,
    redirect: '/community/activityCenter',
    name: 'tree',
    meta: {
      title: '社区管理',
      icon: 'shequ'
    },
    children: [{
        path: 'activityCenter',
        name: 'activityCenter',
        component: () => import('@/views/ky_organization/index'),
        meta: {
          title: '社区内容管理',
        }
      },
      {
        path: 'drugstore',
        name: 'drugstore',
        component: () => import('@/views/ky_organization/organizationInfor/index'),
        meta: {
          title: '社区基本信息',
        }
      }, {
        path: 'elderlyUniversity',
        name: 'elderlyUniversity',
        component: () => import('@/views/ky_organization/organizationData/index'),
        meta: {
          title: '社区大数据',
        }
      }
    ]
  },
  // ........................酒店管理............................
  {
    path: '/hotel',
    component: Layout,
    redirect: '/hotel/basicInfor',
    name: 'tree',
    meta: {
      title: '酒店管理',
      icon: '酒店'
    },
    children: [{
        path: 'audit',
        component: () => import('@/views/ky_hotel/index'),
        meta: {
          title: '酒店入驻审核',
        }
      },
      {
        path: 'basicInfor',
        component: () => import('@/views/ky_hotel/hotelInfor/index'),
        meta: {
          title: '酒店基本信息',
        }
      },
      {
        path: 'message',
        component: () => import('@/views/ky_hotel/hotelMessage/index'),
        meta: {
          title: '酒店消息管理',
        }
      },
      {
        path: 'bigdata',
        component: () => import('@/views/ky_hotel/hotelData/index'),
        meta: {
          title: '酒店大数据',
        }
      },
      {
        path: 'hotelContent',
        component: () => import('@/views/ky_hotel/hotelContent/index'),
        name: 'hotelContent',
        meta: {
          title: '酒店内容审核'
        },
        children: [{
          path: 'hotel_comment',
          name: 'hotel_comment',
          component: () => import('@/views/ky_hotel/hotelContent/hotel_conment_audit'),
          meta: {
            title: '酒店评论审核',
          }
        }, {
          path: 'hotel_serve',
          name: 'hotel_serve',
          component: () => import('@/views/ky_hotel/hotelContent/hotel_postserve_audit'),
          meta: {
            title: '酒店上架服务审核',
          }
        }, {
          path: 'hotel_postjob',
          name: 'hotel_postjob',
          component: () => import('@/views/ky_hotel/hotelContent/hotel_postjob_audit'),
          meta: {
            title: '酒店发布职位审核',
          }
        }, ]
      }

    ]
  },

  // ........................景点管理............................
  {
    path: '/scenic',
    component: Layout,
    redirect: '/scenic/basicInfor',
    name: 'tree',
    meta: {
      title: '景点管理',
      icon: '景点'
    },
    children: [{
        path: 'audit',
        name: 'audit',
        component: () => import('@/views/ky_organization/index'),
        meta: {
          title: '入驻审核',
        }
      },
      {
        path: 'basicInfor',
        name: 'basicInfor',
        component: () => import('@/views/ky_organization/organizationInfor/index'),
        meta: {
          title: '基本信息',
        }
      }, {
        path: 'bigdata',
        name: 'bigdata',
        component: () => import('@/views/ky_organization/organizationData/index'),
        meta: {
          title: '大数据',
        }
      }
    ]
  },
  // ........................保险管理............................
  {
    path: '/insurance',
    component: Layout,
    redirect: '/insurance/basicInfor',
    name: 'tree',
    meta: {
      title: '保险管理',
      icon: 'baoxian'
    },
    children: [{
        path: 'audit',
        name: 'audit',
        component: () => import('@/views/ky_organization/index'),
        meta: {
          title: '入驻审核',
        }
      },
      {
        path: 'basicInfor',
        name: 'basicInfor',
        component: () => import('@/views/ky_organization/organizationInfor/index'),
        meta: {
          title: '基本信息',
        }
      }, {
        path: 'bigdata',
        name: 'bigdata',
        component: () => import('@/views/ky_organization/organizationData/index'),
        meta: {
          title: '大数据',
        }
      }
    ]
  },
  // ........................基金管理............................
  {
    path: '/fund',
    component: Layout,
    redirect: '/fund/basicInfor',
    name: 'tree',
    meta: {
      title: '基金管理',
      icon: 'jijin'
    },
    children: [{
        path: 'audit',
        name: 'audit',
        component: () => import('@/views/ky_organization/index'),
        meta: {
          title: '入驻审核',
        }
      },
      {
        path: 'basicInfor',
        name: 'basicInfor',
        component: () => import('@/views/ky_organization/organizationInfor/index'),
        meta: {
          title: '基本信息',
        }
      }, {
        path: 'bigdata',
        name: 'bigdata',
        component: () => import('@/views/ky_organization/organizationData/index'),
        meta: {
          title: '大数据',
        }
      }
    ]
  },
  // ........................医院管理............................
  {
    path: '/hospital',
    component: Layout,
    redirect: '/hospital/basicInfor',
    name: 'tree',
    meta: {
      title: '医院管理',
      icon: '医院'
    },
    children: [{
        path: 'audit',
        name: 'audit',
        component: () => import('@/views/ky_organization/index'),
        meta: {
          title: '入驻审核',
        }
      },
      {
        path: 'basicInfor',
        name: 'basicInfor',
        component: () => import('@/views/ky_organization/organizationInfor/index'),
        meta: {
          title: '基本信息',
        }
      }, {
        path: 'bigdata',
        name: 'bigdata',
        component: () => import('@/views/ky_organization/organizationData/index'),
        meta: {
          title: '大数据',
        }
      }
    ]
  },
  // ........................婚介公司管理............................
  {
    path: '/datingAgency',
    component: Layout,
    redirect: '/datingAgency/basicInfor',
    name: 'tree',
    meta: {
      title: '婚介公司管理',
      icon: 'hunjie'
    },
    children: [{
        path: 'audit',
        name: 'audit',
        component: () => import('@/views/ky_organization/index'),
        meta: {
          title: '入驻审核',
        }
      },
      {
        path: 'basicInfor',
        name: 'basicInfor',
        component: () => import('@/views/ky_organization/organizationInfor/index'),
        meta: {
          title: '基本信息',
        }
      }, {
        path: 'bigdata',
        name: 'bigdata',
        component: () => import('@/views/ky_organization/organizationData/index'),
        meta: {
          title: '大数据',
        }
      }
    ]
  },
  // ........................用户管理............................
  {
    path: '/user',
    component: Layout,
    children: [{
      path: 'index',
      name: 'user',
      component: () => import('@/views/ky_user/index'),
      meta: {
        title: '用户管理',
        icon: 'yonghu'
      }
    }]
  },
  // ........................用户反馈............................
  {
    path: '/userFeedback',
    component: Layout,
    children: [{
      path: 'index',
      name: 'userFeedback',
      component: () => import('@/views/ky_userFeedback/index'),
      meta: {
        title: '用户反馈',
        icon: 'fankui'
      }
    }]
  },
  // ........................版本管理............................
  {
    path: '/version',
    component: Layout,
    children: [{
      path: 'index',
      name: 'version',
      component: () => import('@/views/ky_version/index'),
      meta: {
        title: '版本管理',
        icon: 'banben'
      }
    }]
  },
  // ........................发布管理............................
  {
    path: '/issue',
    component: Layout,
    children: [{
      path: 'index',
      name: 'issue',
      component: () => import('@/views/ky_version/index'),
      meta: {
        title: '发布管理',
        icon: 'issue'
      }
    }]
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
        icon: 'guanggao'
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
        icon: 'pinglun'
      }
    }]
  },
  // ........................分销管理............................
  {
    path: '/distributor',
    component: Layout,
    children: [{
      path: 'index',
      name: 'Distributor',
      component: () => import('@/views/ky_distributor/index'),
      meta: {
        title: '分销管理',
        icon: '分销商'
      }
    }]
  },
  // ........................消息管理............................
  {
    path: '/message',
    component: Layout,
    children: [{
      path: 'index',
      name: 'Message',
      component: () => import('@/views/ky_message/index'),
      meta: {
        title: '消息管理',
        icon: 'message'
      }
    }]
  },

  // ........................平台规则............................
  {
    path: '/platform_rule',
    component: Layout,
    children: [{
      path: 'index',
      name: 'Platform_rule',
      component: () => import('@/views/ky_rule/index'),
      meta: {
        title: '平台规则',
        icon: 'rule'
      }
    }]
  },
  // ........................个人信息............................
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
  // ........................内容审核............................
  //   {
  //     path: '/ContentApproval',
  //     component: Layout,
  //     redirect: '/ContentApproval/promotions',
  //     name: 'tree',
  //     meta: {
  //       title: '内容审核',
  //       icon: 'shenhe'
  //     },
  //     children: [{
  //         path: 'comment ',
  //         name: 'comment',
  //         component: () => import('@/views/ky_organization/index'),
  //         meta: {
  //           title: '评论管理',
  //         }
  //       },
  //       {
  //         path: 'promotions',
  //         name: 'promotions',
  //         component: () => import('@/views/ky_organization/organizationInfor/index'),
  //         meta: {
  //           title: '商家发布管理',
  //         }
  //       }, {
  //         path: 'merchantsShelves',
  //         name: 'merchantsShelves',
  //         component: () => import('@/views/ky_organization/organizationData/index'),
  //         meta: {
  //           title: '商家上架管理',
  //         }
  //       }, {
  //         path: 'uptata',
  //         name: 'uptata',
  //         component: () => import('@/views/ky_organization/organizationData/index'),
  //         meta: {
  //           title: '上传活动',
  //         }
  //       }
  //     ]
  //   },
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
