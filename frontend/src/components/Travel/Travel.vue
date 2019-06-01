<template>
	<div id="Travel">
		<div class="booking" @click="booking">
			<font size="5">>    一场说走就走的旅行 —— 你的专属目的地  <</font>
		</div>
	</div>
</template>

<script>
  import {mapActions} from 'vuex'

  export default {
    name: "Travel",
    data()
    {
      return {}
    },
    methods: {
      ...mapActions('ticket', [
        'openExclusive'
      ]),
      booking()
      {
        // this.openExclusive()
        this.$router.push({path: '/Exclusive'})
      }
    }
  }
</script>

<style scoped lang="scss">
	.booking {
		background-color: rgba(110, 120, 130, 0.3);
		/*width: 800px;*/
		height: 85px;
		text-align: center;
		color: #fff;
		margin: 20px 15% 0 15%;
		display: flex;
		justify-content: space-around;
		align-items: center;
		border-radius: 200px;
		box-shadow: 0 6px 6px rgba(0, 0, 0, 0.2);

		&:hover {
			background-color: rgba(110, 120, 130, 0.6);
		}
	}

</style>
