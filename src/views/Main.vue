<template>
<div>
    <Header></Header>
    <el-container>
      <div style="margin-top:60px;width:100%;padding:0;">
        <transition name="el-fade-in">
          <router-view />
        </transition>
      </div>

    </el-container>
</div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
components: {
    Header
  },
created(){
    var logininfo = localStorage.getItem("userinfo");
    if(logininfo != ''){
       this.$store.commit("userlogin",logininfo);
    }
  }
}
</script>

<style>
#app{
  
}
</style>