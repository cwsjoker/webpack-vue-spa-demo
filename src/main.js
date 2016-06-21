var Vue = require('vue')
var VueRouter = require('vue-router');
var VueResource = require('vue-resource');
require('./css/home.css');
// 引入px与rem的换算
require('./js/equ.js');

//实例化vue模块 
Vue.use(VueRouter);
Vue.use(VueResource);

// 创建一个空组件
var app = Vue.extend({});

//实例化VueRouter
var router = new VueRouter({
    // 当hashbang的值为true时，所有的路径都会被格式化已#!开头，
    hashbang: true,
    history: false,
    saveScrollPosition: true,
    transitionOnLoad: true
});

// 路由表
router.map({
	 '/':{				//首页
        component: function (resolve) {
	      require(['./vue/home.vue'],resolve)
	    }
    },
    '/home':{
    	name : 'home',				//首页
        component: function (resolve) {
	      require(['./vue/home.vue'],resolve)
	    }
    },
    '/blog':{
    	name : 'blog',               //博客列表
        component: function (resolve) {
	      require(['./vue/blog.vue'],resolve)
	    }
    },
    '/blog/topic':{
    	name : 'topic',
    	//文章详情
    	component: function (resolve) {
	      require(['./vue/topic.vue'],resolve)
	    }
    },
    '/about':{
    	name : 'about',
    	//关于
    	component: function (resolve) {
	      require(['./vue/about.vue'],resolve)
	    }
    }
})


//默认/重定向到home页
// router.redirect({
//     '/':"/home"
// })
router.afterEach(function (transition) {
  console.log('成功浏览到: ' + transition.to.path)
})

router.start(app, "#app");