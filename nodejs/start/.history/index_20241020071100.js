const http = require('http')
const chalk = require('chalk')
const express = require('express')
const fs = require('fs/promises')
const path = require('path')
const { addNotes } = require('./notes.controller')

const basePath = path.join(__dirname, 'pages')

const app = express()

const port = 3001

app.get('/', (req, res)=> {

})


app.listen(port, () => {
    console.log(chalk.green(`server has been started on port ${port} `));
})