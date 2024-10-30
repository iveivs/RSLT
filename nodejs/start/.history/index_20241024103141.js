const chalk = require('chalk')
const express = require('express')
const { addNotes, getNotes} = require('./notes.controller')

const app = express()

app.set('view engine', 'ejs')
app.set('views', 'pages')

app.use(express.urlencoded({
    extended: true
}))

const port = 3001

app.get('/', async (req, res)=> {
    // res.sendFile(path.join(basePath, 'index.html')) устаревший вариант
    res.render('index', {
        title: 'Express App',
        notes: await getNotes()
    })
})

app.post('/', async (req, res) => {
    await addNotes(req.body.title)
    res.render('index', {
        title: 'Express App',
        notes: await getNotes(),
        created
    })
    // res.sendFile(path.join(basePath, 'index.html')) устаревший вариант
})


app.listen(port, () => {
    console.log(chalk.green(`server has been started on port ${port} `));
})