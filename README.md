#webpack+vue.js的单页面应用搭建demo

###安装

clone项目地址
git clone git@github.com:cwsjoker/webpack-vue-spa-demo.git

安装第三方npm模块
npm install

在根目录下运行webpack命令打包

直接打开index.html测试

<pre>
###开发目录
├── README.md           
├── index.html         // 项目入口文件
├── package.json       // 项目配置文件
├── src                // 生产目录
│   ├── vue            // 组件
│   |    ├──home.vue
│   |    ├──blog.vue
│   |    ├──about.vue
│   |    ├──topic.vue
│   ├── components     // 各种组件
│   ├── views          // css文件
│   ├── scss           //scss文件
│   └── main.js        // Webpack 预编译入口
└── webpack.js  	   // Webpack 配置文件
</pre>
