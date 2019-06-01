<template>
    <div id="Refund">
        <div class="cityTable">
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
              label="退票">
              <template slot-scope="scope">
                <el-button @click="ticketBack(scope.row)" class="ticketBack">退票</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
    </div>
</template>

<script>
  import Ticket from '../../Ticket/Ticket'

  export default {
    name: 'Refund',
    data(){
      return{
        cityData:Ticket
      }
    },
    methods:{
      tableRowClassName(){

      },
      tableCellClassName(){

      },
      ticketBack(){
        this.$message.warning('我们已经收到您的退票申请，我们将在三个工作日内联系您')
      }
    }
  }
</script>

<style scoped>
  #Refund /deep/ .el-table .ticketBack{
    width:60%;
    height: 40px;
    background:linear-gradient(to right,#FC9C3B,#FFC95D);
    color: #ffffff;
  }
  #Refund /deep/ .el-table td{
    font-size: 20px;
    font-weight: bold;
    line-height: 40px;
  }
  #Refund /deep/ .el-table th{
    font-size: 20px;
    line-height: 40px;
    background: #EAEEF1;

  }
#Refund{

}
</style>
