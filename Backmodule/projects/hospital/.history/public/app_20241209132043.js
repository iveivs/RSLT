document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('#clientForm'); // Форма записи к врачу
    const submitButton = document.querySelector('#submitButton'); // Кнопка отправки
    const successMessage = document.querySelector('#successMessage'); // Уведомление об успехе

    if (form && submitButton) {
        form.addEventListener('submit', async function (event) {
            event.preventDefault(); // Отключаем стандартное поведение формы

            // Блокируем кнопку отправки
            submitButton.disabled = true;
            submitButton.textContent = 'Отправляется...';

            // Собираем данные формы
            const formData = new FormData(form);
            const payload = Object.fromEntries(formData.entries());

            try {
                // Отправляем запрос на сервер
                const response = await fetch('/', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload),
                });

                if (response.ok) {
                    // Показываем сообщение об успехе
                    successMessage.style.display = 'block';
                    successMessage.textContent = 'Заявка успешно отправлена!';

                    // Очищаем форму
                    form.reset();
                } else {
                    throw new Error('Ошибка при отправке данных');
                }
            } catch (error) {
                console.error('Ошибка:', error.message);
                alert('Не удалось отправить данные. Попробуйте позже.');
            } finally {
                // Разблокируем кнопку
                submitButton.disabled = false;
                submitButton.textContent = 'Отправить';
            }
        });
    }
});

