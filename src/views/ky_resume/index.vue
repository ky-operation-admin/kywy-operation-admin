<template>
  <div class="app-container resume">
    <div class="filter-container" style="text-align:left;padding:20px">
      <el-input v-model="listQuery.title" placeholder="岗位/经验/人才搜索" style="width: 200px;" class="filter-item" @keyup.enter.native="handleFilter" />
      <el-select v-model="listQuery.sort" placeholder="已收到的简历" style="width: 190px;margin:0 20px;" class="filter-item" @change="handleFilter">
        <el-option v-for="item in importanceOptions" :key="item.key" :label="item.label" :value="item.key" />
      </el-select>
      <el-button class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">
        搜索
      </el-button>
      <el-button class="filter-item" type="primary" icon="el-icon-search" style="float:right" @click="goto1List">
        查看公司职位列表
      </el-button>
      <el-button class="filter-item" type="primary" icon="el-icon-search" style="float:right" @click="gotoList">
        查看公司在招职位
      </el-button>
    </div>
    <el-table :key="tableKey" v-loading="listLoading" :data="list" border fit  style="width: 100%;">
      <!-- <el-table-column label="编号" prop="id" align="center" width="120">
        <template slot-scope="scope">
          <span>{{ scope.row.id }}</span>
        </template>
      </el-table-column> -->
      <el-table-column label="姓名" width="150px" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.name }}</span>
        </template>
      </el-table-column>
      <el-table-column label="应聘职位" width="150px" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.targer_positon}}</span>
        </template>
      </el-table-column>
      <el-table-column label="年龄" width="150px" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.age }}</span>
        </template>
      </el-table-column>
      <el-table-column label="性别" width="150px" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.sex }}</span>
        </template>
      </el-table-column>
      <el-table-column label="学历" width="220px" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.eb }}</span>
        </template>
      </el-table-column>
      <el-table-column label="工作经验" width="220px" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.experience }}</span>
        </template>
      </el-table-column>
      <el-table-column label="投递时间" width="290px" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.time }}</span>
        </template>
      </el-table-column>
      <el-table-column label="阅读简历" align="center">
        <template slot-scope="{row}">
          <el-button type="primary" size="mini" @click="readResume(row)">
            <i :class='row.icon'></i>
          </el-button>
          <el-dialog title="简历查看" :visible.sync="dialogVisible" width="500px" :before-close="handleClose">
            <!-- <span>这是一段信息</span> -->
            <h3 style="margin-bottom:20px;color:#196">{{form.name}}个人简历</h3>
            <div class="resumeContent" style="padding:5px 120px;text-align:left;font-size:14px;font-weight:600">
              <p>姓名：{{form.name}}</p>
              <p>性别：{{form.sex}}</p>
              <p>年龄：{{form.age}}</p>
              <p>学历：{{form.eb}}</p>
              <p>个人技能：<span>xxxxxxxxxxxxxxxxxxxxxxxxx</span></p>
              <p>工作经验：xxxxxxxxxxxxxxxxxxxxxxxxxx</p>
              <p>工作经验：xxxxxxxxxxxxxxxxxxxxxxxx</p>
            </div>

            <span slot="footer" class="dialog-footer">
              <el-button type="primary" @click="isOk()">确定</el-button>
            </span>
          </el-dialog>
        </template>
      </el-table-column>
      <el-table-column label="面试邀约" align="center">
        <template slot-scope="{row}">
          <el-button v-if='!row.ifInvite' type="primary" size="mini" @click="invite(row)">
            邀约
          </el-button>
          <el-button v-else plain disabled size="mini">
            已邀约
          </el-button>
          <el-dialog title="面试邀请" :visible.sync="dialog2Visible" width="500px" :before-close="handle2Close">
            <!-- <span>这是一段信息</span> -->
            <!-- <h2 style="margin-bottom:20px;color:#196">面试邀请</h2> -->
            <div class="resumeContent" style="padding:5px 30px;text-align:left;font-size:14px;font-weight:600">
              <h4><span style="color:#000;font-size:18px;margin-right:10px;">{{form2.name}}</span>先生/女士您好：</h4>
              <div style="padding-left:30px">
                <p>我公司人力资源部通过{{listQuery.sort}}收到您的简历，感谢您对我公司的信任和选择。</p>
                <p>经过人力资源部初步筛选，我们认为您基本具备
                  <input type="text" style="border:none;border-bottom:1px solid #ccc;text-align:center;width:150px;font-size:18px;color:#58bc58" placeholder="请输入职位">
                  岗位的任职资格，因此正式 通知您来我公司参加面试。</p>
                <p>具体要求详见如下。</p>
                <p>一、面试时间：<el-date-picker v-model="value1" type="datetime" placeholder="选择日期时间">
                  </el-date-picker>
                </p>
                <p>二、面试地点：**区 88 号****写字楼 B3 区 9 层 人力资源部</p>
                <p>三、路线： 1.自驾车路线：略 2.公交车路线：888 路、666 路、999 路到***站下车</p>
                <p>四、携带资料 1.携带个人简历、身份证、学历证书等相关证书及复印件 2.个人一寸免冠、近期、彩色照片 1 张</p>
                <p>五、联系方式 1.联系人：人力资源部，黄小姐 2.联系电话：020-888888883.如有其他不明事宜请与我们联系</p>
              </div>
            </div>
            <div>
              <span slot="footer" class="dialog-footer" style="margin-right:30px">
                <el-button @click="isCancel()">取消</el-button>
              </span>
              <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="isConfirm()">确定</el-button>
              </span>
            </div>

          </el-dialog>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { deepClone } from '@/utils'
// import { fetchList, fetchPv, createArticle, updateArticle } from '../api/article'
// import { log } from 'util'
// import waves from '../directive/waves' // waves directive
// import { parseTime } from '../utils'
// import Pagination from '../components/Pagination' 
let tableData = {
  kyrc:
    [
      {
        id: '1',
        name: '李四1',
        experience: '四年工作经验',
        age: 30,
        sex: '男',
        eb: '研究生',
        time: '已存在于康养无忧档案库',
        reading: '阅读',
        ifInvite: false,
        icon: 'el-icon-view'
      },
      {
        id: '2',
        name: '李四2',
        experience: '四年工作经验',
        age: 30,
        sex: '男',
        eb: '研究生',
        time: '已存在于康养无忧档案库',
        reading: '阅读',
        ifInvite: false,
        icon: 'el-icon-view'
      },
      {
        id: '3',
        name: '李四3',
        experience: '四年工作经验',
        age: 30,
        sex: '男',
        eb: '研究生',
        time: '已存在于康养无忧档案库',
        reading: '阅读',
        ifInvite: false,
        icon: 'el-icon-view'
      },
      {
        id: '4',
        name: '李四4',
        experience: '四年工作经验',
        age: 30,
        sex: '男',
        eb: '研究生',
        time: '已存在于康养无忧档案库',
        reading: '阅读',
        ifInvite: false,
        icon: 'el-icon-view'
      },
      {
        id: '5',
        name: '李四5',
        experience: '四年工作经验',
        age: 30,
        sex: '男',
        eb: '研究生',
        time: '已存在于康养无忧档案库',
        reading: '阅读',
        ifInvite: false,
        icon: 'el-icon-view'
      },
      {
        id: '6',
        name: '李四6',
        experience: '四年工作经验',
        age: 30,
        sex: '男',
        eb: '研究生',
        time: '已存在于康养无忧档案库',
        reading: '阅读',
        ifInvite: false,
        icon: 'el-icon-view'
      },
      {
        id: '7',
        name: '李四7',
        experience: '四年工作经验',
        age: 30,
        sex: '男',
        eb: '研究生',
        time: '已存在于康养无忧档案库',
        reading: '阅读',
        ifInvite: false,
        icon: 'el-icon-view'
      },
      {
        id: '8',
        name: '李四8',
        experience: '四年工作经验',
        age: 30,
        sex: '男',
        eb: '研究生',
        time: '已存在于康养无忧档案库',
        reading: '阅读',
        ifInvite: false,
        icon: 'el-icon-view'
      }
    ],
  kygjrc:
    [
      {
        id: '1',
        name: '王五1',
        experience: '五年工作经验',
        age: 35,
        sex: '男',
        eb: '博士生',
        time: '已存在于康养无忧档案库',
        reading: '阅读',
        ifInvite: false,
        icon: 'el-icon-view'
      },
      {
        id: '2',
        name: '王五2',
        experience: '五年工作经验',
        age: 35,
        sex: '男',
        eb: '博士生',
        time: '已存在于康养无忧档案库',
        reading: '阅读',
        ifInvite: false,
        icon: 'el-icon-view'
      },
      {
        id: '3',
        name: '王五3',
        experience: '五年工作经验',
        age: 35,
        sex: '男',
        eb: '博士生',
        time: '已存在于康养无忧档案库',
        reading: '阅读',
        ifInvite: false,
        icon: 'el-icon-view'
      },
      {
        id: '4',
        name: '王五4',
        experience: '五年工作经验',
        age: 35,
        sex: '男',
        eb: '博士生',
        time: '已存在于康养无忧档案库',
        reading: '阅读',
        ifInvite: false,
        icon: 'el-icon-view'
      },
      {
        id: '5',
        name: '王五5',
        experience: '五年工作经验',
        age: 35,
        sex: '男',
        eb: '博士生',
        time: '已存在于康养无忧档案库',
        reading: '阅读',
        ifInvite: false,
        icon: 'el-icon-view'
      },
      {
        id: '6',
        name: '王五6',
        experience: '五年工作经验',
        eb: '博士生',
        age: 35,
        sex: '男',
        time: '已存在于康养无忧档案库',
        reading: '阅读',
        ifInvite: false,
        icon: 'el-icon-view'
      },
      {
        id: '7',
        name: '王五7',
        experience: '五年工作经验',
        eb: '博士生',
        age: 35,
        sex: '男',
        time: '已存在于康养无忧档案库',
        reading: '阅读',
        ifInvite: false,
        icon: 'el-icon-view'
      },
      {
        id: '8',
        name: '王五8',
        experience: '五年工作经验',
        eb: '博士生',
        age: 35,
        sex: '男',
        time: '已存在于康养无忧档案库',
        reading: '阅读',
        ifInvite: false,
        icon: 'el-icon-view'
      }
    ],
  jlrc:
    [
      {
        id: '1',
        name: '张三1',
        targer_positon:'科研人员',
        experience: '三年工作经验',
        eb: '本科',
        age: 25,
        sex: '男',
        time: '2019-11-21 10:23',
        reading: '阅读',
        ifInvite: false,
        icon: 'el-icon-view'
      },
      {
        id: '2',
        name: '张三2',
        targer_positon:'科研人员',
        experience: '三年工作经验',
        eb: '本科',
        age: 25,
        sex: '男',
        time: '2019-11-21 11:23',
        reading: '阅读',
        ifInvite: false,
        icon: 'el-icon-view'
      },
      {
        id: '3',
        name: '张三3',
        targer_positon:'科研人员',
        experience: '三年工作经验',
        eb: '本科',
        age: 25,
        sex: '男',
        time: '2019-11-21 12:23',
        reading: '阅读',
        ifInvite: false,
        icon: 'el-icon-view'
      },
      {
        id: '4',
        name: '叶群4',
        targer_positon:'前端开发工程师',
        experience: '三年工作经验',
        eb: '本科',
        age: 25,
        sex: '女',
        time: '2019-11-21 13:23',
        reading: '阅读',
        ifInvite: false,
        icon: 'el-icon-view'
      },
      {
        id: '5',
        name: '张三5',
        targer_positon:'前端开发工程师',
        experience: '三年工作经验',
        eb: '本科',
        age: 25,
        sex: '男',
        time: '2019-11-21 14:23',
        reading: '阅读',
        ifInvite: false,
        icon: 'el-icon-view'
      },
      {
        id: '6',
        name: '张三6',
        targer_positon:'前端开发工程师',
        experience: '三年工作经验',
        eb: '本科',
        age: 25,
        sex: '男',
        time: '2019-11-21 15:23',
        reading: '阅读',
        ifInvite: false,
        icon: 'el-icon-view'
      },
      {
        id: '7',
        name: '张三7',
        targer_positon:'前端开发工程师',
        experience: '三年工作经验',
        eb: '本科',
        age: 25,
        sex: '男',
        time: '2019-11-21 16:23',
        reading: '阅读',
        ifInvite: false,
        icon: 'el-icon-view'
      },
      {
        id: '8',
        name: '张三8',
        targer_positon:'前端开发工程师',
        experience: '三年工作经验',
        eb: '本科',
        age: 25,
        sex: '男',
        time: '2019-11-21 17:23',
        reading: '阅读',
        ifInvite: false,
        icon: 'el-icon-view'
      }
    ]
}
export default {
  data () {
    return {
      value1: '',
      tableKey: 0,
      list: null,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 20,
        importance: undefined,
        title: undefined,
        type: undefined,
        sort: 'jlrc'
      },
      //   搜索下拉菜单
      importanceOptions: [{ label: '收到的简历', key: 'jlrc' }, { label: '康养无忧人才库', key: 'kyrc' }, { label: '康养无忧高级人才', key: 'kygjrc' }],
      dialogVisible: false,
      dialog2Visible: false,
      keyword: '',
      form: {
        id: '',
        name: '',
        experience: '',
        age: '',
        sex: '',
        eb: '',
        time: '',
        reading: '',
        invite: '',
        icon: ''
      },
      form2: {
        id: '',
        name: '',
        experience: '',
        age: '',
        sex: '',
        eb: '',
        time: '',
        reading: '',
        invite: '',
        icon: ''
      },
      dialogImageUrl: ''
    }
  },
  created () {
    this.getList()

  },
  components: {

  },
  methods: {
    //   获取数据
    getList () {
      var temp = this.listQuery.sort || 'jlrc'
      this.listLoading = true
      this.list = tableData[temp]
      window.console.log('list', this.list, tableData[temp]);
      // 模拟请求事件
      setTimeout(() => {
        this.listLoading = false
      }, 1.5 * 1000)
    },
    // async getList () {

    //   let { data } = await this.$getResumes({
    //     params: {}
    //   });
    //   window.console.log('list', data.list);
    //   this.list = data.list
    // },
    // 点击/切换事件
    handleFilter () {
      this.getList()
    },
    // 阅读简历按钮
    readResume (row) {
      this.dialogVisible = true
      this.form = deepClone(row)
      window.console.log('111', row);
    },
    handleClose (done) {
      done();
    },
    handle2Close (done) {
      done();
    },
    // 跳转到查看公司在招职位 

    gotoList () {
      this.$router.push('/cunsumer')
    },
    goto1List () {
      this.$router.push('/merchant')
    },
    // 阅读简历确定按钮，点击后改变当前字体图标
    isOk () {
      this.dialogVisible = false
      for (let index = 0; index < this.list.length; index++) {
        if (this.list[index].name === this.form.name) {
          window.console.log(this.list[index].name);
          this.list[index].icon = 'el-icon-check'
          break
        }
      }
    },
    // 邀请按钮
    invite (row) {
      this.dialog2Visible = true
      this.form2 = deepClone(row)
      //   window.console.log('111', row);
    },
    isCancel () {
      this.dialog2Visible = false;
    },
    // 确定邀请面试
    isConfirm () {
      window.console.log(this.list, this.form2);
      for (let index = 0; index < this.list.length; index++) {
        if (this.list[index].name === this.form2.name) {
          window.console.log(this.list[index].name);
          this.list[index].ifInvite = true;
          window.console.log('111', this.list[index]);

          break
        }
      }
      this.$message({
        message: '邀约成功',
        type: 'success'
      })
      this.dialog2Visible = false
    }
  }
}
</script>

<style  scoped>
/* .resume{
    padding: 20px;
} */
.resumeContent p,
.resumeContent h4 {
  margin-bottom: 20px;
}
</style>
