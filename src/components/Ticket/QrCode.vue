<template>
    <div>
      <el-dialog title="扫描二维码"
                 :visible.sync="qrShow"
                 width="400px"
                 append-to-body
                 custom-class="qrDialog"
                 :before-close="closeQr"
      >
        <div class="QrCode">
          <img :src="qrCodeImg" alt="">
        </div>
      </el-dialog>
    </div>
</template>

<script>
  import QrCodeImg from '@/assets/qrcode.png'
  import {mapActions,mapState} from  'vuex'
  export default {
    name: 'QrCode',
    computed:{
      ...mapState('ticket',{
        qrShow: state=>state.qrShow
      }),
    },
    data(){
      return{
        qrCodeImg:QrCodeImg
      }
    },
    methods:{
     ...mapActions('ticket',[
        'closeQr'
      ])
    }
  }
</script>

<style lang="scss">
  .qrDialog {
    text-align: center;

    img {
      width: 350px;
      height: 350px;
    }
  }
</style>
