document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('clientForm');
    const submitButton = document.getElementById('submitButton');
    const successMessage = document.getElementById('successMessage');
    c

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

        submitButton.disabled = true;
        successMessage.style.display = 'block';

        document.getElementById('userNameInfo').value = '';
        document.getElementById('phone').value = '';
        document.getElementById('description').value = '';

        setTimeout(() => {
            successMessage.style.display = 'none';
            submitButton.disabled = false;
        }, 3000); 
    });
});
