<template>
  <div class="app-container">
    <p class="add">
      <!-- <el-button type="primary" plain icon='el-icon-plus' @click="dialogVisible = true">增加</el-button> -->
      <el-button type="primary">消费者信息</el-button>
    </p>
    <el-table :data="tableData" style="width: 100%" border>
      <el-table-column label="基本信息" align="center">
        <el-table-column prop="name" label="真实姓名" align="center"></el-table-column>
        <el-table-column prop="alias" label="昵称" align="center"></el-table-column>
        <el-table-column prop="username" label="账号" align="center"></el-table-column>
        <el-table-column prop="vip" label="VIP等级" align="center"></el-table-column>
        <el-table-column prop="points" label="积分" align="center"></el-table-column>
        <el-table-column prop="kycurrency" label="康养币" align="center"></el-table-column>
        <el-table-column prop="yue" label="余额" align="center"></el-table-column>
      </el-table-column>
      <el-table-column label="健康数据" align="center">
        <el-table-column prop="yundong" label="运动" align="center"></el-table-column>
        <el-table-column prop="shuimian" label="睡眠" align="center"></el-table-column>
        <el-table-column prop="xinlv" label="心率" align="center"></el-table-column>
        <el-table-column prop="xueya" label="血压" align="center"></el-table-column>
        <el-table-column prop="tizhong" label="体重" align="center"></el-table-column>
        <el-table-column prop="tiwen" label="体温" align="center"></el-table-column>
        <el-table-column prop="xuetang" label="血糖" align="center"></el-table-column>
      </el-table-column>
      <el-table-column prop="operation" width="200" align="center" label="操作">
        <template slot-scope="scope">
          <!-- <el-button size="mini" @click="handleDelete(scope.$index, scope.row)" class="button">停用</el-button>
          <el-button size="mini" type="danger" @click="handleEdit()" class="button">编辑</el-button> -->
          <el-button size="mini"  class="button">停用</el-button>
          <el-button size="mini" type="danger"  class="button">详情</el-button>
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
          xuetang:'- -'
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
          xuetang:'- -'
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
          xuetang:'- -'
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
          xuetang:'- -'
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
