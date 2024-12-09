// document.addEventListener('DOMContentLoaded', function() {
//     const submitButton = document.querySelector('#submitButton');
//     const form = document.querySelector('#clientForm');
//     const successMessage = document.querySelector('#successMessage');

//     const handleFormSubmit = async (formData) => {
//         submitButton.disabled = true;
//         submitButton.textContent = 'Отправляется...';

//         try {
//             const response = await fetch('/', {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify(Object.fromEntries(formData))
//             });

//             if (!response.ok) {
//                 throw new Error('Ошибка отправки данных на сервер.');
//             }

//             successMessage.style.display = 'block';

//             setTimeout(() => {
//                 successMessage.style.display = 'none';
//             }, 3000);

//             form.reset();
//         } catch (error) {
//             alert(`Ошибка: ${error.message}`);
//         } finally {
//             submitButton.disabled = false;
//             submitButton.textContent = 'Отправить';
//         }
//     };

//     if (submitButton && form) {
//         form.addEventListener('submit', function(event) {
//             event.preventDefault();

//             const formData = new FormData(form);
//             handleFormSubmit(formData);
//         });
//     }
// });

document.addEventListener('DOMContentLoaded', function () {
    const submitButton = document.querySelector('#submitButton');
    const form = document.querySelector('#clientForm');
    const successMessage = document.querySelector('#successMessage');

    const errorMessage = document.createElement('div');
    errorMessage.className = 'alert alert-danger mt-3';
    errorMessage.style.display = 'none';
    form.appendChild(errorMessage);

    const handleFormSubmit = async (formData) => {
        submitButton.disabled = true;
        submitButton.textContent = 'Отправляется...';

        try {
            const response = await fetch('/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(Object.fromEntries(formData)),
            });

            if (!response.ok) {
                throw new Error('Ошибка отправки данных на сервер.');
            }

            successMessage.style.display = 'block';
            errorMessage.style.display = 'none';

            setTimeout(() => {
                successMessage.style.display = 'none';
            }, 3000);

            form.reset();
        } catch (error) {
            errorMessage.textContent = `Ошибка: ${error.message}`;
            errorMessage.style.display = 'block';
        } finally {
            submitButton.disabled = false;
            submitButton.textContent = 'Отправить';
        }
    };

    if (submitButton && form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault();

            const formData = new FormData(form);
            handleFormSubmit(formData);
        });
    }
});
