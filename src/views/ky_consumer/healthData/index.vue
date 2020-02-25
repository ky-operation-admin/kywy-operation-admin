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
        label="运动"
        prop="yundong"
      ></el-table-column>
      <el-table-column
        align="center"
        label="睡眠"
        prop="shuimian"
      ></el-table-column>
      <el-table-column
        align="center"
        label="心率"
        prop="xinlv"
      ></el-table-column>
      <el-table-column
        align="center"
        label="血压"
        prop="xueya"
      ></el-table-column>
      <el-table-column
        align="center"
        label="体重"
        prop="tizhong"
      ></el-table-column>
      <el-table-column
        align="center"
        label="体温"
        prop="tiwen"
      ></el-table-column>
      <el-table-column
        align="center"
        label="血糖"
        prop="xuetang"
      ></el-table-column>
      <el-table-column
        align="center"
        label="操作"
        prop="operation"
        width="200"
      >
        <template slot-scope="scope">
          <el-button
            @click="handleEdit(scope.$index, scope.row)"
            size="mini"
            type="primary"
          >查看</el-button>
          <el-dialog
            :before-close="handleClose"
            :modal-append-to-body="false"
            :visible.sync="dialogVisible"
            title="健康数据详情"
            top="8vh"
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
                label="运动"
                prop="yundong"
              >
                <el-input-number
                  :disabled="true"
                  v-model="form.yue"
                ></el-input-number>
              </el-form-item>
              <el-form-item
                label="睡眠"
                prop="shuimian"
              >
                <el-input-number
                  :disabled="true"
                  v-model="form.yue"
                ></el-input-number>
              </el-form-item>
              <el-form-item
                label="心率"
                prop="xinlv"
              >
                <el-input-number
                  :disabled="true"
                  v-model="form.yue"
                ></el-input-number>
              </el-form-item>
              <el-form-item
                label="血压"
                prop="xueya"
              >
                <el-input-number
                  :disabled="true"
                  v-model="form.yue"
                ></el-input-number>
              </el-form-item>
              <el-form-item
                label="体重"
                prop="tizhong"
              >
                <el-input-number
                  :disabled="true"
                  v-model="form.yue"
                ></el-input-number>
              </el-form-item>
              <el-form-item
                label="体温"
                prop="tiwen"
              >
                <el-input-number
                  :disabled="true"
                  v-model="form.yue"
                ></el-input-number>
              </el-form-item>
              <el-form-item
                label="血糖"
                prop="xuetang"
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
              >确定</el-button>
            </span>
          </el-dialog>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
//健康数据
import { deepClone } from "@/utils";
const defaultForm = {
  username: "",
  name: "",
  alias: "",
  yundong: "",
  tiwen: "",
  shuimian: "",
  xinlv: "",
  xueya: "",
  tizhong: "",
  xuetang: ""
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
    onSubmit() {
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
