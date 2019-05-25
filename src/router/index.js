import IndexLayout from "../layouts/IndexLayout.vue"
import SideLayout from "../layouts/SideLayout.vue"

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
					children: [
						{
							path: 'large-scale-car-selection',
							component: () => import('../views/buy/large-scale-car-selection.vue'),
							meta: { column: 'buy' }, //声明当前所处的栏目
						},
						{
							path: 'ai-recommendation-car',
							component: () => import('../views/buy/ai-recommendation-car.vue'),
							meta: { column: 'buy' }, //声明当前所处的栏目
						},
						{
							path: 'judicial-auction-vehicle-selection',
							component: () => import('../views/buy/judicial-auction-vehicle-selection.vue'),
							meta: { column: 'buy' }, //声明当前所处的栏目
						}
					]
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
					children: [
						{
							path: 'b2b',
							component: () => import('../views/transfer/b2b.vue'),
							meta: { column: 'transfer' }, //声明当前所处的栏目
						},
						{
							path: 'b2w',
							component: () => import('../views/transfer/b2w.vue'),
							meta: { column: 'transfer' }, //声明当前所处的栏目
						},
						{
							path: 'w2b',
							component: () => import('../views/transfer/w2b.vue'),
							meta: { column: 'transfer' }, //声明当前所处的栏目
						}
					]
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
