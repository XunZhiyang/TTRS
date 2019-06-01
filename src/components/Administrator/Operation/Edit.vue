<template>
    <div id="Edit">
      <Breadcrumb :breadcrumb="breadcrumb"/>
      <div class="EditTitle">
            修改车次
      </div>
      <el-table
        :data="tableData"
        style="width: 100%"
        border
      >
        <el-table-column
          label="出发地"
          align="center"
        >
          <template slot-scope="scope">
              <el-input v-model="scope.row.origin"></el-input>
          </template>
        </el-table-column>
        <el-table-column
          label="目的地"
          align="center"
        >
          <template slot-scope="scope">
            <el-input v-model="scope.row.destination"></el-input>
          </template>
        </el-table-column>
        <el-table-column
          label="出发时间"
          align="center"
        >
          <template slot-scope="scope">
            <el-date-picker
              type="datetime"
              v-model="scope.row.departureTime"
              placeholder="请选择出发日期时间">
            </el-date-picker>
          </template>
        </el-table-column>
        <el-table-column
          label="到达时间"
          align="center"
        >
          <template slot-scope="scope">
            <el-date-picker
              type="datetime"
              v-model="scope.row.arrivalTime"
              placeholder="请选择出发日期时间">
            </el-date-picker>
          </template>
        </el-table-column>
        <el-table-column
          label="删除"
          align="center"
        >
          <template slot-scope="scope">
            <el-button @click="edit(scope.row)" class="EditButton">修改</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
</template>

<script>
  import Breadcrumb from '../Breadcrumb/Breadcrumb'
  import Train from './train'
  export default {
    name: 'Edit',
    components:{
      Breadcrumb
    },
    data(){
      return{
        breadcrumb:{
          secondName:'编辑'
        },
        tableData:Train
      }
    },
    methods:{
      edit(data){
        for(let i=0;i<this.tableData.length;i++){
            if (this.tableData[i].id === data.id){
              this.tableData[i].origin = data.origin
              this.tableData[i].destination = data.destination
              this.tableData[i].departureTime = data.departureTime
              this.tableData[i].arrivalTime = data.arrivalTime
            }
        }
        // console.log(this.tableData)
      }

    }
  }
</script>

<style scoped lang="scss">
  #Edit /deep/ .el-table th{
    height: 60px;
    font-size:24px;
    line-height: 60px;
    padding: 0;
    background: #EAEEF1;
  }
  #Edit  /deep/ .el-table .cell{
    line-height: 60px;
  }
  #Edit{
    width: 60%;
    margin:auto;
    .EditTitle{
      width: 100%;
      height: 60px;
      text-align: center;
      font-size: 24px;
      line-height: 60px;
      font-weight: bold;
      color:#ffffff;
      background: url("../../../../static/images/titleBackground.png") no-repeat;
    }
    .EditButton{
      width: 100%;
      background: linear-gradient(to right,#FC9C3B,#FFC95D);
      color: #ffffff;
    }
  }
</style>
