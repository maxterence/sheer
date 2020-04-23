
<template>
  <div style="float:left;margin:5px 15px;height:auto">
    <el-card class="box-card" :body-style="{ padding: '0' , }">
      <div slot="header" class="clearfix">
        <p
          style="margin:10px 20px;font-size:25px;height:50px;float:right;color:orangered;"
        >{{card.postAuthor}}</p>
        <el-avatar :src="card.userAvatar" :size="60" fit="fill"></el-avatar>
      </div>
      <el-image :src="card.postImgsrc" v-if="card.postImgsrc" class="image" fit="contain" />
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
            直达链接：
            <el-link :href="card.postShopurl">{{card.postShopurl}}</el-link>
          </div>
          <el-button circle icon="el-icon-shopping-cart-full" slot="reference" class="card_btn"></el-button>
        </el-popover>
        <!-- 删除按钮 -->
        <el-button
          type="danger"
          circle
          icon="el-icon-delete"
          class="card_btn"
          style="float:right;margin-right:15px"
          v-if="delshow"
          @click="delpost"
        ></el-button>
      </div>
      <!-- 评论列表 -->
      <div class="cmtBlog">
        <div v-if="!commentempty ">
          <ul>
            <li v-for="uclist in comment_list " :key="uclist.userName" class="cmtlstli">
              <span style="font-weight:bold">{{uclist.userName}}</span> :
              <span>{{uclist.commentText}}</span>
            </li>
          </ul>
        </div>
        <div v-else>
          <p style="color: rgb(118, 118, 118);margin-left:15px;">还没有评论哦</p>
        </div>
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
      postTitle: "",
      userAvatar: "",
      postContent: "",
      postImgsrc: "",
      postShopurl: ""
    }
  },
  data() {
    return {
      comment_list: [],
      mycomment: "",
      commentempty: true,
      delshow: false,
      uid: ""
    };
  },

  mounted() {
    window.console.log("mounted:" + this.card.postId);
    var uid = localStorage.getItem("userinfoid");
    this.uid = uid;
    if (this.card.userId === uid) {
      this.delshow = true;
    } else {
      this.delshow = false;
    }
  },

  created() {
    window.console.log("created:" + this.card.postId);
    this.getcomment();
  },

  methods: {
    delpost() {
      let delPid = this.card.postId;
      
      this.$confirm('确认删除?',"提示",{
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
      }).then(()=>{
       
      this.$axios
        .delete("/postTable", {
          params: {
            idList: delPid
          }
        })
        .then(res => {
          if (res.data.code == 0) {
            this.$message("删除成功");
          } else {
            this.$message("删除失败");
          }
        })
        .catch(err => {
          window.console.log(err);
        });
      }).catch(()=>{
        this.$message("取消删除");
      })
     
    },
    getcomment() {
      let pid = this.card.postId;
      // 获取评论
      this.$axios
        .get("/commentTable/getbypost", {
          params: {
            postId: pid
          }
        })
        .then(res => {
          if (res.data.code == 0) {
            var data = res.data.data.records;
            if (data.length == 0) {
              this.commentempty = true;
            } else {
              this.commentempty = false;
              for (var i = 0; i < data.length; i++) {
                this.comment_list.push(data[i]);
                this.$set(this.comment_list, i, data[i]);
                window.console.log(i);
                window.console.log(this.comment_list[i]);
              }
            }
          } else {
            window.console.log(pid + "错误");
          }
        });
    },
    like() {
      let that = this;
      window.console.log(that.card.postId);
      var userid = localStorage.getItem("userinfoid");
      var cardid = that.card.postId;
      //确认登录
      if (
        that.$store.state.userinfo == null ||
        localStorage.getItem("userinfoid") == null
      ) {
        //未登录
        that.$alert("", "请先登录！", {
          confirmButtonText: "确定"
        });
      } else if (localStorage.getItem("userinfostatus") == 0) {
        that.$alert("您的账号已被封停，部分功能将受限制！", "警告！！", {
          confirmButtomText: "确定"
        });
      } else {
        //已登录，发送点赞信息
        that.$axios
          .post(
            "/likeTable",
            {
              userId: userid,
              postId: cardid
            },
            { emulateJSON: "true", "Content-Type": "application/json" }
          )
          .then(res => {
            if (res.data.code == 0) {
              that.$message("喜欢的就要多点赞！");
            } else {
              that.$message.error("错误");
            }
          })
          .catch(err => {
            window.console.log(err);
            that.$message.error("错误");
          });
      }
      window.console.log(that.card.postId);
    },
    comment() {
      let that = this;
      let userid = localStorage.getItem("userinfoid");
      let username = localStorage.getItem("userinfoname");
      let comment = that.mycomment;
      let postid = that.card.postId;

      var commentdata = {
        userId: userid,
        userName: username,
        postId: postid,
        commentText: comment
      };

      window.console.log(
        userid + " has cmt " + that.mycomment + "on" + that.card.postId
      );
      if (
        that.$store.state.userinfo == null ||
        localStorage.getItem("userinfoid") == null
      ) {
        that.$alert("", "请先登录！", {
          confirmButtonText: "确定"
        });
      } else if (localStorage.getItem("userinfostatus") == 0) {
        that.$alert("您的账号已被封停，部分功能将受限制！", "警告！！", {
          comfirmButtomText: "确定"
        });
      } else {
        //已登陆
        //发送评论

        that.$axios
          .post("/commentTable", commentdata, {
            header: {
              emulateJSON: "true",
              "Content-Type": "application/json"
            }
          })
          .then(res => {
            if (res.data.code == 0) {
              that.$message("评论成功");
              that.mycomment = "";
              this.getcomment();
            }
          });
      }
    }
  }
};
</script>

<style scoped>
/* .cmtlstli{
  border-bottom: 1px solid rgb(218, 218, 218);
} */
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
  padding: 10px 10px 0 10px;
}

.btnlist {
  margin: 30px 0 15px 15px;
}
.cmtBlog {
  border-top: 1px solid rgb(223, 223, 223);
  padding: 5px 15px 10px;
  font-size: 14px;
}
ul {
  list-style: none;
  padding: 0;
  margin: 5px 0;
}
h3 {
  margin: 5px 0;
  color: o;
}
</style>