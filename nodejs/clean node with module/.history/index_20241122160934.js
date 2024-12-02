
import http from 'http';
import chalk from 'chalk';

const port = 3003;

http.createServer((req, res) => {
    console.log('Server');
    res.end('Hello from server');
}).listen(port, () => {
    console.log(chalk.green(`Server has been started on port ${port}...`));
});
