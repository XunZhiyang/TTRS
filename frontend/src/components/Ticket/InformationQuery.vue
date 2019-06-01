/**
* 信息查询
**/
<template>
    <div id="InformationQuery">
        <el-dialog
          custom-class="queryDialog"
          :visible.sync="informationShow"
          width="580px"
          :before-close="closeQuery"
        >
          <div class="dialogTitle">
            <span class="purposeTitle">信息查询</span>
          </div>
          <div class="queryMain">
            <div class="queryNow">
              <div class="queryInput">
                <el-input v-model="origin" placeholder="出发地"></el-input>
              </div>
              <div class="queryInput">
                <el-input v-model="destination" placeholder="目的地"></el-input>
              </div>
              <div class="querySearch">
                <el-button class="searchQuery" @click="search">查询</el-button>
              </div>
            </div>
            <div class="queryInformation">
              <el-table
                :data="timeData"
                style="width: 100%"
                height="236"
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
  import ticketTime from './TicketTime'
  import {mapActions,mapState} from 'vuex'
  export default {
    name: "InformationQuery",
    computed:{
      ...mapState('ticket',{
        informationShow:state=>state.showQuery
      })
    },
    data(){
      return{
        origin:'',
        destination:'',
        timeData:[]
      }
    },
    methods:{
      ...mapActions('ticket',[
        'closeQuery'
      ]),
      search(){
        this.timeData = ticketTime
      }
    }
  }
</script>

<style lang="scss">
  .queryDialog{
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
    .queryMain{
      width: 100%;
      height: 324px;
      background-color: #DADADA;
    }
    .queryNow{
      width: 100%;
      height: 40px;
      .queryInput{
        margin: 20px ;
        width: 180px;
        height: 40px;
        float: left;
      }

      .querySearch{
        float: right;
        margin: 20px ;
        .searchQuery{
          width: 100px;
          color:#fff;
          background:linear-gradient(to right,#FC9C3B,#FFC95D);
        }
      }
    }
  }
</style>
