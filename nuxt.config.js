
export default {
	mode: 'universal',

	/*
	** Headers of the page
	*/
	head: {
		title: '中信消费金融有限公司',
		meta: [
			{ name: 'renderer', content: 'webkit'},
			{ name: 'force-rendering', content: 'webkit'},
			{ 'http-equiv': 'X-UA-Compatible', content: 'IE=Edge,chrome=1'},
			{ name: 'baidu-site-verification', content: 'mREHhDF8nW'},
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: '中信消费金融' },
		],
		link: [
			/** 
			 * 静态打包需要将href: './favicon.ico';其余时候是href: '/favicon.ico'
			*/
			{ rel: 'icon', type: 'image/x-icon', href: './favicon.ico' }
		],
		script: [
			{src: 'http://api.map.baidu.com/api?v=2.0&ak=MDdqxkqhQzfdBzfu2tfGiidGbHgTfGrB'}
		]
	},

	/*
	** Customize the progress-bar color
	*/
	loading: { color: '#FC0000' },

	/*
	** Global CSS
	*/
	css: [
		'swiper/dist/css/swiper.css',
		// 项目里要使用的 SCSS 文件
		'@/assets/css/main.scss',
	],

	/*
	** Plugins to load before mounting the App
	*/
	plugins: [
		{ src: '~/plugins/swiper.js', ssr: false },
	],

	/*
	** Nuxt.js modules
	*/
	modules: [
	],
	//设置缓存
	cache: false,
	//禁止预加载效果
	performance: {
	  prefetch: false
	},
	/*
	** 使用npm run generate打包静态页面修改相对路径需使用，使用npm run build打包或者npm run dev启动不需要配置这个
	*/
	router: {
	    base: './'
	},
	build: {
		/**
		 * 将查看源代码中的css采用外部引入方式
		 */
		publicPath: 'http://eciticcfc.com',
		//publicPath: 'http://localhost:8081/',
		extractCSS: {
			allChunks: true
		},
		vender: ['axios'],
		extend (config, { isDev, isClient }) {
			
		}
	}
}
