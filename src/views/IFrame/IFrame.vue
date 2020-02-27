<template>
  <div class="iframe-container">
    <iframe :src="src" scrolling="auto" frameborder="0" class="frame" :onload="onloaded()">
    </iframe>
  </div>
</template>

<script>
export default {
  data() {
    //   内联框架,引入外部网站(如接口文档)
    return {
      src: "",
      loading: null
    };
  },
  methods: {
    // 获取路径
    resetSrc: function(url) {
      this.src = url
    },
    onloaded: function() {
      if(this.loading) {
        this.loading.close()
      }
    }
  },
  mounted() {
    this.resetSrc('http://120.25.214.5:8081/swagger-ui.html#/');
  },
//   watch: {
//     $route: {
//       handler: function(val, oldVal) {
//         // 如果是跳转到嵌套页面，切换iframe的url
//         this.resetSrc('http://120.25.214.5:8081/swagger-ui.html#/');
//       }
//     }
//   }
};
</script>

<style lang="scss">
.iframe-container {
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;;
  bottom: 0px;
  .frame {
    width: 100%;
    height: 100%;
  }
}
</style>
