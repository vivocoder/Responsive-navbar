// show - menu

const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById("nav-toggle");

const navClose = document.getElementById('nav-close')

navToggle.onclick = () => {
    navMenu.classList.add('show-menu');

};

navClose.onclick = () => {
    navMenu.classList.remove('show-menu');
};

