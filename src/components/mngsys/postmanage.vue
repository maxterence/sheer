<template>
  <div style="height:100%;width:100%" v-loading="loading">
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
      <el-table-column label="帖子ID" prop="postId"></el-table-column>
      <el-table-column label="作者ID" prop="userId"></el-table-column>
      <el-table-column label="作者昵称" prop="postAuthor"></el-table-column>
      <el-table-column label="标题" prop="postTitle"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" type="danger" @click="handleDelete(scope.row.postId)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      v-if="page.total>page.size"
      :page-size="page.size"
      :pager-count="5"
      :current-page="page.current"
      @current-change="changeCurrent"
      layout="prev, pager, next"
      :total="page.total"
    ></el-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      posttable: [],
      searchkey: "",
      page: {
        size: 6,
        total: 100,
        current: 1
      }
    };
  },
  methods: {
    handleDelete(delPid) {
      window.console.log("del:" + delPid);
      this.$axios
        .delete("/postTable", {
          params: {
            idList: delPid
          }
        })
        .then(res => {
          if (res.data.code == 0) {
            this.$message("删除成功");
            this.getdata();
          } else {
            this.$message("删除失败");
          }
        })
        .catch(err => {
          window.console.log(err);
        });

    },
    handlesearch() {
      window.console.log(this.searchkey);
    },
    getdata() {
      this.loading = true;
      let that = this;
      let url =
        "/postTable?current=" + that.page.current + "&size=" + that.page.size;
      that.$axios.get(url).then(res => {
        if (res.data.code == 0) {
          that.posttable = res.data.data.records;
          that.page.total = res.data.data.total;
        }
      });
      this.loading = false;
    },
    changeCurrent(current) {
         this.page.current = current;
      this.getdata();
    }
  },
  mounted() {
    this.loading = true;
    if (this.posttable != null) {
      setTimeout(() => {
        this.loading = false;
      }, 3000);
    }
  },
  created() {
    this.getdata();
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