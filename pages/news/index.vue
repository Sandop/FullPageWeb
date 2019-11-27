<template>
    <section class="news-wrap" :style="'background-image:url(\''+bgImg+'\')'">
		<div class="content-box">
			<div class="contact-content">
				<div class="address-box">
					<div class="news-logo">
						<newsLogo/>
                    </div>
					<div class="news-box">
						<ul>
							<li class="news-list" v-for="(item,index) in newsLists" :key="index">
								<nuxt-link :to="item.url">
									<newsList :content="item"></newsList>
								</nuxt-link>
							</li>
						</ul>
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
	import newsLogo from '~/components/news/newsLogo'
	import newsList from '~/components/news/newsList'

    export default {
        
        data() {
			return {
				bgImg: require("~/assets/images/index/bg5.png"),
				newsLists: [
					{							
						id: 1,
						url: '/news/news1',
						title: "中信消金党支部组织参观北京展览馆新中国成立70周年大型成就展",
						cont: "为深入学习贯彻习近平新时代中国特色社会主义思想，深化“不忘初心、牢记使命”主题教育，11月1日上午，中信消金党支部组织党员群众前往北京展览馆，参观“伟大历程 辉煌成就——庆祝中华人民共和国成立70周年大型成就展”。支部书记皇甫文忠同志参加了此次活动......",
						time: "2019年11月01日",
						img: require("~/assets/images/news/news1.jpg")
					},{
						id: 2,
						url: '/news/news2',
						title: "身体力行——中信消金积极参与“金融知识普及月”活动",
						cont: "2019年“金融知识普及月 金融知识进万家 争做理性投资者争做金融好网民”活动，中信消费金融有限公司（以下简称公司）积极响应，认真部署，多措并举，开展了为期一个月的金融知识普及月专题活动......",
						time: "2019年10月14日",
						img: require("~/assets/images/news/news3.jpg")
					},{
						id: 3,
						url: '/news/news3',
						title: "中信消金开展“迎七一、学党章、忆先烈”主题教育活动",
						cont: "2019年6月30日上午，消金公司党支部组织了“迎七一、学党章、忆先烈”主题教育活动。公司党支部书记皇甫文忠同志带领全体党员在马骏烈士墓前宣读入党誓词，并参观了烈士纪念馆。通过回顾英烈的先进事迹，重温入党誓词，同志们加深了党在建立领导新中国的千辛万难......",
						time: "2019年07月03日",
						img: require("~/assets/images/news/news2.jpg")
					}
				]
			}
		},
		layout: 'indexDefault',
		components: {
			newsLogo,
			newsList
		}
    }
</script>

<style lang="scss" scoped>
	.news-wrap {
		position: relative;
		top: -110px;
		overflow-y: scroll;
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
                    border-radius: 20px;

					.news-logo {
						width: 100%;
					}

					.news-box {
						width: 100%;
						padding: 0 90px 95px;

						ul {
							width: 100%;

							.news-list {
								width: 100%;
							}
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
		.news-wrap { 
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
