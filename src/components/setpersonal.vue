<template>
<transition name="el-fade-in">
  <div class="setting">
    <div class="avatar">
      
      <el-upload
        class=" uploadavatar"
        action="https://jsonplaceholder.typicode.com/posts/"
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
          <el-input v-model="form.c_username" style="width: 60%;"></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-select v-model="form.c_sex" placeholder="请选择性别">
            <el-option label="男" value="male"></el-option>
            <el-option label="女" value="female"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="生日">
          <el-col :span="11">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="form.c_birthday"
              style="width: 80%;"
            ></el-date-picker>
          </el-col>
        </el-form-item>

        <el-form-item label="个性签名">
          <el-input type="textarea" v-model="form.c_motto" style="width: 80%;"></el-input>
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
      imageurl: "",
      form: {
        c_username: "",
        c_sex: "",
        c_birthday: "",
        c_motto: ""
      }
    };
  },
  methods: {
    onSubmit() {},
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
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
  margin:20px 0 0 100px;
  width: 78px;
}
.uploadavatar :hover{
  border-color: #409EFF;
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