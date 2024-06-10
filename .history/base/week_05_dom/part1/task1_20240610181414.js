// Вариант через innerHTML

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
// Вариант через createElement

const someCover = document.createElement('form')
// someCover.setAttribute('class', 'cover') // вариант 1
// someCover.classList.add('someCover') // вариант 2
someCover.className = 'create-user-form' // вариант 3
someCover.style.marginTop = '40px'

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
inputPassword.setAttribute('type', 'password')
inputPassword.setAttribute('name', 'password')
inputPassword.setAttribute('placeholder', 'Придумайте Пароль')

const buttonConfirm = document.createElement('button')
buttonConfirm.setAttribute('type', 'submit')
buttonConfirm.textContent = 'Подтвердить'
someCover.append(buttonConfirm)

document.body.append(someCover);

// const newEl = el.cloneNode(true);

const tasks = [
    {
        id: '1138465078061',
        completed: false,
        text: 'Посмотреть новый урок по JavaScript',
    },
    {
        id: '1138465078062',
        completed: false,
        text: 'Выполнить тест после урока',
    },
    {
        id: '1138465078063',
        completed: false,
        text: 'Выполнить ДЗ после урока',
    },
];

const taskList = document.createElement('div')
taskList.className = 'tasks-list'

const getHtml = (taskObj) => {
    return `
        <div class="task-item" data-task-id="1">
            <div class="task-item__main-container">
                <div class="task-item__main-content">
                    <form class="checkbox-form">
                        <input class="checkbox-form__checkbox" type="checkbox" id="task-1">
                        <label for="task-1"></label>
                    </form>
                    <span class="task-item__text">
                        ${taskObj.text}
                    </span>
                </div>
                <button class="task-item__delete-button default-button delete-button">
                    Удалить
                </button>
            </div>
        </div>
`
} 
taskList.append(html)
tasks.forEach(item => {})
// document.body.insertAdjacentHTML('beforeend', html)
