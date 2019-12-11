<template>
  <div id="org" class="app-container">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="使用分析" name="first" class="onsale">
        <el-table :data="onsaleData">
          <el-table-column prop="org_name" label="机构名称" width="260" align='center'></el-table-column>
          <el-table-column prop="xinyong" label="上架记录" width="260" align='center'></el-table-column>
          <el-table-column prop="pingji" label="招聘记录" width="260" align='center'></el-table-column>
          <el-table-column prop="res_name" align="center" label="发布记录"></el-table-column>
          <el-table-column align="center" label="操作" width="200">
            <template>
              <el-button type="primary" round size='mini' @click="dialogVisible = true">查看</el-button>
            </template>
          </el-table-column> 
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="交易分析" name="second" class="havebought">
        <el-table :data="onsaleData0">
          <el-table-column prop="org_name" label="机构名称" width="260"></el-table-column>
          <el-table-column prop="res_name" align="center" label="交易记录"></el-table-column>
          <el-table-column prop="org_stateText" align="center" label="状态">未审核</el-table-column>
          <el-table-column align="center" label="操作" width="200">
            <template>
              <a href="#" class="underline">查看</a>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="实时统计" name="thirdly" class="havebought">
        <el-table :data="onsaleData3">
          <el-table-column prop="org_name" label="机构名称" width="260"></el-table-column>
          <el-table-column prop="res_name" align="center" label="实时数据"></el-table-column>
          <el-table-column prop="org_stateText" align="center" label="实时交易"></el-table-column>
          <el-table-column align="center" label="操作" width="200">
            <template>
              <a href="#" class="underline">查看</a>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="自定义分析" name="fourthly" class="havebought">
        <el-table :data="onsaleData1">
          <el-table-column prop="org_name" label="机构名称" width="260"></el-table-column>
          <el-table-column prop="res_name" align="center" label="自定义数据"></el-table-column>
          <el-table-column prop="org_state" align="center" label="状态">
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
              <a href="#" class="underline">查看</a>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dialogVisible: false,
      activeName: 'first',
      form: {
        myprice: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      onsaleData1: [],//已审核的
      onsaleData0: [],//未审核的
      onsaleData3: [],//审核中的

      // 全部
    //   onsaleData: [
    //     {
    //       org_id: 1,
    //       org_name: '广东省广州市某某某某养老机构',
    //       res_name: '张三1',
    //       org_state: 1
    //     }, {
    //       org_id: 2,
    //       org_name: '广东省广州市某某某某养老机构',
    //       res_name: '张三2',
    //       org_state: 0
    //     }, {
    //       org_id: 3,
    //       org_name: '广东省广州市某某某某养老机构',
    //       res_name: '张三3',
    //       org_state: 2
    //     }, {
    //       org_id: 4,
    //       org_name: '广东省广州市某某某某养老机构',
    //       res_name: '张三4',
    //       org_state: 2
    //     }, {
    //       org_id: 5,
    //       org_name: '广东省广州市某某某某养老机构',
    //       res_name: '张三5',
    //       org_state: 0
    //     }, {
    //       org_id: 6,
    //       org_name: '广东省广州市某某某某养老机构',
    //       res_name: '张三6',
    //       //   org_stateText: '已通过',
    //       org_state: 1
    //     },
    //     {
    //       org_id: 7,
    //       org_name: '广东省广州市某某某某养老机构',
    //       res_name: '张三7',
    //       org_state: 1
    //     }, {
    //       org_id: 8,
    //       org_name: '广东省广州市某某某某养老机构',
    //       res_name: '张三8',
    //       org_state: 0
    //     }, {
    //       org_id: 9,
    //       org_name: '广东省广州市某某某某养老机构',
    //       res_name: '张三9',
    //       org_state: 2
    //     }, {
    //       org_id: 10,
    //       org_name: '广东省广州市某某某某养老机构',
    //       res_name: '张三10',
    //       org_state: 2
    //     }
    //     ],
    }
  },
  components: {

  },
  created () {
    this.initData()

  },
  methods: {
    initData () {
      var temp1 = this.onsaleData.filter(item => item.org_state === 1)
      var temp2 = this.onsaleData.filter(item => item.org_state === 2)
      var temp0 = this.onsaleData.filter(item => item.org_state === 0)
      this.onsaleData1 = [...temp1, ...temp2]
      this.onsaleData0 = temp0
    },
    // 点击状态进行状态的切换
    changStatus (idx) {
      this.onsaleData[idx].org_state = this.onsaleData[idx].org_state + 1
      window.console.log(this.onsaleData[idx].org_state);
      if (this.onsaleData[idx].org_state > 2) this.onsaleData[idx].org_state = 0
      this.initData()
    },
    handleClick (tab, event) {
      window.console.log(tab, event)
    },
    addItem () {

    },
    handleClose (done) {
      done()
    },
    // “我”高亮
    setClass (i) {
      return i ? 'isme' : ''
    }
  }
}
</script>

<style scoped>
#org {
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
.payShow .pass{
    color:#399ce9
}
.payShow .notPass{
    color: #e54e48;
}

</style>
