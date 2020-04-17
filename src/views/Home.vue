<template>
  <el-main>
    <el-row>
      <el-col :span="24">
        <el-carousel :interval="3000" type="card">
          <el-carousel-item v-for="(item,index) in carouselimg" :key="index">
            <el-image :src="item" :fit="fill"></el-image>
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
      <el-col :span="2">
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
  mounted() {
    this.$axios
      .get("/postTable", {
        emulateJSON: "true",
        "Content-Type": "application/json"
      })
      .then(res => {
        this.cardlist = res.data.data.record;
      });
  },
  data() {
    return {
      cardlist: [
        {
          postId: "1",
          postAuthor: "科技圣斗士",
          userAvatar: require("../assets/images/head/head1_1.png"),
          
          postContent:
            "这几天计划对这三个旗舰机做个对比，华为p40pro，小米10pro，oppo findx2pro，大家想了解哪些？性能，续航，快充，边玩边充，屏幕，声音，拍照，摄像，防抖，长焦，微距，手感，刷新率，你们最关心的是啥？",
          postImgsrc:
            "https://wx4.sinaimg.cn/large/7fb5a117ly1gdpxoufyr9j22bc334npe.jpg",
            postShopurl:"https://www.baidu.com",
          comment_list: [
            { userName: "用户111", commentText: "续航如何！！！拍照好看吗！" },
            { userName: "锦鲤本利", commentText: "都喜欢！！！抽奖送给我吧！！！！" }
          ]
        },
        {
          postId: "3",
          postAuthor: "菜谱大师",
          userAvatar: require("../assets/images/head/head2_1.png"),
          postContent:
            "【超级香酥的蜂蜜脆吐司】吐司的神仙吃法了解一下？超级香酥的蜂蜜脆吐司，当早餐甜点都合适，,香酥好吃,做早餐简直太好吃了,烘焙小白们一定要试试~[哈哈]1、准备好食材,吐司去掉四边,切成三角形。黄油隔热水融化。融化的黄油中加入一勺蜂蜜。勾吐司两面都刷上黄油蜂蜜,再撒一些粗粒砂糖。2、烤箱提前预热,上下火180度烤20分钟即可。",
          postImgsrc:
            "https://ww2.sinaimg.cn/orj360/62391dc8ly1gdogjxodn7j20u013qdlh.jpg",
          comment_list: [
            { userName: "吃货吃吃吃", commentText: "好香！周末试试！！" },
            { userName: "user1231231", commentText: "啊，好懒，我还是去买吧" }
          ]
        },
        {
          postId: "2",
          postAuthor: "刘人语reyi",
          userAvatar: require("../assets/images/user.jpg"),
          postContent:
            "我的新剧小美满上线啦！就在腾讯视频，快来看甜甜的恋爱吧",
          postImgsrc:
            "https://wx3.sinaimg.cn/large/007jQkvLgy1gdovhzy1vdj356o3ggqvg.jpg",
          comment_list: [
            { userName: "追剧狂魔", commentText: "周四晚八点准时收看！！！" },
            { userName: "yeahzzzz", commentText: "你好可爱啊！！！" }
          ]
        },

        {
          postId: "4",
          postAuthor: "喜茶",
          userAvatar:
            "https://tvax1.sinaimg.cn/crop.0.0.1080.1080.180/a727902fly8gdio6hs5udj20u00u03zg.jpg?KID=imgbed,tva&Expires=1586625043&ssig=Flf1iuByw1",
          postContent: "喜茶灵感咖啡上新啦！！！！！",
          postImgsrc:
            "https://wx4.sinaimg.cn/mw690/a727902fgy1gdgb1huofwj20u01hc17b.jpg",
          comment_list: [
            { userName: "t", commentText: "明天就喝！！！" },
            { userName: "bbbbb", commentText: "喝喝好喝" }
          ]
        },
        {
          postId: "7",
          postAuthor: "刘人语",
          userAvatar: require("../assets/images/user.jpg"),
          postContent: "刘人语小朋友爸爸也爱你",

          postImgsrc:
            "https://wx2.sinaimg.cn/mw690/b4917656gy1g7umi7pu4pj21jk1jku10.jpg",
          comment_list: [
            { userName: "t", commentText: "pickpickpick" },
            { userName: "bbbbb", commentText: "iiiiiiiiiiiiiiiiiiiiiiiiiiiiiii" }
          ]
        },
        {
          postId: "1",
          postAuthor: "刘人语",
          userAvatar: require("../assets/images/user.jpg"),
          postContent: "刘人语小朋友爸爸也爱你",

          postImgsrc:
            "https://wx2.sinaimg.cn/mw690/b4917656gy1g7umi7pu4pj21jk1jku10.jpg",
          comment_list: [
            { userName: "t", commentText: "pickpickpick" },
            { userName: "bbbbb", commentText: "iiiiiiiiiiiiiiiiiiiiiiiiiiiiiii" }
          ]
        }
      ],
      carouselimg: [
        "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4e3a7cc7167b1667f5953e701fddc44e.jpg?w=2452&h=920",
        "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/347836812589c95e1018973ed3aa3caa.jpg?thumb=1&w=1226&h=460&f=webp&q=90",
        "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a6c9f912c711bd2e49aa9fbbbef72308.jpg?thumb=1&w=1226&h=460&f=webp&q=90",
        "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3c409123c70dc6fa2250916cb1cf2a4b.jpg?thumb=1&w=1226&h=460&f=webp&q=90"
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
  /* background-color: #99a9bf; */
  background-color: #fc4f1a;
}

.el-carousel__item:nth-child(2n + 1) {
  /* background-color: #bdd7f5; */
  background-color: #ff6e2a;
}
.adv {
  width: 100%;
  height: 500px;
  background-color: #15d3ec;
  text-align: center;
  font-size: 40px;
  color: rgb(255, 157, 0);
}
</style>
