    const mongoose = require('mongoose');
    const express = require('express');
    const chalk = require('chalk');
    const Client = require('./models/Client');
    const User = require('./models/User');

    const app = express();
    app.set('view engine', 'ejs');
    app.set('views', 'pages');

    const port = 3005;

    // Middleware для обработки данных форм
    app.use(express.urlencoded({ extended: true }));

    // Главная страница
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

    // Обработка логина
    app.get('/login', (req, res) => {
        res.render('login', { error: null });
    });

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

    app.get('/table', async (req,res) => {
        const clients = await Client.find();
            res.render('table', {
                title: 'Main',
                clients,
            });


    })

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
