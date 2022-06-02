
const navMenu = document.getElementById('nav-menu'),
herramientaMenu = document.getElementById('toogle-menu'),
closeMenu = document.getElementById('close-menu')

herramientaMenu.addEventListener('click',() => {
    navMenu.classList.toggle('show')
})