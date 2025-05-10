document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle')
    const navMenu = document.getElementById('navMenu')

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active')
    })
})
