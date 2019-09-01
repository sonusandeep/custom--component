const webpack = require('webpack');
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CleanWebPack= require('clean-webpack-plugin');


module.exports ={
        mode:'production',
        entry:'./src/index.js',
        output:{
            filename:'custom-button.js',
            library:'custom-button',
            libraryTarget:'umd',
            path :path.resolve(__dirname,'dist')
        },
modules:{
    rules:[
        {
            test:/\.js$/,
        exclude:/node_modules/,
        use:{
            loader:'babel-loader',
            options:{
                presets:['@babel/preset-env', '@babel-preset-react']
            }
        },
        optimization:{
            minimizer: [new UglifyJsPlugin()]
        },
        plugins:[
            new CleanWebPack(['dist'])
        ]

        }
        
       
    ]
}
 }
