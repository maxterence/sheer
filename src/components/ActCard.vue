
<template>
  <div style="float:left;margin:5px 15px;height:auto">
    <el-card class="box-card" :body-style="{ padding: '0' , }">
      <div slot="header" class="clearfix">
        <p style="margin:10px 20px;font-size:25px;height:50px;float:right;color:orangered;">{{card.postAuthor}}</p>
        <el-avatar :src="card.userAvatar" :size="60" fit="fill"></el-avatar>
      </div>
      <el-image :src="card.postImgsrc" class="image" fit="contain" />
      <div class="card_describe">
        <h3>{{card.postTitle}}</h3>
        <span>{{card.postContent}}</span>
      </div>
      <!-- 按钮列表 -->
      <div class="btnlist">
        <!-- 喜欢按钮 -->
        <el-button circle icon="el-icon-star-off" class="card_btn" @click="like"></el-button>
        
        <el-divider direction="vertical"></el-divider>
        <!-- 评论按钮组 -->
        <el-popover placement="buttom" width="420" trigger="click">
          <div>
            <el-input placeholder="评论一下吧" v-model="mycomment" style="width:350px"></el-input>
            <el-button type="primary" @click="comment">评论</el-button>
          </div>
          <el-button circle icon="el-icon-chat-line-square" slot="reference" class="card_btn"></el-button>
        </el-popover>
        <el-divider direction="vertical"></el-divider>
        <!-- 购物连接按钮 -->
        <el-popover placement="top" width="420" trigger="hover">
          <div>
            直达链接：<el-link :href="card.postShopurl">{{card.postShopurl}}</el-link>           
          </div>
          <el-button circle icon="el-icon-shopping-cart-full" slot="reference" class="card_btn"></el-button>
        </el-popover>
        <!-- 删除按钮 -->
        <el-button
          type="danger"
          circle
          icon="el-icon-delete"
          class="card_btn"
          style="float:right"
          v-if="$store.state.icenterdeleteshow"
        ></el-button>
      </div>
      <!-- 评论列表 -->
      <div class="cmtBlog">
        <ul>
          <li v-for="uclist in card.comment_list " :key="uclist.userName">
            <span style="font-weight:bold">{{uclist.userName}}</span> :
            <span>{{uclist.commentText}}</span>
          </li>
        </ul>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  props: {
    card: {
      postId: "",
      userId: "",
      postAuthor: "",
      postTitle:'',
      userAvatar: "",
      postContent: "",
      postImgsrc: "",
      postShopurl:"",
      comment_list: []
    }
  },
  data() {
    return {
      mycomment: ""
    };
  },
  // mounted: {
  //   this.$axios.get("/commentTable/getbypost",{
  //    params:card.card_id
  //   },{
  //     "emulateJSON":"true","content-Type":"application/json"
  //   }).then(res=>{
  //     this.card.comment_list=res.data.data.record
  //   })
  // },
  methods:{
    like(){
      let that=this;
      window.console.log(that.card.card_id);
        //确认登录
      if(that.$store.state.userinfo==null || localStorage.getItem("userInfo")==null){
        //未登录
        that.$alert("","请先登录！",{
          confirmButtonText: "确定",
        })
      }else{
        //已登录，发送点赞信息
      that.$message("喜欢的就要多点赞！")
      }
      window.console.log(that.card.card_id);
    },
    comment(){
      let that=this;
      window.console.log(that.card.card_id+" has cmt "+that.mycomment)
      if(that.$store.state.userinfo==null || localStorage.getItem("userinfoid")==null){
           that.$alert("","请先登录！",{
           confirmButtonText: "确定",
        })
      }else{
        //已登陆
        //发送评论
        that.$message("评论成功");
      }
    },
  }
};
</script>

<style scoped>
.cardcontainer {
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.clearfix:before,
.clearfix:after {
  display: inline;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 480px;
}
.image {
  width: 100%;
}
.el-card__body {
  padding: 0;
}
.card_describe {
  text-decoration: saddlebrown;
  padding: 0 10px 0 15px;
}

.btnlist {
  margin: 10px 0 10px 15px;
}
.cmtBlog {
  border-top: 1px solid rgb(211, 211, 211);
  padding: 10px 15px;
}
ul {
  list-style: none;
  padding: 0;
  margin: 5px 0;
}
h3 {
  margin: 5px 0;
  color:o;
}
</style>