import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import styles from "rollup-plugin-styles";
import image from '@rollup/plugin-image';
import serve from 'rollup-plugin-serve'

export default {
    input: './index.js',
    output: {
        file: './build/bundle.js',
        format: 'cjs'
    },
    plugins: [
        resolve(),
        babel({ babelHelpers: 'bundled' }),
        styles(),
        image(),
        serve({ open: true })
    ]
};