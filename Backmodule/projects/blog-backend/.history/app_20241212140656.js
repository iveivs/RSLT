const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

const port = 3001
const app = express()



mongoose
    .connect(
        'mongodb+srv://somename:somename@cluster0.eik9n.mongodb.net/blog?retryWrites=true&w=majority&appName=Cluster0'
    )
    .then(() => {
        app.listen(port, () => {
            console.log(chalk.green(`server has been started on port ${port} `));
        });
    });
