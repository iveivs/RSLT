import http from 'http';
import express from 'express'
import chalk from 'chalk';
import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url';
import { addNote } from './notes.controller.js';

const port = 3003;
const app = express()

app.use(express.urlencoded({
    
}))

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)
const basePath = path.join(__dirname, 'pages')

app.get('/', (req, res) => {
    res.sendFile(path.join(basePath, 'index.html'))
})

app.listen(port, () => {
    console.log(chalk.green(`Server has been started on port ${port}...`));
});






// тоже рабочий код:
// import express from 'express';
// import chalk from 'chalk';
// import path from 'path';
// import { fileURLToPath } from 'url';

// const port = 3003;
// const app = express();

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'pages', 'index.html'));
// });

// app.listen(port, () => {
//     console.log(chalk.green(`Server has been started on port ${port}...`));
// });

