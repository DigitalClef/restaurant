import {mainHeader} from './initial.js'
import {home} from './home.js'
import {menu} from './menu.js'


mainHeader();
document.querySelector('#home').onclick = function() {
    home();
}

menu();
