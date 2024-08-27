document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Captura os valores dos campos de entrada
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simulação de validação de login (use validação real no back-end)
    if (username === "teste" && password === "123") {
        alert('Login bem-sucedido!');
        window.location.href = 'home.html'; // Redireciona para a Página 1 após o login
    } else {
        alert('Usuário ou senha incorretos. Tente novamente.');
    }
});

// Adicionando funcionalidade básica aos botões de login social
/*const facebookButton = document.querySelector('.btn-social.facebook');
const googleButton = document.querySelector('.btn-social.google');

facebookButton.addEventListener('click', function() {
    alert('Login com Facebook ainda não implementado.');
});

googleButton.addEventListener('click', function() {
    alert('Login com Google ainda não implementado.');
}); */