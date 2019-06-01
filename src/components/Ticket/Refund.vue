/**
* 退票
**/
<template>
  <div id="Refund">
    <el-dialog
      custom-class="refundDialog"
      :visible.sync="refundShow"
      width="580px"
      :before-close="closeIt"
    >
      <div class="dialogTitle">
        <span class="purposeTitle">退票</span>
      </div>
      <div class="cardBox">
        <el-card class="cardNow">
          <div v-for="(item,index) in tickets" :key="index"  class="lineCard">
            <div class="setCity">
              <span >{{item.origin}} - {{item.destination}}</span>
              <span class="tickTime">{{item.departureTime}} - {{item.arrivalTime}}</span>
            </div>
            <div class="booking">
              <el-button @click="unsubscribe" class="bookingBotton">退票</el-button>
            </div>
          </div>
        </el-card>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import Ticket from './Ticket'
  import {mapState,mapActions} from 'vuex'

  export default {
    name: "Refund",
    computed:{
      ...mapState('ticket',{
        refundShow:state=>state.refund
      })
    },
    data(){
      return{
        tickets:Ticket
      }
    },
    methods:{
      ...mapActions('ticket',[
        'closeRefund'
      ]),
      closeIt(){
        this.closeRefund()
      },
      unsubscribe(){
        this.$message.warning('我们已经收到您的退票申请，我们将在三个工作日内联系您')
      }
    }
  }
</script>

<style  lang="scss">
  .refundDialog{
      background:linear-gradient(to top right, #91D5EB 0%, #96c9F0 25%,#AAD3EC 60%, #92C9D2 100%);
      .el-dialog__body{
        padding:0
      }
      .dialogTitle{
        height: 180px;
        width: 100%;
        text-align: center;
        line-height: 180px;
        color: #FFFFFF;
        .purposeTitle{
          font-size: 28px;
        }
        .cityTitle{
          font-size: 30px;
        }
      }
      .cardBox{
        width: 100%;
        height:324px;
        background-color: #DADADA;
        .cardNow{
          width: 90%;
          height: 100%;
          background-color:#DADADA ;
          border:none;
          box-shadow: none;
          margin:auto;
          .lineCard{
            float: left;
            width: 100%;
            margin-top: 10px;
            .setCity{
              float: left;
              height: 56px;
              font-size: 24px;
              text-align: center;
              color: #4D5873;
              line-height: 56px;
              letter-spacing: 2px;
              .tickTime{
                 margin-left: 10px;
                font-size: 18px;
                color:#000000
              }
            }
            .booking{
              float: right;
              width: 116px;
              height: 40px;
              margin-top: 8px;
              .bookingBotton{
                width: 100%;
                height: 100%;
                background: linear-gradient(to right,#FC9C3B,#FFC95D);
                color:#ffffff;
                font-size: 16px;
              }
            }
          }

        }
      }

  }
  .tickets{
    width: 100%;
    height: 40px;
    border-bottom: 1px solid #969896;
    padding: 6px;
    .exit{
      background:linear-gradient(to  right, #FFFF00, #FFD700);;
    }
    span{
      color: #969896;
      line-height: 40px;
      font-weight: 600;
    }
    .ticketPlace{
      float: left;

    }
    .ticketTime{
      float: left;
      margin-left: 30px;
    }
    .ticketButton{
      float: right;
    }
  }
</style>
