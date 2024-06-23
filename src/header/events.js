import * as element from './elements.js';

export const scrollerEffect = () => {
    element.containerMain.addEventListener("scroll", () => {
        
        const scrollBarPosition = $(".container-main").scrollTop()
        if (scrollBarPosition > 10) {
            element.header.classList.add("scroll");
        }
    
        if (scrollBarPosition < 10) {
            element.header.classList.remove("scroll");
        }
    
    })
    }