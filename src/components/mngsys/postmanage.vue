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
    <el-table :data="tableData">
      <el-table-column type="expand" style="width:100%" :show-overflow-tooltip="true">
        <template slot-scope="props">
          <div class="expform">
            <el-image
              style="width:200px;margin-right:50px;float:left;padding:15px;"
              :src="props.row.imageurl"
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
                >{{ props.row.content }}</span>
              </el-form-item>
            </el-form>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="作者ID" prop="authorid"></el-table-column>
      <el-table-column label="作者昵称" prop="author"></el-table-column>
      <el-table-column label="标题" prop="title"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
  :page-size="20"
  :pager-count="11"
  layout="prev, pager, next"
  :total="1000">
</el-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          authorid: "123121",
          author: "rrr",
          title: "nonono",
          content: "87o7gg87oggiyoiuy8ghgiuoyiy8",
          imageurl:
            "https://wx2.sinaimg.cn/mw690/b4917656gy1g7umi7pu4pj21jk1jku10.jpg",
          commentnum: "13",
          likenum: "1"
        },
        {
          authorid: "12323121",
          author: "rerr",
          title: "nonowwno",
          content:
            "87o7gg87oggiyoiuy8ghgiuoyiy8asdfadsfadfadfadsfadsfasdlkcvl;alkdfjlakdjlfakjdf;lkajdf;asdfasdfadsfadsfadsfasdfasdfasdfadfkajsd;flkjas;kdfjalkjsfuyhasdifhahhdiuahvauhliuhsdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfargegfsfhstrhshshsthstrh",
          imageurl:
            "https://wx2.sinaimg.cn/mw690/b4917656gy1g7umi7pu4pj21jk1jku10.jpg",
          commentnum: "177",
          likenum: "1"
        },
        {
          authorid: "1235651",
          author: "rgey42rr",
          title: "nonono",
          content: "87o7gg87oggiyoiuy8ghgiuoyiy8",
          imageurl:
            "https://wx2.sinaimg.cn/mw690/b4917656gy1g7umi7pu4pj21jk1jku10.jpg",
          commentnum: "13",
          likenum: "1"
        },
        {
          authorid: "12323421",
          author: "rrrfasdfasas",
          title: "nonono",
          content: "87o7gg87oggiyoiuy8ghgiuoyiy8",
          imageurl:
            "https://wx2.sinaimg.cn/mw690/b4917656gy1g7umi7pu4pj21jk1jku10.jpg",
          commentnum: "112"
        }
      ],
      searchkey: ""
    };
  },
  methods: {
    handleDelete(index, row) {
      window.console.log(index, row);
    },
    handlesearch() {
      window.console.log(this.searchkey);
    }
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