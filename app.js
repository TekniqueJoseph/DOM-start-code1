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

// const list = document.querySelector('ul')
// list.innerHTML = list.innerHTML + '<li>Gallery</li>'

// const div = document.querySelector('.inBox')
// div.innerHTML = div.innerHTML + '<p>Invalid Entry!</p>'
// div.insertAdjacentHTML('beforeend', '<p>Invalid Entry!</p>')

// const list = document.querySelector('ul')
// const newLi = document.createElement('li')
// newLi.textContent = 'Gallery'
// list.appendChild(newLi)

// const newLi1 = document.createElement('li')
// const newLi2 = document.createElement('li')
// newLi1.textContent = 'Learn JavaScript'
// newLi2.textContent = 'Master JavaScript'
// list.appendChild(newLi1)
// list.appendChild(newLi2)

const list = document.querySelector('ul')
const secondLi = list.children[1]
const newLi = document.createElement('li')
newLi.textContent = 'Gallery'
// list.prepend(newLi)
// list.lastElementChild.before(newLi)

// secondLi.insertAdjacentElement('afterend',newLi)
const newLi2 = newLi.cloneNode(true)
list.append(newLi, newLi2)



