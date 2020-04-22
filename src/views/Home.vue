<template>
  <el-main>
    <el-row>
      <el-col :span="24">
        <el-carousel :interval="3000" type="card" height="220px">
          <el-carousel-item v-for="(item,index) in carouselimg" :key="index">
            <el-image :src="item" :fit="cover"></el-image>
          </el-carousel-item>
        </el-carousel>
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
      <el-col :span="3" :offset="0">
        <div class="adv">
          <span>广告位招租</span>
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
      cardlist: [
      ],
      carouselimg: [
        "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4e3a7cc7167b1667f5953e701fddc44e.jpg?w=2452&h=920",
        "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/347836812589c95e1018973ed3aa3caa.jpg?thumb=1&w=1226&h=460&f=webp&q=90",
        "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a6c9f912c711bd2e49aa9fbbbef72308.jpg?thumb=1&w=1226&h=460&f=webp&q=90",
        "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3c409123c70dc6fa2250916cb1cf2a4b.jpg?thumb=1&w=1226&h=460&f=webp&q=90"
      ]
    };
  },
  mounted() {
    },
  created(){
   this.getdata();

  },
methods:{
  getdata(){
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
  height: 500px;
  background-color: rgba(255, 0, 0, 0.897);
  text-align: center;
  font-size: 40px;
  color: #1596ec;
}
</style>
