<template>
  <div id="adv" class="app-container">
    <div class="filter-container" style="text-align:left;padding:20px">
      <el-input  placeholder="请输入需要查找的公司" style="width: 200px;margin-right: -5px;" class="filter-item" @keyup.enter.native="addItem" />
      <el-button type="primary" icon="el-icon-search"></el-button>
    </div>
    <el-row style="padding:20px">
      <el-button type="primary" plain icon='el-icon-plus' @click="dialogVisible = true">增加</el-button>
      <el-dialog title="增加" :visible.sync="dialogVisible" width="50%" :before-close="handleClose">
        <!-- <span>这是一段信息</span> -->
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="公司名称">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="广告文本">
            <el-input type="textarea" v-model="form.desc"></el-input>
          </el-form-item>
          <el-form-item label="图片上传">
            <el-upload action="https://jsonplaceholder.typicode.com/posts/" list-type="picture-card" :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
              <i class="el-icon-plus"></i>
            </el-upload>
            <el-button type="primary" size='mini'>上传</el-button>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <!-- <el-button @click="dialogVisible = false">取 消</el-button> -->
          <el-button type="primary" @click="addItem()">提交</el-button>
        </span>
      </el-dialog>
      <el-button type="primary" plain icon='el-icon-plus'>批量增加</el-button>
    </el-row>
    <el-table :data="tableData">
      <el-table-column prop="name" label="公司名称" width="260"></el-table-column>
      <el-table-column prop="text" label="广告文本"></el-table-column>
      <el-table-column prop="pic" label="广告图片" width="300">
        <template slot-scope="scope">
          <img :src="scope.row.pic" alt style="height:3rem;" />
        </template>
      </el-table-column>
      <el-table-column align="center" label="操作" width="200">
        <template slot-scope="scope">
          <el-button size="mini" type="primary" @click="dialog2Visible = true">编辑</el-button>
          <el-dialog title="编辑" :visible.sync="dialog2Visible" width="50%" :before-close="handle2Close" :modal-append-to-body="false">
            <!-- <span>这是一段信息</span> -->
            <el-form ref="form" :model="form2" label-width="80px">
              <el-form-item label="公司名称">
                <el-input v-model="form2.name"></el-input>
              </el-form-item>
              <el-form-item label="广告文本">
                <el-input type="textarea" v-model="form2.desc"></el-input>
              </el-form-item>
              <el-form-item label="图片上传">
                <el-upload action="https://jsonplaceholder.typicode.com/posts/" list-type="picture-card" :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
                  <i class="el-icon-plus"></i>
                </el-upload>
                <el-button type="primary" size='mini'>上传</el-button>
              </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
              <!-- <el-button @click="dialogVisible = false">取 消</el-button> -->
              <el-button type="primary" @click="dialog2Visible = false">提交</el-button>
            </span>
          </el-dialog>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

  </div>
</template>

<script>
export default {
  data () {
    return {
      dialogVisible: false,
      dialog2Visible: false,
      keyword: '',
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      form2: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      dialogImageUrl: '',
      tableData: [
        {
          name: '中国移动',
          text: '2016-05-02',
          pic: require('@/assets/img/100b0q000000go06f2634_C_500_280_Q80.jpg')
        }, {
          name: '中国电信有限公司',
          text: '2016-05-04',
          pic: require('@/assets/img/100b0q000000go06f2634_C_500_280_Q80.jpg')
        }, {
          name: '中国农业银行股份有限公司',
          text: '2016-05-01',
          pic: require('@/assets/img/100b0q000000go06f2634_C_500_280_Q80.jpg')
        }, {
          name: '中国烟草有限公司',
          text: '2016-05-03',
          pic: require('@/assets/img/100b0q000000go06f2634_C_500_280_Q80.jpg')
        }, {
          name: '中国烟草有限公司',
          text: '2016-05-03',
          pic: require('@/assets/img/100g190000015tys37F2F_C_160_160_Q60.jpg')
        }, {
          name: '中国烟草有限公司',
          text: '2016-05-03',
          pic: require('@/assets/img/100b0q000000go06f2634_C_500_280_Q80.jpg')
        }]
    }

  },
  components: {

  },
  methods: {
    // 删除
    async handleDelete (index, row) {
      this.$confirm("是否确定要删除" + row.name + ", 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(async () => {
        this.tableData.splice(index, 1)
        this.$message({
          type: "success",
          message: "删除成功!"
        });
      });
    },
    // 增加
    addItem () {
      let data = {
        name: Date.now(),
        text: Date.now(),
        pic: null
      }
      this.tableData.push(data)
      this.dialogVisible = false
    //   window.console.log('111');
    },
    handleClose (done) {
      done();
    },
    // 编辑
    handle2Close (done) {
      done();
    },
    // 上传
    handleRemove (file, fileList) {
      window.console.log(file, fileList);
    },
    handlePictureCardPreview (file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    handle2PictureCardPreview (file) {
      this.dialogImageUrl = file.url;
      this.dialog2Visible = true;
    }
  }

}
</script>

<style>
#adv {
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
  background: #e9eef3;
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
/* .el-header h1 a {
  display: inline-block;
  width: 100%;
  height: 100%;
  background-image: url(../assets/kywylogo.jpg);
  background-size: 100% 100%
} */
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
/* .el-dialog{
    width: 50% !important;
} */
</style>
