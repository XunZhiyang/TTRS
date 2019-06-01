<template>
  <el-dialog title="点歌"
             :visible.sync="dialogVisible"
             width="1000px"
             append-to-body
  >
    <div class="song-dialog">
      <div class="search-bar">
        <el-input
          placeholder="请输入要搜索歌曲"
          v-model="inputModel"
          clearable>
        </el-input>
        <div class="singer-list">
          <div class="singer-list-item"
               v-for="singer in singers"
               :key="singer.name"
          >
            <img class="singer-pic" :src="singer.pic" alt="">
            <div class="singer-name">{{singer.name}}</div>
          </div>
        </div>
      </div>
      <div class="song-list">
        <el-table
          :data="songs"
          stripe
          height="500"
          highlight-current-row
          style="width: 100%">
          <el-table-column width="40" class="column-play" class-name="column-play"><span class="iconfont icon-play"/>
          </el-table-column>
          <el-table-column prop="title" label="歌曲名"/>
          <el-table-column label="歌曲名">
            <template slot-scope="scope">{{scope.row.album.title}}</template>
          </el-table-column>
          <el-table-column label="播放时长" width="150" class-name="play-time-column">
            <span class="play-time">4:12</span>
            <el-button class="btn-buy" type="success" size="small" @click="showQrDialog">购买</el-button>
          </el-table-column>
        </el-table>
      </div>
    </div>
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
    </div>

    <QrCodeDialog :visible.sync="qrCodeDialogVisible"/>
  </el-dialog>
</template>

<script>
  import songs   from './song.json';
  import singers from './singer';
  import QrCodeDialog from '@/components/QrCodeDialog.vue'


  export default {
    name    : "SongDialog",
    filters : {
      album(scope) {
        console.log(scope.album);
        return ''
      }
    },
    props   : {
      visible: {
        type   : Boolean,
        default: false,
      }
    },
    data() {
      return {
        inputModel: '',
        songs,
        singers,
        qrCodeDialogVisible: false,
      }
    },
    computed: {
      dialogVisible: {
        get() {
          return this.visible;
        },
        set(val) {
          this.$emit('update:visible', val);
        }
      }
    },
    methods: {
      showQrDialog() {
        this.qrCodeDialogVisible = true;
      }
    },
    components: {
      QrCodeDialog
    }
  }
</script>

<style lang='scss' rel="stylesheet/scss" type="text/scss">
  .song-dialog {
    height: 500px;
    display: flex;

    .search-bar {
      width: 200px;
      display: flex;
      flex-direction: column;
    }

    .singer-list {
      flex: 1;
      overflow: auto;

      .singer-list-item {
        display: flex;
        align-items: center;
        margin: 5px 0;
        transition: all .5s;

        .singer-pic {
          width: 64px;
          height: 64px;
        }

        .singer-name {
          padding: 0 10px;
        }

        &:hover {
          cursor: pointer;
          box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
          transform: scale(1.02, 1.02);
        }
      }
    }

    .song-list {
      flex: 1;
    }

    .column-play {
      text-align: center;

      .iconfont {
        cursor: pointer;
      }
    }

    .el-table--striped .el-table__body tr.el-table__row--striped.current-row td,
    .el-table__body tr.current-row > td {
      background-color: #dcdcdc;
    }


    .el-table__row {
      .play-time-column {
        .play-time {
          display: block;
        }

        .btn-buy {
          display: none;
        }
      }

      &.current-row {
        .play-time-column {
          .play-time {
            display: none;
          }
          .btn-buy {
            display: block;
          }
        }
      }
    }
  }
</style>
