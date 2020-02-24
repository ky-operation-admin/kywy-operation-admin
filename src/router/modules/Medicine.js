// 寻医问药板块
import Layout from '@/layout'

const medicineRouter = {
  path: '/medicine',
  component: Layout,
  redirect: '/medicine/index',
  name: 'Medicine',
  meta: {
    title: '寻医问药',
    icon: 'medicine'
  },
  children: [{
      path: 'patient',
      name: 'Patient',
      component: () => import('@/views/ky_medicine/patient/index'),
      meta: {
        title: '患者管理',
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
      meta: {
        title: '医生管理',
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
      path: 'medicine_message',
      name: 'MedicineMessage',
      component: () => import('@/views/ky_medicine/message/index'),
      meta: {
        title: '消息管理',
      }
    },
    {
      path: 'medicineOrder',
      name: 'MedicineOrder',
      component: () => import('@/views/ky_medicine/medicineOrder/index'),
      meta: {
        title: '订单管理',
      }
    }

  ]
}

export default medicineRouter
