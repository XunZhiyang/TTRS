<template>
  <el-form ref="form" :model="formModel" label-width="80px">
    <el-form-item label="出发城市">
      <el-select v-model="formModel.departure" filterable placeholder="请选择">
        <el-option
          v-for="city in chineseCities"
          :key="city.name"
          :label="city.name"
          :value="city.pinyin">
        </el-option>
      </el-select>
    </el-form-item>

    <el-form-item label="到达城市">
      <el-select v-model="formModel.arrival" filterable placeholder="请选择">
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
        v-model="formModel.date"
        align="right"
        type="date"
        placeholder="选择日期"
        :picker-options="pickerOptions">
      </el-date-picker>
    </el-form-item>

    <el-form-item>
<!--        <div class="asdfasdf">-->
      <el-button type="primary">

        <router-link to="/QueryTicket">
          查  询
        </router-link>
      </el-button>
<!--        </div>-->

    </el-form-item>

    <CountingDialog :visible.sync="countingDialogVisible"/>
  </el-form>
</template>

<script>
  import ChineseCities  from './ChineseCities';
  import CountingDialog from './CountingDialog'


  export default {
    name: "SearchTicketForm",
    data() {
      return {
        countingDialogVisible: false,
        chineseCities: ChineseCities,
        formModel    : {
          departure: '',
          arrival  : '',
          date     : ''
        },
        pickerOptions: {
          disabledDate(time) {
            return time.getTime() < Date.now();
          },
          shortcuts: [
            {
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
            }
          ]
        },
      }
    },
    components: {
      CountingDialog
    }
  }
</script>

<style lang='scss' rel="stylesheet/scss" type="text/scss">
.asdfasdf
{
  position: center !important;
  width: 1000px;
  /*text-decoration:none !important;*/
}
</style>
