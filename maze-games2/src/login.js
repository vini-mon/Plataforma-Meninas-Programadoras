const form = document.getElementById('loginForm');

form.addEventListener('submit', async (e) => {

    e.preventDefault();
    const email = form.email.value;
    const password = form.password.value;

    fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    })
    .then(response => {
        if (!response.ok)  
{
            throw new Error('Erro na requisição');
        }
        return response.json();
    })
    .then(result => {
        if (result.success) {
            window.location.href = 'index.html';
        } else {
            document.getElementById('error-message').innerText = result.message;
        }
    })
    .catch(error => {
        console.error('Erro:', error);
        document.getElementById('error-message').innerText = 'Ocorreu um erro inesperado. Tente novamente mais tarde.';
    });
    
});