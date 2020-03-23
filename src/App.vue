<template>
  <div id="app">
    <transition name="el-fade-in-linear">
      
      <router-view />
    </transition>
  </div>
</template>



<script>
// import ActCard from "@/components/ActCard";

export default {
  name: "home",

  data() {
    return {
      user: { username: "" }
    };
  }
};
</script>
<style >
#app {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}
body {
  /* background: rgb(255, 132, 61);
  background: -moz-linear-gradient(
    top,
    rgba(255, 132, 61, 1) 38%,
    rgba(254, 83, 20, 1) 92%
  );
  background: -webkit-linear-gradient(
    top,
    rgba(255, 132, 61, 1) 38%,
    rgba(254, 83, 20, 1) 92%
  );
  background: linear-gradient(
    to bottom,
    rgba(255, 132, 61, 1) 38%,
    rgba(254, 83, 20, 1) 92%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ff843d', endColorstr='#fe5314',GradientType=0 ); */

background: rgb(255,203,157);
background: -moz-linear-gradient(top,  rgba(255,203,157,1) 0%, rgba(255,180,115,1) 51%, rgba(255,155,67,1) 100%);
background: -webkit-linear-gradient(top,  rgba(255,203,157,1) 0%,rgba(255,180,115,1) 51%,rgba(255,155,67,1) 100%);
background: linear-gradient(to bottom,  rgba(255,203,157,1) 0%,rgba(255,180,115,1) 51%,rgba(255,155,67,1) 100%);
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffcb9d', endColorstr='#ff9b43',GradientType=0 );


  min-height: 100vh;
  height: 100%;
  width: 100%;
  margin: 0;
  -ms-overflow-style: none; /*隐藏滚动条 */
}
body::-webkit-scrollbar {
  display: none; /*隐藏滚动条 */
}
</style>