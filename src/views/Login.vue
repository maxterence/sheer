<template>
  <div class="Login">
    <el-row style="height:100%">
      <el-col class="login_left" :span="6" :offset="3">
        <img src="../assets/images/reyi.jpg" alt="SHEER" class="login_logoimg" />
      </el-col>
      <el-col class="login_right" :span="6" :offset="3">
        <div class="loginform">
          <h2 >SHEER</h2>
          <el-input v-model="username" placeholder="用户名" ></el-input>
          <el-input v-model="userpass" placeholder="密码" show-password></el-input>
          <el-button round @click="toregister">注册</el-button>
          <el-button type="primary" round>登录</el-button>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      userpass: ""
    };
  },
  methods:{
    toregister(){
      this.$router.push({path:'/register'});
    }
  }
};
</script>

<style scoped>
.login_left {
  padding: 15% 0;
  text-align: center;
}
.login_right {
  padding: 10% 0;
  text-align: center;
}
.loginform{
  background-color: rgba(255, 255, 255, 0.411);
  border-radius: 30px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  padding:10vh 10vh  15vh 10vh;
  width: 100%;
}
.loginform input{
  margin: 20px 0 10px 0;
  /* width: 340px; */
}
.loginform h2{
  margin-bottom: 50px;
  font-size: 44px;
}
.loginform button{
  margin: 10px 30px;
}
.Login {
  /* float: left; */
  display: inline-block;
  width: 100%;
  /* background-color: rgba(219, 103, 36, 0.932) */
  background-image: url("../assets/images/oranges.jpg");
  background-size:cover;
}
</style>