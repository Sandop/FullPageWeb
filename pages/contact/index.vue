<template>
    <section class="wrap" :style="'background-image:url(\''+bgImg+'\')'">
		<div class="content-box">
			<div class="contact-content">
				<div class="address-box">
					<company-address></company-address>
				</div>
				<div class="map-wrap">
					<div class="map-box">
						<baidu-map :mapData="mapData"></baidu-map>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	import CompanyAddress from '~/components/contact/CompanyAddress'
	import BaiduMap from '~/components/contact/BaiduMap'

    export default {
        data() {
			return {
				bgImg: require("~/assets/images/index/bg1.png"),
				mapData: {
					longitude:  116.448233,
					latitude: 39.915217,
					title: '中信消费金融有限公司',
					description: '地址：北京市朝阳区建国门外大街19号'
				}
			}
		},
		head () {
		  return {
			script: [
				{src:'http://api.map.baidu.com/api?v=2.0&ak=MDdqxkqhQzfdBzfu2tfGiidGbHgTfGrB'}
			]
		  }
		},
		components: {
			CompanyAddress,
			BaiduMap
		}
    }
</script>

<style lang="scss" scoped>
	.wrap {
		overflow: hidden;
		width: 100%;
		height: auto;
		background-position: center;
		background-repeat: no-repeat;
		
		.content-box {
			width: 100%;
			background: rgba(235, 237, 240, 0.8);

			.contact-content {
				overflow: hidden;
				width: 1200px;
				height: 806px;
				margin: 0 auto;
				padding-left: 146px;
				
				.address-box {
					overflow: hidden;
					width: 100%;
					height: 292px;
					padding-top: 153px;
				}

				.map-wrap {
					width: 703px;
					height: 323px;
					background: #fff;

					.map-box {
						width: 100%;
						height: 100%;
						padding: 12px;
					}
				}
			}

		}
		
	}
	
</style>
