<template>
  <el-main>
    <el-row>
      <el-col span="4">
        <el-menu
          :default-active="activeIndex2"
          class="el-menu-demo"
          @select="handleSelect"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-menu-item index="1">活动1</el-menu-item>
          <el-menu-item index="2">活动2</el-menu-item>
          <el-menu-item index="3">活动3</el-menu-item>
          <el-menu-item index="4">活动4</el-menu-item>
          <el-menu-item index="5">活动5</el-menu-item>
          <el-menu-item index="6">活动6</el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="17" :offset="0">
        <el-carousel :interval="3000" height="350px">
          <el-carousel-item v-for="(item,index) in carouselimg" :key="index">
            <el-image :src="item" :fit="cover"></el-image>
          </el-carousel-item>
        </el-carousel>
      </el-col>
      <el-col :span="3">
        <div class="adv">
          <span>广告位招租</span>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="19" :offset="2">
        <div class="main">
          <div class="showstream">
            <ActCard :card="card" v-for="(card, index) in cardlist" :key="index"></ActCard>
          </div>
        </div>
      </el-col>

    </el-row>
  </el-main>
</template>

<script>
// @ is an alias to /src

import ActCard from "@/components/ActCard";

export default {
  name: "home",
  components: {
    ActCard
  },
  data() {
    return {
      cardlist: [],
      carouselimg: [
        "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4e3a7cc7167b1667f5953e701fddc44e.jpg?w=2452&h=920",
        "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/347836812589c95e1018973ed3aa3caa.jpg?thumb=1&w=1226&h=460&f=webp&q=90",
        "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a6c9f912c711bd2e49aa9fbbbef72308.jpg?thumb=1&w=1226&h=460&f=webp&q=90",
        "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3c409123c70dc6fa2250916cb1cf2a4b.jpg?thumb=1&w=1226&h=460&f=webp&q=90"
      ]
    };
  },
  mounted() {},
  created() {
    this.getdata();
  },
  methods: {
    getdata() {
      this.$axios
        .get("/postTable", {
          emulateJSON: "true",
          "Content-Type": "application/json"
        })
        .then(res => {
          this.cardlist = res.data.data.records;
        });
    }
  }
};
</script>

<style scoped>
.main {
  margin: 0 auto;
}
.showstream {
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
  /* background-color: #99a9bf; */
  background-color: #ff872480;
}

.el-carousel__item:nth-child(2n + 1) {
  /* background-color: #bdd7f5; */
  background-color: #ffa43b73;
}
.adv {
  width: 100%;
  height: 350px;
  background-color: rgb(255, 170, 90);
  text-align: center;
  font-size: 40px;
  padding:0 2px;
  color: #cc4f07;
}
</style>
