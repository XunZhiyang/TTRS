/**
* 专属目的地弹窗
**/
<template>
  <div id="">
    <el-dialog
      :visible.sync="ExclusiveShow"
      custom-class="dialogBackground"
      width="580px"
      center
      append-to-body
      :before-close="closeArrived"
    >
      <div class="dialogTitle">
        <span class="purposeTitle">专属目的地:</span>
        <span class="cityTitle">&nbsp;&nbsp;{{aroundCity}}</span>
      </div>
      <div class="cardBox">
        <el-card class="cardNow">
          <div v-for="(item,index) in setOutCity" :key="index"  class="lineCard">
              <div class="setCity">
                {{item.city}}
              </div>
              <div class="line">
              </div>
              <div class="arriveCity">
                {{aroundCity}}
              </div>
              <div class="booking">
                <el-button class="bookingBotton" @click="openChose">购 票</el-button>
              </div>
          </div>
        </el-card>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import ChineseCities  from '@/router/Home/ChineseCities';
  import {mapState,mapActions} from  'vuex'
  export default {
    name: 'Exclusive',
    computed:{
      ...mapState('ticket',{
        ExclusiveShow:state =>state.exclusiveShow
      })
    },
    data(){
      return{
        chineseCities:ChineseCities,
        aroundCity:ChineseCities[Math.floor(Math.random()*949)].name,
        setOutCity:[
          {city:ChineseCities[Math.floor(Math.random()*949)].name},
          {city:ChineseCities[Math.floor(Math.random()*949)].name},
          {city:ChineseCities[Math.floor(Math.random()*949)].name},
          {city:ChineseCities[Math.floor(Math.random()*949)].name},
        ]
      }
    },
    methods:{
      ...mapActions('ticket',[
        'clooseExclusive',
        'openSeats'
      ]),
      closeArrived(){
          this.clooseExclusive()
      },
      openChose(){
        this.clooseExclusive()
        this.openSeats()
      }
    }
  }
</script>

<style lang="scss">
  .dialogBackground{
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
        width: 80%;
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
            width: 152px;
            height: 56px;
            background:#ffffff;
            font-size: 24px;
            text-align: center;
            color: #4D5873;
            line-height: 56px;
            letter-spacing: 2px;
          }
          .line{
            float: left;
            width: 22px;
            height: 5px;
            background-color: #61ADF5;
            margin: 25px 20px
          }
          .arriveCity{
            float: left;
            font-size: 26px;
            color:#4D5873;
            font-weight: bold;
            line-height: 56px;
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
</style>
