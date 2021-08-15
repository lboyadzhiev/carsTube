import page from '../node_modules/page/page.mjs';

import { renderMiddleware } from './utilites.js';
import { setUserNav } from './utilites.js';
import { logoutApi } from './utilites.js';

import { createPage } from './views/create.js';
import { detailsPage } from './views/details.js';
import { editPage } from './views/edit.js';
import { homePage } from './views/home.js';
import { catalogPage } from './views/catalog.js';
import { loginPage } from './views/login.js';
import { registerPage } from './views/register.js';
import { myPage } from './views/myCatalog.js';

import * as api from './api/data.js';

window.api = api;

page('/', renderMiddleware, homePage);
page('/home', renderMiddleware, homePage);
page('/register', renderMiddleware, registerPage);
page('/login', renderMiddleware, loginPage);
page('/catalog', renderMiddleware, catalogPage);
page('/create', renderMiddleware, createPage);
page('/details/:id', renderMiddleware, detailsPage);
page('/edit', renderMiddleware, editPage);
page('/my-list', renderMiddleware, myPage);

document.getElementById('logoutBtn').addEventListener('click', logoutApi);

setUserNav();
page.start();
