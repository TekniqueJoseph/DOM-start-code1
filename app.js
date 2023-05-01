const mainHead = document.querySelector('h1')
const ul = document.querySelector('ul')
const content = document.querySelector('.content')
const liFirst = document.querySelector('li')
const uEl = liFirst.parentElement
const second = document.querySelector('ul :nth-child(2)');
const third = document.querySelector('li:last-of-type')
const part = document.querySelector('#particles-js')



mainHead.textContent = 'Take Your Time...'
mainHead.className = 'title'

const input = document.querySelector('input')
input.setAttribute('value', 'default text')

input.value = input.getAttribute('value', 'enter text')
const allLis = document.querySelectorAll('li')

// ul.firstElementChild.style.color = 'green'
// ul.children[1].style.color = 'red'
// ul.lastElementChild.style.color = 'blue'

// liFirst.closest('body').style.fontSize = '1.1rem'
// uEl.previousElementSibling.style.color = 'darkgreen'
// uEl.nextElementSibling.style.backgroundColor = 'lightgrey'

// const sec = content.children[1].style.color = 'red'
// content.style.color = 'red'
// sec.style.color = 'red'

const section = document.querySelector('section')
const button = document.querySelector('button')

// section.style.backgroundColor = 'blue'
section.className = 'red-bg'

button.addEventListener ('click', () => {
    // if(section.className === 'red-bg visible') {
    //     section.className = 'red-bg invisible';
    // } else {
    //     section.className = 'red-bg visible'
    // }
    // section.classList.toggle('visible')
    section.classList.toggle('invisible')
})

const list = document.querySelector('ul')
list.innerHTML = list.innerHTML + '<li>Gallery</li>'

const div = document.querySelector('.inBox')
// div.innerHTML = div.innerHTML + '<p>Invalid Entry!</p>'
div.insertAdjacentHTML('beforeend', '<p>Invalid Entry!</p>')

