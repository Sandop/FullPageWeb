<template>
    <section class="statement-wrap" :style="'background-image:url(\''+bgImg+'\')'">
		<div class="content-box">
			<div class="contact-content">
				<div class="address-box">
					<div class="text-box">
                        <h3 class="title">关于不法分子冒用我司名义实施诈骗的声明 </h3>
                        <p class="part mg20">近日，我司发现有不法分子假冒“中信消费金融”工作人员实施诈骗行为。为维护广大消费者及我司合法权益，我司郑重声明如下：</p>
                        <p class="part mg20">一、请广大消费者高度警惕 “以协助申请中信消费金融公司贷款为由，仿冒中信消费金融APP，收取各类费用”的诈骗行为。</p>
                        <p class="part mg20">二、我司从未向消费者发送任何APP下载链接，不会在放款前收取任何费用，不会要求消费者提供验证码信息，不会要求消费者将资金汇至个人账户。</p>
                        <p class="part mg20">三、请广大消费者提高对非法金融业务和金融诈骗行为的警惕，切勿通过非主流市场站下载金融类APP，切勿未经查验向个人账户汇款，切勿随意透露个人信息和短信验证码，切勿相信非法分子的贷款承诺，以免蒙受损失。如您已经遭受不法分子侵害，请立即向当地公安机关报案以维护您的合法权益。</p>
                        <p class="part mg20">四、我司旗下产品均通过官方途径披露信息，具体如下：</p>
                        <p class="part">官方网站：http://eciticcfc.com/，唯一官方微信公众号：中信消费金融有限公司。</p>
                        <p class="part">我司官方客服热线：400-01-95558或010-65995558，如遇无法辨别的信息，或有任何疑问，请拨打我司的官方客服热线进行核实（客服在线时间为工作日9:00-18:00）。</p>
                        <p class="part mg20">五、对于通过非法手段冒用我司名义进行诈骗的行为，我司将保留追究相关机构、个人法律责任的权利，维护我司合法权益。</p>
                        <p class="part mg20">特此声明！</p>
                        <p class="part part-right mg20">中信消费金融有限公司</p>
                        <p class="part part-right">二〇一九年十月二十三日</p>
                    </div>
				</div>
			</div>
		</div>
		<div class="bottom-bg">
            <img src="~/assets/images/index/bottom-bg.png" alt="" srcset="">
        </div>
	</section>
</template>

<script>
	

    export default {
        data() {
			return {
				bgImg: require("~/assets/images/index/bg5.png"),
				
			}
		},
		layout: 'indexDefault',
		components: {
			
		}
    }
</script>

<style lang="scss" scoped>
	.statement-wrap {
		position: relative;
		top: -110px;
		overflow-y: hidden;
		width: 100%;
		height: 100%;
		background-position: center;
		background-repeat: no-repeat;
		
		.content-box {
            width: 100%;
            height: 100%;
			background: linear-gradient(180deg,rgba(0,0,0,0.3) 0%,rgba(216,216,216,0) 100%);

			.contact-content {
				overflow: hidden;
                width: 1200px;
				margin: 0 auto;
				
				.address-box {
					overflow: hidden;
                    width: 1164px;
                    margin: 150px auto 0;
                    background: #fff;

                    .text-box {
                        width: 883px;
                        margin: 0 auto;
                        padding-top: 80px;
                        padding-bottom: 120px;

                        .title {
                            padding-bottom: 20px;
                            color:rgba(54,54,54,1);
                            font: 600 20px/28px PingFangSC-Semibold,PingFang SC;
                            text-align: center;
                        }
                        .part {
                            font-size:18px;
                            font-family:PingFangSC-Regular,PingFang SC;
                            font-weight:400;
                            color:rgba(54,54,54,1);
                            line-height:25px;
                            text-align: left;
                            text-indent: 36px;
                        }
                        .part-right {
                            text-align: right;
                        }
                        .mg20 {
                            margin-top: 20px;
                        }
                    }
				}				
			}
		}
		
		.bottom-bg {
            position: fixed;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            height: 104px;
        }
	}
	@media screen and (max-width:1366px) {
		.statement-wrap { 
            overflow: scroll;

			.content-box {
				.contact-content {
					.address-box {
                        padding-top: 0px;
					}
				}
			}
			
		}
	}	
</style>
