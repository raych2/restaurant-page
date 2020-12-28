import { renderNavbar, renderInitialPage } from './initial-page';
import renderMenu from './modules/menu';
import renderContact from './modules/contact';

const content = document.getElementById('content');

renderNavbar();
renderInitialPage();

const homePage = document.getElementById('Home');
const menuPage = document.getElementById('Menu');
const contactPage = document.getElementById('Contact');

function loadHome(e) {
    content.innerHTML = '';
    renderNavbar();
    renderInitialPage();
}
function loadMenu(e) {
    content.innerHTML = '';
    renderNavbar();
    renderMenu();
}

function loadContact(e) {
    content.innerHTML = '';
    renderNavbar();
    renderContact();
}

homePage.addEventListener('click', loadHome);
menuPage.addEventListener('click', loadMenu);
contactPage.addEventListener('click', loadContact);