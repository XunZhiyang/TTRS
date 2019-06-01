/**
* 改签
**/
<template>
  <div id="Endorse">
    <el-dialog
      custom-class="endorseDilog"
      :visible.sync="endorseShow"
      width="580px"
      :before-close="closeEndorse"
    >
      <div class="dialogTitle">
        <span class="purposeTitle">改&nbsp;&nbsp;签</span>
      </div>
      <div class="cardBox">
        <el-card class="cardNow">
          <div v-for="(item,index) in tickets" :key="index"  class="lineCard">
            <div class="setCity">
              <span >{{item.origin}} - {{item.destination}}</span>
              <span class="tickTime">{{item.departureTime}} - {{item.arrivalTime}}</span>
            </div>
            <div class="booking">
              <el-button @click="ToEndorse" class="bookingBotton">改签</el-button>
            </div>
          </div>
        </el-card>
      </div>
      <!--<div class="tickets" v-for="(item,index) in tickets" :key="index">-->
        <!--<div class="ticketPlace">-->
          <!--<span>{{item.origin}} - {{item.destination}}</span>-->
        <!--</div>-->
        <!--<div class="ticketTime">-->
          <!--<span>{{item.departureTime}} - {{item.arrivalTime}}</span>-->
        <!--</div>-->
        <!--<div class="ticketButton">-->
          <!--<el-button @click="ToEndorse" class="exit">改签</el-button>-->
        <!--</div>-->
      <!--</div>-->
    </el-dialog>
  </div>
</template>

<script>
  import Ticket from './Ticket'
  import {mapState,mapActions} from 'vuex'
  export default {
    name: "Endorse",
    computed:{
      ...mapState('ticket',{
        endorseShow:state =>state.edorseShow
      })
    },
    data(){
      return{
        tickets:Ticket
      }
    },
    methods:{
      ...mapActions('ticket',[
        'closeEdorse',
        'openToEndorse'
      ]),
      closeEndorse(){
        this.closeEdorse()
      },
      ToEndorse(){
        this.openToEndorse()
        this.closeEdorse()
        // this.$router.push({path:'/ToEndorse'})
      }
    }
  }
</script>

<style  lang="scss">
  .endorseDilog{
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
  .tickets {
    width: 100%;
    height: 40px;
    border-bottom: 1px solid #969896;
    padding: 6px;

    .exit {
      background: linear-gradient(to right, #FFFF00, #FFD700);;
    }
    span {
      color: #969896;
      line-height: 40px;
      font-weight: 600;
    }

    .ticketPlace {
      float: left;

    }

    .ticketTime {
      float: left;
      margin-left: 30px;
    }

    .ticketButton {
      float: right;
    }
  }
</style>
