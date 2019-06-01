<template>
  <div class="join-member-ship">
    <h1 class="profile-card-name">尊敬的用户, A 您好!</h1>
    <h2 class="profile-card-txt">当前暂未开通会员</h2>
    <h2 class="profile-card-subtitle">开通会员即刻享受以下权益</h2>

    <div class="member-service-block">
      <div class="member-service-item"
           v-for="service in membershipServices"
           :key="service.icon"
      >
        <div class="title">
          <span :class="['iconfont', service.icon]"></span>
          <div class="title-til">{{service.title}}</div>
        </div>
        <div class="title-line"></div>
        <div class="content">
          <p v-for="item in service.desc" :key="item">{{item}}</p>
        </div>
      </div>
    </div>

    <button class="profile-card-button button--orange" @click="subscribe">立即开通会员</button>
  </div>
</template>

<script>
  import MembershipServices from './membershipServices'

  export default {
    name   : "JoinMemberShip",
    props  : ['user'],
    data() {
      return {
        membershipServices: MembershipServices
      }
    },
    methods: {
      subscribe() {
        this.$emit('show-qr-code');
        this.$emit('subscribe')
      }
    }
  }
</script>

<style lang='scss' rel="stylesheet/scss" type="text/scss">
  .join-member-ship {
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

    .profile-card-button.button--orange {
      background: linear-gradient(45deg, #d5135a, #f05924);
      box-shadow: 0px 4px 30px rgba(223, 45, 70, 0.35);

      &:hover {
        box-shadow: 0px 7px 30px rgba(223, 45, 70, 0.75);
      }
    }

    .member-service-block {
      display: flex;
      justify-content: space-between;
      margin-bottom: 20px;

      .member-service-item {
        position: relative;
        display: block;
        height: 250px;
        width: 180px;
        padding: 10px;
        background-color: #ffffff;
        border: 1px solid #e1e1e1;
        border-top-width: 5px;
        overflow: hidden;
        float: left;
        cursor: pointer;
        transition: all 0.3s ease;

        &:hover {
          border-color: #20b573;
        }

        .title {
          display: flex;
          margin-top: 20px;
          justify-content: center;
          align-items: center;

          .iconfont {
            font-size: 20px;
            margin-right: 10px;
          }

          .title-til {
            font-size: 18px;
            color: #313131;
            font-weight: bold;
            text-align: center;
          }
        }

        .title-line {
          width: 160px;
          height: 1px;
          margin: 20px auto 0 auto;
          background-color: #e1e1e1;
          text-align: center;
        }
        .content {
          margin-top: 40px;
          font-size: 14px;
          color: #313131;
          line-height: 16px;

          p {
            margin-bottom: 10px;
            color: #606266;
          }
        }
      }
    }
  }
</style>
