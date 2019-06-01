<template>
  <el-dialog title="扫描二维码"
             :visible.sync="dialogVisible"
             width="400px"
             append-to-body
  >
    <div class="qr-code-dialog">
      <img :src="qrCodeImg" alt="">
    </div>
  </el-dialog>
</template>

<script>
  import QrCodeImg from '@/assets/qrcode.png'

  export default {
    name      : "QrCodeDialog",
    props     : {
      visible: {
        type   : Boolean,
        default: false,
      }
    },
    data() {
      return {
        qrCodeImg: QrCodeImg
      }
    },
    computed  : {
      dialogVisible: {
        get() {
          return this.visible;
        },
        set(val) {
          this.$emit('update:visible', val);
        }
      }
    },
  }
</script>

<style lang='scss' rel="stylesheet/scss" type="text/scss">
  .qr-code-dialog {
    text-align: center;

    img {
      width: 350px;
      height: 350px;
    }
  }
</style>
