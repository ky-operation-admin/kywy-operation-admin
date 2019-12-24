<template>
  <div class="dashboard-container">
    <el-row style="padding:20px;text-align:end">
      <el-button v-if="data.edit" type="success" size="small" icon="el-icon-circle-check-outline" @click="confirmEdit()">
        确定
      </el-button>
      <el-button v-else type="primary" size="small" icon="el-icon-edit" @click="data.edit=!data.edit">
        编辑
      </el-button>
      <el-button v-if="data.edit" class="cancel-btn" size="small" icon="el-icon-refresh" type="warning" @click="cancelEdit()">
        取消
      </el-button>
    </el-row>
    <div class="content">
      <el-col :span="10">
        <div class="grid-content bg-purple">
          <el-upload v-if="data.edit" 
          class="upload-demo" 
          action="https://jsonplaceholder.typicode.com/posts/" 
          :file-list="data.img1" 
          list-type="picture">
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
          <img v-else :src="data.img1[0].url" alt="">
          <div style="width:100%">
            <h2>
              <span>平台规则</span>
            </h2>
            <template v-if="data.edit">
              <el-input v-model="data.text1" type="textarea" :rows='8' class="edit-input" size="small" />
            </template>
            <p class="text" v-else>{{data.text1}}</p>
          </div>
        </div>
      </el-col>
      <el-col :span="10" :offset="4">
        <div class="grid-content bg-purple-light">
          <div style="width:100%">
            <h2>
              <span>平台承诺</span>
            </h2>
            <template v-if="data.edit">
              <el-input v-model="data.text2" type="textarea" :rows='8'  class="edit-input" size="small" />
            </template>
            <div class="text" v-else>
              <span>"康养无忧"</span>
              {{data.text2}}
            </div>
          </div>
          <el-upload v-if="data.edit" 
          class="upload-demo" 
          action="https://jsonplaceholder.typicode.com/posts/" 
          :file-list="data.img2" 
          list-type="picture">
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
          <img v-else :src="data.img2[0].url" alt="">
        </div>
      </el-col>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      data: {
        img1: [{name: 'food1.png', url:require('@/assets/ruleleft.png')}],
        img2: [{name: 'food2.png', url:require('@/assets/ruleright.png')}],
        edit: false,
        text1: '加强对入驻平台经营者的管理和审核，坚决维护公平竞争秩序，真正做到为消费者谋福利。',
        originalTitle1: '加强对入驻平台经营者的管理和审核，坚决维护公平竞争秩序，真正做到为消费者谋福利。',
        text2: '平台承诺认真对待媒体监督和消费者投诉，切实履行自己的平台监管责任，不以任何理由推卸责任，绝不纵容和支持假冒侵权者，积极配合各地各级市场监管部门，加强对平台内刷单炒信等违法经营行为的自查自纠。',
        originalTitle2: '平台承诺认真对待媒体监督和消费者投诉，切实履行自己的平台监管责任，不以任何理由推卸责任，绝不纵容和支持假冒侵权者，积极配合各地各级市场监管部门，加强对平台内刷单炒信等违法经营行为的自查自纠。'
      }
    }
  },
  methods: {
    //   取消编辑
    cancelEdit () {
      this.data.text1 = this.data.originalTitle1
      this.data.text2 = this.data.originalTitle2
      this.data.edit = false
      this.$message({
        message: '修改已取消',
        type: 'warning'
      })
    },
    // 确定编辑
    confirmEdit () {
      this.data.edit = false
      this.data.originalTitle1 = this.data.text1
      this.data.originalTitle2 = this.data.text2
      this.$message({
        message: '修改成功!',
        type: 'success'
      })
    }
  },
  components: {

  }
}
</script>

<style lang='scss' scoped>
.dashboard {
  &-container {
    background: #fff;
    margin: 30px;
    overflow: hidden;
    .content {
      padding: 20px 20px;
      height: 800px;
      margin: 0px auto;
      .el-col {
        height: 100%;
      }
      h2 {
        height: 60px;
        line-height: 50px;
        text-align: center;
        border-bottom: 1px solid #ccc;
        span {
          display: inline-block;
          height: 100%;
          border-bottom: 3px solid #ccc;
        }
      }
      .text {
        font-size: 16px;
        color: #333;
        line-height: 30px;
        text-align: left;
        span {
          color: #f00;
          font-size: 18px;
        }
      }
      .grid-content {
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        height: 100%;
      }
      .bg-purple {
        overflow: hidden;
        img {
          width: 100%;
        }
      }
      .bg-purple-light {
        img {
          width: 60%;
        }
      }
    }
  }
}
.upload-demo{
    width: 100%;
}
</style>

