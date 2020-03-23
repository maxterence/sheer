<template>
<el-container>
  <div>
    <el-aside style="width:200px">
<el-row class="tac" >
  <el-col :span="12">
    <h5>后台管理</h5>
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
      <el-menu-item index="1">
        <i class="el-icon-menu"></i>
        <span slot="title">导航一</span>
      </el-menu-item>

      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航二</span>
        </template>
        <el-menu-item-group>
          
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
        </el-menu-item-group>

       
      </el-submenu>

    </el-menu>
  </el-col>
</el-row>
    </el-aside>
<el-main>
      <transition name="el-fade-in">
        <router-view/>
      </transition>
</el-main>
  </div>
</el-container>
</template>

<script>
export default {

}
</script>

<style>
.tac{
  width:100%
}
  


</style>