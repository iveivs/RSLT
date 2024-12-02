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

        // Создаем инпут
        const input = document.createElement('input');
        input.type = 'text';
        input.className = 'form-control';
        input.value = titleElement.textContent; // Предзаполняем текущим текстом

        // Заменяем <p> на <input>
        listItem.replaceChild(input, titleElement);

        // Фокусируемся на инпуте
        input.focus();

        // Добавляем обработчики для сохранения
        input.addEventListener('blur', () => {
            // Создаем обратно <p> с новым текстом
            const newTitleElement = document.createElement('p');
            newTitleElement.className = 'list-title';
            newTitleElement.textContent = input.value;

            // Заменяем <input> обратно на <p>
            listItem.replaceChild(newTitleElement, input);
        });

        // Сохраняем изменения при нажатии Enter
        input.addEventListener('keydown', event => {
            if (event.key === 'Enter') {
                input.blur(); // Это вызовет сохранение через обработчик blur
            }
        });
    }
});


async function remove(id) {
    await fetch(`/${id}`, {
        method: 'DELETE'
    })
}