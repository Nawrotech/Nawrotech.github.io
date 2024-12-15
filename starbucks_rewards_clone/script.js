const buttons = document.querySelectorAll('.coffee-select-button');
const movingBorder = document.querySelector('.moving-border');
const buttonContainer = document.querySelector('.buttons-wrapper');

const productCards = document.querySelectorAll('.coffee-card');


function updateBorder(target) {
    const buttonRect = target.getBoundingClientRect();
    const containerRect = buttonContainer.getBoundingClientRect();

    const leftOffset = buttonRect.left - containerRect.left;

    movingBorder.style.width = `${buttonRect.width}px`;
    movingBorder.style.transform = `translateX(${leftOffset}px)`;

}


function setActiveCard(target) {
    productCards.forEach((productCard) => {
        productCard.classList.remove("active");
        if (productCard.dataset.product === target.dataset.product) {
            productCard.classList.add("active");
        }
    });
}


buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        updateBorder(e.target);
        setActiveCard(e.target);
    });
});

if (buttons.length > 0) {
    updateBorder(buttons[0]); 
}

function getActiveButton() {
    const activeProductCard = document.querySelector('.coffee-card.active');
    if (activeProductCard) {
        return [...buttons].find(button => button.dataset.product === activeProductCard.dataset.product);
    }

    return null; 
}

function renderInitialBorder() {
    const activeButton = getActiveButton(); 
    if (activeButton) {
        updateBorder(activeButton); 
    }
}

function handleResize() {
    renderInitialBorder(); 
}

window.addEventListener('resize', handleResize);