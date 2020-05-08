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
            <el-form-item style="display:inline-block" label="头像">
              <el-upload
                class="avatar-uploader"
                action="http://localhost:8099/addImage"
                name="image_data"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload"
                style="margin-left:50px"
              >
                <el-avatar
                  v-if="imageUrl"
                  :src="imageUrl"
                  :size="120"
                  :fit="none"
                  style="border: 1px dashed #d9d9d9;"
                ></el-avatar>
                <i
                  v-else
                  class="el-icon-plus avatar-uploader-icon"
                  style="border: 1px dashed #d9d9d9;"
                ></i>
              </el-upload>
            </el-form-item>

            <el-form-item label="登录名" style="width:70%">
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
      imageUrl: "",
      newuser: {
        userid: "",
        avatarsrc: "",
        username: "",
        password: "",
        cpassword: "",
        sex: "",
        matto: "",
        phone: ""
      },
      rules: {
        password: [{ validator: validatePass, trigger: "blur" }],
        cpassword: [{ validator: validatePass2, trigger: "blur" }]
        // userid: [
        //   { required: true, message: "请输入手机号", trigger: "blur" },
        //   { min: 11, max: 11, message: "11位手机号", trigger: "blur" }
        // ]
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
      var userAvatar = that.newuser.avatarsrc;

      var newuserdata = {
        userId: userId,
        userName: userName,
        userPassword: userPassword,
        userStatus: userStatus,
        userPhone: userPhone,
        userSex: userSex,
        userMatto: userMatto,
        userAvatar: userAvatar
      };

      that.$axios
        .post("/api/userTable", newuserdata, {
          header: {
            emulateJSON: "true",
            "Content-Type": "application/json"
          }
        })
        .then(res => {
          window.console.log(res);
          if (res.data.msg == "执行成功") {
            checksuccess = true;
            // 注册成功，标记位成功
          }
          if (checksuccess) {
            //注册成功的操作
            that.$alert("注册成功！请输入账号密码登录", "Sheer", {
              confirmButtonText: "确定"
            });
            that.$router.push("/login");
          } else {
            // 注册失败的操作
            that.$alert("注册失败，请重新输入注册信息", "Sorry", {
              confirmButtonText: "确定"
            });
            that.resetForm("newuser");
          }
        })
        .catch(res => {
          window.console.log(res);
        });
    },
    beforeAvatarUpload() {
      window.console.log("bau");
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
      window.console.log("image:" + res.data);

      //  得到上传图片的名字
      this.newuser.avatarsrc = res.data;
    }
  }
};
</script>

<style scoped>
.avatar-uploader .el-upload {
  border: 1px dashed #474747;

  border-radius: 6px;
  cursor: pointer;
  position: relative;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 78px;
  height: 78px;
  line-height: 78px;
  text-align: center;
}
.avatar {
  width: 78px;
  height: 78px;
  display: block;
}
.register {
  width: 100%;
  margin-top: 80px;
  padding: 40px 60px 40px;
  background-color: white;
}
.register input {
  margin: 10px;
}
</style>