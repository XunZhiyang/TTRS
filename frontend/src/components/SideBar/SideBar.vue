<template>
  <CollapseMenu :visible="sideBarVisible">
    <div class="view-container-side-bar">
      <div class="icon-container">
        <img :src="icon_bus" alt="">
      </div>

      <div class="side-bar-item"
           v-for="functional in functionalList"
           :key="functional.icon"
           @click="openDialog(functional.title)"
      >
        <img :src="functional.icon" alt="">
        {{functional.title}}
      </div>
    </div>

    <SongDialog :visible.sync="songDialogVisible"/>
    <OrderDialog :visible.sync="orderDialogVisible" @show-qr-code="showQrCode"/>
    <QrCodeDialog :visible.sync="qrCodeDialogVisible"/>
    <SingerDialog :visible.sync="singerDialogVisible" @show-qr-code="showQrCode"/>
    <LifeTimeDialog :visible.sync="lifeTimeDialogVisible"/>
  </CollapseMenu>
</template>

<script>
  import CollapseMenu   from './CollapseMenu'
  import SongDialog     from '@/components/Song/SongDialog'
  import OrderDialog    from '@/components/Order/OrderDialog';
  import QrCodeDialog   from '@/components/QrCodeDialog';
  import SingerDialog   from '@/components/Singer/SingerDialog';
  import LifeTimeDialog from '@/components/LifeTimeDialog';

  import img_order    from '@/assets/SideBar/order@2x.png';
  import img_song     from '@/assets/SideBar/song@2x.png';
  import img_lifetime from '@/assets/SideBar/lifetime@2x.png';
  import img_team     from '@/assets/SideBar/team@2x.png';
  import icon_bus     from '@/assets/bus@2x.png';


  export default {
    name      : "SideBar",
    data() {
      return {
        functionalList       : [
          {icon: img_order, title: '点餐'},
          {icon: img_song, title: '点歌'},
          {icon: img_lifetime, title: '寿命'},
          {icon: img_team, title: '女团'}
        ],
        songDialogVisible    : false,
        orderDialogVisible   : false,
        qrCodeDialogVisible  : false,
        singerDialogVisible  : false,
        lifeTimeDialogVisible: false,
        sideBarVisible       : true,
        icon_bus
      }
    },
    methods   : {
      openDialog(title) {
        switch (title) {
          case '点餐': {
            this.orderDialogVisible = true;
            break;
          }
          case '点歌': {
            this.songDialogVisible = true;
            break;
          }
          case '寿命': {
            this.lifeTimeDialogVisible = true;
            break;
          }
          case '女团': {
            this.singerDialogVisible = true;
            break;
          }
        }
      },
      showQrCode() {
        this.qrCodeDialogVisible = true;
      },
      showCode(){
        this.sideBarVisible = !this.sideBarVisible
      }
    },
    components: {
      CollapseMenu,
      SongDialog,
      OrderDialog,
      QrCodeDialog,
      SingerDialog,
      LifeTimeDialog
    }
  }
</script>

<style lang='scss' rel="stylesheet/scss" type="text/scss">
  .view-container-side-bar {
    background: rgba(255, 255, 255, 0.75);
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    position: relative;

    .icon-container {
      flex: 1;
      position: relative;
      z-index: 1;

      img {
        position: absolute;
        width: 138px;
        height: 158px;
        right: 0;
        bottom: -20px;
      }
    }

    .side-bar-item {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;

      img {
        width: 20px;
        height: 20px;
        margin-right: 5px;
      }

      &:hover {
        background: rgb(245, 245, 245);
      }
    }
  }
</style>
