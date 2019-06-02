<template>

	<div id="404">

		<img :src="url1"/>
	</div>
</template>

<script>
  export default {
    name: "404",
    data()
    {
      return {
        url1: require('../404/1.jpg')
      }
    }
  }
</script>

<style scoped>
	#404
	{
		width: 100%;
	}
</style>