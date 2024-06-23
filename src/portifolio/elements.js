export const containerCards = document.querySelector('.container-cards')

export const getCards = async () => {
    const cards =  document.querySelector('.card'); // Replace '.card' with the correct class selector
    return cards;
};

export const containerMain = document.querySelector('.container-main')

export const containerModal = document.querySelector('.container-modal-portifolio')

export const getToolsModal = async () => {
    const tools = document.querySelector('.tools')
    return tools
};

export const getButtonCloseModal = async () => {
    const buttonCloseModal = document.querySelector('.container-button-close-modal')
    return buttonCloseModal
};

export const getButtonslides = async () => {
    const buttonsSlides = document.querySelector('.buttons-next-and-back')
    return buttonsSlides
};

export const getImagesSlide = async () => {
    const imagesSlides = document.querySelector('.first')
    return imagesSlides
};


export const modal = document.querySelector('.modal')