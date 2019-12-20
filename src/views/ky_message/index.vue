<template>
  <div id="message">
    <el-row style="padding:20px">
      <el-button type="primary" plain icon='el-icon-plus' @click="dialogVisible = true">推送</el-button>
      <el-dialog :visible.sync="dialogVisible" width="600px" :before-close="handleClose">
        <el-form ref="form" :model="form" :rules="rules" label-width="100px">
          <el-form-item label="消息标题" prop="title">
            <el-input v-model="form.title"></el-input>
          </el-form-item>
          <el-form-item label="消息内容" prop="content">
            <el-input type="textarea" v-model="form.content"></el-input>
          </el-form-item>
          <el-form-item label="消息发送人" prop="name">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="消息类型" prop="l_type">
            <el-radio-group v-model="form.l_type">
              <el-radio label="广告促销"></el-radio>
              <el-radio label="要是通知"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="消息接收人">
            <el-col :span="11">
              <el-select v-model="form.gongsi" placeholder="请选择">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-col>
            <el-col class="line" :span="2" style="height:40px"></el-col>
            <el-col :span="11">
              <el-select v-model="form.bumen" placeholder="请选择">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-col>
          </el-form-item>
          <el-form-item prop="jieshouren">
            <el-input v-model="form.jieshouren" placeholder="请输入消息接收人"></el-input>
          </el-form-item>
          <el-form-item style="text-align:center">
            <el-button type="primary" @click="onSubmit('form')">推送</el-button>
          </el-form-item>
        </el-form>
      </el-dialog>
    </el-row>
    <el-table :data="tableData">
      <el-table-column prop="m_title" label="消息标题" width="260"></el-table-column>
      <el-table-column prop="m_canten" label="消息内容" width="340"></el-table-column>
      <el-table-column prop="m_type" label="消息类型" width="260"></el-table-column>
      <el-table-column prop="m_name" label="消息发送人" width="250"></el-table-column>
      <el-table-column prop="m_porpose" label="目的"></el-table-column>
      <el-table-column align="center" label="操作" width="220">
        <template slot-scope="scope">
          <el-button size="mini" type="primary" @click="editPush(scope.$index, scope.row)">推送</el-button>
          <el-dialog title="编辑" :visible.sync="dialog2Visible" width="600px" :before-close="handle2Close" :modal-append-to-body="false">
            <el-form ref="form" :model="form2" :rules="rules" label-width="100px">
              <el-form-item label="消息标题" prop="title">
                <el-input v-model="form2.m_title"></el-input>
              </el-form-item>
              <el-form-item label="消息内容" prop="content">
                <el-input type="textarea" v-model="form2.m_canten"></el-input>
              </el-form-item>
              <el-form-item label="消息发送人" prop="name">
                <el-input v-model="form2.m_name"></el-input>
              </el-form-item>
              <el-form-item label="消息类型" prop="l_type" style="text-align:left">
                <el-radio-group v-model="form2.m_type">
                  <el-radio label="广告促销"></el-radio>
                  <el-radio label="要是通知"></el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item prop="jieshouren" label="消息接收人">
                <el-input v-model="form2.m_jieshouren" placeholder="请输入消息接收人"></el-input>
              </el-form-item>
              <el-form-item style="text-align:center">
                <el-button type="primary" @click="on2Submit()">推送</el-button>
              </el-form-item>
            </el-form>
          </el-dialog>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { deepClone } from '../../utils'
const defaultForm = {
  title: '',
  name: '',
  content: '',
  l_type: '',
  gongsi: '',
  bumen: '',
  jiehsouren: ''
}
export default {
  data () {
    return {
      dialogVisible: false,
      dialog2Visible: false,
      keyword: '',
      form: {
        title: '',
        name: '',
        content: '',
        l_type: '',
        gongsi: '',
        bumen: '',
        jiehsouren: '',
        date1: '',
        date2: '',
        delivery: false,
      },
      rules: {
        title: [
          { required: true, message: '请输入消息标题', trigger: 'blur' },
          { min: 3, max: 100, message: '长度在 3 到 100个字符', trigger: 'blur' }
        ],
        content: [
          { required: true, message: '请输入消息内容', trigger: 'blur' }
        ],
        jieshouren: [
          { required: true, message: '请输入消息内容', trigger: 'blur' }
        ],
        l_type: [
          { required: true, message: '请选择消息类型', trigger: 'change' }
        ],
        name: [
          { required: true, message: '请填写消息发送人', trigger: 'blur' }
        ]
      },
      form2: Object.assign({}, defaultForm),
      dialogImageUrl: '',
      tableData: [
          
        {
          m_title: '免费领取保健品',
          m_canten: '2016-05-02日免费领取保健品免费领取保健品免费领取保健品25',
          m_type: '广告促销',
          m_name: '营销总监',
          m_porpose: '广告促销',
          m_jieshouren:'市场经理'
        }, {
          m_title: '紧急通知',
          m_canten: '2016-06-02日紧急通知紧急通知紧急通知紧急通知紧急通知紧急通知紧急通知111',
          m_type: '要是通知',
          m_name: '营销总监',
          m_porpose: '重要事情通知',
          m_jieshouren:'市场经理'
        }, {
          m_title: '免费领取保健品',
          m_canten: '2018-05-02日免费领取保健品免费领取保健品免费领取保健品5',
          m_type: '广告促销',
          m_name: '营销总监',
          m_porpose: '广告促销',
          m_jieshouren:'市场经理'
        }, {
          m_title: '免费领取保健品',
          m_canten: '2019-05-02日免费领取保健品免费领取保健品免费领取保健品231',
          m_type: '广告促销',
          m_name: '营销总监',
          m_porpose: '广告促销',
          m_jieshouren:'市场经理'
        }, {
          m_title: '双11全场5折',
          m_canten: '2020-11-11日免双11全场5折双11全场5折双11全场5折双11全场5折双11全场5折24',
          m_type: '广告促销',
          m_name: '营销总监',
          m_porpose: '广告促销',
          m_jieshouren:'市场经理'
        }, {
          m_title: '某某某商品强势上架',
          m_canten: '2021-05-02日某某某商品强势上架某某某商品强势上架某某某商品强势上架某某某商品强势上架211',
          m_type: '要是通知',
          m_name: '营销总监',
          m_porpose: '重要事情通知',
          m_jieshouren:'市场经理'
        }]
    }
  },
  components: {

  },
  methods: {

    handleClose (done) {
      done();
    },
    // 编辑推送
    handle2Close (done) {
      done();
    },
    // 删除
    async handleDelete (index, row) {
      this.$confirm("是否确定要删除" + row.m_canten + ", 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(async () => {
        this.tableData.splice(index, 1)
        this.$message({
          type: "success",
          message: "删除成功!"
        });
      });
    },
    // 表单重置
    resetForm (formName) {
      this.$refs[formName].resetFields();
    },
    //头部推送
    onSubmit (formName) {
      //   this.dialogVisible = false

      window.console.log('this.form', this.form.name, this.form);
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$message({
            message: '推送成功',
            type: 'success'
          });
          //   let formtList = this.form;
          let formtList = {
            m_title: this.form.title,
            m_canten: this.form.content,
            m_type: this.form.l_type,
            m_name: this.form.name,
            m_porpose: this.form.l_type
          };
          this.tableData.push(formtList)
          //   window.console.log('formtList', formtList);
          this.dialogVisible = false
          this.resetForm(formName)
        } else {
          window.console.log('error submit!!');
          return false;
        }
      });
    },
    // 点击编辑推送
    editPush (i, row) {
      // 出现弹窗
      this.dialog2Visible = true
      this.form2 =  deepClone(row)
        window.console.log('form2',this.form2,i);
    },
    // 编辑推送弹框推送
    on2Submit () {
      this.$message({
        message: '推送成功',
        type: 'success'
      });
     for (let index = 0; index < this.tableData.length; index++) {
          if (this.tableData[index].m_canten === this.form2.m_canten) {
              window.console.log(this.tableData[index].m_canten);
            this.tableData.splice(index, 1, Object.assign({}, this.form2))
            break
          }
        }
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
.el-row {
  text-align: left;
}
.el-dialog__footer {
  text-align: center !important;
}
</style>