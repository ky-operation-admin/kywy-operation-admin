<template>
  <div id="org" class="app-container">
    <el-tabs v-model="activeName">
      <el-tab-pane label="全部" name="first" class="onsale">
        <el-table :data="onsaleData" border>
          <el-table-column prop="hotel_name" label="酒店名称" width="280" align='center'></el-table-column>
          <el-table-column prop="res_name" align="center" label="发布人"></el-table-column>
          <el-table-column prop="serve_name" align="center" label="上架服务名称"></el-table-column>
          <el-table-column prop="serve_type" align="center" label="服务类型"></el-table-column>
          <el-table-column prop="busLicen" align="center" label="详情图片">
            <template slot-scope="scope">
              <img v-image-preview class="busLicen" :src="scope.row.plimg" alt style="height:6rem;" />
            </template>
          </el-table-column>
          <el-table-column label="上架时间" align='center'>
            2019/12/17 10：03
          </el-table-column>
          <el-table-column prop="org_stateText" align="center" label="状态">
            <template slot-scope="scope">
              <div class="payShow">
                <a v-if="scope.row.org_state==1" class="pass">
                  <span>已通过</span>
                </a>
                <a v-else-if="scope.row.org_state==2" class="notPass">
                  <span>未通过</span>
                </a>
                <a v-else-if="scope.row.org_state==3" class="notPass">
                  <span>已忽略</span>
                </a>
                <a v-else-if="scope.row.org_state==4" class="blacklist">
                  <span>黑名单</span>
                </a>
                <a v-else>
                  <span>未审核</span>
                </a>
              </div>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="待审核" name="second" class="havebought">
        <el-table :data="onsaleData0" border v-loading="listLoading">
          <el-table-column prop="hotel_name" label="酒店名称" width="280" align='center'></el-table-column>
          <el-table-column prop="res_name" align="center" label="发布人"></el-table-column>
          <el-table-column prop="serve_name" align="center" label="上架服务名称"></el-table-column>
          <el-table-column prop="price" align="center" label="价格"></el-table-column>
          <el-table-column prop="serve_type" align="center" label="服务类型"></el-table-column>
          <el-table-column prop="busLicen" align="center" label="详情图片">
            <template slot-scope="scope">
              <img v-image-preview class="busLicen" :src="scope.row.plimg" alt style="height:6rem;" />
            </template>
          </el-table-column>
          <el-table-column label="上架时间" align='center'>
            2019/12/17 10：03
          </el-table-column>
          <el-table-column prop="document" align="center" label="机器审核报告">
            <template slot-scope="scope">
              <img v-image-preview class="busLicen" :src="scope.row.document" alt style="height:6rem;" />
            </template>
          </el-table-column>
          <el-table-column prop="org_stateText" align="center" label="审核结果" width="250">
            <template slot-scope="scope">
              <el-button type="success" @click="pass(scope.$index)" size="mini">通过</el-button>
              <el-button type="warning" @click="steppass(scope.$index)" size="mini">不通过</el-button>
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
                  <el-button type="primary" @click="nopass(scope.$index)">提交</el-button>
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
          <el-table-column prop="hotel_name" label="酒店名称" width="280" align='center'></el-table-column>
          <el-table-column prop="res_name" align="center" label="发布人"></el-table-column>
          <el-table-column prop="serve_name" align="center" label="上架服务名称"></el-table-column>
          <el-table-column prop="serve_type" align="center" label="服务类型"></el-table-column>
          <el-table-column prop="busLicen" align="center" label="详情图片">
            <template slot-scope="scope">
              <img v-image-preview class="busLicen" :src="scope.row.plimg" alt style="height:6rem;" />
            </template>
          </el-table-column>
          <el-table-column label="上架时间" align='center'>
            2019/12/17 10：03
          </el-table-column>
          <el-table-column prop="org_stateText" align="center" label="审核结果">
            <template>
              <div class="payShow">
                <a class="pass">
                  <span>已通过</span>
                </a>
              </div>
            </template>
          </el-table-column>

        </el-table>
      </el-tab-pane>
      <el-tab-pane label="未通过" name="fourthly" class="havebought">
        <el-table :data="onsaleData2" border>
          <el-table-column prop="hotel_name" label="酒店名称" width="280" align='center'></el-table-column>
          <el-table-column prop="res_name" align="center" label="发布人"></el-table-column>
          <el-table-column prop="serve_name" align="center" label="上架服务名称"></el-table-column>
          <el-table-column prop="serve_type" align="center" label="服务类型"></el-table-column>
          <el-table-column prop="busLicen" align="center" label="详情图片">
            <template slot-scope="scope">
              <img v-image-preview class="busLicen" :src="scope.row.plimg" alt style="height:6rem;" />
            </template>
          </el-table-column>
          <el-table-column label="上架时间" align='center'>
            2019/12/17 10：03
          </el-table-column>
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

        </el-table>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import data from '@/assets/js/mock'
export default {
  data () {
    return {
      dialogVisible: false,
      form: {
        content: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      listLoading: true,
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
      this.onsaleData = data.onsaleData
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
    // 点击通过和未通过
    pass (idx) {
      this.onsaleData0[idx].org_state = 1
      this.onsaleData0[idx].visible = false
      this.$message({
        type: "success",
        message: "审核已通过，审核结果已推送给目标酒店!"
      });
      this.initData()
    },
    // 未通过
    steppass (idx) {
      this.dialogVisible = true;
    },
    nopass (idx) {
      this.onsaleData0[idx].org_state = 2
      this.onsaleData0[idx].visible = false
      this.dialogVisible = false
      this.$message({
        type: "warning",
        message: "审核未通过，审核结果已推送给目标酒店!"
      });
      this.initData()
    },
    // 忽略和拉黑
    ignore (idx) {
      this.onsaleData0[idx].org_state = 3
      this.$message({
        type: "success",
        message: "审核已被忽略，审核结果已推送给目标酒店!"
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
#org {
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


