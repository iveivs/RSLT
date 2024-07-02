const path = require('path');
// './src/index.js'

module.exports = {
    mode: ""
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
};