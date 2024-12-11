const fs = require('fs')
const path = require('path')

const base = path.join(__dirname, 'temp')

// без async await
// fs.mkdir(base).then(() => {
//     console.log('folder created');
// }).catch((err) => {
//     console.log('error', err);
// })

async function start() {
    try {
        await fs.mkdir(base)
        console.log('folder created');
    } catch (error) {
        console.log('error', err)
    }
}