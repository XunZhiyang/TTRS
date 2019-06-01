<template>
  <el-dialog title="寿命"
             :visible.sync="dialogVisible"
             width="600px"
             append-to-body
  >
    <div class="life-time-dialog">
      <h1>女团已经陪您走过了3000公里的里程</h1>
      <img :src="imgFormula">
      <h1>您已经年轻了5岁</h1>
    </div>
  </el-dialog>
</template>

<script>
  import imgFormula from '@/assets/formula.png'
  export default {
    name      : "LifeTimeDialog",
    props     : {
      visible: {
        type   : Boolean,
        default: false,
      }
    },
    data() {
      return {
        imgFormula
      };
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
    },
    components: {
    }
  }
</script>

<style lang='scss' rel="stylesheet/scss" type="text/scss">
  .life-time-dialog {
    text-align: center;

    img {
      width: 500px;
    }

    h1 {
      font-weight: 700;
      font-size: 24px;
      color: #2C2C2C;
      margin-bottom: 15px;
    }
  }
</style>
