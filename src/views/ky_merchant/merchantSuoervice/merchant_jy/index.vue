<template>
  <div class="app-container">
    <!-- <p class="add">
      <el-button type="primary">商家资产管理</el-button>
    </p> -->
    <el-table :data="tableData" style="width: 100%" border>
      <el-table-column prop="name" label="商家名称" align="center"></el-table-column>
      <el-table-column prop="vip" label="活动保证金" align="center"></el-table-column>
      <el-table-column prop="alias" label="会员认证费" align="center"></el-table-column>
      <el-table-column prop="alias" label="商家经营监测" align="center"></el-table-column>
      <el-table-column prop="alias" label="商家支付管理" align="center"></el-table-column>
      <el-table-column prop="operation" width="200" align="center" label="操作">
        <template>
          <el-button size="mini" class="button">查看</el-button>
          <el-button size="mini" type="danger" class="button">详情</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
// 用户管理
export default {
  data () {
    return {
      dialogVisible: false,
      form: {
        username: '',
        account: '',
        accountType: [],
        password: '',
        section: ''
      },
      tableData: [
        {
          username: 'zengshui666',
          name: '广州立白集团',
          alias: '150000',
          vip: '20万',
          points: 0,
          kycurrency: 0,
          yue: 0,
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
          name: '广州立白集团',
          alias: '150000',
          vip: '20万',
          points: 0,
          kycurrency: 0,
          yue: 0,
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
          name: '广州立白集团',
          alias: '150000',
          vip: '20万',
          points: 0,
          kycurrency: 0,
          yue: 0,
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
          name: '广州立白集团',
          alias: '150000',
          vip: '20万',
          points: 0,
          kycurrency: 0,
          yue: 0,
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
    }
  },
  methods: {
    handleEdit () {
      this.dialogVisible = true
    },
    onSubmit () {
      window.console.log('submit!')
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
