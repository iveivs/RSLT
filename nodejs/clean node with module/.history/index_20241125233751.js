import http from 'http';
import chalk from 'chalk';
import  fs from 'fs/promises'
import path from 'path'

const port = 3003;

const basePath = path.join(__dirname, 'pages')

http.createServer((req, res) => {
    if(req.method === 'GET') {

    }
}).listen(port, () => {
    console.log(chalk.green(`Server has been started on port ${port}...`));
});
