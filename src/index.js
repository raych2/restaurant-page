import { renderNavbar, renderInitialPage } from './initial-page';
import renderMenu from './modules/menu';
import renderContact from './modules/contact';

const content = document.getElementById('content');

//load initial page
renderNavbar();
renderInitialPage();

function loadPage(e) {
    if(e.target.id === 'Menu') {
        content.innerHTML = '';
        renderNavbar();
        renderMenu();
    } else if (e.target.id === 'Contact') {
        content.innerHTML = '';
        renderNavbar();
        renderContact();
    } else {
        content.innerHTML = '';
        renderNavbar();
        renderInitialPage();
    }
}
document.addEventListener('click', loadPage);