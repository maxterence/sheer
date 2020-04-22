<template>
  <div v-loading="loading">
    <el-row>
      <el-col :span="10" :offset="7">
        <ActCard :card="card" v-for="(card, indexx) in likepostlist" :key="indexx"></ActCard>
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
      likepostlist: [
        // {
        //   postId: "1",
        //   postAuthor: "科技圣斗士",
        //   userAvatar: require("../assets/images/head/head1_1.png"),

        //   postContent:
        //     "这几天计划对这三个旗舰机做个对比，华为p40pro，小米10pro，oppo findx2pro，大家想了解哪些？性能，续航，快充，边玩边充，屏幕，声音，拍照，摄像，防抖，长焦，微距，手感，刷新率，你们最关心的是啥？",
        //   postImgsrc:
        //     "https://wx4.sinaimg.cn/large/7fb5a117ly1gdpxoufyr9j22bc334npe.jpg",
        //   postShopurl: "https://www.baidu.com",
        //   comment_list: [
        //     { userName: "用户111", commentText: "续航如何！！！拍照好看吗！" },
        //     {
        //       userName: "锦鲤本利",
        //       commentText: "都喜欢！！！抽奖送给我吧！！！！"
        //     }
        //   ]
        // },
        // {
        //   postId: "3",
        //   postAuthor: "菜谱大师",
        //   userAvatar: require("../assets/images/head/head2_1.png"),
        //   postContent:
        //     "【超级香酥的蜂蜜脆吐司】吐司的神仙吃法了解一下？超级香酥的蜂蜜脆吐司，当早餐甜点都合适，,香酥好吃,做早餐简直太好吃了,烘焙小白们一定要试试~[哈哈]1、准备好食材,吐司去掉四边,切成三角形。黄油隔热水融化。融化的黄油中加入一勺蜂蜜。勾吐司两面都刷上黄油蜂蜜,再撒一些粗粒砂糖。2、烤箱提前预热,上下火180度烤20分钟即可。",
        //   postImgsrc:
        //     "https://ww2.sinaimg.cn/orj360/62391dc8ly1gdogjxodn7j20u013qdlh.jpg",
        //   comment_list: [
        //     { userName: "吃货吃吃吃", commentText: "好香！周末试试！！" },
        //     { userName: "user1231231", commentText: "啊，好懒，我还是去买吧" }
        //   ]
        // }
      ]
    };
  },

 created() {
   this.loading=true;
   this.likepostlist=null;
    this.getdata();
    },
  methods:{
    getdata(){
    let that = this;
    var key = that.$route.params.searchkeywords;
    window.console.log("key:"+key);
    
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
        window.console.log("res");
        window.console.log(res);
          window.console.log(this.likepostlist);
        if(res.data.code==0){
          window.console.log(res.data);
          if(!res.data.data.records){
            var dat = res.data.data;
            that.likepostlist=dat;
            window.console.log("aaaa");
            window.console.log(this.likepostlist);
            
          }else if(res.data.data.records[0]==null){
            
            this.$message.error("无数据");
          }else{
            that.$message("成功");
            window.console.log("babb")
            that.likepostlist=res.data.data.records;
            
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
</style>