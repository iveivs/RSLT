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
    if (event.target.dataset.type === 'edit') {
        const listItem = event.target.closest('li');
        const titleElement = listItem.querySelector('.list-title');

        // Получаем текст параграфа
        const titleText = titleElement.textContent.trim();

        // Создаем инпут
        const input = document.createElement('input');
        input.type = 'text';
        input.className = 'form-control'; // Используем стили Bootstrap
        input.value = titleText; // Устанавливаем значение инпута
        input.style.width = `${titleElement.offsetWidth}px`; // Устанавливаем ширину, соответствующую <p>

        // Заменяем <p> на <input>
        listItem.replaceChild(input, titleElement);

        // Фокусируемся на инпуте
        input.focus();
        input.setSelectionRange(titleText.length, titleText.length); // Устанавливаем курсор в конец текста

        // Обработчик для сохранения изменений
        input.addEventListener('blur', () => {
            const newTitle = input.value.trim();

            // Создаем обратно <p> с обновленным текстом
            const newTitleElement = document.createElement('p');
            newTitleElement.className = 'list-title';
            newTitleElement.textContent = newTitle || titleText; // Если пусто, оставить старый текст

            // Заменяем <input> обратно на <p>
            listItem.replaceChild(newTitleElement, input);
        });

        // Сохраняем изменения при нажатии Enter
        input.addEventListener('keydown', event => {
            if (event.key === 'Enter') {
                input.blur(); // Вызывает сохранение через blur
            }
        });
    }
});


async function remove(id) {
    await fetch(`/${id}`, {
        method: 'DELETE'
    })
}