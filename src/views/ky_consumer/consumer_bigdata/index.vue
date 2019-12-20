<template>
  <div id="org" class="app-container">
    <el-tabs v-model="activeName">
      <el-tab-pane label="浏览量统计与分析" name="first" class="onsale">
        <el-table :data="data">
          <el-table-column prop="user_name" label="消费者姓名" align='center'></el-table-column>
          <el-table-column prop="user_account" label="消费者账号" align='center'></el-table-column>
          <el-table-column label="2019下半年浏览量统计（单位：kb）" align='center'>
            <el-table-column prop="user_flow[0].quantity" label="七月" align='center'>
            </el-table-column>
            <el-table-column prop="user_flow[1].quantity" label="八月" align='center'>
            </el-table-column>
            <el-table-column prop="user_flow[2].quantity" label="九月" align='center'>
            </el-table-column>
            <el-table-column prop="user_flow[3].quantity" label="十月" align='center'>
            </el-table-column>
            <el-table-column prop="user_flow[4].quantity" label="十一月" align='center'>
            </el-table-column>
            <el-table-column prop="user_flow[5].quantity" label="十二月" align='center'>
            </el-table-column>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="用户数据统计与分析" name="six" class="onsale">
        <el-table :data="data">
          <el-table-column prop="user_name" label="消费者姓名" align='center'></el-table-column>
          <el-table-column prop="user_account" label="消费者账号" align='center'></el-table-column>
          <el-table-column label="2019下半年浏览量统计（单位：kb）" align='center'>
            <el-table-column prop="user_flow[0].quantity" label="七月" align='center'>
            </el-table-column>
            <el-table-column prop="user_flow[1].quantity" label="八月" align='center'>
            </el-table-column>
            <el-table-column prop="user_flow[2].quantity" label="九月" align='center'>
            </el-table-column>
            <el-table-column prop="user_flow[3].quantity" label="十月" align='center'>
            </el-table-column>
            <el-table-column prop="user_flow[4].quantity" label="十一月" align='center'>
            </el-table-column>
            <el-table-column prop="user_flow[5].quantity" label="十二月" align='center'>
            </el-table-column>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="养老机构行为统计与分析" name="second" class="havebought">
        <el-table :data="data" border>
          <el-table-column prop="user_name" label="消费者姓名" align='center'></el-table-column>
          <el-table-column prop="user_account" label="消费者账号" align='center'></el-table-column>
          <el-table-column align="center" label="行为记录">
          </el-table-column>
          <el-table-column align="center" label="行为类别"></el-table-column>
          <el-table-column align="center" label="行为"></el-table-column>
          <el-table-column align="center" label="行为时间"></el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="交易统计与分析" name="thirdly" class="havebought">
        <el-table :data="data">
         <el-table-column prop="user_name" label="消费者姓名" align='center'></el-table-column>
          <el-table-column prop="user_account" label="消费者账号" align='center'></el-table-column>
          <el-table-column align="center" label="2019年交易记录">
            <el-table-column prop="org_behavior[0].zhiwei" label="十月" align='center'>
              <template slot-scope="scope">
                <span class="num">{{scope.row.org_behavior[0].zhiwei}}</span>
                <a href="" class="blue">查看详情</a>
              </template>
            </el-table-column>
            <el-table-column prop="org_behavior[0].goods" label="十一月" align='center'>
              <template slot-scope="scope">
                <span class="num">{{scope.row.org_behavior[0].goods}}</span>
                <a href="" class="blue">查看详情</a>
              </template>
            </el-table-column>
            <el-table-column prop="org_behavior[0].guanggao" label="十二月" align='center'>
              <template slot-scope="scope">
                <span class="num">{{scope.row.org_behavior[0].guanggao}}</span>
                <a href="" class="blue">查看详情</a>
              </template>
            </el-table-column>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="实时统计与分析" name="fourthly" class="havebought">
        <el-table :data="data">
          <el-table-column prop="user_name" label="消费者姓名" align='center'></el-table-column>
          <el-table-column prop="user_account" label="消费者账号" align='center'></el-table-column>
          <el-table-column align="center" label="实时统计">
            <el-table-column prop="org_behavior[0].zhiwei" label="十月" align='center'>
              <template slot-scope="scope">
                <span class="num">{{scope.row.org_behavior[0].zhiwei}}</span>
                <a href="" class="blue">查看详情</a>
              </template>
            </el-table-column>
            <el-table-column prop="org_behavior[0].goods" label="十一月" align='center'>
              <template slot-scope="scope">
                <span class="num">{{scope.row.org_behavior[0].goods}}</span>
                <a href="" class="blue">查看详情</a>
              </template>
            </el-table-column>
            <el-table-column prop="org_behavior[0].guanggao" label="十二月" align='center'>
              <template slot-scope="scope">
                <span class="num">{{scope.row.org_behavior[0].guanggao}}</span>
                <a href="" class="blue">查看详情</a>
              </template>
            </el-table-column>
          </el-table-column>
          <el-table-column align="center" label="实时分析">
            <el-table-column prop="org_behavior[0].zhiwei" label="十月" align='center'>
              <template slot-scope="scope">
                <span class="num">{{scope.row.org_behavior[0].zhiwei}}</span>
                <a href="" class="blue">查看详情</a>
              </template>
            </el-table-column>
            <el-table-column prop="org_behavior[0].goods" label="十一月" align='center'>
              <template slot-scope="scope">
                <span class="num">{{scope.row.org_behavior[0].goods}}</span>
                <a href="" class="blue">查看详情</a>
              </template>
            </el-table-column>
            <el-table-column prop="org_behavior[0].guanggao" label="十二月" align='center'>
              <template slot-scope="scope">
                <span class="num">{{scope.row.org_behavior[0].guanggao}}</span>
                <a href="" class="blue">查看详情</a>
              </template>
            </el-table-column>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="自定义统计与分析" name="five" class="havebought">
        <el-table :data="data">
         <el-table-column prop="user_name" label="消费者姓名" align='center'></el-table-column>
          <el-table-column prop="user_account" label="消费者账号" align='center'></el-table-column>
          <el-table-column align="center" label="自定义统计">
            <el-table-column prop="org_behavior[0].zhiwei" label="十月" align='center'>
              <template slot-scope="scope">
                <span class="num">{{scope.row.org_behavior[0].zhiwei}}</span>
                <a href="" class="blue">查看详情</a>
              </template>
            </el-table-column>
            <el-table-column prop="org_behavior[0].goods" label="十一月" align='center'>
              <template slot-scope="scope">
                <span class="num">{{scope.row.org_behavior[0].goods}}</span>
                <a href="" class="blue">查看详情</a>
              </template>
            </el-table-column>
            <el-table-column prop="org_behavior[0].guanggao" label="十二月" align='center'>
              <template slot-scope="scope">
                <span class="num">{{scope.row.org_behavior[0].guanggao}}</span>
                <a href="" class="blue">查看详情</a>
              </template>
            </el-table-column>
          </el-table-column>
          <el-table-column align="center" label="自定义分析">
            <el-table-column prop="org_behavior[0].zhiwei" label="十月" align='center'>
              <template slot-scope="scope">
                <span class="num">{{scope.row.org_behavior[0].zhiwei}}</span>
                <a href="" class="blue">查看详情</a>
              </template>
            </el-table-column>
            <el-table-column prop="org_behavior[0].goods" label="十一月" align='center'>
              <template slot-scope="scope">
                <span class="num">{{scope.row.org_behavior[0].goods}}</span>
                <a href="" class="blue">查看详情</a>
              </template>
            </el-table-column>
            <el-table-column prop="org_behavior[0].guanggao" label="十二月" align='center'>
              <template slot-scope="scope">
                <span class="num">{{scope.row.org_behavior[0].guanggao}}</span>
                <a href="" class="blue">查看详情</a>
              </template>
            </el-table-column>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="数据可视化" name="seven" class="havebought">
        <el-table :data="data">
          <el-table-column prop="user_name" label="消费者姓名" align='center'></el-table-column>
          <el-table-column prop="user_account" label="消费者账号" align='center'></el-table-column>
          <el-table-column align="center" label="自定义统计">
            <el-table-column prop="org_behavior[0].zhiwei" label="十月" align='center'>
              <template slot-scope="scope">
                <span class="num">{{scope.row.org_behavior[0].zhiwei}}</span>
                <a href="" class="blue">查看详情</a>
              </template>
            </el-table-column>
            <el-table-column prop="org_behavior[0].goods" label="十一月" align='center'>
              <template slot-scope="scope">
                <span class="num">{{scope.row.org_behavior[0].goods}}</span>
                <a href="" class="blue">查看详情</a>
              </template>
            </el-table-column>
            <el-table-column prop="org_behavior[0].guanggao" label="十二月" align='center'>
              <template slot-scope="scope">
                <span class="num">{{scope.row.org_behavior[0].guanggao}}</span>
                <a href="" class="blue">查看详情</a>
              </template>
            </el-table-column>
          </el-table-column>
          <el-table-column align="center" label="自定义分析">
            <el-table-column prop="org_behavior[0].zhiwei" label="十月" align='center'>
              <template slot-scope="scope">
                <span class="num">{{scope.row.org_behavior[0].zhiwei}}</span>
                <a href="" class="blue">查看详情</a>
              </template>
            </el-table-column>
            <el-table-column prop="org_behavior[0].goods" label="十一月" align='center'>
              <template slot-scope="scope">
                <span class="num">{{scope.row.org_behavior[0].goods}}</span>
                <a href="" class="blue">查看详情</a>
              </template>
            </el-table-column>
            <el-table-column prop="org_behavior[0].guanggao" label="十二月" align='center'>
              <template slot-scope="scope">
                <span class="num">{{scope.row.org_behavior[0].guanggao}}</span>
                <a href="" class="blue">查看详情</a>
              </template>
            </el-table-column>
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
      // 全部
      data: [],
      activeName: 'first',
    }
  },
  components: {

  },
  created () {
    this.initData()

  },
  methods: {
    initData () {
      this.data = data.userBigData
    }
  }
}
</script>

<style scoped>
.num {
  display: inline-block;
  width: 20px;
  text-align: left;
}
.blue {
  display: inline-block;
  margin-left: 10px;
  color: blue;
}
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
.payShow .pass {
  color: #399ce9;
}
.payShow .notPass {
  color: #e54e48;
}
</style>

