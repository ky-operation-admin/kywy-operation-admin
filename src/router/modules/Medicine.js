// 寻医问药板块
import Layout from '@/layout'

const medicineRouter = {
  path: '/medicine',
  component: Layout,
  redirect: '/medicine/patient/patientInfo',
  name: 'Medicine',
  meta: {
    title: '寻医问药',
    icon: 'medicine'
  },
  children: [
      {
      path: 'patient',
      name: 'Patient',
      component: () => import('@/views/ky_medicine/patient/index'),
      redirect: '/medicine/patient/patientInfo',
      meta: {
        title: '用户统计',
      },
      children: [{
        path: 'patientInfo',
        name: 'PatientInfo',
        component: () => import('@/views/ky_medicine/patient/patientInfo'),
        meta: {
          title: '患者基本信息',
        }
      }, {
        path: 'patientOrder',
        name: 'PatientOrder',
        component: () => import('@/views/ky_medicine/doctor/doctorInfo/index'),
        meta: {
          title: '患者下单信息',
        }
      }, ]
    },
    {
      path: 'doctor',
      name: 'Doctor',
      component: () => import('@/views/ky_medicine/doctor/index'),
      redirect: '/medicine/doctor/doctorAudit',
      meta: {
        title: '医生服务管理',
      },
      children: [{
          path: 'doctorAudit',
          name: 'DoctorAudit',
          component: () => import('@/views/ky_medicine/doctor/doctorAudit'),
          meta: {
            title: '医生入驻审核',
          }
        },
        {
          path: 'doctorInfo',
          name: 'DoctorInfo',
          component: () => import('@/views/ky_medicine/doctor/doctorInfo/index'),
          meta: {
            title: '医生基本信息',
          }
        },
        {
          path: 'docReorder',
          name: 'DocReorder',
          component: () => import('@/views/ky_medicine/message/index'),
          meta: {
            title: '医生接单',
          }
        }
      ]
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
      }
    },
    

  ]
}

export default medicineRouter
