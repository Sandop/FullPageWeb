<template>
	<section class="container">
		<div class="page-wrap">
			<page :currentPage='currentPage'>
				<page-one></page-one>
			</page>
			<page :currentPage='currentPage'>
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
			</page>
			<page :currentPage='currentPage'>
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
			</page>
			<page-controller :pageNum="pageNum" :currentPage="currentPage" @changePage="changePage" :option="controllerOption"></page-controller>
		</div>
	</section>
</template>

<script>
	import page from "~/components/index/Page"
	import PageController from "~/components/index/PageController"
	import PageOne from "~/components/index/PageOne"
	import PageTwoList from "~/components/index/PageTwoList"
	import PageCompanyDevolp from "~/components/index/PageCompanyDevolp"

	export default {
		data (){
			return {
				currentPage: 1,
				options: [
					{
						background: require("~/assets/images/index/bg1.png"),
						backgroundColor: 'rgba(255,255,255,0)'
					},{
						background: require("~/assets/images/index/bg2.png"),
						backgroundColor: 'rgba(147,58,58,0.9)'
					},{
						background: require("~/assets/images/index/bg3.png"),
						backgroundColor: 'rgba(242,242,242,0.85)'
					}
				],
				controllerOption: {
					arrowsTypePre: false,
					arrowsTypeNext: true,
					arrowsType: false,
					navbar: true,
					highlight: true,
					loop: false
				},
				pageTwoCons: [
					{
						img: require("~/assets/images/index/page2-1.png"),
						titleCn: '中信集团',
						titleEn: 'CITIC Group',
						content: [
							'中国中信集团有限公司是在邓小平同志支持下，由荣毅仁同志于1979年创办的；',
							'中信集团现已发展成为一家国有大型综合性跨国企业集团，业务涉及金融、资源能源、制造、工程承包、房地产和其他领域；',
							'2018年中信集团连续第10年上榜美国《财富》杂志世界500强，位居第149位'
						]
					},{
						img: require("~/assets/images/index/page2-2.png"),
						titleCn: '中信信托',
						titleEn: 'CITIC Trust',
						content: [
							'中信信托有限责任公司是中国银行业监督管理委员会监管的全国性非银行金融机构，获评中国信托公司行业最高评级，为中信集团系统重要性成员企业；',
							'中信信托同时担任中国信托业协会会长单位、中国信托业保障基金理事长单位、中国信托登记有限责任公司股东；',
							'2018年，中信信托服务投资者数量超过15万，管理资产规模近2亿元，稳居信托第一梯队'
						]
					},{
						img: require("~/assets/images/index/page2-3.png"),
						titleCn: '金蝶国际',
						titleEn: 'Kingdee',
						content: [
							'金蝶国际软件集团始创于1993年，是香港联交所主板上市公司（股票代码：0268），已为超过680万家企业和政府组织提供企业管理软件及云服务，致力于改变亿万人的工作方式； ',
							'金蝶用户已超过2.6亿，超过2000家合作伙伴，连续14年位居中国成长型企业市场占有率第一，成为连续两年在中国企业级SaaS云服务领域超越国际厂商的软件公司'
						]
					}
				],
				compDevolpments: [
					{	
						num: '01',
						time: '2017年03月27日',
						title: '公司筹备启动',
						desc: '中信消费金融公司筹备设立工作自2017年03月27日开始启动，成立筹备领导小组和消金公司筹备组',
						arrow: true
					},
					{
						num: '02',
						time: '2017年08月17日',
						title: '公司获批筹建',
						desc: '2018年08月17日，中信消金取得中国银监会筹建批复，成为我国第26家获准筹建的消费金融公司',
						arrow: true
					},
					{
						num: '03',
						time: '2019年01月08日',
						title: '公司创立',
						desc: '公司创立大会胜利召开，完成“三会一层”组建工作',
						arrow: true
					},
					{
						num: '04',
						time: '2019年04月17日',
						title: '获得开业批复',
						desc: '2019年04月17日，中信消金取得中国银保监会开业批复',
						arrow: true
					},
					{
						num: '05',
						time: '2019年06月01日',
						title: '公司正式开业',
						desc: '2019年06月01日，中信消费金融有限公司正式开业',
						arrow: false
					}
				]
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
			PageController,
			PageOne,
			PageTwoList,
			PageCompanyDevolp
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
	height: 100%;

	.page-wrap {
		position: relative;
		width: 1200px;
		height: 100%;
		margin: 0 auto;

		.title {
			width: 100%;
			height: auto;
			padding-left: 50px;
			color: #fff;
			text-align: left;

			p.title-cn {
				height: 37px;
				font-size:26px;
				font-family:PingFangSC-Semibold;
				font-weight:600;
				line-height:37px;
			}

			p.title-en {
				height: 17px;
				margin-top: 6px;
				font-size:12px;
				font-family:PingFangSC-Light;
				font-weight:300;
				line-height:17px;
			}
		}

		.content {
			width: 100%;
			padding-top: 130px;

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
			color: rgba(52,52,52,1);;
			text-align: left;

			p.title-cn {
				height: 37px;
				font-size:26px;
				font-family:PingFangSC-Semibold;
				font-weight:600;
				line-height:37px;
			}

			p.title-en {
				height: 17px;
				margin-top: 6px;
				font-size:12px;
				font-family:PingFangSC-Light;
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
					margin-top: 80px;
					margin-right: 42px;
				}
			}
		}
	}
}
</style>
