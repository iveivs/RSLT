const http = require('http')
const chalk = require('chalk')
const fs = require('fs/promises')
const path = require('path')

const basePath = path(__dirname, 'pages')
const port = 3001

const server = http.createServer((req, res) => {

    if (req.method === 'GET') {
        fs.readFile(path.join(basePath,))
    }

})

server.listen(port, () => {
    console.log(chalk.green(`server has been started on port ${port} `));
})