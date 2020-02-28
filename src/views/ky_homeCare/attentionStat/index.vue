<template>
  <div class="app-container">
    <div class="title" style="text-align:left;padding:20px">
      <el-input v-model="keyword" @keyup.enter.native="handleFilter" placeholder="请输入账号/昵称/真实姓名" style="width: 300px;margin-right:-10px;" clearable class="filter-item" />
      <el-button class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">
        查询
      </el-button>
    </div>
    <el-table :data="tableData" style="width: 100%" border>
      <el-table-column prop="name" label="真实姓名" align="center"></el-table-column>
      <el-table-column prop="alias" label="昵称" align="center"></el-table-column>
      <el-table-column prop="username" label="账号" align="center"></el-table-column>
      <el-table-column prop="vip" label="VIP等级" align="center"></el-table-column>
      <el-table-column prop="points" label="积分" align="center"></el-table-column>
      <el-table-column prop="kycurrency" label="康养币" align="center"></el-table-column>
      <el-table-column prop="yue" label="余额" align="center"></el-table-column>
      <el-table-column prop="operation" width="200" align="center" label="操作">
        <template slot-scope="scope">
          <el-button v-if="scope.row.block_up" size="mini" type="success" @click="handleRecover(scope.$index)">恢复</el-button>
          <el-button v-else size="mini" type="danger" @click="handleBlockUp(scope.$index)">停用</el-button>
          <el-button size="mini" type="primary" @click="handleEdit(scope.$index, scope.row)">操作</el-button>
          <el-dialog title="编辑" :visible.sync="dialogVisible" width="600px" :before-close="handleClose" :modal-append-to-body="false">
            <el-form ref="form" :model="form" label-width="100px">
              <el-form-item label="真实姓名" prop="name">
                <el-input v-model="form.name" :disabled="true"></el-input>
              </el-form-item>
              <el-form-item label="昵称" prop="alias">
                <el-input v-model="form.alias" :disabled="true"></el-input>
              </el-form-item>
              <el-form-item label="账号" prop="username">
                <el-input v-model="form.username" :disabled="true"></el-input>
              </el-form-item>
              <el-form-item label="VIP等级" prop="vip" style="text-align:left">
                <el-select v-model="form.vip" placeholder="请选择">
                  <el-option label="VIP1" value="VIP1"></el-option>
                  <el-option label="VIP2" value="VIP2"></el-option>
                  <el-option label="VIP3" value="VIP3"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item prop="points" label="积分">
                <el-input-number v-model="form.points" :disabled="true"></el-input-number>
              </el-form-item>
              <el-form-item prop="kycurrency" label="康养币">
                <el-input-number v-model="form.kycurrency" :disabled="true"></el-input-number>
              </el-form-item>
              <el-form-item prop="yue" label="余额">
                <el-input-number v-model="form.yue" :disabled="true"></el-input-number>
              </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
              <el-button type="primary" @click="onSubmit()">确定</el-button>
            </span>
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
  username: '',
  name: '',
  alias: '',
  vip: '',
  points: null,
  kycurrency: null,
  yue: null,
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
      let tempData1 = data.userData.filter(item => {
        return item.name.includes(this.keyword)
      })
      let tempData2 = data.userData.filter(item => {
        return item.username.includes(this.keyword)
      })
      let tempData3 = data.userData.filter(item => {
        return item.alias.includes(this.keyword)
      })
      let tempArray = [...tempData1, ...tempData2, ...tempData3];
      var obj = {};
      tempArray = tempArray.reduce(function (item, next) {
        obj[next.username] ? '' : obj[next.username] = true && item.push(next);
        return item;
      }, []);
      this.tableData = tempArray

    },
    handleBlockUp (idx) {
      this.$confirm("确定停用该账号" + this.tableData[idx].username + "?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(async () => {
        this.$message({
          type: "warning",
          message: "该账号已被停用!"
        });
        this.tableData[idx].block_up = true
      })
    },
    handleRecover (idx) {
      this.$confirm("确定恢复该账号" + this.tableData[idx].username + "?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "success"
      }).then(async () => {
        this.$message({
          type: "success",
          message: "该账号已被恢复使用!"
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
      this.$message({
        message: '修改成功',
        type: 'success'
      });
      for (let index = 0; index < this.tableData.length; index++) {
        if (this.tableData[index].username === this.form.username) {
          this.tableData.splice(index, 1, Object.assign({}, this.form))
          break
        }
      }
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
