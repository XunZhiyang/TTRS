<template>
  <el-dialog title="NTG女团"
             custom-class="colorful-dialog"
             :visible.sync="dialogVisible"
             width="1000px"
             append-to-body
  >
    <div class="singer-dialog">
      <SingerCard v-for="singer in singers"
                 :key="singer.title"
                 :type="singer.type"
                 :title="singer.title"
                 :subtitle="singer.subtitle"
                 :img="singer.pic"
      >
        {{singer.desc}}
        <div class="order-buy" slot="footer" @click="showQrCode">
          <div><span class="icon ion-clock"></span>{{singer.number}} 票</div>
          <div class="btn-vote"><span class="icon ion-chatbox"></span> 支持她</div>
        </div>
      </SingerCard>
    </div>
  </el-dialog>
</template>

<script>
  import SingerCard from './SingerCard';
  import singers      from './singers';


  export default {
    name      : "SingerDialog",
    props     : {
      visible: {
        type   : Boolean,
        default: false,
      }
    },
    data() {
      return {
        singers
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
    methods: {
      showQrCode() {
        this.$emit('show-qr-code')
      }
    },
    components: {
      SingerCard
    }
  }
</script>

<style lang='scss' rel="stylesheet/scss" type="text/scss">
  .singer-dialog {
    height: 500px;
    display: flex;
    justify-content: space-between;

    .order-buy {
      padding-left: 10px;
      line-height: 40px;
      font-size: 14px;
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      background-color: #f9f9f9;

      .btn-vote {
        padding-right: 10px;
        background: linear-gradient(90deg, rgba(252, 156, 59, 1) 0%, rgb(226, 179, 82) 100%);
        line-height: 40px;
        color: #fff;
      }
    }
  }
</style>
