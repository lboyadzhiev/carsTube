//@ts-check

import * as api from './api.js';
const host = 'http://localhost:3030';
api.settings.host = host;

export async function register(username, password) {
    const result = await api.post(host + '/users/register', {
        username,
        password,
    });

    sessionStorage.setItem('username', result.username);
    sessionStorage.setItem('authToken', result.accessToken);
    sessionStorage.setItem('userId', result._id);

    return result;
}

export async function login(username, password) {
    const result = await api.post(host + '/users/login', { username, password });

    sessionStorage.setItem('username', result.username);
    sessionStorage.setItem('authToken', result.accessToken);
    sessionStorage.setItem('userId', result._id);

    return result;
}

export async function logout() {
    const result = await api.get(host + '/users/logout');

    sessionStorage.removeItem('username');
    sessionStorage.removeItem('authToken');
    sessionStorage.removeItem('userId');

    return result;
}
