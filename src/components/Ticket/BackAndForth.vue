/**
* 往返
**/
<template>
  <div id="BackAndForth">
    <el-dialog
      custom-class="backAndForth"
      title=""
      :visible.sncy="backAndForth"
      width="580px"
      append-to-body
      center
      :before-close="twoWayClose"
    >
      <div class="dialogTitle">
        往返车票
      </div>
      <div class="dialogForm">
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
      </div>

      <div class="changeCity">
        <div class="changeIcon" @click="changeCity">
          <i class="el-icon-sort"></i>
        </div>
      </div>
      <div slot="footer" class="dialog-footer">
        <!--<el-button @click="twoWayClose">取 消</el-button>-->
        <el-button class="query"  @click="openit">查 询</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import ChineseCities  from '@/router/Home/ChineseCities';
  import {mapActions,mapState} from 'vuex'
  export default {
    name: "BackAndForth",
    computed:{ //vuex获取定义的参数
      ...mapState('ticket',{
        backAndForth:state =>state.backAndForth
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
      }
    },
    methods:{
      ...mapActions('ticket',[
        'closeTwoWay',
        'openSeats'
      ]),
      twoWayClose(){
        this.closeTwoWay()
      },
      openit(){
        this.closeTwoWay()
        this.openSeats()
      },
      changeCity(){
        let _this = this
        let city = _this.form.departure
        _this.form.departure = _this.form.arrival
        _this.form.arrival = city
      }
    }
  }
</script>

<style  lang="scss">
  .backAndForth{
    background:linear-gradient(to top right, #91D5EB 0%, #96c9F0 25%,#AAD3EC 60%, #92C9D2 100%);
    .el-dialog__body,.el-dialog__footer {
      padding: 0;
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
      height: 280px;
      background-color:#DADADA;
      .twoWayForm{
        padding-top: 20px;
        width: 50%;
        margin: auto;
      }
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
  }
  .changeCity{
    position: absolute;
    top: 240px;
    right: 124px;
    width: 20px;
    height: 70px;
    border: 1px solid #969896;
    border-left: none;
    .changeIcon{
      position: absolute;
      left: 10px;
      top: 27px;
      width: 20px;
      height: 20px;
      border-radius: 20px;
      background: #ffd04b;
      text-align: center;
      cursor:pointer;
      i{
        color:#ffffff;
        font-size: 18px;
        line-height: 20px;
      }
    }
  }
  .changeIcon :hover {
    top: 30px;
  }
  #BackAndForth{

  }
</style>
