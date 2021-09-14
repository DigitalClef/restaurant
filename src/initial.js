const mainHeader = function() {
    const content = document.querySelector('#content');

    const header = document.createElement('div');
    const homeButton = document.createElement('button');
    const menuButton = document.createElement('button');
    const contactInfoButton = document.createElement('button');
    
    homeButton.innerText = 'Home';
    homeButton.setAttribute('id', 'home');
    menuButton.innerText = 'Menu';
    menuButton.setAttribute('id', 'menu');
    contactInfoButton.innerText = 'Contact us!';
    contactInfoButton.setAttribute('id', 'contact-info');
    
    header.appendChild(homeButton);
    header.appendChild(menuButton);
    header.appendChild(contactInfoButton);

    content.appendChild(header);

}
export {mainHeader}