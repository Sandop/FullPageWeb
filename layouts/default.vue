<template>
	<div>
		<v-header></v-header>
		<nuxt />
		<v-footer></v-footer>
	</div>
</template>

<script>
	import VHeader from '~/components/common/header'
  	import VFooter from '~/components/common/footer'

	export default {
		components: {
			VHeader,
			VFooter
		}
	}
</script>


<style lang="scss">
	html {
		box-sizing: border-box;
	}
	body{
		background:#fff;
		color:#000;
		font-size:14px;
		font-family: 'Microsoft yahei',Verdana, Arial, Helvetica, sans-serif;
	}
	*,
	*:before,
	*:after {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}
</style>
