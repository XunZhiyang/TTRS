<template>
    <div id="Release">
      <Breadcrumb :breadcrumb="breadcrumb"/>
      <div class="ReleaseTitle">
          车次发布
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
          label="修改"
          align="center"
        >
          <template slot-scope="scope">
            <el-button @click="release(scope.row)" class="ReleaseButton">发布</el-button>
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
    name: 'Release',
    components:{
      Breadcrumb
    },
    data(){
      return{
        breadcrumb:{
          secondName:'修改'
        },
        tableData:Train
      }
    },
    methods:{
      changeTime(data){
        return ChangeTinme(data)
      },
      release(data){
          this.$message.success(data.origin+'到'+data.destination+'的车票信息已发布')
      }
    }
  }
</script>

<style scoped lang="scss">
  #Release /deep/ .el-table th{
    height: 60px;
    font-size:24px;
    line-height: 60px;
    padding: 0;
    background: #EAEEF1;
  }
  #Release  /deep/ .el-table .cell{
    line-height: 60px;
  }
  #Release{
    width:60%;
    margin:auto;
    .ReleaseTitle{
      width: 100%;
      height: 60px;
      text-align: center;
      font-size: 24px;
      line-height: 60px;
      font-weight: bold;
      color:#ffffff;
      background: url("../../../../static/images/titleBackground.png") no-repeat;
    }
    .ReleaseButton{
      width: 100%;
      background: linear-gradient(to right,#FC9C3B,#FFC95D);
      color: #ffffff;
    }
  }
</style>
