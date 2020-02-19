// 寻医问药板块
import Layout from '@/layout'

const medicineRouter = {
  path: '/medicine',
  component: Layout,
  redirect: '/medicine/doctorInfo',
  name: 'tree',
  meta: {
    title: '寻医问药',
    icon: '酒店'
  },
  children: [{
      path: 'audit',
      name: 'audit',
      component: () => import('@/views/ky_medicine/index'),
      meta: {
        title: '医生入驻审核',
      }
    },
    {
      path: 'doctorInfo',
      name: 'doctorInfo',
      component: () => import('@/views/ky_medicine/doctorInfo/index'),
      meta: {
        title: '医生基本信息',
      }
    },
    {
      path: 'message',
      name: 'message',
      component: () => import('@/views/ky_medicine/message/index'),
      meta: {
        title: '消息管理',
      }
    },
    {
      path: 'medicineOrder',
      name: 'medicineOrder',
      component: () => import('@/views/ky_medicine/medicineOrder/index'),
      meta: {
        title: '订单管理',
      }
    },
    // {
    //   path: 'bigdata2',
    //   name: 'bigdata2',
    //   component: () => import('@/views/ky_hotel/hotelPutaway/index'),
    //   meta: {
    //     title: '酒店上架管理',
    //   }
    // }, {
    //   path: 'bigdata3',
    //   name: 'bigdata3',
    //   component: () => import('@/views/ky_hotel/hotelAccount/index'),
    //   meta: {
    //     title: '酒店账户管理',
    //   }
    // }, {
    //   path: 'bigdata4',
    //   name: 'bigdata4',
    //   component: () => import('@/views/ky_hotel/hotelDistribution/index'),
    //   meta: {
    //     title: '酒店分销管理',
    //   }
    // }, {
    //   path: 'bigdata5',
    //   name: 'bigdata5',
    //   component: () => import('@/views/ky_hotel/hotelAftersale/index'),
    //   meta: {
    //     title: '酒店售后管理',
    //   }
    // },
    // {
    //   path: 'bigdata6',
    //   name: 'bigdata6',
    //   component: () => import('@/views/ky_hotel/hotelData/index'),
    //   meta: {
    //     title: '市场行情监测',
    //   }
    // },
    // {
    //   path: 'ts',
    //   name: 'ts',
    //   component: () => import('@/views/ky_merchant/merchantContent/index'),
    //   name: 'merchantContent',
    //   meta: {
    //     title: '酒店投诉管理'
    //   },
    //   children: [{
    //     path: 'mer_pl',
    //     name: 'mer_pl',
    //     component: () => import('@/views/ky_hotel/hotelContent/hotel_conment_audit'),
    //     meta: {
    //       title: '酒店投诉管理',
    //     }
    //   }, {
    //     path: 'mer_serve',
    //     name: 'mer_serve',
    //     component: () => import('@/views/ky_hotel/hotelContent/hotel_conment_audit'),
    //     meta: {
    //       title: '消费者投诉管理',
    //     }
    //   }]
    // },
    // {
    //   path: 'hotelContent',
    //   component: () => import('@/views/ky_hotel/hotelContent/index'),
    //   name: 'hotelContent',
    //   meta: {
    //     title: '酒店内容审核'
    //   },
    //   children: [{
    //     path: 'hotel_comment',
    //     name: 'hotel_comment',
    //     component: () => import('@/views/ky_hotel/hotelContent/hotel_conment_audit'),
    //     meta: {
    //       title: '酒店评论审核',
    //     }
    //   }, {
    //     path: 'hotel_serve',
    //     name: 'hotel_serve',
    //     component: () => import('@/views/ky_hotel/hotelContent/hotel_postserve_audit'),
    //     meta: {
    //       title: '酒店上架服务审核',
    //     }
    //   }, {
    //     path: 'hotel_postjob',
    //     name: 'hotel_postjob',
    //     component: () => import('@/views/ky_hotel/hotelContent/hotel_postjob_audit'),
    //     meta: {
    //       title: '酒店发布职位审核',
    //     }
    //   }, ]
    // }

  ]
}

export default medicineRouter
