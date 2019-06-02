<template>
  <div
    class="collapse-menu"
    :class="{active: internalVisible}"
  >
    <slot></slot>

    <div class="toggle-block">
      <div class="btn-toggle" @click="toggleMenu">
        <i :class="btnToggleArrowClass"></i>
      </div>
    </div>
  </div>
</template>

<script>
  import TypeUtils from '@/utils/TypeUtils'


  /**
   * 可收缩菜单
   * @module CollapseMenu
   *
   * @props {boolean} - visible 菜单收缩状态
   *
   * @date 2018-12-10
   * @author Manny
   */
  export default {
    name    : "CollapseMenu",
    props   : {
      visible: {
        type   : [Boolean, undefined],
        default: undefined,
      },
    },
    data() {
      return {
        i_visible: false,
      }
    },
    computed: {
      btnToggleArrowClass() {
        return this.internalVisible ? 'el-icon-arrow-right' : 'el-icon-arrow-left';
      },
      internalVisible: {
        get() {
          if (TypeUtils.isBoolean(this.visible)) {
            return this.visible;
          } else {
            return this.i_visible;
          }
        },
        set(val) {
          if (TypeUtils.isBoolean(this.visible)) {
            this.$emit('update:visible', val);
          }
          this.i_visible = val;
        }
      }
    },
    methods : {
      toggleMenu() {
        let _this =this
       // console.log('测试测')
       _this.internalVisible = !_this.internalVisible;
        _this.$parent.showCode()
      }
    }
  }
</script>

<style lang='scss' rel="stylesheet/scss" type="text/scss">
  .collapse-menu {
    $collapse-menu-width: 100px;
    $collapse-menu-left: $collapse-menu-width + 10px;

    width: $collapse-menu-width;
    height: 30%;
    border-right: 1px solid #cad3df;
    background-color: #fff;
    /*position: absolute;*/
    position: fixed;
    z-index: 9999;
    top: 35%;
    bottom: 0;
    right: -$collapse-menu-left;
    transition: all .4s ease-in-out;

    &.active {
      display: block;
      right: 0;
    }

    .toggle-block {
      width: 20px;
      height: 100%;
      position: absolute;
      top: 0;
      right: $collapse-menu-width;
      background-color: transparent;

      .btn-toggle {
        height: 100px;
        width: 40px;
        position: absolute;
        right: 20px;
        top: calc(50% - 30px);
        border-radius: 4px;
        background-color: rgba(17, 17, 48, 0.63);
        opacity: 0;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all .2s ease-in-out;
        color: #fff;
      }

      &:hover .btn-toggle {
        opacity: 1;
      }
    }

  }
</style>
