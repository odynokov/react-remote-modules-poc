import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
import {terser} from "rollup-plugin-terser";

const {modules} = require('./package.json');

export default modules.map(module => ({
  input: `src/${module.id}`,
  output: {
    file: `public/modules/${module.id}.js`,
    format: 'esm',
    name: module.id
  },
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    resolve({
      browser: true
    }),
    commonjs({
      include: 'node_modules/**'
    }),
    babel({
      exclude: ['node_modules/**'],
      runtimeHelpers: true,
      babelrc: false,
      presets: [['@babel/env', { modules: false }], '@babel/preset-react'],
    }),
    terser()
  ]
}));
