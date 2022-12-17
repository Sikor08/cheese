const burgerIconEl = document.querySelector('.fa-burger');

const burgerListEl =document.querySelector('.burgerContent');

burgerIconEl.addEventListener('click', () => {
    burgerListEl.classList.toggle('invisible')
})