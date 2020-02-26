import Mock from 'mockjs'
import { deepClone } from '../../src/utils/index.js'
import { asyncRoutes, constantRoutes } from './routes.js'

const routes = deepClone([...constantRoutes, ...asyncRoutes])

const roles = [
  {
    key: 'admin',
    name: 'admin',
    description: '超级管理员，可以查看所有页面,具有所有增删改权限',
    routes: routes
  },
  {
    key: 'editor',
    name: 'editor',
    description: '正常的编辑器，可以看到除权限页以外的所有页面,具有部分增删改权限',
    routes: routes.filter(i => i.path !== '/permission')// just a mock
  },
  {
    key: 'yc666',
    name: 'yc666',
    description: 'yc的编辑器，可以看到除权限页以外的所有页面,具有部分增删改权限',
    routes: routes.filter(i => i.path !== '/permission')// just a mock
  },
  {
    key: 'yq666',
    name: 'yq666',
    description: 'yq的编辑器，可以看到除权限页以外的所有页面,具有部分增删改权限',
    routes: routes.filter(i => i.path !== '/permission')// just a mock
  },
  {
    key: 'visitor',
    name: 'visitor',
    description: '只是一个游客，只能看到主页和文档页。',
    routes: [{
      path: '',
      redirect: 'dashboard',
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          meta: { title: 'dashboard', icon: 'dashboard' }
        }
      ]
    }]
  }
]

export default [
  // mock get all routes form server
  {
    url: '/routes',
    type: 'get',
    response: _ => {
      return {
        code: 20000,
        data: routes
      }
    }
  },

  // mock get all roles form server
  {
    url: '/roles',
    type: 'get',
    response: _ => {
      return {
        code: 20000,
        data: roles
      }
    }
  },

  // add role
  {
    url: '/role',
    type: 'post',
    response: {
      code: 20000,
      data: {
        key: Mock.mock('@integer(300, 5000)')
      }
    }
  },

  // update role
  {
    url: '/role/[A-Za-z0-9]',
    type: 'put',
    response: {
      code: 20000,
      data: {
        status: 'success'
      }
    }
  },

  // delete role
  {
    url: '/role/[A-Za-z0-9]',
    type: 'delete',
    response: {
      code: 20000,
      data: {
        status: 'success'
      }
    }
  }
]
