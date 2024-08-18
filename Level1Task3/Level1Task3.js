function convertTemperature() {
    const input = document.getElementById('temperatureInput').value;
    const inputUnit = document.getElementById('inputUnit').value;
    const outputUnit = document.getElementById('outputUnit').value;
    const result = document.getElementById('result');

    let temperature = parseFloat(input);
    if (isNaN(temperature)) {
        result.textContent = 'Please enter a valid number.';
        return;
    }

    let convertedTemperature;

    // Convert the input temperature to Celsius first
    switch (inputUnit) {
        case 'celsius':
            convertedTemperature = temperature;
            break;
        case 'fahrenheit':
            convertedTemperature = (temperature - 32) * 5/9; // Fahrenheit to Celsius
            break;
        case 'kelvin':
            if (temperature < 0) {
                result.textContent = 'Temperature in Kelvin cannot be below 0 K.';
                return;
            }
            convertedTemperature = temperature - 273.15; // Kelvin to Celsius
            break;
        default:
            result.textContent = 'Unknown input unit.';
            return;
    }

    // Convert from Celsius to the desired output unit
    switch (outputUnit) {
        case 'celsius':
            // No conversion needed
            break;
        case 'fahrenheit':
            convertedTemperature = (convertedTemperature * 9/5) + 32; // Celsius to Fahrenheit
            break;
        case 'kelvin':
            convertedTemperature = convertedTemperature + 273.15; // Celsius to Kelvin
            break;
        default:
            result.textContent = 'Unknown output unit.';
            return;
    }

    result.textContent = `Converted Temperature: ${convertedTemperature.toFixed(2)} ${outputUnit.charAt(0).toUpperCase() + outputUnit.slice(1)}`;
}