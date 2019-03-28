<template>
	<section class="container">
			<page :currentPage='currentPage'>
				第一部分
			</page>
			<page :currentPage='currentPage'>
				第二部分
			</page>
			<page :currentPage='currentPage'>
				第三部333分
			</page>
			<page :currentPage='currentPage'>
				第四部分
			</page>
			<page-controller :pageNum="pageNum" :currentPage="currentPage" @changePage="changePage" :option="controllerOption"></page-controller>
	</section>
</template>

<script>
	import page from "~/components/index/Page"
	import PageController from "~/components/index/PageController"

	export default {
		data (){
			return {
				currentPage: 1,
				options: [
					{
						background: 'rgba(229, 199, 46, 1)',
						color: '#fff',
						isCenter: true,
					},{
						background: 'rgba(229, 199, 116, 1)',
						color: '#fff',
						isCenter: true,
					},{
						background: 'rgba(229, 19, 46, 1)',
						color: '#fff',
						isCenter: true,
					},{
						background: 'rgba(29, 199, 46, 1)',
						color: '#fff',
						isCenter: true,
					}
				],
				controllerOption: {
					arrowsTypePre: false,
					arrowsTypeNext: true,
					arrowsType: false,
					navbar: true,
					highlight: true,
					loop: false
				}
			}
		},
		computed: {
			// 总page数
			pageNum() {
				return this.options.length;
			}
		},
		components: {
			page,
			PageController
		},
		mounted() {
			this.$children.forEach((child, index) => {
				// 动态设置各个page内的options
				if (child.option === null) {
					let childOption = this.options[index];
					this.$set(childOption, 'index', index + 1);
					child.option = childOption;
				}
			});
		},
		methods: {
			changePage(index) {
				// beforeLeave Hook
				let beforeIndex = this.currentPage - 1;
				let leaveFunction = this.options[beforeIndex].beforeLeave;
				
				typeof leaveFunction === 'function' && leaveFunction.call(this, this.$children[beforeIndex]);
				// change page
				this.currentPage = index;
				// afterEnter Hook
				let nextIndex = index - 1;
				let enterFunction = this.options[nextIndex].afterEnter;
				this.$nextTick(function() {
					typeof enterFunction === 'function' && enterFunction.call(this, this.$children[nextIndex]);
				})
			}
		},
	}
</script>

<style lang="scss" scoped>
.container {
	overflow: hidden;
	width: 100%;
}
</style>
