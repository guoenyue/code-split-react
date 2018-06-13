const path = require("path");
const HtmlWebpackPlugin=require("html-webpack-plugin");
const webpack=require("webpack");
const config={
    devtool:"source-map",
    mode:"development",
    entry:{
        index:"./app/index.js",
    },
    output:{
        path:path.resolve(__dirname,"dist/js"),
        filename:"app.js",
        publicPath:"http://localhost:3011/",
        chunkFilename:"[name].[chunkhash:5].js"
        //此处的配置项path为所有的资源物理输出路径，publicPath为发布地址，开发环境为本地服务器，生产环境则可以提花为生产环境地址
    },
    module:{
        rules:[
            {
                test:/\.jsx?/i,
                exclude:/node_modules/,
                use:{
                    loader:"babel-loader",
                    options:{
                        presets:["es2015","stage-3","react"],
                        plugins:["transform-runtime"]/* 此babel-plugin-transform-runtime为polyfill可以使浏览器运行es7 */
                    }
                }
            }
        ]
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title:'app',
            template: './app/index.tmpl.html',
            minify:true,
            filename:"../index.html",
            inject: 'body',
            chunks:true
        })
        /* 上面配置的filename可以带上文件夹名字以影响html页面的输出地址，该输出的root以output配置项的path为准 */
    ],
    resolve:{extensions:[".js",".css",".json",".jsx"]},
    devServer:{
        hot:true,
        contentBase:path.join(__dirname,"dist"),
        host: 'localhost',
        port: '3011',
    }
};

module.exports=config;