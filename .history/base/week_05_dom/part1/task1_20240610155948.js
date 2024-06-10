const html = `<form class="create-user-form">
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

const someCover = document.createElement('div').classList.add('some_cover')
someCover.append(html)
document.body.append();
// document.querySelector('.cover').innerHTML = html

console.log('test');