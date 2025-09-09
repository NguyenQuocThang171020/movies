import axios from 'axios';

const handleLogin = async (event) => {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const apiUrl = import.meta.env.VITE_API_BACKEND_URL;
    try {
        const res = await axios.post(`${apiUrl}/movies/users/login`, { name: username, password: password });
        if (res.status != 200) {
            document.getElementById('message').innerText = res.data;
        } else {
            window.location.href = '../home/home.html';
        }
    } catch (error) {
        document.getElementById('message').innerText =  error.response.data;
    }
}
document.getElementById('login-form').addEventListener('submit', handleLogin);

// nagative REGISTER button
document.getElementById('register').addEventListener('click', () => {
    window.location.href = '../register/register.html';
});