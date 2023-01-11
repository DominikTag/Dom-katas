export function fahrenheitToCelsius(temperatureInFahrenheits) {
    let inputToNumber = parseFloat(temperatureInFahrenheits);
    let celsius = (Math.round(inputToNumber - 32) / 1.8);

    return celsius.toFixed(0);
}

export function unixDateToRegularDate(timeStamp) {
    const date = new Date(timeStamp * 1000);

    return {
        forecastDate: date.toLocaleDateString('default'),
        forecastTime: date.toLocaleTimeString('default')
    }
}
