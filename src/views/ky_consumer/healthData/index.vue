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
      <el-table-column prop="yundong" label="运动" align="center"></el-table-column>
      <el-table-column prop="shuimian" label="睡眠" align="center"></el-table-column>
      <el-table-column prop="xinlv" label="心率" align="center"></el-table-column>
      <el-table-column prop="xueya" label="血压" align="center"></el-table-column>
      <el-table-column prop="tizhong" label="体重" align="center"></el-table-column>
      <el-table-column prop="tiwen" label="体温" align="center"></el-table-column>
      <el-table-column prop="xuetang" label="血糖" align="center"></el-table-column>
      <el-table-column prop="operation" width="200" align="center" label="操作">
        <template slot-scope="scope">
          <el-button size="mini" type="primary" @click="handleEdit(scope.$index, scope.row)">查看</el-button>
          <el-dialog top="8vh" title="健康数据详情" :visible.sync="dialogVisible" width="600px" :before-close="handleClose" :modal-append-to-body="false">
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
              <el-form-item prop="yundong" label="运动">
                <el-input-number v-model="form.yue" :disabled="true"></el-input-number>
              </el-form-item>
              <el-form-item prop="shuimian" label="睡眠">
                <el-input-number v-model="form.yue" :disabled="true"></el-input-number>
              </el-form-item>
              <el-form-item prop="xinlv" label="心率">
                <el-input-number v-model="form.yue" :disabled="true"></el-input-number>
              </el-form-item>
              <el-form-item prop="xueya" label="血压">
                <el-input-number v-model="form.yue" :disabled="true"></el-input-number>
              </el-form-item>
              <el-form-item prop="tizhong" label="体重">
                <el-input-number v-model="form.yue" :disabled="true"></el-input-number>
              </el-form-item>
              <el-form-item prop="tiwen" label="体温">
                <el-input-number v-model="form.yue" :disabled="true"></el-input-number>
              </el-form-item>
              <el-form-item prop="xuetang" label="血糖">
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
//健康数据
import { deepClone } from '@/utils'
const defaultForm = {
  username: '',
  name: '',
  alias: '',
  yundong: '',
  tiwen: '',
  shuimian: '',
  xinlv: '',
  xueya: '',
  tizhong: '',
  xuetang: ''
}
let tableData = [
  {
    username: 'zengshui666',
    name: '曾水',
    block_up: false,
    alias: '阿水',
    vip: 'VIP1',
    points: 10,
    kycurrency: 20,
    yue: 0.55,
    yundong: '- -',
    tiwen: '- -',
    shuimian: '- -',
    xinlv: '- -',
    xueya: '- -',
    tizhong: '59kg',
    xuetang: '- -'
  },
  {
    username: 'hanyan123',
    name: '韩彦华',
    block_up: false,
    alias: '花花',
    vip: 'VIP1',
    points: 10,
    kycurrency: 30,
    yue: 30,
    yundong: '- -',
    tiwen: '- -',
    shuimian: '- -',
    xinlv: '- -',
    xueya: '- -',
    tizhong: '65kg',
    xuetang: '- -'
  },
  {
    username: 'hong4321',
    name: '洪丽萍',
    block_up: false,
    alias: 'ping3',
    vip: 'VIP1',
    points: 50,
    kycurrency: 0.5,
    yue: 0.78,
    yundong: '- -',
    tiwen: '- -',
    shuimian: '- -',
    xinlv: '- -',
    xueya: '- -',
    tizhong: '53kg',
    xuetang: '- -'
  },
  {
    username: 'dongmei3',
    name: '黄冬梅',
    block_up: false,
    alias: '马冬梅',
    vip: 'VIP1',
    points: 20.3,
    kycurrency: 16,
    yue: 55,
    yundong: '- -',
    tiwen: '- -',
    shuimian: '- -',
    shuimian: '- -',
    xinlv: '- -',
    xueya: '- -',
    tizhong: '46kg',
    xuetang: '- -'
  }
]
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
      let tempData1 = tableData.filter(item => {
        return item.name.includes(this.keyword)
      })
      let tempData2 = tableData.filter(item => {
        return item.username.includes(this.keyword)
      })
      let tempData3 = tableData.filter(item => {
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
