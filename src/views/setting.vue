<template>
  <div style="height:100%">
    <el-row :gutter="10">
      <el-col :span="4" :offset="2">
        <div
          style="height:180px;margin-top:20px;background-color:white;text-align:center;padding:30px 15px"
        >
          <el-link type="primary" :underline="false" @click="tosetper">修改个人设置</el-link>
          <p></p>
          <el-link type="primary" :underline="false" @click="tosetpass">修改密码</el-link>
          <p></p>

          <el-divider></el-divider>

          <el-link type="primary" :underline="false" @click="toicenter">
            <i class="el-icon-user"></i> 返回个人中心
          </el-link>
        </div>
      </el-col>
      <el-col :span="12">
        <transition name="el-fade-in-linear">
          <router-view />
        </transition>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  methods: {
    tosetpass() {
      this.$router.push({ path: "/setting/setpassword" });
    },
    tosetper() {
      this.$router.push({ path: "/setting" });
    },
    toicenter() {
      this.$router.push({ path: "/i" });
    }
  }
};
</script>

<style>
</style>