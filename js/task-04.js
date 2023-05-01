const counterValue = {
    value: 0,
    increment() {
        
        this.value += 1;
        console.log(this.value)
    },
    decrement() {
        this.value -= 1;
        console.log(this.value)
    },
};

const decrBtn = document.querySelector('button[data-action="decrement"]');
const incrBtn = document.querySelector('button[data-action="increment"]');
const valueEl = document.querySelector('#value')


decrBtn.addEventListener(
    'click', () => {
        counterValue.decrement()
        valueEl.textContent = counterValue.value;
    }    
)

incrBtn.addEventListener(
    'click', () => {
        counterValue.increment()
        valueEl.textContent = counterValue.value;
    }
)


