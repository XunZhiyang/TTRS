<template>
    <div id="TwoWay">
      <el-form :model="form" class="twoWayForm">
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
      <el-form-item label="返回日期">
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
      <div class="FromToBack">
        <div class="changeIcon" @click="changeCity">
          <i class="el-icon-sort"></i>
        </div>
      </div>
      <div class="showSeat">
        <el-button class="seatQuery" @click="openChoseTime">查询</el-button>
      </div>
    </div>
</template>

<script>
  import {mapActions,mapState} from 'vuex'
  import ChineseCities  from '@/router/Home/ChineseCities';
  export default {
    name: 'TwoWay',
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
      }
    },
    methods:{
      ...mapActions('ticket',[
        'openSeats',
        'showChoseTime'
      ]),
      changeCity(){
        let _this = this
        let city = _this.form.departure
        _this.form.departure = _this.form.arrival
        _this.form.arrival = city
      },
      openChoseTime(){
        this.showChoseTime()
      }
    }
  }
</script>

<style scoped lang="scss">
  #TwoWay{
    width: 100%;
    .twoWayForm{
      width: 300px;
      margin:30px auto;
    }
    .FromToBack{
      width:20px;
      height: 80px;
      border: 1px solid #969896;
      margin-left: calc(50% + 130px);
      margin-top: -246px;
      border-left: none;
      .changeIcon{
        width: 20px;
        height: 20px;
        margin:30px 10px;
        border-radius: 10px;
        background:#ffd04b;
        text-align: center;
        line-height: 20px;
        color:#ffffff;
        cursor: pointer;
      }
    }
    .showSeat{
      width: 300px;
      height: 60px;
      margin:180px auto ;
      .seatQuery{
        width: 100%;
        height: 100%;
        background: linear-gradient(to right,#FC9C3B,#FFC95D);
        border-radius: 10px;
        color:#ffffff;
        letter-spacing:6px;
      }
    }
  }
</style>
