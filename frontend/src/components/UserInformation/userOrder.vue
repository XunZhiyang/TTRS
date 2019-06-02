<template>
	<div id="userOrder">
		<el-dialog
						:visible.sync="orderShow"
						title="我的订单"
						width="580px"
						custom-class="orderDialog"
						:before-close="orderClose"
		>
			<div class="orderBox">
				<spam v-for="(item,index) in userOrder" :key="index">
					<el-card class="box-card">
						<div class="orderTime">
							出发时间：{{item.date}}
							<span class="seatLevel">
                      {{item.seatLevel}}
                    </span>
						</div>

						<div class="ticket">
							{{item.origin}} - {{item.destination}}  {{item.departureTime}} -{{item.arrivalTime}}
						</div>

					</el-card>
				</spam>
			</div>
		</el-dialog>
	</div>
</template>

<script>
  import order from './order'
  import {mapState,mapActions} from 'vuex'
  export default {
    name: "userOrder",
    computed:{
      ...mapState('userInformation',{
        orderShow:state=>state.orderShow
      })
    },
    data() {
      return{
        userOrder:order
      }
    },
    methods:{
      ...mapActions('userInformation',[
        'closeOrder'
      ]),
      orderClose(){
        this.closeOrder()
      }
    }
  }
</script>

<style lang="scss">
	.orderDialog{
		padding:0;
		.el-dialog__header{
			border-bottom: 1px solid #409EFF;
			.el-dialog__title{
				color: #409EFF;
				font-size: 20px;
				font-weight: bold;
			}
		}
		.orderBox{
			max-height: 260px;
			overflow-y: scroll;
			padding-bottom: 30px;
		}
		.box-card{
			width: 96%;
			margin-left: auto;
			margin-right: auto;
			margin-top: 10px;
			.orderTime{
				font-size: 18px;
				font-weight: bold;
				color: #4D5873;
				padding-left: 50px;
			}
			.seatLevel{
				margin-left: 40px;
				font-size: 24px;
				font-weight: bold;
				color: #3B99FC;
			}
			.ticket{
				margin-left: 50px;
				margin-top: 20px;
				font-size: 16px;
				color: #CCCCCC;
			}
		}
	}
</style>