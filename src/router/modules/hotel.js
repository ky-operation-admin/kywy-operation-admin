import Layout from '@/layout'

const hotelRouter = {
    path: '/hotel',
    component: Layout,
    redirect: '/hotel/basicInfor',
    name: 'Hotel',
    meta: {
      title: '酒店管理',
      icon: '酒店'
    },
    children: 
    [
        {
        path: 'audit',
        name: 'audit',
        component: () => import('@/views/ky_hotel/index'),
        meta: {
          title: '酒店入驻审核',
        }
      },
      {
        path: 'basicInfor',
        name: 'basicInfor',
        component: () => import('@/views/ky_hotel/hotelInfor/index'),
        meta: {
          title: '酒店基本信息',
        }
      },
      {
        path: 'hotel_message',
        name: 'HotelMessage',
        component: () => import('@/views/ky_hotel/hotelMessage/index'),
        meta: {
          title: '酒店消息管理',
        }
      },
      {
        path: 'hotel_bigdata',
        name: 'HotelBigdata',
        component: () => import('@/views/ky_hotel/hotelData/index'),
        meta: {
          title: '酒店大数据',
        }
      },
      {
        path: 'hotel_order',
        name: 'HotelOrder',
        component: () => import('@/views/ky_hotel/hotelOrder/index'),
        meta: {
          title: '酒店下单管理',
        }
      }, {
        path: 'hotel_putaway',
        name: 'HotelPutaway',
        component: () => import('@/views/ky_hotel/hotelPutaway/index'),
        meta: {
          title: '酒店上架管理',
        }
      }, {
        path: 'hotel_accout',
        name: 'HotelAccout',
        component: () => import('@/views/ky_hotel/hotelAccount/index'),
        meta: {
          title: '酒店账户管理',
        }
      }, {
        path: 'hotel_dis',
        name: 'HotelDis',
        component: () => import('@/views/ky_hotel/hotelDistribution/index'),
        meta: {
          title: '酒店分销管理',
        }
      }, {
        path: 'hotel_after',
        name: 'HotelAfter',
        component: () => import('@/views/ky_hotel/hotelAftersale/index'),
        meta: {
          title: '酒店售后管理',
        }
      },
      {
        path: 'hotel_hq',
        name: 'HotelHq',
        component: () => import('@/views/ky_hotel/hotelData/index'),
        meta: {
          title: '市场行情监测',
        }
      },
      {
        path: 'hotel_complain',
        component: () => import('@/views/ky_merchant/merchantContent/index'),
        name: 'HotelComplain',
        meta: {
          title: '酒店投诉管理'
        },
        children: [{
          path: 'hotel_pl',
          name: 'HotelPl',
          component: () => import('@/views/ky_hotel/hotelContent/hotel_conment_audit'),
          meta: {
            title: '酒店投诉管理',
          }
        }, {
          path: 'hot_serve',
          name: 'HotServe',
          component: () => import('@/views/ky_hotel/hotelContent/hotel_conment_audit'),
          meta: {
            title: '消费者投诉管理',
          }
        }]
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
  }

  export default hotelRouter