<template>
  <div>
    <div class="top_btn">
      <router-link to="/talentsRecruitment/resume">
        <el-button type="primary">查看简历</el-button>
      </router-link>
    </div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="name" label="姓名"></el-table-column>
      <el-table-column prop="job" label="职位名称"></el-table-column>
      <el-table-column prop="join" label="参加面试">
        <template slot-scope="{row}">
          <div v-if="!row.attendInterviewTime" @click.once="joinInterview(row)">
            <el-checkbox v-model="row.attendInterviewTime" name="type" class="el_checkbox" :disabled="row.attendInterviewTime"></el-checkbox>
          </div>
          <div v-else>
            <el-checkbox v-model="row.attendInterviewTime" name="type" class="el_checkbox" :disabled="row.attendInterviewTime"></el-checkbox>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="result" label="面试结果">
        <template slot-scope="scope">
          <div @click="interviewRes(scope.row)" class="payShow">
            <el-button v-if="scope.row.interviewResult==1" type="success">已通过</el-button>
            <el-button v-else-if="scope.row.interviewResult==0" type="danger">未通过</el-button>
            <el-button v-else>未面试</el-button>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="sendOffer" label="发录取通知书">
        <template slot-scope="scope">
          <el-button type="primary" v-if="!scope.row.isSend" @click="sendInterview(scope.row)">发送</el-button>
          <el-button type="danger" v-if="scope.row.isSend">已发送</el-button>
          <el-dialog title="入职邀请" :visible.sync="centerDialogVisible" width="500px">
            <el-form ref="form" :model="form1" label-width="80px">
              <el-form-item label="入职时间">
                <el-date-picker v-model="form1.entryTime" type="datetime" placeholder="选择日期时间">
                </el-date-picker>
              </el-form-item>
              <el-form-item label="入职地点">
                <el-input type="textarea" v-model="form1.entryAddress" placeholder="请输入面试地点"></el-input>
              </el-form-item>
              <el-form-item label="联系方式">
                <el-input v-model="form1.entryContact" placeholder="请输入联系人与联系电话"></el-input>
              </el-form-item>
              <el-form-item label="交通线路">
                <el-input type="textarea" v-model="form1.entryTrafficroute" placeholder="请输入交通路线"></el-input>
              </el-form-item>
              <el-form-item label="携带资料">
                <el-input type="textarea" v-model="form1.entryMaterial" placeholder="请输入需携带资料"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="makeSure()">确定</el-button>
                <el-button @click="centerDialogVisible = false">取消</el-button>
              </el-form-item>
            </el-form>
          </el-dialog>
        </template>
      </el-table-column>
      <el-table-column prop="entry" label="入职">
        <template slot-scope="{row}">
          <div @click.once="entry(row)">
            <el-checkbox v-model="row.entryDutyTime" name="type" class="el_checkbox" :disabled="row.entryDutyTime"></el-checkbox>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="leaveOffice" label="离职">
        <template slot-scope="{row}">
          <div @click.once="leaveOffice(row)">
            <el-checkbox v-model="row.quitDutyTime" name="type" class="el_checkbox" :disabled="row.quitDutyTime"></el-checkbox>
          </div>
        </template>
      </el-table-column>
    </el-table>
    <div class="block" style="margin:30px;">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="data.pageNum" :page-sizes="[5, 10, 15, 20]" :page-size="data.pageSize" layout="total, sizes, prev, pager, next, jumper" :total="total">
      </el-pagination>
    </div>
  </div>
</template>
<script>
import Vue from "vue"
// ----------------------------------时间转换--------------------------
function formatDate (a) {
  var d = new Date();  // 获取当前时间
  // 构造对象o，里面存储当前时间对应的年、月、日、时、分、秒、季度、毫秒参数
  var o = {
    "M+": d.getMonth() + 1,
    "d+": d.getDate(),
    "h+": d.getHours(),
    "m+": d.getMinutes(),
    "s+": d.getSeconds(),
    "q+": Math.floor((d.getMonth() + 3) / 3),
    "S": d.getMilliseconds()
  };
  // 获取年份
  if (/(y+)/.test(a)) a = a.replace(RegExp.$1, (d.getFullYear() + "").substr(4 - RegExp.$1.length));

  // 获取其他
  for (var k in o) {
    if (new RegExp("(" + k + ")").test(a)) a = a.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
  }
  return a;
}

Vue.prototype.$formatDate = formatDate

export default {
  data () {
    return {
      form1: {
        entryTime: '2019-12-31 10:00:00', //入职时间
        entryAddress:
          '广州市黄埔区开源大道11号加速器产业园区B2栋9楼六顺生物', //入职地点
        entryContact: '王经理 18790187654', //联系方式
        entryTrafficroute:
          '公交车367、358、B24、339路公交到加速器产业园区站下车', //交通路线
        entryMaterial:
          '携带个人简历、身份证、学历证书、体检报告等相关证书及复印件一份', //携带资料
        sendresumeid: '', //简历id
      },
      value1: "",
      centerDialogVisible: false,
      total: 0,
      tableData: [],
      data: {
        pageNum: 1,
        pageSize: 10
      },
    }
  },
  mounted () {
    this.getInvited()
  },
  methods: {
    // ------------------------------获取面试邀请记录-------------------------
    getInvited () {
      this.$instance2({
        method: "get",
        url: "/jInviteInterview/queryInviteInterviews",
        params: this.data
      }).then((res) => {
        console.log('res', res)
        this.tableData = res.data.list
        this.total = res.data.total
        let len = this.tableData.length

        for (let i = 0; i < len; i++) {
          // 参加面试
          if (this.tableData[i].attendInterviewTime) {
            // console.log(111)
            this.tableData[i].attendInterviewTime = true
          } else {
            // console.log(222)
            this.tableData[i].attendInterviewTime = false
          }
          // 入职
          if (this.tableData[i].entryDutyTime) {
            this.tableData[i].entryDutyTime = true
          } else {
            this.tableData[i].entryDutyTime = false
          }

          // 离职
          if (this.tableData[i].quitDutyTime) {
            this.tableData[i].quitDutyTime = true
          } else {
            this.tableData[i].quitDutyTime = false
          }

        }
      }).catch((err) => {
        console.log(err)
      })
    },
    // -----------------------------跟踪简历进度-----------------------------
    // 参加面试
    joinInterview (row) {
      let date = this.$formatDate("yyyy-MM-dd hh:mm:ss")
      console.log('date', date)
      this.$instance2({
        method: "put",
        url: "/jRecruit/recordRecruitProgress",
        params: {
          attendinterviewTime: date,
          sendresumeid: row.sendresumeid
        }

      }).then((res) => {
        console.log(res)
        this.getInvited()
      }).catch((err) => {
        console.log(err)
      })
    },
    // ------------------------------面试结果-----------------------------
    interviewRes (row) {
      let result = row.interviewResult
      if (result == 0) {
        result = 1
        console.log(result)
      } else if (result == 1) {
        result = 0
        console.log(result)
      } else if (!result) {
        result = 0
        console.log(11111111111, result)

      }
      this.$instance2({
        method: "put",
        url: "/jRecruit/recordRecruitProgress",
        params: {
          sendresumeid: row.sendresumeid,
          interviewResult: result
        }
      }).then((res) => {
        console.log(res)
        this.getInvited()
      }).catch((err) => {
        console.log(err)
      })
    },
    //点击发送按钮
    sendInterview (row) {
      this.centerDialogVisible = true
      this.form1.sendresumeid = row.sendresumeid
    },
    makeSure () {
      this.centerDialogVisible = false
      this.$instance1({
        method: "post",
        url: "/jSendOffer/recordSendOffer",
        data: {
          ...this.form1
        }

      }).then((res) => {
        console.log(res)
      }).catch((err) => {
        console.log(err)
      })


    },
    // ----------------------------入职----------------------
    entry (row) {
      let date = this.$formatDate("yyyy-MM-dd hh:mm:ss")
      console.log('date', date)
      this.$instance2({
        method: "put",
        url: "/jRecruit/recordRecruitProgress",
        params: {
          entrydutyTime: date,
          sendresumeid: row.sendresumeid
        }

      }).then((res) => {
        console.log(res)
        this.getInvited()
      }).catch((err) => {
        console.log(err)
      })
    },
    // -------------------------------离职----------------------
    leaveOffice (row) {
      let date = this.$formatDate("yyyy-MM-dd hh:mm:ss")
      console.log('date', date)
      this.$instance2({
        method: "put",
        url: "/jRecruit/recordRecruitProgress",
        params: {
          quitdutyTime: date,
          sendresumeid: row.sendresumeid
        }

      }).then((res) => {
        console.log(res)
        this.getInvited()
      }).catch((err) => {
        console.log(err)
      })
    },
    // ------------------------------分页-------------------------
    handleSizeChange (val) {
      this.data.pageSize = val
      this.getInvited()
    },
    handleCurrentChange (val) {
      this.data.pageNum = val
      this.getInvited()
    }
  },



}
</script>
<style scoped>
.top_btn {
  margin: 20px 0;
  float: right;
}
input {
  border: none;
  border-bottom: 1px #000 solid;
}
</style>
