let displayValue = '0';
let history = []; // Array to store calculation history

function appendToDisplay(value) {
    if (displayValue === '0' && value !== '.') {
        displayValue = value;
    } else {
        displayValue += value;
    }
    updateDisplay();
}

function clearDisplay() {
    displayValue = '0';
    updateDisplay();
}

function calculate() {
    try {
        let result = eval(displayValue).toString();
        history.push(displayValue + ' = ' + result); // Store calculation in history array
        displayValue = result;
        updateDisplay();
    } catch (error) {
        displayValue = 'Error';
        updateDisplay();
    }
}

function updateDisplay() {
    document.getElementById('display').textContent = displayValue;
}

function showHistory() {
    // Show calculation history in an alert (for demonstration purposes)
    alert('Calculation History:\n\n' + history.join('\n'));
}

function copyDisplay() {
    // Copy current displayValue to clipboard
    navigator.clipboard.writeText(displayValue)
        .then(() => alert('Copied to clipboard: ' + displayValue))
        .catch(err => alert('Copy failed: ' + err));
}

function pasteDisplay() {
    // Paste from clipboard (for demonstration purposes)
    navigator.clipboard.readText()
        .then(text => {
            displayValue = text;
            updateDisplay();
            alert('Pasted from clipboard: ' + displayValue);
        })
        .catch(err => alert('Paste failed: ' + err));
}
