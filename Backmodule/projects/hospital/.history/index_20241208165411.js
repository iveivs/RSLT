const mongoose = require('mongoose');
const express = require('express');
const chalk = require('chalk');
const Client = require('./models/Client');

const app = express();
app.set('view engine', 'ejs');
app.set('views', 'pages');

const port = 3005;

// Middleware для обработки данных формы
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

// Обработка данных формы
app.post('/', async (req, res) => {
    const { title: userNameInfo, phone: phoneNumber, description: problemDescription } = req.body;

    try {
        const newClient = new Client({
            userNameInfo,
            phoneNumber,
            problemDescription,
        });

        await newClient.save();
        res.redirect('/');
    } catch (err) {
        console.error('Error saving client:', err.message);
        res.status(500).send('Error saving client');
    }
});

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
