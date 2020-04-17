<template>
  <div id="app">
    <transition name="el-fade-in-linear">
      <router-view />
    </transition>
        
          <el-backtop target="#app"></el-backtop>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {};
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
  /* background: rgb(255,203,157);
background: -moz-linear-gradient(top,  rgba(255,203,157,1) 0%, rgba(255,180,115,1) 51%, rgba(255,155,67,1) 100%);
background: -webkit-linear-gradient(top,  rgba(255,203,157,1) 0%,rgba(255,180,115,1) 51%,rgba(255,155,67,1) 100%);
background: linear-gradient(to bottom,  rgba(255,203,157,1) 0%,rgba(255,180,115,1) 51%,rgba(255,155,67,1) 100%);
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffcb9d', endColorstr='#ff9b43',GradientType=0 ); */

  /* background: rgb(163, 119, 223);
  background: -moz-linear-gradient(
    270deg,
    rgb(163, 119, 223) 6%,
    rgb(254, 60, 78) 90%
  );
  background: -webkit-linear-gradient(
    270deg,
    rgb(163, 119, 223) 6%,
    rgb(254, 60, 78) 90%
  );
  background: -o-linear-gradient(
    270deg,
    rgb(163, 119, 223) 6%,
    rgb(254, 60, 78) 90%
  );
  background: -ms-linear-gradient(
    270deg,
    rgb(163, 119, 223) 6%,
    rgb(254, 60, 78) 90%
  );
  background: linear-gradient(
    0deg,
    rgb(163, 119, 223) 6%,
    rgb(254, 60, 78) 90%
  ); */

background-color: #f6f6f6;

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