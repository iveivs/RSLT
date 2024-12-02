console.log('Hello from app');
let isEdit = false

// document.addEventListener('click', event => {
//     if (event.target.dataset.type === 'remove') {
//         const id = event.target.dataset.id

//         remove(id).then(() => {
//             event.target.closest('li').remove()
//         })
//     }

//     if(event.target.dataset.type === 'edit') {
//         console.log('CLICK EDIT');
//         let noteTitle = event.target.closest('list-title')
//         // console.log('noteTitle', noteTitle);
//         // noteTitle.textContent = ''
//     }
// })

document.addEventListener('click', event => {
    if (event.target.dataset.type === 'remove') {
        const id = event.target.dataset.id

        remove(id).then(() => {
            event.target.closest('li').remove()
        })
    }
    if (event.target.dataset.type === 'edit') {
        const listItem = event.target.closest('li');
        const titleElement = listItem.querySelector('.list-title');

        const titleText = titleElement.textContent.trim();

        // Создаём инпут
        const input = document.createElement('input');
        input.type = 'text';
        input.className = 'form-control'; // Bootstrap класс для оформления
        input.value = titleText; // Устанавливаем текущий текст

        const confirmButton = document.createElement('button')
        confirmButton.type = 'submit'
        input.className = 'btn btn-success'

        // Обработчик сохранения изменений
        input.addEventListener('blur', () => {
            const newTitle = input.value.trim();

            // Обновляем <p> с новым текстом
            titleElement.textContent = newTitle || titleText;

            // Возвращаем видимость <p>
            titleElement.style.display = '';
            input.remove(); // Удаляем инпут
        });

        // Сохраняем изменения по Enter
        input.addEventListener('keydown', event => {
            if (event.key === 'Enter') {
                input.blur(); // Вызывает сохранение
            }
        });

        // Прячем <p> и добавляем инпут
        titleElement.style.display = 'none';
        listItem.querySelector('.flex-grow-1').appendChild(input);

        input.focus();
    }
});


async function remove(id) {
    await fetch(`/${id}`, {
        method: 'DELETE'
    })
}