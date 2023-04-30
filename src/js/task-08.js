const form = document.querySelector('.login-form')



form.addEventListener('submit', handlerSubmit);

function handlerSubmit(event) { 
    event.preventDefault();
    const { elements: { email, password } } = event.currentTarget;
    if (email.value === '' || password.value === '') {return alert('Please fill in all the fields!') }
    console.log(this.elements.email.value)
    console.log(this.elements.password.value)  
    form.reset();
}
