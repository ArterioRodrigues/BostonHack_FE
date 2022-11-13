const toggleButton = document.getElemantsByClassName('toggle-button')[0]
const navbarLinks = document.getElemantsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('activate')

})
