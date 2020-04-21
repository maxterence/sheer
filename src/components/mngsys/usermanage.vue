<template>
  <div>
    <el-table :data="userlist">
      <el-table-column prop="userId" label="用户id" width="140"></el-table-column>
      <el-table-column prop="userName" label="姓名" width="120"></el-table-column>
      <el-table-column prop="userPhone" label="电话" width="200"></el-table-column>
      <el-table-column prop="userStatus" label="账号状态(1为正常0为封停)" width="230"></el-table-column>
      <el-table-column label="封停账号">
        <template slot-scope="scope">
          <el-button type="primary" @click="active(scope.row.userId,scope.row.userStatus)">aa</el-button>
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
      page:{
        size:8,
        current:1,
        total:100,
      },
      userlist: []
    };
  },
  created(){
    this.getData();
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
    active(userid,userstatus) {
      let cstatus = 0;
      window.console.log(userid+"-"+userstatus);
      if(userstatus==1){
        cstatus = 0;
      }else{
        cstatus =1;
      }
      let that=this;
      let upduser={
        userId:userid,
        userStatus:cstatus,
      }
      that.$axios.put("/userTable",upduser,{
        "emulateJSON":"true",
        "Content-Type": "application/json"
      }).then(res=>{
        let msg = res.data.msg
        that.$message("设置"+msg);
      })
    },
    getData(){
      let that=this;
      let url = "/userTable?current="+that.page.current+"&size="+that.page.size;
      that.$axios.get(url).then(res=>{
        if(res.data.code==0){
          
          that.userlist=res.data.data.records;
          that.page.total=res.data.data.total;
        }
      })
    },

    changeCurrent(current){
      this.page.current=current;
      this.getData();
    }
  }
};
</script>

<style>
</style>