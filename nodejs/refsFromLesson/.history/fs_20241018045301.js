const fs = require('fs')
const path = require('path')

const base = path.join(__dirname, 'temp')

fs.mkdir(base).then(() => {
    console.log('folder');
})