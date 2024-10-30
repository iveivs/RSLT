const http = require('http')
const chalk = require('chalk')
const fs = require('fs')
const path = 
const port = 3001

const server = http.createServer((req, res) => {

    if (req.method === 'GET') {

    }

})

server.listen(port, () => {
    console.log(chalk.green(`server has been started on port ${port} `));
})