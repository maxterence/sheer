<template>
  <div class="abo">
    <el-row>
      <el-col :span="14" :offset="5">
        <div class="about">
          <h1 style="font-size:56px">感谢您的访问</h1>
          <p>广州航海学院</p>
          <p>信息与通信工程学院</p>
          <p>计科162</p>
          <p>&copy;谭恩雨</p>
          <p>导师：林福伙</p>
          <el-link :underline="false" @click="tomng">管理系统入口</el-link>
        </div>
      </el-col>
    </el-row>

  </div>
</template>

<script>


export default {
  name: "about",
  components: {
    
  },
  methods:{
    tomng(){
      this.$router.push({path:'/managesys'});
    }
  }
};
</script>

<style scoped>
  .about{
    text-align: center;
    width:80%;
    border-radius: 20px;
    background-color: white;
    padding: 20px;
    margin: 10%;
    height: 400px;
  }

  .abo{
    height: 92vh;
    background: rgb(163, 119, 223);
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
  );
  }

  
</style>