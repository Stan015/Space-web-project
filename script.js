// toggle burger menu 
const burgerMenu = document.querySelector('.burger-menu');
const burgerLines = document.querySelectorAll('.burger-menu .line');
const primaryNavLinks = document.querySelector('.primary-nav');

burgerMenu.addEventListener('click', () => {
    if (burgerMenu.getAttribute('aria-expanded') == 'false') {
        burgerMenu.setAttribute('aria-expanded', 'true');
        burgerLines[0].classList.add('burger-line1-toggle');
        burgerLines[1].classList.add('burger-line2-toggle');
        burgerLines[2].classList.add('burger-line3-toggle');
        primaryNavLinks.classList.add('show-primary-nav')
    } else {
        burgerMenu.setAttribute('aria-expanded', 'false');
        burgerLines[0].classList.remove('burger-line1-toggle');
        burgerLines[1].classList.remove('burger-line2-toggle');
        burgerLines[2].classList.remove('burger-line3-toggle');
        primaryNavLinks.classList.remove('show-primary-nav')
    }
})
//

// set aria-hidden to false on mobile devices
let mobileMediaQuery = window.matchMedia("(max-width: 600px)");

if (mobileMediaQuery.matches) {
    burgerMenu.setAttribute('aria-hidden', 'false');
} else {
    burgerMenu.setAttribute('aria-hidden', 'true');
}
//
