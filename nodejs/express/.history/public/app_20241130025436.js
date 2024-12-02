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

        // Прячем текущие кнопки
        const editButton = listItem.querySelector('[data-type="edit"]');
        const removeButton = listItem.querySelector('[data-type="remove"]');
        editButton.style.display = 'none';
        removeButton.style.display = 'none';

        // Создаём инпут
        const input = document.createElement('input');
        input.type = 'text';
        input.className = 'form-control';
        input.value = titleText;

        // Создаём кнопку Save
        const saveButton = document.createElement('button');
        saveButton.type = 'button';
        saveButton.className = 'btn btn-success ms-2';
        saveButton.textContent = 'Save';

        // Создаём кнопку Cancel
        const cancelButton = document.createElement('button');
        cancelButton.type = 'button';
        cancelButton.className = 'btn btn-secondary ms-2';
        cancelButton.textContent = 'Cancel';

        // Добавляем обработчик для кнопки Save
        saveButton.addEventListener('click', () => {
            const newTitle = input.value.trim();

            // Обновляем текст в <p>
            titleElement.textContent = newTitle || titleText;

            // Удаляем инпут и кнопки Save/Cancel
            input.remove();
            saveButton.remove();
            cancelButton.remove();

            // Возвращаем кнопки Edit и Remove
            editButton.style.display = '';
            removeButton.style.display = '';
            titleElement.style.display = '';
        });

        // Добавляем обработчик для кнопки Cancel
        cancelButton.addEventListener('click', () => {
            // Удаляем инпут и кнопки Save/Cancel
            input.remove();
            saveButton.remove();
            cancelButton.remove();

            // Возвращаем кнопки Edit и Remove
            editButton.style.display = '';
            removeButton.style.display = '';
            titleElement.style.display = '';
        });

        // Прячем <p> и добавляем инпут
        titleElement.style.display = 'none';
        listItem.querySelector('.flex-grow-1').appendChild(input);

        // Вставляем кнопки Save и Cancel
        input.insertAdjacentElement('afterend', saveButton);
        saveButton.insertAdjacentElement('afterend', cancelButton);

        input.focus();
    }
});

async function remove(id) {
    await fetch(`/${id}`, {
        method: 'DELETE',
    });
}
