// document.addEventListener('DOMContentLoaded', function() {
//     const submitButton = document.querySelector('#submitButton');
//     const form = document.querySelector('#clientForm');
//     const successMessage = document.querySelector('#successMessage');

//     if (submitButton && form) {
//         form.addEventListener('submit', function(event) {
//             event.preventDefault(); 

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
    console.log
    if (submitButton && form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); 

            submitButton.disabled = true;
            submitButton.textContent = 'Отправляется...';

            setTimeout(function() {
                successMessage.style.display = 'block';
                form.reset();

                submitButton.disabled = false;
                submitButton.textContent = 'Отправить';
            }, 2000); 
        });
    }
});

