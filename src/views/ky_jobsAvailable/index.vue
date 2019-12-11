<template>
  <div id="adv" class="app-container">
    <el-row style="padding:20px">
      <el-button type="primary" plain icon='el-icon-plus' @click="postPosition()">发布职位</el-button>
    </el-row>
    <!-- 模拟数据 -->
    
    <!-- 接口数据 -->
    <el-table :data="list" border fit >
      <el-table-column prop="id" label="编号" align="center"></el-table-column>
      <el-table-column prop="positionid" label="职位名称" align="center"></el-table-column>
      <el-table-column prop="positionIndustry" label="所属行业" align="center"></el-table-column>
      <el-table-column prop="accountid" label="发布人" align="center"></el-table-column>
      <el-table-column prop="openpositionTime" label="发布时间" align="center"></el-table-column>
      <el-table-column prop="openpositionNumber" label="职位开放数目" align="center"></el-table-column>
      <el-table-column prop="positionValidity" label="职位有效期" align="center"></el-table-column>
      <el-table-column prop="salary" label="职位薪资" align="center">
        <el-table-column prop="salaryFrom" label="薪资最小值" align="center"></el-table-column>
        <el-table-column prop="salaryTo" label="薪资最大值" align="center"></el-table-column>
      </el-table-column>
      <el-table-column prop="workAddress" label="工作地点" align="center"></el-table-column>
      <el-table-column align="center" label="操作" width="200">
        <template slot-scope="scope">
          <el-button size="mini" type="primary" @click="edit(scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)" style="margin-left: 10px">下架</el-button>
        </template>
      </el-table-column>
    </el-table>
    <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="getList" />
  </div>
</template>

<script>
let tableData = [
  {
    id: '1',
    postName: '营销专员',
    issuer: '黄彩',
    time: '2019-04-11',
    department: '营销部',
    needNum: 2,
    compensation: '10000~12000/月',
    address: '广州'
  }, {
    id: '2',
    postName: '技术助理',
    issuer: '黄彩',
    time: '2019-05-11',
    department: '生产部',
    needNum: 1,
    compensation: '11000~13000/月',
    address: '广州'
  }, {
    id: '3',
    postName: '财务会计',
    issuer: '黄彩',
    time: '2019-06-11',
    department: '营销部',
    needNum: 3,
    compensation: '10000~12000/月',
    address: '深圳'
  },
  {
    id: '4',
    postName: '财务会计',
    issuer: '黄彩',
    time: '2019-07-11',
    department: '营销部',
    needNum: 3,
    compensation: '10000~12000/月',
    address: '广州'
  }, {
    id: '5',
    postName: '保洁员',
    issuer: '黄彩',
    time: '2019-08-11',
    department: '行政部',
    needNum: 4,
    compensation: '3000~3500/月',
    address: '深圳'
  }, {
    id: '6',
    postName: '营销专员2',
    issuer: '黄彩',
    time: '2019-09-11',
    department: '营销部',
    needNum: 2,
    compensation: '10000~12000/月',
    address: '广州'
  }, {
    id: '7',
    postName: '营销专员3',
    issuer: '黄彩',
    time: '2019-11-11',
    department: '营销部',
    needNum: 2,
    compensation: '10000~12000/月',
    address: '广州'
  }, {
    id: '8',
    postName: '营销专员3',
    issuer: '黄彩',
    time: '2019-11-11',
    department: '营销部',
    needNum: 2,
    compensation: '10000~12000/月',
    address: '广州'
  }, {
    id: '9',
    postName: '营销专员3',
    issuer: '黄彩',
    time: '2019-11-11',
    department: '营销部',
    needNum: 2,
    compensation: '10000~12000/月',
    address: '广州'
  }, {
    id: '10',
    postName: '营销专员3',
    issuer: '黄彩',
    time: '2019-11-11',
    department: '营销部',
    needNum: 2,
    compensation: '10000~12000/月',
    address: '广州'
  }, {
    id: '11',
    postName: '营销专员3',
    issuer: '黄彩',
    time: '2019-11-11',
    department: '营销部',
    needNum: 2,
    compensation: '10000~12000/月',
    address: '广州'
  }, {
    id: '12',
    postName: '营销专员3',
    issuer: '黄彩',
    time: '2019-11-11',
    department: '营销部',
    needNum: 2,
    compensation: '10000~12000/月',
    address: '广州'
  }, {
    id: '13',
    postName: '营销专员3',
    issuer: '黄彩',
    time: '2019-11-11',
    department: '营销部',
    needNum: 2,
    compensation: '10000~12000/月',
    address: '广州'
  }, {
    id: '14',
    postName: '营销专员3',
    issuer: '黄彩',
    time: '2019-11-11',
    department: '营销部',
    needNum: 2,
    compensation: '10000~12000/月',
    address: '广州'
  }, {
    id: '15',
    postName: '营销专员3',
    issuer: '黄彩',
    time: '2019-11-11',
    department: '营销部',
    needNum: 2,
    compensation: '10000~12000/月',
    address: '广州'
  }, {
    id: '16',
    postName: '营销专员3',
    issuer: '黄彩',
    time: '2019-11-11',
    department: '营销部',
    needNum: 2,
    compensation: '10000~12000/月',
    address: '广州'
  }, {
    id: '17',
    postName: '营销专员3',
    issuer: '黄彩',
    time: '2019-11-11',
    department: '营销部',
    needNum: 2,
    compensation: '10000~12000/月',
    address: '广州'
  }, {
    id: '18',
    postName: '营销专员3',
    issuer: '黄彩',
    time: '2019-11-11',
    department: '营销部',
    needNum: 2,
    compensation: '10000~12000/月',
    address: '广州'
  }, {
    id: '19',
    postName: '营销专员3',
    issuer: '黄彩',
    time: '2019-11-11',
    department: '营销部',
    needNum: 2,
    compensation: '10000~12000/月',
    address: '广州'
  }, {
    id: '20',
    postName: '营销专员3',
    issuer: '黄彩',
    time: '2019-11-11',
    department: '营销部',
    needNum: 2,
    compensation: '10000~12000/月',
    address: '广州'
  }, {
    id: '21',
    postName: '营销专员3',
    issuer: '黄彩',
    time: '2019-11-11',
    department: '营销部',
    needNum: 2,
    compensation: '10000~12000/月',
    address: '广州'
  }]
import { deepClone } from '@/utils'
import Pagination from '@/components/Pagination' // secondary package based on el-pagination
import {getJobopen} from '@/api/jobopen'
export default {
  data () {
    return {
      total: 0,
      list: null,
      listLoading: true,
      dialog2Visible: false,
      keyword: '',
      listQuery: {
        page: 1,
        limit: 3,
        importance: undefined,
        title: undefined,
        type: undefined,
        sort: '+id'
      },
      form2: {
        id: '',
        postName: '',
        issuer: '',
        time: '',
        department: '',
        needNum: 1,
        compensation: '',
        address: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      dialogImageUrl: '',

    }

  },
  components: {
    Pagination
  },
  created () {
    this.getList()
  },
  methods: {
      postPosition(){
          this.$router.push('/talents/postPosition')
      },
    getList () {
    //   this.listLoading = true
      // 模拟请求事件
      //   this.list = tableData
      //   this.total = tableData.length
      //   window.console.log('list', tableData,this.total);
      //   setTimeout(() => {
      //     this.listLoading = false
      //   }, .5 * 1000)
      //   接口数据
    //   this.listLoading = true
    //   let { data } = await this.$getQueryOpenPositions({
    //     params: { status: 0 }
    //   });
    //   this.list = data.list
    //   this.listLoading = false
        this.listLoading = true
        getJobopen({ status: 0 }).then(response => {
        this.list = response.list
        window.console.log('list', response.list);
        this.listLoading = false
      })
      
    },
    // 表单重置
    resetForm (formName) {
      this.$refs[formName].resetFields();
    },
    // 删除
    async handleDelete (index, row) {
      this.$confirm("是否确定要删除" + row.postName + ", 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(async () => {
        this.list.splice(index, 1)
        this.getList()
        this.$message({
          type: "success",
          message: "删除成功!"
        });
      });
    },
    // 增加
    
    handleClose (done) {
      done();
    },
    handle2Close (done) {
      done();
    },
    // 编辑
    edit (row) {
      this.dialog2Visible = true;
      this.form2 = deepClone(row)
      window.console.log('form2', this.form2);

    },
    // 编辑确定弹框推送
    on2Submit () {
      for (let index = 0; index < this.list.length; index++) {
        if (this.list[index].id === this.form2.id) {
          window.console.log(this.list[index].id);
          this.listLoading = true
          this.list.splice(index, 1, Object.assign({}, this.form2))
          this.dialogVisible = false
          // 模拟请求事件
          setTimeout(() => {
            this.listLoading = false
            this.$message({
              message: '编辑成功',
              type: 'success'
            });
          }, .5 * 1000)
          break
        }
      }
      this.dialog2Visible = false
    },
    isCancel () {
      this.dialog2Visible = false;
    },
    filterTag (value, row) {
      return row.address === value;
    },
    filterHandler (value, row, column) {
      const property = column['property'];
      return row[property] === value;
    }
  }
}
</script>
<style>
#adv {
  /* height: 100%; */
  padding: 20px;
}
.el-container {
  height: 100%;
}

.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.el-header {
  text-align: center;
  height: 150px;
  line-height: 150px;
  padding: 0 !important;
  /* background: #1d94e7; */
}
.el-header h1 {
  width: 250px;
  height: 100%;
  background: #1d94e7;
  color: #fff;
}
.el-header span {
  color: #fff;
}
.el-table th > .cell {
  font-weight: 700;
  font-size: 16px;
  color: rgba(0, 17, 34, 0.993);
}
.el-aside {
  /* background-color: #d3dce6; */
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.mb-3 {
  height: 60px;
  text-align: left;
  line-height: 60px;
}
.form-control {
  width: 300px;
  height: 35px;
}
body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
.el-row,
.el-table td .el-form-item__content {
  text-align: left;
}
.el-dialog__footer {
  text-align: center !important;
}
/* .el-dialog{
    width: 50% !important;
} */
</style>

