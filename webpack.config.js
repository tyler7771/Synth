const path = require("path");

module.exports = {
 context: __dirname,
 entry: "./frontend/synthesizer.jsx",
 output: {
   path: path.join(__dirname),
   filename: "bundle.js",
   publicPath: "/"
 },
 module: {
   preLoaders: [
    //  {
    //    test: /\.jsx?/,
    //    exclude: /node_modules/,
    //    loader: 'jsxhint-loader'
    //  }, {
    //    test: /\.js?/,
    //    exclude: /node_modules/,
    //    loader: 'jshint-loader'
    //  }
   ],
   loaders: [
     {
       test: [/\.jsx?$/, /\.js?$/],
       exclude: /(node_modules|bower_components)/,
       loader: 'babel',
       query: {
         presets: ['es2015', 'react']
       }
     }
   ]
 },
 jshint: {
   esversion: 6
 },
 devtool: 'source-maps',
 resolve: {
   root: __dirname,
   extensions: ["", ".js", ".jsx" ]
 }
};
