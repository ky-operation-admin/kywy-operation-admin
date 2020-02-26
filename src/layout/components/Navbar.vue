<template>
  <div class="navbar">
    <!-- 导航收缩框 -->
    <hamburger :is-active="sidebar.opened" class="hamburger-container" @toggleClick="toggleSideBar" />
    <!-- 导航面包屑 -->
    <breadcrumb class="breadcrumb-container" />

    <div class="right-menu">
        <!-- 头部搜索 -->
      <search id="header-search" class="right-menu-item" />
      <div class="home" @click="gotohome">
        首页
      </div>
      <!-- 全屏工具 -->
      <screenfull id="screenfull" class="right-menu-item hover-effect" />
      <!-- <el-dropdown class="avatar-container" trigger="click">
        <div class="avatar-wrapper">
          <img src='@/assets/kyuser.png' style="width:36px;height:36px;vertical-align:middle;margin-right:3px">
          <i class="el-icon-caret-bottom" style="vertical-align:middle;" />
        </div>
        <el-dropdown-menu slot="dropdown" class="user-dropdown">
          <router-link to="/">
            <el-dropdown-item>
              账户
            </el-dropdown-item>
          </router-link>
          <el-dropdown-item divided>
            <span style="display:block;" @click="logout">退出</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown> -->
      <div class="right-menu-item" v-popover:popover-personal>
      <span class="user-info"><img :src="user.avatar" />{{user.name}}</span>
          <el-popover ref="popover-personal" placement="bottom-end" trigger="click" :visible-arrow="false">
            <personal-panel :user="user"></personal-panel>
          </el-popover>
      </div>
      <div class="right-menu-item">
          <right-panel v-if="showSettings" :buttonTop=15>
        <settings />
      </right-panel>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import RightPanel from '@/components/RightPanel'
import Breadcrumb from '@/components/Breadcrumb'
import Settings from '@/layout/components/Settings'
import Hamburger from '@/components/Hamburger'
import Search from '@/components/HeaderSearch'
import PersonalPanel from "@/components/Core/PersonalPanel"
import Screenfull from '@/layout/components/Screenfull/index'
import { getName, setName, removeName } from '@/utils/auth'
export default {
  data () {
    return {
      userName: '',
      user: {
        name: "Louis",
        avatar: "",
        role: "超级管理员",
        registeInfo: "注册时间：2018-12-20 "
      },
    }
  },
  components: {
    Breadcrumb,
    Screenfull,
    Hamburger,
    Search,
    Settings,
    RightPanel,
    PersonalPanel
  },
  computed: {
    ...mapGetters([
      'name',
      'sidebar',
      'avatar'
    ]),    
    showSettings () {
      return this.$store.state.settings.showSettings
    },
    getUserName () {
      return getName()
    }
  },
    mounted() {
    // 先用模拟头像
    if (this.avatar) {
      this.user.avatar = require("@/assets/user1.png")
      let a =this.getUserName
    //   this.user.name = a.split('-')[0]
      this.user.name = a.substring(0,a.indexOf("-")).trim();//-号前面
    }
  },
  methods: {
    toggleSideBar () {
      this.$store.dispatch('app/toggleSideBar')
    },
    async logout () {
      removeName();
      await this.$store.dispatch('user/logout')
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    },
    gotohome () {
      this.$router.push({ path: '/' })
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  display: inline-block;
  padding: 0 20px;
  float: left;
  margin-right: 10px;
  height: 100%;
  font-size: 14px;
  cursor: pointer;
  color: #5a5e66;
  vertical-align: text-bottom;
  &:hover {
    background: #ccc;
  }
}
.navbar {
  height: 80px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);

  .hamburger-container {
    line-height: 80px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background 0.3s;
    -webkit-tap-highlight-color: transparent;

    &:hover {
      background: rgba(0, 0, 0, 0.025);
    }
  }

  .breadcrumb-container {
    float: left;
  }

  .right-menu {
    float: right;
    height: 100%;
    line-height: 80px;
    .user-info {
    font-size: 20px;
    cursor: pointer;
    img{
    width: 40px;
    height: 40px;
    border-radius: 10px;
    margin: 20px 0px 20px 10px;
    float: right;
}
}
    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      float: left;
      margin-right: 30px;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background 0.3s;

        &:hover {
          background: rgba(0, 0, 0, 0.025);
        }
      }
    }

    .avatar-container {
      margin-right: 30px;

      .avatar-wrapper {
        position: relative;
        cursor: pointer;
        .user-avatar {
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }
        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 35px;
          font-size: 17px;
        }
      }
    }
  }
}
</style>
