
<template>
  <div style="float:left;margin:5px 15px;">
    <el-card class="box-card" :body-style="{ padding: '0px' }">
      <div slot="header" class="clearfix">
        <p style="margin:10px 20px;font-size:25px;height:50px;float:right">{{card.card_username}}</p>
        <el-avatar :src="card.card_avatarsrc" :size="60" fit="fill"></el-avatar>
      </div>
      <el-image :src="card.card_imgsrc" class="image" fit="contain" />
      <div class="card_describe">
        <h3>{{card.card_username}}</h3>
        <span>{{card.card_describe}}</span>
      </div>
      <!-- 按钮列表 -->
      <div class="btnlist">
        <!-- 喜欢按钮 -->
        <el-button circle icon="el-icon-star-off" class="card_btn"></el-button>
        <el-divider direction="vertical"></el-divider>
        <!-- 评论按钮组 -->
        <el-popover placement="right" width="300" trigger="click">
          <div>
            <el-input placeholder="评论一下吧" v-model="mycomment" style="width:200px"></el-input>
            <el-button type="primary">评论</el-button>
          </div>
          <el-button circle icon="el-icon-chat-line-square" slot="reference" class="card_btn"></el-button>
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
          <li v-for="uclist in card.comment_list " :key="uclist.username">
            <span style="font-weight:bold">{{uclist.cmtusername}}</span> :
            <span>{{uclist.cmt}}</span>
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
      card_userid: "",
      card_id: "",
      card_username: "",
      card_avatarsrc: "",
      card_describe: "",

      card_imgsrc: "",
      comment_list: []
    }
  },
  data() {
    return {
      mycomment: ""
    };
  },
  created: {}
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
  padding: 0 0 0 15px;
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
}
</style>