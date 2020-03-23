<template>
  <el-main>
    <el-row>
      <el-col :span="24">
        <el-carousel
          :interval="4500"
          type="card"
          height="400px"
          style="z-index:1;position:relative;width:100%; "
        >
          <el-carousel-item v-for="item in 6" :key="item">
            <h3 class="medium">{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="20" :offset="2">
        <div class="main">
          <div class="showstream">
            <ActCard></ActCard>
            <ActCard></ActCard>
            <ActCard></ActCard>
            <ActCard></ActCard>
            <ActCard></ActCard>
            <ActCard></ActCard>
          </div>
        </div>
      </el-col>
    </el-row>
  </el-main>
</template>

<script>
// @ is an alias to /src

// import Header from "@/components/Header.vue";
import ActCard from "@/components/ActCard";

export default {
  name: "home",
  components: {
    // Header,
    ActCard
  }
};
</script>

<style>
.main {
  left: 50;
  margin: 0 auto;
}
.showstream {
  left: -50;

  display: inline-block;
  margin: 0 auto;
  width: auto;
  padding: 0;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
