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
    
    let mainObj = [
        {
            name: 'The Burger Club Standard',
            price: '$10'
        },
        {
            name: 'Old School Burger',
            price: '$8'
        },
        {
            name: 'Veggie Burger',
            price: '$10'
        }
    ];
    let sideObj = [
        {
            name: 'Fries',
            price: '$3'
        },
        {
            name: 'Onion Rings',
            price: '$4'
        }
    ];
    let drinkObj = [
        {
            name: 'Soda',
            price: '$3'
        },
        {
            name: 'Beer',
            price: '$8'
        }
    ];
    
    menuContent.classList.add('menuContent');
    menuTitle.classList.add('menu');
    menuTitle.innerText = 'Menu';
    burgerSection.classList.add('b-section');
    burgerSection.innerText = 'Burgers';
    sideSection.classList.add('s-section');
    sideSection.innerText = 'Sides';
    drinkSection.classList.add('d-section');
    drinkSection.innerText = 'Drinks';
    
    function createMenuItem(arr, type, section) {
        for(let i = 0; i < arr.length; i++) {
            const itemBox = document.createElement('div');
            const name = document.createElement('div');
            const price = document.createElement('div');
            name.innerText = arr[i]['name'];
            price.innerText = arr[i]['price'];
            itemBox.classList.add(type);
            itemBox.append(name);
            itemBox.append(price);
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