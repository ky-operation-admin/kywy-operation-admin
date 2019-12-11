<template>
  <div class="app-container">
    <el-row style="padding:20px">
      <el-button type="primary" plain icon='el-icon-plus' @click="dialogVisible = true">新增职位</el-button>
      <el-dialog title="新增职位" top='3vh' :visible.sync="dialogVisible" width="600px" :before-close="handleClose">
        <!-- <span>这是一段信息</span> -->
        <el-form ref="form" :model="form" label-width="80px" label-position="left">
          <el-form-item label="职位名称" prop="position_name">
            <el-input v-model="form.position_name" style="width:215px"></el-input>
          </el-form-item>
          <el-form-item label="职位职能" prop="position_responsibility">
            <el-input v-model="form.position_responsibility" style="width:215px"></el-input>
          </el-form-item>
          <el-form-item label="年龄要求" prop="requirements_age">
            <el-select v-model="form.requirements_age" placeholder="请选择">
              <el-option label="18-22" value="18-22"></el-option>
              <el-option label="18-25" value="18-25"></el-option>
              <el-option label="22-35" value="22-35"></el-option>
              <el-option label="25-35" value="25-40"></el-option>
              <el-option label="35-45" value="35-45"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="性别要求" prop="requirements_sex">
            <el-radio-group v-model="form.requirements_sex">
              <el-radio label="男"></el-radio>
              <el-radio label="女"></el-radio>
              <el-radio label="男女不限"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="经验要求" prop="requirements_experience">
            <el-select v-model="form.requirements_experience" placeholder="请选择">
              <el-option label="无" value="无"></el-option>
              <el-option label="2年以上" value="2年以上"></el-option>
              <el-option label="3-5年" value="3-5年"></el-option>
              <el-option label="5年以上" value="5年以上"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="学历要求" prop="requirements_education">
            <el-select v-model="form.requirements_education" placeholder="请选择">
              <el-option label="专科以上" value="专科以上"></el-option>
              <el-option label="本科以上" value="本科以上"></el-option>
              <el-option label="研究生以上" value="研究生以上"></el-option>
              <el-option label="博士以上" value="博士以上"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="发布时间" prop="openPosition_time">
            <el-date-picker v-model="form.openPosition_time" type="datetime" placeholder="选择日期时间">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="工作地点" prop="work_address">
            <el-select v-model="form.work_address" placeholder="请选择">
              <el-option label="广州" value="广州"></el-option>
              <el-option label="深圳" value="深圳"></el-option>
              <el-option label="北京" value="北京"></el-option>
              <el-option label="上海" value="上海"></el-option>
              <el-option label="武汉" value="武汉"></el-option>
              <el-option label="长沙" value="长沙"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="联系电话" prop="contact_phone">
            <el-input v-model="form.contact_phone" style="width:215px"></el-input>
          </el-form-item>
          <el-form-item label="职位标签" prop="position_tag">
            <el-input v-model="form.position_tag" style="width:215px"></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="addItem('form')">提交</el-button>
        </span>
      </el-dialog>
    </el-row>
    <!-- 模拟数据 -->
    <el-table :data="list" border fit v-loading="listLoading">
      <el-table-column prop="position_name" label="职位名称" width="260" align="center"></el-table-column>
      <el-table-column prop="position_responsibility" label="职位职责" align="center"></el-table-column>
      <el-table-column label="岗位要求" align="center">
        <el-table-column prop="requirements_age" label="年龄要求" align="center"></el-table-column>
        <el-table-column prop="requirements_sex" label="性别要求" align="center"></el-table-column>
        <el-table-column prop="requirements_experience" label="经验要求" align="center"></el-table-column>
        <el-table-column prop="requirements_education" label="学历要求" align="center"></el-table-column>
      </el-table-column>
      <el-table-column prop="openPosition_time" label="添加时间" align="center"></el-table-column>
      <el-table-column prop="work_address" label="工作地点" align="center"></el-table-column>
      <el-table-column prop="contact_phone" label="联系电话" align="center"></el-table-column>
      <el-table-column prop="position_tag" label="职位标签" align="center">
        <template slot-scope="scope">
          <el-tag :type="scope.row.position_tag === '营销' ? 'primary' : 'success'" disable-transitions>{{scope.row.position_tag}}</el-tag>
        </template>
      </el-table-column>

      <el-table-column align="center" label="操作" width="200">
        <template slot-scope="scope">
          <el-button size="mini" type="primary" @click="edit(scope.row)">编辑</el-button>
          <el-dialog title="编辑" top='8vh' :visible.sync="dialog2Visible" width="600px" :before-close="handle2Close" :modal-append-to-body="false">
            <el-form ref="form2" :model="form2" label-width="80px" label-position="left">
              <el-form-item label="职位名称" prop="position_name">
                <el-input v-model="form2.position_name" style="width:215px"></el-input>
              </el-form-item>
              <el-form-item label="职位职能" prop="position_responsibility">
                <el-input v-model="form2.position_responsibility" style="width:215px"></el-input>
              </el-form-item>
              <el-form-item label="年龄要求" prop="requirements_age">
                <el-select v-model="form2.requirements_age" placeholder="请选择">
                  <el-option label="18-22" value="18-22"></el-option>
                  <el-option label="18-25" value="18-25"></el-option>
                  <el-option label="22-35" value="22-35"></el-option>
                  <el-option label="25-35" value="25-40"></el-option>
                  <el-option label="35-45" value="35-45"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="性别要求" prop="requirements_sex">
                <el-radio-group v-model="form2.requirements_sex">
                  <el-radio label="男"></el-radio>
                  <el-radio label="女"></el-radio>
                  <el-radio label="男女不限"></el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="经验要求" prop="requirements_experience">
                <el-select v-model="form2.requirements_experience" placeholder="请选择">
                  <el-option label="无" value="无"></el-option>
                  <el-option label="2年以上" value="2年以上"></el-option>
                  <el-option label="3-5年" value="3-5年"></el-option>
                  <el-option label="5年以上" value="5年以上"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="学历要求" prop="requirements_education">
                <el-select v-model="form2.requirements_education" placeholder="请选择">
                  <el-option label="专科以上" value="专科以上"></el-option>
                  <el-option label="本科以上" value="本科以上"></el-option>
                  <el-option label="研究生以上" value="研究生以上"></el-option>
                  <el-option label="博士以上" value="博士以上"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="发布时间" prop="openPosition_time">
                <el-date-picker v-model="form2.openPosition_time" type="datetime" placeholder="选择日期时间">
                </el-date-picker>
              </el-form-item>
              <el-form-item label="工作地点" prop="work_address">
                <el-select v-model="form2.work_address" placeholder="请选择">
                  <el-option label="广州" value="广州"></el-option>
                  <el-option label="深圳" value="深圳"></el-option>
                  <el-option label="北京" value="北京"></el-option>
                  <el-option label="上海" value="上海"></el-option>
                  <el-option label="武汉" value="武汉"></el-option>
                  <el-option label="长沙" value="长沙"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="联系电话" prop="contact_phone">
                <el-input v-model="form2.contact_phone" style="width:215px"></el-input>
              </el-form-item>
              <el-form-item label="职位标签" prop="position_tag">
                <el-input v-model="form2.position_tag" style="width:215px"></el-input>
              </el-form-item>
            </el-form>
            <div>
              <span slot="footer" class="dialog-footer" style="margin-right:30px">
                <el-button @click="isCancel()">取消</el-button>
              </span>
              <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="on2Submit()">确定</el-button>
              </span>
            </div>
          </el-dialog>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)" style="margin-left: 10px">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

  </div>
</template>

<script>
//时间格式转换方法
function timeTotime (time) {
  let d = new Date(time);
  let timeNow = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
  return timeNow
}
let tableData = [
  {
    id: '1',
    position_name: '营销专员',
    position_responsibility: '营销',
    requirements_age: '23-35',
    requirements_sex: '男女不限',
    requirements_experience: '2年以上',
    requirements_education: '专科以上',
    openPosition_time: timeTotime(Date.now()),
    work_address: '广州',
    contact_phone: '13455566666',
    position_tag: '营销'
  }, {
    id: '2',
    position_name: '财务会计',
    position_responsibility: '账务',
    requirements_age: '23-35',
    requirements_sex: '男女不限',
    requirements_experience: '2年以上',
    requirements_education: '专科以上',
    openPosition_time: timeTotime(Date.now()),
    work_address: '广州',
    contact_phone: '13455566666',
    position_tag: '会计'
  }, {
    id: '3',
    position_name: '营销专员',
    position_responsibility: '营销',
    requirements_age: '23-35',
    requirements_sex: '男女不限',
    requirements_experience: '2年以上',
    requirements_education: '专科以上',
    openPosition_time: timeTotime(Date.now()),
    work_address: '深圳',
    contact_phone: '13455566666',
    position_tag: '营销'
  },
  {
    position_name: '科研员',
    position_responsibility: '新药研发',
    requirements_age: '23-35',
    requirements_sex: '男女不限',
    requirements_experience: '3年以上',
    requirements_education: '研究生以上',
    openPosition_time: timeTotime(Date.now()),
    work_address: '广州',
    contact_phone: '13455566666',
    position_tag: '科研'
  }, {
    position_name: '营销专员',
    position_responsibility: '营销',
    requirements_age: '23-35',
    requirements_sex: '男女不限',
    requirements_experience: '2年以上',
    requirements_education: '专科以上',
    openPosition_time: timeTotime(Date.now()),
    work_address: '东莞',
    contact_phone: '13455566666',
    position_tag: '营销'
  }, {
    position_name: '营销专员',
    position_responsibility: '营销',
    requirements_age: '23-35',
    requirements_sex: '男女不限',
    requirements_experience: '2年以上',
    requirements_education: '专科以上',
    openPosition_time: timeTotime(Date.now()),
    work_address: '北京',
    contact_phone: '13455566666',
    position_tag: '营销'
  }, {
    id: '7',
    position_name: '营销专员',
    position_responsibility: '营销',
    requirements_age: '23-35',
    requirements_sex: '男女不限',
    requirements_experience: '2年以上',
    requirements_education: '专科以上',
    openPosition_time: timeTotime(Date.now()),
    work_address: '上海',
    contact_phone: '13455566666',
    position_tag: '营销'
  }]
import { deepClone } from '@/utils'
export default {
  data () {
    return {
      list: null,
      listLoading: true,
      dialogVisible: false,
      dialog2Visible: false,
      keyword: '',
      form: {
        id: '',
        position_name: '',
        position_responsibility: '',
        requirements_age: '',
        requirements_sex: '',
        requirements_experience: '',
        requirements_education: '',
        openPosition_time: '',
        work_address: '',
        contact_phone: '',
        position_tag: ''
      },
      form2: {
        id: '',
        position_name: '',
        position_responsibility: '',
        requirements_age: '',
        requirements_sex: '',
        requirements_experience: '',
        requirements_education: '',
        openPosition_time: '',
        work_address: '',
        contact_phone: '',
        position_tag: ''
      },
      dialogImageUrl: '',

    }

  },
  components: {

  },
  created () {
    this.getList()
  },
  methods: {
   async getList () {
      this.listLoading = true
    //   接口数据
    //   let { data } = await this.$getQueryOpenPositions({
    //     params: {organizationName:'timo'}
    //   });
    //   window.console.log('list', data.list);
    //   this.list = data.list
    // 模拟数据
      this.list = tableData
      window.console.log('list', tableData);
      // 模拟请求事件
      setTimeout(() => {
        this.listLoading = false
      }, .5 * 1000)
    },
    // 表单重置
    resetForm (formName) {
      this.$refs[formName].resetFields();
    },
    // 删除
    async handleDelete (index, row) {
      this.$confirm("是否确定要删除" + row.position_name + ", 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(async () => {
        this.list.splice(index, 1)
        this.$message({
          type: "success",
          message: "删除成功!"
        });
      });
    },
    // 增加
    addItem (formName) {
      window.console.log('this.form', this.form.name, this.form);
      this.$refs[formName].validate((valid) => {
        if (valid) {

          let formtList = {
            id: this.list.length + 1,
            postName: this.form.postName,
            department: this.form.department,
            needNum: this.form.needNum,
            compensation: this.form.compensation,
            address: this.form.address,
            position_name: this.form.position_name,
            position_responsibility: this.form.position_responsibility,
            requirements_age: this.form.requirements_age,
            requirements_sex: this.form.requirements_sex,
            requirements_experience: this.form.requirements_experience,
            requirements_education: this.form.requirements_education,
            openPosition_time: timeTotime(this.form.openPosition_time),
            work_address: this.form.work_address,
            contact_phone: this.form.contact_phone,
            position_tag: this.form.position_tag
          };
          this.listLoading = true
          this.list.push(formtList)
          //   表单重置
          this.resetForm(formName)
          this.dialogVisible = false
          // 模拟请求事件
          setTimeout(() => {
            this.listLoading = false
            this.$message({
              message: '发布成功',
              type: 'success'
            });
          }, .5 * 1000)
        } else {
          window.console.log('error submit!!');
          return false;
        }
      });
      this.dialogVisible = false
      window.console.log('111');
    },
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
          //   转换时间格式
          this.form2.openPosition_time = timeTotime(this.form2.openPosition_time)
          this.listLoading = true
          this.list.splice(index, 1, Object.assign({}, this.form2))
          window.console.log('list', this.list);

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

  }
}
</script>
<style>
#adv {
  height: 100%;
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


