<template>
  <div style="height:100vh">
    <div style="margin-top: 20px;">
      <el-row :gutter="40">
        <el-col :span="6">
          <div class="grid-content">
            <div class="card-panel-iconf-div">
              <i class="el-icon-user"></i>
            </div>
            <div>
              <div class="card-panel-desc">
                <div class="title">用户数量</div>
                <countTo :startVal="0" :endVal="usercount" :duration="1000"></countTo>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content">
            <div class="card-panel-iconf-div">
              <i class="el-icon-s-order"></i>
            </div>
            <div>
              <div class="card-panel-desc">
                <div class="title">博客总数</div>
                <countTo :startVal="0" :endVal="postcount" :duration="2000"></countTo>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content">
            <div class="card-panel-iconf-div">
             <i class="el-icon-s-data"></i>
            </div>
            <div>
              <div class="card-panel-desc">
                <div class="title">最新博客</div>
                <countTo :startVal="0" :endVal="postcount" :duration="2000"></countTo>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content">
            <div class="card-panel-iconf-div">
             <i class="el-icon-view"></i>
            </div>
            <div>
              <div class="card-panel-desc">
                <div class="title">阅读总数</div>
                <countTo :startVal="0" :endVal="6666" :duration="3000"></countTo>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <BlogandUserchar></BlogandUserchar>
  </div>
</template>

<script>
import countTo from "vue-count-to";
import BlogandUserchar from "./BlogAndUserLine.vue";
import axios from "axios";
export default {
  data() {
    return {
      usercount: 0,
      postcount: 0
    };
  },
  components: { countTo, BlogandUserchar },
  methods: {
    getusercount() {
      return axios.get("/userTable");
    },
    getpostcount() {
      return axios.get("/postTable");
    }
  },
  mounted() {
    axios.all([this.getusercount(), this.getpostcount()]).then(
      axios.spread((userres, postres) => {
        window.console.log("usercount");
        window.console.log(userres);

        let usercount = userres.data.data.records;
        let postcount = postres.data.data.records;
        this.usercount = usercount.length + 1;
        this.postcount = postcount.length + 1;
        window.console.log(usercount);
        window.console.log(postcount);
      })
    );
  },

  
};
</script>

<style scoped>
.el-row {
  margin-bottom: 20px;
}

.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  height: 110px;
  background: #fff;
  position: relative;
  overflow: hidden;
  cursor: pointer;
}
.card-panel-iconf-div {
  color: #40c9c6;
  margin: 12px 0 0 14px;
  padding: 15px;
  float: left;
  border-radius: 6px;
  transition: all 0.5s ease-out;
}
.grid-content:hover .card-panel-iconf-div {
  background: #40c9c6;
  color: #fff;
}
.panel-icon {
  font-size: 50px;
}
.card-panel-desc {
  float: right;
  margin: 25px;
  margin-left: 0px;
  font-size: 20px;
  font-weight: bold;
  color: #606266;
}
.title {
  text-align: right;
  font-size: 16px;
  margin-bottom: 10px;
}
</style>
