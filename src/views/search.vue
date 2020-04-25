<template>
  <div v-loading="loading">
    <el-row>
      <el-col :span="16" :offset="4">
        <div class="gjc">
          关键词： {{kewords}}
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="10" :offset="7">
        <ActCard :card="card" v-for="(card, index) in postlist" :key="index"></ActCard>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import ActCard from "@/components/ActCard";
export default {
  components: {
    ActCard
  },
  data() {
    return {
      loading:false,
      postlist: [ ],
      kewords:'',
    };
  },

 created() {
   this.loading=true;
   this.postlist=null;
    this.getdata();
    },
  methods:{
    getdata(){
    let that = this;
    var key = that.$route.params.searchkeywords;
  this.kewords=key;
    //发送搜索请求。
    that.$axios
      .get("/postTable/search", 
      {params:{keyword:key}}, {
        header: {
          " emulateJSON": "true",
          "Content-Type": "application/json"
        }
      })
      .then(res => {
        if(res.data.code==0){
          if(!res.data.data.records){
            var dat = res.data.data;
            that.postlist=dat;        
          }else if(res.data.data.records[0]==null){            
            this.$message.error("无数据");
          }else{
            that.$message("成功");
            that.postlist=res.data.data.records;         
          }
        }else{
          this.$message.error("查找失败");
          return 
        }
      }).catch(res=>{
        window.console.log(res);
      });
    this.loading=false;
    }
  },
  

};
</script>
    
<style>
.gjc{
  text-align: center;
  background-color: #fff;
  padding:10px;
  width:100%;
  height: 30px;
  font-size: 18px;
}
</style>