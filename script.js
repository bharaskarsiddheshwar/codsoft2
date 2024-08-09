let displayValue = '0';

function updateDisplay() {
  const display = document.getElementById('display');
  display.textContent = displayValue;
}

function clearDisplay() {
  displayValue = '0';
  updateDisplay();
}

function appendToDisplay(value) {
  if (displayValue === '0') {
    displayValue = value;
  } else {
    displayValue += value;
  }
  updateDisplay();
}

function calculateResult() {
  try {
    displayValue = eval(displayValue);
    updateDisplay();
  } catch {
    displayValue = 'Error';
    updateDisplay();
  }
}

// Initialize display
updateDisplay();
