const http = require('http')
const chalk = require('chalk')
const port = 3001

const server = http.createServer((req, res) =>  {
    if(req.method === '')

server.listen(port, () =>{
    console.log(chalk.green(`server has been started on port ${port} `));
})