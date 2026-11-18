
const firstNumber = document.getElementById('firstNumber');
const secondNumber = document.getElementById('secondNumber');
const result = document.getElementById('result');
const errorMessage = document.getElementById('errorMessage');
const clearButton = document.getElementById('clearButton');


function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}


function calculate(operation) {
  const value1 = firstNumber.value.trim();
  const value2 = secondNumber.value.trim();

  errorMessage.textContent = '';
  result.textContent = '—';

 
  if (value1 === '' || value2 === '') {
    errorMessage.textContent = 'Заповніть обидва поля!';
    return;
  }

  const a = Number(value1);
  const b = Number(value2);

  
  if (!Number.isFinite(a) || !Number.isFinite(b)) {
    errorMessage.textContent = 'Введіть правильні числа!';
    return;
  }


  if (operation === 'divide' && b === 0) {
    errorMessage.textContent = 'На нуль ділити не можна!';
    return;
  }

  let answer;

  if (operation === 'add') {
    answer = add(a, b);
  } else if (operation === 'subtract') {
    answer = subtract(a, b);
  } else if (operation === 'multiply') {
    answer = multiply(a, b);
  } else if (operation === 'divide') {
    answer = divide(a, b);
  }

 
  if (Number.isFinite(answer)) {
    result.textContent = Number(answer.toFixed(2));
  } else {
    errorMessage.textContent = 'Не вдалося обчислити результат!';
  }
}


const buttons = document.querySelectorAll('[data-operation]');

buttons.forEach(function(button) {
  button.addEventListener('click', function() {
    calculate(button.dataset.operation);
  });
});


clearButton.addEventListener('click', function() {
  firstNumber.value = '';
  secondNumber.value = '';
  result.textContent = '—';
  errorMessage.textContent = '';
});
