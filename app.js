const openButton = document.querySelector('#open')
const closeButton = document.querySelector('#close')
const container = document.querySelector('.container')

openButton.addEventListener('click', ()=> {
  container.classList.add('show-nav')
})

closeButton.addEventListener('click', ()=> {
  container.classList.remove('show-nav')
})