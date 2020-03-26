<template>
	<div class="blog-user-chart">
		<div ref="blogUserCharts" style="height: 100%;width: 100%;">
		</div>
	</div>
</template>

<script>
	import echarts from "echarts"
	require("echarts/theme/macarons")

	export default {
		data() {
			return {
				echarts: echarts
			}
		},
		methods: {
			/**
			 * 初始化报表曲线图
			 */
			initBlogUserCharts() {
				// 基于准备好的dom，初始化echarts实例
				var myChart = this.echarts.init(this.$refs.blogUserCharts,"macarons");

				var option = {
					tooltip: {
						trigger: 'axis'
					},
					legend: {
						data: ['用户数量', '博客数量']
					},
					grid: {
						left: '25',
						right: '25',
						bottom: '25',
						top:'60',
						containLabel: true
					},
					toolbox: {
						feature: {
							saveAsImage: {}
						}
					},
					xAxis: {
						type: 'category',
						boundaryGap: false,
						data: ["12/08","12/09","12/10","12/11","12/12","12/13","12/14","12/15","12/16","12/17","12/18","12/19","12/20","12/21","12/22","12/23","12/24","12/25","12/26","12/27"]
					},
					yAxis: {
						type: 'value'
					},
					series: [{
							name: '用户数量',
							type: 'line',
							data: ["0","6","1","0","0","10","6","8","3","2","4","1","2","0","0","4","3","1","0","0"]
						},
						{
							name: '博客数量',
							type: 'line',
							data: ["36","18","35","32","3","6","1","6","3","11","0","9","0","4","2","1","0","0","0","0"]
						}
					]
				};

				// 绘制图表
				myChart.setOption(option);
			}
		},
		mounted() {
			this.initBlogUserCharts();
		}
	}
</script>

<style scoped>
	.blog-user-chart {
		width: 100%;
		height: 300px;
		background: #fff;
		
	}
</style> 
