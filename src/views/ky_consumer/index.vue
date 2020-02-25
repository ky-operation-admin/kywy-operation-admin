<template>
  <div class="app-container">
    <div
      class="title"
      style="text-align:left;padding:20px"
    >
      <el-input
        @keyup.enter.native="handleFilter"
        class="filter-item"
        clearable
        placeholder="请输入账号/昵称/真实姓名"
        style="width: 300px;margin-right:-10px;"
        v-model="keyword"
      />
      <el-button
        @click="handleFilter"
        class="filter-item"
        icon="el-icon-search"
        type="primary"
      >查询</el-button>
    </div>
    <el-table
      :data="tableData"
      border
      style="width: 100%"
    >
      <el-table-column
        align="center"
        label="真实姓名"
        prop="name"
      ></el-table-column>
      <el-table-column
        align="center"
        label="昵称"
        prop="alias"
      ></el-table-column>
      <el-table-column
        align="center"
        label="账号"
        prop="username"
      ></el-table-column>
      <el-table-column
        align="center"
        label="VIP等级"
        prop="vip"
      ></el-table-column>
      <el-table-column
        align="center"
        label="积分"
        prop="points"
      ></el-table-column>
      <el-table-column
        align="center"
        label="康养币"
        prop="kycurrency"
      ></el-table-column>
      <el-table-column
        align="center"
        label="余额"
        prop="yue"
      ></el-table-column>
      <el-table-column
        align="center"
        label="操作"
        prop="operation"
        width="200"
      >
        <template slot-scope="scope">
          <el-button
            @click="handleRecover(scope.$index)"
            size="mini"
            type="success"
            v-if="scope.row.block_up"
          >恢复</el-button>
          <el-button
            @click="handleBlockUp(scope.$index)"
            size="mini"
            type="danger"
            v-else
          >停用</el-button>
          <el-button
            @click="handleEdit(scope.$index, scope.row)"
            size="mini"
            type="primary"
          >操作</el-button>
          <el-dialog
            :before-close="handleClose"
            :modal-append-to-body="false"
            :visible.sync="dialogVisible"
            title="编辑"
            width="600px"
          >
            <el-form
              :model="form"
              label-width="100px"
              ref="form"
            >
              <el-form-item
                label="真实姓名"
                prop="name"
              >
                <el-input
                  :disabled="true"
                  v-model="form.name"
                ></el-input>
              </el-form-item>
              <el-form-item
                label="昵称"
                prop="alias"
              >
                <el-input
                  :disabled="true"
                  v-model="form.alias"
                ></el-input>
              </el-form-item>
              <el-form-item
                label="账号"
                prop="username"
              >
                <el-input
                  :disabled="true"
                  v-model="form.username"
                ></el-input>
              </el-form-item>
              <el-form-item
                label="VIP等级"
                prop="vip"
                style="text-align:left"
              >
                <el-select
                  placeholder="请选择"
                  v-model="form.vip"
                >
                  <el-option
                    label="VIP1"
                    value="VIP1"
                  ></el-option>
                  <el-option
                    label="VIP2"
                    value="VIP2"
                  ></el-option>
                  <el-option
                    label="VIP3"
                    value="VIP3"
                  ></el-option>
                </el-select>
              </el-form-item>
              <el-form-item
                label="积分"
                prop="points"
              >
                <el-input-number
                  :disabled="true"
                  v-model="form.points"
                ></el-input-number>
              </el-form-item>
              <el-form-item
                label="康养币"
                prop="kycurrency"
              >
                <el-input-number
                  :disabled="true"
                  v-model="form.kycurrency"
                ></el-input-number>
              </el-form-item>
              <el-form-item
                label="余额"
                prop="yue"
              >
                <el-input-number
                  :disabled="true"
                  v-model="form.yue"
                ></el-input-number>
              </el-form-item>
            </el-form>
            <span
              class="dialog-footer"
              slot="footer"
            >
              <el-button
                @click="onSubmit()"
                type="primary"
              >提交</el-button>
            </span>
          </el-dialog>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
// 用户管理
import { deepClone } from "@/utils";
const defaultForm = {
  username: "",
  name: "",
  alias: "",
  vip: "",
  points: null,
  kycurrency: null,
  yue: null
};
let tableData = [
  {
    username: "zengshui666",
    name: "曾水",
    block_up: false,
    alias: "阿水",
    vip: "VIP1",
    points: 10,
    kycurrency: 20,
    yue: 0.55,
    yundong: "- -",
    tiwen: "- -",
    shuimian: "- -",
    xinlv: "- -",
    xueya: "- -",
    tizhong: "59kg",
    xuetang: "- -"
  },
  {
    username: "hanyan123",
    name: "韩彦华",
    block_up: false,
    alias: "花花",
    vip: "VIP1",
    points: 10,
    kycurrency: 30,
    yue: 30,
    yundong: "- -",
    tiwen: "- -",
    shuimian: "- -",
    xinlv: "- -",
    xueya: "- -",
    tizhong: "65kg",
    xuetang: "- -"
  },
  {
    username: "hong4321",
    name: "洪丽萍",
    block_up: false,
    alias: "ping3",
    vip: "VIP1",
    points: 50,
    kycurrency: 0.5,
    yue: 0.78,
    yundong: "- -",
    tiwen: "- -",
    shuimian: "- -",
    xinlv: "- -",
    xueya: "- -",
    tizhong: "53kg",
    xuetang: "- -"
  },
  {
    username: "dongmei3",
    name: "黄冬梅",
    block_up: false,
    alias: "马冬梅",
    vip: "VIP1",
    points: 20.3,
    kycurrency: 16,
    yue: 55,
    yundong: "- -",
    tiwen: "- -",
    shuimian: "- -",
    shuimian: "- -",
    xinlv: "- -",
    xueya: "- -",
    tizhong: "46kg",
    xuetang: "- -"
  }
];
export default {
  data() {
    return {
      dialogVisible: false,
      form: Object.assign({}, defaultForm),
      tableData: [],
      keyword: ""
    };
  },
  created() {
    this.init();
  },
  methods: {
    handleClose(done) {
      done();
    },
    init() {
      let tempData1 = tableData.filter(item => {
        return item.name.includes(this.keyword);
      });
      let tempData2 = tableData.filter(item => {
        return item.username.includes(this.keyword);
      });
      let tempData3 = tableData.filter(item => {
        return item.alias.includes(this.keyword);
      });
      let tempArray = [...tempData1, ...tempData2, ...tempData3];
      var obj = {};
      tempArray = tempArray.reduce(function(item, next) {
        obj[next.username]
          ? ""
          : (obj[next.username] = true && item.push(next));
        return item;
      }, []);
      this.tableData = tempArray;
    },
    handleBlockUp(idx) {
      this.$confirm(
        "确定停用该账号" + this.tableData[idx].username + "?",
        "提示",
        {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }
      ).then(async () => {
        this.$message({
          type: "warning",
          message: "该账号已被停用!"
        });
        this.tableData[idx].block_up = true;
      });
    },
    handleRecover(idx) {
      this.$confirm(
        "确定恢复该账号" + this.tableData[idx].username + "?",
        "提示",
        {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "success"
        }
      ).then(async () => {
        this.$message({
          type: "success",
          message: "该账号已被恢复使用!"
        });
        this.tableData[idx].block_up = false;
      });
    },
    // 搜索
    handleFilter() {
      this.init();
    },
    // 编辑
    handleEdit(i, row) {
      // 出现弹窗
      this.dialogVisible = true;
      this.form = deepClone(row);
    },
    // 编辑推送弹框修改
    onSubmit() {
      this.$message({
        message: "修改成功",
        type: "success"
      });
      for (let index = 0; index < this.tableData.length; index++) {
        if (this.tableData[index].username === this.form.username) {
          this.tableData.splice(index, 1, Object.assign({}, this.form));
          break;
        }
      }
      this.dialogVisible = false;
    }
  }
};
</script>
<style scoped>
.button {
  width: 64px;
  height: 30px;
  text-align: center;
  line-height: 1;
  color: #515151;
  font-size: 16px;
  display: inline-block;
}
.add {
  background: #fff;
  text-align: left;
}
.add .el-button {
  margin: 20px;
  /* width: 88px; */
  height: 44px;
}
.el-table td .el-input {
  width: 200px;
}

.el-dialog {
  width: 35% !important;
  padding: 0 3% !important;
  box-sizing: border-box !important;
}
.confirm .el-form-item__content {
  margin-left: 0 !important;
}
.confirm .el-form-item__content .el-button {
  margin: 0 40% !important;
}
</style>
