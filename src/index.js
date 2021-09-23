import {mainHeader} from './initial.js'
import {home} from './home.js'
import {menu} from './menu.js'
import {contact} from './contact.js'
import './style.css'

mainHeader(); //creates top div to be utilized as nav bar
home();

//Aside from the main header, current DOM will be cleared so that new page will be loaded
function removeAllChildNodes() {
    const content = document.querySelector('#content');
    while (content.childElementCount !== 1) {
        content.removeChild(content.lastChild);
    }
}

//Calls home module upon home button is clicked
document.querySelector('#home').onclick = function() {
    removeAllChildNodes();
    home();
}

//Calls menu module upon menu button is clicked
document.querySelector('#menu').onclick = function() {
    removeAllChildNodes();
    menu();
}

//Calls contact module upon contact button is clicked
document.querySelector('#contact').onclick = function() {
    removeAllChildNodes();
    contact();
}
