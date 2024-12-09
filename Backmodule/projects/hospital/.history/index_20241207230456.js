const mongoose = require('mongoose');
const express = require('express');
const chalk = require('chalk');

const app = express();

const port = 3005;



mongoose
    .connect(
        'mongodb+srv://somename:somename@cluster0.eik9n.mongodb.net/notes?retryWrites=true&w=majority&appName=Cluster0'
    )
    .then(() => {
        app.listen(port, () => {
            console.log(chalk.green(`server has been started on port ${port} `));
        });
    });
// app.listen(port, () => {
//     console.log(chalk.blue(`Server has been started on port ${port}`));
// })