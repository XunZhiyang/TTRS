<template>

	<div id="Silingsi">
		<img :src="url1"/>
	</div>
</template>

<script>
  export default {
    name: "Silingsi",
    data()
    {
      return {
        url1: require('./1.jpg')
      }
    }
  }
</script>

<style scoped>
	#Silingsi
	{
		width: 100% !important;
	}
</style>