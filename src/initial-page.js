const renderInitialPage = () => {

    const content = document.getElementById('content');
    const nav = document.createElement('nav');
    const restoIntro = document.createElement('div');
    const restoName = document.createElement('div');
    const restoDesc = document.createElement('div');
    const burgerImg = document.createElement('img');
    let tabList = ['Home', 'Menu', 'Contact'];
    
    //create tabs to access menu and contact pages
    function createButton() {
        for (let i = 0; i < tabList.length; i++) {
            let button = document.createElement('button');
            button.classList.add('tablink');
            button.innerText = tabList[i];
            nav.append(button);
        }
    };

    createButton();

    restoIntro.classList.add('intro');
    restoName.classList.add('rName');
    restoDesc.classList.add('rDesc');
    restoName.innerText = 'The Burger Club';
    restoDesc.innerText = 'The Best Burgers in the Bay Area!';

    burgerImg.src = 'images/burger-pexels-valeria-boltneva-1639565.jpg';
    burgerImg.classList.add('home-burger');
   
    content.append(nav);
    restoIntro.append(restoName);
    restoIntro.append(restoDesc);
    restoIntro.append(burgerImg);
    content.append(restoIntro);
};

export default renderInitialPage