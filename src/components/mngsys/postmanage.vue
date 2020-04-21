<template>
  <div style="height:100%;width:100%">
    <div style="height:40px;width:100%;margin:10px 0">
      <el-input
        placeholder="搜索帖子"
        prefix-icon="el-icon-search"
        v-model="searchkey"
        clearable
        style="width:200px;"
      ></el-input>
      <el-button icon="el-icon-search" @click="handlesearch" circle style="margin-right:10vw;"></el-button>
    </div>
    <el-table :data="posttable">
      <el-table-column type="expand" style="width:100%" :show-overflow-tooltip="true">
        <template slot-scope="props">
          <div class="expform">
            <el-image
              style="width:200px;margin-right:50px;float:left;padding:15px;"
              :src="props.row.postImgsrc"
              :fit="fit"
            ></el-image>
            <el-form label-position="left" inline class="demo-table-expand">
              <!-- <el-form-item label="评论数">
                <span class>{{ props.row.commentnum }}</span>
              </el-form-item>
              <el-form-item label="点赞数">
                <span>{{ props.row.likenum }}</span>
              </el-form-item> -->
              <el-form-item label="内容">
                <span
                  style="width:300px;word-break:break-all;white-space:normal;"
                >{{ props.row.postContent }}</span>
              </el-form-item>
              <el-form-item label="分享链接">
               <el-link :href="props.row.postShopurl">{{ props.row.postShopurl }}</el-link> 
              </el-form-item>
            </el-form>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="作者ID" prop="userId"></el-table-column>
      <el-table-column label="作者昵称" prop="postAuthor"></el-table-column>
      <el-table-column label="标题" prop="postTitle"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" type="danger" @click="handleDelete(scope.row.postId)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination v-if="page.total>page.size" :page-size="page.size" :pager-count="5" :current-page="page.current" @current-change="changeCurrent" layout="prev, pager, next" :total="page.total"></el-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posttable: [
        {
          postId:'1',
          userId: "123121",
          postAuthor: "rrr",
          postTitle: "nonono",
          postContent: "87o7gg87oggiyoiuy8ghgiuoyiy8",
          postShopurl:"https://www.baidu.com",
          postImgsrc:
            "https://wx2.sinaimg.cn/mw690/b4917656gy1g7umi7pu4pj21jk1jku10.jpg",
          commentnum: "13",
          likenum: "1"
        },
        {
          postId:'2',
          userId: "12323121",
          postAuthor: "rerr",
          postTitle: "nonowwno",
          postShopurl:"https://www.baidu.com",
          postContent:
            "87o7gg87oggiyoiuy8ghgiuoyiy8asdfadsfadfadfadsfadsfasdlkcvl;alkdfjlakdjlfakjdf;lkajdf;asdfasdfadsfadsfadsfasdfasdfasdfadfkajsd;flkjas;kdfjalkjsfuyhasdifhahhdiuahvauhliuhsdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfargegfsfhstrhshshsthstrh",
          postImgsrc:
            "https://wx2.sinaimg.cn/mw690/b4917656gy1g7umi7pu4pj21jk1jku10.jpg",
          commentnum: "177",
          likenum: "1"
        },
        {
          postId:'3',
          userId: "1235651",
          postAuthor: "rgey42rr",
          postTitle: "nonono",
           postShopurl:"https://www.baidu.com",
          postContent: "87o7gg87oggiyoiuy8ghgiuoyiy8",
          postImgsrc:
            "https://wx2.sinaimg.cn/mw690/b4917656gy1g7umi7pu4pj21jk1jku10.jpg",
          commentnum: "13",
          likenum: "1"
        },
        {
          postId:'5',
          userId: "12323421",
          postAuthor: "rrrfasdfasas",
          postTitle: "nonono",
           postShopurl:"https://www.baidu.com",
          postContent: "87o7gg87oggiyoiuy8ghgiuoyiy8",
          postImgsrc:
            "https://wx2.sinaimg.cn/mw690/b4917656gy1g7umi7pu4pj21jk1jku10.jpg",
          commentnum: "112"
        }
      ],
      searchkey: "",
      page:{
        size:5,
        total:0,
        current:1,
      }
    };
  },
  methods: {
    handleDelete(delPid) {
      window.console.log(delPid);
    },
    handlesearch() {
      window.console.log(this.searchkey);
    },
    getdata(){
//        let that = this;
//  let url = "/postTable?current="+that.page.current+"&size="+that.page.size;
//       that.$axios.get(url).then(res=>{
//         if(res.data.code==0){
          
//           that.posttable=res.data.data.records;
//           that.page.total=res.data.data.total;
//         }
//       })
    },
    changeCurrent(current){
      window.console.log(current)
    }
  },
  created:{

  }
};
</script>

<style scoped>
.demo-table-expand {
  font-size: 0;
  height: auto;
  margin-right: 0;
  margin-bottom: 0;
  float: right;
  width: 500px;
}
.demo-table-expand label {
  width: 100px;
  color: #99a9bf;
  margin-right: 40px;
}
.el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 500px;
}
.expform {
  display: inline-block;
}
.expform :hover {
  background-color: #f0f0f0;
}
</style>