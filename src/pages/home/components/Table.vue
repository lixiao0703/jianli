<template>
  <div class="table">
      <div class="table-left">
          <p class="table-top">Table</p>
      </div>
      <div class="table-breadcrumb">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
            <el-breadcrumb-item>活动列表</el-breadcrumb-item>
            <el-breadcrumb-item>活动详情</el-breadcrumb-item>
          </el-breadcrumb>
      </div>
  </div>
</template>

<script>
  export default {
    name: 'HomeTable',
    data() {
      return {

      }
    },
  }
</script>

<style lang="stylus" scoped>
  .table
    width :83%
    float right
    margin-right 1%
    .table-left
      line-height .24rem
      float left
      height .24rem
      font-size .18rem
      margin .1rem 0rem .1rem 0rem
      padding-left .2rem
    .table-breadcrumb
      float right
      margin .1rem 0rem .1rem 0rem
      padding-right .2rem
      padding-top .05rem
      box-sizing border-box
</style>
