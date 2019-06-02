<template>
	<div id="UpdateNotes">
		<div class="showPrompt">
			<p>19.06.02</p>
			<img :src="url23" />
			<HR/>
			<p>19.05.20/21</p>
			<img :src="url18" />
			<img :src="url19" />
			<img :src="url20" />
			<img :src="url21" />
			<img :src="url22" />
			<HR/>
			<p>19.05.09</p>
				<img :src="url8" />
				<img :src="url9" />
				<img :src="url10" />
				<img :src="url11" />
				<img :src="url12" />
				<img :src="url13" />
			<HR/>
			<p>19.05.05</p>
			<img :src="url16" />
			<img :src="url17" />
			<HR/>
			<p>19.05.04</p>
			<img :src="url15" />
			<img :src="url14" />
			<HR/>
			<p>19.05.01</p>
			<img :src="url1" />
			<img :src="url2" />
			<img :src="url3" />
			<img :src="url4" />
			<img :src="url5" />
			<img :src="url6" />
			<img :src="url7" />
		</div>
	</div>
</template>

<script>
  export default {
    name: "UpdateNotes",
	  data()
	  {
	    return{
        url1: require( '../../../static/images/notes/11.png'),
        url2: require( '../../../static/images/notes/12.png'),
        url3: require( '../../../static/images/notes/13.png'),
        url4: require( '../../../static/images/notes/14.png'),
        url5: require( '../../../static/images/notes/15.png'),
        url6: require( '../../../static/images/notes/16.png'),
        url7: require( '../../../static/images/notes/17.png'),
        url8: require( '../../../static/images/notes/21.png'),
        url9: require( '../../../static/images/notes/22.png'),
        url10: require( '../../../static/images/notes/23.png'),
        url11: require( '../../../static/images/notes/24.png'),
        url12: require( '../../../static/images/notes/25.png'),
        url13: require( '../../../static/images/notes/26.png'),
        url14: require( '../../../static/images/notes/31.jpg'),
        url15: require( '../../../static/images/notes/32.png'),
        url16: require( '../../../static/images/notes/41.png'),
        url17: require( '../../../static/images/notes/42.png'),
        url18: require( '../../../static/images/notes/51.png'),
        url19: require( '../../../static/images/notes/52.png'),
        url20: require( '../../../static/images/notes/53.png'),
        url21: require( '../../../static/images/notes/54.png'),
        url22: require( '../../../static/images/notes/55.png'),
        url23: require( '../../../static/images/notes/61.png'),

	    }
	  }
  }
  </script>

<style scoped lang="scss">
	#UpdateNotes{
		width: 100%;
		.showPrompt{
			margin:60px auto;
			text-align: center;
			img{
				width: 50%;
			}
		}
	}
</style>
