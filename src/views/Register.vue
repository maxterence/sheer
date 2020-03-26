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
            <el-form-item label="昵称" style="width:70%">
              <el-input v-model="newuser.username" placeholder="昵称"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password" style="width:70%">
              <el-input type="password" v-model="newuser.password" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="cpassword" style="width:70%">
              <el-input type="password" v-model="newuser.cpassword" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="性别" style="width:70%">
              <el-select v-model="newuser.sex" placeholder="请选择性别">
                <el-option label="男" value="male"></el-option>
                <el-option label="女" value="female"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="个性签名">
              <el-input type="textarea" v-model="newuser.motto" style="width: 80%;"></el-input>
            </el-form-item>
            <el-form-item label="生日">
              <el-col :span="11">
                <el-date-picker
                  type="date"
                  placeholder="选择日期"
                  v-model="newuser.birthday"
                  style="width: 100%;"
                ></el-date-picker>
              </el-col>
            </el-form-item>

            <el-form-item>
              <el-button type="primary" @click="onSubmit">保存</el-button>
              <el-button>取消</el-button>
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
      newuser: {
        username: '',
        password: '',
        cpassword: '',
        sex: '',
        birthday: '',
        motto:'',
      },
      rules: {
        password: [{ validator: validatePass, trigger: "blur" }],
        cpassword: [{ validator: validatePass2, trigger: "blur" }]
      }
    };
  },
  methods: {
    resetForm: function(formName) {
      this.$refs[formName].resetFields();
    },
    onsubmit(){
      alert("ok");
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
</style>