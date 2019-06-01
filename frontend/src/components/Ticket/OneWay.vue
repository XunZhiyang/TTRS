/**
*   单程
**/
<template>
  <div id="OneWay">
    <el-dialog
      custom-class="dialogOneWay"
      :visible.sync="oneWayShow"
      width="580px"
      center
      append-to-body
      :before-close="oneWayClose"
    >
      <div class="dialogTitle">
        单程票预订
      </div>
      <div class="dialogForm">
        <el-form :model="form"  class="oneWayForm">
          <el-form-item label="出发城市" >
            <el-select v-model="form.departure" placeholder="请选择出发城市">
              <el-option
                v-for="city in chineseCities"
                :key="city.name"
                :label="city.name"
                :value="city.pinyin">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="到达城市" >
            <el-select v-model="form.arrival" placeholder="请选择到达城市">
              <el-option
                v-for="city in chineseCities"
                :key="city.name"
                :label="city.name"
                :value="city.pinyin">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="出发日期">
            <el-date-picker
              v-model="form.data"
              align="right"
              type="date"
              placeholder="选择日期"
              :picker-options="pickerOptions1"
            >
            </el-date-picker>
          </el-form-item>
        </el-form>
      </div>
      <div slot="footer" class="dialog-footer">
        <!--<el-button @click="oneWayClose">取 消</el-button>-->
        <el-button class="query"  @click="openSet">查 询</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import ChineseCities  from '@/router/Home/ChineseCities';
  import {mapState,mapActions} from 'vuex'
  import Ticket from './Ticket'
  export default {
    name: "OneWay",

    computed: {
      ...mapState('ticket',{
        oneWayShow :state=>state.oneWayShow
      })
    },
    data(){
      return{
        chineseCities: ChineseCities,
        form:{
          departure:'',
          arrival:'',
          date:''
        },
        pickerOptions1: {
          disabledDate(time) {
            return time.getTime() < Date.now() ;
          },
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '明天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() + 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周后',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() + 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          },
            {
              text: '30天后',
              onClick(picker) {
                const date = new Date();
                date.setTime(date.getTime() + 3600 * 1000 * 24 * 30);
                picker.$emit('pick', date);
              },
            }
          ]
        },
        dialogVisible: false
      }
    },
    methods:{
      ...mapActions('ticket',[
        'closeOneWay',
        'openSeats'
      ]),
      oneWayClose(){
        this.closeOneWay()
      },
      openSet(){
        this.closeOneWay()
        this.openSeats()
      },
      endDate(){
        let date = new Date()
        return date+ (30*3600*1000*24)
      }
    }
  }
</script>

<style  lang="scss">
  .dialogOneWay{
    background:linear-gradient(to right top,#91D5EB 50%, #92C9D2 100%);
    .el-dialog__body,.el-dialog__footer {
      padding: 0;
    }

    .dialog-footer{
      background-color: #DADADA;
      padding-bottom: 20px;
      .query{
        width: 50%;
        height: 50px;
        background:linear-gradient(to right,#FC9C3B ,#FFC95D);
        color:#ffffff;
        font-size: 16px;
      }
    }
    .dialogTitle{
      width: 100%;
      height: 180px;
      text-align: center;
      font-size: 30px;
      line-height: 180px;
      color:#ffffff;
      letter-spacing: 3px;
    }
    .dialogForm{
      width: 100%;
      height: 200px;
      background-color:#DADADA;
      .oneWayForm{
        padding-top: 20px;
        width: 50%;
        margin: auto;
      }
    }
  }

</style>
