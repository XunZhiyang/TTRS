<template>
  <div class="member-info">
    <h1 class="profile-card-name">尊敬的会员, A 您好!</h1>
    <h2 class="profile-card-txt">您已是会员, 会员到期时间: 2020-01-01</h2>
    <h2 class="profile-card-subtitle">当前积分: 693</h2>
    <button class="profile-card-button button--blue" @click="closeDialog">确定</button>
  </div>
</template>

<script>
  export default {
    name: "MemberInfo",
    props: ['user'],
    methods: {
      closeDialog() {
        this.$emit('close-dialog')
      }
    }
  }
</script>

<style lang='scss' rel="stylesheet/scss" type="text/scss">
  .member-info {
    text-align: center;
    .profile-card-name {
      font-weight: 700;
      font-size: 24px;
      color: #2C2C2C;
      margin-bottom: 15px;
    }

    .profile-card-txt {
      font-size: 18px;
      font-weight: 500;
      color: #324e63;
      margin-bottom: 15px;
    }

    .profile-card-subtitle {
      font-size: 14px;
      color: #60798c;
      margin-bottom: 30px;
    }

    .profile-card-button {
      background: none;
      border: none;
      font-family: 'Quicksand', sans-serif;
      font-weight: 700;
      font-size: 19px;
      margin: 15px 35px;
      padding: 15px 40px;
      min-width: 201px;
      border-radius: 50px;
      min-height: 55px;
      color: #fff;
      cursor: pointer;
      backface-visibility: hidden;
      transition: all .3s;
    }

    .profile-card-button.button--blue {
      background: linear-gradient(45deg, #1da1f2, #0e71c8);
      box-shadow: 0px 4px 30px rgba(19, 127, 212, 0.4);

      &:hover {
        box-shadow: 0px 7px 30px rgba(19, 127, 212, 0.75);
      }
    }

  }
</style>
