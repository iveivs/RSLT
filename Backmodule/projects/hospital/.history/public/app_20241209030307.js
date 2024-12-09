// document.addEventListener('DOMContentLoaded', () => {
//     const form = document.getElementById('clientForm');
//     const submitButton = document.getElementById('submitButton');
//     const successMessage = document.getElementById('successMessage');
//     console.log("TESTING")

//     form.addEventListener('submit', function(event) {
//         event.preventDefault(); 

//         submitButton.disabled = true;
//         successMessage.style.display = 'block';

//         document.getElementById('userNameInfo').value = '';
//         document.getElementById('phone').value = '';
//         document.getElementById('description').value = '';

//         setTimeout(() => {
//             successMessage.style.display = 'none';
//             submitButton.disabled = false;
//         }, 3000); 
//     });
// });

document.addEventListener('DOMContentLoaded', function() {
    const submitButton = document.querySelector('#submitButton');
    const form = document.querySelector('#clientForm');
    const successMessage = document.querySelector('#successMessage');

    if (submitButton && form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); 

            submitButton.disabled = true;
            submitButton.textContent = 'Отправляется...';

            // Симулируем успешную отправку данных
            setTimeout(function() {
                // Показываем сообщение об успешной отправке
                successMessage.style.display = 'block';

                // Очищаем поля формы
                form.reset();

                // Возвращаем кнопку в исходное состояние
                submitButton.disabled = false;
                submitButton.textContent = 'Отправить';
            }, 2000); 
        });
    }
});

