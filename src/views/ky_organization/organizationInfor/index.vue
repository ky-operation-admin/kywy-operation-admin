<template>
  <div class="app-container">
    <p class="add">
      <!-- <el-button type="primary" plain icon='el-icon-plus' @click="dialogVisible = true">增加</el-button> -->
      <el-button type="primary" >基本信息</el-button>
    </p>
    <el-table :data="tableData" style="width: 100%" border>

      <el-table-column prop="name" label="机构名称" align="center"></el-table-column>
      <el-table-column prop="alias" label="统一社会信用代码" align="center"></el-table-column>
      <el-table-column prop="username" label="注册号" align="center"></el-table-column>
      <el-table-column prop="vip" label="企业类型" align="center"></el-table-column>
      <el-table-column prop="pic" label="营业执照" align="center">
        <template slot-scope="scope">
          <img :src="scope.row.pic" alt style="height:6rem;" />
        </template>
      </el-table-column>
      <el-table-column prop="kycurrency" label="审核进度" align="center"></el-table-column>
      <el-table-column prop="operation" width="200" align="center" label="操作">
        <!-- <template slot-scope="scope"> -->
        <template >
          <!-- <el-button size="mini" type="danger" @click="handleEdit()" class="button">编辑</el-button> -->
          <el-button size="mini" type="danger"  class="button">编辑</el-button>
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
          username: '4008866',
          alias: '91440113MA59E0RJ8X',
          name: '广州怡和养老',
          vip: '民营企业',
          pic: require('@/assets/yingyezhizhao.png'),
          kycurrency: '已通过审核',
        },
        {
          username: '4008866',
          alias: '91440113MA59E0RJ8X',
          name: '广州幸福养老',
          vip: '民营企业',
          pic: require('@/assets/yingyezhizhao.png'),
          kycurrency: '已通过审核',
        }, {
          username: '4008866',
          alias: '91440113MA59E0RJ8X',
          name: '广州夕阳红敬老院',
          vip: '民营企业',
          pic: require('@/assets/yingyezhizhao.png'),
          kycurrency: '已通过审核',
        }, {
          username: '4008866',
          alias: '91440113MA59E0RJ8X',
          name: '广州百年好合',
          vip: '民营企业',
          pic: require('@/assets/yingyezhizhao.png'),
          kycurrency: '已通过审核',
        },
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
