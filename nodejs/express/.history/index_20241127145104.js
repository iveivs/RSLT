import express from 'express'
import chalk from 'chalk';
import { addNote, getNotes } from './notes.controller.js';

const port = 3003;
const app = express()

app.use(express.urlencoded({
    extended: true
}))

app.set('view engine', 'ejs')
app.set('views', 'pages')


app.get('/', async (req, res) => {
    res.render('index', {
        title: 'Express App',
        notes: await getNotes()
    })

    // более устаревший вариант
    // res.sendFile(path.join(basePath, 'index.html'))
})

app.post('/', async (req, res) => {
    await addNote(req.body.title)

    res.render('index', {
        title: 'Express App'
    })
    // более устаревший вариант
    // res.sendFile(path.join(basePath, 'index.html'))
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

