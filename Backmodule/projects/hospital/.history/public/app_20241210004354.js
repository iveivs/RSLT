// document.addEventListener('DOMContentLoaded', function() {
//     const submitButton = document.querySelector('#submitButton');
//     const form = document.querySelector('#clientForm');
//     const successMessage = document.querySelector('#successMessage');

//     if (submitButton && form) {
//         form.addEventListener('submit', function(event) {
//             // event.preventDefault(); 
            
//             submitButton.disabled = true;
//             submitButton.textContent = 'Отправляется...';

//             setTimeout(function() {
//                 successMessage.style.display = 'block';
//                 form.reset();

//                 submitButton.disabled = false;
//                 submitButton.textContent = 'Отправить';
//             }, 2000); 
//         });
//     }
// });
document.addEventListener('DOMContentLoaded', function() {
    const submitButton = document.querySelector('#submitButton');
    const form = document.querySelector('#clientForm');
    const successMessage = document.querySelector('#successMessage');

    const handleFormSubmit = async (formData) => {
        submitButton.disabled = true;
        submitButton.textContent = 'Отправляется...';

        try {
            const response = await fetch('/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(Object.fromEntries(formData))
            });

            if (!response.ok) {
                throw new Error('Ошибка отправки данных на сервер.');
            }

            successMessage.style.display = 'block';

            setTimeout(() => {
                successMessage.style.display = 'none';
            }, 3000);

            form.reset();
        } catch (error) {
            alert(`Ошибка: ${error.message}`);
        } finally {
            submitButton.disabled = false;
            submitButton.textContent = 'Отправить';
        }
    };

    if (submitButton && form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();

            const formData = new FormData(form);
            handleFormSubmit(formData);
        });
    }
});

