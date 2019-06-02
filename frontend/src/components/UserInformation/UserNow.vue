<template>
	<div id="UserNow">
		<el-dialog
						width="580px"
						title="个人信息"
						:visible.sync="showUser"
						custom-class="userDialog"
						:before-close="resetForm"
		>
			<div class="userBox">
				<el-form  label-width="80px" :model="userForm">
					<el-form-item label="用户id">
						<el-input v-model="userForm.id" :disabled="true"></el-input>
					</el-form-item>
					<el-form-item label="用户名">
						<el-input v-model="userForm.userName" :disabled="true"></el-input>
					</el-form-item>
					<el-form-item label="email">
						<el-input v-model="userForm.email"></el-input>
					</el-form-item>
					<el-form-item label="phone">
						<el-input v-model="userForm.phone"></el-input>
					</el-form-item>
					<el-form-item label="密码">
						<el-input v-model="userForm.password"></el-input>
					</el-form-item>
					<el-form-item label="确认密码">
						<el-input v-model="userForm.repassword"></el-input>
					</el-form-item>
					<el-form-item>
						<el-button  type="primary"  class="userButton" @click="resetForm()">修改</el-button>
						<el-button class='userButton subButton' @click="submitForm()">确定</el-button>
					</el-form-item>
				</el-form>
			</div>
		</el-dialog>
	</div>
</template>

<script>
  import  {mapState,mapActions}  from 'vuex'
  export default {
    name: "UserNow",
    computed:{
      ...mapState('userInformation',{
        showUser:state=>state.userShow
      })
    },
    data(){
      return{
        userForm:{
          id:1,
          userName:'admin',
          email:'12223518@163.com',
          phone:'13888888888',
          password:'******',
          repassword:'******'
        },
      }
    },
    methods:{
      ...mapActions( 'userInformation',[
          'closeUserNow'
        ]
      ),
      resetForm(){
        this.closeUserNow()
      },
      submitForm(){
        this.closeUserNow()
      },

    }
  }
</script>

<style lang="scss" >
	.userDialog{
		padding:0;
		.el-dialog__header{
			border-bottom: 1px solid #409EFF;
			.el-dialog__title{
				color: #409EFF;
				font-size: 20px;
				font-weight: bold;
			}
		}
		.el-dialog__body{
			.userBox{
				margin:auto;
				width: 80%;
				.userButton{
					width: 40%;

				}
				.subButton{
					background: linear-gradient(to right,#FC9C3B,#FFC95D);
					color: #ffffff;
				}
			}
		}
	}
</style>
