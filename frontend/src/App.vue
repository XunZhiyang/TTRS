<template>
  <div id="app" class="theme-color-green">
    <router-view/>
    <el-footer class="el-footer">
    <div class="footerWord">
      <font size="2">
        @allrights reserved NTG <font size="1">2019-2020</font> <br>
        在线客服（qq）：141951602<br>
        本网站开发过程中没有任何程序员受到不可磨灭的伤害<br>
      </font>
    </div>
    <div class="footerImg">
      <img :src="url1" />
    </div>
  </el-footer>
  </div>
</template>

<script>
  import store from './store'
  export default {
    store,
    name: 'App',
    data()
    {
      return{
        url1: require( '../static/images/qrcode.png'),
      }
    }
  }
</script>

<style lang='scss' rel="stylesheet/scss" type="text/scss">
  @import "style/theme-color";

  .el-footer{
    width: 100%;
    height: 140px !important;
    background-color: rgb(228, 228, 228) !important;
    padding: 20px 0px;
    display: flex;
    /*position: absolute;*/
    justify-content: center;
    .footerWord{
      /*margin-top:10px;*/
      font-size: 20px;
      line-height: 30px;
      font-weight: bold;
      color: #000000;
    }
    .footerImg{
      margin-left: 140px;
      /*margin-top: 10px;*/
      height: 130px;
      img{
        height: 100px;
      }
    }
  }
</style>
