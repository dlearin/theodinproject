import {createClassMain} from './module_main.js';
import {createClassNav} from './module_nav.js';
import {menu} from './module_menu.js'

const li1Nav = createClassNav();

createClassMain();



li1Nav.addEventListener('click',()=>{

    menu();
    
    });
