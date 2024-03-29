import { baseUrl } from "../constants";

const login = async (userData) => {
    const response = await fetch(`${baseUrl}/auth/login/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    });

    const data = await response.json();

    localStorage.setItem('user', JSON.stringify(data));

    if (!response.ok) {
        throw new Error(data);
    }

    return data;
};

const logout = async () => {
    const token = JSON.parse(localStorage.getItem('user')).token;

    const response = await fetch(`${baseUrl}/auth/logout/`, {
        method: 'POST',
        headers: {
            'Authorization': `Token ${token}`
        }
    });

    if (!response.ok) {
        const data = await response.json();
        throw new Error(data);
    }
    
    localStorage.removeItem('user');

    return 'success';
};

export const authService = { login, logout };