<template>
    <div id="Add">
      <Breadcrumb :breadcrumb="breadcrumb"/>
      <div class="AddTable">
        <div class="AddModule">
          <div class="AddTitle">
            新建车次
          </div>
          <div class="AddInputs">
            <div class="AddInput">
              <el-input v-model="origin" placeholder="请输入出发地"></el-input>
            </div>
            <div class="AddInput">
              <el-input v-model="destination" placeholder="请输入出发地"></el-input>
            </div>
            <div class="AddInput">
              <el-date-picker
                type="datetime"
                v-model="departureTime"
                placeholder="请选择出发日期时间">
              </el-date-picker>
            </div>
            <div class="AddInput">
              <el-date-picker
                type="datetime"
                v-model="arrivalTime"
                placeholder="请选择到达日期时间">
              </el-date-picker>
            </div>
            <div class="AddButton">
              <el-button @click="addTrain" class="addButton">添加</el-button>
            </div>
          </div>
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
              prop="departureTime"
              label="出发时间"
              align="center"
            >
            </el-table-column>
            <el-table-column
              prop="arrivalTime"
              label="到达时间"
              align="center"
            >
            </el-table-column>
          </el-table>
        </div>
    </div>
</template>

<script>
  import Breadcrumb from '../Breadcrumb/Breadcrumb'
  import ChangeTime from './changeTime'
  export default {
    name: 'Add',
    components:{
      Breadcrumb
    },
    data () {
      return {
        breadcrumb:{
          secondName:'添加'
        },
        tableData:[],
        origin:'',
        destination:'',
        departureTime:'',
        arrivalTime:''
      }
    },
    methods:{
      addTrain(){
        let _this = this
        console.log(_this.departureTime.getDay())
        _this.tableData.push({origin:_this.origin,
          destination:_this.destination,
          departureTime:ChangeTime(_this.departureTime),
          arrivalTime:ChangeTime(_this.arrivalTime)
        })
      },

    }
  }
</script>

<style scoped lang="scss">
  #Add /deep/ .el-table__empty-block{
    font-size: 24px;
  }
  #Add /deep/ .el-table th{
    height: 60px;
    font-size:24px;
    line-height: 60px;
    padding: 0;
    background: #EAEEF1;
  }
  #Add /deep/ .el-table td{
    height: 60px;
    font-size:16px;
    line-height: 60px;
    padding: 0;
  }
  #Add /deep/ .el-table .cell{
    line-height: 60px;
  }
  #Add /deep/ .el-date-editor.el-input, .el-date-editor.el-input__inner{
    width: 100%;
  }
#Add{
  width: 60%;
  margin:auto;
  .AddTable{

  }
  .AddTitle{
    width: 100%;
    height: 60px;
    background: url("../../../../static/images/titleBackground.png") no-repeat;
    text-align: center;
    font-size: 24px;
    line-height: 60px;
    font-weight: bold;
    color:#ffffff;
  }
  .AddModule{
    width: 100%;
    border:1px solid #EBEEF5;

    .AddInputs{
      width: 100%;
      height: 84px;
      background: #EAEEF1;
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      border-bottom: 1px solid #969896;
    }
    .AddInput{
      margin-top: 24px;
      width: 250px;
    }
    .AddButton{
      width: 74px;
      margin-top: 24px;
      .addButton{
        width: 100%;
        background: linear-gradient(to right,#FC9C3B,#FFC95D);
        color: #ffffff;
      }
    }
  }
}
</style>
