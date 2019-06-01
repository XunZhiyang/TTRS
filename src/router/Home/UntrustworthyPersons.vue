<template>
  <div class="untrustworthy-persons">
    <h1>失信人员名单</h1>
    <AnimateList :list="persons" />
  </div>
</template>

<script>
  import Icon_Person from '@/assets/Person.png';
  import AnimateList from '@/components/AnimateList/AnimateList';


  export default {
    name: "UntrustworthyPersons",
    data() {
      return {
        persons: [
          {
            name    : '杨宗翰',
            pic     : Icon_Person,
            idType  : '学生证',
            idNumber: '518XXXXX0435',
            reason  : '动车组卫生间内吸烟'
          },
          {
            name    : '马浩博',
            pic     : Icon_Person,
            idType  : '学生证',
            idNumber: '518XXXXX0428',
            reason  : '车内酗酒'
          },
          {
            name    : '寻之扬',
            pic     : Icon_Person,
            idType  : '学生证',
            idNumber: '518XXXXX0433',
            reason  : '车内作诗'
          },
          {
            name    : '陈彤',
            pic     : Icon_Person,
            idType  : '学生证',
            idNumber: '518XXXXX0416',
            reason  : '车内打球'
          },
          {
            name    : '毛昕渝',
            pic     : Icon_Person,
            idType  : '学生证',
            idNumber: '518XXXXX0429',
            reason  : '车内搓麻'
          },
          {
            name    : '杨尚霏',
            pic     : Icon_Person,
            idType  : '学生证',
            idNumber: '518XXXXX0434',
            reason  : '面向不善，过于弟弟'
          }
        ]
      }
    },
    components: {
      AnimateList
    }
  }
</script>

<style lang='scss' rel="stylesheet/scss" type="text/scss">
  .untrustworthy-persons {
    color: #fff;
    h1 {
      text-align: center;
      font-size: 2em;
      margin-bottom: 30px;
    }

    .untrustworthy-persons-item {
      display: flex;
      width: 400px;
      padding: 10px;
      border-radius: 4px;
      border: 1px solid lightgrey;
      cursor: pointer;
      background-color: #fff;
      margin: 15px 0;
      transition: all .3s;

      img {
        width: 120px;
        height: 140px;
        margin-right: 20px;
      }

      .info {
        display: flex;
        flex-direction: column;

        .info-item {
          flex: 1;
          display: flex;
          align-items: center;
        }
      }

      &:hover {
        background-color: rgba(0, 0, 0, 0.45);
        color: #fff;
        transform: scale(1.05, 1.05);
      }
    }
  }
</style>
