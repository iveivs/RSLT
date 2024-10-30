const http = require('http')
const chalk = require('chalk')
const port = 3000

const server = http.createServer((req, res) =>  {

})

server.listen(port, () =>{
    console.log('server has');
})