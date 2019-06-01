<template>
  <div class="animate-list-block">
    <ul class="animate-list" ref="animationListBlock" :style="transitionStyle">
      <AnimateListItem v-for="(item, index) in list"
                       :key="index"
      >
        <div>姓名: {{item.name}}</div>
        <div>证件类型: {{item.idType}}</div>
        <div>证件号: {{item.idNumber}}</div>
        <div>失信原因: {{item.reason}}</div>
      </AnimateListItem>
    </ul>
  </div>
</template>

<script>
  import AnimateListItem from './AnimateListItem';


  export default {
    name      : "AnimateList",
    props     : {
      list: {
        type   : Array,
        default: () => []
      }
    },
    data() {
      return {
        transitionY: 0,
        intervalId : null
      }
    },
    computed  : {
      transitionStyle() {
        return {
          transition: `transform 1000ms ease-out 0s !important`,
          transform : `translateY(${this.transitionY}px) !important`
        }
      },
    },
    mounted() {
      this.$nextTick(function () {
        this.intervalId = setInterval(() => {
          if (this.transitionY < (this.list.length - 2) * -120) {
            this.transitionY = 0;
          } else {
            this.transitionY -= 120;
          }
        }, 1000)
      })
    },
    destroyed() {
      console.log(this.intervalId);
      clearInterval(this.intervalId);
    },
    components: {
      AnimateListItem
    }
  }
</script>

<style lang='scss' rel="stylesheet/scss" type="text/scss">
  .animate-list-block {
    width: 100%;
    overflow: hidden;
    padding: 0;
    margin: 0;
    height: 360px;

    .animate-list {
      margin: 0;
      padding: 0;
    }
  }
</style>
