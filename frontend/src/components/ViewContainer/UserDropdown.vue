<template>
  <el-submenu index="mine">
    <template slot="title">
      <span class="iconfont icon-caidan07" style="font-size: 36px;"></span>
    </template>
    <el-menu-item index="">尊敬的, {{loginUser.username}}</el-menu-item>
    <el-menu-item index="membership" @click="membershipDialogVisible = true">我的会员</el-menu-item>
    <el-menu-item index="userOrder">我的订单</el-menu-item>
    <el-menu-item index="userInformation">个人信息</el-menu-item>
    <el-menu-item  @click="logout">退出</el-menu-item>
    <MemberDialog :visible.sync="membershipDialogVisible"/>
  </el-submenu>
</template>

<script>
  import {mapState, mapActions}                  from 'vuex';
  import UserTypes, {namespace as UserNamespace} from '@/store/User/types';

  import MemberDialog from '@/components/Member/MemberDialog';


  export default {
    name      : "UserDropdown",
    data() {
      return {
        membershipDialogVisible: false,
      }
    },
    computed  : {
      ...mapState(UserNamespace, [
        'loginUser'
      ])
    },
    methods   : {
      ...mapActions(UserNamespace, {
        logout: UserTypes.ACTION.LOGOUT
      })
    },
    components: {
      MemberDialog
    }
  }
</script>

<style lang='scss' rel="stylesheet/scss" type="text/scss">

</style>
