<template>
  <div class="Login">
    <el-row style="height:100%">
      <el-col class="login_left" :span="6" :offset="3">
        <img src="../assets/images/reyi.jpg" alt="SHEER" class="login_logoimg" />
      </el-col>
      <el-col class="login_right" :span="6" :offset="3">
        <div class="loginform">
          <h2>SHEER</h2>
          <el-input v-model="userid" placeholder="用户名" style="margin-bottom:10px"></el-input>
          <el-input v-model="userpass" placeholder="密码" show-password style="margin-bottom:10px"></el-input>
          <el-button round @click="toregister">注册</el-button>
          <el-button type="primary" round @click="handlelogin">登录</el-button>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// import axios from "axios";
// import http from "@/http.js"
export default {
  data() {
    return {
      userid: "",
      userpass: "",
      userdata:{},
    };
  },
  methods: {
    toregister() {
      this.$router.push({ path: "/register" }).catch(err=>{alert(err)});
    },
    handlelogin() {

      let loginid = this.userid;
      let loginps = this.userpass;
      let checklogin = false;
      //  var userdata = {};
      // let cuserpass = "";
      
      // // 登录验证
      // if (loginid == "" || loginps == "") {
      //   checklogin = false;
      //   alert("账号密码不得为空!!");
      // } else {
        //ajax登录请求
        // axios
        //   .get("/userTable", {
        //     params: {
        //       userId: loginid
        //     }
        //   })
        //   .then(res => {
        //     userdata = res.data.data.records[0];
        //      window.console.log(userdata);
             
        //   })
        //   .catch(error => {
        //     alert(error); //错误
        //   });

       this.$http.get("userTable",{
        userId:loginid 
        }).then(res=>{
          var userdata = res;
      var password=userdata.data.records[0].userPassword;
window.console.log(userdata);
window.console.log(password);
        if (userdata == null) {
          alert("用户未注册!!");
          window.console.log(password);
          checklogin = false;
        } else if ( password != loginps) {
         
     
          window.console.log(loginps);
          alert("用户名或密码错误");
          checklogin = false;
        } else if (loginps == password) {
          checklogin = true;
        }
      //right
      if (checklogin == true) {
        localStorage.setItem("userinfo", userdata.data.records[0]);
        this.$store.commit("userlogin", userdata.data.records[0].userName);
        setTimeout(() => {
          this.$router.push({ path: "/" });
        }, 500);
      } else {
        //wrong
        
        setTimeout(() => {
          this.$router.push("/login");
        }, 1000);
      }
        }).then();

      // }

    }
  }
};
</script>

<style scoped>
.login_left {
  padding: 0;
  text-align: center;
  height: 100vh;
}
.login_right {
  padding: 0;
  text-align: center;
  height: 100vh;
}
.login_logoimg {
  margin-top: 35vh;
}
.loginform {
  background-color: rgba(255, 255, 255, 0.411);
  border-radius: 30px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  padding: 8vh 3vh 10vh 3vh;
  width: 100%;
}
/* .loginform input{
  margin: 20px 0 10px 0;
  /* width: 340px; */
/*} */
.loginform h2 {
  margin-bottom: 50px;
  font-size: 44px;
}
.loginform button {
  margin: 0 30px 10px 30px;
  width: 50%;
}
.Login {
  display: inline-block;
  width: 100%;
}
</style>