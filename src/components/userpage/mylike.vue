<template>
  <div>
    <el-row>
      <el-col span="24">
        <div
          style="width:100%;padding:10px 5px;text-align:center;font-size:24px;background-color:white"
        >我的喜欢</div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="8" :offset="8">
        <ActCard :card="card" v-for="(card, index) in postlist" :key="index"></ActCard>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import ActCard from "@/components/ActCard";
export default {
  data() {
    return {
      postlist: [
        {
          postId: "2",
          postAuthor: "刘人语reyi",
          userAvatar: require("@/assets/images/user.jpg"),
          postContent: "我的新剧小美满上线啦！就在腾讯视频，快来看甜甜的恋爱吧",
          postImgsrc:
            "https://wx3.sinaimg.cn/large/007jQkvLgy1gdovhzy1vdj356o3ggqvg.jpg",
          comment_list: [
            { userName: "追剧狂魔", commentText: "周四晚八点准时收看！！！" },
            { userName: "yeahzzzz", commentText: "你好可爱啊！！！" }
          ]
        }
      ]
    };
  },
  components: {
    ActCard
  },
  created() {
    let uid = localStorage.getItem("userinfoid");
    this.$axios
      .get(
        "/postTable/getbylike",
        {
          params: {
            userId: uid
          }
        },
        {
          header: {
            emulateJSON: "ture",
            "Content-Type": "application/json"
          }
        }
      )
      .then(res => {
        if(res.data.code==0){
          this.$message("获取成功");
          this.postlist=res.data.data.records;
        }else{
          this.$message.error("获取失败！");
        }
      });
  },
  mounted() {
    window.console.log("aa");
  }
};
</script>

<style>
</style>