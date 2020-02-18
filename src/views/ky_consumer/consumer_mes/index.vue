<template>
  <div id="message">
    <div class="title" style="text-align:left;padding:20px">
      <el-input v-model="keyword" placeholder="请输入消息标题/消息内容/消息发送人" style="width: 300px;margin-right:-10px;" clearable class="filter-item" @keyup.enter.native="handleFilter" />
      <el-button class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">
        查询
      </el-button>
    </div>
    <el-table :data="tableData" border>
      <el-table-column prop="m_name" label="消息发送人"  align="center"></el-table-column>
      <el-table-column prop="m_title" label="消息标题" align="center"></el-table-column>
      <el-table-column prop="m_canten" label="消息内容"  align="center"></el-table-column>
      <el-table-column prop="m_type" label="消息类型"  align="center"></el-table-column>
      <el-table-column prop="m_porpose" label="目的" align="center"></el-table-column>
      <el-table-column align="center" label="操作" >
        <template slot-scope="scope">
          <el-button size="mini" type="primary" @click="editPush(scope.$index, scope.row)">查看</el-button>
          <el-dialog title="消息详情" :visible.sync="dialog2Visible" width="600px" :before-close="handle2Close" :modal-append-to-body="false">
            <el-form ref="form" :model="form2" label-width="100px">
              <el-form-item label="消息标题" prop="title">
                <el-input v-model="form2.m_title" :disabled="true"></el-input>
              </el-form-item>
              <el-form-item label="消息内容" prop="content">
                <el-input type="textarea" v-model="form2.m_canten" :disabled="true"></el-input>
              </el-form-item>
              <el-form-item label="消息发送人" prop="name">
                <el-input v-model="form2.m_name" :disabled="true"></el-input>
              </el-form-item>
              <el-form-item label="消息类型" prop="l_type" style="text-align:left">
                <el-radio-group v-model="form2.m_type" :disabled="true">
                  <el-radio label="广告促销"></el-radio>
                  <el-radio label="要是通知"></el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item prop="m_porpose" label="目的">
                <el-input v-model="form2.m_porpose" placeholder="请输入消息接收人" :disabled="true"></el-input>
              </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
              <el-button type="primary" @click="on2Submit()">确定</el-button>
            </span>
          </el-dialog>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { deepClone } from '@/utils'
const defaultForm = {
  title: '',
  name: '',
  content: '',
  l_type: '',
  gongsi: '',
  bumen: '',
  jiehsouren: '',
  m_porpose: '',
}
const tableData = [
  {
    m_title: '免费领取保健品',
    m_canten: '2016-05-02日免费领取保健品免费领取保健品免费领取保健品25',
    m_type: '广告促销',
    m_name: '张三',
    m_porpose: '广告促销',
    m_jieshouren: '市场经理'
  }, {
    m_title: '紧急通知',
    m_canten: '2016-06-02日紧急通知紧急通知紧急通知紧急通知紧急通知紧急通知紧急通知111',
    m_type: '要是通知',
    m_name: '李四',
    m_porpose: '重要事情通知',
    m_jieshouren: '市场经理'
  }, {
    m_title: '免费领取保健品',
    m_canten: '2018-05-02日免费领取保健品免费领取保健品免费领取保健品5',
    m_type: '广告促销',
    m_name: '王五',
    m_porpose: '广告促销',
    m_jieshouren: '市场经理'
  }, {
    m_title: '免费领取保健品',
    m_canten: '2019-05-02日免费领取保健品免费领取保健品免费领取保健品231',
    m_type: '广告促销',
    m_name: '赵柳',
    m_porpose: '广告促销',
    m_jieshouren: '市场经理'
  }, {
    m_title: '双11全场5折',
    m_canten: '2020-11-11日免双11全场5折双11全场5折双11全场5折双11全场5折双11全场5折24',
    m_type: '广告促销',
    m_name: '李夸父',
    m_porpose: '广告促销',
    m_jieshouren: '市场经理'
  }, {
    m_title: '某某某商品强势上架',
    m_canten: '2021-05-02日某某某商品强势上架某某某商品强势上架某某某商品强势上架某某某商品强势上架211',
    m_type: '要是通知',
    m_name: '刘秀来',
    m_porpose: '重要事情通知',
    m_jieshouren: '市场经理'
  }]
export default {
  data () {
    return {
      dialogVisible: false,
      dialog2Visible: false,
      keyword: '',
      form2: Object.assign({}, defaultForm),
      dialogImageUrl: '',
      tableData:[]
    }
  },
  components: {

  },
  created () {
    this.init()
  },
  methods: {
    handleClose (done) {
      done();
    },
    // 数据初始化
    init () {
      let tempData1 = tableData.filter(item => {
        return item.m_canten.includes(this.keyword)
      })
      let tempData2 = tableData.filter(item => {
        return item.m_title.includes(this.keyword)
      })
      let tempData3 = tableData.filter(item => {
        return item.m_name.includes(this.keyword)
      })
      let tempArray = [...tempData1, ...tempData2, ...tempData3];
      var obj = {};
      tempArray = tempArray.reduce(function (item, next) {
        obj[next.m_name] ? '' : obj[next.m_name] = true && item.push(next);
        return item;
      }, []);
      this.tableData = tempArray
    },
    // 搜索
    handleFilter () {
        console.log(666);
      this.init()
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
    // 点击编辑推送
    editPush (i, row) {
      // 出现弹窗
      this.dialog2Visible = true
      this.form2 = deepClone(row)
    },
    // 编辑推送弹框推送
    on2Submit () {
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