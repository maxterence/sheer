<template>
  <el-header style="height:61px;padding:0 10px;margin:0">
    <img src="../assets/images/logo.png" alt="SHEER" class="headerlogo" />
    
    <div class="topmenu">
      <!-- 搜索 -->
      <el-input
        placeholder="搜索动态"
        prefix-icon="el-icon-search"
        v-model="searchkeywords"
        clearable
        style="width:200px;"
      ></el-input>
      <el-button icon="el-icon-search" @click="handlesearch" circle style="margin-right:50px;"></el-button>

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
        <el-input
          type="textarea"
          :autosize="{ minRows: 4, maxRows: 6}"
          placeholder="请输入内容"
          v-model="userupdate.usertiptext"
        ></el-input>
        <p></p>
        <span class="demonstration">推介度</span>
        <el-rate v-model="userupdate.userrcm"></el-rate>
        <p></p>
        <el-upload
          class="upload-demo"
          action
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :file-list="userupdate.fileList"
          list-type="picture"
        >
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
        <span slot="footer" class="dialog-footer">
          <el-button @click="writedialogform = false">取 消</el-button>
          <el-button type="primary" @click="writedialogform = false">确 定</el-button>
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
        <el-menu-item index="2" :route="{path: '/about'}">关于</el-menu-item>
        <el-submenu index="3">
          <template slot="title">
            <span style="margin-right:5px" @click="()=>{$router.push('/i')}">{{$store.getters.userstate}}</span>
            <el-avatar :src="user.imgsrc" fit="fill" style="margin-left:8px;"></el-avatar>
          </template>
          <el-menu-item index="3-1" :route="{path:'/i'}">
            <i class="el-icon-user"></i> 个人中心
          </el-menu-item>
          <el-menu-item index="3-2" :route="{path:'/setting'}">
            <i class="el-icon-setting"></i> 个人设置
          </el-menu-item>
          <el-menu-item  @click="handleexit">
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

      userupdate: {
        userrcm: "",
        usertiptext: "",
        fileList: [{ filename: "", url: "" }]
      },
      user: {
        name: "",
        imgsrc: "",
        // name: "reyi",
        // imgsrc: require("@/assets/images/reyi.jpg")
      },

      searchkeywords: ""
    };
  },
  computed: {
    username() {
      return this.$store.getters.userstate;
    }
  },
  created:function() {
     var a =localStorage.getItem("userinfo");
    if (a =="" || a.isEmpty()) {
      this.user.imgsrc="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png";
      
    } else {
      this.user.name = localStorage.getItem("userinfo");
      //this.user.imgsrc=localStorage.getItem("avatarsrc") ;
    }
  },
  methods: {
    handleClose() {},
    handlepostupdate() {
      // console.log(this.userupdate);
      this.writedialogform = false;
    },
    handlesearch() {
      // console.log(this.searchkeywords);
      this.searchkeywords = "";
    },
    handleRemove() {
      //console.log(file, fileList);
    },
    handlePreview() {
      //console.log(file);
    },
    handleexit() {
      alert("log out!");
      localStorage.removeItem("userinfo");
      this.$store.commit("userinfo");
      setTimeout(() => {
        this.$router.go(0)
      }, 1000);
    }
  }
};
</script>


<style scoped>
.headerlogo {
  object-fit: contain;
  float: left;
  height: 62px;
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