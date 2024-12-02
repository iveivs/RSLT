import http from 'http';
import chalk from 'chalk';

const port = 3003

http.createServer( (rec, res) => {
    console.log('Server');
    res.end('Hello from server')
})

server.listen(port, () => {
    console.log(chalk.orange(`Server has been started on port ${port}...`));
})