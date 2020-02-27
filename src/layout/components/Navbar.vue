<template>
  <div class="navbar" :style="{'background':theme}">
    <!-- 导航收缩框 -->
    <hamburger :is-active="sidebar.opened" class="hamburger-container" @toggleClick="toggleSideBar" />
    <!-- 导航面包屑 -->
    <breadcrumb class="breadcrumb-container" />
    <span class="toolbar">
      <el-menu class="el-menu-demo" mode="horizontal" :background-color='theme' text-color="#fff" :active-text-color="theme">
        <!-- 首页 -->
        <el-menu-item index="1" @click="$router.push('/')"><i style="color:#fff" class="fa fa-home fa-lg"></i>  </el-menu-item>
        <!-- 导航搜索 -->
        <el-menu-item index="2"><search style="color:#fff;" id="header-search"/></el-menu-item>
        <!-- 全屏工具 -->
        <el-menu-item index="3"><screenfull style="color:#fff;" id="screenfull" /></el-menu-item>
        <el-menu-item index="4" v-popover:popover-personal>
          <!-- 用户信息 -->
          <span style="color:#fff;" class="user-info"><img :src="user.avatar" />{{getUserName}}</span>
          <el-popover ref="popover-personal"   placement="bottom-end" trigger="click" :visible-arrow="false">
            <personal-panel :user="user"></personal-panel>
          </el-popover>
        </el-menu-item>
      </el-menu>
    </span>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Breadcrumb from '@/components/Breadcrumb'
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
        registeInfo: "注册时间：2020-2-25 "
      },
      activeIndex: '1',
    }
  },
  components: {
    Breadcrumb,
    Screenfull,
    Hamburger,
    Search,
    PersonalPanel
  },
  computed: {
    ...mapGetters([
      'name',
      'sidebar',
      'avatar'
    ]),
    // 动态获取设置的主题颜色
    theme() {
      return this.$store.state.settings.theme
    },
    showSettings () {
      return this.$store.state.settings.showSettings
    },
    getUserName () {
      return this.$store.getters.roles[0]
      console.log('$store.getters.roles',$store.getters.roles);
    }
  },
    mounted() {
    // 先用模拟头像
    this.user.name = this.getUserName
    if (this.avatar) {
      this.user.avatar = require("@/assets/user1.png")
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
.toolbar {
  float: right;
}
.navbar {
  height: 60px;
  overflow: hidden;
  position: relative;
  background: #1890FF;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
//   禁止选中文本
   -o-user-select: none;
  -moz-user-select: none; /*火狐 firefox*/
  -webkit-user-select: none; /*webkit浏览器*/
  -ms-user-select: none; /*IE10+*/
  -khtml-user-select :none; /*早期的浏览器*/
  user-select: none; 
  .hamburger-container {
    line-height: 60px;
    height: 100%;
    float: left;
    color: #fff;
    cursor: pointer;
    transition: background 0.3s;
    -webkit-tap-highlight-color: transparent;

    &:hover {
      background: rgb(19,115,204);
    }
  }

  .breadcrumb-container {
    float: left;
  }

  .toolbar {
    float: right;
    height: 100%;
    line-height: 60px;
    .user-info {
    font-size: 20px;
    cursor: pointer;
    img{
    width: 40px;
    height: 40px;
    border-radius: 10px;
    margin: 10px 0px 10px 10px;
    float: right;
}
}
    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 15px;
      height: 100%;
      float: left;
    //   margin-right: 30px;
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
