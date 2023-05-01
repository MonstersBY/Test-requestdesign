const humb_btn = document.querySelector('.hamburger')
const burger_active = document.querySelector('header')

humb_btn.addEventListener('click', () => {
    burger_active.classList.toggle('active')
})
window.onclick = function(event) {
    if (event.target == burger_active) {
        burger_active.classList.toggle('active')
    }
}

const inpPhone = document.querySelector('#input-phone')
const inpName = document.querySelector('#input-name')
const inpComment = document.querySelector('#input-comment')
inpPhone.addEventListener('input', () => {
  const v = inpPhone.value.replace(/[^0-9.]+/g, '')
  inpPhone.value = v
})

const contact_btn = document.querySelector('#contact-us')
contact_btn.addEventListener('click', () => {
    var regex=/^[А-Яа-яЁё -]+$/
    if (inpName.value.length > 3 && inpName.value.match(regex)) {
        inpName.parentElement.classList.remove('error')
    } else {
        inpName.parentElement.classList.add('error')
    }
    inpPhone.value.length == 9 ? inpPhone.parentElement.classList.remove('error') : inpPhone.parentElement.classList.add('error')
    inpComment.value.length >= 10 ? inpComment.parentElement.classList.remove('error') : inpComment.parentElement.classList.add('error')
})

const carousel = document.querySelector('.carousel')
const dots = document.querySelector('.carousel-dots')
const slide = carousel.querySelector('.carousel-container')
const slides = carousel.querySelectorAll('.carousel-container__info')

const widthSlidePc = -1090
const widthSlideM = -375
let currSlide = 0

for (let i = 0; i < slides.length; ++i) {
    const dot = document.createElement('div')
    dot.classList.add('dot')
    dots.appendChild(dot)
    dots.appendChild(dot)
    dot.addEventListener('click', () => {
        allDots[currSlide].classList.remove('active')
        currSlide = i
        allDots[currSlide].classList.add('active')
        window.innerWidth <=375 ? slide.style.marginLeft = `${widthSlideM*currSlide}px`: slide.style.marginLeft = `${widthSlidePc*currSlide}px`
    })
}
const allDots = dots.querySelectorAll('.dot')
allDots[currSlide].classList.add('active')

const nextSlide = document.querySelector('.carousel-arrow')
nextSlide.addEventListener('click', () => {
    allDots[currSlide].classList.remove('active')
    currSlide = currSlide+1 == 5 ? 0 : currSlide+1
    allDots[currSlide].classList.add('active')
    window.innerWidth <=375 ? slide.style.marginLeft = `${widthSlideM*currSlide}px`: slide.style.marginLeft = `${widthSlidePc*currSlide}px`
})