// Simple form validation
function validateForm(formId) {
    const form = document.getElementById(formId);
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const inputs = form.querySelectorAll('input[required]');
            let valid = true;
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    valid = false;
                    input.style.borderColor = 'red';
                } else {
                    input.style.borderColor = '#ccc';
                }
            });
            if (valid) {
                alert('Form submitted successfully!');
                // Here you can add AJAX or redirect logic
            } else {
                alert('Please fill in all required fields.');
            }
        });
    }
}

// Apply validation to forms
document.addEventListener('DOMContentLoaded', function() {
    validateForm('loginForm');
    validateForm('registerForm');
    validateForm('forgotForm');
});