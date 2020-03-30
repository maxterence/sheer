<template>
  <el-main>
    <el-row>
      <el-col :span="24">
        <el-carousel :interval="4500" type="card" height="400px">
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
              <ActCard :card="card" v-for="(card, index) in cardlist" :key="index"></ActCard>

            </div>
            
        </div>
      </el-col>
    </el-row>
    <el-backtop target=".el-main"></el-backtop>
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
        {
          card_username: "刘人语",
          card_avatarsrc: require("../assets/images/user.jpg"),
          card_describe: "刘人语小朋友爸爸也爱你",

          card_imgsrc:
            "https://wx2.sinaimg.cn/mw690/b4917656gy1g7umi7pu4pj21jk1jku10.jpg",
          comment_list: [
            { cmtusername: "t", cmt: "pickpickpick" },
            { cmtusername: "bbbbb", cmt: "iiiiiiiiiiiiiiiiiiiiiiiiiiiiiii" }
          ]
        },
        {
          card_username: "刘人语666666",
          card_avatarsrc: require("../assets/images/user.jpg"),
          card_describe: "刘人语小朋友爸爸也爱你asdfasdfasdfadsfadsf",

          card_imgsrc:
            "https://wx2.sinaimg.cn/mw690/b4917656gy1g7umi7pu4pj21jk1jku10.jpg",
          comment_list: [
            { cmtusername: "t", cmt: "pickpickpick" },
            { cmtusername: "bbbbb", cmt: "iiiiii66666666666666666666666666i" }
          ]
        },
        {
          card_username: "刘人语",
          card_avatarsrc: require("../assets/images/user.jpg"),
          card_describe: "刘人语小朋友爸爸也爱你",

          card_imgsrc:
            "https://wx2.sinaimg.cn/mw690/b4917656gy1g7umi7pu4pj21jk1jku10.jpg",
          comment_list: [
            { cmtusername: "t", cmt: "pickpickpick" },
            { cmtusername: "bbbbb", cmt: "iiiiiiiiiiiiiiiiiiiiiiiiiiiiiii" }
          ]
        },
        {
          card_username: "刘人语",
          card_avatarsrc: require("../assets/images/user.jpg"),
          card_describe: "刘人语小朋友爸爸也爱你",

          card_imgsrc:
            "https://wx2.sinaimg.cn/mw690/b4917656gy1g7umi7pu4pj21jk1jku10.jpg",
          comment_list: [
            { cmtusername: "t", cmt: "pickpickpick" },
            { cmtusername: "bbbbb", cmt: "iiiiiiiiiiiiiiiiiiiiiiiiiiiiiii" }
          ]
        },
        {
          card_username: "刘人语",
          card_avatarsrc: require("../assets/images/user.jpg"),
          card_describe: "刘人语小朋友爸爸也爱你",

          card_imgsrc:
            "https://wx2.sinaimg.cn/mw690/b4917656gy1g7umi7pu4pj21jk1jku10.jpg",
          comment_list: [
            { cmtusername: "t", cmt: "pickpickpick" },
            { cmtusername: "bbbbb", cmt: "iiiiiiiiiiiiiiiiiiiiiiiiiiiiiii" }
          ]
        },
        {
          card_username: "刘人语",
          card_avatarsrc: require("../assets/images/user.jpg"),
          card_describe: "刘人语小朋友爸爸也爱你",

          card_imgsrc:
            "https://wx2.sinaimg.cn/mw690/b4917656gy1g7umi7pu4pj21jk1jku10.jpg",
          comment_list: [
            { cmtusername: "t", cmt: "pickpickpick" },
            { cmtusername: "bbbbb", cmt: "iiiiiiiiiiiiiiiiiiiiiiiiiiiiiii" }
          ]
        }
      ]
    };
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
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
