const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const counter  = document.querySelector('#value');

let counterValue = 0;

const decrement = function() {
    counterValue -= 1;
    counter.textContent = counterValue;
}

const increment = function() {
    counterValue += 1;
    counter.textContent = counterValue;
    
}

decrementBtn.addEventListener('click', decrement);
incrementBtn.addEventListener('click', increment);
