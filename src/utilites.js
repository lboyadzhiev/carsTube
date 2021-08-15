import page from '../node_modules/page/page.mjs';
import { render } from '../node_modules/lit-html/lit-html.js';
import { logout } from './api/data.js';

export function getOptions(method = 'get', body) {
    const options = {
        method,
        headers: {},
    };

    const token = sessionStorage.getItem('authToken');

    if (token != null) {
        options.headers['X-Authorization'] = token;
    }

    if (body) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(body);
    }

    return options;
}

export function renderMiddleware(ctx, next) {
    const main = document.getElementById('site-content');
    ctx.render = (content) => render(content, main);
    ctx.setUserNav = setUserNav;

    next();
}

export function setUserNav() {
    const username = sessionStorage.getItem('username');

    if (username != null) {
        document.querySelector('div#profile > a').textContent = `Welcome ${username}`;
        document.getElementById('guest').style.display = 'none';
        document.getElementById('profile').style.display = 'block';
    } else {
        document.getElementById('guest').style.display = 'block';
        document.getElementById('profile').style.display = 'none';
    }
}

export async function logoutApi() {
    await logout();

    setUserNav();
    page.redirect('/');
}
