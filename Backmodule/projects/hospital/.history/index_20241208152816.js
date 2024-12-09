const mongoose = require('mongoose');
const express = require('express');
const chalk = require('chalk');
const Client = require('./models/Client');

const app = express();
app.set('view engine', 'ejs');
app.set('views', 'pages');

const port = 3005;

app.get('/', async ())

app.get('/check-db', async (req, res) => {
    try {
        // Пытаемся получить всех клиентов из базы данных
        const clients = await Client.find();
        
        // Отображаем результаты на странице
        res.render('check', {
            title: 'Database Check',
            clients,
        });
    } catch (err) {
        console.error('Database Error:', err.message);
        res.status(500).send('Error connecting to the database');
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

// app.listen(port, () => {
//     console.log(chalk.blue(`Server has been started on port ${port}`));
// })