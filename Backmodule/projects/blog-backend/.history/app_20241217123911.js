const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const { register, login } = require('./controllers/user');
const mapUser = require('./helpers/mapUser');
const authenticated = require('./middlewares/authenticated');
const hasRole = require('./middlewares/hasRole');
const ROLES = require('./constants/roles')

const port = 3001
const app = express()

app.use(cookieParser())
app.use(express.json())

app.post('/register', async (req, res) => {
    try {
        const { user, token } = await register(req.body.login, req.body.password)
        res.cookie('token', token, { httpOnly: true })
            .send({ error: null, user: mapUser(user) })
    } catch (e) {
        res.send({ error: e.message || "Unknown error" })
    }
})

app.post('/login', async (req, res) => {
    try {
        const { user, token } = await login(req.body.login, req.body.password)

        res.cookie('token', token, { httpOnly: true })
            .send({ error: null, user: mapUser(user) })
    } catch (e) {
        res.send({ error: e.message || "Unknown error" })
    }
})

app.post('/logout', async (req, res) => {
    res.cookie('token', '', { httpOnly: true })
        .send({})
})

app.use(authenticated)

app.get('/user', hasRole([ROLES.ADMIN]), (req, res) => {
    const user
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
