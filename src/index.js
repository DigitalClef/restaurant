import {mainHeader} from './initial.js'
import {home} from './home.js'

mainHeader().querySelectorAll('button').forEach(button => {
    button.style.backgroundColor = 'blue';
});


document.body.appendChild(mainHeader());
document.body.appendChild(home());