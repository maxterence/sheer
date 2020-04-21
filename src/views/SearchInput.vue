<template>
  <div style="height:70vh">
    <el-row style="margin-top:30vh;">
      <el-col :span="6" :offset="10">
        <span style="font-size:56px;text-align:center"> <i class="el-icon-search"></i> 搜 索</span>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12" :offset="6">
        <div class="searchinput">
          <el-input
            placeholder="搜索动态"
            prefix-icon="el-icon-search"
            v-model="searchkeywords"
            clearable
            style="width:80%;margin-right:15px"
          ></el-input>
          <el-button icon="el-icon-search" @click="handlesearch" type="primary"></el-button>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchkeywords: ""
    };
  },
  methods: {
    handlesearch() {
      //处理搜索的方法

      let searchkeywords = this.searchkeywords;
      if(searchkeywords==null||searchkeywords==""){
          this.$alert("请输入搜索词！！",{
              comfirmButtomText:"好的"
          })
      }else{
          this.$router.push({ path: "/search/" + searchkeywords });
      }
    }
  }
};
</script>

<style>
.searchtext {
}
.searchinput {
  display: inline-block;
  margin-top: 20px;
  width: 55vw;
}
</style>