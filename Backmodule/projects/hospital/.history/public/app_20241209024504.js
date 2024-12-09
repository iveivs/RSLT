document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('clientForm');
    const submitButton = document.getElementById('submitButton');
    const successMessage = document.getElementById('successMessage');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

        submitButton.disabled = true;
        successMessage.style.display = 'block';

        // Очистка полей формы
        document.getElementById('userNameInfo').value = '';
        document.getElementById('phone').value = '';
        document.getElementById('description').value = '';

        // После успешной отправки формы (через setTimeout или реальную успешную отправку)
        setTimeout(() => {
            // Можно убрать сообщение и снова включить кнопку
            successMessage.style.display = 'none';
            submitButton.disabled = false;
        }, 3000); // Примерное время для показа успешного сообщения
    });
});
