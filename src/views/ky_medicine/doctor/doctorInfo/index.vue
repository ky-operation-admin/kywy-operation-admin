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
        <el-table-column prop="introduce" align="center" label="简介" ></el-table-column>
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
          <el-button size="mini" type="primary" @click="edit(scope.row)">编辑</el-button>
          <el-dialog title="编辑信息" top="5vh" :visible.sync="dialogVisible" width="600px" :before-close="handleClose" :modal-append-to-body="false">
            <el-form ref="form" :model="form2" label-width="100px">
              <el-form-item label="医生编号" prop="doctorno">
                <el-input v-model="form2.doctorno"></el-input>
              </el-form-item>
              <el-form-item label="医生姓名" prop="name">
                <el-input v-model="form2.name"></el-input>
              </el-form-item>
              <el-form-item label="医生账号" prop="account">
                <el-input v-model="form2.account"></el-input>
              </el-form-item>
              <el-form-item label="手机号码" prop="phone">
                <el-input v-model="form2.phone"></el-input>
              </el-form-item>
              <el-form-item label="所属医院" prop="hospital">
                <el-input v-model="form2.hospital"></el-input>
              </el-form-item>
              <el-form-item label="所属科室" prop="department">
                <el-input v-model="form2.department"></el-input>
              </el-form-item>
              <el-form-item label="职称" prop="professionalTitle">
                <el-input v-model="form2.professionalTitle"></el-input>
              </el-form-item>
              <el-form-item label="擅长" prop="goodAt">
                <el-input v-model="form2.goodAt"></el-input>
              </el-form-item>
              <el-form-item label="简介" prop="introduce">
                <el-input type="textarea" v-model="form2.introduce"></el-input>
              </el-form-item>
              <el-form-item label="经验" prop="experience">
                <el-input v-model="form2.experience"></el-input>
              </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
              <el-button type="primary" @click="onSubmit()">确定</el-button>
            </span>
          </el-dialog>
          <!-- <el-button size="mini" type="danger" @click="del(scope.$index,scope.row)">删除</el-button> -->
        </template>
      </el-table-column>
    </el-table>
    <div class="block" style="margin:30px;" v-if="total > 0">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="data.pageNum" :page-sizes="[5,10,15,20]" :page-size="data.pageSize" layout="total, sizes, prev, pager, next, jumper" :total="total">
      </el-pagination>
    </div>
  </div>
</template>
<script>
import { deepClone } from '@/utils'
const defaultForm = {
  profilePhoto: '',
  account: '',
  phone: '',
  name: '',
  gender: '',
  authState: '',
  hospital: '',
  department: '',
  professionalTitle: '',
  goodAt: '',
  introduce: '',
  experience: '',
  doctorno: '',
}
// 引入接口
import { queryMeDoctor, modifyMeDoctor } from '@/api/medicine'
export default {
  data () {
    return {
      listLoading: true,
      tableData: [],
      keyword: '',
      data: {
        pageNum: 1,
        pageSize: 5,
      },
      dialogVisible: false,
      total: 0,
      form2: Object.assign({}, defaultForm),
    }
  },
  created () {
    this.init()
  },
  methods: {
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
        this.tableData = res.data.list
        this.total = res.data.total
      })
    },
    handleFilter () {
      this.init()
    },
    handleClose (done) {
      done();
    },
    // 点击编辑推送
    edit (row) {
      // 出现弹窗
      this.dialogVisible = true
      this.form2 = deepClone(row)
    },
    // 编辑推送弹框推送
    onSubmit () {
      // 发送网络请求修改
      console.log(this.form2);
      modifyMeDoctor(this.form2).then(res => {
        console.log(res);
        //   更新信息
        this.$message({
          message: '修改成功!',
          offset: 500,
          duration: 1300,
          type: 'success'
        });
        this.init()
      })
      this.dialogVisible = false
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
