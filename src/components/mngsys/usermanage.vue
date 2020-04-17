<template>
  <div>
    <el-table :data="userlist">
      <el-table-column prop="userid" label="用户id" width="140"></el-table-column>
      <el-table-column prop="username" label="姓名" width="120"></el-table-column>
      <el-table-column prop="userphone" label="电话" width="200"></el-table-column>
      <el-table-column prop="status" label="账号状态(1为正常0为封停)" width="230"></el-table-column>
      <el-table-column label="封停账号">
        <template slot-scope="scope">
    
          <el-button type="primary" @click="active(scope.row.userid)">aa</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination :page-size="20" :pager-count="11" layout="prev, pager, next" :total="1000"></el-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userlist: []
    };
  },
  mounted() {
    // this.$axios.get("userTable").then(res=>{
    //   this.userlist=res.data.data.record;
    // }).catch(res=>{
    //   window.console.log(res);
    // })


    this.userlist = [
      {
        userid: "1231238126",
        username: "aaaaaa",
        userphone: "19811182391",
        status: 1,
        active: true
      },
      {
        userid: "1231212233",
        username: "aa12a",
        userphone: "1981134391",
        status: 0,
        active: true
      },
      {
        userid: "1231238167",
        username: "aa1231aaaa",
        userphone: "1943252391",
        status: 1,
        active: false
      },
      {
        userid: "1231138235",
        username: "aaaaqweaa",
        userphone: "1923482391",
        status: 1,
        active: true
      },
      {
        userid: "1231238132",
        username: "a233aa",
        userphone: "19812382391",
        status: 1,
        active: true
      },
      {
        userid: "1231275322",
        username: "aaaaqweqaa",
        userphone: "19811182391",
        status: 1,
        active: false
      }
    ];
  },
  methods: {
    active(userid) {
      window.console.log(userid);
    },
  }
};
</script>

<style>
</style>