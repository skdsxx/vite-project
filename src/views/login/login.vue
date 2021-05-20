<template>
  <div class="login-bac">
    <el-row>
      <img src="../../assets/logo.png" />
    </el-row>
    <el-row>
      <div class="flag">Login</div>
    </el-row>
    <el-row class="accountBox">
      <el-col :span="3"></el-col>
      <el-col :span="18"><el-input v-model="account" placeholder="账号" clearable></el-input></el-col>
      <el-col :span="3"></el-col>
    </el-row>
    <el-row class="passwordBox">
      <el-col :span="3"></el-col>
      <el-col :span="18">
          <el-input
          v-model="password"
          placeholder="密码"
          show-password></el-input></el-col>
      <el-col :span="3"></el-col>
    </el-row>
    <el-row class="password">
      <el-button type="primary" class="submit" @click="OnLogin">登录</el-button>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      account: "",
      password: ""
    };
  },
  methods: {
      OnLogin() {
        this.$router.push({ path: '/home' });
    }
  },
};
</script>

<style>
.login-bac{
  border-style:solid;
  border-width:1px;
  border-block-color: #444444;
  width: 400px;
  height: 500px;
  /* 居中设置 */
  position: absolute;
   top: 0;
   bottom: 0;
   left: 0;
   right: 0;
   margin: auto;

   /* 阴影设置 */
   box-shadow: 2px 2px 8px #333333;
}
img {
  margin-top: 50px;
  width: 40px;
  height: 40px;
  margin-left: auto;
  margin-right: auto;
}
.flag {
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
  font: 5em sans-serif;
  margin: auto;
  text-shadow: 2px 2px 6px #111111;
}
.accountBox {
  display: block;
  margin-top: 40px;
}
.passwordBox {
  display: block;
  margin-top: 20px;
}
.el-button.submit {
  width: 150px;
  margin-top:20px;
  margin-left: auto;
  margin-right:auto;
}
</style>
