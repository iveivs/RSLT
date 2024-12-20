const express = require('express')
const chalk = require('chalk')
const path = require('path')
const mongoose = require('mongoose')
const Note = require
const { addNotes, getNotes, removeNotyById, editNote } = require('./notes.controller')

const app = express()

app.set('view engine', 'ejs')
app.set('views', 'pages')

app.use(express.json())
app.use(express.static(path.relative(__dirname, 'public')))
app.use(express.urlencoded({
    extended: true
}))

const port = 3001

app.get('/', async (req, res)=> {
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
})

app.delete('/:id', async (req, res) => {
    await removeNotyById(req.params.id)
    res.render('index', {
        title: 'Express App',
        notes: await getNotes(),
        created: false
    })
})

app.put('/:id', async (req, res) => {
    const { id } = req.params
    const { title } = req.body
    await editNote(id, title)
    res.status(200).json({ message: 'Note updated' })
})

// mongoose.connect('mongodb+srv://somename:somename@cluster0.eik9n.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
mongoose.connect('mongodb+srv://somename:somename@cluster0.eik9n.mongodb.net/notes?retryWrites=true&w=majority&appName=Cluster0').then(()=> {
    app.listen(port, () => {
        console.log(chalk.green(`server has been started on port ${port} `))
    })
})

// app.listen(port, () => {
//     console.log(chalk.green(`server has been started on port ${port} `))
// })