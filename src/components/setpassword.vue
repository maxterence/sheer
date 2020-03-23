<template>
  <div class="setpass">
    
    <el-form
      :model="passset"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="密码" prop="pass" style="width:50%">
        <el-input type="password" v-model="passset.pass" autocomplete="off" size="medium"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass" style="width:50%">
        <el-input type="password" v-model="passset.checkPass" autocomplete="off"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.passset.checkPass !== "") {
          this.$refs.passset.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.passset.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      passset: {
        pass: "",
        checkPass: "",
        
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        
      }
    };
  },

  methods: {
    resetForm: function(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style >
.setpass {
  padding:80px 20px 20px 60px ;
  width: 80%;
  height: 500px;
  background-color: white;
  margin-top: 20px;
}
</style>