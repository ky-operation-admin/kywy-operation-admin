// 寻医问药板块
import Layout from '@/layout'

const medicineRouter = {
  path: '/medicine',
  component: Layout,
  redirect: '/medicine/user_stat/personal_user',
  name: 'Medicine',
  meta: {
    title: '寻医问药',
    icon: 'medicine'
  },
  children: [
      {
      path: 'user_stat',
      name: 'X-UserStat',
      component: () => import('@/views/ky_medicine/userStat'),
        redirect: '/medicine/user_stat/personal_user',
      meta: {
        title: '用户统计',
      },
      children: [{
        path: 'personal_user',
        name: 'PersonalUser',
        component: () => import('@/views/ky_medicine/userStat/personalUser'),
        meta: {
          title: '个人用户',
        }
      }, {
        path: 'doctor_user',
        name: 'DoctorUser',
        component: () => import('@/views/ky_medicine/userStat/doctorUser'),
        meta: {
          title: '医生用户',
        }
      }, ]
    },
    {
      path: 'doctor_serve',
      name: 'DoctorServe',
      component: () => import('@/views/ky_medicine/doctor/doctor_serve'),
      meta: {
        title: '医生服务管理',
      },
      
    },
    {
      path: 'need_order',
      name: 'NeedOrder',
      component: () => import('@/views/ky_medicine/medicineOrder/index'),
      meta: {
        title: '需求订单统计',
      }
    },
    {
      path: 'buy_order',
      name: 'BuyOrder',
      component: () => import('@/views/ky_medicine/medicineOrder/index'),
      meta: {
        title: '购买订单统计',
      }
    },
    {
      path: 'comment_statistics',
      name: 'CommentStatistics',
      component: () => import('@/views/ky_medicine/message/index'),
      meta: {
        title: '评价统计',
      }
    },
    {
      path: 'attention',
      name: 'Attention',
      component: () => import('@/views/ky_medicine/message/index'),
      meta: {
        title: '关注统计',
      }
    },
    {
      path: 'attestation',
      name: 'Attestation',
      component: () => import('@/views/ky_medicine/message/index'),
      meta: {
        title: '认证管理',
      }
    },
    {
      path: 'configuration',
      name: 'Configuration',
      component: () => import('@/views/ky_medicine/message/index'),
      meta: {
        title: '配置信息',
      },
      children: [{
        path: 'hospital_config',
        name: 'HospitalConfig',
        component: () => import('@/views/ky_medicine/patient/patientInfo'),
        meta: {
          title: '医院配置',
        }
      },
       {
        path: 'unit_config',
        name: 'UnitConfig',
        component: () => import('@/views/ky_medicine/doctor/doctorInfo/index'),
        meta: {
          title: '科室配置',
        }
      }, 
       {
        path: 'doctor_title_config',
        name: 'DoctorTitleConfig',
        component: () => import('@/views/ky_medicine/doctor/doctorInfo/index'),
        meta: {
          title: '医生职称配置',
        }
      }, 
       {
        path: 'doctor_experience_config',
        name: 'doctorExperienceConfig',
        component: () => import('@/views/ky_medicine/doctor/doctorInfo/index'),
        meta: {
          title: '医生经验配置',
        }
      }, 
    ]
    },


  ]
}

export default medicineRouter
