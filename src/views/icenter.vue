<template>
  <div class="icenter">
    <el-row>
      <el-col :span="7" offset="2">
        <div class="icenter_left">
          <div style="text-align:center">
            <el-avatar :size="80" :src="User.userAvatar"></el-avatar>
          </div>
          <el-divider content-position="center">
            <span style="font-weight:bold;font-size:28px;text-align:center">{{User.userName}}</span>
          </el-divider>
          <div style="padding:0 20px;">
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
        <div class="container" v-if="cardlist.length>0">
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
      User: {},
      cardlist: [ ],
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
      }).then(res=>{
        if(res.data.code==0){
          this.User=res.data.data.records[0];
          if(res.data.data.records[0].userStatus==0){
            this.$alert("您的账号已封停，相关功能将受限制！","警告",{
              confirmButtomText:"确定"
            })
          }
        }else{
          this.$message.error("获取个人信息失败")
        }
      });
    },
    getuserpost() {
      var uid = localStorage.getItem("userinfoid");
      return this.$axios.get("postTable/getbyuserid", {
        params: {
          userId: uid
        }
      }).then(res=>{
        if(res.data.code==0){
          this.cardlist=res.data.data.records;
        }    
      }).catch(err=>{
          this.$message.error("获取帖子失败")
        window.console.log(err);
      });
    },
  },

  mounted() {
    this.getuser();
    this.getuserpost();
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