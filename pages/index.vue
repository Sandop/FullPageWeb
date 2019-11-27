<template>
  <!-- You can find this swiper instance object in current component by the "mySwiper"  -->
  <div class="container">
    <div v-swiper:mySwiper="swiperOption">
        <div class="swiper-wrapper">
            <div class="swiper-slide" :style="'background-image:url(\''+background.bg1+'\')'" >
                <div class="page-wrap"  :style="{background: backgroundColor.bgColor1}">
					<div class="marquee-wrap">
						<nuxt-link to="/statement">
							<div class="marquee-left">
								<img src="~/assets/images/index/trumpet.png">
							</div>
							<div class="marquee-right">
								<NewMarquee :content="content" class="two"  showtwo="false"></NewMarquee>
							</div>
						</nuxt-link>
					</div>
					<div class="page-box">
						<page-one></page-one>
					</div>
                </div>
            </div>
            <div class="swiper-slide" :style="'background-image:url(\''+background.bg2+'\')'">
                <div class="page-wrap"  :style="{background: backgroundColor.bgColor2}">
					<div class="page-box">
						<div class="title">
							<p class="title-cn">中信消费金融有限公司 > 股东简介</p>
							<p class="title-en">CITIC Consumer Finance Co.,Ltd. > Shareholder introduction</p>
						</div>
						<div class="content">
							<ul>
								<li class="list" v-for=" (list,index) in pageTwoCons" :key="index">
									<page-two-list :pageTwoCon="list"></page-two-list>
								</li>
							</ul>
						</div>
					</div>
                </div>
            </div>
            <div class="swiper-slide" :style="'background-image:url(\''+background.bg3+'\')'">
                <div class="page-wrap"  :style="{background: backgroundColor.bgColor3}">
					<div class="page-box">
						<div class="company-title">
							<p class="title-cn">中信消费金融有限公司 > 公司大事记</p>
							<p class="title-en">CITIC Consumer Finance Co.,Ltd. > Company Events</p>
						</div>
						<div class="company-content">
							<ul>
								<li class="comp-list" v-for=" (list,index) in compDevolpments" :key="index">
									<page-company-devolp :compDev="list"></page-company-devolp>
								</li>
							</ul>
						</div>
					</div>
					<div class="page-footer">
						<v-footer></v-footer>
					</div>
                </div>
            </div>
        </div>
        <div class="swiper-pagination swiper-pagination-bullets"></div>
        <!-- <div class="swiper-button-prev"></div>左箭头 -->
        <div class="swiper-button-next">
			<img src="~/assets/images/index/next-btn.png">	
		</div><!--右箭头-->
    </div>
  </div> 
</template>

<script>
	import PageOne from "~/components/index/PageOne"
	import PageTwoList from "~/components/index/PageTwoList"
	import PageCompanyDevolp from "~/components/index/PageCompanyDevolp"
	import VFooter from '~/components/common/footer'
	import NewMarquee from '~/components/index/NewMarquee'
	  
	export default {
		data () {
			return {				
				swiperOption: {
					direction: 'vertical',
					slidesPerView: 1,
					spaceBetween: 30,
					mousewheel: true,
					pagination: {
						el: '.swiper-pagination',
						clickable: true,
					},
					navigation: {
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev',
					},
					on: {
						slideChange() {
						},
						tap() {
						},
						slideChangeTransitionEnd: function(){
							if(this.isEnd){
								this.navigation.$nextEl.css('display','none');
							}else{
								this.navigation.$nextEl.css('display','block');  
							}
						},
					}
				},
				background: {
					bg1: require("~/assets/images/index/bg1.png"),
					bg2: require("~/assets/images/index/bg2.png"),
					bg3: require("~/assets/images/index/bg3.png")
				},
				backgroundColor: {
					bgColor1: 'linear-gradient(180deg,rgba(0,0,0,0.2) 0%,rgba(216,216,216,0) 100%)',
					bgColor2: 'linear-gradient(180deg,rgba(0,0,0,0.3) 0%,rgba(216,216,216,0) 100%)',
					bgColor3: 'linear-gradient(180deg,rgba(0,0,0,0.3) 0%,rgba(216,216,216,0) 100%)'
				},
				pageTwoCons: [
					{
						img: require("~/assets/images/index/page2-1.png"),
						titleCn: '中信集团',
						titleEn: 'CITIC Group',
						content: [
							'中信集团，作为跨国综合性企业集团，自成立以来充分发挥了经济改革试点和对外开放窗口的重要作用，为国家经济建设做出了突出贡献。'
						]
					},{
						img: require("~/assets/images/index/page2-2.png"),
						titleCn: '中信信托',
						titleEn: 'CITIC Trust',
						content: [
							'中信信托，长期保持行业领先地位，是唯一一家关键指标连续11年保持行业前三的信托公司，获评中国信托行业和监管最高评级，致力成为“综合金融方案提供商和多种金融功能集成者”。'
						]
					},{
						img: require("~/assets/images/index/page2-3.png"),
						titleCn: '金蝶软件',
						titleEn: 'Kingdee',
						content: [
							'金蝶始创于1993 年，是香港联交所主板上市公司，以“致良知、走正道、行王道”为核心价值观，致力成为“最值得托付的企业服务平台”。金蝶通过管理软件与云服务，已为世界范围内超过680万家企业、政府等组织提供服务。 '
						]
					}
				],
				compDevolpments: [
					{	
						num: '01',
						time: '2017年03月27日',
						title: '公司筹备启动',
						desc: '筹备设立工作自2017年03月27日开始启动，成立筹备领导小组和消金公司筹备组',
						arrow: true
					},{
						num: '02',
						time: '2018年08月17日',
						title: '公司获批筹建',
						desc: '取得中国银监会筹建批复，成为我国第26家获准筹建的消费金融公司',
						arrow: true
					},{
						num: '03',
						time: '2019年01月08日',
						title: '公司创立',
						desc: '召开股东大会，完成“三会一层”组建工作',
						arrow: false	
					},{
						num: '04',
						time: '2019年06月05日',
						title: '获得开业批复',
						desc: '取得中国银保监会开业批复，成为第24家获准开业的消费金融公司',
						arrow: true
					},{
						num: '05',
						time: '2019年06月11日',
						title: '获得金融许可证',
						desc: '正式获得金融许可证',
						arrow: true
					},{
						num: '06',
						time: '2019年06月12日',
						title: '公司正式成立',
						desc: '正式获得营业执照，可以正式对外开展各项经营活动',
						arrow: false
					},{
						num: '07',
						time: '2019年06月28日',
						title: '首笔交易',
						desc: '成功发放第一笔个人消费贷款',
						arrow: true
					},{
						num: '08',
						time: '2019年07月14日',
						title: '贷款总额度破1亿元',
						desc: '累积发放贷款总量超过1亿元',
						arrow: true
					},{
						num: '09',
						time: '2019年07月26日',
						title: '正式对外开业发布业务',
						desc: '正式对外宣布开业并发布各项业务',
						arrow: false
					}
				],
				content: '【声明】 关于不法分子冒用我司名义实施诈骗的声明  '
			}
		},
		mounted() {
		//   console.log('app init', this)
		//   setTimeout(() => {
		//     this.banners.push('/5.jpg')
		//     console.log('banners update')
		//   }, 3000)
		//   console.log(
		//     'This is current swiper instance object', this.mySwiper, 
		//     'I will slideTo banners 3')
		//    this.mySwiper.slideTo(3)
		},
		layout: 'indexDefault',
		components: {
			PageOne,
			PageTwoList,
			PageCompanyDevolp,
			VFooter,
			NewMarquee
		},
	}
</script>


<style lang="scss" scoped>

.container {
	width: 100%;
	height: 100%;
	margin-top: -110px;

	.swiper-container {
		width: 100%;
		height: 100%;
		margin-left: auto;
		margin-right: auto;

		.swiper-slide {
			text-align: center;
			font-size: 18px;
			background: #fff;
			/* Center slide text vertically */
			display: -webkit-box;
			display: -ms-flexbox;
			display: -webkit-flex;
			display: flex;
			-webkit-box-pack: center;
			-ms-flex-pack: center;
			-webkit-justify-content: center;
			justify-content: center;
			-webkit-box-align: center;
			-ms-flex-align: center;
			-webkit-align-items: center;
			align-items: center;
			background-position: center;
			background-repeat: no-repeat;
			transition: all 0.5s ease 0s;

			.page-wrap {
				position: relative;
				overflow: hidden;
				width: 100%;
				height: 100%;

				.marquee-wrap {
					position: absolute;
					top: 150px;
					left: 50%;
					overflow: hidden;
					width:720px;
					height:60px;
					margin-left: -360px;
					background:rgba(255,255,255,0.15);
					border-radius:6px;
					border:1px solid rgba(255,255,255,0.3);

					.marquee-left {
						float: left;
						display: flex;
						width: 47px;
						height: 100%;
						justify-content: center;
						align-items: center;
					}

					.marquee-right {
						float: left;
						width: 670px;
						height: 100%;
					}
				}	

				.page-box {
					overflow: hidden;
					width: 1200px;
					height: 100%;
					margin: 0 auto;
					padding-top: 250px;

					.title {
						width: 100%;
						height: auto;
						padding-left: 50px;
						color: #fff;
						text-align: left;

						p.title-cn {
							height: 37px;
							font-size:26px;
							font-weight:600;
							line-height:37px;
						}

						p.title-en {
							height: 17px;
							margin-top: 6px;
							font-size:12px;
							font-weight:300;
							line-height:17px;
						}
					}

					.content {
						width: 100%;
						padding-top: 100px;

						ul {
							display: flex;
							overflow: hidden;
							width: 100%;
							justify-content: space-around;

							.comp-list {
								width: 352px;
							}
						}
					}

					.company-title {
						width: 100%;
						height: auto;
						padding-left: 10px;
						color: #fff;
						text-align: left;

						p.title-cn {
							height: 37px;
							font-size:26px;
							font-weight:600;
							line-height:37px;
						}

						p.title-en {
							height: 17px;
							margin-top: 6px;
							font-size:12px;
							font-weight:300;
							line-height:17px;
						}
					}

					.company-content {
						width: 100%;
						padding-left: 10px;

						ul {
							overflow: hidden;
							width: 100%;

							.comp-list {
								float: left;
								width: 352px;
								margin-top: 50px;
								margin-right: 42px;
							}
						}
					}
				}

				.page-footer {
					position: absolute;
					bottom: 0;
					width: 100%;
					background: #fff;
				}
			}
			&:last-child .page-wrap {
				.page-box {
					padding-top: 190px;
				}
			}
		} 

		.swiper-pagination {
			right: 25px;

			> .swiper-pagination-bullet {
				width: 12px;
				height: 12px;
				border-radius: 50%;
				margin-top: 16px;
				cursor: pointer;
			}

			
		}
		.swiper-container-vertical {
			.swiper-pagination-bullets {
				.swiper-pagination-bullet {
					width: 8px;
					height: 8px;
					display: inline-block;
					background:rgba(255,255,255,1);
					box-shadow:0px 0px 4px 0px rgba(0,0,0,0.2);
					border-radius:6px;
				}
			}
		}  
		
			button.swiper-pagination-bullet {
				border: none;
				margin: 0;
				padding: 0;
				-webkit-box-shadow: none;
				box-shadow: none;
				-webkit-appearance: none;
				-moz-appearance: none;
				appearance: none;
			}
			.swiper-pagination-clickable .swiper-pagination-bullet {
				cursor: pointer;
				transition:all 0.3s ease-in;
				-webkit-transition:all 0.3s ease-in;
				-moz-transition:all 0.3s ease-in;
				-ms-transition:all 0.3s ease-in;
				-o-transition:all 0.3s ease-in;
			}
			.swiper-pagination-bullet-active {
				width:8px;
				height:36px;
				background:rgba(255,255,255,1);
				box-shadow:0px 0px 4px 0px rgba(0,0,0,0.2);
				border-radius:6px;
			}
		.swiper-button-next {
			top: auto;
			right: 50%;
			bottom: 65px;
			transform: translateX(50%);
			width: 26px;
			height: 28px;
			background: none;

		}
		
	}
}

@media screen and (max-width:1366px) {
	.container {
		.swiper-container{
			.swiper-slide {
				.page-wrap {
					.marquee-wrap {
						top: 122px;
					}
					.page-box {
						padding-top: 160px;

						.content{
							padding-top: 55px;
						}
						.company-content {

							ul {
								.comp-list {
									margin-top: 10px;
								}
							}
						}
					}
				}
				&:last-child .page-wrap {
					.page-box {
						padding-top: 130px;
					}
				}
			}

		}
		
	}
}    
  // .my-swiper {
  //   height: 300px;
  //   width: 100%;
  //   .swiper-slide {
  //     text-align: center;
  //     font-size: 38px;
  //     font-weight: 700;
  //     background-color: #eee;
  //     display: flex;
  //     justify-content: center;
  //     align-items: center;
  //   }
  //   .swiper-pagination {
  //     > .swiper-pagination-bullet {
  //       background-color: red;
  //     }
  //   }
  // }
</style>