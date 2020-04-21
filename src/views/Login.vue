<template>
  <div class="Login">
    <el-row style="height:100%">
      <el-col class="login_left" :span="6" :offset="3">
        <img src="../assets/images/logo2ba.png" alt="SHEER" class="login_logoimg" />
      </el-col>
      <el-col class="login_right" :span="6" :offset="5">
        <div class="loginform">
          <h2>登录</h2>
          <el-form>
            <el-form-item>
              <el-input clearable v-model="userid" placeholder="用户名"></el-input>
            </el-form-item>
            <el-form-item>
              <el-input clearable v-model="userpass" placeholder="密码" show-password></el-input>
            </el-form-item>
            <el-button round @click="toregister">注册</el-button>
            <el-button type="primary" round @click="handlelogin">登录</el-button>
          </el-form>
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
      userdata: {}
    };
  },
  methods: {
    toregister() {
      this.$router.push({ path: "/register" }).catch(err => {
        alert(err);
      });
    },
    handlelogin() {
      let loginid = this.userid;
      let loginps = this.userpass;
      let checklogin = false;

      // 登录验证
      if (loginid == "" || loginps == "") {
        checklogin = false;
        this.$message("用户名或密码不得为空");
      } else {
        //ajax登录请求
        this.$axios
          .get(
            "/userTable",
            {
              params: {
                userId: loginid
              }
            },
            { "emulateJSON": "true", "Content-Type": "application/json" }
          )
          .then(res => {
            var userdata = res.data;
            var password = userdata.data.records[0].userPassword;
            var userinfo = res.data.data.records[0];
            // window.console.log(userdata.data);
            window.console.log(userinfo);
            if (userdata == null) {
              //返回为空提示用户未注册
              checklogin = false;
              this.$alert("用户未注册", "登录失败", {
                confirmButtonText: "确定"
              });
         
            } else if (password != loginps) {
              //用户密码错误
              checklogin = false;
              this.$message("用户名或密码错误");
              // window.console.log(loginps);
              checklogin = false;
            } else if (loginps == password) {
              // 登录成功
              checklogin = true;
            }
            //right
            if (checklogin == true) {
              localStorage.setItem("userinfoid", userinfo.userId);
              localStorage.setItem("userinfoname", userinfo.userName);
              localStorage.setItem("userinfosex", userinfo.userSex);
              localStorage.setItem("userinfostatus", userinfo.userStatus);
              localStorage.setItem("userinfophone", userinfo.userPhone);
              localStorage.setItem("userinfomatto", userinfo.userMatto);
              localStorage.setItem("userinfoavatar", userinfo.userAvatar);
              //状态设为已登录
              this.$store.commit(
                "userlogin",
                userdata.data.records[0].userName
              );
              if(userinfo.userStatus==0){
                //若被封停，则提示
                this.$alert("您的账号已被封停，部分功能将受限制！","警告！！",{
                  comfirmButtomText:"确定",
                })
              }else{
                this.$message("登录成功");
              }
              setTimeout(() => {
                this.$router.push({ path: "/" });
              }, 2000);
            } else {
              //登录失败
              this.$message("登录失败");
            }
          })
          .catch(error => {
            alert(error); //错误
          });
      }

    }
  }
};
</script>

<style scoped>
.login_left {
  padding: 0;
  text-align: center;
  height: 93vh;
}
.login_right {
  padding: 0;
  text-align: center;
  height: 93vh;
}
.login_logoimg {
  margin-top: 22vh;
}
.loginform {
  background-color: rgba(255, 255, 255, 0.411);
  border-radius: 30px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  padding: 20px;
  width: 100%;
}
/* .loginform input{
  margin: 20px 0 10px 0;
  /* width: 340px; */
/*} */
.loginform h2 {
  margin-bottom: 30px;
  font-size: 34px;
}
.loginform button {
  margin: 0 30px 10px 30px;
  width: 30%;
}
.Login {
  display: inline-block;
  width: 100%;
  height: 93vh;
  /* background: rgb(163, 119, 223);
  background: -moz-linear-gradient(
    270deg,
    rgb(163, 119, 223) 6%,
    rgb(254, 60, 78) 90%
  );
  background: -webkit-linear-gradient(
    270deg,
    rgb(163, 119, 223) 6%,
    rgb(254, 60, 78) 90%
  );
  background: -o-linear-gradient(
    270deg,
    rgb(163, 119, 223) 6%,
    rgb(254, 60, 78) 90%
  );
  background: -ms-linear-gradient(
    270deg,
    rgb(163, 119, 223) 6%,
    rgb(254, 60, 78) 90%
  );
  background: linear-gradient(
    0deg,
    rgb(163, 119, 223) 6%,
    rgb(254, 60, 78) 90%
  ); */
}
</style>