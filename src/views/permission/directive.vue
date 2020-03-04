<template>
  <div class="app-container">
    <switch-roles @change="handleRolesChange" />
    <div :key="key" style="margin-top:30px;">
      <div>
        <span class="permission-alert" v-permission="['admin']">
          只有
          <el-tag class="permission-tag" size="small">admin</el-tag>才能看到
        </span>
        <el-tag class="permission-sourceCode" type="info" v-permission="['admin']">v-permission="['admin']"</el-tag>
      </div>

      <div>
        <span class="permission-alert" v-permission="['editor']">
          只有
          <el-tag class="permission-tag" size="small">editor</el-tag>才能看到
        </span>
        <el-tag class="permission-sourceCode" type="info" v-permission="['editor']">v-permission="['editor']"</el-tag>
      </div>

      <div>
        <span class="permission-alert" v-permission="['admin','editor']">
          <el-tag class="permission-tag" size="small">admin</el-tag>和
          <el-tag class="permission-tag" size="small">editor</el-tag>能看到这里
        </span>
        <el-tag class="permission-sourceCode" type="info" v-permission="['admin','editor']">v-permission="['admin','editor']"</el-tag>
      </div>
    </div>
  </div>
</template>

<script>
import permission from "@/directive/permission/index.js"; // 权限判断指令
import checkPermission from "@/utils/permission"; // 权限判断函数
import SwitchRoles from "./components/SwitchRoles";

export default {
  name: "DirectivePermission",
  components: { SwitchRoles },
  directives: { permission },
  data() {
    return {
      key: 1 // 为了能每次切换权限的时候重新初始化指令
    };
  },
  methods: {
    // checkPermission,
    handleRolesChange() {
      this.key++;
    }
  }
};
</script>

<style lang="scss" scoped>
.app-container {
  /deep/ .permission-alert {
    width: 320px;
    margin-top: 15px;
    background-color: #f0f9eb;
    color: #67c23a;
    padding: 8px 16px;
    border-radius: 4px;
    display: inline-block;
  }
  /deep/ .permission-sourceCode {
    margin-left: 15px;
  }
  /deep/ .permission-tag {
    background-color: #ecf5ff;
  }
}
</style>

