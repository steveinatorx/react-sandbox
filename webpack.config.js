

var APP_DIR=__dirname+'/src/client/app/';
var BUILD_DIR=__dirname+'/src/client/public/';


module.exports= {
    entry:  APP_DIR+'/sandbox.js',
    output: {
          path:  BUILD_DIR,
          filename: 'bundle.js'
    },
    module : { 
      loaders:  [
            {
               //process js and jsc files
               test : /\.jsx?/,
               include : APP_DIR,
               loader : 'babel-loader',
               //use .babelrc  
               /*query: {
                presets:['es2015','react'] 
              
               }*/  
            }
      ]
    }
};



