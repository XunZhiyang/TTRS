<template>
  <el-dialog
    title="注册"
    :visible.sync="dialogVisible"
    width="400px"
    @close="onDialogClose"
    append-to-body
    custom-class="registered"
  >
    <el-form :model="signUpFormModel"
             :rules="rules"
             ref="form"
             label-width="80px"
    >
      <el-form-item label="用户名" prop="username">
        <el-input v-model="signUpFormModel.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="signUpFormModel.password"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="repassword">
        <el-input type="password" v-model="signUpFormModel.repassword"></el-input>
      </el-form-item>
    </el-form>
    <div class="nineImage">
      <div class="choseTitle">
        <font size="3"> 请选出<span class="showyyu">阿勇</span></font></div>
        <div v-for="(item,index) in imageNow"  class="showImage"  >
            <img  :alt="item.key" :src="item.img" @click="choseImage($event,index)">
            <div v-if="active == (''+index)" class="trueNow">
              <i class="el-icon-check"></i>
            </div>
        </div>
    </div>
    <div class="sign-up-btn-group">
      <el-button class="sign-up-button" type="primary" @click="submitForm">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
  import {mapActions, mapGetters}                from 'vuex';
  import UserTypes, {namespace as UserNamespace} from '@/store/User/types';
  import imgs from  './imgs'

  export default {
    name    : "SignUpFormDialog",
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
        } else if (this.isSignUpUser(value)) {
          callback(new Error('当前用户名已存在'));
        } else {
          callback();
        }
      };

      const checkRepassword = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else if (this.signUpFormModel.password !== value) {
          callback(new Error('两次输入密码不一致'));
        } else {
          callback();
        }
      };

      return {
        images:imgs,
        imageNow:[],
        active: '',
        ifyyu:'',
        signUpFormModel: {
          username  : '',
          password  : '',
          repassword: ''
        },
        rules          : {
          username  : [
            {required: true, message: '请输入用户名', trigger: 'blur'},
            {validator: checkUsername, trigger: 'blur'}
          ],
          password  : [
            {required: true, message: '请输入密码', trigger: 'blur'},
          ],
          repassword: [
            {required: true, message: '请再次输入密码', trigger: 'blur'},
            {validator: checkRepassword, trigger: 'blur'}
          ]
        }
      }
    },
    computed: {
      ...mapGetters(UserNamespace, {
        isSignUpUser : UserTypes.GETTER.IS_SIGN_UP_USER
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
        signUp: UserTypes.ACTION.SIGN_UP
      }),
      // 选择九张图片
      choseImage(data,index){
        this.active = index
        if( data.target.alt === 'noPlus'){
          this.ifyyu = false
        }else if(data.target.alt === 'plus'){
          this.ifyyu = true
        }

      },
      submitForm() {
        this.$refs.form.validate((valid) => {
          if (valid) {
            if (this.ifyyu){
              const {username, password} = this.signUpFormModel;
              this.signUp({username, password});
              this.dialogVisible = false;
            } else {
                this.$message.error('请选择正确的阿勇')
            }
          } else {
            return false;
          }
        });
      },

      onDialogClose() {
        this.signUpFormModel = {
          username  : '',
          password  : '',
          repassword: ''
        }
      },
      // 随机取图
      randNum(){
        let _this =this
        let Arr = [0,1,2,3,4,5,6,7,8]
        let index
        let out = []
        let numberNow = []
        _this.imageNow = []
        _this.imageNow.length = 9
        //console.log(_this.images)
        while(Arr.length){
           index = parseInt(Math.random() * Arr.length);
          out = out.concat( Arr.splice(index, 1) );
        }
        // console.log(out);
        for(let i=0;i<9;i++){
          if (i===0){
              _this.imageNow[out[i]] = _this.images.plus[parseInt(Math.random()*8)]
          }else {
                _this.imageNow[out[i]] = _this.images.noPlus[parseInt(Math.random()*35)]
          }
        }
      }
    },
    mounted(){
      let _this = this
      _this.randNum()

    }
  }
</script>

<style lang='scss' rel="stylesheet/scss" type="text/scss" >
  .registered{
    background: #ffffff;
  }
  .registered .el-dialog__header{
    border-bottom: 2px solid #44A3FC;
    color: #44A3FC;
  }
  .registered .el-dialog__title{
    color: #44A3FC;
    font-weight: bold;
  }
  .registered .el-form-item__label{
    text-align:left;
  }
  .registered .sign-up-button{
    width: 100%;
    height: 40px;
    background: linear-gradient(to right,#FC9C3B,#FFC95D);
    border: none
  }
  .sign-up-btn-group {
    display: flex;
    justify-content: space-around;
    margin-top: 40px;

    .el-button {
      width: 90%;
    }
  }
  .nineImage{
    margin-top: 20px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    border: 1px solid #969896;
    padding-bottom: 10px;
    .choseTitle{
      margin-top: 6px;
      width: 100%;
      text-align: center;
      color:#4D5873;
      font-weight:400;
      line-height: 21px;
      .showyyu{
        color:#61ABF2;
        font-weight:bold;
      }
    }
    .showImage{
      width: 106px;
      height: 100px;
      border:1px solid #DADADA;
      margin-top:10px;
      border:1px dashed  #D9DDE4;
      .trueNow{
        position: absolute;
        width: 20px;
        height: 20px;
        background:#42E847;
        margin-top: -60px;
        margin-left: 80px;
        border-radius: 10px;
        color:#ffffff;
        text-align: center;
        font-weight: bold;
      }
      img{
        width: 100%;
        height: 100%;
      }
    }
  }
</style>
