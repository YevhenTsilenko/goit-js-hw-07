const inputElement = document.querySelector('#name-input');
const spanElement = document.querySelector('#name-output');

inputElement.addEventListener('input', onInputChange);

function onInputChange(event) {
    if(event.currentTarget.value === '') {
        spanElement.textContent = 'незнакомец';
    
    } else {
        spanElement.textContent = event.currentTarget.value;
    }
}