import http from 'http';
import chalk from 'chalk';
import  fs from 'fs/promises'
import path from 'path'

const port = 3003;

const basePath = path.join(__dirname, 'pages')

http.createServer(async (req, res) => {
    if(req.method === 'GET') {
        const content = await fs.readFile(path.join(basePath, 'index.html'))
        res.end(content)
    }
}).listen(port, () => {
    console.log(chalk.green(`Server has been started on port ${port}...`));
});
