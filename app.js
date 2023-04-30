const mainHead = document.querySelector('h1')
const ul = document.querySelector('ul')
const second = document.querySelector('ul :nth-child(2)');
const third = document.querySelector('li:last-of-type')
const part = document.querySelector('#particles-js')

mainHead.textContent = 'Take Your Time!'
mainHead.className = 'title'


const input = document.querySelector('input')
input.setAttribute('value', 'default text')

input.value = input.getAttribute('value', 'enter text')
const allLis = document.querySelectorAll('li')

ul.firstElementChild.style.color = 'green'
ul.children[1].style.color = 'red'
ul.lastElementChild.style.color = 'blue'