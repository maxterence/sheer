<template>
  <div class="icenter">
    <el-row>
      <el-col :span="5" offset="3">
        <div class="icenter_left">
          <el-avatar :size="80" :src="user.user_avatar"></el-avatar>
          <el-divider content-position="center">
            <span style="font-weight:700">{{user.user_username}}</span>
          </el-divider>
          <div>
            <p>用户ID：{{user.user_id}}</p>
            <p>状态：{{user.user_status}}</p>
          </div>
        </div>
        <div class="personalsetting" @click="tomylike">
          <span>点赞过的</span>
          <i class="el-icon-arrow-right"></i>
        </div>
        <div class="personalsetting" @click="tosetting">
          <span>个人设置</span>
          <i class="el-icon-arrow-right"></i>
        </div>
      </el-col>
      <el-col :span="16">
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
        user_status: "正常"
      },
      cardlist: [
        {
          card_userid: "",
          card_id: "",
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
  },
  components: {
    ActCard
  },
  methods: {
    tosetting() {
      this.$router.push({ path: "/setting" });
    },
    tomylike() {
      alert("like");
    }
  },
 
};

</script>

<style  scoped>
.icenter_left {
  text-align: center;
  padding-top: 30px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  margin: 20px 30px 15px;
  top: 90px;
  height: 280px;
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