<template>
    <div id="Permissions">
        <el-row>
          <Breadcrumb :breadcrumb="breadcrumb"/>
          <div class="PermissionsTitle">
              人员管理表
          </div>
          <el-table
            :data="tableData"
            border
            style="width: 100%">
            <el-table-column
              prop="id"
              label="用户名"
              align="center"
              >
            </el-table-column>
            <el-table-column
              prop="name"
              label="权限"
              align="center"
            >
            </el-table-column>
            <el-table-column
              label="权限变更"
              align="center"
              prop="word"
            >
            </el-table-column>
            <el-table-column
              label="操作"
              align="center"
            >
              <template slot-scope="scope">
                  <el-button @click="changeIt(scope.row)"  class="changeButton">
                    变更
                  </el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-row>
    </div>
</template>

<script>
  import Breadcrumb from '../Breadcrumb/Breadcrumb'
  export default {
    name: 'Permissions',
    components:{
      Breadcrumb
    },
    data(){
      return{
        breadcrumb:{
          secondName:'管理权限'
        },
        tableData:[
          {id:'NTG',name:'管理员',word:'降级为普通人员'},
          {id:'admin',name:'普通人员',word:'升级为管理员'},
          {id:'yyuyyu',name:'普通人员',word:'升级为管理员'},
          {id:'aaaa',name:'普通人员',word:'升级为管理员'},
        ]
      }
    },
    methods:{
      changeIt(data){
        if(data.name === '管理员'){
          data.name = '普通人员'
          data.word = '升级为管理员'
        }else {
          data.name = '管理员'
          data.word = '降级为普通人员'
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  #Permissions /deep/ .el-table th{
    height: 60px;
    font-size:24px;
    line-height: 60px;
    padding: 0;
    background: #EAEEF1;
  }
  #Permissions /deep/ .el-table .cell{
    line-height: 60px;
  }
    #Permissions{
      width: 60%;
      margin:auto;
      .PermissionsTitle{
        width: 100%;
        height: 60px;
        text-align: center;
        font-size: 24px;
        line-height: 60px;
        font-weight: bold;
        color:#ffffff;
        background: url("../../../../static/images/titleBackground.png") no-repeat;
      }
      .changeButton{
        width: 100%;
        background: linear-gradient(to right,#FC9C3B,#FFC95D);
        color: #ffffff;
        .prompt{
          font-size: 10px;
          color: #ff0000;
        }
      }
    }
</style>
