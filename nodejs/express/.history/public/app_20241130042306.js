// document.addEventListener('click', event => {
//     if (event.target.dataset.type === 'remove') {
//         const id = event.target.dataset.id;

//         remove(id).then(() => {
//             event.target.closest('li').remove();
//         });
//     }
    
//     if (event.target.dataset.type === 'edit') {
//         const listItem = event.target.closest('li');
//         const titleElement = listItem.querySelector('.list-title');
//         const btnBox = listItem.querySelector('.btn_box');

//         const titleText = titleElement.textContent.trim();
//         const noteId = listItem.dataset.id;  // Получаем id заметки

//         // Убедитесь, что noteId не undefined
//         if (!noteId) {
//             console.error("Ошибка: id заметки не найдено!");
//             return;
//         }

//         // Создаём инпут
//         const input = document.createElement('input');
//         input.type = 'text';
//         input.className = 'form-control flex-grow-1';
//         input.value = titleText;

//         // Создаём кнопки Save и Cancel
//         const saveButton = document.createElement('button');
//         saveButton.type = 'button';
//         saveButton.className = 'btn btn-success me-2';
//         saveButton.textContent = 'Save';

//         const cancelButton = document.createElement('button');
//         cancelButton.type = 'button';
//         cancelButton.className = 'btn btn-secondary';
//         cancelButton.textContent = 'Cancel';

//         // Удаляем кнопки Edit и Remove из btn_box
//         const editButton = btnBox.querySelector('[data-type="edit"]');
//         const removeButton = btnBox.querySelector('[data-type="remove"]');
//         const originalButtons = [editButton, removeButton];
//         originalButtons.forEach(button => button.remove());

//         // Функция сохранения изменений
//         const saveChanges = async () => {
//             const newTitle = input.value.trim();

//             if (newTitle) {
//                 await addEditedNotes(noteId, newTitle);  // Используем noteId
//             }

//             // Обновляем текст в <p>
//             titleElement.textContent = newTitle || titleText;

//             // Удаляем инпут и кнопки Save/Cancel
//             input.remove();
//             saveButton.remove();
//             cancelButton.remove();

//             // Возвращаем кнопки Edit и Remove
//             originalButtons.forEach(button => btnBox.appendChild(button));
//             titleElement.style.display = '';
//         };

//         // Добавляем обработчик для кнопки Save
//         saveButton.addEventListener('click', saveChanges);

//         // Добавляем обработчик для кнопки Cancel
//         cancelButton.addEventListener('click', () => {
//             // Удаляем инпут и кнопки Save/Cancel
//             input.remove();
//             saveButton.remove();
//             cancelButton.remove();

//             // Возвращаем кнопки Edit и Remove
//             originalButtons.forEach(button => btnBox.appendChild(button));
//             titleElement.style.display = '';
//         });

//         // Сохранение по клавише Enter
//         input.addEventListener('keydown', event => {
//             if (event.key === 'Enter') {
//                 saveChanges();
//             }
//         });

//         // Прячем <p> и добавляем инпут перед btn_box
//         titleElement.style.display = 'none';
//         listItem.insertBefore(input, btnBox);

//         // Добавляем кнопки Save и Cancel в btn_box
//         btnBox.appendChild(saveButton);
//         btnBox.appendChild(cancelButton);

//         // Убедитесь, что btn_box имеет класс d-flex
//         btnBox.classList.add('d-flex', 'align-items-center', 'gap-2');

//         input.focus();
//     }
// });

// // Функция для удаления заметки
// async function remove(id) {
//     await fetch(`/${id}`, {
//         method: 'DELETE',
//     });
// }

// // Функция для отправки отредактированной заметки на сервер
// async function addEditedNotes(id, title) {
//     await fetch(`/${id}`, {
//         method: 'PUT',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ title }),
//     });
// }