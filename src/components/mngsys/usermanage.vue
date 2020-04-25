<template>
  <div>
    <el-table :data="userlist" v-loading="loading">
      <el-table-column prop="userId" label="用户id" width="140"></el-table-column>
      <el-table-column prop="userName" label="姓名" width="120"></el-table-column>
      <el-table-column prop="userPhone" label="电话" width="200"></el-table-column>
      <el-table-column prop="userStatus" label="账号状态(1为正常0为封停)" width="230"></el-table-column>
      <el-table-column label="封停账号">
        <template slot-scope="scope">
          <el-button @click="active(scope.row.userId,scope.row.userStatus)">封停/解封</el-button>
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
      page: {
        size: 8,
        current: 1,
        total: 100
      },
      userlist: []
    };
  },
  created() {
    this.getData();
  },
  mounted() {
    this.loading = true;
    if (this.userlist != null) {
      setTimeout(() => {
        this.loading = false;
      }, 1500);
    }
  },
  methods: {
    active(userid, userstatus) {
      let msgg="";
      let cstatus = 0;
      // window.console.log(userid+"-"+userstatus);
      if (userstatus == 1) {
        cstatus = 0;
        msgg="封停"
      } else {
        msgg="解封"
        cstatus = 1;
      }
      let that = this;
      let upduser = {
        userId: userid,
        userStatus: cstatus
      };
      that.$axios
        .put("/userTable", upduser, {
          emulateJSON: "true",
          "Content-Type": "application/json"
        })
        .then(res => {
          let msg = res.data.msg;
          that.$message(msgg + msg);
        });
    },
    getData() {
      let that = this;
      let url =
        "/userTable?current=" + that.page.current + "&size=" + that.page.size;
      that.$axios.get(url).then(res => {
        if (res.data.code == 0) {
          that.userlist = res.data.data.records;
          that.page.total = res.data.data.total;
        }
        this.loading = false;
      });
    },

    changeCurrent(current) {
      this.page.current = current;
      this.getData();
    }
  },
  computed: {
    ustatus() {
      if (this.status == 1) {
        return "正常";
      } else {
        return "封停";
      }
    }
  }
};
</script>

<style>
</style>