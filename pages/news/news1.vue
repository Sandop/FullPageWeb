<template>
    <section class="news-wrap" :style="'background-image:url(\''+bgImg+'\')'">
		<div class="content-box">
			<div class="contact-content">
				<div class="address-box">
					<div class="news-logo">
						<newsLogo/>
                        <div class="link-box">
                            <newsLink :linkCont="linkCont"></newsLink>
                        </div>
                    </div>
					<div class="news-box">
                        <div class="title">中信消金党支部组织参观北京展览馆新中国成立70周年大型成就展</div>
                        <div class="time">2019年11月01日</div>
                        <div class="cont">
                            <p class="part">
                                为深入学习贯彻习近平新时代中国特色社会主义思想，深化“不忘初心、牢记使命”主题教育，11月1日上午，中信消金党支部组织党员群众前往北京展览馆，参观“伟大历程 辉煌成就——庆祝中华人民共和国成立70周年大型成就展”。支部书记皇甫文忠同志参加了此次活动。
                            </p>
                            <div class="img">
                                <img src="~/assets/images/news/news1-1.jpg" alt="" srcset="">
                            </div>
                            <p class="part">
                                走进展厅，宛如走进了一条时光隧道。展览以开辟和发展中国特色社会主义道路、建设社会主义现代化国家为主题，分为序厅、屹立东方、改革开放、走向复兴、人间正道五部分，以编年体为时间主线，充分运用声光电等多媒体科技展示手段，全方位立体化呈现了70年来中华大地的沧桑巨变，展示了70年来我国经济实力、综合国力、国际地位持续提升，人民生活极大改善的发展历程。清晰展现党的领导和我国社会主义制度集中力量办大事的政治优势，深刻揭示新中国70年巨变背后的深刻道理。
                            </p>
                            <div class="img">
                                <img src="~/assets/images/news/news1-2.jpg" alt="" srcset="">
                            </div>
                            <p class="part">
                                一张张老照片，一个个老物件，勾起大家无数的回忆。大家认真参观展览、聆听讲解，跟随历史的年轮共同回顾了共和国走过的光辉历程，深刻感受到新中国成立70年来取得的伟大成就，都是在中国共产党的领导下取得的。没有中国共产党，就没有新中国，就没有今天建设中国特色社会主义的伟大成就。从1949年到现在70年的发展脉络，唤起了每一位同志记忆深处的共鸣。纷纷表示在未来的工作中，我们一定要不忘初心、牢记使命，积极做好本职工作，用实干和成绩为消费金融事业的发展贡献更大的力量。
                            </p>
                            <div class="img">
                                <img src="~/assets/images/news/news1-3.jpg" alt="" srcset="">
                            </div>
                            <div class="img">
                                <img src="~/assets/images/news/news1-4.jpg" alt="" srcset="">
                            </div>
                            <div class="img">
                                <img src="~/assets/images/news/news1-5.jpg" alt="" srcset="" style="width:450px;">
                            </div>
                        </div>
					</div>
				</div>
			</div>
		</div>
		
	</section>
</template>

<script>
	import newsLogo from '~/components/news/newsLogo'
	import newsLink from '~/components/news/newsLink'

    export default {
        
        data() {
			return {
				bgImg: require("~/assets/images/index/bg5.png"),
				linkCont: {
                    preUrl: '/news/news3',
                    preTitle: '中信消金开展“迎七一、学党章、忆先烈”主题教育活动',
                    nextUrl: '/news/news2',
                    nextTitle: '身体力行——中信消金积极参与“金融知识普及月”活动'
                }
			}
		},
		layout: 'indexDefault',
		components: {
            newsLogo,
            newsLink
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
        font-family: PingFangSC-Regular,PingFang SC;
		
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
                    border-radius: 20px 20px 0 0;

					.news-logo {
                        position: relative;
						width: 100%;

                        .link-box {
                            position: absolute;
                            right: 90px;
                            bottom: 0;
                            height: 44px;

                        }
					}

					.news-box {
						width: 100%;
						padding: 0 90px 95px;
                        text-align: left;

                        .title {
                            width: 100%;
                            margin-top: 24px;
                            font-size: 32px;
                            font-weight: 600;
                            color: rgba(52,52,52,1);
                            line-height: 45px;
                        }

                        .time {
                            width: 100%;
                            height: 25px;
                            margin: 16px 0;
                            font-size: 18px;
                            color: rgba(52,52,52,0.5);
                            line-height: 25px;
                        }

                        .cont {
                            width: 100%;
                            font-size: 18px;
                            font-weight: 400;
                            color: rgba(52,52,52,1);
                            line-height: 25px;

                            .part {
                                margin-bottom: 32px;
                                text-indent: 36px;
                            }

                            .img {
                                display: flex;
                                overflow: hidden;
                                height: 300px;
                                margin-bottom: 32px;
                                justify-content: center;

                                img {
                                    height: 100%;
                                }
                            }
                        }
					}
				}				
			}
		}
	}
</style>
