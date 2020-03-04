<template>
  <div class="app-container">
    <searchForm :formOptions="formOptions" @onSearch="onSearch" />
    <!--表格内容栏-->
    <el-table
      :data="list"
      :key="tableKey"
      fit
      highlight-current-row
      max-height="600"
      style="width: 100%;"
      v-loading="listLoading"
    >
      <el-table-column align="center" label="用户ID" min-width="80" prop="phone" sortable>
        <template slot-scope="scope">
          <span>{{ scope.row.phone }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="姓名" min-width="80px">
        <template slot-scope="scope">
          <span>{{ scope.row.userID }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="性别" min-width="100px">
        <template slot-scope="scope">
          <span>{{ scope.row.gender }}</span>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        class-name="status-col"
        label="年龄"
        min-width="100"
        prop="age"
        sortable
      >
        <template slot-scope="scope">
          <span>{{ scope.row.age }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="注册时间" min-width="100px" prop="createTime" sortable>
        <template slot-scope="scope">
          <span>{{dateFormat(scope.row.createTime)}}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="注册终端" min-width="100px" prop="terminal" sortable>
        <template slot-scope="scope">
          <span>{{ scope.row.terminal }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="注册来源" min-width="100px" prop="source" sortable>
        <template slot-scope="scope">
          <span>{{ scope.row.source }}</span>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        class-name="status-col"
        label="实名认证"
        min-width="100"
        prop="ifHot"
        sortable
      >
        <template slot-scope="{row}">
          <el-tag :type="row.ifHot =='1'? 'success':'info'">
            <!-- <svg-icon
              icon-class="hot"
              v-if="row.ifHot=='1'"
            />-->
            {{ row.ifHot=='1'?'已认证':'未认证' }}
          </el-tag>
        </template>
      </el-table-column>

      <el-table-column align="center" label="IP地址" min-width="100px" prop="ip" sortable>
        <template slot-scope="scope">
          <span>{{ scope.row.ip }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="头像" min-width="100px" prop="ip" sortable >
        <template slot-scope="scope">
          <span>{{ scope.row.ip }}</span>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        class-name="status-col"
        label="用户状态"
        min-width="100"
        prop="status"
        sortable
      >
        <template slot-scope="{row}">
          <el-tag :type="row.status =='1'? 'success':'danger'">{{ row.status=='1'?'正常':'封禁' }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        class-name="small-padding fixed-width"
        label="操作"
        min-width="150"
      >
        <template slot-scope="{row}">
          <el-button
            @click="handleModifyStatus(row,'1')"
            size="mini"
            type="success"
            v-if="row.status!='1'"
          >解封</el-button>
          <el-button @click="handleModifyStatus(row,'2')" size="mini" type="danger" v-else>封禁</el-button>
          <el-button size="mini" type="info">查看</el-button>
        </template>
      </el-table-column>
    </el-table>
    <pagination
      :limit.sync="listQuery.limit"
      :page.sync="listQuery.page"
      :total="total"
      @pagination="getList"
      v-show="total>0"
    />
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
import Pagination from "@/components/Pagination";
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
          label: "性别",
          prop: "ifHot",
          element: "el-select",
          options: [
            { label: "男", value: "1" },
            { label: "女", value: "2" }
          ]
        },
        {
          label: "年龄",
          prop: "project",
          element: "el-select",
          options: [
            { label: "12-22", value: "12-22" },
            { label: "23-35", value: "23-35" },
            { label: "35-60", value: "35-60" },
            { label: "60以上", value: "60以上" }
          ]
        },

        {
          label: "注册时间",
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
        project: undefined,
        ifHot: undefined,
        createTime: undefined
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
    this.getList();
  },
  methods: {
    //   搜索
    onSearch(val) {
      console.log(val);
      this.listQuery.page = 1;
      this.listQuery.value = val.value;
      this.listQuery.project = val.project;
      this.listQuery.ifHot = val.ifHot;
      this.listQuery.createTime = val.createTime;
      this.getList();
    },
    // 获取分页数据
    getList() {
      this.listLoading = true;
      fetchList(this.listQuery).then(response => {
        this.list = response.data.items;
        this.total = response.data.total;
        console.log("666", response.data.items);

        // Just to simulate the time of the request
        setTimeout(() => {
          this.listLoading = false;
        }, 1.5 * 1000);
      });
    },
    // 切换热门和非热门状态
    handleModifyStatus(row, ifHot) {
      this.$message({
        message: "操作成功",
        type: "success"
      });
      row.ifHot = ifHot;
    },
    // 时间格式化
    dateFormat(row) {
      return parseTime(row);
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
