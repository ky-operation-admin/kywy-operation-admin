<template>
  <div class="sidebar-logo-container" :class="{'collapse':collapse}">
    <transition name="sidebarLogoFade">
      <router-link v-if="collapse" key="collapse" class="sidebar-logo-link" to="/">
        <img v-if="elselogo" :src="elselogo" class="sidebar-logo">
        <!-- <h1 v-else class="sidebar-title">{{ title }} </h1> -->
      </router-link>
      <router-link v-else key="expand" class="sidebar-logo-link" to="/">
        <img v-if="logo" :src="logo" class="sidebar-logo">
        <!-- <h1 class="sidebar-title">{{ title }} </h1> -->
      </router-link>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'SidebarLogo',
  props: {
    collapse: {
      type: Boolean,
      required: true
    }
  },
  data () {
    return {
      title: '康养无忧后台管理系统',
      logo: require('@/assets/logo1.png'),
      elselogo:require('@/assets/kywylogo.jpg'),
    }
  }
}
</script>

<style lang="scss" scoped>
.sidebarLogoFade-enter-active {
  transition: opacity 1.5s;
}

.sidebarLogoFade-enter,
.sidebarLogoFade-leave-to {
  opacity: 0;
}

.sidebar-logo-container {
  position: relative;
  width: 100%;
  height: 60px;
  // height: 50px;
  line-height: 50px;
  background: #EDEEE2;
  text-align: center;
  overflow: hidden;

  & .sidebar-logo-link {
    height: 100%;
    width: 100%;
    line-height: 60px;

    & .sidebar-logo {
      width: 101px;
      height: 60px;
      vertical-align: middle;
      //   margin-right: 12px;
    }

    & .sidebar-title {
      display: inline-block;
      width: 100%;
      text-align: center;

      margin: 0;
      position: absolute;
      bottom: 10px;
      left: 0;
      color: rgba(29, 10, 10, 0.856);
      font-weight: 600;
      line-height: 18px;
      font-size: 18px;
      font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
      vertical-align: middle;
    }
  }

  &.collapse {
      background: #fff;
    .sidebar-logo {
      margin-right: 0px;
      width: 100%;
      height: 60%;
    }
  }
}
</style>
