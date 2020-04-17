<template>
  <div>
    <el-row>
      <el-col :span="10" :offset="6">
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
              <button style="margin-left:40px" primary @click.prevent="selectavatar=true">更改头像</button>
              <img style="width:60px;margin-left:60px" :src="newuser.imgsrc" />
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
            <el-form-item label="登录名" style="width:70%" prop="userid">
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
              <el-radio v-model="newuser.sex" label="男">男</el-radio>
              <el-radio v-model="newuser.sex" label="女">女</el-radio>
            </el-form-item>
            <el-form-item label="电话" style="width:70%">
              <el-input v-model="newuser.phone" placeholder="电话"></el-input>
            </el-form-item>
            <el-form-item label="个性签名">
              <el-input type="textarea" v-model="newuser.matto" style="width: 80%;"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">注册</el-button>
              <el-button plain type="danger" @click="()=>{$router.push('/')}">返回</el-button>
              <el-button plain @click="resetForm('newuser')" style="margin-left:80px">重置</el-button>
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
        phone: "",
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
      let that = this;
      var userId = that.newuser.userid;
      var userName = that.newuser.username;
      var userPassword = that.newuser.password;
      var userSex = that.newuser.sex;
      var userPhone = that.newuser.phone;
      var userMatto = that.newuser.matto;
      var userStatus = 1;

      var newuserdata = {
        userId: userId,
        userName: userName,
        userPassword: userPassword,
        userStatus: userStatus,
        userPhone: userPhone,
        userSex: userSex,
        userMatto: userMatto
      };


      that.$axios
        .post("userTable", newuserdata, {
          header: {
            emulateJSON: "true",
            "Content-Type": "application/json"
          }
        }).then(res => {
          window.console.log(res);
          if (res.data.msg == "执行成功") {
            checksuccess = true;
            // 注册成功，标记位成功
          }
          if (checksuccess) {
            //注册成功的操作
            that.$alert("注册成功！请输入账号密码登录", "Sheer", {
              confirmButtonText: "确定",
            });
            that.$router.push("/login");
          } else {
            // 注册失败的操作
            that.$alert("注册失败，请重新输入注册信息", "Sorry", {
              confirmButtonText: "确定",

            });
            that.resetForm("newuser");
          }
        })
        .catch(res => {
          window.console.log(res);
        });
    }
  }
};
</script>

<style scoped>
.register {
  width: 100%;
  margin-top: 80px;
  padding: 40px 60px  40px;
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

body{
    background: rgb(163, 119, 223);
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
  );
}
</style>