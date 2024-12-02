const http = require('http')
const chalk = require('chulk')

const port = 3000

http.createServer( (rec, res) => {
    console.log('Server');
    res.end('Hello from server')
})

server.listen(port, () => {
    console.log(chalk.orange(`Server has been started on port $`));
})