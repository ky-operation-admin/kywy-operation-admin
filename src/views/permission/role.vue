<template>
  <div class="app-container">
    <!-- <el-button type="primary" @click="handleAddRole">新建权限账号</el-button> -->
    <!--工具栏-->
    <div class="toolbar" style="float:left;padding-top:10px;padding-left:15px;">
      <el-form :inline="true" :model="filters" :size="size">
        <el-form-item>
          <el-input placeholder="角色名" v-model="filters.name"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button icon="fa fa-search" size="mini" type="primary">搜索</el-button>
        </el-form-item>
        <el-form-item>
          <ky-button @click="handleAddRole" icon="fa fa-plus" label="新增" perms="admin:editor" type="primary" />
        </el-form-item>
      </el-form>
    </div>
    <!-- <ky-button icon="fa fa-plus"  label="新建角色" perms="admin" type="primary" @click="handleAddRole"/> -->
    <el-table :data="rolesList" border style="width: 100%;margin-top:30px;">
      <el-table-column align="center" label="角色名" width="220">
        <template slot-scope="scope">{{ scope.row.name }}</template>
      </el-table-column>
      <el-table-column align="header-center" label="描述">
        <template slot-scope="scope">{{ scope.row.description }}</template>
      </el-table-column>
      <el-table-column align="center" label="操作">
        <template slot-scope="scope">
          <ky-button @click="handleEdit(scope)" icon="fa fa-edit" label="编辑" perms="admin" type="primary" />
          <ky-button @click="handleDelete(scope)" icon="fa fa-trash" label="删除" perms="admin" type="danger" />
        </template>
      </el-table-column>
    </el-table>

    <el-dialog :title="dialogType==='edit'?'编辑':'新建'" :visible.sync="dialogVisible">
      <el-form :model="role" label-position="left" label-width="80px">
        <el-form-item label="角色名">
          <el-input placeholder="角色名" v-model="role.name" />
        </el-form-item>
        <el-form-item label="描述">
          <el-input :autosize="{ minRows: 2, maxRows: 4}" placeholder="账号描述" type="textarea" v-model="role.description" />
        </el-form-item>
        <el-form-item label="权限菜单">
          <el-tree
            :check-strictly="checkStrictly"
            :data="routesData"
            :props="defaultProps"
            class="permission-tree"
            node-key="path"
            ref="tree"
            show-checkbox
          />
        </el-form-item>
      </el-form>
      <div style="text-align:right;">
        <el-button @click="dialogVisible=false" type="danger">取消</el-button>
        <el-button @click="confirmRole" type="primary">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import path from "path";
import KyButton from "@/components/Core/KyButton";
import { mapGetters } from "vuex";
import { deepClone } from "@/utils";
import { getName } from "@/utils/auth";
import {
  getRoutes,
  getRoles,
  addRole,
  deleteRole,
  updateRole
} from "@/api/role";

const defaultRole = {
  key: "",
  name: "",
  description: "",
  routes: []
};

export default {
  data() {
    return {
      role: Object.assign({}, defaultRole),
      routes: [],
      rolesList: [],
      dialogVisible: false,
      dialogType: "new",
      checkStrictly: false,
      defaultProps: {
        children: "children",
        label: "title"
      },
      filters: { name: "" },
      size: "small"
    };
  },
  computed: {
    routesData() {
      return this.routes;
    },
    ...mapGetters(["name"]),
    getUserName() {
      return getName();
    }
  },
  components: {
    KyButton
  },
  created() {
    // Mock: get all routes and roles list from server
    console.log("this.name", this.$store.getters);

    this.getRoutes();
    this.getRoles();
  },
  methods: {
    async getRoutes() {
      const res = await getRoutes();
      this.serviceRoutes = res.data;
      this.routes = this.generateRoutes(res.data);
    },
    async getRoles() {
      const res = await getRoles();
      this.rolesList = res.data;
    },

    // Reshape the routes structure so that it looks the same as the sidebar
    generateRoutes(routes, basePath = "/") {
      const res = [];

      for (let route of routes) {
        // 条件筛选一些路由
        if (route.hidden) {
          continue;
        }

        const onlyOneShowingChild = this.onlyOneShowingChild(
          route.children,
          route
        );

        if (route.children && onlyOneShowingChild && !route.alwaysShow) {
          route = onlyOneShowingChild;
        }

        const data = {
          path: path.resolve(basePath, route.path),
          title: route.meta && route.meta.title
        };

        // 递归子路由
        if (route.children) {
          data.children = this.generateRoutes(route.children, data.path);
        }
        res.push(data);
      }
      return res;
    },
    generateArr(routes) {
      let data = [];
      routes.forEach(route => {
        data.push(route);
        if (route.children) {
          const temp = this.generateArr(route.children);
          if (temp.length > 0) {
            data = [...data, ...temp];
          }
        }
      });
      return data;
    },
    handleAddRole() {
      this.role = Object.assign({}, defaultRole);
      if (this.$refs.tree) {
        this.$refs.tree.setCheckedNodes([]);
      }
      this.dialogType = "new";
      this.dialogVisible = true;
    },
    handleEdit(scope) {
      this.dialogType = "edit";
      this.dialogVisible = true;
      this.checkStrictly = true;
      this.role = deepClone(scope.row);
      this.$nextTick(() => {
        const routes = this.generateRoutes(this.role.routes);
        this.$refs.tree.setCheckedNodes(this.generateArr(routes));
        // 不影响其父节点和子节点
        this.checkStrictly = false;
      });
    },
    handleDelete({ $index, row }) {
      this.$confirm("确定删除此账号吗?", "Warning", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(async () => {
          await deleteRole(row.key);
          this.rolesList.splice($index, 1);
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(err => {
          console.error(err);
        });
    },
    generateTree(routes, basePath = "/", checkedKeys) {
      const res = [];

      for (const route of routes) {
        const routePath = path.resolve(basePath, route.path);

        // recursive child routes
        if (route.children) {
          route.children = this.generateTree(
            route.children,
            routePath,
            checkedKeys
          );
        }

        if (
          checkedKeys.includes(routePath) ||
          (route.children && route.children.length >= 1)
        ) {
          res.push(route);
        }
      }
      return res;
    },
    async confirmRole() {
      const isEdit = this.dialogType === "edit";

      const checkedKeys = this.$refs.tree.getCheckedKeys();
      this.role.routes = this.generateTree(
        deepClone(this.serviceRoutes),
        "/",
        checkedKeys
      );

      if (isEdit) {
        await updateRole(this.role.key, this.role);
        for (let index = 0; index < this.rolesList.length; index++) {
          if (this.rolesList[index].key === this.role.key) {
            this.rolesList.splice(index, 1, Object.assign({}, this.role));
            break;
          }
        }
      } else {
        const { data } = await addRole(this.role);
        this.role.key = data.key;
        this.rolesList.push(this.role);
      }

      const { description, key, name } = this.role;
      this.dialogVisible = false;
      this.$notify({
        title: "成功",
        dangerouslyUseHTMLString: true,
        message: `
            <div>角色名: ${name}</div>
            <div>描述: ${description}</div>
          `,
        type: "success"
      });
    },
    // reference: src/view/layout/components/Sidebar/SidebarItem.vue
    onlyOneShowingChild(children = [], parent) {
      let onlyOneChild = null;
      const showingChildren = children.filter(item => !item.hidden);

      // When there is only one child route, the child route is displayed by default
      if (showingChildren.length === 1) {
        onlyOneChild = showingChildren[0];
        onlyOneChild.path = path.resolve(parent.path, onlyOneChild.path);
        return onlyOneChild;
      }

      // Show parent if there are no child route to display
      if (showingChildren.length === 0) {
        onlyOneChild = { ...parent, path: "", noShowingChildren: true };
        return onlyOneChild;
      }

      return false;
    }
  }
};
</script>

<style lang="scss" scoped>
.app-container {
  .roles-table {
    margin-top: 30px;
  }
  .permission-tree {
    margin-bottom: 30px;
  }
}
</style>
