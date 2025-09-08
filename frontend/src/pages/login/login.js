import axios from 'axios';
import User from '../../models/user/user.js';

const handleLogin = async (event) => {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const user = new User();
    user.setUser({ name: username, password: password });
    const apiUrl = import.meta.env.VITE_API_BACKEND_URL;
    try {
        const res = await axios.post(`${apiUrl}/movies/users/login`, user);
        if (res.status === 200) {
            window.location.href = '../home/home.html';
        } else {
            alert('Login failed. Please check your credentials and try again.');
        }
    } catch (error) {
        alert('An error occurred during login. Please try again later.');
    }
}

document.getElementById('login-form').addEventListener('submit', handleLogin);