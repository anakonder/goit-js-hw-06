const slider = document.querySelector('#font-size-control');
const text = document.querySelector('#text')
console.log(text)

slider.addEventListener('input', e => text.style.fontSize = `${e.target.value}px`)
