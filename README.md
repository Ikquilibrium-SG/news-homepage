# Frontend Mentor - News homepage solution

This is a solution to the [News homepage challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: Toggle the mobile menu (requires some JavaScript)


### Links

- Solution URL: [GitHub](https://your-solution-url.com)
- Live Site URL: [GitHub Page](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox


### What I learned

I learned to use the hamburger button to display the navbar link section for mobile devices

see code snippets below:

```html
<button class="hamburger" id="hamburger">
    <span class="bar"></span>
    <span class="bar"></span>
    <span class="bar"></span>
</button>
```
```css
.hamburger.active .bar:nth-child(2) {
        opacity: 0;
    }

    .hamburger.active .bar:nth-child(1) {
        transform: translateY(8px) rotate(45deg);
    }

    .hamburger.active .bar:nth-child(3) {
        transform: translateY(-8px) rotate(-45deg);
    }
```
```js
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
```


### Useful resources

- [Responsive navbar tutorial using HTML CSS & JS](https://www.youtube.com/watch?v=HbBMp6yUXO0) - This helped me to setup the navbar section and the hamburger part for mobile device.


## Author

- Frontend Mentor - [@ikquilibrium-SG](https://www.frontendmentor.io/profile/Ikquilibrium-SG)


## Acknowledgments

Kevin Powell, YouTube, FreeCodeCamp
