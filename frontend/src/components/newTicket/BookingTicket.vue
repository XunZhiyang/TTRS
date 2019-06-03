<template>
    <div id="BookingTicket">
      <BreadCrumbs :bread="breadCrumbs"/>
      <el-tabs v-model="activeName" @tab-click="handleClick" >
        <el-tab-pane label="单程票"   name="1"><NewOneWay/></el-tab-pane>
        <el-tab-pane label="往返票"   name="2"><NewTwoWay/></el-tab-pane>
        <!--<el-tab-pane label="退票"     name="3"><NewRefund/></el-tab-pane>-->
        <!--<el-tab-pane label="改签"     name="4"><NewEndorse/></el-tab-pane>-->
        <!--<el-tab-pane label="信息查询" name="5"><NewQuery/></el-tab-pane>-->
      </el-tabs>
      <ChoseTime/>
    </div>
</template>

<script>
  import NewOneWay from './Booking/OneWay'
  import NewTwoWay from './Booking/TwoWay'
  // import NewRefund from './Booking/Refund'
  import BreadCrumbs from '@/components/BreadCrumbs/BreadCrumbs'
  // import NewEndorse from  './Booking/Endorse'
  // import NewQuery   from './Booking/theQuery'
  import ChoseTime from './Booking/ChoseTime'

  export default {
    name: 'BookingTicket',
    components:{
      BreadCrumbs,
      NewOneWay,
      NewTwoWay,
      // NewRefund,
      // NewEndorse,
      // NewQuery,
      ChoseTime
    },
    data(){
      return{
        activeName:'1',
        breadCrumbs:[
          {
            name:'车票',
            path:'/BookingTicket'
          }
        ]
      }
    },
    methods:{
      handleClick(){
      
      }
    }
  }
</script>

<style scoped lang="scss">
#BookingTicket /deep/ .el-tabs__item{
  font-size: 20px;
}
#BookingTicket /deep/ .el-tabs__item:hover{
  color: #45A4FD;
}
#BookingTicket /deep/ .el-tabs__item.is-active{
  color: #45A4FD;
}
#BookingTicket{
  width:60%;
  margin:auto;
}
</style>
