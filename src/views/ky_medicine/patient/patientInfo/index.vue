<template>
  <div class="app-container">
    <div class="title" style="text-align:left;padding:20px">
      <el-input v-model="keyword" placeholder="请输入患者姓名/电话" style="width: 300px;margin-right:-10px;" clearable class="filter-item" @keyup.enter.native="handleFilter" />
      <el-button class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">
        查询
      </el-button>
    </div>
    <el-table :data="tableData" style="width: 100%" border v-loading="listLoading">

      <el-table-column prop="res_name" label="患者名称" align="center"></el-table-column>
      <el-table-column prop="alias" label="性别" align="center"></el-table-column>
      <el-table-column prop="username" label="年龄" align="center"></el-table-column>
      <el-table-column prop="type" label="患者病情" align="center"></el-table-column>
      <el-table-column prop="busLicen" label="营业执照" align="center">
        <template slot-scope="scope">
          <img v-image-preview :src="scope.row.busLicen" alt style="height:6rem;" />
        </template>
      </el-table-column>
      <!-- <el-table-column prop="res_name" align="center" label="法人"></el-table-column> -->
      <el-table-column prop="phone" align="center" label="联系电话"></el-table-column>
      <el-table-column align="center" label="操作" width="200">
        <template slot-scope="scope">
          <!-- <el-button size="mini" type="primary" @click="edti(scope.$index)">编辑</el-button> -->
          <!-- <el-button size="mini" type="primary" disabled>编辑</el-button> -->
          <ky-button icon="fa fa-edit" perms="admin:editor" label="编辑"  type="primary" />

          <!-- <el-button size="mini" type="danger" @click="del(scope.$index,scope.row)">删除</el-button> -->
          <ky-button icon="fa fa-trash" perms="admin:editor" label="删除"  type="danger" />

        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import data from '@/assets/js/mock'
let onsaleData = data.onsaleData
import KyButton from "@/components/Core/KyButton"
import { getName} from '@/utils/auth'
export default {
  data () {
    return {
      listLoading: true,
      tableData: [],
      keyword: ''
    }
  },
  components:{
      KyButton
  },
  computed:{
   getUserName(){
        return getName()
    }
  },
  created () {
    this.init()
  },
  methods: {
    handleEdit () {
      this.dialogVisible = true
    },
    onSubmit () {
      window.console.log('submit!')
    },
    init () {
      this.listLoading = true
      setTimeout(() => {
        this.listLoading = false
      }, 1.5 * 1000)
      let tempData1 = onsaleData.filter(item => {
        return item.hotel_name.includes(this.keyword)
      })

      let tempData2 = onsaleData.filter(item => {
        return item.phone.includes(this.keyword)
      })
      //   window.console.log('tempData2', tempData2);
      let tempData3 = onsaleData.filter(item => {
        return item.res_name.includes(this.keyword)
      })
      let tempArray = [...tempData1, ...tempData2, ...tempData3];
      var obj = {};
      tempArray = tempArray.reduce(function (item, next) {
        obj[next.org_id] ? '' : obj[next.org_id] = true && item.push(next);
        return item;
      }, []);
      this.tableData = tempArray
    },
    // 设置搜索字符的高亮
    // brightKeyword (val) {
    //   let keyword = this.keyword
    //   if (val.indexOf(keyword) !== -1) {
    //     return val.replace(keyword, `<font color='#42cccc'>${keyword}</font>`)
    //   } else {
    //     return val
    //   }
    // },
    // 搜索
    handleFilter () {

      this.init()
    },
    // 删除
    async del (index, row) {
      this.$confirm("是否确定要删除?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(async () => {
        this.$message({
          type: "success",
          message: "删除成功!"
        });
        data.onsaleData.splice(index, 1)
        this.init()
      });
    },
  }
}
</script>
<style scoped>
.button {
  width: 64px;
  height: 30px;
  text-align: center;
  line-height: 1;
  color: #515151;
  font-size: 16px;
  display: inline-block;
}
.add {
  background: #fff;
  text-align: left;
}
.add .el-button {
  margin: 20px;
  /* width: 88px; */
  height: 44px;
}

.el-dialog {
  width: 35% !important;
  padding: 0 3% !important;
  box-sizing: border-box !important;
}
.confirm .el-form-item__content {
  margin-left: 0 !important;
}
.confirm .el-form-item__content .el-button {
  margin: 0 40% !important;
}
</style>
