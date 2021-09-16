const menu = function() {
    const content = document.querySelector('#content');
    const menuPage = document.createElement('div');
    menuPage.classList.add('menu-page');

    const header = document.createElement('h1');
    header.innerText = 'Take a look at our sweet menu!';

    menuPage.appendChild(header);

    menuPage.appendChild(menuItemGenerator('Chocolate Roll', 'Delicious and rich chocolate coating with sweet creamy filling'));
    menuPage.appendChild(menuItemGenerator('Banana Roll', 'Sweet tortilla wrapping with creamy banana filling'));
    menuPage.appendChild(menuItemGenerator('Apple Cinnamon Roll', 'Cococnut rice coating with apple cinnamon flavor'));
    menuPage.appendChild(menuItemGenerator('Cookies n Cream Roll', 'Classic cookie coating with cream filling'));
    menuPage.appendChild(menuItemGenerator('Peanut Butter and Jelly Roll ', 'Iconic treat in roll form'));
    menuPage.appendChild(menuItemGenerator('Crispy Rice Roll', 'Fruity wrapping with sweet crispy rice filling'));
    menuPage.appendChild(menuItemGenerator('Goldfish Roll', 'Not quite sweet, but still quite the treat'));

    content.appendChild(menuPage);
}

function menuItemGenerator(name, description) {
    const menuItem = document.createElement('div');
    const foodPic = document.createElement('img');
    const foodDescription = document.createElement('p');
    const itemName = document.createElement('h2');
    itemName.innerText = name;

    menuItem.classList.add('menu-item');
    foodPic.setAttribute('src', `images/${name.replace(/\s+/g, '').toLowerCase()}.jpg`);
    foodPic.setAttribute('alt', `${name}`);
    foodDescription.innerText = description;

    menuItem.appendChild(itemName);
    menuItem.appendChild(foodPic);
    menuItem.appendChild(foodDescription);

    return menuItem;
}

export {menu}