<template>
  <el-container style="height: auto;">
    <el-aside width="200px" style>
      <img src="@/assets/images/logo2s.png" alt="MANAGE SYS" class="headerlogo" />
      <el-menu router>
        <el-menu-item-group title=" ">
          <el-menu-item index="/managesys/showdetail">网站数据</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title=" ">
          <el-menu-item index="/managesys/postmanage">帖子管理</el-menu-item>
          <el-menu-item index="/managesys/usermanage">用户管理</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title=" ">
          <el-menu-item @click="exit">
           退出 <i class="el-icon-back"></i>
          </el-menu-item>
        </el-menu-item-group>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header style="border-bottom:1px solid gray;margin:0 15px; font-size: 12px ;text-align:left;">
        <span style="font-size:40px">管理系统</span>
      </el-header>
      <div style="padding:15px;margin-top:45px">
        <transition name="el-fade-in">
          <router-view />
        </transition>
      </div>
      <!-- <el-main style="padding:0"> -->
      <!-- </el-main> -->
    </el-container>
  </el-container>
</template>

<script>
export default {
  methods: {
    exit() {
      localStorage.removeItem("adminId");
      localStorage.removeItem("adminName");
      this.$store.commit("mnglogin");
      this.$router.push({ path: "/" });
    }
  }
};
</script>

<style>
.el-header {
  background-color: #ffffffe7;
  color: #333;
  line-height: 60px;
  position: fixed;
  top: 0;
  z-index: 100;
  width: 88vw;
}
.headerlogo {
  width: 130px;
  margin-left: 15px;
}

.el-aside {
  color: #333;
  /* background-color:  rgba(50, 107, 206, 0.342); */
}
</style>