<template>
  <div>
    <el-row style="height:80%">
      <el-col :span="6" :offset="9">
        <div class="loginform">
          <h1 style="margin-bottom:30px">后台管理系统</h1>
          <el-form>
            <el-form-item>
              <el-input v-model="username" placeholder="用户名"></el-input>
            </el-form-item>
            <el-form-item>
              <el-input v-model="userpass" placeholder="密码" show-password></el-input>
            </el-form-item>
            <el-button type="primary" round @click="handlelogin">登录</el-button>
          </el-form>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
//  import axios from "axios";
var formdata = new FormData();
formdata;
export default {
  data() {
    return {
      username: "",
      userpass: ""
    };
  },
  mounted() {
    window.console.log("sfasdfa");
  },
  methods: {
    handlelogin() {
      let that = this;
      let uname = that.username;
        let uspass = that.userpass;
      window.console.log("startlogin");
      // let data = {
      //   username: this.username,
      //   userpass: this.userpass
      // };
      if (that.username == "" || that.userpass == "") {
        that.$alert("请输入用户名/密码！", "请输入用户名/密码", {
          confirmButtonText: "确定"
        });
      } else {
        that.$axios
          .get(
            "/adminTable",
            {
              params:{adminId: uname}
            },
            {
             " emulateJSON": "true",
              "Content-Type": "application/json"
            }
          )
          .then(res => {
            let pass = res.data.data.records[0].adminPassword;
            if (uspass == pass) {
              that.$message("登录成功");
              that.$store.commit("mnglogin", that.username);
              localStorage.setItem("adminId",res.data.data.records[0].adminId);
              localStorage.setItem("adminName",res.data.data.records[0].adminName);
              setTimeout(() => {
                that.$router.push({ path: "/managesys/showdetail" });
              }, 1000);
            } else {
              that.$alert("请重新登录","错误",{
                confirmButtonText: "确定"
              })
            }
          })
          .catch(res => {
            window.console.log(res);
          });
        
      }
    }
  }
};
</script>

<style>
.loginform {
  padding: 40px 20px 40px 20px;
  background-color: white;
  text-align: center;
  margin-top: 25vh;
  border-radius: 10px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.loginform input {
  margin-bottom: 1px;
}
</style>