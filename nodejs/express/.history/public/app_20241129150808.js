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

        // Вычисляем ширину <p>
        const computedStyle = window.getComputedStyle(titleElement);
        const width = computedStyle.width;

        // Создаем инпут
        const input = document.createElement('input');
        input.type = 'text';
        input.className = 'form-control'; // Используем стили Bootstrap
        input.value = titleElement.textContent.trim(); // Предзаполняем текстом
        input.style.width = width; // Устанавливаем ширину, равную ширине <p>

        // Заменяем <p> на <input>
        listItem.replaceChild(input, titleElement);

        // Фокусируемся на инпуте
        input.focus();

        // Обработчик для сохранения изменений
        input.addEventListener('blur', () => {
            const newTitle = input.value.trim();

            // Создаем обратно <p> с обновленным текстом
            const newTitleElement = document.createElement('p');
            newTitleElement.className = 'list-title';
            newTitleElement.textContent = newTitle || titleElement.textContent; // Если пусто, оставить старый текст

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