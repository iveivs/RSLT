import http from 'http';
import chalk from 'chalk';

const port = 3003;

http.createServer((req, res) => {
    if(req)
}).listen(port, () => {
    console.log(chalk.green(`Server has been started on port ${port}...`));
});
