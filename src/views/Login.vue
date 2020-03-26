<template>
  <div class="Login">
    <el-row style="height:100%">
      <el-col class="login_left" :span="6" :offset="3">
        <img src="../assets/images/reyi.jpg" alt="SHEER" class="login_logoimg" />
      </el-col>
      <el-col class="login_right" :span="6" :offset="3">
        <div class="loginform">
          <h2 >SHEER</h2>
          <el-input v-model="username" placeholder="用户名" style="margin-bottom:10px" ></el-input>
          <el-input v-model="userpass" placeholder="密码" show-password style="margin-bottom:10px"></el-input>
          <el-button round @click="toregister">注册</el-button>
          <el-button type="primary" round @click="handlelogin">登录</el-button>
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
    },
    handlelogin(){
        
      //ajax登录请求

      //验证
      var checklogin = false;
      if(this.username!='' &&  this.userpass!='' )
      {checklogin=true}else{checklogin=false}
      
        //right
      if(checklogin==true){
        localStorage.setItem("userinfo",this.username) ;
        this.$store.commit("userlogin",this.username);
        this.$router.push({path:'/'});
      }else{
        //wrong
          alert("错误!!!")
        setTimeout(() => {
          this.$router.push('/login');
        }, 2000);
      }
    }
  }
};
</script>

<style scoped>
.login_left {
  padding: 0;
  text-align: center;
  height:100vh;
}
.login_right {
  padding:0;
  text-align: center;
  height:100vh;
}
.login_logoimg{
  margin-top: 35vh;
}
.loginform{
  background-color: rgba(255, 255, 255, 0.411);
  border-radius: 30px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  padding:8vh 3vh 10vh 3vh;
  width: 100%;
}
/* .loginform input{
  margin: 20px 0 10px 0;
  /* width: 340px; */
/*} */
.loginform h2{
  margin-bottom: 50px;
  font-size: 44px;
}
.loginform button{
  margin: 0 30px 10px 30px;
  width:50%;
}
.Login {
  
  display: inline-block;
  width: 100%;

}
</style>