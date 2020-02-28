<template>
  <div class="search-form-box">
    <el-form :model="formData" ref="formRef" :inline="true">
      <el-form-item v-for="(item, index) in formOptions" :key="newKeys[index]" :prop="item.prop" :label="item.label ? (item.label + '：') : ''" :rules="item.rules">
        <formItem v-model="formData[item.prop]" :itemOptions="item" />
      </el-form-item>
    </el-form>

    <!-- 提交按钮 -->
    <div class="btn-box">
      <el-button v-if="btnItems.includes('search')" size="mini" type="primary" class="btn-search" icon="el-icon-search" @click="onSearch">搜索</el-button>

      <el-button v-if="btnItems.includes('export')" size="mini" type="primary" class="btn-export" @click="onExport">导出</el-button>

      <el-button v-if="btnItems.includes('reset')" size="mini" type="default" class="btn-reset" @click="onReset">重置</el-button>
    </div>
  </div>
</template>
 
<script>
import formItem from './formItem'
import { createUniqueString } from '@/utils/tools'

export default {
  props: {
    /**
     * 表单配置
     * 示例：
     * [{
     * label: '用户名', // label文字
     * prop: 'username', // 字段名
     * element: 'el-input', // 指定elementui组件
     * initValue: '阿黄', // 字段初始值
     * placeholder: '请输入用户名', // elementui组件属性
     * rules: [{ required: true, message: '必填项', trigger: 'blur' }], // elementui组件属性
     * events: { // elementui组件方法
     *  input (val) {
     *  console.log(val)
     *  },
     *  ...... // 可添加任意elementui组件支持的方法
     * }
     * ...... // 可添加任意elementui组件支持的属性
     * }]
     */
    formOptions: {
      type: Array,
      required: true,
      default () {
        return []
      }
    },
    // 提交按钮项，多个用逗号分隔（query, export, reset）
    btnItems: {
      type: String,
      default () {
        return 'search'
      }
    }
  },

  data () {
    return {
      formData: {}
    }
  },

  computed: {
    newKeys () {
      return this.formOptions.map(v => {
        return createUniqueString()
      })
    }
  },

  created () {
    this.addInitValue()
  },

  methods: {
    // 校验
    onValidate (callback) {
      this.$refs.formRef.validate(valid => {
        if (valid) {
          console.log('提交成功')
          console.log(this.formData)
          callback()
        }
      })
    },
    // 搜索
    onSearch () {
      this.onValidate(() => {
        this.$emit('onSearch', this.formData)
      })
    },
    // 导出
    onExport () {
      this.onValidate(() => {
        this.$emit('onExport', this.formData)
      })
    },
    onReset () {
      this.$refs.formRef.resetFields()
    },
    // 添加初始值
    addInitValue () {
      const obj = {}
      this.formOptions.forEach(v => {
        if (v.initValue !== undefined) {
          obj[v.prop] = v.initValue
        }
      })
      this.formData = obj
    }
  },

  components: { formItem }
}
</script>
 
<style lang='less' scoped>
.search-form-box {
  display: flex;
  margin-bottom: 15px;

  .btn-box {
    padding-top: 5px;
    display: flex;

    button {
      height: 28px;
    }
  }
  .el-form {
    /deep/ .el-form-item__label {
      padding-right: 0;
    }
    .el-form-item {
      margin-bottom: 0;

      &.is-error {
        margin-bottom: 22px;
      }
    }
    // el-input宽度
    /deep/ .form-item {
      > .el-input:not(.el-date-editor) {
        width: 120px;
      }
    }
    /deep/ .el-select {
      width: 120px;
    }
    /deep/ .el-cascader {
      width: 200px;
    }
  }
}
</style>