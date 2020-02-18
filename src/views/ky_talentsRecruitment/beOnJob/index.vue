<template>
  <div class="app-container">
    <el-row style="padding:20px">
      <el-button type="primary" plain icon="el-icon-plus" @click="dialogVisible = true">新增职位</el-button>
      <el-dialog top="3vh" :visible.sync="dialogVisible" width="600px" :before-close="handleClose">
        <el-form ref="form" :model="form" label-width="80px" label-position="right" class="add_post">
          <el-form-item label="职位名称" prop="positionName">
            <el-input v-model="form.positionName" style="width:80%"></el-input>
          </el-form-item>
          <el-form-item label="职位职能" prop="positionResponsibility">
            <el-input v-model="form.positionResponsibility" style="width:80%"></el-input>
          </el-form-item>
          <el-form-item label="年龄要求" prop="positonRequirementAge">
            <el-select v-model="form.positonRequirementAge" placeholder="请选择">
              <el-option label="18-22" value="18-22"></el-option>
              <el-option label="18-25" value="18-25"></el-option>
              <el-option label="22-35" value="22-35"></el-option>
              <el-option label="25-35" value="25-40"></el-option>
              <el-option label="35-45" value="35-45"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="性别要求" prop="positonRequirementSex">
            <el-radio-group v-model="form.positonRequirementSex">
              <el-radio label="男"></el-radio>
              <el-radio label="女"></el-radio>
              <el-radio label="无"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="经验要求" prop="positonRequirementExperience">
            <el-select v-model="form.positonRequirementExperience" placeholder="请选择">
              <el-option label="无" value="无"></el-option>
              <el-option label="2年以上" value="2年以上"></el-option>
              <el-option label="3-5年" value="3-5年"></el-option>
              <el-option label="5年以上" value="5年以上"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="学历要求" prop="positonRequirementEducation">
            <el-select v-model="form.positonRequirementEducation" placeholder="请选择">
              <el-option label="专科以上" value="专科以上"></el-option>
              <el-option label="本科以上" value="本科以上"></el-option>
              <el-option label="研究生以上" value="研究生以上"></el-option>
              <el-option label="博士以上" value="博士以上"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="联系电话" prop="contactPhone">
            <el-input v-model="form.contactPhone" style="width:80%"></el-input>
          </el-form-item>
          <el-form-item label="职位标签" prop="positionTag">
            <el-input v-model="form.positionTag" style="width:80%"></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="addItem()">提交</el-button>
        </span>
      </el-dialog>
    </el-row>
    <!-- 模拟数据 -->
    <el-table :data="list" border fit>
      <el-table-column prop="positionName" label="职位名称" width="260" align="center"></el-table-column>
      <el-table-column prop="positionResponsibility" label="职位职责" align="center"></el-table-column>
      <el-table-column label="岗位要求" align="center">
        <el-table-column prop="positonRequirementAge" label="年龄要求" align="center"></el-table-column>
        <el-table-column prop="positonRequirementSex" label="性别要求" align="center"></el-table-column>
        <el-table-column prop="positonRequirementExperience" label="经验要求" align="center"></el-table-column>
        <el-table-column prop="positonRequirementEducation" label="学历要求" align="center"></el-table-column>
      </el-table-column>
      <el-table-column prop="createPositionTime" label="添加时间" align="center"></el-table-column>
      <el-table-column prop="contactPhone" label="联系电话" align="center"></el-table-column>
      <el-table-column prop="positionTag" label="职位标签" align="center">
        <template slot-scope="scope">
          <el-tag type='success' disable-transitions>{{ scope.row.positionTag }}</el-tag>
        </template>
      </el-table-column>

      <el-table-column align="center" label="操作" width="200">
        <template slot-scope="scope">
          <el-button size="mini" type="primary" @click="edit(scope.row)">编辑</el-button>
          <el-dialog title="编辑" top="8vh" :visible.sync="dialog2Visible" width="600px" :before-close="handle2Close" :modal-append-to-body="false">
            <el-form ref="form2" :model="form2" label-width="80px" label-position="left">
              <el-form-item label="职位名称" prop="positionName">
                <el-input v-model="form2.positionName" style="width:80%"></el-input>
              </el-form-item>
              <el-form-item label="职位职能" prop="positionResponsibility">
                <el-input v-model="form2.positionResponsibility" style="width:80%"></el-input>
              </el-form-item>
              <el-form-item label="年龄要求" prop="positonRequirementAge">
                <el-select v-model="form2.positonRequirementAge" placeholder="请选择">
                  <el-option label="18-22" value="18-22"></el-option>
                  <el-option label="18-25" value="18-25"></el-option>
                  <el-option label="22-35" value="22-35"></el-option>
                  <el-option label="25-35" value="25-40"></el-option>
                  <el-option label="35-45" value="35-45"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="性别要求" prop="positonRequirementSex">
                <el-radio-group v-model="form2.positonRequirementSex">
                  <el-radio label="男"></el-radio>
                  <el-radio label="女"></el-radio>
                  <el-radio label="无"></el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="经验要求" prop="positonRequirementExperience">
                <el-select v-model="form2.positonRequirementExperience" placeholder="请选择">
                  <el-option label="无" value="无"></el-option>
                  <el-option label="2年以上" value="2年以上"></el-option>
                  <el-option label="3-5年" value="3-5年"></el-option>
                  <el-option label="5年以上" value="5年以上"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="学历要求" prop="positonRequirementEducation">
                <el-select v-model="form2.positonRequirementEducation" placeholder="请选择">
                  <el-option label="专科以上" value="专科以上"></el-option>
                  <el-option label="本科以上" value="本科以上"></el-option>
                  <el-option label="研究生以上" value="研究生以上"></el-option>
                  <el-option label="博士以上" value="博士以上"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="联系电话" prop="contactPhone">
                <el-input v-model="form2.contactPhone" style="width:80%"></el-input>
              </el-form-item>
              <el-form-item label="职位标签" prop="positionTag">
                <el-input v-model="form2.positionTag" style="width:80%"></el-input>
              </el-form-item>
            </el-form>
            <div>
              <span slot="footer" class="dialog-footer" style="margin-right:30px">
                <el-button @click="isCancel()">取消</el-button>
              </span>
              <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="handleEdit()">确定</el-button>
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

import { getPosition, postPosition, editPosition, deletePosition } from '@/api/job'
export default {
  data () {
    return {
      list: [],
      dialogVisible: false,
      dialog2Visible: false,
      form: {
        // positionName: '',
        // positionResponsibility: '',
        // positonRequirements: '',
        // positonRequirementExperience: '',
        // positonRequirementEducation: '',
        // positonRequirementAge: '',
        // positonRequirementSex: '',
        // createPositionTime: '',
        // contactPhone: '',
        // positionTag: ''
      },
      form2: {
        // positionName: '',
        // positionResponsibility: '',
        // positonRequirements: '',
        // positonRequirementExperience: '',
        // positonRequirementEducation: '',
        // positonRequirementAge: '',
        // positonRequirementSex: '',
        // createPositionTime: '',
        // contactPhone: '',
        // positionTag: ''
      },
      dialogImageUrl: '',
      positionid: ""
    }
  },
  created () {
    this.getList()
  },
  methods: {
    // -------------------------------获取---------------------------------
    getList () {
      getPosition()
        .then(res => {
          console.log(res)

          this.list = res.list
        })
        .catch(err => {
          console.log(err)
        })
    },
    // 表单重置
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    // ------------------------------------增加-------------------------------------
    addItem () {
      this.$refs['form'].validate(valid => {
        if (valid) {

          let formData = new FormData()
          formData.append('positionName', this.form.positionName)
          formData.append('positionResponsibility', this.form.positionResponsibility)
          formData.append('positonRequirements', this.form.positonRequirements)
          formData.append('positonRequirementExperience', this.form.positonRequirementExperience)
          formData.append('positonRequirementEducation', this.form.positonRequirementEducation)
          formData.append('positonRequirementAge', this.form.positonRequirementAge)
          formData.append('positonRequirementSex', this.form.positonRequirementSex)
          formData.append('contactPhone', this.form.contactPhone)
          formData.append('positionTag', this.form.positionTag)

          postPosition(formData)
            .then((res) => {
              console.log(res)
              if (res.code == 1) {
                this.$message({
                  message: '发布成功',
                  type: 'success'
                })
                this.getList()
              }

            }).catch((err) => {
              console.log(err)
            })

          //   表单重置
          this.resetForm('form')
          this.dialogVisible = false


        } else {
          window.console.log('error submit!!')
          return false
        }
      })
    },
    // --------------------------------------删除---------------------------------
    handleDelete (index, row) {
      this.$confirm(
        '是否确定要删除' + row.positionName + ', 是否继续?',
        '提示',
        {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }
      ).then(() => {
        deletePosition(row.positionid)
          .then((res) => {
            console.log(res)
            if (res.code == 1) {
              this.$message({
                type: 'success',
                message: '删除成功!'
              })
              this.getList()
            }

          }).catch((err) => {
            console.log(err)
          })

      })
    },
    // --------------------------------编辑----------------------------
    // 点击编辑按钮
    edit (row) {
      this.dialog2Visible = true
      this.form2 = {
        ...row
      }
      window.console.log('form2', this.form2)
      this.positionid = row.positionid
    },
    // 确定编辑
    handleEdit () {
      this.dialog2Visible = false
      // let formData = new FormData()
      // formData.append('positionName', this.form2.positionName)
      // formData.append('positionResponsibility', this.form2.positionResponsibility)
      // formData.append('positonRequirements', this.form2.positonRequirements)
      // formData.append('positonRequirementExperience', this.form2.positonRequirementExperience)
      // formData.append('positonRequirementEducation', this.form2.positonRequirementEducation)
      // formData.append('positonRequirementAge', this.form2.positonRequirementAge)
      // formData.append('positonRequirementSex', this.form2.positonRequirementSex)
      // formData.append('contactPhone', this.form2.contactPhone)
      // formData.append('positionTag', this.form2.positionTag)


      editPosition(this.form2)
        .then((res) => {
          console.log(res)
          this.$message({
            message: "编辑成功",
            type: "success"
          })
          this.getList()
        }).catch((err) => {
          console.log(err)
        })

    },
    handleClose (done) {
      done()
    },
    handle2Close (done) {
      done()
    },
    isCancel () {
      this.dialog2Visible = false
    }
  }
}
</script>
<style scoped>
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
