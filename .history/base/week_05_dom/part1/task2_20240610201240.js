// Задание 2

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
        <div class="task-item" data-task-id=${taskObj.id}>
            <div class="task-item__main-container">
                <div class="task-item__main-content">
                    <form class="checkbox-form">
                        <input class="checkbox-form__checkbox" type="checkbox" id=${taskObj.id}>
                        <label htmlFor=${taskObj.id}></label>
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

document.body.append(taskList)

tasks.forEach(item => {
    taskList.insertAdjacentHTML('beforeend', getHtml(item) )
})
