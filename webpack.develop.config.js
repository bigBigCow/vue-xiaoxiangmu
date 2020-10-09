var path = require('path')
var VueLoaderPlugin = require('vue-loader/lib/plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode: 'development', //设置生成环境还是开发环境
    entry: './src/main.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [ //2.x的写法
            {
                test: /\.vue$/,
                use: ['vue-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']//css-loader依赖style-loader
            },
            // {
            //     test:/\.(png|jpg|gif|ttf)$/,
            //     use:['file-loader']
            // },
            {
                test:/\.(png|jpg|gif|ttf)$/,
                use:['url-loader']
            }//url-loader依赖file-loader
        ]
    },
    plugins: [ //插件
        new VueLoaderPlugin(), //Vue-loader在15.*之后的版本都是 vue-loader的使用都是需要伴生 VueLoaderPlugin的
        new HtmlWebpackPlugin({ //与webpack-dev-server一起实现热更新
            template: './template.html', //以谁为模板
            filename: 'index.html' //生成的页面名字
        })
    ]
}