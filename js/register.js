document.getElementById('switchToRegister').addEventListener('click', () => {
    document.querySelector('.login-form').style.display = 'none';
    document.querySelector('.register-form').style.display = 'flex';
});

document.getElementById('switchToLogin').addEventListener('click', () => {
    document.querySelector('.login-form').style.display = 'flex';
    document.querySelector('.register-form').style.display = 'none';
});

document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('registerUsername').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;

    fetch('/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password })
    })
    .then(response => response.json())
    .then(data => alert(data.message));
});

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    fetch('/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    })
    .then(response => response.json())
    .then(data => alert(data.message));
});
