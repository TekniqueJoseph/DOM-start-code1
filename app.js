const mainHead = document.querySelector('h1')
const second = document.querySelector('ul :nth-child(2)');
const part = document.querySelector('#particles-js')

mainHead.textContent = 'Take Your Time!'
mainHead.className = 'title'
mainHead.style.color = 'gold'
mainHead.style.backgroundColor = 'black'

const input = document.querySelector('input')
input.setAttribute('value', 'enter text')

input.value = input.getAttribute('value', 'enter text')