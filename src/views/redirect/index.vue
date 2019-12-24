<script>
// 刷新页面
export default {
  created() {
    const { params, query } = this.$route
    const { path } = params
    this.$router.replace({ path: '/' + path, query })
  },
  render: function(h) {
    return h() //避免警告消息
  }
}
</script>
