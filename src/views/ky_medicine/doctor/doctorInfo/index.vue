<template>
  <div class="app-container">
    <!-- <div class="title" style="text-align:left;padding:20px">
      <el-input v-model="keyword" placeholder="请输入医生姓名/编号/电话" style="width: 300px;margin-right:-10px;" clearable class="filter-item" @keyup.enter.native="handleFilter" />
      <el-button class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">
        查询
      </el-button>
    </div> -->
    <el-table :data="tableData" style="width: 100%" border v-loading="listLoading">

      <el-table-column prop="doctorno" label="医生编号" align="center"></el-table-column>
      <el-table-column prop="name" label="医生姓名" align="center"></el-table-column>
      <el-table-column prop="account" label="医生账号" align="center"></el-table-column>
      <el-table-column prop="phone" label="医生手机号" align="center"></el-table-column>
      <!-- <el-table-column prop="type" label="企业类型" align="center"></el-table-column> -->
      <el-table-column prop="busLicen" label="医生头像" align="center">
        <template slot-scope="scope">
          <img v-image-preview :src="scope.row.busLicen" alt style="height:6rem;" />
        </template>
      </el-table-column>
      <el-table-column label="所属单位" align="center">
        <el-table-column prop="hospital" align="center" label="医院"></el-table-column>
        <el-table-column prop="department" align="center" label="科室"></el-table-column>
        <el-table-column prop="professionalTitle" align="center" label="职称"></el-table-column>
      </el-table-column>
      <el-table-column label="经验简介" align="center">
        <el-table-column prop="goodAt" align="center" label="擅长"></el-table-column>
        <el-table-column prop="introduce" align="center" label="简介"></el-table-column>
        <el-table-column prop="experience" align="center" label="经验"></el-table-column>
      </el-table-column>
      <el-table-column prop="org_stateText" align="center" label="认证状态">
        <template slot-scope="scope">
          <div class="payShow">
            <a v-if="scope.row.org_state==1" class="pass">
              <span>已通过</span>
            </a>
            <a v-else-if="scope.row.org_state==2" class="notPass">
              <span>未通过</span>
            </a>
            <a v-else-if="scope.row.org_state==3" class="notPass">
              <span>已忽略</span>
            </a>
            <a v-else-if="scope.row.org_state==4" class="blacklist">
              <span>黑名单</span>
            </a>
            <a v-else>
              <span>未审核</span>
            </a>
          </div>
        </template>
      </el-table-column>
      <el-table-column align="center" label="操作" width="200">
        <template slot-scope="scope">
          <!-- <el-button size="mini" type="primary" @click="edti(scope.$index)">编辑</el-button> -->
          <el-button size="mini" type="primary" disabled>编辑</el-button>
          <el-button size="mini" type="danger" @click="del(scope.$index,scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="block" style="margin:30px;" v-if="total > 0">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="data.pageNum" :page-sizes="[1,2,3,4]" :page-size="data.pageSize" layout="total, sizes, prev, pager, next, jumper" :total="total">
      </el-pagination>
    </div>
  </div>
</template>
<script>
// 模拟数据
import data from '@/assets/js/mock'
// 引入接口
import { queryMeDoctor } from '@/api/medicine'
let onsaleData = data.onsaleData
export default {
  data () {
    return {
      listLoading: true,
      tableData: [],
      keyword: '',
      data: {
        pageNum: 1,
        pageSize: 1,
      },
      total: 0,
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
    // 数据初始化
    init () {
      this.listLoading = true
      setTimeout(() => {
        this.listLoading = false
      }, 1.5 * 1000)
      // 请求数据
      queryMeDoctor({
        ...this.data
      }).then(res => {
        console.log('res', res.data.list);
        this.tableData = res.data.list
        this.total = res.data.total
      })
    },
    handleFilter () {
      this.init()
    },
    // 删除
    async del (index, row) {
      this.$confirm("是否确定要删除?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(async () => {
        this.$message({
          type: "success",
          message: "删除成功!"
        });
        data.onsaleData.splice(index, 1)
        this.init()
      });
    },
    // --------------------------分页----------------------------
    handleSizeChange (val) {
      this.data.pageSize = val
      this.init()
    },
    handleCurrentChange (val) {
      this.data.pageNum = val
      this.init()
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
