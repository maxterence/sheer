<template>
  <div>
    <el-row>
      <el-col :span="8" :offset="8">
        <div class="register">
          <h1 style="text-align:center">注册</h1>
          <el-form
            :model="newuser"
            status-icon
            :rules="rules"
            ref="newuser"
            label-width="100px"
            class="demo-ruleForm"
          >
            <div style="margin:20px 0 30px 60px;">
              <img style="width:60px;margin-right:20px" :src="newuser.imgsrc" />
              <button primary @click.prevent="selectavatar=true">更改头像</button>
            </div>
            <el-dialog top="200px" title="选择头像" :visible.sync="selectavatar" style="height:600px">
              <ul style="list-style:none;" class="avaimgs">
                <li @click="newuser.imgsrc=require('../assets/images/head/head1_1.png')">
                  <img src="../assets/images/head/head1_1.png" />
                </li>
                <li @click="newuser.imgsrc=require('../assets/images/head/head1_2.png')">
                  <img src="../assets/images/head/head1_2.png" />
                </li>
                <li @click="newuser.imgsrc=require('../assets/images/head/head1_3.png')">
                  <img src="../assets/images/head/head1_3.png" />
                </li>
                <li @click="newuser.imgsrc=require('../assets/images/head/head2_1.png')">
                  <img src="../assets/images/head/head2_1.png" />
                </li>
                <li @click="newuser.imgsrc=require('../assets/images/head/head2_2.png')">
                  <img src="../assets/images/head/head2_2.png" />
                </li>
                <li @click="newuser.imgsrc=require('../assets/images/head/head2_3.png')">
                  <img src="../assets/images/head/head2_3.png" />
                </li>
              </ul>
            </el-dialog>
            <el-form-item label="手机号/ID" style="width:70%" prop="userid">
              <el-input v-model="newuser.userid" placeholder="手机号即登录ID"></el-input>
            </el-form-item>
            <el-form-item label="昵称" style="width:70%">
              <el-input v-model="newuser.username" placeholder="昵称"></el-input>
            </el-form-item>
            <el-form-item label="*密码" prop="password" style="width:70%">
              <el-input type="password" v-model="newuser.password" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="*确认密码" prop="cpassword" style="width:70%">
              <el-input type="password" v-model="newuser.cpassword" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="性别" style="width:70%">
              <el-radio v-model="newuser.sex" label="1">男</el-radio>
             <el-radio v-model="newuser.sex" label="0">女</el-radio>
              <!-- <el-select v-model="newuser.sex" placeholder="请选择性别">
                <el-option label="男" value="1"></el-option>
                <el-option label="女" value="0"></el-option>
              </el-select> -->
            </el-form-item>
            <el-form-item label="个性签名">
              <el-input type="textarea" v-model="newuser.matto" style="width: 80%;"></el-input>
            </el-form-item>
            <!-- <el-form-item label="生日">
              <el-col :span="11">
                <el-date-picker
                  type="date"
                  placeholder="选择日期"
                  v-model="newuser.birthday"
                  style="width: 100%;"
                ></el-date-picker>
              </el-col>
            </el-form-item>-->
            <el-form-item>
              <el-button type="primary" @click="onSubmit">注册</el-button>
              <el-button plain type="danger" @click="()=>{$router.push('/')}">返回</el-button>
              <el-button  plain @click="resetForm('newuser')" style="margin-left:80px">重置</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.newuser.cpassword !== "") {
          this.$refs.newuser.validateField("cpassword");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.newuser.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      selectavatar: false,
      msg: "",
      newuser: {
        userid: "",
        imgsrc: "",
        username: "",
        password: "",
        cpassword: "",
        sex: "",
        matto: "",
        phone: ""
      },
      rules: {
        password: [{ validator: validatePass, trigger: "blur" }],
        cpassword: [{ validator: validatePass2, trigger: "blur" }],
        userid: [
          { required: true, message: "请输入手机号", trigger: "blur" },
          { min: 11, max: 11, message: "11位手机号", trigger: "blur" }
        ]
      }
    };
  },

  methods: {
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },

    onSubmit() {
      var checksuccess = false;
      let that = this
      var userId = that.newuser.userid;
      var userName = that.newuser.username;
      var userPassword = that.newuser.password;
      var userSex = that.newuser.sex;
      var userPhone =that.newuser.userid;
      var userMatto = that.newuser.matto;
      var userStatus = 1;


      var newuserdata = {
         "userId": userId,
          "userName":userName,
          "userPassword":userPassword,
         "userStatus": userStatus ,
          "userPhone": userPhone ,
          "userSex":userSex,
          "userMatto": userMatto ,
      };

      
  
      // that.$http
      //   .post("userTable",newuserdata)
      //   .then(res => {
      //     window.console.log(res.data.msg);
      //     if(res.data.msg=="执行成功"){ checksuccess = true }
      //           if (checksuccess) {
      //             that.$alert("注册成功！请输入账号密码登录", "Sheer", {
      //               confirmButtonText: "确定",
      //               callback: action => {
      //                 that.$message({
      //                   type: "info",
      //                   message: `action: ${action}`
      //                 });
      //               }
      //             });
      //             that.$router.push("/login");
      //           } else {
      //             that.$alert("注册失败，请重新输入注册信息", "Sorry", {
      //               confirmButtonText: "确定",
      //               callback: action => {
      //                 that.$message({
      //                   type: "info",
      //                   message: `action: ${action}`
      //                 });
      //               }
      //             });
      //             this.$router.push("/login");
      //           }

      //   }).catch(res=>{
      //     window.console.log(res.data);
      //   });




    that.$axios.post("userTable",newuserdata,{
      header:{
        "emulateJSON":"true",
        "Content-Type":"application/json"
      }
    }).then(res=>{
      window.console.log(res);
  if(res.data.msg=="执行成功"){ checksuccess = true }
                if (checksuccess) {
                  that.$alert("注册成功！请输入账号密码登录", "Sheer", {
                    confirmButtonText: "确定",
                    callback: action => {
                      that.$message({
                        type: "info",
                        message: `action: ${action}`
                      });
                    }
                  });
                  that.$router.push("/login");
                } else {
                  that.$alert("注册失败，请重新输入注册信息", "Sorry", {
                    confirmButtonText: "确定",
                    callback: action => {
                      that.$message({
                        type: "info",
                        message: `action: ${action}`
                      });
                    }
                  });
                 that.resetForm("newuser");
                }



    }).catch(res=>{
      window.console.log(res)
    })

    }
  }
};
</script>

<style scoped>
.register {
  width: 100%;
  margin-top: 80px;
  padding: 60px 40px;

  background-color: white;
}
.register input {
  margin: 10px;
}
.avaimgs img {
  width: 60px;
}
.avaimgs li {
  padding: 10px;
  border: 1px rgb(60, 60, 71) dashed;
  margin: 0 0 10px 10px;
  display: inline-block;
}
.avaimgs li :hover {
  cursor: pointer;
  background-color: rgb(209, 209, 209);
}
</style>