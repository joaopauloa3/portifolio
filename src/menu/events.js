import * as element from './elements.js';


export const menuAppear = () => {
    element.openMenuMobile.addEventListener('click', () => {
         element.menuMobile.classList.toggle('hidde')     
    } )
}
