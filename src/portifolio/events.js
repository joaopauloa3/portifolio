import * as element from './elements.js'
import { Projects, Tools } from "./projects.js"

element.containerCards.addEventListener('click', async function  clickCard(e) {


    if (e.target.classList == 'bottom') {
        element.containerModal.classList.toggle('hidden')
        element.containerMain.style.overflowY ='hidden'
        const id = e.target.id;

            //insertAdjacentHTML('beforeend', tools)
            
        
        
        
        let contentModal = `
                        <div class="container-button-close-modal">
                            <p>&#10005</p>
                       </div>
                        <div class="modal-header">
                            <slider>
                                <div class="slides">
                                    <img class="slide first" src="${Projects[id].image[0]}" alt="">
                                    <img calss="slide" src="${Projects[id].image[1]}" alt="">
                                    <img calss="slide" src="${Projects[id].image[2]}" alt="">
                                </div>
                            </slider>
                            <div class="buttons-next-and-back">
                                <button>
                                    <i class="ph ph-caret-left"></i>
                                </button>
                                <button>
                                    <i class="ph ph-caret-right"></i>
                                </button>
                            </div>
                        </div>

                        <div class="modal-body">
                            <div class="modal-content">
                                <h1>${Projects[id].modalContent.title}</h1>
                                <p>${Projects[id].modalContent.description}</p>
                            </div>
                            <div class="tools-used">
                                <p>Ferramentas ultilizadas:</p>
                                <div class="tools">
                                </div>
                            </div>
                        </div>
        `
        element.modal.innerHTML = contentModal


        const containerTools = await element.getToolsModal()


        const getTools = (id) => {
            Projects[id].modalContent.tools.forEach(element => {
                const tools = `<img src="${element}" alt="">`
                containerTools.insertAdjacentHTML('beforeend', tools)
            });
        }

        getTools(id)
        
        




        const buttonCloseModal = await element.getButtonCloseModal()
        
        buttonCloseModal.addEventListener('click', () =>{
            element.containerModal.classList.toggle('hidden')
            element.containerMain.style.overflowY ='scroll'
        })




        
        const buttonsSlides = await element.getButtonslides()
        const imagesSlides = await element.getImagesSlide()
        
        let marginLeft = 0;
        buttonsSlides.addEventListener('click', (e) =>{

            if (e.target.classList.contains('ph-caret-right')) {


                switch (marginLeft) {
                    case 0:
                        imagesSlides.style.marginLeft = '-100%';
                        marginLeft = 1;
                        break;

                    case 1:
                        imagesSlides.style.marginLeft = '-200%';
                        marginLeft = 2;
                        break;
                        
                    case 2:
                        imagesSlides.style.marginLeft = '0%';
                        marginLeft = 0;
                        break;
                }
                
            }
            

            if (e.target.classList.contains('ph-caret-left')) {


                switch (marginLeft) {
                    case 0:
                        imagesSlides.style.marginLeft = '-200%';
                        marginLeft = 2;
                        break;

                    case 1:
                        imagesSlides.style.marginLeft = '0%';
                        marginLeft = 0;
                        break;
                        
                    case 2:
                        imagesSlides.style.marginLeft = '-100%';
                        marginLeft = 1;
                        break;
                }
                
            }

        })
    }
        
})