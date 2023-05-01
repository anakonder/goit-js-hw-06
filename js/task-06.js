const textInput = document.querySelector("#validation-input");
let output;

textInput.addEventListener('input', function() {
        
    textInput.addEventListener('blur', () => { 
        console.log(textInput.value.length);
        if (Number(textInput.value.length) === Number(textInput.getAttribute('data-length'))) {
            textInput.classList.add('valid')
            textInput.classList.remove('invalid')
        }
        else if (Number(textInput.value.length) === 0) { 
            textInput.classList.remove('valid')
            textInput.classList.remove('invalid')
        }
        else { 
            textInput.classList.add('invalid')
            textInput.classList.remove('valid')
        }
                  
         }) 
    })












 