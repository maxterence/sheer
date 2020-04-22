<template>
  <transition name="el-fade-in">
    <div class="setting">
      <div class="avatar">
        <el-upload
          class="uploadavatar"
          action="http://localhost:8099/addImage"
          name="image_data"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
        >
          <img v-if="imageUrl" :src="imageUrl" class="avatar1" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>

        <div
          style="font-size:15px;color:#606266; width:140px;margin:10px 0 0 85px;padding:0;"
        >点击修改头像</div>
      </div>
      <div style="margin:10px">
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="昵称">
            <el-input v-model="form.userName" style="width: 60%;"></el-input>
          </el-form-item>
          <el-form-item label="性别" style="width:70%">
            <el-radio v-model="form.userSex" label="男">男</el-radio>
            <el-radio v-model="form.userSex" label="女">女</el-radio>
          </el-form-item>

          <el-form-item label="电话">
            <el-input v-model="form.userPhone" style="width: 60%;"></el-input>
          </el-form-item>
          <el-form-item label="个性签名">
            <el-input type="textarea" v-model="form.userMatto" style="width: 80%;"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">保存</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      imageUrl: "",
      form: {
        userName: "",
        userSex: "",
        userPhone: "",
        userMatto: "",
        userAvatar: ""
      }
    };
  },
  methods: {
    //更新用户信息
    onSubmit() {
      var updateform = {
        userId: localStorage.getItem("userinfoid"),
        userName: this.form.userName,
        userSex: this.form.userSex,
        userPhone: this.form.userPhone,
        userMatto: this.form.userMatto,
        userAvatar: this.form.userAvatar
      };
      this.$axios
        .put("/userTable", updateform, {
          header: {
            emulateJSON: "ture",
            "Content-Type": "application/json"
          }
        })
        .then(res => {
          window.console.log(res);
          if (res.data.code == 0) {
            this.$message("修改成功");
          } else {
            this.$message.error("修改失败");
          }
        })
        .catch(err => {
          window.console.log(err);
        });
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
      this.form.userAvatar = res.data;
    },
    beforeAvatarUpload(file) {
      const isLt2M = file.size / 1024 / 1024 < 9;

      if (!isLt2M) {
        this.$message.error("上传图片大小不能超过 9MB!");
      }
      return isLt2M;
    }
  }
};
</script>

<style>
.setting {
  background-color: white;
  height: 600px;
  margin-top: 20px;
}
.avatar {
  display: inline-block;
  margin: 20px 0;
}
.uploadavatar {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  margin: 20px 0 0 100px;
  width: 78px;
}
.uploadavatar :hover {
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
</style>