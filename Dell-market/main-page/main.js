const humb_btn = document.querySelector('.hamburger')
const burger_active = document.querySelector('header')

humb_btn.addEventListener('click', function(){
    burger_active.classList.toggle('active')
})
window.onclick = function(event) {
    if (event.target == burger_active) {
        burger_active.classList.toggle('active')
    }
}
