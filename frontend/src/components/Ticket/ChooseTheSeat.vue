/**
* 选座页面
**/
<template>
  <div id="ChooseTheSeat">
    <el-dialog
      custom-class="choseSeat"
      title="选座"
      width="834px"
      :visible.sync="setShow"
      append-to-body
      :before-close="closeSet"
    >
      <div class="choseSetMain">
        <div class="ticketInformation">
            <div class="ticketTime">
              <span>04月05日   周五   <label class="setOut">出发</label></span>
            </div>
            <div>
              <div class="ticket">
                <span>09:01 天津西 - 09:24 廊坊</span><br>
                <span>G8924 二等座</span>
              </div>
            </div>
        </div>
        <div class="carriage">
            <div class="ticketTitle">选择车厢</div>
            <div class="carriageBody">
              <div class="prompt">
                <span><img src="../../../src/assets/ticket/check.png"> </span><label>可选</label>
                <span><img src="../../../src/assets/ticket/checkedNow.png"> </span><label>已选</label>
                <span><img src="../../../src/assets/ticket/checked.png"> </span><label>已满</label>
              </div>
              <div class=trainModel>
                <div class="trainHead">
                </div>
                <div v-for="index in 16" class="trainBody defaultBody" @click="choseCarriage($event)">
                  {{index}}
                </div>
              </div>
            </div>
        </div>
        <div class="seatMain">
          <div class="ticketTitle">选择车厢</div>
          <div class="seatBody">
              <div class="seatHead">
                <span><img src="../../../src/assets/ticket/check.png"> </span><label>可选</label>
                <span><img src="../../../src/assets/ticket/checkedNow.png"> </span><label>已选</label>
                <span><img src="../../../src/assets/ticket/checked.png"> </span><label>已售</label>
              </div>
            <div class="leftCurve">
              <img src="../../../src/assets/ticket/left.png">
            </div>
              <div class="seatsMain">
                <div class="seats">
                  <div v-for="index in 16" class="choseSeat">
                    <div class="setNum">{{index>9? index:'0'+index}}</div>
                    <div class="seatWord">窗</div>
                    <div class="seat seatDefault" @click="changeSeats($event)">A</div>
                    <div class="seat seatDefault" @click="changeSeats($event)">B</div>
                    <div class="seat seatDefault" @click="changeSeats($event)">C</div>
                    <div class="seatWord">过道</div>
                    <div class="seat seatDefault" @click="changeSeats($event)">D</div>
                    <div class="seat seatDefault" @click="changeSeats($event)">E</div>
                    <div class="seatWord">窗</div>
                  </div>
                </div>
              </div>
            <div class="rightCurve">
              <img src="../../../src/assets/ticket/right.png">
            </div>
          </div>
        </div>
      </div>
      <div class="choseSetFooter">
        <div class="pay">
          <span class="payNumber">需支付：￥  <label class="payMoney">{{payMoney}}</label></span>
        </div>
        <div class="buy">
          <el-button class="buyTicket" @click="showCard">购 票</el-button>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import  {mapState,mapActions} from 'vuex'
  export default {
    name: 'ChooseTheSeat',
    computed:{
      ...mapState('ticket',{
        setShow: state=>state.seats
      }),
    },
    data(){
      return{
        payMoney: 99,
        trains:[],
        seats:[],
        testAdd:{ //测试已选车座
            carriageNumber:'1', // 已选车厢号
            fullNumber:'2', // 已满车厢号
            activedSeats:[ //已选座位
              {
                activeNumber: '1', //已选的牌号
                acctivedWord: 'A,B,D'//已选的座位
              },
              {
                activeNumber: '2', //已选的牌号
                acctivedWord: 'A,C,D'//已选的座位
              },
              {
                activeNumber: '6', //已选的牌号
                acctivedWord: 'A,D,E'//已选的座位
              }
            ]
        }
      }
    },
    methods:{
      ...mapActions('ticket',[
        'closeSeats',
        'openQr'
      ]),
      choseCarriage(data){
        let _this =this
        // console.log(data.target.classList)
        let classNow = [...data.target.classList]
        console.log(classNow.indexOf('checkedBody'))
        if (classNow.indexOf('checkedBody') ===-1){
          data.target.classList.remove('defaultBody')
          data.target.classList.add('checkedBody')
        } else {
          data.target.classList.remove('checkedBody')
          data.target.classList.add('defaultBody')
        }


      },
      changeSeats(data){
        let _this = this
        let classNow =[...data.target.classList]
        if(classNow.indexOf('seatChecked') === -1){
          data.target.classList.remove('seatDefault')
          data.target.classList.add('seatChecked')
        }else {
          data.target.classList.remove('seatChecked')
          data.target.classList.add('seatDefault')
        }


      },
      showCard(){
        console.log('测试测试')
        this.openQr()
      },
      checedNow( e){
        console.log(e)
      },
      closeSet(){
        this.closeSeats()
      },
      showChose(data){
        let _this = this
        // if( Array.isArray(data)){
        //   data.forEach( item => {
        //     _this.columnActived(item.activedSeats.activeNumber,item.activedSeats.acctivedWord)
        //   })
        // }
      },
      columnActived(){
        // let cc = []
        // seats.forEach( item =>{
        //   cc = [...item.children]
        //   cc.forEach( res =>{
        //     if (res.title === data && activedWord.includes(res.innerHTML)){
        //       res.classList.add('test')
        //       res.onclick = 'false'
        //     }else{
        //
        //     }
        //
        //   })
        // })
      }
    },
    mounted(){
      let _this = this
      _this.trains = document.getElementsByClassName('trainBody')
      _this.seats = document.getElementsByClassName('seat')
      _this.showChose(_this.testAdd)
    },
    watch:{
      setShow(val){
        if (val){
          let teains = document.getElementsByClassName('trainBody')
          let seats = document.getElementsByClassName('seat')
         // console.log(teains)
          teains = [...teains]
          seats = [...seats]
          teains.forEach( res =>{
            if ([...res.classList].indexOf('checkedBody') !== -1) {
                  res.classList.remove('checkedBody')
                  res.classList.add('defaultBody')
              console.log(res.classList)
            }else if ([...res.classList].indexOf('fullBody') !== -1) {
              res.classList.remove('fullBody')
              res.classList.add('defaultBody')
            }else {
              res.classList.remove('fullBody')
              res.classList.remove('checkedBody')
              res.classList.add('defaultBody')
            }
          })
          seats.forEach( item=>{
          let  classLists = [...item.classList]
            if (classLists.indexOf('seatChecked') !== -1) {
              item.classList.remove('seatChecked')
              item.classList.add('seatDefault')
            }
          })

        }
      }
    }
  }
</script>

<style  lang="scss">
  .choseSeat{
    background:#DADADA;
    opacity: 0.86;
    .el-dialog__body{
      padding:0;
    }
    .el-dialog__header{
      border-bottom: 2px solid #44A3FC;
      font-size: 24px;
      line-height: 31px;
      .el-dialog__title{
        color:#44A3FC;
      }
    }
    .choseSetMain{
      width: 90%;
      margin:auto;
      .ticketInformation{
        width: 100%;
        height: 50px;
        .ticketTime{
          float: left;
          color: #4D5873;
          font-size: 30px;
          font-weight: bold;
          .setOut{
            font-size: 20px;
          }
        }
        .ticket{
            float: right;
            color: #4D5873;
            font-size: 16px;
            font-weight: 400;
            text-align: right;
            line-height: 26px;
        }

      }
      .carriage{
        width: 100%;
        .ticketTitle{
          font-size: 30px;
          font-weight:bold;
          line-height: 60px;
          color:#4D5873;
        }
        .carriageBody{
          background:#ffffff;
          width: 100%;
          height: 120px;
          opacity: 1;
        }
        .prompt{
          width: 60%;
          margin: 10px auto;
          display: flex;
          justify-content: center;
          nth-child(0){
            margin-left: 0;
          }
          span{
            margin-top: 10px;
            margin-left: 20px;
            display: inline-block;
          }
          label{
            margin-left: 6px;
            font-size: 20px;
            color: #4D5873;
            line-height:40px;
          }
          img{
            width: 22px;
            height: 22px;
          }

        }
        .trainModel{
          margin-top: 24px;
            display: flex;
            justify-content: space-around;
          .trainHead{
            width: 75px;
            height: 36px;
            background: url("../../../src/assets/ticket/trainHead.png") no-repeat;
            background-size: 75px 36px;
          }
          .trainBody{
            width: 36px;
            height: 36px;
            color: #cccccc;
            font-size: 24px;
            line-height: 36px;
            text-align: center;
            cursor: pointer;
          }
          .defaultBody{
            background: url("../../../src/assets/ticket/trainBody.png") no-repeat;
            background-size: 36px;
          }
          .checkedBody{
            background: url("../../../src/assets/ticket/checkedNow.png") no-repeat;
            background-size: 36px;
          }
          .fullBody{
            background: url("../../../src/assets/ticket/checked.png") no-repeat;
            background-size: 36px;
          }
        }
      }
      .seatMain{
        width: 100%;
        height: auto;
        .ticketTitle{
          font-size: 30px;
          font-weight: bold;
          line-height: 60px;
          color:#4D5873;
        }
        .seatBody{
          width: 100%;
          height:300px ;
          background-color: #ffffff;
          .seatHead{
            display: flex;
            justify-content: center;
            img{
              width: 22px;
              height: 22px;
            }
            span{
              margin-top: 10px;
              margin-left: 10px;
            }
            label{
              font-size: 20px;
              line-height: 40px;
              margin-left: 6px;
            }
          }
          .leftCurve{
            width: 51px;
            height: 240px;
            float: left;
            z-index: 3000;
            img{
              width: 100%;
              height: 100%;
            }
          }
          .rightCurve{
            width: 51px;
            height: 240px;
            float: right;
            img{
              width: 100%;
              height: 100%;
            }
          }
          .seatsMain{
            float: left;
            margin: 20px -51px auto;
            width: 100%;
            max-height: 240px;
            overflow-y: scroll;
            .seats{
              width: 80%;
              margin:auto;
              display: flex;
              justify-content: space-around;
              flex-direction: column;
              flex-wrap: nowrap;
              .choseSeat{
                margin:10px auto;
                width: 100%;
                height: 54px;
                display: flex;
                flex-direction: row;
                justify-content: space-around;
                background: #ffffff;
                .setNum{
                  color:#4D5873;
                  font-size: 20px;
                  line-height: 54px;
                }
                .seatWord{
                  font-size: 24px;
                  color: #cccccc;
                  line-height: 54px;
                }
                .seat{
                  width: 69px;
                  height: 54px;
                  text-align: center;
                  font-size: 24px;
                  color:#cccccc;
                  cursor: pointer;
                }
                .seatDefault{
                  background: url("../../../src/assets/ticket/seat.png") no-repeat;
                  background-size: 69px 54px;
                }
                .seatChecked{
                  background: url("../../../src/assets/ticket/checkeSeat.png") no-repeat;
                  background-size: 69px 54px;
                }
                .readOnly{
                  background: url("../../../src/assets/ticket/checkedSeat.png") no-repeat;
                  background-size: 69px 54px;
                }
              }
            }
          }

        }
      }

    }
    .choseSetFooter{
      width: 100%;
      height: 56px;
      margin-top: 20px;
      background-color: #ffffff;
      .pay{
        margin-left: 26px;
          float: left;
          height: 56px;
        .payNumber{
          font-size: 20px;
          color:#4D5873;
          font-weight: bold;
          line-height: 50px;
        }
        .payMoney{
          font-size: 30px;
          font-weight: bold;
          color:#FC9C3B ;
        }
      }
      .buy{
          float: right;
        .buyTicket{
          width: 268px;
          height: 56px;
          border:none;
          border-radius: 0;
          color:#ffffff;
          font-weight: 400;
          background:linear-gradient(to right,#FC9C3B ,#FFC95D);
        }
      }
    }
  }
  /*.el-button{*/
    /*width: 100%;*/
    /*height: 100%;*/
    /*background: linear-gradient(90deg, #fc9c3b 0%, #ffc95d 100%);*/
    /*line-height: 0px;*/
    /*color: #fff;*/
  /*}*/
  /*.choseSetMain{*/
    /*width: 100%;*/
    /*max-height: 400px;*/
    /*overflow-y: scroll;*/

    /*.choseSetBox{*/
      /*width: 90%;*/
      /*height: 300px;*/
      /*margin:auto;*/
      /*.choseCarriage{*/
        /*width: 100%;*/
        /*text-align: center;*/
        /*line-height: 40px;*/
      /*}*/
      /*.carriage{*/
        /*width: 100%;*/
        /*height: 40px;*/
        /*display: flex;*/
        /*justify-content: space-around;*/
        /*div{*/
          /*width: 20px;*/
          /*height: 20px;*/
          /*text-align: center;*/
          /*background-color: #0086b3;*/
          /*color: #ffffff;*/
          /*cursor: pointer;*/
        /*}*/
      /*}*/
      /*.choseSet{*/
        /*width: 100%;*/
        /*border:1px solid #545c64;*/
        /*.trainWindow,.aisle{*/
          /*width: 100%;*/
          /*text-align: center;*/
        /*}*/
        /*.trainSeat{*/
          /*width: 100%;*/
          /*display: flex;*/
          /*justify-content: space-around;*/
          /*.setNumber{*/
            /*width: 20px;*/
            /*height: 20px;*/
            /*background-color: #55a532;*/
            /*color: #ffffff;*/
            /*text-align: center;*/
          /*}*/
          /*.set{*/
            /*.test{*/
              /*background: #545c64;*/
            /*}*/
            /*div{*/
              /*width: 20px;*/
              /*height: 20px;*/
              /*background-color: #0077aa;*/
              /*font-size: 16px;*/
              /*text-align: center;*/
              /*margin-top: 4px;*/
              /*color: #ffffff;*/
              /*cursor: pointer;*/
            /*}*/
          /*}*/
        /*}*/
      /*}*/
    /*}*/
  /*}*/
  /*.choseSetFooter{*/
    /*width: 100%;*/
    /*height: 30px;*/
    /*border:1px solid #545c64;*/
    /*.pay{*/
      /*width: 79.6%;*/
      /*height: 30px;*/
      /*float: left;*/
      /*border-right: 1px solid #969896;*/
      /*.payNumber{*/
        /*font-weight: 600;*/
        /*line-height: 30px;*/
        /*margin-left: 20px;*/
        /*.payMoney{*/
          /*color:#ff0000;*/
        /*}*/
      /*}*/
    /*}*/
    /*.buy{*/
      /*width: 20%;*/
      /*height: 30px;*/
      /*float: left;*/
    /*}*/
  /*}*/
</style>
