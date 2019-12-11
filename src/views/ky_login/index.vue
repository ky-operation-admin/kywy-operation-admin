<template>
  <!-- <div class="login-container" style="overflow:hidden">
    <div class="m-logo">
      <a href="http://localhost:8080/home" class="logo">
        <i class="u-icon-CorpLogo3"></i>
      </a>
    </div>
    <el-card header="请登录" class="login-card">
      <el-form 
        ref="loginForm"
        :model="loginForm"
        :rules="loginRules"
        label-position="left"
        auto-complete="on"
      style="text-align:center">
        <el-form-item label="用户名" prop="username">
          <el-input 
          ref="username"
          v-model="loginForm.username"
          name="username"
          placeholder="请输入用户名" 
          type="text"
          tabindex="1"
          auto-complete="on"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input 
          :key="passwordType"
          ref="password"
          name="password"
          tabindex="2"
          auto-complete="on"
          @keyup.enter.native="login"
          placeholder="请输入密码" 
          show-password 
          v-model="loginForm.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click.native.prevent="login">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div> -->
  <div class="login-container" style="overflow:hidden">
    <div class="m-logo">
    </div>
    <div class="login_main">
      <p style="text-align:center;font-size:28px;color:#fff;">欢迎登录
        <span style="color:#FFD800;font-size:36px">康养无忧</span>
        运营后台
      </p>
      <el-card header="请登录" class="login-card">
        <el-form ref="loginForm" :model="loginForm" :rules="loginRules" label-position="left" auto-complete="on" style="text-align:center">
          <el-form-item label="用户名" prop="username">
            <el-input ref="username" v-model="loginForm.username" name="username" placeholder="请输入用户名" type="text" tabindex="1" auto-complete="on"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input :key="passwordType" ref="password" name="password" tabindex="2" auto-complete="on" @keyup.enter.native="login" placeholder="请输入密码" show-password v-model="loginForm.password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click.native.prevent="login">登录</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </div>
  </div>
</template>

<script type="text/javascript">
import { validUsername } from '@/utils/validate'
// import state from '@store'
export default {
  name: 'Login',
  data () {
    const validateUsername = (rule, value, callback) => {
      if (!validUsername(value)) {
        callback(new Error('请输入正确的账号'))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (!value) {
        callback(new Error('密码不能为空'))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        username: '',
        password: ''
      },
      loginRules: {
        username: [{ required: true, trigger: 'blur', validator: validateUsername }],
        password: [{ required: true, trigger: 'blur', validator: validatePassword }]
      },
      loading: false,
      passwordType: 'password',
      redirect: undefined
    };
  },
  //  监听页面的路径
  watch: {
    $route: {
      handler: function (route) {
        this.redirect = route.query && route.query.redirect
      },
      immediate: true
    }
  },
  methods: {
    login () {
      //  不使用封装的axios
      //   let that = this
      //   let fd = new FormData();
      //   fd.append('account', this.loginForm.username);
      //   fd.append('password', this.loginForm.password);
      //   window.console.log('fd', fd, this.loginForm);
      //   this.$refs.loginForm.validate(valid => {
      //     if (valid) {
      //     this.loading = true
      //  this.$axios.post('http://120.25.214.5:8081/web/loginByAccount', fd, {
      //   })
      //     .then(res => {
      //       this.loading = true
      //       window.console.log('res', res);
      //       if (res.data.code == 0) {
      //         this.$message({
      //           type: "warning",
      //           message: "登陆失败!账号或密码错误"
      //         });
      //         return;
      //       }
      //       if (res.data.code == 1) {
      //         this.$message({
      //           type: "success",
      //           message: "登陆成功!"
      //         });
      //         // 用户账号信息存入本地
      //         this.$store.commit('setuserItem',this.loginForm.username)
      //         // 路由跳转
      //         this.$router.push({ path: this.redirect || '/' })
      //         this.loading = false

      //       }
      //     })
      //     .catch(function (err) {
      //       window.console.log(err);
      //     });
      //     } else {
      //       console.log('error submit!!')
      //       return false
      //     }
      //   })
      // 使用封装好的方法
      window.console.log('6666');

      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          this.$store.dispatch('user/login', this.loginForm).then(() => {
            this.$router.push({ path: this.redirect || '/' })
            // console.log('redirect',this.redirect)
            this.loading = false
          }).catch(() => {
            //  console.log('redirect',this.redirect) 
            this.loading = false
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
};
</script>

<style lang='scss' scoped>
.m-logo {
  clear: both;
  overflow: hidden;
  margin-bottom: 25px;
  .logo {
    margin-top: 20px;
    margin-left: 20px;
    float: left;
    display: inline-block;
  }
}
.u-icon-CorpLogo3 {
  display: inline-block;
  width: 132px;
  height: 84px;
  background: no-repeat;
  background-image: url(~@/assets/kywylogo.jpg);
  background-size: 100% 100%;
}
.login-card {
  width: 30rem;
  margin: 1rem auto;
}
.login-card .el-input input {
  color: black;
}
.login-container {
  width: 100%;
  height: 100%;
  position: relative;
  background-image: url(~@/assets/bg2.png);
  background-size: 111% 100%;
  background-position: center;
}
.m-logo {
  clear: both;
  overflow: hidden;
  margin-bottom: 25px;
  height: 46%;
  //   background-color: #1d94e7;
  background-image: url(~@/assets/logo@2x.png);
  background-repeat: no-repeat;
  background-position: 7% 20%;
  background-size: 84px 94px;
}
.login_main {
  width: 30rem;
  position: absolute;
  top: 50%;
  left: 73%;
  transform: translate(-50%, -75%);
}

// --------------------------------
.login_top {
  height: 46%;
  width: 100%;
  //   background: #1d94e7;
}
</style>
