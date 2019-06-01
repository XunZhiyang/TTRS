<template>
    <div id="Exclusive">
      <BreadCrumbs :bread="breadCrumbs"/>
      <div class="destination">
          <div class="destinationTitle">
            <span class="destinationTitle_left">专属目的地:&nbsp;&nbsp;</span>
            <span class="destinationTitle_right">{{aroundCity}}</span>
          </div>
          <div class="destinationTable">
            <el-table
              :data="cityData"
              border
              :cell-class-name="tableCellClassName"
              :row-class-name="tableRowClassName"
              :header-row-class-name="tableHead"
            style="width: 100%">
              <el-table-column
                prop="city"
                label="出发城市"
                align="center"
              >
              </el-table-column>
              <el-table-column
                align="center"
                prop="arriveCity"
                label="到达城市"
                >
              </el-table-column>
              <el-table-column
                align="center"
                label="购票">
                <template slot-scope="scope">
                  <el-button @click="buyTicket(scope.row)" class="bookingTicket">购票</el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
      </div>
    </div>
</template>

<script>
  import ChineseCities  from '@/router/Home/ChineseCities';
  import BreadCrumbs from '@/components/BreadCrumbs/BreadCrumbs'
  import {mapState,mapActions} from 'vuex'
  export default {
    name: 'Exclusive',
    components:{
      BreadCrumbs
    },
    data(){
      return{
        aroundCity:ChineseCities[Math.floor(Math.random()*949)].name,
        cityData:[],
        breadCrumbs:[
          {
            name:'专属目的地',
            path:'/Exclusive'
          }
        ]
      }
    },
    methods:{
      ...mapActions('ticket',[
        'openSeats'
      ]),
      buyTicket(data){
          this.openSeats()
      },
      tableCellClassName({row, column, rowIndex, columnIndex}){
        if (columnIndex  === 0) {
          return 'warning-row';
        }
          return ''

      },
      tableRowClassName({row, rowIndex}){
        if (rowIndex % 2 !== 0) {
          return 'warning-row';
        }
        return '';
      },
      tableHead({row, rowIndex}){
          return   'warning-row';
      }
    },
    mounted(){
      let _this =this
      _this.cityData = []
      for(let i=0;i<20;i++){
        _this.cityData.push({city:ChineseCities[Math.floor(Math.random()*949)].name,arriveCity:_this.aroundCity})
      }
    }
  }
</script>

<style scoped lang="scss">
  #Exclusive /deep/ .el-table .warning-row {
    background: #C2DCED;
  }
  #Exclusive /deep/ .el-table .fontClass {
      color:#4D5873;
    font-size: 24px;
    font-weight: bold;
  }
  #Exclusive /deep/ .el-table .bookingTicket{
    width:60%;
    height: 40px;
    background:linear-gradient(to right,#FC9C3B,#FFC95D);
    color: #ffffff;
  }
  #Exclusive /deep/ .el-table td{
    font-size: 20px;
    font-weight: bold;
    line-height: 40px;
  }
  #Exclusive /deep/ .el-table th{
    font-size: 20px;
    line-height: 40px;
    background: #EAEEF1;

  }
  #Exclusive{
      width:60%;
      margin:auto;
    .destination{
      width: 100%;
      .destinationTitle{
        width: 100%;
        height: 100px;
        background: url("../../../src/assets/newTicket/titleBackground.png");
        background-size: 100% 100px;
        color: #ffffff;
        text-align: center;
        line-height: 100px;
        .destinationTitle_left{
          font-size: 28px;
        }
        .destinationTitle_right{
          font-size: 30px;
        }
      }
    }
  }
</style>
