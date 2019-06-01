<template>
    <div id="Endorse">
        <div class="endorseTable">
          <el-table
            :data="cityData"
            border
            :cell-class-name="tableCellClassName"
            :row-class-name="tableRowClassName"
            style="width: 100%">
            <el-table-column
              prop="origin"
              label="出发城市"
              align="center"
            >
            </el-table-column>
            <el-table-column
              align="center"
              prop="destination"
              label="到达城市"
            >
            </el-table-column>
            <el-table-column
              align="center"
              prop="departureTime"
              label="出发时间"
            >
            </el-table-column>
            <el-table-column
              align="center"
              prop="arrivalTime"
              label="到达时间"
            >
            </el-table-column>
            <el-table-column
              align="center"
              label="改签">
              <template slot-scope="scope">
                <el-button @click="ToEndorse(scope.row)" class="endorseTicket">改签</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
    </div>
</template>

<script>
  import Ticket from '../../Ticket/Ticket'
  import {mapState,mapActions} from 'vuex'
  export default {
    name: 'Endorse',
    data(){
      return{
        cityData:Ticket
      }
    },
    methods:{
      ...mapActions('ticket',[
        'closeEdorse',
        'openToEndorse'
      ]),
      tableRowClassName(){

      },
      tableCellClassName(){

      },
      ToEndorse(){
        this.openToEndorse()
      }
    }
  }
</script>

<style scoped lang="scss">
  #Endorse /deep/ .el-table .endorseTicket{
    width:60%;
    height: 40px;
    background:linear-gradient(to right,#FC9C3B,#FFC95D);
    color: #ffffff;
  }
  #Endorse /deep/ .el-table td{
    font-size: 20px;
    font-weight: bold;
    line-height: 40px;
  }
  #Endorse /deep/ .el-table th{
    font-size: 20px;
    line-height: 40px;
    background: #EAEEF1;

  }
  #Endorse{

  }
</style>
