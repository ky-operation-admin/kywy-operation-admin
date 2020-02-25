import {
  login,
  logout,
  getInfo
} from '@/api/user'
import {
  getToken,
  setToken,
  removeToken,
  getName,
  setName,
  removeName
} from '@/utils/auth'
import router, {
  resetRouter
} from '@/router'

const state = {
  token: getToken(),
  name: '',
  avatar: '',
  introduction: '',
  roles: []
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
    // window.console.log('token', state);
  },
  SET_INTRODUCTION: (state, introduction) => {
    state.introduction = introduction
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles
  }
}

const actions = {
  // 登陆
  //   login({commit}, userInfo) {
  //     const {
  //       username,
  //       password
  //     } = userInfo
  //     let fd = new FormData()
  //     fd.append('username', username)
  //     fd.append('password', password)
  //     return new Promise((resolve, reject) => {
  //       login(fd).then(response => {
  //         // 设置保存token 
  //         console.log('res', response);
  //         console.log('response.token', response.token);
  //         commit('SET_TOKEN', response.token)
  //         // setToken(response.token)
  //         // 设置保存用户名
  //         commit('SET_TOKEN', response.token)
  //         setToken(response.token)
  //         // commit('SET_NAME', username)
  //         // setName(username)
  //         // commit('SET_AVATAR', response.token)
  //         resolve()
  //       }).catch(error => {
  //         reject(error)
  //       })
  //     })
  //   },
  login({
    commit
  }, userInfo) {
    const {
      username,
      password
    } = userInfo
    return new Promise((resolve, reject) => {
      login({
        username: username.trim(),
        password: password
      }).then(response => {
        console.log('res', response);
        const {
          data
        } = response
        commit('SET_TOKEN', data.token)
        setToken(data.token)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },
  // 获取用户信息
  getInfo({
    commit,
    state
  }) {
    return new Promise((resolve, reject) => {
      getInfo(state.token).then(response => {
        const {
          data
        } = response
        if (!data) {
          reject('Verification failed, please Login again.')
        }
        const {
          roles,
          name,
          avatar,
          introduction
        } = data
        // console.log('getInfodata', data);
        // roles must be a non-empty array
        if (!roles || roles.length <= 0) {
          reject('getInfo: roles must be a non-null array!')
        }
        setName(name)
        commit('SET_ROLES', roles)
        commit('SET_NAME', name)
        commit('SET_AVATAR', avatar)
        commit('SET_INTRODUCTION', introduction)
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  // 登出
  logout({
    commit,
    state
  }) {
    // return new Promise((resolve, reject) => {
    //   logout(state.token).then(() => {
    //     commit('SET_TOKEN', '')
    //     removeToken()
    //     resetRouter()
    //     resolve()
    //   }).catch(error => {
    //     reject(error)
    //   })
    // })
    return new Promise((resolve, reject) => {
      commit('SET_TOKEN', '')
      commit('SET_NAME', '')
      removeToken()
      removeName()
      resetRouter()
      resolve()
    })
  },

  // remove token
  resetToken({
    commit
  }) {
    return new Promise(resolve => {
      commit('SET_TOKEN', '')
      commit('SET_ROLES', [])
      removeToken()
      resolve()
    })
  },
  // 动态修改权限
  changeRoles({
    commit,
    dispatch
  }, role) {
    return new Promise(async resolve => {
      const token = role + '-token'

      commit('SET_TOKEN', token)
      setToken(token)

      const {
        roles
      } = await dispatch('getInfo')

      resetRouter()

      // 根据角色生成可访问路由映射
      const accessRoutes = await dispatch('permission/generateRoutes', roles, {
        root: true
      })

      // 动态添加可访问路由
      router.addRoutes(accessRoutes)

      // 重置已访问的视图和缓存的视图
      dispatch('tagsView/delAllViews', null, {
        root: true
      })

      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
