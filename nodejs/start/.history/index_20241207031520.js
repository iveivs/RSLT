const express = require('express');
const chalk = require('chalk');
const path = require('path');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const Note = require('./models/Note');
const { addNotes, getNotes, removeNotyById, editNote } = require('./notes.controller');
const { addUser, loginUser } = require('./user.controller');
const auth = require('./middlewares/auth')

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'pages');

app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(
    express.urlencoded({
        extended: true,
    })
);

const port = 3001;

app.get('/login', async (req, res) => {
    res.render('login', {
        title: 'Express App',
        error: undefined,
    });
});

app.post('/login', async (req, res) => {
    try {
        const token = await loginUser(req.body.email, req.body.password)
        res.cookie('token', token)
        res.redirect('/')
    } catch (error) {
        res.render('login', {
            title: 'Express App',
            error: error.message,
        });
    }
})

app.get('/register', async (req, res) => {
    res.render('register', {
        title: 'Express App',
        error: undefined,
    });
});

app.post('/register', async (req, res) => {
    try {
        await addUser(req.body.email, req.body.password)

        res.redirect('/login')
    } catch (error) {
        if(error.code === 11000){
            res.render('register', {
                title: 'Express App',
                error: 'Email is allready registered',
            });
            return
        }
        res.render('register', {
            title: 'Express App',
            error: error.message,
        });
    }
});

app

app.use(auth)

app.get('/', async (req, res) => {
    try {
        const notes = await getNotes();
        res.render('index', {
            title: 'Express App',
            notes,
            userEmail: req.user.email,
            created: false,
            error: false,
        });
    } catch (error) {
        console.error('Error rendering index:', error.message);
        res.status(500).send('Internal Server Error');
    }
});


app.post('/', async (req, res) => {
    try {
        if (!req.body.title || req.body.title.trim() === '') {
            throw new Error('Title is required');
        }

        await addNotes(req.body.title.trim(), req.user.email);
        res.redirect('/');
    } catch (err) {
        console.error('Creation Error:', err.message);
        res.render('index', {
            title: 'Express App',
            notes: await getNotes(),
            userEmail: req.user.email,
            created: false,
            error: true,
        });
    }
});

app.delete('/:id', async (req, res) => {
    try {
        await removeNotyById(req.params.id);
        res.status(200).json({ message: 'Note deleted' });
    } catch (err) {
        console.error('Deletion Error:', err.message);
        res.status(500).json({ error: 'Failed to delete note' });
    }
});

app.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { title } = req.body;
    try {
        await editNote(id, title.trim(), req.body.title );
        res.status(200).json({ message: 'Note updated' });
    } catch (err) {
        console.error('Update Error:', err.message);
        res.status(500).json({ error: 'Failed to update note' });
    }
});

mongoose
    .connect(
        'mongodb+srv://somename:somename@cluster0.eik9n.mongodb.net/notes?retryWrites=true&w=majority&appName=Cluster0'
    )
    .then(() => {
        app.listen(port, () => {
            console.log(chalk.green(`server has been started on port ${port} `));
        });
    });


// =====================

// const express = require('express');
// const chalk = require('chalk');
// const path = require('path');
// const mongoose = require('mongoose');
// const cookieParser = require('cookie-parser');
// const Note = require('./models/Note');
// const { addNotes, getNotes, removeNotyById, editNote } = require('./notes.controller');
// const { addUser, loginUser } = require('./user.controller');
// const auth = require('./middlewares/auth')

// const app = express();

// app.set('view engine', 'ejs');
// app.set('views', 'pages');

// app.use(express.json());
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));
// app.use(
//     express.urlencoded({
//         extended: true,
//     })
// );

// const port = 3001;

// app.get('/login', async (req, res) => {
//     res.render('login', {
//         title: 'Express App',
//         error: undefined,
//     });
// });

// app.post('/login', async (req, res) => {
//     try {
//         const token = await loginUser(req.body.email, req.body.password)
//         res.cookie('token', token)
//         res.redirect('/')
//     } catch (error) {
//         res.render('login', {
//             title: 'Express App',
//             error: error.message,
//         });
//     }
// })

// app.get('/register', async (req, res) => {
//     res.render('register', {
//         title: 'Express App',
//         error: undefined,
//     });
// });

// app.post('/register', async (req, res) => {
//     try {
//         await addUser(req.body.email, req.body.password)

//         res.redirect('/login')
//     } catch (error) {
//         if(error.code === 11000){
//             res.render('register', {
//                 title: 'Express App',
//                 error: 'Email is allready registered',
//             });
//             return
//         }
//         res.render('register', {
//             title: 'Express App',
//             error: error.message,
//         });
//     }
// });

// app.use(auth)

// app.get('/', async (req, res) => {
//     res.render('index', {
//         title: 'Express App',
//         notes: await getNotes(),
//         created: false,
//         error: false,
//     });
// });

// app.post('/', async (req, res) => {
//     try {
//         if (!req.body.title || req.body.title.trim() === '') {
//             throw new Error('Title is required');
//         }

//         await addNotes(req.body.title.trim());
//         res.redirect('/');
//     } catch (err) {
//         console.error('Creation Error:', err.message);
//         res.render('index', {
//             title: 'Express App',
//             notes: await getNotes(),
//             created: false,
//             error: true,
//         });
//     }
// });

// app.delete('/:id', async (req, res) => {
//     try {
//         await removeNotyById(req.params.id);
//         res.status(200).json({ message: 'Note deleted' });
//     } catch (err) {
//         console.error('Deletion Error:', err.message);
//         res.status(500).json({ error: 'Failed to delete note' });
//     }
// });

// app.put('/:id', async (req, res) => {
//     const { id } = req.params;
//     const { title } = req.body;
//     try {
//         await editNote(id, title.trim());
//         res.status(200).json({ message: 'Note updated' });
//     } catch (err) {
//         console.error('Update Error:', err.message);
//         res.status(500).json({ error: 'Failed to update note' });
//     }
// });

// mongoose
//     .connect(
//         'mongodb+srv://somename:somename@cluster0.eik9n.mongodb.net/notes?retryWrites=true&w=majority&appName=Cluster0'
//     )
//     .then(() => {
//         app.listen(port, () => {
//             console.log(chalk.green(`server has been started on port ${port} `));
//         });
//     });
