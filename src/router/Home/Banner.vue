<template>
  <div class="home-banner">
    <div class="content-container">
      <div class="home-banner-form">
        <h1 class="home-banner-form-title">
          车票预订
        </h1>
        <div class="home-banner-form-title-btm-line"/>
        <SearchTicketForm/>
      </div>
    </div>
  </div>
</template>

<script>
  import SearchTicketForm from './SearchTicketForm'


  export default {
    name      : "Banner",
    components: {
      SearchTicketForm
    }
  }
</script>

<style lang='scss' rel="stylesheet/scss" type="text/scss">
  .home-banner {
    width: 100%;
    height: 370px;
    display: flex;
    align-items: center;
    background-size: contain;
    background: url("../../assets/Banner/japan.png") no-repeat center  #f7eae1;

    .home-banner-form {
      background-position: center top;
      background-size: cover;
      width: 400px;
      height: 340px;
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
      z-index: 1;
      position: relative;
      display: flex;
      flex-direction: column;

      .home-banner-form-title {
        margin-top: 20px;
        font-size: 20px;
        font-weight: 400;
        line-height: 26px;
        color: rgb(68, 163, 252);
        text-align: center;
      }

      .home-banner-form-title-btm-line {
        width: 340px;
        height: 3px;
        background: rgba(68, 163, 252, 1);
        margin: 0 auto;
      }

      &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(255, 255, 255, 0.8);
        z-index: -1;
      }

      &::after {
        background-image: url("../../assets/Banner/japan.png");
        background-position: center top;
        background-size: cover;
        background-attachment: fixed;
        filter: blur(20px);
      }

      .el-form {
        margin: 20px auto 0;
        width: 340px;

        .el-form-item__content > * {
          width: 100%;
        }

        .el-button {
          background: linear-gradient(90deg, rgba(252, 156, 59, 1) 0%, rgba(255, 201, 93, 1) 100%);
          border: none;
        }
      }
    }
  }
</style>
