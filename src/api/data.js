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

export async function getItems() {
    return await api.get(host + '/data/cars?sortBy=_createdOn%20desc');
}

export async function getItemsById(id) {
    return await api.get(host + '/data/cars/' + id);
}

export async function createItem(data) {
    return await api.post(host + '/data/cars', data);
}

export async function editItem(id, data) {
    return await api.put(host + '/data/cars/' + id, data);
}

export async function deleteItem(id) {
    return await api.del(host + '/data/cars/' + id);
}
