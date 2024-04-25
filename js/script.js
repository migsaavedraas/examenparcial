document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const errorMessage = document.getElementById('error-message');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const userType = document.getElementById('user-type').value;

        // Verificar el tipo de usuario
        if (userType === 'usuario') {
            // Verificar las credenciales del usuario
            if (username === 'usuario' && password === 'contraseña') {
                // Guardar sesión de inicio de sesión en LocalStorage
                localStorage.setItem('SESION', JSON.stringify({ username: username, userType: userType }));
                // Redirigir a la página de inicio después de iniciar sesión
                window.location.href = 'dashboard_usuario.html';
            } else {
                // Mostrar mensaje de error para usuario
                errorMessage.textContent = 'Usuario o contraseña incorrectos';
            }
        } else if (userType === 'conductor') {
            // Verificar las credenciales del conductor
            if (username === 'conductor' && password === 'contraseña') {
                // Guardar sesión de inicio de sesión en LocalStorage
                localStorage.setItem('SESION', JSON.stringify({ username: username, userType: userType }));
                // Redirigir a la página de inicio después de iniciar sesión
                window.location.href = 'dashboard_conductor.html';
            } else {
                // Mostrar mensaje de error para conductor
                errorMessage.textContent = 'Usuario o contraseña incorrectos';
            }
        }
    });
});
