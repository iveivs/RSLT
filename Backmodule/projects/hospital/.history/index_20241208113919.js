const mongoose = require('mongoose');
const express = require('express');
const chalk = require('chalk');
const Client = require('./');

const app = express();

const port = 3005;



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