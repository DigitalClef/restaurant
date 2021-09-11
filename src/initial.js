export {mainHeader}

const mainHeader = function() {
    const header = document.createElement('div');
    const homeButton = document.createElement('button');
    const menuButton = document.createElement('button');
    const contactInfoButton = document.createElement('button');

    homeButton.innerText = 'Home';
    menuButton.innerText = 'Menu';
    contactInfoButton.innerText = 'Contact us!';

    header.appendChild(homeButton);
    header.appendChild(menuButton);
    header.appendChild(contactInfoButton);

    return header;
}