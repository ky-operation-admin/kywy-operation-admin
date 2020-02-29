<template>
  <div class="app-container">
    <searchForm
      :formOptions="formOptions"
      @onSearch="onSearch"
    />
    <!--表格内容栏-->
        <el-table
      :key="tableKey"
      max-height="600"
      v-loading="listLoading"
      :data="list"
      fit
      highlight-current-row
      style="width: 100%;"
    >
      <el-table-column label="序号" prop="id"  sortable align="center" min-width="80" >
        <template slot-scope="scope">
          <span>{{ scope.row.id }}</span>
        </template>
      </el-table-column>
      <el-table-column label="用户ID"   min-width="80px" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.userID }}</span>
        </template>
      </el-table-column>
      <el-table-column label="搜索时间" prop="createTime"  sortable min-width="100px" align="center">
        <template slot-scope="scope">
          <span>{{dateFormat(scope.row.createTime)}}</span>
        </template>
      </el-table-column>
      <el-table-column label="所属项目" prop="project" sortable min-width="100px" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.project }}</span>
        </template>
      </el-table-column>
      <el-table-column label="搜索关键字"  min-width="100px" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.value }}</span>
        </template>
      </el-table-column>
      <el-table-column label="是否热门" prop="ifHot" sortable class-name="status-col" min-width="100" align="center">
        <template slot-scope="{row}">
          <el-tag :type="row.ifHot =='1'? 'danger':'info'">
            <svg-icon v-if="row.ifHot=='1'" icon-class='hot'/>
            {{ row.ifHot=='1'?'热门':'非热门' }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column label="IP地址" prop="ip" sortable min-width="100px" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.ip }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center" min-width="100" class-name="small-padding fixed-width">
        <template slot-scope="{row}">
          <el-button v-if="row.ifHot!='1'" size="mini" type="success" @click="handleModifyStatus(row,'1')">
            标记热门
          </el-button>
          <el-button v-else size="mini" type="danger" @click="handleModifyStatus(row,'2')">
            取消热门
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="getList" />
  </div>
</template>
<script>
// 用户管理
import { deepClone, parseTime } from "@/utils";
import {
  fetchList,
  fetchPv,
  createArticle,
  updateArticle
} from "@/api/searchHistory";
import KyTable from "@/components/Core/KyTable";
import searchForm from "@/components/SearchForm";
import Pagination from '@/components/Pagination'
export default {
  data() {
    return {
      formOptions: [
        {
          label: "搜索内容",
          prop: "value",
          element: "el-input"
        },
        {
          label: "所属项目",
          prop: "project",
          element: "el-select",
          options: [
            { label: "养老机构", value: "养老机构" },
            { label: "寻医问药", value: "寻医问药" },
            { label: "居家护理", value: "居家护理" },
            { label: "人才招聘", value: "人才招聘" }
          ]
        },
        {
          label: "是否热门",
          prop: "ifHot",
          element: "el-select",
          options: [
            { label: "是", value: '1' },
            { label: "否", value: '2' }
          ]
        },

        {
          label: "提交时间",
          prop: "createTime",
          element: "el-date-picker"
        }
      ],
      tableKey: 0,
      list: null,
      total: 0,
      listLoading: true,
      listQuery: { 
          page: 1, 
          limit: 20,
          value: undefined,
          project:undefined,
          ifHot:undefined,
          createTime:undefined
          },
      pageResult: {}
    };
  },
  components: {
    searchForm,
    KyTable,
    Pagination
  },
  created() {
      this.getList()
  },
  methods: {
    //   搜索
    onSearch(val) {
      console.log(val);
      this.listQuery.page = 1
      this.listQuery.value = val.value
      this.listQuery.project = val.project
      this.listQuery.ifHot = val.ifHot
      this.listQuery.createTime = val.createTime
      this.getList()
    },
    // 获取分页数据
      getList() {
      this.listLoading = true
      fetchList(this.listQuery).then(response => {
        this.list = response.data.items
        this.total = response.data.total
        console.log('666',response.data.items);
        
        // Just to simulate the time of the request
        setTimeout(() => {
          this.listLoading = false
        }, 1.5 * 1000)
      })
    },
    // 切换热门和非热门状态
    handleModifyStatus(row, ifHot) {
      this.$message({
        message: '操作成功',
        type: 'success'
      })
      row.ifHot = ifHot
    },
    // 时间格式化
      	dateFormat(row){
          	return parseTime(row)
      	}
  }
};
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
.el-table td .el-input {
  width: 200px;
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
