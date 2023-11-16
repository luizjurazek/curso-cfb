// Função para calcular o valor a ser pago pela pulverização
function calcularValorPulverizacao(tipo, area) {
    let custoPorAcre;

    // Definir o custo por acre com base no tipo de praga
    switch (tipo) {
        case 1:
            custoPorAcre = 50;
            break;
        case 2:
            custoPorAcre = 100;
            break;
        case 3:
            custoPorAcre = 150;
            break;
        case 4:
            custoPorAcre = 250;
            break;
        default:
            console.log("Tipo de pulverização inválido.");
            return;
    }

    // Calcular o custo total antes dos descontos
    let custoTotal = custoPorAcre * area;

    // Aplicar desconto de 5% se a área for superior a 1000 acres
    if (area > 1000) {
        custoTotal *= 0.95;
    }

    // Aplicar desconto de 10% sobre o valor que ultrapassar R$ 750,00
    const limiteDesconto = 750;
    if (custoTotal > limiteDesconto) {
        const valorDesconto = (custoTotal - limiteDesconto) * 0.10;
        custoTotal = limiteDesconto + valorDesconto;
    }

    return custoTotal;
}

// Exemplo de uso
const tipoPulverizacao = 4; // Tipo 4 - Todos acima
const areaPulverizada = 1200; // Área a ser pulverizada em acres

const valorPago = calcularValorPulverizacao(tipoPulverizacao, areaPulverizada);
console.log(`O valor a ser pago é: R$ ${valorPago.toFixed(2)}`);