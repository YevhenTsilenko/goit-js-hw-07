const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', onInputChange);

function onInputChange(event) {
    const inputTextlength = event.currentTarget.value.split('').length;
    const dataLengthValue = inputEl.dataset.length;
    if(inputTextlength == dataLengthValue) {
         inputEl.classList.add("valid");
         inputEl.classList.remove("invalid");
    } else  {
       inputEl.classList.add("invalid");
       inputEl.classList.remove("valid");
    }
   console.log(inputTextlength);
}
