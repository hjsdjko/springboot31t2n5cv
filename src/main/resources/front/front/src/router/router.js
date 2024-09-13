import VueRouter from 'vue-router'

//引入组件
import Index from '../pages'
import Home from '../pages/home/home'
import Login from '../pages/login/login'
import Register from '../pages/register/register'
import Center from '../pages/center/center'
import Storeup from '../pages/storeup/list'
import News from '../pages/news/news-list'
import NewsDetail from '../pages/news/news-detail'
import payList from '../pages/pay'

import xueshengList from '../pages/xuesheng/list'
import xueshengDetail from '../pages/xuesheng/detail'
import xueshengAdd from '../pages/xuesheng/add'
import qiyeList from '../pages/qiye/list'
import qiyeDetail from '../pages/qiye/detail'
import qiyeAdd from '../pages/qiye/add'
import xuekemenleiList from '../pages/xuekemenlei/list'
import xuekemenleiDetail from '../pages/xuekemenlei/detail'
import xuekemenleiAdd from '../pages/xuekemenlei/add'
import gangweifenleiList from '../pages/gangweifenlei/list'
import gangweifenleiDetail from '../pages/gangweifenlei/detail'
import gangweifenleiAdd from '../pages/gangweifenlei/add'
import jianzhixinxiList from '../pages/jianzhixinxi/list'
import jianzhixinxiDetail from '../pages/jianzhixinxi/detail'
import jianzhixinxiAdd from '../pages/jianzhixinxi/add'
import yingpinxinxiList from '../pages/yingpinxinxi/list'
import yingpinxinxiDetail from '../pages/yingpinxinxi/detail'
import yingpinxinxiAdd from '../pages/yingpinxinxi/add'
import mianshixinxiList from '../pages/mianshixinxi/list'
import mianshixinxiDetail from '../pages/mianshixinxi/detail'
import mianshixinxiAdd from '../pages/mianshixinxi/add'
import tousuxinxiList from '../pages/tousuxinxi/list'
import tousuxinxiDetail from '../pages/tousuxinxi/detail'
import tousuxinxiAdd from '../pages/tousuxinxi/add'
import jifenjiangliList from '../pages/jifenjiangli/list'
import jifenjiangliDetail from '../pages/jifenjiangli/detail'
import jifenjiangliAdd from '../pages/jifenjiangli/add'
import newstypeList from '../pages/newstype/list'
import newstypeDetail from '../pages/newstype/detail'
import newstypeAdd from '../pages/newstype/add'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}

//配置路由
export default new VueRouter({
	routes:[
		{
      path: '/',
      redirect: '/index/home'
    },
		{
			path: '/index',
			component: Index,
			children:[
				{
					path: 'home',
					component: Home
				},
				{
					path: 'center',
					component: Center,
				},
				{
					path: 'pay',
					component: payList,
				},
				{
					path: 'storeup',
					component: Storeup
				},
				{
					path: 'news',
					component: News
				},
				{
					path: 'newsDetail',
					component: NewsDetail
				},
				{
					path: 'xuesheng',
					component: xueshengList
				},
				{
					path: 'xueshengDetail',
					component: xueshengDetail
				},
				{
					path: 'xueshengAdd',
					component: xueshengAdd
				},
				{
					path: 'qiye',
					component: qiyeList
				},
				{
					path: 'qiyeDetail',
					component: qiyeDetail
				},
				{
					path: 'qiyeAdd',
					component: qiyeAdd
				},
				{
					path: 'xuekemenlei',
					component: xuekemenleiList
				},
				{
					path: 'xuekemenleiDetail',
					component: xuekemenleiDetail
				},
				{
					path: 'xuekemenleiAdd',
					component: xuekemenleiAdd
				},
				{
					path: 'gangweifenlei',
					component: gangweifenleiList
				},
				{
					path: 'gangweifenleiDetail',
					component: gangweifenleiDetail
				},
				{
					path: 'gangweifenleiAdd',
					component: gangweifenleiAdd
				},
				{
					path: 'jianzhixinxi',
					component: jianzhixinxiList
				},
				{
					path: 'jianzhixinxiDetail',
					component: jianzhixinxiDetail
				},
				{
					path: 'jianzhixinxiAdd',
					component: jianzhixinxiAdd
				},
				{
					path: 'yingpinxinxi',
					component: yingpinxinxiList
				},
				{
					path: 'yingpinxinxiDetail',
					component: yingpinxinxiDetail
				},
				{
					path: 'yingpinxinxiAdd',
					component: yingpinxinxiAdd
				},
				{
					path: 'mianshixinxi',
					component: mianshixinxiList
				},
				{
					path: 'mianshixinxiDetail',
					component: mianshixinxiDetail
				},
				{
					path: 'mianshixinxiAdd',
					component: mianshixinxiAdd
				},
				{
					path: 'tousuxinxi',
					component: tousuxinxiList
				},
				{
					path: 'tousuxinxiDetail',
					component: tousuxinxiDetail
				},
				{
					path: 'tousuxinxiAdd',
					component: tousuxinxiAdd
				},
				{
					path: 'jifenjiangli',
					component: jifenjiangliList
				},
				{
					path: 'jifenjiangliDetail',
					component: jifenjiangliDetail
				},
				{
					path: 'jifenjiangliAdd',
					component: jifenjiangliAdd
				},
				{
					path: 'newstype',
					component: newstypeList
				},
				{
					path: 'newstypeDetail',
					component: newstypeDetail
				},
				{
					path: 'newstypeAdd',
					component: newstypeAdd
				},
			]
		},
		{
			path: '/login',
			component: Login
		},
		{
			path: '/register',
			component: Register
		},
	]
})
