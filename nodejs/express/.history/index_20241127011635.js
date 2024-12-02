import express from 'express';
import chalk from 'chalk';
import path from 'path';
import { fileURLToPath } from 'url';

const port = 3003;
const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'index.html'));
});

app.listen(port, () => {
    console.log(chalk.green(`Server has been started on port ${port}...`));
});
