const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const {register} = require('./controllers/user') 

const port = 3001
const app = express()

app.use(cookieParser())
app.use(express.json())

app.post('/register', async () =>{
    
})


mongoose
    .connect(
        'mongodb+srv://somename:somename@cluster0.eik9n.mongodb.net/blog?retryWrites=true&w=majority&appName=Cluster0'
    )
    .then(() => {
        app.listen(port, () => {
            console.log(`server has been started on port ${port} `);
        });
    });
