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
})

form.addEventListener("submit", (event) => {
    event.preventDefault()
    // let textToAdd = event.target.taskName.value // ещё один вариант забрать из инпута
    let textToAdd = input.value

    const errorElem = document.createElement('span')
    errorElem.className = '.error-message-block'
    
    if(textToAdd === '' || tasks.some(item => item.text === textToAdd)){
        console.log('FIND');
        

    }
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