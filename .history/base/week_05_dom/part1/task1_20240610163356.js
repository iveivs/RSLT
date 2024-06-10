const cover = document.querySelector('.cover')
cover.innerHTML = `
                    <form class="create-user-form">
                        <label>
                            Имя
                            <input type="text" name="userName" placeholder="Введите ваше имя">
                        </label>
                        <label>
                            Пароль
                            <input type="password" name="password" placeholder="Придумайте Пароль">
                        </label>
                        <button type="submit">
                            Подтвердить
                        </button>
                    </form>
`

console.log('test');

const someCover = document.createElement('form')
// someCover.setAttribute('class', 'cover') // вариант 1
// someCover.classList.add('someCover') // вариант 2
someCover.className = 'create-user-form' // вариант 3

const label = <html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
</head>
<body>
    
</body>
</html>

// someCover.innerHTML = `<form class="create-user-form">
//                             <label>
//                                 Имя
//                                 <input type="text" name="userName" placeholder="Введите ваше имя">
//                             </label>
//                             <label>
//                                 Пароль
//                                 <input type="password" name="password" placeholder="Придумайте Пароль">
//                             </label>
//                             <button type="submit">
//                                 Подтвердить
//                             </button>
//                     </form>`
document.body.append(someCover);