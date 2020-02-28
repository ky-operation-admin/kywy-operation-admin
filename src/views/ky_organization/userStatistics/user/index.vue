<template>
  <div class="app-container">
    <searchForm :formOptions="formOptions" @onSearch="onSearch" />
    <el-table :data="tableData" style="width: 100%" border>
      <el-table-column prop="username" label="用户ID" align="center"></el-table-column>
      <el-table-column prop="name" label="用户姓名" align="center"></el-table-column>
      <el-table-column prop="alias" label="性别" align="center"></el-table-column>
      <el-table-column prop="username" label="最后打开时间" align="center"></el-table-column>
    </el-table>
  </div>
</template>
<script>
// 用户管理
import { deepClone } from '@/utils'
import data from '@/assets/js/mock'
import searchForm from '@/components/SearchForm'
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
      formOptions: [
        {
          label: '用户ID',
          prop: 'content',
          element: 'el-input'
        },
        // {
        //   label: '类型',
        //   prop: 'type',
        //   element: 'el-select',
        //   options: [
        //     { label: '给点意见', value: '1' },
        //     { label: '售后问题', value: '2' }
        //   ]
        // },
        // {
        //   label: '状态',
        //   prop: 'status',
        //   element: 'el-select',
        //   // options: getFeedbackStatus()
        // },
        // {
        //   label: '提交时间',
        //   prop: 'timeRange',
        //   element: 'el-date-picker'
        // },

      ],
     
    }
  },
  components: {
    searchForm
  },
  created () {
    this.init()
  },
  methods: {
    handleClose (done) {
      done();
    },
    onSearch (val) {
      console.log(val)
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
