// Função que determina o quadrante do ponto
function determinarQuadrante(x, y) {
    if (x === 0 && y === 0) {
        return "Origem";
    } else if (x === 0) {
        return "Eixo Y";
    } else if (y === 0) {
        return "Eixo X";
    } else if (x > 0 && y > 0) {
        return "1º Quadrante";
    } else if (x < 0 && y > 0) {
        return "2º Quadrante";
    } else if (x < 0 && y < 0) {
        return "3º Quadrante";
    } else {
        return "4º Quadrante";
    }
}

// Exemplo de uso
let x = parseFloat(prompt("Digite a coordenada x: "));
let y = parseFloat(prompt("Digite a coordenada y: "));

let quadrante = determinarQuadrante(x, y);

console.log(`O ponto (${x}, ${y}) está no ${quadrante}.`);