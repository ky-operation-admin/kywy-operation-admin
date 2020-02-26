<template>
  <div :class="classObj" class="app-wrapper">
  <!-- <div class="app-wrapper"> -->
    <div v-if="device==='mobile'&&sidebar.opened" class="drawer-bg" @click="handleClickOutside" />
    <sidebar class="sidebar-container" />
    <div class="main-container" :class="{hasTagsView:needTagsView}">
      <div :class="{'fixed-header':fixedHeader}">
        <navbar />
        <tags-view v-if="needTagsView"></tags-view>
      </div>
      <app-main />
      <!-- 个性设置 -->
      <!-- <right-panel v-if="showSettings" :buttonTop=15>
        <settings />
      </right-panel> -->
    </div>
  </div>
</template>

<script>
import RightPanel from '@/components/RightPanel'
import { Navbar, Sidebar, AppMain, Settings } from './components'
import tagsView from './components/TagsView/index'
import ResizeMixin from './mixin/ResizeHandler'
import { resetRouter } from '../router'

export default {
  name: 'Layout',
  components: {
    Navbar,
    Sidebar,
    AppMain,
    tagsView,
    // RightPanel,
    // Settings
  },
  mixins: [ResizeMixin],
  computed: {
    sidebar () {
      return this.$store.state.app.sidebar
    },
    device () {
      return this.$store.state.app.device
    },
    fixedHeader () {
    //   console.log('fixedHeader', this.$store.state.settings.fixedHeader)
      return this.$store.state.settings.fixedHeader
    },
    showSettings () {
      return this.$store.state.settings.showSettings
    },
    needTagsView () {
      //   console.log('needTagsView', this.$store.state)
      return this.$store.state.settings.tagsView
    },
    classObj () {
      return {
        hideSidebar: !this.sidebar.opened,
        openSidebar: this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation,
        mobile: this.device === 'mobile'
      }
    }
  },
  methods: {
    handleClickOutside () {
      this.$store.dispatch('app/closeSideBar', { withoutAnimation: false })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/styles/mixin.scss';
@import '~@/styles/variables.scss';

.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
  &.mobile.openSidebar {
    position: fixed;
    top: 0;
  }
}
.drawer-bg {
  background: #000;
  opacity: 0.3;
  width: 100%;
  top: 0;
  height: 100%;
  position: absolute;
  z-index: 999;
}

.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: calc(100% - #{$sideBarWidth});
  transition: width 0.28s;
}

.hideSidebar .fixed-header {
  width: calc(100% - 54px);
}
.fixed {
  padding-top: 113px;
}
.mobile .fixed-header {
  width: 100%;
}
</style>
