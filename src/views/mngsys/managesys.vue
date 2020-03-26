<template>
  <el-container style="height: auto;">
    <el-aside width="200px" style="">
      <h1>sheer bcm</h1>
      <el-menu :default-openeds="['1', '3']" router>
        <el-menu-item-group title="数据">
          
          <el-menu-item index="/managesys/showdetail" >查看</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="管理">
          <el-menu-item index="/managesys/postmanage">帖子管理</el-menu-item>
          <el-menu-item index="/managesys/usermanage">用户管理</el-menu-item>
        </el-menu-item-group>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header style="margin:0 15px; font-size: 12px ;text-align:right;">
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
export default {};
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

.el-aside {
  color: #333;
  /* background-color:  rgba(50, 107, 206, 0.342); */
}

</style>