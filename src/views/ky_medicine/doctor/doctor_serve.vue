<template>
  <div id="hotel" class="app-container">
    <div class="title" style="text-align:left;padding:20px">
      <el-input v-model="listQuery.keyword" @keyup.enter.native="handleFilter" placeholder="请输入医生名称" style="width: 300px" clearable class="filter-item" />
      <el-select v-model="listQuery.state" placeholder="状态" clearable style="width: 90px" class="filter-item" @change="handleFilterstate">
        <el-option v-for="item in stateOptions" :key="item.key" :label="item.value" :value="item.key" />
      </el-select>
      <el-button class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">
        查询
      </el-button>
    </div>
    <el-tabs v-model="activeName">
      <el-tab-pane label="全部" name="first" class="onsale">
        <el-table :data="onsaleData" v-loading="listLoading" border height="550">
          <el-table-column prop="phone" label="医生编号" align="center"></el-table-column>
          <el-table-column prop="res_name" label="医生真实姓名" width="280" align='center'></el-table-column>
          <el-table-column prop="id" align="center" label="身份证号码">
            <template slot-scope="scope">
              <img v-image-preview class="busLicen" :src="scope.row.id" alt style="height:3rem;" />
            </template>
          </el-table-column>
          <el-table-column prop="busLicen" align="center" label="工牌照片">
            <template slot-scope="scope">
              <img v-image-preview class="busLicen" :src="scope.row.busLicen" alt style="height:6rem;" />
            </template>
          </el-table-column>
          <el-table-column prop="phone" align="center" label="联系电话"></el-table-column>
          <el-table-column align="center" label="查看详情">
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
            </template>
          </el-table-column>
          <el-table-column prop="org_stateText" align="center" label="审核结果">
            <template slot-scope="scope">
              <div class="payShow">
                <a v-if="scope.row.org_state==1" class="pass">
                  <span>认证已通过</span>
                </a>
                <a v-else-if="scope.row.org_state==2" class="notPass">
                  <span>认证未通过</span>
                </a>
                <a v-else-if="scope.row.org_state==3" class="notPass">
                  <span>已忽略</span>
                </a>
                <a v-else-if="scope.row.org_state==4" class="blacklist">
                  <span>黑名单</span>
                </a>
                <a v-else>
                  <span>未认证</span>
                </a>
              </div>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="待审核" name="second" class="havebought">
        <!-- <span slot="label">
            //消息提醒数量
          <span>待审核</span>
          <el-badge v-if="onsaleData0length" :value="onsaleData0length" size="mini" class="item"></el-badge>
        </span> -->
        <el-table :data="onsaleData0" border v-loading="listLoading">
          <el-table-column prop="phone" label="医生编号" align="center"></el-table-column>
          <el-table-column prop="res_name" label="医生真实姓名" width="280" align='center'></el-table-column>
          <!-- <el-table-column prop="xinyong" label="医生详情" align='center'></el-table-column> -->
          <!-- <el-table-column prop="pingji" label="入驻信息表" align='center'></el-table-column> -->
          <el-table-column prop="id" align="center" label="身份证号码">
            <template slot-scope="scope">
              <img v-image-preview class="busLicen" :src="scope.row.id" alt style="height:3rem;" />
            </template>
          </el-table-column>
          <el-table-column prop="busLicen" align="center" label="工牌照片">
            <template slot-scope="scope">
              <img v-image-preview class="busLicen" :src="scope.row.busLicen" alt style="height:6rem;" />
            </template>
          </el-table-column>
          <el-table-column prop="phone" align="center" label="联系电话"></el-table-column>
          <!-- <el-table-column prop="org_add" align="center" label="入驻所在地"></el-table-column> -->
          <el-table-column prop="org_stateText" align="center" label="审核结果" width="250">
            <template slot-scope="scope">
              <el-button type="success" @click="pass(scope.$index)" size="mini">通过</el-button>
              <el-button type="warning" @click="steppass(scope.row)" size="mini">不通过</el-button>
              <el-dialog title="审核未通过" :visible.sync="dialogVisible" width="50%" :before-close="handleClose" :modal-append-to-body="false">
                <el-form ref="form" :model="form" label-width="120px">
                  <el-form-item label="未通过理由">
                    <el-input v-model="form.content"></el-input>
                  </el-form-item>
                  <el-form-item label="上传截图">
                    <el-upload action="https://jsonplaceholder.typicode.com/posts/" list-type="picture-card" :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
                      <i class="el-icon-plus"></i>
                    </el-upload>
                  </el-form-item>
                </el-form>
                <span slot="footer" class="dialog-footer">
                  <el-button type="primary" @click="nopass()">提交</el-button>
                </span>
              </el-dialog>
            </template>
          </el-table-column>
          <el-table-column align="center" label="操作" width="200">
            <template slot-scope="scope">
              <el-button size="mini" type="primary" @click="ignore(scope.$index)">忽略</el-button>
              <el-button size="mini" type="danger" @click="blacklist(scope.$index,scope.row)">拉黑</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="已通过" name="thirdly" class="havebought">
        <el-table :data="onsaleData1" border>
          <el-table-column prop="phone" label="医生编号" align="center"></el-table-column>
          <el-table-column prop="res_name" label="医生真实姓名" width="280" align='center'></el-table-column>
          <!-- <el-table-column prop="xinyong" label="医生详情" align='center'></el-table-column> -->
          <!-- <el-table-column prop="pingji" label="入驻信息表" align='center'></el-table-column> -->
          <el-table-column prop="id" align="center" label="身份证号码">
            <template slot-scope="scope">
              <img v-image-preview class="busLicen" :src="scope.row.id" alt style="height:3rem;" />
            </template>
          </el-table-column>
          <el-table-column prop="busLicen" align="center" label="工牌照片">
            <template slot-scope="scope">
              <img v-image-preview class="busLicen" :src="scope.row.busLicen" alt style="height:6rem;" />
            </template>
          </el-table-column>
          <el-table-column prop="phone" align="center" label="联系电话"></el-table-column>
          <!-- <el-table-column prop="org_add" align="center" label="入驻所在地"></el-table-column> -->
          <el-table-column prop="org_stateText" align="center" label="审核结果">
            <template>
              <div class="payShow">
                <a class="pass">
                  <span>已通过</span>
                </a>
              </div>
            </template>
          </el-table-column>
          <el-table-column align="center" label="操作" width="200">
            <template>
              <a href="#" class="underline">查看详情</a>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="未通过" name="fourthly" class="havebought">
        <el-table :data="onsaleData2" border>
          <el-table-column prop="phone" label="医生编号" align="center"></el-table-column>
          <el-table-column prop="res_name" label="医生真实姓名" width="280" align='center'></el-table-column>
          <!-- <el-table-column prop="xinyong" label="医生详情" align='center'></el-table-column> -->
          <!-- <el-table-column prop="pingji" label="入驻信息表" align='center'></el-table-column> -->
          <el-table-column prop="id" align="center" label="身份证号码">
            <template slot-scope="scope">
              <img v-image-preview class="busLicen" :src="scope.row.id" alt style="height:3rem;" />
            </template>
          </el-table-column>
          <el-table-column prop="busLicen" align="center" label="工牌照片">
            <template slot-scope="scope">
              <img v-image-preview class="busLicen" :src="scope.row.busLicen" alt style="height:6rem;" />
            </template>
          </el-table-column>
          <el-table-column prop="phone" align="center" label="联系电话"></el-table-column>
          <!-- <el-table-column prop="org_add" align="center" label="入驻所在地"></el-table-column> -->
          <el-table-column prop="org_stateText" align="center" label="审核结果">
            <template slot-scope="scope">
              <div class="payShow">
                <a v-if="scope.row.org_state==1" class="pass">
                  <span>已通过</span>
                </a>
                <a class="notPass" v-else>
                  <span>未通过</span>
                </a>
              </div>
            </template>
          </el-table-column>
          <el-table-column align="center" label="操作" width="200">
            <template>
              <a href="#" class="underline">查看详情</a>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="已忽略" name="fifth" class="havebought">
        <el-table :data="onsaleData3" border>
          <el-table-column prop="phone" label="医生编号" align="center"></el-table-column>
          <el-table-column prop="res_name" label="医生真实姓名" width="280" align='center'></el-table-column>
          <!-- <el-table-column prop="xinyong" label="医生详情" align='center'></el-table-column> -->
          <!-- <el-table-column prop="pingji" label="入驻信息表" align='center'></el-table-column> -->
          <el-table-column prop="id" align="center" label="身份证号码">
            <template slot-scope="scope">
              <img v-image-preview class="busLicen" :src="scope.row.id" alt style="height:3rem;" />
            </template>
          </el-table-column>
          <el-table-column prop="busLicen" align="center" label="工牌照片">
            <template slot-scope="scope">
              <img v-image-preview class="busLicen" :src="scope.row.busLicen" alt style="height:6rem;" />
            </template>
          </el-table-column>
          <el-table-column prop="phone" align="center" label="联系电话"></el-table-column>
          <!-- <el-table-column prop="org_add" align="center" label="入驻所在地"></el-table-column> -->
          <el-table-column prop="org_stateText" align="center" label="审核结果">
            <template>
              <div class="payShow">
                <a class="notPass">
                  <span>已忽略</span>
                </a>
              </div>
            </template>
          </el-table-column>
          <el-table-column align="center" label="操作" width="200">
            <template>
              <a href="#" class="underline">查看详情</a>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="黑名单" name="sixth" class="havebought">
        <el-table :data="onsaleData4" border>
          <el-table-column prop="phone" label="医生编号" align="center"></el-table-column>
          <el-table-column prop="res_name" label="医生真实姓名" width="280" align='center'></el-table-column>
          <!-- <el-table-column prop="xinyong" label="医生详情" align='center'></el-table-column> -->
          <!-- <el-table-column prop="pingji" label="入驻信息表" align='center'></el-table-column> -->
          <el-table-column prop="id" align="center" label="身份证号码">
            <template slot-scope="scope">
              <img v-image-preview class="busLicen" :src="scope.row.id" alt style="height:3rem;" />
            </template>
          </el-table-column>
          <el-table-column prop="busLicen" align="center" label="工牌照片">
            <template slot-scope="scope">
              <img v-image-preview class="busLicen" :src="scope.row.busLicen" alt style="height:6rem;" />
            </template>
          </el-table-column>
          <el-table-column prop="phone" align="center" label="联系电话"></el-table-column>
          <!-- <el-table-column prop="org_add" align="center" label="入驻所在地"></el-table-column> -->
          <el-table-column prop="org_stateText" align="center" label="审核结果">
            <template>
              <div class="payShow">
                <a class="notPass">
                  <span>黑名单</span>
                </a>
              </div>
            </template>
          </el-table-column>
          <el-table-column align="center" label="操作" width="200">
            <template>
              <a href="#" class="underline">查看详情</a>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import Viewer from "@/assets/js/viewer.min.js";
import '@/assets/css/viewer.min.css';
import data from '@/assets/js/mock'
import { deepClone } from '@/utils'
const defaultForm = {
  org_id: '',
  content: '',
  img: ''
}
const regionOptions = [
  { key: 'all', display_name: '全部' },
  { key: 'gz', display_name: '广州' },
  { key: 'sz', display_name: '深圳' },
]
const calendarTypeKeyValue = regionOptions.reduce((acc, cur) => {
  acc[cur.key] = cur.display_name
  return acc
}, {})
export default {
  data () {
    return {
      dialogVisible: false,
      stateOptions: [
        { value: '全部', key: 'first' },
        { value: '待审核', key: 'second' },
        { value: '已通过', key: 'thirdly' },
        { value: '未通过', key: 'fourthly' },
        { value: '已忽略', key: 'fifth' },
        { value: '黑名单', key: 'sixth' }
      ],
      regionOptions,
      form: {
        org_id: '',
        content: '',
        img: ''
      },
      form2: Object.assign({}, defaultForm),
      listQuery: {
        page: 1,
        limit: 20,
        keyword: '',
        state: '',
        region: '',
      },
      listLoading: true,
      dialog2Visible: false,
      visible: false,
      activeName: 'first',
      onsaleData1: [],//已通过
      onsaleData2: [],//未通过
      onsaleData3: [],//已忽略
      onsaleData4: [],//黑名单
      onsaleData0: [],//未审核的
      // 全部
      onsaleData: [],
    }
  },
  components: {

  },
  created () {
    this.initData()

  },
  computed: {
    onsaleData0length () {
      return this.onsaleData0.length;
    },
  },
  methods: {
    initData () {
      this.listLoading = true
      let onsaleDatatemp = this.listQuery.region === "全部" ? data.onsaleData : data.onsaleData.filter(item => {
        return item.org_add.includes(this.listQuery.region)
      })
      let tempData1 = onsaleDatatemp.filter(item => {
        return item.hotel_name.includes(this.listQuery.keyword)
      })
      let tempData2 = onsaleDatatemp.filter(item => {
        return item.phone.includes(this.listQuery.keyword)
      })
      let tempData3 = onsaleDatatemp.filter(item => {
        return item.res_name.includes(this.listQuery.keyword)
      })
      let tempArray = [...tempData1, ...tempData2, ...tempData3];
      var obj = {};
      tempArray = tempArray.reduce(function (item, next) {
        obj[next.username] ? '' : obj[next.username] = true && item.push(next);
        return item;
      }, []);
      this.onsaleData = tempArray
      var temp1 = this.onsaleData.filter(item => item.org_state === 1)
      var temp2 = this.onsaleData.filter(item => item.org_state === 2)
      var temp3 = this.onsaleData.filter(item => item.org_state === 3)
      var temp4 = this.onsaleData.filter(item => item.org_state === 4)
      var temp0 = this.onsaleData.filter(item => item.org_state === 0)
      this.onsaleData1 = [...temp1]
      this.onsaleData2 = [...temp2]
      this.onsaleData3 = [...temp3]
      this.onsaleData4 = [...temp4]
      this.onsaleData0 = temp0
      // 模拟请求事件
      setTimeout(() => {
        this.listLoading = false
      }, 1.5 * 1000)
    },
    handleFilterstate () {
      this.activeName = this.listQuery.state
    },
    // 搜索
    handleFilter () {
      this.initData()
    },
    // 点击图片放大
    photoZoomPro (item) {
      var viewer = new Viewer(document.getElementById(item.orderNum), {
        url: item.id,
      });

    },
    photoZoomPro2 (item) {
      var viewer = new Viewer(document.getElementById(item.alias), {
        url: item.busLicen,
      });

    },
    handle2Close (done) {
      done();
    },
    // 点击查看
    editPush (i, row) {
      // 出现弹窗
      this.dialog2Visible = true
      this.form2 = deepClone(row)
    },
    // 编辑推送弹框推送
    on2Submit () {
      this.dialog2Visible = false
    },
    // 点击通过和未通过
    pass (idx) {
      this.onsaleData0[idx].org_state = 1
      this.onsaleData0[idx].visible = false
      this.$message({
        type: "success",
        message: "审核已通过，审核结果已推送给目标医生!"
      });
      this.initData()
    },
    // 未通过
    steppass (idx) {
      this.dialogVisible = true;
      this.form2 = deepClone(idx)
    },
    nopass () {
      for (const v of this.onsaleData0) {
        for (let index = 0; index < this.onsaleData0.length; index++) {
          if (this.onsaleData0[index].org_id === this.form2.org_id) {
            this.onsaleData0[index].org_state = 2
            this.onsaleData0[index].visible = false
            break
          }
        }
      }
      this.dialogVisible = false
      this.$message({
        type: "warning",
        message: "审核未通过，审核结果已推送给目标医生!"
      });
      this.initData()
    },
    // 忽略和拉黑
    ignore (idx) {
      this.onsaleData0[idx].org_state = 3
      this.$message({
        type: "success",
        message: "审核已被忽略，审核结果已推送给目标医生!"
      });
      this.initData()
    },
    async blacklist (idx, row) {
      this.$confirm("是否确定要拉黑" + row.hotel_name + ", 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(async () => {
        this.onsaleData0[idx].org_state = 4
        this.$message({
          type: "success",
          message: "拉黑成功!"
        });
        this.initData()
      });

    },
    handleClose (done) {
      done()
    },
    // 上传
    handleRemove (file, fileList) {
      window.console.log(file, fileList);
    },
    handlePictureCardPreview (file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
  }
}
</script>

<style scoped lang="scss">
#hotel {
  height: 100%;
}
.el-container {
  height: 100%;
}
.busLicen {
  cursor: pointer;
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
.el-row {
  text-align: left;
}
.el-dialog__footer {
  text-align: center !important;
}
.underline {
  color: #e9716d;
  padding-bottom: 2px;
  border-bottom: 1px solid #e9716d;
}
.havebought .underline {
  color: #e9716d;
  padding-bottom: 0;
  border-bottom: 1px solid #e9716d;
}
.el-form-item__content {
  margin-left: 80px;
  width: 140px;
  display: inline-block;
}
.el-form-item__label {
  font-size: 20px !important;
  font-weight: 800;
  position: absolute;
}
.el-dialog__body {
  padding: 10px 50px !important;
}
.payShow .pass {
  color: #399ce9;
}
.payShow .notPass {
  color: #e54e48;
}
.payShow .blacklist {
  display: inline-block;
  text-align: center;
  height: 30px;
  width: 80px;
  border-radius: 15px;
  line-height: 30px;
  border: 1px solid #ccc;
  background: #000;
  color: #e54e48;
}
</style>
