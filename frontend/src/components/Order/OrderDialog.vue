<template>
  <el-dialog title="点餐"
             custom-class="colorful-dialog"
             :visible.sync="dialogVisible"
             width="1000px"
             append-to-body
  >
    <div class="order-dialog">
      <OrderCard v-for="food in foods"
                 :key="food.title"
                 :type="food.type"
                 :title="food.title"
                 :subtitle="food.subtitle"
                 :img="food.pic"
      >
        {{food.desc}}
        <div class="order-buy" slot="footer" @click="showQrCode">
          购买
        </div>
      </OrderCard>
    </div>
  </el-dialog>
</template>

<script>
  import OrderCard from './OrderCard';
  import foods     from './foods';


  export default {
    name      : "OrderDialog",
    props     : {
      visible: {
        type   : Boolean,
        default: false,
      }
    },
    data() {
      return {
        foods
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
    methods   : {
      showQrCode() {
        this.$emit('show-qr-code')
      }
    },
    components: {
      OrderCard
    }
  }
</script>

<style lang='scss' rel="stylesheet/scss" type="text/scss">
  .order-dialog {
    height: 500px;
    display: flex;
    justify-content: space-between;

    .order-buy {
      line-height: 40px;
      background: linear-gradient(90deg, rgba(252, 156, 59, 1) 0%, rgba(255, 201, 93, 1) 100%);
      color: #fff;
      text-align: center;
      font-size: 20px;
      cursor: pointer;
    }
  }
</style>
