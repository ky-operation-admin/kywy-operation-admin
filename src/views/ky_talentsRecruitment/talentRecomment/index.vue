<template>
  <div class="app-container resume">
    <div class="filter-container" style="text-align:left;padding-bottom:20px">
      <el-form ref="form" label-width="120px">
        <el-row :gutter="10">
          <el-col :span="6">
            <el-form-item label="需求方">
              <el-input clearable></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="需求职位">
              <el-input clearable></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="需求人数">
              <el-input clearable></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="10">
          <el-col :span="6">
            <el-form-item label="学历要求">
              <el-input clearable></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="性别要求">
             <el-input clearable></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="年龄要求">
              <el-input clearable></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-button type="primary" style="margin-left:80px;">查询</el-button>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <el-table :data="tableData" border style="width: 100%;" id="resume_table">
      <el-table-column label="需求方" align="center" prop="dimendSide"></el-table-column>
      <el-table-column label="需求职位" align="center" prop="needPosition">
      </el-table-column>
      <el-table-column label="需求人数" align="center" prop="needNum">
      </el-table-column>
      <el-table-column label="性别要求" align="center" prop="needSix">
      </el-table-column>
      <el-table-column label="学历要求" align="center" prop="needEdu">
      </el-table-column>
      <el-table-column label="工作经验要求" align="center" prop="needWork">
      </el-table-column>
      <el-table-column label="技能要求" align="center" prop="SkillsReq">
      </el-table-column>
      <el-table-column label="年龄要求" align="center" prop="ageReq">
      </el-table-column>
      <el-table-column label="其他要求" align="center" prop="otherReq">
      </el-table-column>
      <el-table-column label="岗位职责" align="center" prop="positionStatement">
      </el-table-column>
      <el-table-column label="操作" align="center" width="300px">
        <el-button size="small" type="success" @click="toAuto()">自动推荐</el-button>
        <el-button size="small" type="success" @click="toMann()">手工推荐</el-button>
      </el-table-column>
    </el-table>

  </div>
</template>

<script>

import { deepClone } from '@/utils'
import data from '@/assets/js/mock'
export default {
  data () {
    return {
      tableData: []
    }
  },
  mounted () {
    this.tableData = data.headhunterRec
  },
  methods: {
    //   跳到自动推荐
    toAuto () {
      this.$router.push({ path: '/talentMan/autoReconmment' })
    },
    //   跳到手动推荐
    toMann () {
      this.$router.push({ path: '/talentMan/mannReconmment' })
    },
  }
}
</script>

<style scoped>
.el-dialog--center .contentRow {
  border-bottom: 1px solid #ccc;
}
.el-tag {
  padding: 0;
}
.resumeContent p,
.resumeContent h4 {
  margin-bottom: 20px;
}
.info_label {
  text-align: left;
}
.info_label[data-v-08685e00] {
  margin-bottom: 0px;
}
</style>
