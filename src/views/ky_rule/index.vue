<template>
  <div class="dashboard-container">
    <div class="content">
      <el-col :span="10">
        <div class="grid-content bg-purple">
          <img :src="data[0].img" alt="">
          <div>
            <h2>
              <span>平台规则</span>
            </h2>
            <p class="text">加强对入驻平台经营者的管理和审核，坚决维护公平竞争秩序，真正做到为消费者谋福利。</p>

          </div>
        </div>
      </el-col>
      <el-col :span="10" :offset="4">
        <div class="grid-content bg-purple-light">
          <div>
            <h2>
              <span>平台承诺</span>
            </h2>
            <div class="text">
              <span>"康养无忧"</span>
              平台承诺认真对待媒体监督和消费者投诉，切实履行自己的平台监管责任，不以任何理由推卸责任，绝不纵容和支持假冒侵权者，积极配合各地各级市场监管部门，加强对平台内刷单炒信等违法经营行为的自查自纠。
            </div>
          </div>
          <img :src="data[1].img" alt="">
        </div>
      </el-col>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      data: [
        {
          img: require('@/assets/ruleleft.png')
        },
        {
          img: require('@/assets/ruleright.png')
        }
      ]
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
</style>

