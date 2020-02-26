import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'
/* 引入模块路由*/
import merchantRouter from './modules/merchant'
import medicineRouter from './modules/Medicine'
import hotelRouter from './modules/hotel'
import organizationRouter from './modules/organization'
/**
 * 注意: 子菜单只在路由子菜单时出现。 长度 > = 1
 * hidden: true如果设置为true， 项目将不会显示在侧栏中(默认为false) *
   alwaysShow: true
                如果设置为true， 将始终显示根菜单 *
                如果不设置alwaysShow， 当项目有多个子路由时， *
                它将成为嵌套模式， 否则不显示根菜单 *
   redirect: noRedirect    如果设置noRedirect将不会在面包屑重定向 *
   name: 'router-name'     这个名字被 < keep - alive > (必须设置!!)
   meta: {
     relos: ['admin'，'editor'] 控制页面角色(可以设置多个角色)
     title: 'title'
                侧栏和breadcrumb中显示的名称(推荐)
     icon: 'svg-name'
                图标显示在侧栏,如果设置为false， 则该项将隐藏在breadcrumb中(默认为true)
     activeMenu: '/example/list'
                如果设置了路径， 侧边栏将突出显示您设置的路径
      affix: true
                如果设置为true,则标记在tags-view视图中
  }
 */
/**
 * constantRoutes
 * 没有权限要求的页面，所有角色都可以访问
 */
export const constantRoutes = [
  // 此路由用于刷新页面并且避免报错
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [{
      path: '/redirect/:path*',
      component: () => import('@/views/redirect/index')
    }]
  },
  {
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
      hidden: true,
      meta: {
        title: '管理首页',
        icon: '首页',
        affix: true
      }
    }]
  },

  // ........................消费者管理............................
  //   {
  //     path: '/consumer',
  //     component: Layout,
  //     redirect: '/consumer/basicInfor',
  //     name: 'Example',
  //     meta: {
  //       title: '消费者管理',
  //       icon: 'xiaofeizhe'
  //     },
  //     children: [{
  //         path: 'basicInfor',
  //         name: 'basicInfor',
  //         component: () => import('@/views/ky_consumer/index'),
  //         meta: {
  //           title: '消费者基本信息',
  //         }
  //       },
  //       {
  //         path: 'consumer_mes',
  //         name: 'ConsumerMes',
  //         component: () => import('@/views/ky_consumer/consumer_mes'),
  //         meta: {
  //           title: '消费者消息管理',
  //         }
  //       },
  //       {
  //         path: 'consumer_acc',
  //         name: 'ConsumerAcc',
  //         component: () => import('@/views/ky_consumer/consumerAcc/index'),
  //         meta: {
  //           title: '消费者账户管理',
  //         }
  //       },
  //       {
  //         path: 'health',
  //         name: 'health',
  //         component: () => import('@/views/ky_consumer/healthData/index'),
  //         meta: {
  //           title: '消费者健康数据',
  //         }
  //       },
  //       {
  //         path: 'cpfw',
  //         name: 'cpfw',
  //         component: () => import('@/views/ky_consumer/consumer_cpfw/index'),
  //         meta: {
  //           title: '消费者产品服务',
  //         }
  //       },
  //       {
  //         path: 'bigdata',
  //         name: 'bigdata',
  //         component: () => import('@/views/ky_consumer/consumer_bigdata/index'),
  //         meta: {
  //           title: '消费者大数据分析',
  //         }
  //       },
  //     ]
  //   },

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
  // ........................社区管理............................
  //   {
  //     path: '/community',
  //     component: Layout,
  //     redirect: '/community/activityCenter',
  //     name: 'Community',
  //     meta: {
  //       title: '社区管理',
  //       icon: 'shequ'
  //     },
  //     children: [{
  //         path: 'activityCenter',
  //         name: 'activityCenter',
  //         component: () => import('@/views/ky_organization/index'),
  //         meta: {
  //           title: '社区内容管理',
  //           roles: ['editor'],

  //         }
  //       },
  //       {
  //         path: 'drugstore',
  //         name: 'drugstore',
  //         component: () => import('@/views/ky_organization/organizationInfor/index'),
  //         meta: {
  //           title: '社区基本信息',
  //         }
  //       }, {
  //         path: 'elderlyUniversity',
  //         name: 'elderlyUniversity',
  //         component: () => import('@/views/ky_organization/organizationData/index'),
  //         meta: {
  //           title: '社区大数据',
  //         }
  //       }
  //     ]
  //   },


  // ........................景点管理............................
  //   {
  //     path: '/scenic',
  //     component: Layout,
  //     redirect: '/scenic/basicInfor',
  //     name: 'tree',
  //     meta: {
  //       title: '景点管理',
  //       icon: '景点'
  //     },
  //     children: [{
  //         path: 'audit',
  //         name: 'audit',
  //         component: () => import('@/views/ky_organization/index'),
  //         meta: {
  //           title: '景点入驻审核',
  //         }
  //       },
  //       {
  //         path: 'basicInfor',
  //         name: 'basicInfor',
  //         component: () => import('@/views/ky_organization/organizationInfor/index'),
  //         meta: {
  //           title: '景点基本信息',
  //         }
  //       }, {
  //         path: 'bigdata',
  //         name: 'bigdata',
  //         component: () => import('@/views/ky_organization/organizationData/index'),
  //         meta: {
  //           title: '景点大数据',
  //         }
  //       }
  //     ]
  //   },
  // ........................保险管理............................
  //   {
  //     path: '/insurance',
  //     component: Layout,
  //     redirect: '/insurance/basicInfor',
  //     name: 'tree',
  //     meta: {
  //       title: '保险管理',
  //       icon: 'baoxian'
  //     },
  //     children: [{
  //         path: 'audit',
  //         name: 'audit',
  //         component: () => import('@/views/ky_organization/index'),
  //         meta: {
  //           title: '保险入驻审核',
  //         }
  //       },
  //       {
  //         path: 'basicInfor',
  //         name: 'basicInfor',
  //         component: () => import('@/views/ky_organization/organizationInfor/index'),
  //         meta: {
  //           title: '保险基本信息',
  //         }
  //       }, {
  //         path: 'bigdata',
  //         name: 'bigdata',
  //         component: () => import('@/views/ky_organization/organizationData/index'),
  //         meta: {
  //           title: '保险大数据',
  //         }
  //       }
  //     ]
  //   },
  // ........................基金管理............................
  //   {
  //     path: '/fund',
  //     component: Layout,
  //     redirect: '/fund/basicInfor',
  //     name: 'tree',
  //     meta: {
  //       title: '基金管理',
  //       icon: 'jijin'
  //     },
  //     children: [{
  //         path: 'audit',
  //         name: 'audit',
  //         component: () => import('@/views/ky_organization/index'),
  //         meta: {
  //           title: '基金入驻审核',
  //         }
  //       },
  //       {
  //         path: 'basicInfor',
  //         name: 'basicInfor',
  //         component: () => import('@/views/ky_organization/organizationInfor/index'),
  //         meta: {
  //           title: '基金基本信息',
  //         }
  //       }, {
  //         path: 'bigdata',
  //         name: 'bigdata',
  //         component: () => import('@/views/ky_organization/organizationData/index'),
  //         meta: {
  //           title: '基金大数据',
  //         }
  //       }
  //     ]
  //   },
  // ........................医院管理............................
  //   {
  //     path: '/hospital',
  //     component: Layout,
  //     redirect: '/hospital/basicInfor',
  //     name: 'tree',
  //     meta: {
  //       title: '医院管理',
  //       icon: '医院'
  //     },
  //     children: [{
  //         path: 'audit',
  //         name: 'audit',
  //         component: () => import('@/views/ky_organization/index'),
  //         meta: {
  //           title: '医院入驻审核',
  //         }
  //       },
  //       {
  //         path: 'basicInfor',
  //         name: 'basicInfor',
  //         component: () => import('@/views/ky_organization/organizationInfor/index'),
  //         meta: {
  //           title: '医院基本信息',
  //         }
  //       }, {
  //         path: 'bigdata',
  //         name: 'bigdata',
  //         component: () => import('@/views/ky_organization/organizationData/index'),
  //         meta: {
  //           title: '医院大数据',
  //         }
  //       }
  //     ]
  //   },
  // ........................婚介公司管理............................
  //   {
  //     path: '/datingAgency',
  //     component: Layout,
  //     redirect: '/datingAgency/basicInfor',
  //     name: 'tree',
  //     meta: {
  //       title: '婚介公司管理',
  //       icon: 'hunjie'
  //     },
  //     children: [{
  //         path: 'audit',
  //         name: 'audit',
  //         component: () => import('@/views/ky_organization/index'),
  //         meta: {
  //           title: '婚介公司入驻审核',
  //         }
  //       },
  //       {
  //         path: 'basicInfor',
  //         name: 'basicInfor',
  //         component: () => import('@/views/ky_organization/organizationInfor/index'),
  //         meta: {
  //           title: '婚介公司基本信息',
  //         }
  //       }, {
  //         path: 'bigdata',
  //         name: 'bigdata',
  //         component: () => import('@/views/ky_organization/organizationData/index'),
  //         meta: {
  //           title: '婚介公司大数据',
  //         }
  //       }
  //     ]
  //   },

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

]
//异步挂载的路由
//动态需要根据权限加载的路由表 
export const asyncRoutes = [{
    path: '/permission',
    component: Layout,
    name: 'Permission',
    alwaysShow: true, // 总是显示在根菜单
    redirect: '/permission/directive',
    meta: {
      title: '系统管理',
      icon: '系统管理',
      role: ['admin', 'editor']
    }, //页面需要的权限
    children: [
      {
        path: 'directive',
        component: () => import('@/views/permission/directive'),
        name: 'DirectivePermission',
        meta: {
          title: '切换角色'
          // if do not set roles, means: this page does not require permission
        }
      },
      {
        path: 'role',
        component: () => import('@/views/permission/role'),
        name: 'Role',
        meta: {
          title: '角色管理',
          roles: ['admin', 'yc666','yq666']
        }
      }
    ]
  },
  // ........................寻医问药............................
  medicineRouter,
  // ........................商城商家管理............................
  //   merchantRouter,
  // ........................酒店管理............................
  //   hotelRouter,

  // ........................养老机构管理............................
  //   organizationRouter,
  // ........................康养人才管理............................
  //   {
  //     path: '/talentMan',
  //     component: Layout,
  //     redirect: '/talentMan/talentPool',
  //     name: 'TalentMan',
  //     meta: {
  //       title: '康养人才管理',
  //       icon: '人才'
  //     },
  //     children: [{
  //         path: 'talentPool',
  //         name: 'TalentPool',
  //         component: () => import('@/views/ky_talentsRecruitment/talentPool/index'),
  //         meta: {
  //           title: '简历/人才库',
  //         }
  //       },
  //       {
  //         path: 'talentRecomment',
  //         name: 'TalentRecomment',
  //         component: () => import('@/views/ky_talentsRecruitment/talentRecomment/index'),
  //         meta: {
  //           title: '猎头人才推荐',
  //         }
  //       },
  //       {
  //         path: 'mannReconmment',
  //         name: 'mannReconmment',
  //         hidden: true,
  //         component: () => import('@/views/ky_talentsRecruitment/mannReconmment/index'),
  //         meta: {
  //           title: '手动推荐',
  //         }
  //       },
  //       {
  //         path: 'autoReconmment',
  //         name: 'autoReconmment',
  //         hidden: true,
  //         component: () => import('@/views/ky_talentsRecruitment/autoReconmment/index'),
  //         meta: {
  //           title: '自动推荐',
  //         }
  //       },

  //     ]
  //   },
  //   // ........................用户管理............................
  //   {
  //     path: '/user',
  //     component: Layout,
  //     children: [{
  //       path: 'index',
  //       name: 'user',
  //       component: () => import('@/views/ky_user/index'),
  //       meta: {
  //         title: '用户管理',
  //         icon: 'yonghu'
  //       }
  //     }]
  //   },
  //   // ........................用户反馈............................
  //   {
  //     path: '/userFeedback',
  //     component: Layout,
  //     children: [{
  //       path: 'index',
  //       name: 'userFeedback',
  //       component: () => import('@/views/ky_userFeedback/index'),
  //       meta: {
  //         title: '用户反馈',
  //         icon: 'fankui'
  //       }
  //     }]
  //   },
  //   // ........................版本管理............................
  //   {
  //     path: '/version',
  //     component: Layout,
  //     children: [{
  //       path: 'index',
  //       name: 'version',
  //       component: () => import('@/views/ky_version/index'),
  //       meta: {
  //         title: '版本管理',
  //         icon: 'banben'
  //       }
  //     }]
  //   },
  //   // ........................财务管理............................
  //   {
  //     path: '/finance',
  //     component: Layout,
  //     children: [{
  //       path: 'index',
  //       name: 'finance',
  //       component: () => import('@/views/ky_version/index'),
  //       meta: {
  //         title: '财务管理',
  //         icon: 'finance'
  //       }
  //     }]
  //   },
  //   // ........................广告管理............................
  //   {
  //     path: '/advertising',
  //     component: Layout,
  //     children: [{
  //       path: 'index',
  //       name: 'advertising',
  //       component: () => import('@/views/ky_advertising/index'),
  //       meta: {
  //         title: '广告管理',
  //         icon: 'guanggao'
  //       }
  //     }]
  //   },
  //   // ........................评论管理............................
  //   {
  //     path: '/conment',
  //     component: Layout,
  //     children: [{
  //       path: 'index',
  //       name: 'conment',
  //       component: () => import('@/views/ky_conment/index'),
  //       meta: {
  //         title: '评论管理',
  //         icon: 'pinglun'
  //       }
  //     }]
  //   },
  //   // ........................分销管理............................
  //   {
  //     path: '/distributor',
  //     component: Layout,
  //     children: [{
  //       path: 'index',
  //       name: 'Distributor',
  //       component: () => import('@/views/ky_distributor/index'),
  //       meta: {
  //         title: '分销管理',
  //         icon: '分销商'
  //       }
  //     }]
  //   },
  //   // ........................消息管理............................
  //   {
  //     path: '/message',
  //     component: Layout,
  //     children: [{
  //       path: 'index',
  //       name: 'Message',
  //       component: () => import('@/views/ky_message/index'),
  //       meta: {
  //         title: '消息管理',
  //         icon: 'message'
  //       }
  //     }]
  //   },

  {
    path: '*',
    redirect: '/404',
    hidden: true
  }
];
const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({
    y: 0
  }),
  routes: constantRoutes
})

const router = createRouter()
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}
export default router
