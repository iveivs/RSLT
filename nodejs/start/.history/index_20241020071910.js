const http = require('http')
const chalk = require('chalk')
const express = require('express')
const fs = require('fs/promises')
const path = require('path')
const { addNotes } = require('./notes.controller')

const basePath = path.join(__dirname, 'pages')

const app = express()

app.use(express.urlencoded({
    extended: true
}))

const port = 3001

app.get('/', (req, res)=> {
    res.sendFile(path.join(basePath, 'index.html'))
})

app.post('/', async (req, res) => {
    awaddNotes(req.body.title)
    res.sendFile(path.join(basePath, 'index.html'))
})


app.listen(port, () => {
    console.log(chalk.green(`server has been started on port ${port} `));
})