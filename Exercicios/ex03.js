// Dado o tamanho do raio de uma circunferência, calcular a área e o perímetro da mesma.

function calcAreaPerimetro(raio){
    let pi = Math.PI
    let area = pi * raio * raio
    let perimetro = 2 * pi * raio

    console.log("Area do circulo: " + area)
    console.log("Perimetro do circulo: " + perimetro)
}

calcAreaPerimetro(10)