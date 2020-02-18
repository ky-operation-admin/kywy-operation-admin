<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="130px" label-position="left">
      <el-form-item label="职位名称" prop="positionName">
        <el-input style="width:200px" v-model="form.positionName"></el-input>
      </el-form-item>
      <el-form-item label="用人部门" prop="accountid">
        <el-select v-model="form.accountid" placeholder="请选择">
          <el-option label=1 value=1></el-option>
          <el-option label=2 value=2></el-option>
          <el-option label=3 value=3></el-option>
          <el-option label=4 value=4></el-option>
          <el-option label=5 value=5></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="哪个职位" prop="positionid">
        <el-select v-model="form.positionid" placeholder="请选择">
          <el-option label=1 value=1></el-option>
          <el-option label=2 value=2></el-option>
          <el-option label=3 value=3></el-option>
          <el-option label=4 value=4></el-option>
          <el-option label=5 value=5></el-option>
        </el-select>
      </el-form-item>
      <!-- <el-form-item label="发布时间" prop="time">
            <el-date-picker v-model="form.time" type="datetime" placeholder="选择日期时间">
            </el-date-picker>
          </el-form-item> -->
      <el-form-item label="需求人数" prop="openpositionNumber">
        <el-input-number v-model="form.openpositionNumber" :min="1" :max="20" label="描述文字"></el-input-number>
      </el-form-item>
      <el-form-item label="职位有效期" prop="positionValidity">
        <el-select v-model="form.positionValidity" placeholder="请选择">
          <el-option label="一个月" value="一个月"></el-option>
          <el-option label="两个月" value="两个月"></el-option>
          <el-option label="三个月" value="三个月"></el-option>
          <el-option label="半年" value="半年"></el-option>
          <el-option label="一年" value="一年"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="最低薪资" prop="salaryTo">
        <el-select v-model="form.salaryTo" placeholder="请选择">
          <el-option label=3000 value=3000></el-option>
          <el-option label=6000 value=6000></el-option>
          <el-option label=8000 value=8000></el-option>
          <el-option label=10000 value=10000></el-option>
          <el-option label=12000 value=12000></el-option>
          <el-option label=15000 value=15000></el-option>
          <el-option label=25000 value=25000></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="最高薪资" prop="salaryFrom">
        <el-select v-model="form.salaryFrom" placeholder="请选择">
          <el-option label=3000 value=3000></el-option>
          <el-option label=6000 value=6000></el-option>
          <el-option label=8000 value=8000></el-option>
          <el-option label=10000 value=10000></el-option>
          <el-option label=12000 value=12000></el-option>
          <el-option label=15000 value=15000></el-option>
          <el-option label=25000 value=25000></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="工作地点" prop="workAddress">
        <el-select v-model="form.workAddress" placeholder="请选择">
          <el-option label="广州" value="广州"></el-option>
          <el-option label="深圳" value="深圳"></el-option>
          <el-option label="北京" value="北京"></el-option>
          <el-option label="上海" value="上海"></el-option>
          <el-option label="武汉" value="武汉"></el-option>
          <el-option label="长沙" value="长沙"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="addItem('form')">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        accountid: null,
        organizationid: null,
        positionid: null,
        openpositionNumber: null,
        positionValidity: '',
        workAddress: '',
        salaryFrom: null,
        salaryTo: null,
        positionName: ''
      },
    }
  },
  components: {

  },
  methods: {
    addItem (formName) {
      window.console.log('this.form', this.form.positionName, this.form);
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let fd = new FormData();
          window.console.log('fd', fd);
          fd.append('accountid', this.form.accountid); //账号组织表ID
          fd.append('organizationid', 1);//账号组织表ID
          fd.append('positionid', this.form.positionid);  //发布的哪个职位
          fd.append('openpositionNumber', this.form.openpositionNumber); //开放职位的数目
          fd.append('positionValidity', this.form.positionValidity);  //职位有效期
          fd.append('workAddress', this.form.workAddress);  //工作地址
          fd.append('salaryTo', this.form.salaryTo);   //薪资下限
          fd.append('salaryFrom', this.form.salaryFrom);   //薪资上限
          fd.append('positionName ', this.form.positionName);   //职位名称
          this.$instance3({
            method: "post",
            url: "/openposition/recordOpenPosition",
            data: fd
          })
            .then(res => {
              // window.console.log('222', res.data)
              console.log(res)
              if (res.data.code == 0) {
                this.$message({
                  type: "warning",
                  message: "发布失败"
                });
                return;
              }
              if (res.data.code == 1) {
                this.$message({
                  type: "success",
                  message: "发布成功!"
                });
                this.getList();
              }
            })
            .catch(err => {
              window.console.log('400', err);
            });
          //   this.listLoading = true
          //   表单重置
          // this.resetForm(formName)
          this.dialogVisible = false
          //   this.getList()
        } else {
          window.console.log('error submit!!');
          return false;
        }
      });
      this.dialogVisible = false
      window.console.log('111');
    },
  }
}
</script>

<style>
</style>
