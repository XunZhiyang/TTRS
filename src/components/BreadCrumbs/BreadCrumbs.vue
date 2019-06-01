<template>
    <div id="BreadCrumbs">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item v-for="(item,index) in bread" :key="index" :to="{path: ''+ item.path}">{{item.name}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
</template>

<script>
  export default {
    name: 'BreadCrumbs',
    props:['bread'],
    data(){
      return{
      }
    },

  }
</script>

<style scoped lang="scss">
 #BreadCrumbs /deep/ .el-breadcrumb__item{
   height: 60px;
   line-height: 60px;
 }
#BreadCrumbs{
  width: 100%;
  height: 60px;
}
</style>
