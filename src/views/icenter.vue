<template>
  <div class="icenter">
    <el-row>
      <el-col :span="7" offset="2">
        <div class="icenter_left">
          <div style="text-align:center">
            <el-avatar :size="80" :src="user.user_avatar"></el-avatar>
          </div>
          <el-divider content-position="center">
            <span style="font-weight:bold;font-size:28px;text-align:center">{{User.userName}}</span>
          </el-divider>
          <div style="padding:0 10px;">
            <p>ID：{{User.userId}}</p>
            <p>性别：{{User.userSex}}</p>
            <p>电话：{{User.userPhone}}</p>
            <p>状态：{{User.userStatus}}</p>
            <p>个性签名：{{User.userMatto}}</p>
          </div>
        </div>
        <div class="personalsetting" @click="tomylike">
          <span>我的喜欢</span>
          <i class="el-icon-arrow-right"></i>
        </div>
        <div class="personalsetting" @click="tosetting">
          <span>个人设置</span>
          <i class="el-icon-arrow-right"></i>
        </div>
      </el-col>
      <el-col :span="14">
        <div class="container">
          <ActCard :card="card" v-for="(card, index) in cardlist" :key="index"></ActCard>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import ActCard from "@/components/ActCard";
export default {
  data() {
    return {
      user: {
        user_id: "20021010",
        user_avatar: require("../assets/images/reyi.jpg"),
        user_username: "Reyi",
        user_sex: "女",
        user_phone: "123123",
        user_status: "正常",
        user_Matto: "冲鸭冲鸭！！！！！！！！"
      },
      User: {},
      cardlist: [
        {
          postId: "3",
          postAuthor: "菜谱大师",
          userAvatar: require("../assets/images/head/head2_1.png"),
          postContent:
            "【超级香酥的蜂蜜脆吐司】吐司的神仙吃法了解一下？超级香酥的蜂蜜脆吐司，当早餐甜点都合适，,香酥好吃,做早餐简直太好吃了,烘焙小白们一定要试试~[哈哈]1、准备好食材,吐司去掉四边,切成三角形。黄油隔热水融化。融化的黄油中加入一勺蜂蜜。勾吐司两面都刷上黄油蜂蜜,再撒一些粗粒砂糖。2、烤箱提前预热,上下火180度烤20分钟即可。",
          postImgsrc:
            "https://ww2.sinaimg.cn/orj360/62391dc8ly1gdogjxodn7j20u013qdlh.jpg",
          comment_list: [
            { cmtusername: "吃货吃吃吃", cmt: "好香！周末试试！！" },
            { cmtusername: "user1231231", cmt: "啊，好懒，我还是去买吧" }
          ]
        },
        {
          postId: "2",
          postAuthor: "刘人语reyi",
          userAvatar: require("../assets/images/user.jpg"),
          postContent: "我的新剧小美满上线啦！就在腾讯视频，快来看甜甜的恋爱吧",
          postImgsrc:
            "https://wx3.sinaimg.cn/large/007jQkvLgy1gdovhzy1vdj356o3ggqvg.jpg",
          comment_list: [
            { cmtusername: "追剧狂魔", cmt: "周四晚八点准时收看！！！" },
            { cmtusername: "yeahzzzz", cmt: "你好可爱啊！！！" }
          ]
        }
      ]
    };
  },
  components: {
    ActCard
  },
  methods: {
    tosetting() {
      this.$router.push({ path: "/setting" });
    },
    tomylike() {
      this.$router.push({ path: "/mylike" });
    },
    getuser() {
      this.User = null;
      var uid = localStorage.getItem("userinfoid");
      return this.$axios.get("userTable", {
        params: {
          userId: uid
        }
      });
    },
    getuserpost() {
      var uid = localStorage.getItem("userinfoid");
      return this.$axios.get("postTable/getByuserid", {
        params: {
          userId: uid
        }
      });
    },

  },

  mounted() {
    
  }
};
</script>

<style  scoped>
.icenter_left {
  padding-top: 30px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  margin: 20px 30px 15px;
  top: 60px;
  height: 420px;
  background-color: white;
}
.personalsetting {
  margin: 10px 30px;
  background-color: white;
  padding: 20px 15px;
  display: block;
}
.personalsetting :hover {
  cursor: pointer;
  background-color: whitesmoke;
}
.container {
  margin: 20px 0;
}
</style>