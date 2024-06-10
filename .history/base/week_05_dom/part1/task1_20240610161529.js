// const html = 

const someCover = document.createElement('div')
// someCover.setAttribute('class', 'cover') // вариант 1
someCover.classList.add('someCover') // вариант 1
someCover.innerHTML = `<form class="create-user-form">
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
                    </form>`
document.body.append(someCover);
// document.querySelector('.cover').innerHTML = html

console.log('test');