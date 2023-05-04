function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.body
console.log(body)
const btn = document.querySelector('.change-color')
const color = document.querySelector('.color')
btn.addEventListener('click',
  function changeColor() {
    color.textContent = '-'
    color.textContent = color.textContent + getRandomHexColor()
    body.style.backgroundColor = getRandomHexColor()
    }
)



