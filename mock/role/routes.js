// Just a mock data

export const constantRoutes = [
  // 此路由用于刷新页面并且避免报错
  {
    path: '/redirect',
    component: 'layout/Layout',
    hidden: true,
    children: [{
      path: '/redirect/:path*',
      component: 'views/redirect/index'
    }]
  },
  {
    path: '/login',
    component: 'views/ky_login/index',
    hidden: true
  },

  {
    path: '/404',
    component: 'views/404',
    hidden: true
  },

  {
    path: '',
    component: 'layout/Layout',
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: 'views/dashboard/index',
      meta: {
        title: '管理首页',
        icon: '首页',
        affix: true
      }
    }]
  },
  // ........................平台规则............................
  {
    path: '/platform_rule',
    component: 'layout/Layout',
    children: [{
      path: 'index',
      name: 'Platform_rule',
      component: 'views/ky_rule/index',
      meta: {
        title: '平台规则',
        icon: 'rule'
      }
    }]
  },

]
//异步挂载的路由
//动态需要根据权限加载的路由表 
export const asyncRoutes = [{
    path: '/permission',
    component: 'layout/Layout',
    name: 'Permission',
    redirect: 'permission/page',
    meta: {
      title: '权限管理',
      icon: 'role',
      role: ['admin', 'yc666']
    }, //页面需要的权限
    children: [{
        path: 'page',
        component: 'views/permission/page',
        name: 'Page',
        meta: {
          title: '账号一览',
          role: ['admin', 'yc666']
        } //页面需要的权限
      },
      {
        path: 'directive',
        component: 'views/permission/directive',
        name: 'DirectivePermission',
        meta: {
          title: '权限指令'
        }
      },
      {
        path: 'role',
        component: 'views/permission/role',
        name: 'Role',
        meta: {
          title: '账号权限设置',
          roles: ['admin', 'yc666']
        }
      }
    ]
  },
  // ........................寻医问药............................
  //   medicineRouter,
  // ........................商城商家管理............................
  //   merchantRouter,
  // ........................酒店管理............................
  //   hotelRouter,

  // ........................养老机构管理............................
  //   organizationRouter,
  // ........................康养人才管理............................
  {
    path: '/talentMan',
    component: 'layout/Layout',
    redirect: '/talentMan/talentPool',
    name: 'TalentMan',
    meta: {
      title: '康养人才管理',
      icon: '人才'
    },
    children: [{
        path: 'talentPool',
        name: 'TalentPool',
        component: 'views/ky_talentsRecruitment/talentPool/index',
        meta: {
          title: '简历/人才库',
        }
      },
      {
        path: 'talentRecomment',
        name: 'TalentRecomment',
        component: 'views/ky_talentsRecruitment/talentRecomment/index',
        meta: {
          title: '猎头人才推荐',
        }
      },
      {
        path: 'mannReconmment',
        name: 'mannReconmment',
        hidden: true,
        component: 'views/ky_talentsRecruitment/mannReconmment/index',
        meta: {
          title: '手动推荐',
        }
      },
      {
        path: 'autoReconmment',
        name: 'autoReconmment',
        hidden: true,
        component: 'views/ky_talentsRecruitment/autoReconmment/index',
        meta: {
          title: '自动推荐',
        }
      },

    ]
  },
  // ........................用户管理............................
  {
    path: '/user',
    component: 'layout/Layout',
    children: [{
      path: 'index',
      name: 'user',
      component: 'views/ky_user/index',
      meta: {
        title: '用户管理',
        icon: 'yonghu'
      }
    }]
  },
  // ........................用户反馈............................
  {
    path: '/userFeedback',
    component: 'layout/Layout',
    children: [{
      path: 'index',
      name: 'userFeedback',
      component: 'views/ky_userFeedback/index',
      meta: {
        title: '用户反馈',
        icon: 'fankui'
      }
    }]
  },
  // ........................版本管理............................
  {
    path: '/version',
    component: 'layout/Layout',
    children: [{
      path: 'index',
      name: 'version',
      component: 'views/ky_version/index',
      meta: {
        title: '版本管理',
        icon: 'banben'
      }
    }]
  },
  // ........................财务管理............................
  {
    path: '/finance',
    component: 'layout/Layout',
    children: [{
      path: 'index',
      name: 'finance',
      component: 'views/ky_version/index',
      meta: {
        title: '财务管理',
        icon: 'finance'
      }
    }]
  },
  // ........................广告管理............................
  {
    path: '/advertising',
    component: 'layout/Layout',
    children: [{
      path: 'index',
      name: 'advertising',
      component: 'views/ky_advertising/index',
      meta: {
        title: '广告管理',
        icon: 'guanggao'
      }
    }]
  },
  // ........................评论管理............................
  {
    path: '/conment',
    component: 'layout/Layout',
    children: [{
      path: 'index',
      name: 'conment',
      component: 'views/ky_conment/index',
      meta: {
        title: '评论管理',
        icon: 'pinglun'
      }
    }]
  },
  // ........................分销管理............................
  {
    path: '/distributor',
    component: 'layout/Layout',
    children: [{
      path: 'index',
      name: 'Distributor',
      component: 'views/ky_distributor/index',
      meta: {
        title: '分销管理',
        icon: '分销商'
      }
    }]
  },
  // ........................消息管理............................
  {
    path: '/message',
    component: 'layout/Layout',
    children: [{
      path: 'index',
      name: 'Message',
      component: 'views/ky_message/index',
      meta: {
        title: '消息管理',
        icon: 'message'
      }
    }]
  },

  {
    path: '*',
    redirect: '/404',
    hidden: true
  }
];
