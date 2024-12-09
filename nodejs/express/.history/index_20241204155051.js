import express from 'express'
import chalk from 'chalk';
import { addNote, getNotes, removeNotes, editNote } from './notes.controller.js';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const port = 3003;
const app = express()

app.use(express.urlencoded({
    extended: true
}))

app.set('view engine', 'ejs')
app.set('views', 'pages')
app.use(express.json());

app.use(express.static(path.resolve(__dirname, 'public')))

app.get('/', async (req, res) => {
    res.render('index', {
        title: 'Express App',
        notes: await getNotes(),
        created: false
    })
})
app.get('/', async (req, res) => {
    res.render('index', {
        title: 'Express App',
        notes: await getNotes(),
        created: false
    })
})

app.post('/', async (req, res) => {
    await addNote(req.body.title)
    res.redirect('/');
})

app.delete('/:id', async (req, res) => {
    console.log('id', req.params.id);
    await removeNotes(req.params.id)
    res.render('index', {
        title: 'Express App',
        notes: await getNotes(),
        created: false
    })
})

app.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { title } = req.body;
    try {
        await editNote(id, title.trim());
        res.status(200).json({ message: 'Note updated' });
    } catch (err) {
        console.error('Update Error:', err.message);
        res.status(500).json({ error: 'Failed to update note' });
    }
});

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

