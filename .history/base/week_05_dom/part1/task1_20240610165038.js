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

const labelName = document.createElement('label')
labelName.textContent = 'Имя'
someCover.append(labelName)

const inputName = document.createElement('input')
labelName.append(inputName)
inputName.setAttribute('type', 'text')
inputName.setAttribute('name', 'userName')
inputName.setAttribute('placeholder', 'Введите ваше имя')

const labelPassword = document.createElement('label')
labelPassword.textContent = 'Пароль'
someCover.append(labelPassword)

const inputPassword = document.createElement('input')
labelPassword.append(inputPassword)
inputName.setAttribute('type', 'password')
inputName.setAttribute('name', 'password')
inputName.setAttribute('placeholder', 'Придумайте Пароль')

const buttonConfirm

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

// const newEl = el.cloneNode(true);