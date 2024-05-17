let weight = document.querySelector('#weight')
let height = document.querySelector('#height')
let calculate = document.querySelector('#answer')
let button = document.querySelector('#button')

button.addEventListener('click',()=>{
calculate.value = eval(`${weight.value}/${height.value*703}`)
})