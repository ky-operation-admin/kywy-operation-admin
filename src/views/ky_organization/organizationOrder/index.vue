<template>
  <div class="app-container">
    <div class="title" style="text-align:left;padding:20px">
      <el-input v-model="keyword" placeholder="请输入机构名称/电话/法人姓名" style="width: 300px;margin-right:-10px;" clearable class="filter-item" @keyup.enter.native="handleFilter" />
      <el-button class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">
        查询
      </el-button>
    </div>
    <el-table :data="tableData" style="width: 100%" border v-loading="listLoading">

      <el-table-column prop="org_name" label="机构名称" align="center"></el-table-column>
      <el-table-column prop="res_name" label="上架人" align="center"></el-table-column>
      <el-table-column prop="orderTime" label="时间" align="center"></el-table-column>
      <el-table-column prop="roomtype" label="床位" align="center"></el-table-column>
      <el-table-column align="center" label="操作" width="200">
        <template slot-scope="scope">
          <el-button v-if="scope.row.order_state" size="mini" type="danger" @click="steppass(scope.row)">下架</el-button>
          <el-button v-else size="mini" type="success" @click="putaway(scope.$index)">上架</el-button>
          <el-dialog title="下架" :visible.sync="dialogVisible" width="50%" :before-close="handleClose" :modal-append-to-body="false">
            <el-form ref="form" :model="form" label-width="120px">
              <el-form-item label="下架理由">
                <el-input v-model="form.content"></el-input>
              </el-form-item>
              <el-form-item label="上传截图">
                <el-upload action="https://jsonplaceholder.typicode.com/posts/" list-type="picture-card" :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
                  <i class="el-icon-plus"></i>
                </el-upload>
              </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
              <el-button type="primary" @click="soldOut()">提交</el-button>
            </span>
          </el-dialog>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import data from '@/assets/js/mock'
let onsaleData = data.onsaleData
import { deepClone } from '@/utils'
const defaultForm = {
  org_id: '',
  content: '',
  img: ''
}
export default {
  data () {
    return {
      dialogVisible: false,
      listLoading: true,
      tableData: [],
      keyword: '',
      form: {
        org_id: '',
        content: '',
        img: ''
      },
      form2: Object.assign({}, defaultForm),
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
        return item.org_name.includes(this.keyword)
      })

      let tempData2 = onsaleData.filter(item => {
        return item.phone.includes(this.keyword)
      })
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

    // 搜索
    handleFilter () {
      this.init()
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
    //下架弹窗
    steppass (idx) {
      this.dialogVisible = true;
      this.form2 = deepClone(idx)
    },
    // 下架
    async soldOut () {
      for (const v of this.tableData) {
        for (let index = 0; index < this.tableData.length; index++) {
          if (this.tableData[index].org_id === this.form2.org_id) {
            this.tableData[index].order_state = 0
            break
          }
        }
      }
      this.$message({
        type: "success",
        message: "下架成功!"
      });
      this.dialogVisible = false
      this.init()
    },
    async putaway (index) {
      this.$confirm("确定要恢复上架?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "success"
      }).then(async () => {
        this.$message({
          type: "success",
          message: "恢复上架成功!"
        });
        this.dialogVisible = false
        data.onsaleData[index].order_state = 1;
        this.init()
      });
    }
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
