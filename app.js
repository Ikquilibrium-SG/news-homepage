// select the element
const hamburgerButton = document.querySelector('.hamburger')
const navMenu = document.querySelector('.nav-menu')
const navLink = document.querySelectorAll('.nav-link')
const body = document.body
const container = document.querySelector('.container')

const mobileMenu = () => {
    hamburgerButton.classList.toggle('active')
    navMenu.classList.toggle('active')
    const visibility = body.getAttribute('data-visible')
    if (visibility === "false") {
        body.style.background = "hsl(0 0% 80% / 1)"
        body.setAttribute('data-visible', true)
        container.style.background = "hsl(0 0% 80% / 0.6)"

    } else if (visibility === "true") {
        body.style.background = "hsl(0 0% 100% / 0)"
        body.setAttribute('data-visible', false)
        container.style.background = "hsl(0 0% 100% / 0)"
    }
}

hamburgerButton.addEventListener('click', mobileMenu)

const closeMenu = () => {
    hamburgerButton.classList.remove('active')
    navMenu.classList.remove('active')
}

navLink.forEach(n => n.addEventListener('click', closeMenu))
