//this module will generate the contact page

const contact = function() {
    const content = document.querySelector('#content');

    const contactPage = document.createElement('div');
    contactPage.classList.add('contact-page');

    const header = document.createElement('h1');
    header.innerText = 'Contact us!';

    const contactInfo = document.createElement('div');
    contactInfo.classList.add('contact-info');

    const phoneNumber = document.createElement('p');
    phoneNumber.innerText = '123-123-1234';
    
    const address = document.createElement('p');
    address.innerText = 'sweet@sushi.com';

    contactInfo.appendChild(phoneNumber);
    contactInfo.appendChild(address);

    contactPage.appendChild(header);
    contactPage.appendChild(contactInfo);

    contactPage.classList.add('contact-page');

    content.appendChild(contactPage);
}

export {contact};
