<template>
  <div>
    <OneWay  />
    <BackAndForth/>
    <ChooseTheSeat/>
    <Endorse/>
    <Refund/>
    <Exclusive/>
    <InformationQuery/>
    <ToEndorse/>
    <QrCode />
  </div>
</template>

<script>
  import OneWay           from '@/components/Ticket/OneWay'
  import BackAndForth     from '@/components/Ticket/BackAndForth'
  import ChooseTheSeat    from '@/components/Ticket/ChooseTheSeat'
  import Endorse          from '@/components/Ticket/Endorse'
  import Refund           from '@/components/Ticket/Refund'
  import Exclusive        from '@/components/Ticket/Exclusive'
  import InformationQuery from '@/components/Ticket/InformationQuery'
  import ToEndorse        from '@/components/Ticket/ToEndorse'
  import QrCode           from '@/components/Ticket/QrCode';

  export default {
    name: 'index',
    components:{
      OneWay,
      BackAndForth,
      ChooseTheSeat,
      Endorse,
      Refund,
      Exclusive,
      InformationQuery,
      ToEndorse,
      QrCode
    },
    data(){
      return{

      }
    },
    methods:{
    }
  }
</script>

<style scoped>

</style>
