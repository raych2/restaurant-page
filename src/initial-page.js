const content = document.getElementById('content');

const renderNavbar = () => {
    const nav = document.createElement('nav');
    let tabList = ['Home', 'Menu', 'Contact'];
    
    //create 'tabs' to access menu and contact pages
    function createButton() {
        for (let i = 0; i < tabList.length; i++) {
            let button = document.createElement('button');
            button.classList.add('tablink');
            button.innerText = tabList[i];
            button.id = tabList[i];
            nav.append(button);
        }
    };

    createButton();

    content.append(nav);
};

const renderInitialPage = () => {
    const restoContent = document.createElement('div');
    const restoName = document.createElement('div');
    const restoDesc = document.createElement('div');
    const burgerImg = document.createElement('img');

    restoContent.classList.add('pageContent');
    restoContent.classList.add('intro');
    restoName.classList.add('rName');
    restoDesc.classList.add('rDesc');
    restoName.innerText = 'The Burger Club';
    restoDesc.innerText = 'The Best Burgers in the Bay Area!';

    burgerImg.src = 'images/burger-pexels-valeria-boltneva-1639565.jpg';
    burgerImg.classList.add('home-burger');
   
    restoContent.append(restoName);
    restoContent.append(restoDesc);
    restoContent.append(burgerImg);
    content.append(restoContent);
};

export { renderNavbar, renderInitialPage };