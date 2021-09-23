//this module will create the nav bar used to navigate through the tabs

const mainHeader = function() {
    const content = document.querySelector('#content'); //Accesses content div

    const header = document.createElement('div'); 
    const homeButton = document.createElement('button');
    const menuButton = document.createElement('button');
    const contactInfoButton = document.createElement('button');
    
    //Sets the text and id attribute for the created buttons
    homeButton.innerText = 'Home';
    homeButton.setAttribute('id', 'home');

    menuButton.innerText = 'Menu';
    menuButton.setAttribute('id', 'menu');

    contactInfoButton.innerText = 'Contact us!';
    contactInfoButton.setAttribute('id', 'contact');
    
    //Appens each of the buttons to the main header div
    header.appendChild(homeButton);
    header.appendChild(menuButton);
    header.appendChild(contactInfoButton);

    //add header class name to the header div
    header.classList.add('header');

    //appends header to the content div
    content.appendChild(header);
}

export {mainHeader}