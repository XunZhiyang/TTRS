<template>
  <li class="animate-list-item">
    <slot></slot>
  </li>
</template>

<script>
  export default {
    name: "AnimateListItem"
  }
</script>

<style lang='scss' rel="stylesheet/scss" type="text/scss">
  .animate-list-item {
    background-color: rgba(110, 120, 130, 0.3);
    width: 100%;
    height: 100px;
    color: #fff;
    cursor: pointer;
    overflow: hidden;
    margin: 20px 0 0 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 10px;
    transition: all .5s;
    box-shadow: 0 6px 6px rgba(0, 0, 0, 0.2);
    &:hover {
      background-color: rgba(110, 120, 130, 0.6);
    }
  }
</style>
