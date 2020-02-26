<template>
  <div>
    <div style="margin-bottom:15px;">
      你的账号: {{ roles }}
    </div>
    切换账号:
    <el-radio-group v-model="switchRoles">
      <el-radio-button label="admin" />
      <el-radio-button label="editor" />
      <el-radio-button label="yc666" />
      <el-radio-button label="yq666" />
    </el-radio-group>
  </div>
</template>

<script>
export default {
  computed: {
    roles() {
      return this.$store.getters.roles
      console.log('$store.getters.roles',$store.getters.roles);
      
    },
    switchRoles: {
      get() {
        return this.roles[0]
      },
      set(val) {
        this.$store.dispatch('user/changeRoles', val).then(() => {
          this.$emit('change')
        })
      }
    }
  }
}
</script>
