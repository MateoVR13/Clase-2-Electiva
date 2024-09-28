document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe y la página se recargue
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Validación de credenciales
    if (email === 'admin@gmail.com' && password === 'admin') {
        // Si las credenciales son correctas, redirige a la página de registro
        window.location.href = 'register.html';
    } else {
        // Si las credenciales son incorrectas, muestra un mensaje de error
        document.getElementById('error-message').textContent = 'Usuario o contraseña incorrectos';
    }
});
