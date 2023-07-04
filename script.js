document.addEventListener("DOMContentLoaded", function () {
    const passwordInput = document.querySelector('input[type="password"]');
    const togglePasswordIcon = document.querySelector('.toggle-password');
  
    togglePasswordIcon.addEventListener('click', function () {
      if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        togglePasswordIcon.classList.remove('fa-eye-slash');
        togglePasswordIcon.classList.add('fa-eye');
      } else {
        passwordInput.type = 'password';
        togglePasswordIcon.classList.remove('fa-eye');
        togglePasswordIcon.classList.add('fa-eye-slash');
      }
    });
  
    const form = document.querySelector('form');
    form.addEventListener('submit', function (event) {
      const inputs = form.querySelectorAll('input[required]');
      inputs.forEach(function (input) {
        if (input.value.trim() === '') {
          input.parentNode.classList.add('error');
          event.preventDefault();
        } else {
          input.parentNode.classList.remove('error');
        }
      });
    });
  
    const formGroups = document.querySelectorAll('.form-group');
  
    formGroups.forEach(function (formGroup) {
      const input = formGroup.querySelector('input');
  
      input.addEventListener('focus', function () {
        formGroup.classList.add('active');
      });
  
      input.addEventListener('blur', function () {
        if (input.value === '') {
          formGroup.classList.remove('active');
        }
      });
    });
  });
  