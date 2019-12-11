<template>
  <div class="comment app-container">
    <el-table :data="commentList" style="min-height:700px">
      <el-table-column align="center" prop="name" label="评论人" width="200">

      </el-table-column>
      <el-table-column prop="obj" label="评论对象" width="350"></el-table-column>
      <el-table-column prop="content" label="内容" width="500"></el-table-column>
      <el-table-column align="center" prop="time" label="时间" width="300"></el-table-column>
      <el-table-column align="center" label="审核" width="190">
        <template slot-scope="scope">
          <!-- <div class="payShow"> -->
            <!--按钮-->
            <div @click="changStatus(scope.$index)" class="payShow">
              <a v-if="scope.row.status==1" class="haveNot">
                <span>未审核</span>
              </a>
              <a v-else-if="scope.row.status==2" class="pass">
                <span>通过</span>
              </a>
              <a class="notPass" v-else>
                <span>未通过</span>
              </a>
            </div>
          <!-- </div> -->
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      commentList: [
        {
          name: '张三',
          obj: '中国移动',
          content: '富强、民主、文明、和谐是国家层面的价值目标，自由、平等、公正、法治是社会层面的价值取向，爱国、敬业、诚信、友善是公民个人层面的价值准则',
          time: Date.now(),
          status: 2
        },
        {
          name: '李四',
          obj: '中国联通',
          content: '富强、民主、文明、和谐是国家层面的价值目标，自由、平等、公正、法治是社会层面的价值取向，爱国、敬业、诚信、友善是公民个人层面的价值准则',
          time: Date.now(),
          status: 1
        },
        {
          name: '王五',
          obj: '中国电信有限公司',
          content: '富强、民主、文明、和谐是国家层面的价值目标，自由、平等、公正、法治是社会层面的价值取向，爱国、敬业、诚信、友善是公民个人层面的价值准则',
          time: Date.now(),
          status: 1
        },
        {
          name: '张三',
          obj: '中国农业银行股份有限公司',
          content: '富强、民主、文明、和谐是国家层面的价值目标，自由、平等、公正、法治是社会层面的价值取向，爱国、敬业、诚信、友善是公民个人层面的价值准则',
          time: Date.now(),
          status: 1
        },
        {
          name: '张三',
          obj: '中国烟草有限公司',
          content: '富强、民主、文明、和谐是国家层面的价值目标，自由、平等、公正、法治是社会层面的价值取向，爱国、敬业、诚信、友善是公民个人层面的价值准则',
          time: Date.now(),
          status: 1
        }
      ],
      // 编辑按钮

    }
  },
  components: {

  },
  methods: {
    changStatus (idx) {
      this.commentList[idx].status = this.commentList[idx].status + 1
      window.console.log(this.commentList[idx].status);
      if (this.commentList[idx].status > 3) this.commentList[idx].status = 1
      //   var num = this.commentList[idx].status
      //   num = num + 1
      //   window.console.log(num)
    }

  }
}

</script>

<style scoped>
.comment {
  height: 100%;
}

.payShow a{
    display: block;
    width: 100%;
    height: 100%;
    /* text-align: center */
}
.payShow span{
    display: inline-block;
    width: 60px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    border: 1px solid #ccc;
    user-select: none;
}
.payShow .pass{
    color:#399ce9
}
.payShow .notPass{
    color: #e54e48;
}
.comment .el-table__fixed-right{
    box-shadow: none;
    -webkit-box-shadow:none;
}
.comment .el-table__fixed-right::before {
    background-color:#fff;
}
</style>
