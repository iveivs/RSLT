document.addEventListener('click', event => {
    if (event.target.dataset.type === 'remove') {
        const id = event.target.dataset.id;

        remove(id).then(() => {
            event.target.closest('li').remove();
        });
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

        // Создаём кнопку Save
        const confirmButton = document.createElement('button');
        confirmButton.type = 'button';
        confirmButton.className = 'btn btn-success ms-2';
        confirmButton.textContent = 'Save';

        // Обработчик кнопки Save
        confirmButton.addEventListener('click', () => {
            const newTitle = input.value.trim();

            // Обновляем <p> с новым текстом
            titleElement.textContent = newTitle || titleText;

            // Возвращаем видимость <p>
            titleElement.style.display = '';
            input.remove(); // Удаляем инпут
            confirmButton.remove(); // Удаляем кнопку Save
        });

        
        // Прячем <p> и добавляем инпут
        titleElement.style.display = 'none';
        listItem.querySelector('.flex-grow-1').appendChild(input);

        // Добавляем кнопку Save в блок кнопок
        listItem.querySelector('.btn_box').appendChild(confirmButton);

        input.focus();
    }
});

async function remove(id) {
    await fetch(`/${id}`, {
        method: 'DELETE',
    });
}
