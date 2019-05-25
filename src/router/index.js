import IndexLayout from "../layouts/IndexLayout.vue"
import SideLayout from "../layouts/SideLayout.vue"

// 引入路由配置对象
import buyRoute from "./buyRoute"
import transferRoute from "./transferRoute"

export default {
	mode: 'history',
	routes: [
		{
			path: '/index', 
			component: IndexLayout,
			children: [
				{
					path: 'index',
					name: 'index',
					meta: { column: 'index' },
					component: () => import('../views/index/Index.vue')
				},
				{
					path: 'buy',
					name: 'buy',
					meta: { column: 'buy' },
					component: SideLayout, // 左侧栏布局组件，放三级路由
					// 访问buy页面，自动跳转到当前路由
					redirect: { 'name': 'large-scale-car-selection' },
					// 循环映射出路由的配置项（返回一个JSON对象）
					children: buyRoute.children.map(item => ({
						path: item.en,
						name: item.en,
						meta: { column: 'buy' },
						component: item.co
					}))
				},
				{
					path: 'sale',
					name: 'sale',
					meta: { column: 'sale' },
					component: () => import('../views/sale/Index.vue')
				},
				{
					path: 'transfer',
					name: 'transfer',
					meta: { column: 'transfer' },
					component: SideLayout, // 左侧栏布局组件，放三级路由
					redirect: { 'name': 'b2b' },
					// 循环映射出路由的配置项（返回一个JSON对象）
					children: transferRoute.children.map(item=>({
						path: item.en,
						name: item.en,
						meta: { column: 'transfer' },
						component: item.co
					}))
				},
				{
					path: 'insurance',
					name: 'insurance',
					meta: { column: 'insurance' },
					component: () => import('../views/insurance/Index.vue')
				},
				{
					path: 'parking',
					name: 'parking',
					meta: { column: 'parking' },
					component: () => import('../views/parking/Index.vue')
				},
				{
					path: '*', redirect: { 'name': 'index' }
				}
			]
		}
	]
}
