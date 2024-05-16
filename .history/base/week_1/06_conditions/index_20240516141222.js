const existingUserLogin = 'the_best_user'
const  existingUserPassword = '12345678'

const userLogin = prompt('Введите ваш логин').trim()

const userPassword = prompt('Введите ваш пароль').trim()

userLogin === existingUserLogin && userPassword === existingUserPassword ? alert(`Добро пожаловать, ${userLogin}!`) : alert
