<template>
  <div class="app-container">
    <div class="title" style="text-align:left;padding:20px">
      <el-input v-model="keyword" placeholder="请输入医生名称/订单编号/下单账号" style="width: 300px;margin-right:-10px;" clearable class="filter-item" @keyup.enter.native="handleFilter" />
      <el-button class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">
        查询
      </el-button>
    </div>
    <el-table :data="tableData" style="width: 100%" border v-loading="listLoading">

      <el-table-column prop="res_name" label="医生名称" align="center"></el-table-column>
      <el-table-column prop="user_account" label="下单账号" align="center"></el-table-column>
      <el-table-column prop="orderNum" label="订单编号" align="center"></el-table-column>
      <el-table-column  label="订单类型" align="center">
          寻医问药
      </el-table-column>
      <el-table-column prop="orderTime" label="下单时间" align="center"></el-table-column>
      <el-table-column align="center" label="操作" width="200">
        <template slot-scope="scope">
          <el-button  size="mini" type="success" @click="look(scope.row)">查看</el-button>
          <el-dialog title="订单详情" :visible.sync="dialogVisible" width="30%" :before-close="handleClose" :modal-append-to-body="false">
            <el-form ref="form" :model="form" label-width="120px">
              <el-form-item label="医生名称">
                {{form.hotel_name}}
              </el-form-item>
              <el-form-item label="下单账号">
                {{form.user_account}}
              </el-form-item>
              <el-form-item label="订单编号">
                {{form.orderNum}}
              </el-form-item>
              <el-form-item label="订单类型">
                医生住宿
              </el-form-item>
              <el-form-item label="下单时间">
                {{form.orderTime}}
              </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
              <el-button type="primary" @click="confirm()">确定</el-button>
            </span>
          </el-dialog>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import data from '@/assets/js/mock'
let onsaleData = data.onsaleData
import { deepClone } from '@/utils'
const defaultForm = {
  org_id: '',
  hotel_name: '',
  user_account: '',
  formnum: '',
  orderNum: '',
  serve_type: '',
  orderTime: '',
}
export default {
  data () {
    return {
      dialogVisible: false,
      listLoading: true,
      tableData: [],
      keyword: '',
      form: Object.assign({}, defaultForm),
    }
  },
  created () {
    this.init()
  },
  methods: {
    handleEdit () {
      this.dialogVisible = true
    },
    onSubmit () {
      window.console.log('submit!')
    },
    init () {
      this.listLoading = true
      setTimeout(() => {
        this.listLoading = false
      }, 1.5 * 1000)
      let tempData1 = onsaleData.filter(item => {
        return item.hotel_name.includes(this.keyword)
      })

      let tempData2 = onsaleData.filter(item => {
        return item.user_account.includes(this.keyword)
      })
      let tempData3 = onsaleData.filter(item => {
        return item.orderNum.includes(this.keyword)
      })
      let tempArray = [...tempData1, ...tempData2, ...tempData3];
      var obj = {};
      tempArray = tempArray.reduce(function (item, next) {
        obj[next.org_id] ? '' : obj[next.org_id] = true && item.push(next);
        return item;
      }, []);
      this.tableData = tempArray
    },

    // 搜索
    handleFilter () {
      this.init()
    },
    handleClose (done) {
      done()
    },
    //查看
    look (idx) {
      this.dialogVisible = true;
      this.form = deepClone(idx)
    },
    // 确定
    confirm () {
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
