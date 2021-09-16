import {mainHeader} from './initial.js'
import {home} from './home.js'
import {menu} from './menu.js'
import {contact} from './contact.js'
import './style.css'

mainHeader();

document.querySelector('#home').onclick = function() {
    home();
}
document.querySelector('#menu').onclick = function() {
    menu();
}
document.querySelector('#contact').onclick = function() {
    contact();
}
