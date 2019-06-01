<template>
    <div id="ChoseTime">
        <el-dialog
          :visible.sync="showTime"
          width="580px"
          custom-class="timeShow"
          :before-close="closChoseTime"
        >
         <div class="timeTitle">
            选择座位等级和出发时间
         </div>
          <div class="selectLevel">
            <div class="promptWord"> 请选择座位等级</div>
            <div class="choseLevel">
              <el-radio v-model="level" label="1" border size="medium">一等座</el-radio>
              <el-radio v-model="level" label="2" border size="medium">二等座</el-radio>
            </div>
          </div>
          <div>
            <el-table
              ref="singleTable"
              :data="trainData"
              style="width: 100%"
              height="220px"
              border
              @row-click="showSeats"
            >
              <el-table-column
                property="trains"
                label="车次"
                align="center"
              >
              </el-table-column>
              <el-table-column
                property="departureTime"
                label="出发时间"
                align="center"
                >
              </el-table-column>
              <el-table-column
                property="arrivalTime"
                label="到达时间"
                align="center"
                >
              </el-table-column>
            </el-table>
          </div>
        </el-dialog>
    </div>
</template>

<script>
  import ticketInformation from './ticketInformation'
  import {mapActions,mapState} from 'vuex'
  export default {
    name: 'ChoseTime',
    computed:{
      ...mapState('ticket',{
        showTime:state=>state.choseTime
      })
    },
    data(){
      return{
        choseTimeShow:true,
        trainData:ticketInformation,
        level:''
      }
    },
    methods:{
      ...mapActions('ticket',[
        'openSeats',
        'closeChoseTime'
      ]),
      closChoseTime(){
        this.closeChoseTime()
      },
      showSeats(){
        this.closeChoseTime()
        this.openSeats()
      }
    }
  }
</script>

<style  lang="scss">
  #ChoseTime /deep/ .el-radio__input.is-checked .el-radio__inner{
    border-color: #FC9C3B;
    background: #FC9C3B;
  }
  #ChoseTime /deep/ .el-radio__input.is-checked+.el-radio__label{
    color: #FC9C3B
  }
  #ChoseTime /deep/ .el-radio.is-bordered.is-checked{
    border-color: #FC9C3B
  }
.timeShow{
  background: linear-gradient(to right,#91D5EB,#92C9D2 );
  .el-dialog__header{
    padding:0;
  }
  .el-dialog__body{
    padding:0;
  }
  .timeTitle{
    height: 180px;
    font-size: 24px;
    color: #ffffff;
    font-weight: bold;
    line-height: 180px;
    text-align: center;
  }
  .selectLevel{
      width: 100%;
    height: 60px;
    background: #ffffff;
    .promptWord{
      float: left;
      font-size: 20px;
      padding-left: 60px;
      padding-right: 30px;
      line-height: 60px;
    }
    .choseLevel{
      float: left;
      amrgin-left:20px;
      padding-top: 10px;
    }
  }
}
</style>
