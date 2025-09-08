const buttonLogin = document.getElementById('login-page');

if (buttonLogin) {
    buttonLogin.addEventListener('click', () => {
        window.location.href = '../login/login.html';
    });
}
