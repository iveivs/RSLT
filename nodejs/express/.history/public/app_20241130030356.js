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
        const btnBox = listItem.querySelector('.btn_box');

        const titleText = titleElement.textContent.trim();

        // Создаём инпут
        const input = document.createElement('input');
        input.type = 'text';
        input.className = 'form-control flex-grow-1';
        input.value = titleText;

        // Создаём кнопки Save и Cancel
        const saveButton = document.createElement('button');
        saveButton.type = 'button';
        saveButton.className = 'btn btn-success me-2';
        saveButton.textContent = 'Save';

        const cancelButton = document.createElement('button');
        cancelButton.type = 'button';
        cancelButton.className = 'btn btn-secondary';
        cancelButton.textContent = 'Canc';

        // Удаляем кнопки Edit и Remove из btn_box
        const editButton = btnBox.querySelector('[data-type="edit"]');
        const removeButton = btnBox.querySelector('[data-type="remove"]');
        const originalButtons = [editButton, removeButton]; // Для возврата позже
        originalButtons.forEach(button => button.remove());

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
            originalButtons.forEach(button => btnBox.appendChild(button));
            titleElement.style.display = '';
        });

        // Добавляем обработчик для кнопки Cancel
        cancelButton.addEventListener('click', () => {
            // Удаляем инпут и кнопки Save/Cancel
            input.remove();
            saveButton.remove();
            cancelButton.remove();

            // Возвращаем кнопки Edit и Remove
            originalButtons.forEach(button => btnBox.appendChild(button));
            titleElement.style.display = '';
        });

        // Прячем <p> и добавляем инпут перед btn_box
        titleElement.style.display = 'none';
        listItem.insertBefore(input, btnBox);

        // Добавляем кнопки Save и Cancel в btn_box
        btnBox.appendChild(saveButton);
        btnBox.appendChild(cancelButton);

        input.focus();
    }
});

async function remove(id) {
    await fetch(`/${id}`, {
        method: 'DELETE',
    });
}