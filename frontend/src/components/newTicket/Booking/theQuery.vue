<template>
    <div id="theQuery">
        <el-row>
          <div class="queryNow">
            <div class="queryInput">
              <el-input v-model="origin" placeholder="出发地"></el-input>
            </div>
            <div class="queryInput left20">
              <el-input v-model="destination" placeholder="目的地"></el-input>
            </div>
            <div class="queryCenter left20">
              <el-checkbox v-model="checked">是否中转</el-checkbox>
            </div>
            <div class="querySearch">
              <el-button class="searchQuery" @click="search">查询</el-button>
            </div>
          </div>
        </el-row>
        <el-row>
          <el-table
            :data="timeData"
            style="width: 100%"
            border
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
            <el-table-column
              prop="ticketNumber"
              label="剩余票数"
              align="center"
            >
            </el-table-column>
            <el-table-column
              label="购票"
              align="center"
            >
              <template slot-scope="scope">
                <span v-if="scope.row.ticketNumber>1">
                    <el-button @click="choseSeat" class="ticketButton">购票</el-button>
                </span>
                <span v-if="scope.row.ticketNumber <=1">
                  <el-button @click="showRob" class="ticketButton">抢票</el-button>
                </span>
              </template>
            </el-table-column>
          </el-table>
        </el-row>
      <RobTickets/>
    </div>
</template>

<script>
  import ticketTime from '../../Ticket/TicketTime'
  import RobTickets from './RobTickets'
  import {mapActions,mapState} from 'vuex'
  export default {
    name: 'theQuery',
    components:{
      RobTickets
    },
    data(){
      return{
        timeData:[],
        origin:'',
        destination:'',
        checked:''
      }
    },
    methods:{
      ...mapActions('ticket',[
        'openSeats',
        'robShow'
      ]),
      search(){
        this.timeData = ticketTime
        this.timeData.forEach( res=>{
          res.ticketNumber = parseInt(Math.random()*99)
        })
      },
      choseSeat(){
          this.openSeats()
      },
      showRob(){
          this.robShow()
      }
    }
  }
</script>

<style scoped lang="scss">
  #theQuery /deep/ .el-table td{
    font-size: 20px;
    font-weight: bold;
    line-height: 40px;
  }
  #theQuery /deep/ .el-table th{
    font-size: 20px;
    line-height: 40px;
    background: #EAEEF1;

  }
#theQuery{
  .queryNow{
    width: 100%;
    height: 58px;
  }
  .queryInput{
    float: left;
    width: 25%;
  }
  .left20{
    margin-left: 40px;
  }
  .querySearch{
    width: 20%;
    float: right;
    .searchQuery{
      width: 100%;
      background:linear-gradient(to right,#FC9C3B,#FFC95D);
    }
  }
  .queryCenter{
    float: left;
    width: 10%;
    font-size: 24px;
  }
  .ticketButton{
    width: 100%;
    background: linear-gradient(to right,#FC9C3B,#FFC95D);
    color: #ffffff;
  }
}
</style>
