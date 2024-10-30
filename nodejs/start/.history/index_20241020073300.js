const chalk = require('chalk')
const express = require('express')
const path = require('path')
const { addNotes } = require('./notes.controller')

const basePath = path.join(__dirname, 'pages')

const app = express()

app.set

app.use(express.urlencoded({
    extended: true
}))

const port = 3001

app.get('/', (req, res)=> {
    res.sendFile(path.join(basePath, 'index.html'))
})

app.post('/', async (req, res) => {
    await addNotes(req.body.title)
    res.sendFile(path.join(basePath, 'index.html'))
})


app.listen(port, () => {
    console.log(chalk.green(`server has been started on port ${port} `));
})