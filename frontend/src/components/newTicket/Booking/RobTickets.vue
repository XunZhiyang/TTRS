<template>
  <el-dialog custom-class="counting-dialog"
             :visible.sync="robTickets"
             width="580px"
             append-to-body
             :before-close="closeNow"
  >
    <div class="count-down">
      <div class="count-down-item">{{time | hour}}</div>
      <div class="count-down-colon">:</div>
      <div class="count-down-item">{{time | minute}}</div>
      <div class="count-down-colon">:</div>
      <div class="count-down-item">{{time | second}}</div>
      <div class="count-down-colon">:</div>
      <div class="count-down-item">{{time | millisecond}}</div>
    </div>
    <div class="counting-dialog-content">

      <el-row type="flex" justify="space-between">
        <el-col :span="14">
          <div class="ticket-title">
            <span>06月04日</span>
            <span>周二</span>
            <span class="small">出发</span>
          </div>
          <div class="ticket-subtitle">
            00:00 上海思源门 - 09:24 北京天安门
          </div>
          <div class="ticket-subtitle">
            G8924 二等座
          </div>
        </el-col>
        <el-col :span="6" class="flex-bottom-right">
          <div class="carriage-number">
            12车厢 09F号
          </div>
        </el-col>
      </el-row>

      <div class="price">
        ¥ <span>{{output}}</span> 当前价格
      </div>

      <el-row type="flex" class="upset-price" justify="space-between" :gutter="10">
        <el-col :span="12">
          <el-input v-model="input" placeholder="请输入竞拍价"></el-input>
        </el-col>
        <el-col :span="12">
          <button @click="isdf">竞拍</button>
        </el-col>
      </el-row>
    </div>
  </el-dialog>
</template>

<script>
  import {mapState,mapActions} from 'vuex'
  export default {
    name      : "RobTickets",
    filters:{
        hour (val) {
          const hour = Math.floor(val / 3600000);
          return hour < 10 ? `0${hour}` : hour;
        },
      minute(val) {
        const hour   = Math.floor(val / 3600000);
        const minute = Math.floor((val - hour * 3600000) / 60000);
        return minute < 10 ? `0${minute}` : minute;
      },
      second(val) {
        const second = Math.floor((val / 1000 % 60));
        return second < 10 ? `0${second}` : second;
      },
      millisecond(val) {
        const millisecond = Math.floor(val % 1000);

        if (millisecond < 10) {
          return `00${millisecond}`;
        } else if (millisecond < 100) {
          return `0${millisecond}`;
        } else {
          return millisecond;
        }
      }
    },
    computed:{
        ...mapState('ticket',{
          robTickets:state => state.robShow
        })
    },
    data() {
      return {
        time: 0,
        output:'8.17',
        input: '',
      }
    },
    methods   : {
      ...mapActions('ticket',[
        'closeRobShow'
      ]),
      isdf(){
        this.output = input
      },
      count() {
        let _this = this
        const date = Date.now();
        console.log(date)
        _this.time =  1000 * 60 * 60 *2
        // _this.time = date.getTime()
        // console.log(_this.time)
        console.log(_this.time)
      let timeNow =  setInterval(function () {
          _this.time -= 1
        if (_this.time <= 0){
          timeNow.clearInterval()
        }
      })
      },
      closeNow(){
        this.closeRobShow()
      }
    },
    watch : {
      robTickets(val){
        if (val){
          this.count()
        }
      }
    },
    mounted(){

    }
  }
</script>

<style lang='scss' rel="stylesheet/scss" type="text/scss">
  .counting-dialog {
    background: rgba(68, 163, 252, 1);

    .el-dialog__headerbtn .el-dialog__close {
      color: #fff;
    }

    .el-dialog__body {
      padding: 0;
    }

    .count-down {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 450px;
      height: 150px;
      margin: 0 auto;
      color: #fff;
      font-size: 40px;
      font-family: lcd;

      .count-down-item {
        width: 103px;
        height: 111px;
        background: url("../../../assets/bg-count@2x.png") center;
        background-size: 100% 100%;
        color: #44A3FC;
        line-height: 100px;
        text-align: center;
      }

      .count-down-colon {
        margin-top: -30px;
        font-size: 60px;
      }
    }

    .counting-dialog-content {
      background: rgb(217, 213, 209);
      padding: 30px;

      .ticket-title {
        font-size: 30px;
        font-weight: bold;
        line-height: 26px;
        color: rgb(77, 88, 115);

        span {
          margin-right: 10px;

          &.small {
            font-size: 20px;
          }
        }
      }

      .ticket-subtitle {
        font-size: 16px;
        font-weight: 400;
        color: rgb(77, 88, 115);
        margin-top: 10px;
      }

      .flex-bottom-right {
        display: flex;
        justify-content: end;
        align-items: flex-end;
      }

      .carriage-number {
        width: 130px;
        height: 30px;
        background: #60aaf2;
        border: 1px solid white;
        line-height: 30px;
        text-align: center;
        color: #fff;
      }

      .price {
        width: 255px;
        background: #ededed;
        font-size: 20px;
        font-weight: bold;
        line-height: 40px;
        color: #4d5873;
        margin-top: 40px;
        border-radius: 4px;
        text-align: center;

        span {
          font-size: 30px;
          color: rgb(252, 156, 59);
        }
      }

      .upset-price {
        margin-top: 10px;
        button {
          color: #fff;
          background:linear-gradient(90deg,rgba(252,156,59,1) 0%,rgba(255,201,93,1) 100%);
          border-radius: 4px;
          width: 100%;
          height: 100%;
          border: none;
          font-size: 14px;
          cursor: pointer;
        }
      }
    }
  }
</style>
