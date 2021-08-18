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
