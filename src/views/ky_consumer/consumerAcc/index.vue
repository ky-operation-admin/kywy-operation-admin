<template>
  <div class="app-container">
    <p class="add">
      <el-button type="primary"  @click="dialogVisible = true">消费者账号信息</el-button>
    </p>

    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="name" label="真实姓名" align="center"></el-table-column>
      <el-table-column prop="alias" label="昵称" align="center"></el-table-column>
      <el-table-column prop="username" label="账号" align="center"></el-table-column>
      <el-table-column prop="vip" label="VIP等级" align="center"></el-table-column>
      <el-table-column prop="points" label="积分" align="center"></el-table-column>
      <el-table-column prop="kycurrency" label="康养币" align="center"></el-table-column>
      <el-table-column prop="yue" label="余额" align="center"></el-table-column>
      <el-table-column prop="operation" width="200" align="center" label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleDelete(scope.$index, scope.row)" class="button">封停</el-button>
          <el-button size="mini" type="danger" @click="handleEdit()" class="button">详情</el-button>
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
        },
         {
          username: 'hanyan123',
          name: '韩彦华',
          alias: '花花',
          vip: '一级',
          points: 0,
          kycurrency: 0,
          yue: 0,
          
        },
        {
          username: 'hong4321',
          name: '洪丽萍',
          alias: 'ping3',
          vip: '一级',
          points: 0,
          kycurrency: 0,
          yue: 0,
          
        },
        {
          username: 'dongmei3',
          name: '黄冬梅',
          alias: '马冬梅',
          vip: '一级',
          points: 0,
          kycurrency: 0,
          yue: 0,
          
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
