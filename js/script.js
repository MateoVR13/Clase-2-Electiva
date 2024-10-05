document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

s
    if (email === 'admin@gmail.com' && password === 'admin') {

        window.location.href = 'register.html';
    } else {

        document.getElementById('error-message').textContent = 'Usuario o contraseña incorrectos';
    }
});