<template>
	<div id="OperationTicket">
		<BreadCrumbs :bread="breadCrumbs"/>
		<el-tabs v-model="activeName" @tab-click="handleClick" >
			<el-tab-pane label="退票"     name="1"><NewRefund/></el-tab-pane>
			<el-tab-pane label="改签"     name="2"><NewEndorse/></el-tab-pane>
		</el-tabs>
	</div>
</template>

<script>
  import NewRefund from './Booking/Refund'
  import BreadCrumbs from '@/components/BreadCrumbs/BreadCrumbs'
  import NewEndorse from  './Booking/Endorse'
  export default {
    name: 'OperationTicket',
    components:{
      BreadCrumbs,
      NewRefund,
      NewEndorse,
    },
    data(){
      return{
        activeName:'1',
        breadCrumbs:[
          {
            name:'退签、改签',
            path:'/OperationTicket'
          }
        ]
      }
    },
    methods:{
      handleClick(val){
      }
    }
  }
</script>

<style scoped lang="scss">
	#OperationTicket /deep/ .el-tabs__item{
		font-size: 20px;
	}
	#OperationTicket /deep/ .el-tabs__item:hover{
		color: #45A4FD;
	}
	#OperationTicket /deep/ .el-tabs__item.is-active{
		color: #45A4FD;
	}
	#OperationTicket{
		width: 60%;
		margin:auto;
	}
</style>