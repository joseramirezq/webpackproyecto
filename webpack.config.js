const HtmlWebpackPlugin= require('html-webpack-plugin');
module.exports={
    //direccion de origen 
    entry:'./src/app.js',
    output:{
        //direccion ruta absoluta(_dirname)desde la ruta de la parteta ene sistema opertativo 
        path: __dirname + '/build',
        //nombre del archivo de salida
        //le llamanos bundle porque es comun y significa
        //algo como un packete
        filename:'bundle.js'

    },

     //configurar puerto del servidor 
    devServer:{
        port:'3000'
    },

    //para poder usar nuestros css
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    {loader: 'style-loader'},
                    {loader: 'css-loader'},

                ]
            }
        ]
    },
   


    //configuracion para el plubgin de html
    plugins:[
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
}