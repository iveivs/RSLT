const http = require('http')
const chalk = require('chalk')
const fs = require('fs/promises')
const path = require('path')

const basePath = path.join(__dirname, 'pages')
const port = 3001

const server = http.createServer(async (req, res) => {

    if (req.method === 'GET') {
        const content = await fs.readFile(path.join(basePath, 'index.html'))
        res.setHeader('Content-Type', 'text/html')
        res.writeHead(200)
        res.end(content)
    } else if(req.method === 'POST') {
        const body = []

        req.on('data', data => {
            body.push(Buffer.from(data))
        })
        req.on('end', () => {
            console.log('End', body.toString().split());
        })
        res.end('Post success')
    }

})

server.listen(port, () => {
    console.log(chalk.green(`server has been started on port ${port} `));
})