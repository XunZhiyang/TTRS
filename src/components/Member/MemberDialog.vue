<template>
  <el-dialog
    :visible.sync="dialogVisible"
    :width="dialogWidth"
    append-to-body
  >
    <JoinMemberShip v-if="showSubscribePage" @subscribe="subscribe"/>
    <MemberInfo v-else
                @close-dialog="closeDialog"
    />
  </el-dialog>
</template>

<script>
  import {mapState, mapActions}                  from 'vuex'
  import UserTypes, {namespace as UserNamespace} from '@/store/User/types';

  import JoinMemberShip from './JoinMemberShip';
  import MemberInfo from './MemberInfo'


  export default {
    name      : "MemberDialog",
    props     : {
      visible: {
        type   : Boolean,
        default: false,
      }
    },
    data() {
      return {}
    },
    computed  : {
      ...mapState(UserNamespace, [
        'loginUser'
      ]),

      txtTitle() {
        return this.loginUser ? '': '我的会员'
      },
      dialogVisible: {
        get() {
          return this.visible;
        },
        set(val) {
          this.$emit('update:visible', val);
        }
      },

      showSubscribePage() {
        return !this.loginUser.membership;
      },

      dialogWidth() {
        return this.showSubscribePage ? '700px' : '500px';
      }
    },
    methods   : {
      ...mapActions(UserNamespace, {
        subscribe: UserTypes.ACTION.SUBSCRIBE_MEMBER
      }),

      closeDialog() {
        this.dialogVisible = false;
      }
    },
    components: {
      JoinMemberShip,
      MemberInfo
    }
  }
</script>

<style lang='scss' rel="stylesheet/scss" type="text/scss">

</style>
