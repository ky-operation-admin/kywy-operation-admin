import { login, logout, getInfo } from '@/api/user'
import { getToken, setToken, removeToken,getName,setName,removeName} from '@/utils/auth'
import { resetRouter } from '@/router'

const state = {
  token: getToken(),
  name: getName(),
  avatar: ''
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
    window.console.log('token', state);
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
    window.console.log('avatar', avatar);
    
  }
}

const actions = {
  // 登陆
  login({ commit }, userInfo) {
    
    const {
      username,
      password
    } = userInfo
    let fd = new FormData()
    fd.append('account', username)
    fd.append('password', password)
    return new Promise((resolve, reject) => {
      login(
          fd
        ).then(res => {
        // const { data } = response
        window.console.log('data1',res);
        // 设置保存token 
        commit('SET_TOKEN', res.token)
        setToken(res.token)
        // 设置保存用户名
        commit('SET_NAME', username)
        setName(username)
        commit('SET_AVATAR', res.token)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  // 获取用户信息
  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      getInfo(state.token).then(response => {
        const { data } = response

        if (!data) {
          reject('Verification failed, please Login again.')
        }
        const { name, avatar } = data
        commit('SET_NAME', name)
        commit('SET_AVATAR', avatar)
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  // 登出
  logout({ commit, state }) {
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
  resetToken({ commit }) {
    return new Promise(resolve => {
      commit('SET_TOKEN', '')
      removeToken()
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

