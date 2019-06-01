<template>
  <div class="flex-carousel">
    <ul class="clearfix">
      <li v-for="(item, index) in list"
          :key="item.title"
          :class="{active: index === activeIndex}"
          @mouseover="setActiveIndex(index)"
      >
        <div class="flex-carousel-mask">
          <h4>{{item.title}}</h4>
        </div>
        <div class="pic-auto" :style="{backgroundImage: `url(${item.img})`}"></div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name   : "FlexCarousel",
    props  : {
      list: {
        type   : Array,
        default: () => []
      }
    },
    data() {
      return {
        activeIndex: 0,
      }
    },
    methods: {
      setActiveIndex(index) {
        this.activeIndex = index;
      }
    }
  }
</script>

<style lang='scss' rel="stylesheet/scss" type="text/scss">
  .flex-carousel {
    width: 1200px;
    overflow: hidden;
    margin: 0 auto;

    .clearfix {
      zoom: 1;
    }

    ul {
      width: 1200px;
      height: 260px;
      margin: 0 auto;
      overflow: hidden;
      list-style: none;
      padding: 0;

      li {
        float: left;
        width: 133px;
        height: 260px;
        position: relative;
        overflow: hidden;
        cursor: pointer;
        -webkit-transition: width .5s;
        transition: width .5s;

        .flex-carousel-mask {
          position: absolute;
          overflow: hidden;
          width: 100%;
          height: 100%;
          left: 0;
          top: 0;
          background: rgba(0, 0, 0, .3);

          h4 {
            color: #fff;
            width: 30px;
            margin: 0 auto;
            display: block;
            font: 30px/30px 'PingFang SC';
            position: relative;
            padding: 30px 0 0 0;
          }
        }

        &.active {
          width: 402px;
        }

        .pic-auto {
          width: 100%;
          height: 100%;
          /*background: no-repeat;*/
          background-position-x: center;
          background-position-y: 0;
          background-size: initial;
          background-repeat: no-repeat;
          background-attachment: initial;
          background-origin: initial;
          background-clip: initial;
          background-color: initial;
        }

        .adv-intro {
          width: 92%;
          height: 40px;
          padding: 5px 4%;
          position: absolute;
          left: 0;
          bottom: -50px;
          background: #37D;
          color: #FFF;
          overflow: hidden;
        }
      }
    }
  }
</style>
