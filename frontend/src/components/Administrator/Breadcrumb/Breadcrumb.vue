<template>
    <div id="Breadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/Administrator' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>{{breadcrumb.secondName}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
</template>

<script>
  export default {
    name: 'Breadcrumb',
    props:['breadcrumb'],
    data(){
      return{

      }
    }
  }
</script>

<style scoped  lang="scss">
  #Breadcrumb  /deep/ .el-breadcrumb__item{
    line-height: 60px;
  }
#Breadcrumb{
  width: 100%;
  height: 60px;
}
</style>
