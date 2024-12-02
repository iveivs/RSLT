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
        const noteId = listItem.dataset.id;

        
        if (!noteId) {
            console.error("Ошибка: id заметки не найдено!");
            return;
        }

        
        const input = document.createElement('input');
        input.type = 'text';
        input.className = 'form-control flex-grow-1';
        input.value = titleText;

        
        const saveButton = document.createElement('button');
        saveButton.type = 'button';
        saveButton.className = 'btn btn-success me-2';
        saveButton.textContent = 'Save';

        const cancelButton = document.createElement('button');
        cancelButton.type = 'button';
        cancelButton.className = 'btn btn-secondary';
        cancelButton.textContent = 'Cancel';

        const editButton = btnBox.querySelector('[data-type="edit"]');
        const removeButton = btnBox.querySelector('[data-type="remove"]');
        const originalButtons = [editButton, removeButton];
        originalButtons.forEach(button => button.remove());

        const saveChanges = async () => {
            const newTitle = input.value.trim();

            if (newTitle) {
                await addEditedNotes(noteId, newTitle);  
            }

            titleElement.textContent = newTitle || titleText;

            input.remove();
            saveButton.remove();
            cancelButton.remove();

            originalButtons.forEach(button => btnBox.appendChild(button));
            titleElement.style.display = '';
        };

        saveButton.addEventListener('click', saveChanges);

        cancelButton.addEventListener('click', () => {
            input.remove();
            saveButton.remove();
            cancelButton.remove();

            originalButtons.forEach(button => btnBox.appendChild(button));
            titleElement.style.display = '';
        });

        input.addEventListener('keydown', event => {
            if (event.key === 'Enter') {
                saveChanges();
            }
        });

        titleElement.style.display = 'none';
        listItem.insertBefore(input, btnBox);

        btnBox.appendChild(saveButton);
        btnBox.appendChild(cancelButton);

        // Убедитесь, что btn_box имеет класс d-flex
        btnBox.classList.add('d-flex', 'align-items-center', 'gap-2');

        input.focus();
    }
});

// Функция для удаления заметки
async function remove(id) {
    await fetch(`/${id}`, {
        method: 'DELETE',
    });
}

// Функция для отправки отредактированной заметки на сервер
async function addEditedNotes(id, title) {
    await fetch(`/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title }),
    });
}