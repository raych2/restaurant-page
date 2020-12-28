import { renderNavbar, renderInitialPage } from './initial-page';
import renderMenu from './modules/menu';

const content = document.getElementById('content');

renderNavbar();
renderInitialPage();

const homePage = document.getElementById('Home');
const menuPage = document.getElementById('Menu');
const contactPage = document.getElementById('Contact');

function loadMenu() {
    content.innerHTML = '';
    renderNavbar();
    renderMenu();
}

menuPage.addEventListener('click', loadMenu);
