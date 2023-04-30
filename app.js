const mainHead = document.querySelector('h1')
const second = document.querySelector('ul :nth-child(2)');
const third = document.querySelector('li:last-of-type')
const part = document.querySelector('#particles-js')

mainHead.textContent = 'Take Your Time!'
mainHead.className = 'title'
mainHead.style.color = 'gold'
mainHead.style.backgroundColor = 'black'

const input = document.querySelector('input')
input.setAttribute('value', 'default text')

input.value = input.getAttribute('value', 'enter text')
const allLis = document.querySelectorAll('li')

const list = document.querySelectorAll('li')
second.style.color = 'red'
third.style.color = 'indigo'