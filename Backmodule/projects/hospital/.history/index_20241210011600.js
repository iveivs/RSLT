// const mongoose = require('mongoose');
// const express = require('express');
// const chalk = require('chalk');
// const Client = require('./models/Client');
// const User = require('./models/User');
// const path = require('path');

// const app = express();
// app.set('view engine', 'ejs');
// app.set('views', 'pages');

// const port = 3005;

// app.use(express.static('public'))
// app.use(express.urlencoded({ extended: true }));

// app.get('/', async (req, res) => {
//     try {
//         const clients = await Client.find();
//         res.render('index', {
//             title: 'Main',
//             clients,
//         });
//     } catch (err) {
//         console.error('Database Error:', err.message);
//         res.status(500).send('Internal Server Error');
//     }
// });

// app.post('/', async (req, res) => {
//     const { title, phone, description } = req.body;

//     try {
//         const newClient = new Client({
//             userNameInfo: title,
//             phoneNumber: phone,
//             problemDescription: description,
//             createdAt: new Date(),
//         });

//         await newClient.save();

//         res.redirect('/');
//     } catch (err) {
//         console.error('Error saving client:', err.message);
//         res.status(500).send('Internal Server Error');
//     }
// });

// app.get('/login', (req, res) => {
//     res.render('login', { error: null });
// });

// app.post('/login', async (req, res) => {
//     const { email, password } = req.body;

//     try {
//         const user = await User.findOne({ email });
//         if (!user) {
//             return res.status(401).render('login', { error: 'Пользователь не найден' });
//         }

//         const isPasswordCorrect = password === user.password;
//         if (!isPasswordCorrect) {
//             return res.status(401).render('login', { error: 'Неверный пароль' });
//         }

//         res.redirect('/table');
//     } catch (err) {
//         console.error('Login error:', err.message);
//         res.status(500).render('login', { error: 'Внутренняя ошибка сервера' });
//     }
// });

// app.get('/table', async (req, res) => {
//     try {
//         const clients = await Client.find();
//         res.render('table', {
//             title: 'Main',
//             clients,
//         });
//     } catch (err) {
//         console.error('Error fetching clients:', err.message);
//         res.status(500).send('Internal Server Error');
//     }
// });

// mongoose
//     .connect(
//         'mongodb+srv://somename:somename@cluster0.eik9n.mongodb.net/hospital?retryWrites=true&w=majority&appName=Cluster0'
//     )
//     .then(() => {
//         app.listen(port, () => {
//             console.log(chalk.green(`Server has been started on port ${port}`));
//         });
//     })
//     .catch((err) => {
//         console.error(chalk.red(`Failed to connect to MongoDB: ${err.message}`));
//     });
const mongoose = require('mongoose');
const express = require('express');
const chalk = require('chalk');
const Client = require('./models/Client');
const User = require('./models/User');
const path = require('path');

const app = express();
app.set('view engine', 'ejs');
app.set('views', 'pages');

const port = 3005;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', async (req, res) => {
    try {
        const clients = await Client.find();
        res.render('index', {
            title: 'Main',
            clients,
        });
    } catch (err) {
        console.error('Database Error:', err.message);
        res.status(500).send('Internal Server Error');
    }
});

app.post('/', async (req, res) => {
    const { title, phone, description } = req.body;

    try {
        const newClient = new Client({
            userNameInfo: title,
            phoneNumber: phone,
            problemDescription: description,
            createdAt: new Date(),
        });

        await newClient.save();

        res.status(200).send({ message: 'Success' });
    } catch (err) {
        console.error('Error saving client:', err.message);
        res.status(500).send({ error: 'Internal Server Error' });
    }
});

app.get('/login', (req, res) => {
    res.render('login', { error: null });
});

// Обработка логина
app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).render('login', { error: 'Пользователь не найден' });
        }

        const isPasswordCorrect = password === user.password;
        if (!isPasswordCorrect) {
            return res.status(401).render('login', { error: 'Неверный пароль' });
        }

        res.redirect('/table');
    } catch (err) {
        console.error('Login error:', err.message);
        res.status(500).render('login', { error: 'Внутренняя ошибка сервера' });
    }
});

// Таблица клиентов
app.get('/table', async (req, res) => {
    try {
        const clients = await Client.find();
        res.render('table', {
            title: 'Main',
            clients,
        });
    } catch (err) {
        console.error('Error fetching clients:', err.message);
        res.status(500).send('Internal Server Error');
    }
});

// Подключение к базе данных
mongoose
    .connect(
        'mongodb+srv://somename:somename@cluster0.eik9n.mongodb.net/hospital?retryWrites=true&w=majority&appName=Cluster0'
    )
    .then(() => {
        app.listen(port, () => {
            console.log(chalk.green(`Server has been started on port ${port}`));
        });
    })
    .catch((err) => {
        console.error(chalk.red(`Failed to connect to MongoDB: ${err.message}`));
    });
