const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('.nav-menu');
const menuClouseButton = document.querySelector('.menu-close');

menuButton.addEventListener('click', () => {
    menu.classList.add('is-active');
    menuClouseButton.classList.add('is-active');
});
menuClouseButton.addEventListener('click', () => {
    menu.classList.remove('is-active');
    menuClouseButton.classList.remove('is-active');
});