<template>
  <el-dialog
    title="登录"
    :visible.sync="dialogVisible"
    width="400px"
    @close="onDialogClose"
    append-to-body
    custom-class="loginDialog"
  >

    <el-form :model="loginFormModel"
             :rules="rules"
             ref="form"
             label-width="80px"
    >
      <el-form-item label="用vfv户名" prop="username">
        <el-input v-model="loginFormModel.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="loginFormModel.password"></el-input>
      </el-form-item>

      <div class="login-btn-group">
        <el-button  type="primary" @click="openSignUpDialog">注册</el-button>
        <el-button  @click="submitForm" class="loginButton">登录</el-button>
      </div>
    </el-form>
  </el-dialog>
</template>

<script>
  import {mapActions, mapGetters}  from 'vuex';
  import UserTypes, {namespace as UserNamespace} from '@/store/User/types';
  import User from './user'

  export default {
    name    : "LoginFormDialog",
    props   : {
      visible: {
        type   : Boolean,
        default: false
      }
    },
    data() {
      const checkUsername = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入用户名'));
        } else if (this.isUser(value)) { //!this.isSignUpUser(value)
          callback(new Error('该用户不存在'));
        } else {
          callback();
        }
      };

      const checkPassword = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else if (this.isPassword(value)) { //!this.passwordCheck(this.loginFormModel)
          callback(new Error('用户名与密码不匹配'));
        } else {
          callback();
        }
      };

      return {
        loginFormModel: {
          username: '',
          password: '',
        },
        rules         : {
          username: [
            {required: true, message: '请输入用户名', trigger: 'blur'},
            {validator: checkUsername, trigger: 'blur'}
          ],
          password: [
            {required: true, message: '请输入密码', trigger: 'blur'},
            {validator: checkPassword, trigger: 'blur'}
          ]
        }
      }
    },
    computed: {
      ...mapGetters(UserNamespace, {
        isSignUpUser : UserTypes.GETTER.IS_SIGN_UP_USER,
        passwordCheck: UserTypes.GETTER.PASSWORD_CHECK
      }),

      dialogVisible: {
        get() {
          return this.visible;
        },
        set(val) {
          this.$emit('update:visible', val);
        }
      }
    },
    methods : {
      ...mapActions(UserNamespace, {
        login: UserTypes.ACTION.LOGIN
      }),
      ...mapActions('administrator',[
        'setShowPermissions'
      ]),
      // 验证用户是否存在
      isUser(data){
        console.log(data)
        User.forEach(item =>{
          console.log(item.username)
          if (item.username === data) {
            return false
          }else {
            return true
          }
        })
      },
      //验证密码
      isPassword(data){
        console.log(data)
        User.forEach(item =>{
          console.log(item.password)
          if (item.password === data) {
            return false
          }else {
            return true
          }
        })
      },
      openSignUpDialog() {
        this.dialogVisible = false;
        this.$emit('open-sign-up-dialog');
      },

      submitForm() {
        const xhr = new XMLHttpRequest();
        xhr.open("POST", 'localhost:5000/action/login', true);
        alert("frfrfrfrfcc cvvcr");
        xhr.onload = function() {
          alert("frfrfrfrfr");
          // if(xhr.readyState == 4 && xmlHttpRequest.status == 200){
            const b = xhr.responseText;
            if(b == "1"){
              alert("登录成功！");
            }else{
              alert("登录失败！");
            }
          // }
        }
        xhr.send=("userid="+loginFormModel.username+"&password="+loginFormModel.password);
        this.$refs.form.validate((valid) => {
          if (valid) {
            this.login(this.loginFormModel);
            this.dialogVisible = false;
            User.forEach( item =>{
             if (item.username === this.loginFormModel.username) {
               this.routerTO(item.permissions)
               console.log(item)
               this.setShowPermissions(item)
             }
            })
          } else {
            return false;
          }
        });
      },
      // 跳转
      routerTO(value){
        switch (value) {
          case '0':
            this.$router.push({path:'Add'})
            break
          case  '1':
            this.$router.push({path:'Administrator'})
            break
          case '2':
            this.$router.push({path:''})
            break
        }
      },
      onDialogClose() {
        this.loginFormModel = {
          username: '',
          password: ''
        }
      }
    }
  }
</script>

<style lang='scss' rel="stylesheet/scss" type="text/scss" >
  .loginDialog .el-dialog__header{
    border-bottom: 2px solid #44A3FC;
  }
  .loginDialog .el-dialog__title{
    color:#44A3FC;
    font-weight: bold;
    font-size: 24px;
  }
  .loginDialog .loginButton{
    background: linear-gradient(to right,#FC9C3B,#FFC95D);
    border: none;
    color: #ffffff;
  }
  .login-btn-group {
    display: flex;
    justify-content: space-around;
    margin-top: 40px;

    .el-button {
      width: 40%;
    }
  }
</style>
