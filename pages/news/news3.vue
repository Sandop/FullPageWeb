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
                        <div class="title">中信消金开展“迎七一、学党章、忆先烈”主题教育活动</div>
                        <div class="time">2019年07月03日</div>
                        <div class="cont">
                            <p class="part">
                                6月30日上午，消金公司党支部组织了“迎七一、学党章、忆先烈”主题教育活动。公司党支部书记皇甫文忠同志带领全体党员在马骏烈士墓前宣读入党誓词，并参观了烈士纪念馆。通过回顾英烈的先进事迹，重温入党誓词，同志们加深了党在建立领导新中国的千辛万难，表示要珍惜和平年代，抓住机遇，努力工作，多为国家做贡献。
                            </p>
                            <div class="img">
                                <img src="~/assets/images/news/news2-1.jpg" alt="" srcset="">
                            </div>
                            <p class="part">
                                当日下午，支部党员在国际大厦第一会议室观看了中共中央组织部制作的《党章电视辅导教材》。通过观看影片，同志们加深了对党章的理解，进一步感受到党员应尽的责任，纷纷表示要以党章为纲，做合格共产党员，进一步把具体工作做好，更好的发挥先锋模范作用，将消金公司建好发展好。
                            </p>
                            <div class="img">
                                <img src="~/assets/images/news/news2-2.jpg" alt="" srcset="">
                            </div>
                            <div class="img">
                                <img src="~/assets/images/news/news2-3.jpg" alt="" srcset="">
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
                    preUrl: '/news/news2',
                    preTitle: '身体力行——中信消金积极参与“金融知识普及月”活动',
                    nextUrl: '/news/news1',
                    nextTitle: '中信消金党支部组织参观北京展览馆新中国成立70周年大型成就展'
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
