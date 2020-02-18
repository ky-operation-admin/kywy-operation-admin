<template>
  <div class="app-container resume">
    <div class="filter-container" style="text-align:left;padding-bottom:20px">
      <el-form ref="form" :model="searchCondition" label-width="120px">
        <el-row :gutter="10">
          <el-col :span="6">
            <el-form-item label="职位">
              <el-input v-model="searchCondition.targetPosion" placeholder="请输入职位" clearable></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="性别">
              <el-select v-model="searchCondition.gender" placeholder="请选择性别" clearable style="width:100% !important">
                <el-option label="男" value="男"></el-option>
                <el-option label="女" value="女"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="年龄">
              <el-input v-model="searchCondition.age" placeholder="请输入年龄" clearable></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-button type="primary" style="margin-left:80px;" @click="searchBtn">搜索</el-button>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <el-table :data="tableData" border style="width: 100%;" id="resume_table">
      <el-table-column label="姓名" align="center" prop="name"></el-table-column>
      <el-table-column label="应聘职位" align="center" prop="targetPosion">
      </el-table-column>
      <el-table-column label="年龄" align="center" prop="age">
      </el-table-column>
      <el-table-column label="性别" align="center" prop="gender">
      </el-table-column>
      <el-table-column label="学历" align="center" prop="education">
      </el-table-column>
      <el-table-column label="工作经验" align="center" prop="experience">
      </el-table-column>
      <el-table-column label="手机号" align="center" prop="telephone">
      </el-table-column>
      <el-table-column label="邮箱" align="center" prop="email">
      </el-table-column>
      <el-table-column label="期望薪资" align="center" prop="expectedSalary">
      </el-table-column>
      <el-table-column label="操作" align="center" width="300px">
        <el-button size="small" type="success">阅读简历</el-button>
        <el-button size="small" type="success">推荐此人</el-button>
      </el-table-column>

    </el-table>
    <div class="block" style="margin:30px;" v-if="total > 0">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="data.pageNum" :page-sizes="[5, 10, 15, 20]" :page-size="data.pageSize" layout="total, sizes, prev, pager, next, jumper" :total="total">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { formatDate } from '@/utils'
import {
  getToken
} from '@/utils/auth'
import {
  getResumer,
  seachResumes,
  read,
  Invited,
  join,
  result,
  sendOffer,
  entryOffice,
  leave,
  read1,
} from '@/api/job'
import { constants } from 'fs';
export default {
  data () {
    return {
      table: `<el-row>
              <el-col :span="12">
                <p class="info_label">
                  <span style="width:100px;display:inline-block;text-align:right">姓名：</span>
                  {{ resumeDetail.name }}
                </p>
              </el-col>
              <el-col :span="12">
                <p class="info_label">
                  <span style="width:100px;display:inline-block;text-align:right">性别：</span>
                  {{ resumeDetail.gender }}
                </p>
              </el-col>
            </el-row>`,
      dialogVisible: false,
      dialog2Visible: false,
      centerDialogVisible: false,
      tableData: [],
      total: 0,
      data: {
        pageNum: 1,
        pageSize: 10,
        targetPosion: '',
        gender: '',
        age: '',
        type: '1'
      },
      // 简历详情
      resumeDetail: {},
      options: [
        {
          value: null,
          label: '收到的简历'
        },
        {
          value: 0,
          label: '康养无忧人才库'
        },
        {
          value: 1,
          label: '康养无忧高级人才'
        }
      ],
      // 搜索条件
      searchCondition: {
        targetPosion: '',
        gender: '',
        age: '',
        status: null
      },
      // 检查当条简历是否已阅读
      isRead: false,
      // 简历来源，求职者主动投递为1，机构主动搜索为2
      type: '1',
      // 工作经验
      experience: {

      },
      // 教育经历
      education: {

      },
      // 培训经历
      train: {

      }
    }
  },
  mounted () {
    this.getResume()
    // this.getEducation()
  },
  methods: {
    // -----------------------获取工作经验-----------------------
    getExperience (row) {
      // console.log(row)
      this.$instance1({
        method: "get",
        url: "/resumeWork/queryResumes",
        headers: {
          'token': getToken()
        },
        params: {
          accountid: row.accountid,
          adminQuery: "-1"
        }
      }).then((res) => {
        console.log(res)
        this.experience = res.data.data.list
        console.log('experience1', this.experience)
      })
    },
    // -------------------------获取教育经历------------------------
    getEducation (row) {
      // console.log('res1')
      console.log('row', row)
      this.$instance1({
        method: "get",
        url: "/resumeEducation/queryResumes",
        headers: {
          'token': getToken()
        },
        params: {
          accountid: row.accountid,
          adminQuery: "-1"
        }
      }).then((res) => {
        console.log('resgetEducation', res)
        this.education = res.data.data.list
        console.log('education', this.education)
      }).catch((err) => {
        console.log(err)
      })

    },
    //-------------------------- 获取培训经历----------------------------
    getTrain (row) {
      this.$instance1({
        method: "get",
        url: "/resumeTrain/queryResumes",
        headers: {
          'token': getToken()
        },
        params: {
          accountid: row.accountid,
          adminQuery: "-1"
        }
      }).then((res) => {
        console.log(res)
        this.train = res.data.data.list
      }).catch((err) => {
        console.log(err)
      })

    },
    // --------------------------获取简历数据----------------------------
    getResume () {
      this.type = '1'
      this.data.targetPosion = this.searchCondition.targetPosion
      this.data.gender = this.searchCondition.gender
      this.data.age = this.searchCondition.age
      getResumer({
        ...this.data,
        type: this.type
      })
        .then(res => {
          console.log(res, 'res')
          this.tableData = res.data.data.list
          this.total = res.data.total
          console.log(this.tableData, 'tableData')
          let len = this.tableData.length
          for (let i = 0; i < len; i++) {
            // 参加面试
            if (this.tableData[i].attendinterviewTime) {
              // console.log(111)
              this.tableData[i].attendinterviewTime = true
            } else {
              // console.log(222)
              this.tableData[i].attendinterviewTime = false
            }
            // 入职
            if (this.tableData[i].entrydutyTime) {
              this.tableData[i].entrydutyTime = true
            } else {
              this.tableData[i].entrydutyTime = false
            }
            // 离职
            if (this.tableData[i].quitdutyTime) {
              this.tableData[i].quitdutyTime = true
            } else {
              this.tableData[i].quitdutyTime = false
            }
            // 学历
            if (this.tableData[i].education == 0) {
              this.tableData[i].education = '小学'
            } else if (this.tableData[i].education == 1) {
              this.tableData[i].education = '初中'
            } else if (this.tableData[i].education == 2) {
              this.tableData[i].education = '高中/中技/中专'
            } else if (this.tableData[i].education == 3) {
              this.tableData[i].education = '大专'
            } else if (this.tableData[i].education == 4) {
              this.tableData[i].education = '本科'
            } else if (this.tableData[i].education == 5) {
              this.tableData[i].education = '硕士'
            } else if (this.tableData[i].education == 6) {
              this.tableData[i].education = '博士'
            }
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    // ------------------------------点击搜索按钮获取高级人才---------------------
    searchBtn () {
      if (
        this.searchCondition.status == 0 ||
        this.searchCondition.status == 1
      ) {
        this.type = '2'
        seachResumes({
          ...this.searchCondition,
          type: this.type
        })
          .then(res => {
            // console.log('res', res)
            this.type = '2'
            this.tableData = res.data.list
            // console.log('tableData', this.tableData)
            this.total = res.data.total
            let len = this.tableData.length
            for (let i = 0; i < len; i++) {
              //   console.log(11111111)
              // 参加面试
              if (this.tableData[i].attendinterviewTime) {
                this.tableData[i].attendinterviewTime = true
              } else {
                // console.log(222)
                this.tableData[i].attendinterviewTime = false
              }
              // 入职
              if (this.tableData[i].entrydutyTime) {
                this.tableData[i].entrydutyTime = true
              } else {
                this.tableData[i].entrydutyTime = false
              }

              // 离职
              if (this.tableData[i].quitdutyTime) {
                this.tableData[i].quitdutyTime = true
              } else {
                this.tableData[i].quitdutyTime = false
              }

              // 学历
              if (this.tableData[i].education == 0) {
                this.tableData[i].education = '小学'
              } else if (this.tableData[i].education == 1) {
                this.tableData[i].education = '初中'
              } else if (this.tableData[i].education == 2) {
                this.tableData[i].education = '高中/中技/中专'
              } else if (this.tableData[i].education == 3) {
                this.tableData[i].education = '大专'
              } else if (this.tableData[i].education == 4) {
                this.tableData[i].education = '本科'
              } else if (this.tableData[i].education == 5) {
                this.tableData[i].education = '硕士'
              } else if (this.tableData[i].education == 6) {
                this.tableData[i].education = '博士'
              }
            }
          })
          .catch(err => {
            console.log(err)
          })
      } else {
        this.type = '1'
        this.getResume()
      }
    },
    // ------------------------------阅读简历------------------------
    readResume (row) {
      //   console.log('row')
      if (row.readResumeTime) {
        this.getEducation(row)
        this.getExperience(row)
        this.getTrain(row)
        // console.log('res1')
        this.dialogVisible = true
        this.resumeDetail = {
          ...row
        }
      } else {
        this.getExperience(row)
        this.getEducation(row)
        this.getTrain(row)
        this.dialogVisible = true
        this.resumeDetail = {
          ...row
        }
        let date = formatDate('yyyy-MM-dd hh:mm:ss')
        read({
          sendresumeid: row.id,
          readresumeTime: date,
          resumeFrom: this.type,
          userAccountId: row.userAccountId
        })
          .then(res => {
            console.log(res)
            if (res.code == 1) {
              this.getResume()
            }
          })
          .catch(err => {
            console.log(err)
          })
      }
    },
    // -----------------------关闭对话框------------------------
    handleClose (done) {
      done()
    },
    handle2Close (done) {
      done()
    },
    // --------------------------分页----------------------------
    handleSizeChange (val) {
      this.data.pageSize = val
      this.getResume()
    },
    handleCurrentChange (val) {
      this.data.pageNum = val
      this.getResume()
    }
  }
}
</script>

<style scoped>
.el-dialog--center .contentRow {
  border-bottom: 1px solid #ccc;
}
.el-tag {
  padding: 0;
}
.resumeContent p,
.resumeContent h4 {
  margin-bottom: 20px;
}
.info_label {
  text-align: left;
}
.info_label[data-v-08685e00] {
  margin-bottom: 0px;
}
</style>
