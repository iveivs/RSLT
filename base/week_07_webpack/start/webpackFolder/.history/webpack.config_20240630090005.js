const path = require('path');
// './src/index.js'

module.exports = {
    entry: path.resolve(__),
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
};