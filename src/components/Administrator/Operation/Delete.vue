<template>
    <div id="Delete">
      <Breadcrumb :breadcrumb="breadcrumb"/>
      <div class="DeleteTitle">
            车次删除
      </div>
      <el-table
        :data="tableData"
        style="width: 100%"
        border
      >
        <el-table-column
          prop="origin"
          label="出发地"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="destination"
          label="目的地"
          align="center"
        >
        </el-table-column>
        <el-table-column
          label="出发时间"
          align="center"
        >
          <template slot-scope="scope">
              <span>
                {{changeTime(scope.row.departureTime)}}
              </span>
          </template>
        </el-table-column>
        <el-table-column
          label="到达时间"
          align="center"
        >
          <template slot-scope="scope">
              <span>
                {{changeTime(scope.row.arrivalTime)}}
              </span>
          </template>
        </el-table-column>
        <el-table-column
          label="删除"
          align="center"
        >
          <template slot-scope="scope">
              <el-button @click="remove(scope.row)" class="DeleteButton">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
</template>

<script>
  import Breadcrumb from '../Breadcrumb/Breadcrumb'
  import Train from './train'
  import ChangeTinme from './changeTime'
  export default {
    name: 'Delete',
    components:{
      Breadcrumb
    },
    data(){
      return{
        breadcrumb:{
          secondName:'删除'
        },
        tableData:Train
      }
    },
    methods:{
      remove(data){
        console.log(data)
       for (let i=0; i < this.tableData.length;i++){
          if(this.tableData[i].id === data.id){
              this.tableData.splice(i,1)
          }
        }
      },
      changeTime(data){
      return  ChangeTinme(data)
      }
    }
  }
</script>

<style scoped lang="scss">
  #Delete /deep/ .el-table th{
    height: 60px;
    font-size:24px;
    line-height: 60px;
    padding: 0;
    background: #EAEEF1;
  }
  #Delete  /deep/ .el-table .cell{
    line-height: 60px;
  }
    #Delete{
      width: 60%;
      margin:auto;
      .DeleteTitle{
        width: 100%;
        height: 60px;
        text-align: center;
        font-size: 24px;
        line-height: 60px;
        font-weight: bold;
        color:#ffffff;
        background: url("../../../../static/images/titleBackground.png") no-repeat;
      }
      .DeleteButton{
        width: 100%;
        background: linear-gradient(to right,#FC9C3B,#FFC95D);
        color: #ffffff;
      }
    }
</style>
