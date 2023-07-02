let counterOutput = document.querySelector('#value');
let counterDecrement = document.querySelector('[data-action="decrement"]');
let counterIncrement = document.querySelector('[data-action="increment"]');

let counterValue = 0;

function callback(counter) {
  if (counter === 'increment') counterValue++;
  if (counter === 'decrement') counterValue--;
  return (counterOutput.textContent = counterValue);
}

counterDecrement.addEventListener('click', () => callback('decrement'));

counterIncrement.addEventListener('click', () => callback('increment'));

console.log(counterValue);
