const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode:'development',
    entry:'./main.js',
    output:{ 
        filename:'bundle.js', 
        path:path.join(__dirname,'./dist')
    },
    devServer:{
        contentBase:'./',
        hot:true,
        port:2000,
        open:true 
    },
    plugins:[
        new HtmlWebpackPlugin({
            filename:'index.html',
            template:'index.html'
        }),
    ],
    
    

}

