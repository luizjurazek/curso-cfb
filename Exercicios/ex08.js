// Dado que a fórmula para conversão de Fahrenheit para Celsius é C = 5/9 (F – 32), leu um
// valor de temperatura em Fahrenheit e exibi-lo em Celsius

function fahrenheitToCelcius(fahrenheit){
    let celcius = 5/9 * (fahrenheit - 32)
    celcius = celcius.toFixed(2)
    console.log(celcius)
}

fahrenheitToCelcius(110)