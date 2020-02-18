<template>
  <div class="app-container">
    <div class="title" style="text-align:left;padding:20px">
      <el-input v-model="keyword" @keyup.enter.native="handleFilter" placeholder="请输入分销机构名称/账号" style="width: 300px;margin-right:-10px;" clearable class="filter-item" />
      <el-button class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">
        查询
      </el-button>
    </div>
    <el-table :data="tableData" style="width: 100%" border>
      <el-table-column prop="org_name" label="分销机构名称" align="center"></el-table-column>
      <el-table-column prop="alias" label="分销ID" align="center"></el-table-column>
      <el-table-column prop="fenxiaoImg" label="分销二维码" align="center">
          <template slot-scope="scope">
              <img v-image-preview :src="scope.row.fenxiaoImg" alt style="height:6rem;">
          </template>
      </el-table-column>
      <el-table-column prop="fenxiao_order_num" label="分销订单数量" align="center"></el-table-column>
      <el-table-column prop="operation" width="200" align="center" label="操作">
        <template slot-scope="scope">
          <el-button v-if="scope.row.block_up" size="mini" type="success" @click="handleRecover(scope.$index)">恢复</el-button>
          <el-button v-else size="mini" type="danger" @click="handleBlockUp(scope.$index)">封停</el-button>
          <el-button size="mini" type="primary" @click="handleEdit(scope.$index, scope.row)">查看</el-button>
          <el-dialog title="编辑" :visible.sync="dialogVisible" width="600px" :before-close="handleClose" :modal-append-to-body="false">
            <el-form ref="form" :model="form" label-width="100px">
              <el-form-item label="分销机构名称" prop="org_name">
                <el-input v-model="form.org_name" :disabled="true"></el-input>
              </el-form-item>
              <el-form-item label="分销ID" prop="alias">
                <el-input v-model="form.alias" :disabled="true"></el-input>
              </el-form-item>
              <el-form-item prop="fenxiao_order_num" label="分销订单数量">
                <el-input-number v-model="form.fenxiao_order_num" :disabled="true"></el-input-number>
              </el-form-item>
              <el-form-item label="分销二维码" prop="fenxiaoImg">
                <img :src="form.fenxiaoImg" alt="">
              </el-form-item>
              <el-form-item style="text-align:center">
                <el-button type="primary" @click="onSubmit()">确定</el-button>
              </el-form-item>
            </el-form>
          </el-dialog>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
// 用户管理
import { deepClone } from '@/utils'
import data from '@/assets/js/mock'
const defaultForm = {
  org_name: '',
  alias: '',
  fenxiaoImg: '',
  fenxiao_order_num: null,
}
export default {
  data () {
    return {
      dialogVisible: false,
      form: Object.assign({}, defaultForm),
      tableData: [],
      keyword: '',
    }
  },
  created () {
    this.init()
  },
  methods: {
    handleClose (done) {
      done();
    },
    init () {
      let tempData1 = data.onsaleData.filter(item => {
        return item.org_name.includes(this.keyword)
      })
      let tempData2 = data.onsaleData.filter(item => {
        return item.alias.includes(this.keyword)
      })
      let tempArray = [...tempData1, ...tempData2];
      var obj = {};
      tempArray = tempArray.reduce(function (item, next) {
        obj[next.org_name] ? '' : obj[next.org_name] = true && item.push(next);
        return item;
      }, []);
      this.tableData = tempArray

    },
    handleBlockUp (idx) {
      this.$confirm("确定封停该机构分销资格:" + this.tableData[idx].org_name + "?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(async () => {
        this.$message({
          type: "warning",
          message: "已被封停!"
        });
        this.tableData[idx].block_up = true
      })
    },
    handleRecover (idx) {
      this.$confirm("确定恢复该机构分销资格:" + this.tableData[idx].org_name + "?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "success"
      }).then(async () => {
        this.$message({
          type: "success",
          message: "该机构分销资格已被恢复使用!"
        });
        this.tableData[idx].block_up = false
      })
    },
    // 搜索
    handleFilter () {
      this.init()
    },
    // 编辑
    handleEdit (i, row) {
      // 出现弹窗
      this.dialogVisible = true
      this.form = deepClone(row)
    },
    // 编辑推送弹框修改
    onSubmit () {
      this.dialogVisible = false
    }
  }
}
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
