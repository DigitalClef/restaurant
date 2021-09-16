import {mainHeader} from './initial.js'
import {home} from './home.js'
import {menu} from './menu.js'
import {contact} from './contact.js'
import './style.css'

mainHeader();
home();

function removeAllChildNodes() {
    const content = document.querySelector('#content');
    while (content.childElementCount !== 1) {
        content.removeChild(content.lastChild);
    }
}

document.querySelector('#home').onclick = function() {
    removeAllChildNodes();
    home();
}
document.querySelector('#menu').onclick = function() {
    removeAllChildNodes();
    menu();
}
document.querySelector('#contact').onclick = function() {
    removeAllChildNodes();
    contact();
}
