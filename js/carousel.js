const track = document.querySelector('carousel-track')
const slides = Array.from(track.children)
const nextButton = document.querySelector('.carousel-button--right')
const prevButton = document.querySelector('.carousel-button--left')
const dotsNav = document.querySelector('.carousel-nav')
const dots = Arry.from(dotsNav.children)

const slideWidth = slides[0].getBoundingClientRect().width

//arrenge the slide next to one another
const setSlidePosition = (slide, index) =>{
    slide.style.left = slideWidth * index + 'p'
}

slides.forEach(setSlidePosition)

