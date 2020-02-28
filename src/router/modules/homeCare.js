import Layout from '@/layout'

const homeCareRouter = {
    path: '/homeCare',
    component: Layout,
    redirect: '/homeCare/user_stat',
    name: 'HomeCare',
    meta: {
      title: '居家护理',
      icon: '居家护理'
    },
    children: 
    [
        {
        path: 'user_stat',
        name: 'UserStat',
        component: () => import('@/views/ky_homeCare/userStat'),
        meta: {
          title: '用户统计',
        }
      },
      {
        path: 'order_stat',
        name: 'OrderStat',
        component: () => import('@/views/ky_homeCare/orderStat'),
        meta: {
          title: '订单统计',
        }
      },
      {
        path: 'comment_stat',
        name: 'CommentStat',
        component: () => import('@/views/ky_homeCare/commentStat'),
        meta: {
          title: '评价统计',
        }
      },
      {
        path: 'attention_stat',
        name: 'AttentionStat',
        component: () => import('@/views/ky_homeCare/attentionStat'),
        meta: {
          title: '关注统计',
        }
      },
      {
        path: 'collect_stat',
        name: 'CoollectStat',
        component: () => import('@/views/ky_homeCare/collectStat'),
        meta: {
          title: '收藏统计',
        }
      }, 
    //   {
    //     path: 'collect_stat',
    //     name: 'HotelPutaway',
    //     component: () => import('@/views/ky_hotel/hotelPutaway/index'),
    //     meta: {
    //       title: '酒店上架管理',
    //     }
    //   }, {
    //     path: 'hotel_accout',
    //     name: 'HotelAccout',
    //     component: () => import('@/views/ky_hotel/hotelAccount/index'),
    //     meta: {
    //       title: '酒店账户管理',
    //     }
    //   }, {
    //     path: 'hotel_dis',
    //     name: 'HotelDis',
    //     component: () => import('@/views/ky_hotel/hotelDistribution/index'),
    //     meta: {
    //       title: '酒店分销管理',
    //     }
    //   }, {
    //     path: 'hotel_after',
    //     name: 'HotelAfter',
    //     component: () => import('@/views/ky_hotel/hotelAftersale/index'),
    //     meta: {
    //       title: '酒店售后管理',
    //     }
    //   },
    //   {
    //     path: 'hotel_hq',
    //     name: 'HotelHq',
    //     component: () => import('@/views/ky_hotel/hotelData/index'),
    //     meta: {
    //       title: '市场行情监测',
    //     }
    //   },
    //   {
    //     path: 'hotel_complain',
    //     component: () => import('@/views/ky_merchant/merchantContent/index'),
    //     name: 'HotelComplain',
    //     meta: {
    //       title: '酒店投诉管理'
    //     },
    //     children: [{
    //       path: 'hotel_pl',
    //       name: 'HotelPl',
    //       component: () => import('@/views/ky_hotel/hotelContent/hotel_conment_audit'),
    //       meta: {
    //         title: '酒店投诉管理',
    //       }
    //     }, {
    //       path: 'hot_serve',
    //       name: 'HotServe',
    //       component: () => import('@/views/ky_hotel/hotelContent/hotel_conment_audit'),
    //       meta: {
    //         title: '消费者投诉管理',
    //       }
    //     }]
    //   },
    //   {
    //     path: 'hotelContent',
    //     component: () => import('@/views/ky_hotel/hotelContent/index'),
    //     name: 'hotelContent',
    //     meta: {
    //       title: '酒店内容审核'
    //     },
    //     children: [{
    //       path: 'hotel_comment',
    //       name: 'hotel_comment',
    //       component: () => import('@/views/ky_hotel/hotelContent/hotel_conment_audit'),
    //       meta: {
    //         title: '酒店评论审核',
    //       }
    //     }, {
    //       path: 'hotel_serve',
    //       name: 'hotel_serve',
    //       component: () => import('@/views/ky_hotel/hotelContent/hotel_postserve_audit'),
    //       meta: {
    //         title: '酒店上架服务审核',
    //       }
    //     }, {
    //       path: 'hotel_postjob',
    //       name: 'hotel_postjob',
    //       component: () => import('@/views/ky_hotel/hotelContent/hotel_postjob_audit'),
    //       meta: {
    //         title: '酒店发布职位审核',
    //       }
    //     }, ]
    //   }

    ]
  }

  export default homeCareRouter