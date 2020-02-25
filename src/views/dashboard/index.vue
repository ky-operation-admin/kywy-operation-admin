<template>
  <div class="dashboard-container">
    <p style="text-align:center;font-size:24px;color:#1D94E7;font-weight:900">
      欢迎来到
      <span style="font-size:30px;color:#f00">康养无忧</span>
      运营后台
    </p>
    <div class="content">
      <div class="product-item wrapper">
        <div class="grid-content bg-purple" v-for="item in listItem" :key="item.name">
          <a class="document-btn" target="_blank">
            <img :src="item.icon">
            <span>{{item.name}}</span>
            <ul class="item-list">
              <li class="country-item" v-for="c in item.list" :key="c.index" @click="openTag(c.url)">
                {{c.title}}
              </li>
            </ul>
          </a>
        </div>
      </div>
      <div class="product-list">
        <div class="fl">
          <h3>
            <span class="icon"></span>
            <span>工作计划TodoList</span>
          </h3>
          <el-table :data="data">
            <el-table-column prop="title" label="标题"></el-table-column>
            <el-table-column prop="date" label="日期" align='center' width="120px"></el-table-column>
          </el-table>
        </div>
        <div class="fr">
          <div class="fr_top">
            <h3>
              <span>行业热闻</span>
              <span class="icon"></span>
            </h3>
            <div class="fr_top_cotent">
              <div class="img">
                <img src="@/assets/img-silver@2x.png" alt="">
              </div>
              <div class="text">
                <p>关于上期标准仓单交易平台白 银品种和买方挂牌交易上线有 关事项的通知</p>
                <span>[2019-12-16]</span>
              </div>
            </div>
          </div>
          <div class="fr_but">
            <h3>公司公告</h3>
            <ol>
              <li>1.关于平台使用说明</li>
              <li>2.关于重大事项通知</li>
              <li>3.关于重大事项通知</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { getName } from '@/utils/auth'
import { log } from 'util'
export default {
  name: 'Dashboard',
  data () {
    return {
      listItem: [
        {
          name: '社区',
          target: '',
          icon: require('@/assets/homeImg/community.png'),
          span: 6,
          list: [
            {
              title: '活动中心',
              url: '/community/activityCenter'
            },
            {
              title: '药店',
              url: '/community/drugstore'
            },
            {
              title: '老年大学',
              url: '/community/elderlyUniversity'
            }
          ]
        },
        {
          name: '养老机构',
          target: '',
          icon: require('@/assets/homeImg/organization.png'),
          span: 6,
          list: [
            {
              title: '基本信息',
              url: '/organization/basicInfor'
            },
            {
              title: '入驻审核',
              url: '/organization/audit'
            },
            {
              title: '大数据',
              url: '/organization/bigdata'
            }
          ]
        },
        {
          name: '景点',
          target: '',
          icon: require('@/assets/homeImg/jingdian.png'),
          span: 6,
          list: [
            {
              title: '基本信息',
              url: '/scenic/basicInfor'
            },
            {
              title: '入驻审核',
              url: '/scenic/audit'
            },
            {
              title: '大数据',
              url: '/scenic/bigdata'
            }
          ]
        },
        {
          name: '酒店',
          target: '',
          icon: require('@/assets/homeImg/hotel.png'),
          span: 6,
          list: [
            {
              title: '基本信息',
              url: '/hotel/basicInfor'
            },
            {
              title: '入驻审核',
              url: '/hotel/audit'
            },
            {
              title: '大数据',
              url: '/hotel/bigdata'
            }
          ]
        },
        {
          name: '保险',
          target: '',
          icon: require('@/assets/homeImg/insurance.png'),
          span: 6,
          list: [
            {
              title: '基本信息',
              url: '/insurance/basicInfor'
            },
            {
              title: '入驻审核',
              url: '/insurance/audit'
            },
            {
              title: '大数据',
              url: '/insurance/bigdata'
            }
          ]
        },
        {
          name: '基金',
          target: '',
          icon: require('@/assets/homeImg/fund.png'),
          span: 6,
          list: [
            {
              title: '基本信息',
              url: '/fund/basicInfor'
            },
            {
              title: '入驻审核',
              url: '/fund/audit'
            },
            {
              title: '大数据',
              url: '/fund/bigdata'
            }
          ]
        },
        {
          name: '医院',
          target: '',
          icon: require('@/assets/homeImg/hospital.png'),
          span: 6,
          list: [
            {
              title: '基本信息',
              url: '/hospital/basicInfor'
            },
            {
              title: '入驻审核',
              url: '/hospital/audit'
            },
            {
              title: '大数据',
              url: '/hospital/bigdata'
            }
          ]
        },
        {
          name: '商家',
          target: '',
          icon: require('@/assets/homeImg/business.png'),
          span: 6,
          list: [
            {
              title: '基本信息',
              url: '/merchant/basicInfor'
            },
            {
              title: '入驻审核',
              url: '/merchant/audit'
            },
            {
              title: '大数据',
              url: '/merchant/bigdata'
            }
          ]
        },
        {
          name: '婚介公司',
          target: '',
          icon: require('@/assets/homeImg/matchmaking.png'),
          span: 4.4,
          list: [
            {
              title: '基本信息',
              url: '/datingAgency/basicInfor'
            },
            {
              title: '入驻审核',
              url: '/datingAgency/audit'
            },
            {
              title: '大数据',
              url: '/datingAgency/bigdata'
            }
          ]
        },
        {
          name: '个人',
          target: '',
          icon: require('@/assets/homeImg/personal.png'),
          span: 4.4,
          list: [
            {
              title: '基本信息',
              url: '/consumer/basicInfor'
            },
            {
              title: '大数据',
              url: '/consumer/bigdata'
            }
          ]
        },
      ],
      data: [
        { title: '关于上期标准仓单交易平台白银品种和买方挂牌交易上线有关事项的通知', date: '[2019-12-16]' },
        { title: '关于上期标准仓单交易平台白银品种和买方挂牌交易上线有关事项的通知', date: '[2019-12-16]' },
        { title: '关于上期标准仓单交易平台白银品种和买方挂牌交易上线有关事项的通知', date: '[2019-12-16]' },
        { title: '关于上期标准仓单交易平台白银品种和买方挂牌交易上线有关事项的通知', date: '[2019-12-16]' },
        { title: '关于上期标准仓单交易平台白银品种和买方挂牌交易上线有关事项的通知', date: '[2019-12-16]' },
        { title: '关于上期标准仓单交易平台白银品种和买方挂牌交易上线有关事项的通知', date: '[2019-12-16]' },
        { title: '关于上期标准仓单交易平台白银品种和买方挂牌交易上线有关事项的通知', date: '[2019-12-16]' },
      ]
    }
  },
  computed: {
    ...mapGetters([
      'name'
    ]),
    getUserName () {
      return getName()
    }
  },
  methods: {
    openTag (path) {
    //   window.console.log('path', path)
      this.$router.push({ path: path })
    }
  }
}
</script>

<style lang="scss" scoped>
.has-gutter {
  background: #196;
}
.dashboard {
  &-container {
    margin: 30px;
    .content {
      // margin: 50px 50px;
      overflow: hidden;
      .wrapper {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-template-rows: repeat(2, 1fr);
        grid-gap: 10px;
        margin: auto;
      }
      .product-list {
        margin-top: 50px;
        overflow: hidden;
        .fl {
          height: 450px;
          width: 50%;
          background: #fff;
          float: left;
          .el-table .cell {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          h3 {
            margin: 0;
            padding: 10px 20px;
            //   height: 21px;

            line-height: 21px;
            position: relative;
            span {
              display: inline-block;
              vertical-align: middle;
            }
            .icon {
              //   position: absolute;
              vertical-align: middle;
              bottom: 0;
              width: 20px;
              height: 21px;
              background-image: url("~@/assets/icon_case@2x.png");
            }
          }
        }
        .fr {
          float: right;
          height: 100%;
          height: 450px;
          width: 40%;
          margin-left: 50px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          .fr_top {
            width: 100%;
            height: 200px;
            background: #fff;
            h3 {
              margin: 0;
              padding: 10px 20px;
              line-height: 21px;
              position: relative;
              span {
                display: inline-block;
                vertical-align: middle;
              }
              .icon {
                vertical-align: middle;
                bottom: 0;
                width: 20px;
                height: 21px;
                float: right;
                background-image: url("~@/assets/icon_more@2x.png");
              }
            }
            .fr_top_cotent {
              height: 150px;
              display: flex;
              justify-content: space-between;
              .img {
                width: 40%;
                height: 100%;
                padding: 10px;
                img {
                  width: 100%;
                  height: 100%;
                }
              }
              .text {
                width: 40%;
                height: 100%;
                padding: 0 10px;
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                color: #666666;
                span {
                  color: #f59133;
                }
              }
            }
          }
          .fr_but {
            width: 100%;
            height: 240px;
            background: url("~@/assets/img_anncuncement@2x.png") no-repeat;
            background-color: #fff;
            // background:no-repeat;
            background-size: 60% 100%;
            background-position: center;
            color: #D6D6D6;
            text-align: center;
            font-family:SimSun;
            h3{
                margin-top: 50px;
            }
            ol{
                margin: 0;
                padding: 0;
                li{
                    margin-top: 10px;
                }
            }
          }
        }
      }
      .bg-purple {
        position: relative;
        cursor: pointer;
        background: #fff;
        color: #333;
        height: 100px;
        width: 100%;
        font-size: 20px;
        text-align: center;
        .document-btn {
          display: inline-block;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          img {
            width: 60px;
            height: 60px;
          }
          span {
            display: block;
            width: 120px;
            // line-height: 120px;
          }
        }
        &:hover {
          .item-list {
            display: block;
          }
        }
        .item-list {
          border-radius: 10px;
          padding: 0;
          display: none;
          width: 155px;
          background-color: #ebeef5;
          border: 1px solid #ebeef5;
          position: absolute;
          box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
          top: 80px;
          margin-top: 12px;
          left: 20%;
          z-index: 33;
          //   overflow: hidden;
          &::before {
            content: "";
            position: absolute;
            top: -20px;
            border-style: solid;
            border-width: 10px;
            border-color: transparent;
            border-bottom-color: #ebeef5;
          }
          li {
            height: 30px;
            line-height: 30px;
            font-size: 15px;
            color: #333;
            // border: 1px solid #222;
            &:hover {
              color: rgb(64, 158, 255);
              //   background: #ccc;
            }
          }
        }
      }
    }
  }
  &-text,
  &-h2 {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
