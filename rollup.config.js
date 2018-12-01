//import { rollup } from 'rollup';
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import minify from "rollup-plugin-babel-minify"
import coffee from 'rollup-plugin-coffee-script';

// Modern Browsers
const plugins = [
  coffee(),
  nodeResolve({ extensions: ['.js', '.coffee'] }),
  commonjs({extensions: ['.js', '.coffee']}),
]
// Production Stuff
if(process.env.NODE_ENV == "production"){
  plugins.push(minify({comments: false}))
}
// IE and Edge conversions
const es5_plugins = plugins.concat([
  babel({
    extensions: ['.js', '.coffee'],
    presets: [['@babel/preset-env',{"useBuiltIns": "entry","targets": "ie >= 11"}]],
  }),
])

export default [{
  input:"./src/app.coffee",
  output:{
    file:"./build/app.js",
    format: "iife"
  },
  plugins: plugins,
},{
  input:"./src/app.coffee",
  output:{
    file:"./build/app.es5.js",
    format: "iife"
  },
  plugins: es5_plugins,
}]