<template>
  <div id="adv" class="app-container">
    <el-button type="primary" plain icon='el-icon-plus' @click="gotoPostJob" style="margin:20px;">发布职位</el-button>
    <el-dialog title="提示" :visible.sync="centerDialogVisible" width="30%" center>
      <el-form ref="form" :model="form" label-width="130px" label-position="left">
        <el-form-item label="职位名称" prop="positionName">
          <el-select v-model="form.positionid" placeholder="请选择">
            <el-option v-for="item in unpublishedPosition" :key="item.name" :label="item.name" :value="item.id"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="需求人数" prop="openpositionNumber">
          <el-input-number v-model="form.openpositionNumber" :min="1" :max="20" label="描述文字"></el-input-number>
        </el-form-item>
        <el-form-item label="职位有效期" prop="positionValidity">
          <el-select v-model="form.positionValidity" placeholder="请选择">
            <el-option label="一个月" value="一个月"></el-option>
            <el-option label="两个月" value="两个月"></el-option>
            <el-option label="三个月" value="三个月"></el-option>
            <el-option label="半年" value="半年"></el-option>
            <el-option label="一年" value="一年"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="最低薪资" prop="salaryTo">
          <el-select v-model="form.salaryTo" placeholder="请选择">
            <el-option label=3000 value=3000></el-option>
            <el-option label=6000 value=6000></el-option>
            <el-option label=8000 value=8000></el-option>
            <el-option label=10000 value=10000></el-option>
            <el-option label=12000 value=12000></el-option>
            <el-option label=15000 value=15000></el-option>
            <el-option label=25000 value=25000></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="最高薪资" prop="salaryFrom">
          <el-select v-model="form.salaryFrom" placeholder="请选择">
            <el-option label=3000 value=3000></el-option>
            <el-option label=6000 value=6000></el-option>
            <el-option label=8000 value=8000></el-option>
            <el-option label=10000 value=10000></el-option>
            <el-option label=12000 value=12000></el-option>
            <el-option label=15000 value=15000></el-option>
            <el-option label=25000 value=25000></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="工作地点" prop="workAddress">
          <el-select v-model="form.workAddress" placeholder="请选择">
            <el-option label="广州" value="广州"></el-option>
            <el-option label="深圳" value="深圳"></el-option>
            <el-option label="北京" value="北京"></el-option>
            <el-option label="上海" value="上海"></el-option>
            <el-option label="武汉" value="武汉"></el-option>
            <el-option label="长沙" value="长沙"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="addItem()">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 接口数据 -->
    <el-table :data="list" border fit>
      <el-table-column prop="jPosition.positionName" label="职位名称" align="center"></el-table-column>

      <el-table-column prop="positionIndustry" label="所属行业" align="center"></el-table-column>
      <el-table-column prop="accountid" label="发布人" align="center">
        <template slot-scope="scope">
          <div v-if="scope.row.accountid">
            {{getUserName}}
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="openpositionTime" label="发布时间" align="center"></el-table-column>
      <el-table-column prop="openpositionNumber" label="职位开放数目" align="center"></el-table-column>
      <el-table-column prop="positionValidity" label="职位有效期" align="center"></el-table-column>
      <el-table-column prop="salary" label="职位薪资" align="center">
        <el-table-column prop="salaryTo" label="薪资最小值" align="center"></el-table-column>
        <el-table-column prop="salaryFrom" label="薪资最大值" align="center"></el-table-column>
      </el-table-column>
      <el-table-column prop="workAddress" label="工作地点" align="center"></el-table-column>
      <el-table-column align="center" label="操作" width="200">
        <template slot-scope="scope">
          <el-button size="mini" type="primary" @click="edit(scope.$index,scope.row)">编辑</el-button>
          <el-dialog title="提示" :visible.sync="centerDialogVisible1" width="30%" center>
            <el-form ref="form" :model="form2" label-width="130px" label-position="left">
              <el-form-item label="职位名称" prop="positionName">
                <el-select v-model="form2.positionid" placeholder="请选择">
                  <el-option v-for="item in unpublishedPosition" :key="item.name" :label="item.name" :value="item.id"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="需求人数" prop="openpositionNumber">
                <el-input-number v-model="form2.openpositionNumber" :min="1" :max="20" label="描述文字"></el-input-number>
              </el-form-item>
              <el-form-item label="职位有效期" prop="positionValidity">
                <el-select v-model="form2.positionValidity" placeholder="请选择">
                  <el-option label="一个月" value="一个月"></el-option>
                  <el-option label="两个月" value="两个月"></el-option>
                  <el-option label="三个月" value="三个月"></el-option>
                  <el-option label="半年" value="半年"></el-option>
                  <el-option label="一年" value="一年"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="最低薪资" prop="salaryTo">
                <el-select v-model="form2.salaryTo" placeholder="请选择">
                  <el-option label=3000 value=3000></el-option>
                  <el-option label=6000 value=6000></el-option>
                  <el-option label=8000 value=8000></el-option>
                  <el-option label=10000 value=10000></el-option>
                  <el-option label=12000 value=12000></el-option>
                  <el-option label=15000 value=15000></el-option>
                  <el-option label=25000 value=25000></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="最高薪资" prop="salaryFrom">
                <el-select v-model="form2.salaryFrom" placeholder="请选择">
                  <el-option label=3000 value=3000></el-option>
                  <el-option label=6000 value=6000></el-option>
                  <el-option label=8000 value=8000></el-option>
                  <el-option label=10000 value=10000></el-option>
                  <el-option label=12000 value=12000></el-option>
                  <el-option label=15000 value=15000></el-option>
                  <el-option label=25000 value=25000></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="工作地点" prop="workAddress">
                <el-select v-model="form2.workAddress" placeholder="请选择">
                  <el-option label="广州" value="广州"></el-option>
                  <el-option label="深圳" value="深圳"></el-option>
                  <el-option label="北京" value="北京"></el-option>
                  <el-option label="上海" value="上海"></el-option>
                  <el-option label="武汉" value="武汉"></el-option>
                  <el-option label="长沙" value="长沙"></el-option>
                </el-select>
              </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
              <el-button @click="centerDialogVisible1 = false">取 消</el-button>
              <el-button type="primary" @click="handleEdit()">确 定</el-button>
            </span>
          </el-dialog>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)" style="margin-left: 10px">下架</el-button>
        </template>
      </el-table-column>
    </el-table>

  </div>
</template>

<script>
import { getName } from '@/utils/auth'


import { getIssued, rackingPosition, editAddedPosition, deleteAddedPosition, getUnpublished } from '@/api/job'
import axios from "axios"
export default {
  data () {
    return {
      list: null,  //数据list
      form: {  //新增职位
        positionid: null,
        openpositionNumber: null,
        positionValidity: '',
        workAddress: '',
        salaryFrom: null,
        salaryTo: null,
      },
      form2: {  //编辑职位
        positionid: null,
        openpositionNumber: null,
        positionValidity: '',
        workAddress: '',
        salaryFrom: null,
        salaryTo: null,
      },
      dialogImageUrl: '',
      centerDialogVisible: false,// 新增弹框
      centerDialogVisible1: false,// 编辑弹框
      unpublishedPosition: [],// 未发布的职位名称
    }
  },
  computed: {
    // 获取当前登录用户名，用来显示职位发布人
    getUserName () {
      return getName()
    }
  },
  created () {
    this.getList()
    this.getPositionName()
  },
  methods: {
    // 点击新增职位按钮
    gotoPostJob () {
      this.centerDialogVisible = true
      this.getPositionName()
    },

    // 表单重置
    resetForm (formName) {
      this.$refs[formName].resetFields();
    },

    //获取未发布的职位名称
    getPositionName () {
      getUnpublished()
        .then((res) => {
          console.log(res)
          this.unpublishedPosition = res

        }).catch((err) => {
          console.log(err)
        })

    },
    // ----------------------------获取已经发布的职位------------------------
    getList () {
      getIssued({
        status: 1
      }).then((res) => {
        console.log(res)
        this.list = res.data.list
      })
    },
    // ------------------------------增加-------------------------------
    addItem () {
      this.$refs['form'].validate((valid) => {
        if (valid) {
          // 表单发送网络请求
          let fd = new FormData();

          fd.append('positionid', this.form.positionid);  //发布的哪个职位
          fd.append('openpositionNumber', this.form.openpositionNumber); //开放职位的数目
          fd.append('positionValidity', this.form.positionValidity);  //职位有效期
          fd.append('workAddress', this.form.workAddress);  //工作地址
          fd.append('salaryTo', this.form.salaryTo);   //薪资下限
          fd.append('salaryFrom', this.form.salaryFrom);   //薪资上限
          fd.append('positionName ', this.form.salaryFrom);   //职位名称

          rackingPosition(fd)
            .then(res => {
              window.console.log('222', res)
              if (res.code == 0) {
                this.$message({
                  type: "warning",
                  message: "发布失败"
                });
                return;
              }
              if (res.code == 1) {
                this.$message({
                  type: "success",
                  message: "发布成功!"
                });
                this.getList();
                this.resetForm('form')
                this.centerDialogVisible = false
              }
            })
            .catch(err => {
              window.console.log('400', err);
            });
        } else {
          window.console.log('error submit!!');
          return false;
        }
      });
    },
    // ------------------------------删除------------------------------
    handleDelete (index, row) {
      this.$confirm("是否确定要删除" + row.jPosition.positionName + ", 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        deleteAddedPosition({
          positionId: row.positionid
        })
          .then((res) => {
            console.log(res)
            if (res.code == 1) {
              this.$message({
                type: "success",
                message: "删除成功!"
              });

              this.getList()
            }
          }).catch((err) => {
            console.log(err)
          })



      });
    },
    // -----------------------------编辑----------------------------
    edit (index, row) {
      this.centerDialogVisible1 = true;
      this.form2 = {
        ...row
      }
      window.console.log('form2', this.form2);

    },
    handleEdit () {
      this.centerDialogVisible1 = false;
      editAddedPosition(this.form2)
        .then((res) => {
          console.log(res)
          if (res.code == 1) {
            this.$message({
              message: "修改成功",
              type: "warning"
            })
            this.getList()
          }
        }).catch((err) => {
          console.log(err)
        })

    },

  }
}
</script>
<style scoped>
#adv {
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

