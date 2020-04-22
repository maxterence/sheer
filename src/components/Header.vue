<template>
  <el-header style="height:61px;padding:0 10px;margin:0">
    <img src="../assets/images/logo2s.png" alt="SHEER" class="headerlogo" />

    <div class="topmenu">
      <!-- 搜索 -->

      <!-- 发布 -->
      <el-button
        type="primary"
        icon="el-icon-edit"
        @click="writedialogform = true"
        circle
        size
        style="float:right;margin-top:12px;margin-right:30px;"
      ></el-button>
      <!-- 发布框 -->
      <el-dialog
        title="发布"
        :visible.sync="writedialogform"
        width="45%"
        :modal-append-to-body="false"
      >
        <el-input placeholder="请输入标题" v-model="userupdate.postTitle"></el-input>
        <el-input
          type="textarea"
          :autosize="{ minRows: 4, maxRows: 6}"
          placeholder="请输入内容"
          v-model="userupdate.postContent"
        ></el-input>
        <p></p>
        <el-input placeholder="好物链接" v-model="userupdate.postShopurl"></el-input>

        <el-upload
          class="upload-demo"
          action="http://localhost:8099/addImage"
          name="image_data"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :on-success="handleSuccess"
          :file-list="fileList"
          list-type="picture"
          multiple
        >
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过9M</div>
        </el-upload>
        <span slot="footer" class="dialog-footer">
          <el-button @click="writedialogform = false">取 消</el-button>
          <el-button type="primary" @click="sendpost">发 送</el-button>
        </span>
      </el-dialog>

      <!-- 菜单 -->
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        router
        style="float:right"
      >
        <el-menu-item index="1" :route="{path: '/'}">
          <i class="el-icon-s-home"></i> 发现
        </el-menu-item>
        <el-menu-item index="2" :route="{path: '/searchinput'}">
          <i class="el-icon-search"></i>搜索
        </el-menu-item>
        <el-menu-item index="3" :route="{path: '/mylike'}">我的喜欢</el-menu-item>
        <el-menu-item index="4" :route="{path: '/about'}">关于</el-menu-item>
        <el-submenu index="5">
          <template slot="title">
            <span
              style="margin-right:5px"
              @click="()=>{$router.push('/i')}"
            >{{$store.getters.userstate}}</span>
            <el-avatar :src="userImgsrc" :fit="fill" style="margin-left:8px;"></el-avatar>
          </template>
          <el-menu-item index="5-1" :route="{path:'/i'}">
            <i class="el-icon-user"></i> 个人中心
          </el-menu-item>
          <el-menu-item index="5-2" :route="{path:'/setting'}">
            <i class="el-icon-setting"></i> 个人设置
          </el-menu-item>
          <el-menu-item @click="handleexit">
            <i class="el-icon-switch-button"></i> 退出
          </el-menu-item>
        </el-submenu>
      </el-menu>
    </div>
  </el-header>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      writedialogform: false,
      loading: false,
      file: "",
      searchkeywords: "",
      upload: {},
      userupdate: {
        postTitle: "",
        postContent: "",
        postShopurl: "",
        postImgsrc: ""
      },
      fileList: [],
      uploadFile: {},
      userImgsrc: ""
    };
  },
  mounted() {},
  
  created: function() {
    var username = localStorage.getItem("userinfoname");
    var useravatar = localStorage.getItem("userinfoavatar");
    if (username != null) {
      this.$store.commit("userlogin", username);
    }
    if (useravatar != null) {
      // this.$store.commit("userhead",useravatar)
      this.userImgsrc = useravatar;
    } else {
      this.userImgsrc = require("@/assets/images/head.png");
    }
  },
  methods: {
    handleexit() {
      //退出登录并清除登录信息
      if (
        this.$store.state.userinfo == null ||
        localStorage.getItem("userinfoname") == null
      ) {
        this.$alert("您未登录！", {
          confirmButtomText: "确定"
        });
      } else {
        this.$message("已退出!");
        localStorage.removeItem("userinfoid");
        localStorage.removeItem("userinfoname");
        localStorage.removeItem("userinfosex");
        localStorage.removeItem("userinfophone");
        localStorage.removeItem("userinfostatus");
        localStorage.removeItem("userinfomatto");
        localStorage.removeItem("userinfoavatar");
        this.$store.commit("userinfo");
        setTimeout(() => {
          this.$router.go(0);
          // this.$router.push('/home');
        }, 1000);
      }
    },
    sendpost() {
      let that=this;
      //发送帖子的方法
      var postdata = {
        userId: localStorage.getItem("userinfoid"),
        userAvatar: localStorage.getItem("userinfoavatar"),
        postAuthor: localStorage.getItem("userinfoname"),
        postTitle: this.userupdate.postTitle,
        postContent: this.userupdate.postContent,
        postShopurl: this.userupdate.postShopurl,
        postImgsrc: this.userupdate.postImgsrc
      };

 if (
        that.$store.state.userinfo == null ||
        localStorage.getItem("userinfoid") == null
      ) {
        //未登录
        that.$alert("", "请先登录！", {
          confirmButtonText: "确定"
        });
      } else if (localStorage.getItem("userinfostatus") == 0) {
        that.$alert("您的账号已被封停，部分功能将受限制！", "警告！！", {
          comfirmButtomText: "确定"
        });
      }  


      this.$axios
        .post("/postTable", postdata, {
          header: {
            " emulateJSON": "true",
            "Content-Type": "application/json"
          }
        })
        .then(res => {
          if (res.data.code == 0) {
            this.$message({ message: "发布成功！", type: "success" });
          } else {
            this.$message.error("发布失败");
          }
        });

      this.writedialogform = false;
    },

    handleSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
      window.console.log("postimgsrc:" + res.data);

      //  得到上传图片的名字
      this.userupdate.postImgsrc = res.data;
    },
    beforeAvatarUpload(file) {
      const isLt2M = file.size / 1024 / 1024 < 9;
      const filetype = file.type;
 
      var isPic = ((filetype == "image/jpeg" && filetype == "image/png")?true:false);

      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 9MB!");
      }
      return isLt2M||isPic ;
    },

    handleClose() {},
    handleRemove() {
      // window.console.log(file, fileList);
    },
    handlePreview() {
      // window.console.log(file);
    }
  }
};
</script>


<style scoped>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
.headerlogo {
  object-fit: contain;
  float: left;
  height: 62px;
  margin-right: 50px;
}
.topmenu {
  float: right;
  margin: 0;
  display: block;
}
.el-header {
  height: 80px;
  position: fixed;
  top: 0;
  z-index: 100;
  width: 100%;
  background-color: #fff;
  border-bottom: 1px solid #e6e6e6;
}
</style>