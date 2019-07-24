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
		<div class="page-footer">
			<v-footer></v-footer>
		</div>
	</section>
</template>

<script>
	import CompanyAddress from '~/components/contact/CompanyAddress'
	import BaiduMap from '~/components/contact/BaiduMap'
	import VFooter from '~/components/common/footer'

    export default {
        data() {
			return {
				bgImg: require("~/assets/images/index/bg4.png"),
				mapData: {
					longitude:  116.448233,
					latitude: 39.915217,
					title: '中信消费金融有限公司',
					description: '地址：北京市朝阳区建国门外大街19号'
				}
			}
		},
		layout: 'indexDefault',
		components: {
			CompanyAddress,
			BaiduMap,
			VFooter
		}
    }
</script>

<style lang="scss" scoped>
	.wrap {
		position: relative;
		top: -110px;
		overflow: hidden;
		width: 100%;
		height: 100%;
		background-position: center;
		background-repeat: no-repeat;
		
		.content-box {
			width: 100%;
			background: linear-gradient(180deg,rgba(0,0,0,0.3) 0%,rgba(216,216,216,0) 100%);

			.contact-content {
				overflow: hidden;
				width: 1200px;
				margin: 0 auto;
				padding-left: 146px;
				
				.address-box {
					overflow: hidden;
					width: 100%;
					padding-top: 210px;
				}

				.map-wrap {
					width: 703px;
					height: 323px;
					margin-top: 50px;
					background: #fff;

					.map-box {
						width: 100%;
						height: 100%;
						padding: 12px;
					}
				}
			}

		}
		
		.page-footer {
			position: absolute;
			bottom: 0;
			width: 100%;
			height: 164px;
			background: #fff;
		}
	}
	@media screen and (max-width:1366px) {
		.wrap {
			.content-box {
				.contact-content {
					.address-box {
						padding-top: 120px;
					}
					.map-wrap {
						margin-top: 50px;
					}
				}
			}
		}
	}	
</style>
