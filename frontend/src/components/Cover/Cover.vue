<template>
    <div>
      <el-dialog
        :visible.sync="coverShow"
        custom-class="cover"
        width="300px"
      >
        <div class="">
          <img :src="coverImg">
        </div>
      </el-dialog>
    </div>
</template>

<script>
  import CoverImage from '@/assets/cover.gif'
  export default {
    name: 'Cover',
    data(){
      return{
        coverImg:CoverImage,
        coverShow:true
      }
    },
    mounted () {
      let _this = this
      setTimeout(function () {
        _this.coverShow = false
      },1500)
    }
  }
</script>

<style lang="scss">
  .cover{
    background: none;
    border:none;
    box-shadow: none;
    .el-dialog__header{
      display: none;
    }
    .el-dialog__body{
      padding:0;
    }
    img{
      width: 300px;
      height: 300px;
      margin:auto;
    }
  }
</style>
