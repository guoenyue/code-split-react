const path = require("path");
const HtmlWebpackPlugin=require("html-webpack-plugin");
const webpack=require("webpack");
const config={
    devtool:"source-map",
    mode:"production",
    entry:{
       // vender:["react","react-dom","redux","react-redux","react-router","react-router-dom"],
        index:"./app/index.js",
        //router:"./app/js/router.js",
    },
    output:{
        path:path.resolve(__dirname,"dist"),
        filename:"./js/app.js",
        publicPath:"",
        chunkFilename:"[name].[chunkhash:5].js"
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
                        plugins:["transform-runtime"]
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
            filename:"index.html",
            inject: 'body',
            chunks:true
        })
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