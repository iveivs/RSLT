const fs = require('fs/promises')
const fsSync = require('fs')
const path = require('path')

const base = path.join(__dirname, 'temp')

const getContent = 

// без async await
// fs.mkdir(base).then(() => {
//     console.log('folder created');
// }).catch((err) => {
//     console.log('error', err);
// })

async function start() {
    try {
        if(fsSync.existsSync(base)) {
            await fs.appendFile(path.join(base, 'logs.txt'), process.argv[2] ?? '')
        } else {
            await fs.mkdir(base)
            await fs.writeFile(path.join(base, 'logs.txt'), process.argv[2] ?? '')
            
        }
    } catch (error) {
        console.log('error', err)
    }
}

start()