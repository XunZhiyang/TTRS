<template>
	<div class="home-page">
		<Banner/>
		<AnimationBackground>
			<div slot="travel">
				<Travel>
				</Travel>
			</div>
			<div class="content-container home-hotels-container">
				<FlexCarousel :list="hotels"/>
			</div>
			<div class="content-container untrustworthy-persons">
				<!-- 失信人员名单 -->
				<UntrustworthyPersons/>
			</div>
<!--			<div class="sideside">-->
				<el-main>
					<SideBar/>
				</el-main>
<!--			</div>-->
		</AnimationBackground>
		<Cover/>
	</div>
</template>

<script>
  import Banner from './Banner';
  import FlexCarousel from '@/components/FlexCarousel';
  import UntrustworthyPersons from './UntrustworthyPersons'
  import AnimationBackground from '@/components/AnimationBackground/AnimationBackground';
  import HotelTypes from './HotelTypes'
  import Travel from '@/components/Travel/Travel'
  import Cover from '@/components/Cover/Cover'
  import SideBar from '@/components/SideBar/SideBar'

  export default {
    name: "Home",
    data()
    {
      return {
        hotels: HotelTypes,
      }
    },
    components: {
      Banner,
      FlexCarousel,
      UntrustworthyPersons,
      AnimationBackground,
      Travel,
      Cover,
      SideBar
    }
  }
</script>

<style lang='scss' rel="stylesheet/scss" type="text/scss">
	.home-page {
		width: 100%;
		height: 100%;

		.sideside {
			position: fixed;
			/*right:0%;*/
		}

		.home-hotels-container {
			margin-top: 20px;
			/*margin-bottom: 20px;*/
		}

		.untrustworthy-persons .animate-list-block {
			margin-top: 20px;
			margin-bottom: 100px;
		}
	}
</style>
