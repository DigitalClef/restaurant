const menu = function() {
    const content = document.querySelector('#content');
    const menuPage = document.createElement('div');

    const header = document.createElement('h2');
    header.innerText = 'Take a look at our menu!';

    menuPage.appendChild(header);

    menuPage.appendChild(menuItemGenerator('Chocolate Roll', 'Delicious and rich chocolate coating with sweet filling'));

    content.appendChild(menuPage);
}

function menuItemGenerator(name, description) {
    const menuItem = document.createElement('div');
    menuItem.classList.add
    const foodPic = document.createElement('img');
    const foodDescription = document.createElement('p');
    foodPic.setAttribute('src', `images/${name.replace(/\s+/g, '').toLowerCase()}.jpg`);
    foodPic.setAttribute('alt', `${name}`);
    foodDescription.innerText = description;

    menuItem.appendChild(foodPic);
    menuItem.appendChild(foodDescription);

    return menuItem;
}

export {menu}