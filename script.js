function convertTemp() {
    const inputTemp = parseFloat(document.getElementById('inputTemp').value);
    const fromUnit = document.getElementById('fromUnit').value;
    const toUnit = document.getElementById('toUnit').value;
    let result;

    if (fromUnit === 'cel') {
        if (toUnit === 'seccel') {
            result = inputTemp;
        } else if (toUnit === 'secfah') {
            result = (inputTemp * 9 / 5) + 32;
        } else {
            result = inputTemp + 273.15;
        }
    } else if (fromUnit === 'fah') {
        if (toUnit === 'seccel') {
            result = (inputTemp - 32) * 5 / 9;
        } else if (toUnit === 'secfah') {
            result = inputTemp;
        } else {
            result = (inputTemp - 32) * 5 / 9 + 273.15;
        }
    } else {
        if (toUnit === 'seccel') {
            result = inputTemp - 273.15;
        } else if (toUnit === 'secfah') {
            result = (inputTemp - 273.15) * 9 / 5 + 32;
        } else {
            result = inputTemp;
        }
    }

    document.getElementById('convertedTemp').value = result.toFixed(2);
}
