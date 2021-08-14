import page from '../node_modules/page/page.mjs';
import { createPage } from './views/create.js';
import { detailsPage } from './views/details.js';
import { editPage } from './views/edit.js';
import { homePage } from './views/home.js';
import { catalogPage } from './views/catalog.js';
import { loginPage } from './views/login.js';
import { registerPage } from './views/register.js';
import { myPage } from './views/myCatalog.js';

page('/home', homePage);
page('/register', registerPage);
page('/login', loginPage);
page('/catalog', catalogPage);
page('/create', createPage);
page('/details', detailsPage);
page('/edit', editPage);
page('/my-list', myPage);

page.start();
