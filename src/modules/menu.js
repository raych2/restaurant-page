const renderMenu = () => {
    const content = document.getElementById('content');
    const menuContent = document.createElement('div');
    const menuTitle = document.createElement('div');
    const burgerSection = document.createElement('div');
    const sideSection = document.createElement('div');
    const drinkSection = document.createElement('div');
    const mainList = document.createElement('div');
    const sideList = document.createElement('div');
    const drinkList = document.createElement('div');
    let mainObj = {
        'The Burger Club Standard': '$10',
        'Old School Burger': '$8',
        'Western Bacon Cheeseburger': '$12',
        'Veggie Burger': '$10'
    }
    let sideObj = {
        'Fries': '$3',
        'Onion Rings': '$4'
    }
    let drinkObj = {
        'Soda': '$3',
        'Beer': '$8'
    }

    menuTitle.classList.add('menu');
    menuTitle.innerText = 'Menu';
    burgerSection.classList.add('b-section');
    burgerSection.innerText = 'Burgers';
    sideSection.classList.add('s-section');
    sideSection.innerText = 'Sides';
    drinkSection.classList.add('d-section');
    drinkSection.innerText = 'Drinks';
    
    function createMenuItem(obj, type, section) {
        for(let item in obj) {
            const itemBox = document.createElement('div');
            itemBox.classList.add(type);
            itemBox.innerHTML = `${item}&nbsp${obj[item]}`;
            section.append(itemBox);
        }
    }

    const burgers = createMenuItem(mainObj, 'burger', mainList);
    const sides = createMenuItem(sideObj, 'side', sideList);
    const drinks = createMenuItem(drinkObj, 'drink', drinkList);

    menuContent.append(menuTitle);
    menuContent.append(burgerSection);
    menuContent.append(mainList);
    menuContent.append(sideSection);
    menuContent.append(sideList);
    menuContent.append(drinkSection);
    menuContent.append(drinkList);
    content.append(menuContent);
}

export default renderMenu;