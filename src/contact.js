const contact = function() {
    const content = document.querySelector('#content');

    const menuPage = document.createElement('div');
    menuPage.classList.add('contact-page');

    const header = document.createElement('h1');
    header.innerText = 'Contact us!';

    const contactInfo = document.createElement('div');
    contactInfo.classList.add('contact-info');

    const phoneNumber = document.createElement('p');
    phoneNumber.innerText = '123-123-1234';
    
    const address = document.createElement('p');
    address.innerText = 'amaishi@sushi.com';

    contactInfo.appendChild(phoneNumber);
    contactInfo.appendChild(address);

    menuPage.appendChild(header);
    menuPage.appendChild(contactInfo);

    content.appendChild(menuPage);
}

export {contact};
