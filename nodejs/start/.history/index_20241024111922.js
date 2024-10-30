const express = require('express')
const chalk = require('chalk')
const path = require('path')
const { addNotes, getNotes} = require('./notes.controller')

const app = express()

app.set('view engine', 'ejs')
app.set('views', 'pages')

app.use(express.static(path.relative(__dirname, 'public')))
app.use(express.urlencoded({
    extended: true
}))

const port = 3001

app.get('/', async (req, res)=> {
    // res.sendFile(path.join(basePath, 'index.html')) устаревший вариант
    res.render('index', {
        title: 'Express App',
        notes: await getNotes(),
        created: false
    })
})

app.post('/', async (req, res) => {
    await addNotes(req.body.title)
    res.render('index', {
        title: 'Express App',
        notes: await getNotes(),
        created: true
    })
    // res.sendFile(path.join(basePath, 'index.html')) устаревший вариант
})

app.delete()

app.listen(port, () => {
    console.log(chalk.green(`server has been started on port ${port} `));
})