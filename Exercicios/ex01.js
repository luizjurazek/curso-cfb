// Dado o tamanho da base e da altura de um retângulo, calcular a sua área e o seu
// perímetro.


function calcAreaPerimetro(num1, num2){
    let area = num1 * num2
    let perimetro = (num1 * 2) + (num2 * 2)
    console.log("Area: " + area)
    console.log("Perimetro: " + perimetro)
}

calcAreaPerimetro(2, 4)
calcAreaPerimetro(3, 9)
