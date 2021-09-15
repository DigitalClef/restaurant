import {mainHeader} from './initial.js'
import {home} from './home.js'
import {menu} from './menu.js'
import './style.css'



mainHeader();
document.querySelector('#home').onclick = function() {
    home();
}
document.querySelector('#menu').onclick = function() {
    menu();
}
