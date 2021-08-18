// generate pin
function getInput() {
  const pin = Math.round(Math.random() * 10000);
  const pinString = pin + '';
  if (pinString.length == 4) {
    return pin;
  } else {
    return getInput();
  }
}

function generatePin() {
  const pin = getInput();
  document.getElementById('pin-output').value = pin;
}

// for calculator
document.getElementById('keypad').addEventListener('click', function (event) {
  const number = event.target.innerText;
  const previousNumberId = document.getElementById('cal-output');
  if (isNaN(number)) {
    if (number == 'C') {
      previousNumberId.value = '';
    }
  } else {
    const previousNumber = previousNumberId.value;
    const newNumber = previousNumber + number;
    previousNumberId.value = newNumber;
  }
});

// verify pin
function verifyPin() {
  const generatePinNum = document.getElementById('pin-output').value;
  const calInputPinNum = document.getElementById('cal-output').value;
  const errorMessage = document.getElementById('error');
  const rightMessage = document.getElementById('right');
  if (generatePinNum == calInputPinNum) {
    rightMessage.style.display = 'block';
    errorMessage.style.display = 'none';
  } else {
    rightMessage.style.display = 'none';
    errorMessage.style.display = 'block';
  }
}
