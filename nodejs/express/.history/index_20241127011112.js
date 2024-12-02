import http from 'http';
import express from 'express'
import chalk from 'chalk';
import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url';
import { addNote } from './notes.controller.js';

const port = 3003;
const app = express()

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)
const basePath = path.join(__dirname, 'pages')

app.get('/', (req, res) => {
    
})

app.listen(port, () => {
    console.log(chalk.green(`Server has been started on port ${port}...`));
});
