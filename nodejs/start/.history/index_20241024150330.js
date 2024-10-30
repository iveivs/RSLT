// const express = require('express')
// const chalk = require('chalk')
// const path = require('path')
// const { addNotes, getNotes, removeNotyById, editNote} = require('./notes.controller')

// const app = express()

// app.set('view engine', 'ejs')
// app.set('views', 'pages')

// app.use(express.json())
// app.use(express.static(path.relative(__dirname, 'public')))
// app.use(express.urlencoded({
//     extended: true
// }))

// const port = 3001

// app.get('/', async (req, res)=> {
    
//     res.render('index', {
//         title: 'Express App',
//         notes: await getNotes(),
//         created: false
//     })
// })

// app.post('/', async (req, res) => {
//     await addNotes(req.body.title)
//     res.render('index', {
//         title: 'Express App',
//         notes: await getNotes(),
//         created: true
//     })
    
// })

// app.delete('/:id', async (req, res) => {
    
//     await removeNotyById(req.params.id)
//     res.render('index', {
//         title: 'Express App',
//         notes: await getNotes(),
//         created: false
//     })
// })

// app.listen(port, () => {
//     console.log(chalk.green(`server has been started on port ${port} `));
// })