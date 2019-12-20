<template>
  <div class="app-container">
    <p class="add">
      <el-button type="primary">消费者投诉</el-button>
    </p>
    <el-table :data="tableData" style="width: 100%" border>
      <el-table-column prop="name" label="真实姓名" align="center"></el-table-column>
      <el-table-column prop="vip" label="联系电话" align="center"></el-table-column>
      <el-table-column prop="alias" label="昵称" align="center"></el-table-column>
      <el-table-column prop="username" label="账号" align="center"></el-table-column>
      <el-table-column prop="vip" label="被投诉商家" align="center"></el-table-column>
      <el-table-column prop="vip" label="投诉内容" align="center">
        <el-table-column prop="points" label="投诉文字" align="center"></el-table-column>
        <el-table-column prop="points" label="投诉图片" align="center"></el-table-column>
        <el-table-column prop="points" label="投诉聊天记录" align="center"></el-table-column>
      </el-table-column>

      <el-table-column prop="operation" width="200" align="center" label="操作">
        <template >
          <el-button size="mini" class="button">删除</el-button>
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
          name: '曾水',
          alias: '阿水',
          vip: '一级',
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
          name: '韩彦华',
          alias: '花花',
          vip: '一级',
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
          name: '洪丽萍',
          alias: 'ping3',
          vip: '一级',
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
          name: '黄冬梅',
          alias: '马冬梅',
          vip: '一级',
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
