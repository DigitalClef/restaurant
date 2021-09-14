import {mainHeader} from './initial.js'
import {home} from './home.js'

mainHeader();
document.querySelector('#home').onclick = function() {
    home();
}

