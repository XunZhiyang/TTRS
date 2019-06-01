<template>
    <div id="DeleteDatabase">
      <el-dialog
        :visible="showDelete"
        width="580px"
        :before-close="closeDelete"
      >
        <div class="deleteTitle">
            删库跑路
        </div>
        <div class="deleteBox">
          <div class="deleteMain">
            <div class="deletePrompt">
              输入'{{deletePrompt}}'确认操作
            </div>
            <el-input v-model="inputValue" placeholder="请输入引号内的字符验证" @focus="showWring =false"></el-input>
            <span v-show="showWring" class="deleteWring">验证不通过，请重新输入验证字符串</span>
            <div class="deleteButton">
              <el-button class="deleteSure" @click="sureSubmit">确认</el-button>
              <el-button class="deleteCancel" @click="closeDelete">取消</el-button>
            </div>
          </div>
        </div>
      </el-dialog>
    </div>
</template>

<script>
  import {mapActions,mapState} from 'vuex'
  export default {
    name: 'DeleteDatabase',
    computed:{
      ...mapState('administrator',{
        showDelete:state => state.deleteDatabase
      })
    },
    data(){
      return{
        deletePrompt:'xzytql',
        inputValue:'',
        showWring:false
      }
    },
    methods:{
      ...mapActions('administrator',[
        'closeDeleteDatabase'
      ]),
      sureSubmit(){
        let _this = this
        if(_this.deletePrompt === _this.inputValue){
          this.closeDeleteDatabase()
            this.$message.success('删库成功请尽快跑路！！！！')
        }else {
          _this.showWring = true
        }
      },
      closeDelete(){
        this.closeDeleteDatabase()
      }
    }
  }
</script>

<style scoped lang="scss">
#DeleteDatabase /deep/ .el-dialog{
    background:linear-gradient(to right,#9EE0F5 , #A3DCE1);

}
#DeleteDatabase /deep/ .el-dialog__header{
    padding: 0;
}
#DeleteDatabase /deep/ .el-dialog__body{
  padding: 0;
}
#DeleteDatabase{
  .deleteBox{
    width: 100%;
    background: #DADADA;
    .deleteMain{
      width: 50%;
      margin:auto;
      .deletePrompt{
        text-align: center;
        font-size: 20px;
        line-height: 60px;
        color: #000;
      }
      .deleteWring{
        padding-left: 10px;
        font-size: 8px;
        line-height: 20px;
        color:red;
      }
      .deleteButton{
          padding: 30px 0px;
        .deleteSure{
          width: 100px;
          background: linear-gradient(to right,#FC9C3B,#FFC95D);
          color: #ffffff;
          margin-left: 30px;
        }
        .deleteCancel{
          width: 100px;
          margin-left: 30px;
        }
      }
    }
  }
  .deleteTitle{
    height: 100px;
    font-size: 30px;
    font-weight: bold;
    color: #ffffff;
    text-align: center;
    line-height: 100px;
  }
}
</style>
