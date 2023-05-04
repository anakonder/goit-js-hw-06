const form = document.querySelector('.login-form')
const user = {};


form.addEventListener('submit', handlerSubmit);

function handlerSubmit(event) { 
    event.preventDefault();
    const { elements: { email, password } } = event.currentTarget;
    if (email.value === '' || password.value === '') {return alert('Please fill in all the fields!') }
    
    console.log({email: this.elements.email.value,pasword: this.elements.password.value})
    form.reset();
}
