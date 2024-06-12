let tasks = [
    {
        id: "1138465078061",
        completed: false,
        text: "Посмотреть новый урок по JavaScript"
    },
    {
        id: "1138465078062",
        completed: false,
        text: "Выполнить тест после урока"
    },
    {
        id: "1138465078063",
        completed: false,
        text: "Выполнить ДЗ после урока"
    }
];

const createTaskItem = (taskId, taskText) => {
    const taskItem = document.createElement("div")
    taskItem.className = "task-item"
    taskItem.dataset.taskId = taskId

    const taskItemMainContainer = document.createElement("div")
    taskItemMainContainer.className = "task-item__main-container"

    const taskItemMainContent = document.createElement("div")
    taskItemMainContent.className = "task-item__main-content"

    taskItem.append(taskItemMainContainer)
    taskItemMainContainer.append(taskItemMainContent)

    const checkboxForm = document.createElement("form")
    checkboxForm.className = "checkbox-form"

    const inputCheckbox = document.createElement("input")
    inputCheckbox.type = "checkbox"
    inputCheckbox.className = "checkbox-form__checkbox"
    const inputId = `task-${taskId}`
    inputCheckbox.id = inputId

    const labelCheckbox = document.createElement("label")
    labelCheckbox.htmlFor = inputId

    const taskItemText = document.createElement("span")
    taskItemText.className = "task-item__text"
    taskItemText.innerText = taskText

    const deleteButton = document.createElement("button")
    deleteButton.className =
        "task-item__delete-button default-button delete-button"
    deleteButton.innerText = "Удалить";

    taskItemMainContent.append(checkboxForm, taskItemText)
    checkboxForm.append(inputCheckbox, labelCheckbox)
    taskItemMainContainer.append(deleteButton)

    return taskItem
};

const tasksListContainer = document.querySelector(".tasks-list")
tasks.forEach((task) => {
    const taskItem = createTaskItem(task.id, task.text)
    tasksListContainer.append(taskItem);
});

const form = document.querySelector('.create-task-block')
const input = document.querySelector('.create-task-block__input')
input.addEventListener('click', (event) => {
    event.target.value = ''
    if(document.querySelector('.error-message-block')){
        document.querySelector('.error-message-block').remove()
    }
})

// дообавление задачи в список
form.addEventListener("submit", (event) => {
    event.preventDefault()
    // let textToAdd = event.target.taskName.value // ещё один вариант забрать из инпута
    let textToAdd = input.value
    if(document.querySelector('.error-message-block')){
        document.querySelector('.error-message-block').remove()
    }

    const errorElem = document.createElement('span')
    errorElem.className = 'error-message-block'

    if(textToAdd === ''){
        errorElem.textContent = 'Название задачи не должно быть пустым'
        form.append(errorElem)
        return
    }
    if(tasks.some(item => item.text === textToAdd)){
        errorElem.textContent = 'Задача с таким названием уже существует'
        form.append(errorElem)
        return
    }
    console.log(tasks);

    let curTask = {
        id: `${Date.now()}`,
        completed: false,
        text: textToAdd
    }
    tasks = [...tasks,
        curTask
    ]
    const curTaskItem = createTaskItem(curTask.id, curTask.text)
    tasksListContainer.prepend(curTaskItem)
    input.value = ''
    input.focus()
});

// Задание #3
// Модальное окно

const modalHtml = `<div class="modal-overlay modal-overlay_hidden">
                        <div class="delete-modal">
                            <h3 class="delete-modal__question">
                                Вы действительно хотите удалить эту задачу?
                            </h3>
                            <div class="delete-modal__buttons">
                                <button class="delete-modal__button delete-modal__cancel-button">
                                    Отмена
                                </button>
                                <button class="delete-modal__button delete-modal__confirm-button">
                                    Удалить
                                </button>
                            </div>
                        </div>
                    </div>
                    `

const modalWindow = document.createElement('div')
modalWindow.className = 'modal'
modalWindow.innerHTML = modalHtml
document.body.prepend(modalWindow)

let curTaskId = ''
// функционал открытия модального окна
tasksListContainer.addEventListener('click', (e) => {
    // console.log(e.target);
    const { target } = e
    // console.log(target.closest('.task-item'));
    if(target.className.includes('task-item__delete-button') ){
        modalWindow.children[0].classList.toggle('modal-overlay_hidden')
        curTaskId = target.closest('.task-item').dataset.taskId
        // console.log(typeof target.closest('.task-item').dataset.taskId);

    }
})

// const cancelModalBtns = document.querySelector('.delete-modal__button')

modalWindow.addEventListener('click', e =>{
    const { target } = e
    if(target.classList.contains('delete-modal__cancel-button')){
        modalWindow.children[0].classList.add('modal-overlay_hidden')
    }
    if(target.classList.contains('delete-modal__confirm-button')){

        tasks = tasks.filter(item => item.id !==)
        modalWindow.children[0].classList.add('modal-overlay_hidden')
    }
})



