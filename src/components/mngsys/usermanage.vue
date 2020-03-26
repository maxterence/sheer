<template>
  <div>
    <el-table :data="tableData">
      <el-table-column prop="date" label="日期" width="140"></el-table-column>
      <el-table-column prop="name" label="姓名" width="120"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
      <el-table-column label="封停账号">
        <template slot-scope="scope">
          <el-switch v-model="scope.row.active" active-color="red" inactive-color="#13ce66"></el-switch>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
data() {
    const item = {
      date: "2016-05-02",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1518 弄",
      active:false,
    };
    return {
      tableData: Array(20).fill(item)
    };
  }
}
</script>

<style>

</style>