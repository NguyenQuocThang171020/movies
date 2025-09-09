import axios from 'axios';

const countUsers = async () => {
    const apiUrl = import.meta.env.VITE_API_BACKEND_URL;  
    try {
        const res = await axios.get(`${apiUrl}/movies/users/count`);
        if (res.status !== 200) {
            document.getElementById('user-count').innerText = '0';
        } else {
            document.getElementById('user-count').innerText = res.data;
        }
    } catch (error) {
        throw new Error('Login failed: ' + error.message);
    }
};

const fetchAndRenderUsers = async () => {
    const apiUrl = import.meta.env.VITE_API_BACKEND_URL;  
    try {
        const res = await axios.get(`${apiUrl}/movies/users/getAll`);
        if (res.status != 200) {
            document.getElementById('user-list').innerHTML = '<tr><td colspan="5">No users found</td></tr>';
        } else {
            const users = res.data;
            let userRows = `
                <th>
                    <td>ID</td>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Password</td>
                </th>
            `;
            users.forEach(user => {
                userRows += `
                    <tr>
                        <td>${user.id}</td>
                        <td>${user.name}</td>
                        <td>${user.email}</td>
                        <td>${user.password}</td>
                    </tr>
                `;
            });
            document.getElementById('user-list').innerHTML = userRows;
        }
    } catch (error) {
        throw new Error('Login failed: ' + error.message);
    }
};

countUsers();
fetchAndRenderUsers();