function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.body
console.log(body)
const btn = document.querySelector('.change-color')

btn.addEventListener('click', () => body.style.backgroundColor = getRandomHexColor())


