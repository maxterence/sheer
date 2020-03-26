<template>

    <div >
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
       window.console.log("startlogin");
      // let data = {
      //   username: this.username,
      //   userpass: this.userpass
      // };
      if (this.username == "" || this.userpass == "") {
        alert("请输入用户名/密码！");
      } else {
        this.$store.commit("mnglogin",this.username);
        setTimeout(() => {
          this.$router.push({path:'/managesys/showdetail'})
        }, 2000);
       
       // axios.post("/mnglogin", data, {
        //     header: { "Content-Type": "application/json" }
        //   })
        //   .then(res => {
        //      window.console.log(res);
        //   });
      }
    }
  }
};
</script>

<style>
  .loginform{
    padding:40px 20px 40px 20px ;
    background-color: white;
    text-align: center;
    margin-top: 25vh;
  border-radius: 10px;
   box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
  }
  .loginform input{
    margin-bottom: 1px;
  }

</style>