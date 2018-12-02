//import { rollup } from 'rollup';
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import minify from "rollup-plugin-babel-minify"

// Modern Browsers
const plugins = [
  nodeResolve({ extensions: ['.js'] }),
  commonjs({extensions: ['.js',]}),
]
// Production Stuff
if(process.env.NODE_ENV == "production"){
  plugins.push(minify({comments: false}))
}
// IE and Edge conversions
const es5_plugins = plugins.concat([
  babel({
    extensions: ['.js'],
    presets: [['@babel/preset-env',{"useBuiltIns": "entry","targets": "ie >= 11"}]],
  }),
])

export default [{
  input:"./src/app.js",
  output:{
    file:"./build/app.js",
    format: "iife"
  },
  plugins: plugins,
},{
  input:"./src/app.js",
  output:{
    file:"./build/app.es5.js",
    format: "iife"
  },
  plugins: es5_plugins,
}]