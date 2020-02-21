<template>
  <div class="navbar">
    <!-- 导航收缩框 -->
    <!-- <hamburger :is-active="sidebar.opened" class="hamburger-container" @toggleClick="toggleSideBar" /> -->

    <!-- <breadcrumb class="breadcrumb-container" /> -->

    <div class="right-menu">
      <div class="home" @click="gotohome">
        首页
      </div>
      <screenfull id="screenfull" class="right-menu-item hover-effect" />
      <el-dropdown class="avatar-container" trigger="click">
        <div class="avatar-wrapper">
          <span style="vertical-align:middle;margin-right:10px">设置</span>
          <i class="el-icon-caret-bottom" style="vertical-align:middle;" />
        </div>
        <el-dropdown-menu slot="dropdown" class="user-dropdown">
          <router-link to="/">
            <el-dropdown-item>
              主题
            </el-dropdown-item>
          </router-link>
          <el-dropdown-item divided>
            <span style="display:block;" @click="logout">皮肤</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <!-- <el-dropdown class="avatar-container" trigger="click">
        <div class="avatar-wrapper">
          <img src='@/assets/kyuser.png' class="user-avatar">
          <span>{{getUserName}}</span>
          <i class="el-icon-caret-bottom" />
        </div>
        <el-dropdown-menu slot="dropdown" class="user-dropdown">
          <router-link to="/">
            <el-dropdown-item>
              Home
            </el-dropdown-item>
          </router-link>
          <el-dropdown-item divided>
            <span style="display:block;" @click="logout">退出</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown> -->
      <el-dropdown class="avatar-container" trigger="click">
        <div class="avatar-wrapper">
          <img src='@/assets/kyuser.png' style="width:36px;height:36px;vertical-align:middle;margin-right:3px">
          <!-- <span style="vertical-align:middle;margin-right:10px">{{getUserName}}</span> -->
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
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Breadcrumb from '@/components/Breadcrumb'
// import Hamburger from '@/components/Hamburger'
import Screenfull from '@/layout/components/Screenfull/index'
import { getName, setName, removeName } from '@/utils/auth'
export default {
  data () {
    return {
      userName: ''
    }
  },
  components: {
    Breadcrumb,
    Screenfull
    // Hamburger
  },
  computed: {
    ...mapGetters([
      'name',
      'sidebar',
      'avatar'
    ]),
    getUserName () {
      return getName()
    }
  },
  methods: {
    toggleSideBar () {
      this.$store.dispatch('app/toggleSideBar')
    },
    async logout () {
      removeName();
      await this.$store.dispatch('user/logout')
      //   this.$store.commit('removeuserItem')
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
    line-height: 46px;
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
