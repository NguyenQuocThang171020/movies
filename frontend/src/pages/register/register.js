import axios from 'axios';

const handleRegister = async (event) => {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const apiUrl = import.meta.env.VITE_API_BACKEND_URL;
    try {
        const res = await axios.post(`${apiUrl}/movies/users/register`,
            { name: username, password: password, email : email });
        if (res.status != 200) {
            document.getElementById('message').innerText = res.data;
        } else {
            window.location.href = '../login/login.html';
        }
    } catch (error) {
        document.getElementById('message').innerText = error.response.data;
    }
}

document.getElementById('register-form').addEventListener('submit', handleRegister);
