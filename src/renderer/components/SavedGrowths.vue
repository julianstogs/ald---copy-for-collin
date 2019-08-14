<template>
	<div id="wrapper">
		<chartist
	    ratio="ct-major-second"
	    type="Line"
	    :data="chartData"
	    :options="chartOptions" >
		</chartist>
	</div>
</template>

<style lang="sass" scoped>

</style>

<script>
	export default  {
		data() {
			return {
				chartData: {
		            labels: ["A", "B", "C"],
		            series:[[1, 3, 2], [4, 6, 5]]
		        },
		        chartOptions: {
		            lineSmooth: false
		        }
			}
    	}
	}
</script>
