import { containerCards } from "./elements.js";
import { Projects } from "./projects.js"


Projects.forEach(element => {
    let card = document.createElement = `
    <div class="card-after">
        <figure class="card">
            <img src="${element.image[0]}" alt="">
            <figcaption>
                <b>${element.title}</b>
                <p>${element.description}</p>
            </figcaption>
        </figure>
        <div  id="${element.id}" class="bottom">
            VER MAIS
        </div>
    </div>


`

    containerCards.insertAdjacentHTML('beforeend', card)
});

