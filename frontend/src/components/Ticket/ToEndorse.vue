<template>
  <div id="ToEndorse">
    <el-dialog
      custom-class="endorseBox"
      :visible.sync="toEndorse"
      width="580px"
      :before-close="closeToEndorse"
    >
      <div class="dialogTitle">
        <span class="purposeTitle">改&nbsp;&nbsp;签</span>
      </div>
      <div class="endorseMain">
        <div class="ticket">
          <div class="ticketTime">
            <span>04月05日  周五 <label>出发</label></span>
          </div>
          <div class="ticketInformation">
            <span>12:30  天津 - 13:02 北京</span><br>
            <span>C2088 二等座</span>
          </div>
        </div>
        <div class="choseTime">
          <el-table
            :data="ticketTime"
            style="width: 100%"
            height="248"
            @row-click="choseSeat"
          >
            <el-table-column
              prop="departureTime"
              label="出发时间"
              align="center"
            >
            </el-table-column>
            <el-table-column
              prop="arrivalTime"
              label="到达时间"
              align="center"
            >
            </el-table-column>

          </el-table>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import ChineseCities  from '@/router/Home/ChineseCities';
  import TicketTime     from './TicketTime'
  import {mapActions,mapState} from 'vuex'
  export default {
    name: 'ToEndorse',
    computed:{
      ...mapState('ticket',{
        toEndorse:state =>state.toEndorse
      })
    },
    data(){
      return{
        chineseCities:ChineseCities,
        ticketTime: TicketTime,
        SetOut:''
      }
    },
    methods:{
      ...mapActions('ticket',[
        'closeToEndorse',
        'openSeats'
      ]),
      choseSeat(row, column, event){
        this.closeToEndorse()
        this.openSeats()
        console.log(row)
      }
    }
  }
</script>

<style  lang="scss">
.endorseBox{
  background:linear-gradient(to top right, #91D5EB 0%, #96c9F0 25%,#AAD3EC 60%, #92C9D2 100%);
  .el-dialog__body{
    padding:0
  }
  .dialogTitle {
    height: 180px;
    width: 100%;
    text-align: center;
    line-height: 180px;
    color: #FFFFFF;
    .purposeTitle {
      font-size: 28px;
    }
  }
  .endorseMain{
    width: 100%;
    height: 324px;
    background: #DADADA;
    .ticket{
      width: 100%;
      padding-top:20px;
      .ticketTime{
        margin-left: 20px;
        float:left;
        font-size:30px;
        color:#4D5873;
        font-weight: bold;
        label{
          font-size: 16px;
        }
      }
      .ticketInformation{
        float: right;
        margin-right: 60px;
        color: #4D5873;
        line-height:26px;
        text-align: right;
      }
    }
    .choseTime{

    }
  }
}

</style>
