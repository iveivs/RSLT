require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const jwt = require('jsonwebtoken')
const authMiddleware = require('./middlewares/authMiddleware')
const User = require('./models/User')
const Client = require('./models/Client')
const path = require('path')

const app = express()
app.set('view engine', 'ejs')
app.set('views', 'pages')

const PORT = process.env.PORT || 3005
const MONGO_URI = process.env.MONGO_URI;

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cookieParser())

app.get('/', async (req, res) => {
    try {
        const clients = await Client.find()
        res.render('index', {
            title: 'Main',
            clients,
        });
    } catch (err) {
        console.error('Database Error:', err.message)
        res.status(500).send('Internal Server Error')
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

        await newClient.save()
        res.status(200).send({ message: 'Success' })
    } catch (err) {
        console.error('Error saving client:', err.message)
        res.status(500).send({ error: 'Internal Server Error' })
    }
});

app.get('/login', (req, res) => {
    res.render('login', { error: null })
})

app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(401).render('login', { error: 'Пользователь не найден' })
        }

        const bcrypt = require('bcrypt');
        const isPasswordCorrect = await bcrypt.compare(password, user.password)
        if (!isPasswordCorrect) {
            return res.status(401).render('login', { error: 'Неверный пароль' })
        }

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' })
        res.cookie('token', token, { httpOnly: true })
        res.redirect('/table');
    } catch (err) {
        console.error('Login error:', err.message)
        res.status(500).render('login', { error: 'Ошибка сервера' })
    }
})

app.get('/table', authMiddleware, async (req, res) => {
    try {
        const clients = await Client.find();
        res.render('table', {
            title: 'Main',
            clients,
        });
    } catch (err) {
        console.error('Error fetching clients:', err.message)
        res.status(500).send('Internal Server Error')
    }
});

app.get('/logout', (req, res) => {
    res.clearCookie('token')
    res.redirect('/login')
});

mongoose
    .connect(MONGO_URI)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server has been started on port ${PORT}`)
        });
    })
    .catch((err) => {
        console.error(`Failed to connect to MongoDB: ${err.message}`)
    })
