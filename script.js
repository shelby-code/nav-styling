const button = document.querySelector('.btn')
const nav = document.getElementById('nav')

button.addEventListener('click', ()=>{
    nav.classList.toggle('active')
})