<template>
	<div id="QueryTicket">
		<BreadCrumbs :bread="breadCrumbs"/>
		<NewQuery></NewQuery>
	</div>
</template>

<script>
  import BreadCrumbs from '@/components/BreadCrumbs/BreadCrumbs'
  import NewQuery   from './Booking/theQuery'
  export default {
    name: 'QueryTicket',
    components:{
      BreadCrumbs,
      NewQuery,
    },
    data(){
      return{
        breadCrumbs:[
          {
            name:'查询',
            path:'/QueryTicket'
          }
        ]
      }
    }
  }
</script>

<style scoped lang="scss">
	#QueryTicket{
		width: 60%;
		margin:auto;
	}
</style>