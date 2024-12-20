import http from 'http';
import chalk from 'chalk';
import  fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url';
imp

const port = 3003;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)
const basePath = path.join(__dirname, 'pages')

http.createServer(async (req, res) => {
    if(req.method === 'GET') {
        const content = await fs.readFile(path.join(basePath, 'index.html'))
        res.setHeader('Content-Type', 'text/html')
        res.writeHead(200)
        res.end(content)
    } else if (req.method === 'POST') {
        const body = []
        req.on('data', data => {
            body.push(Buffer.from(data))
        })
        req.on('end', data => {
            const title = body.toString().split('=')[1].replaceAll('+', ' ')

        })


        res.end('Post success')
    }
}).listen(port, () => {
    console.log(chalk.green(`Server has been started on port ${port}...`));
});
