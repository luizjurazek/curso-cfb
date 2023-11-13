function calculateQBRating(passesTentados, passesCompletos, jardasPassadas, passesTouchdown, passesInterceptados) {
    // Calcula o percentual de passes completados
    let completionsPercentage = (passesCompletos / passesTentados - 0.3) / 0.2;
    completionsPercentage = Math.min(2.375, Math.max(0, completionsPercentage));

    // Calcula a razão de jardas passadas pela quantidade de passes tentados
    let yardsPerAttempt = (jardasPassadas / passesTentados - 3) / 4;
    yardsPerAttempt = Math.min(2.375, Math.max(0, yardsPerAttempt));

    // Calcula a razão de passes para touchdowns pelo número de passes tentados
    let touchdownPercentage = (passesTouchdown / passesTentados) / 0.05;
    touchdownPercentage = Math.min(2.375, Math.max(0, touchdownPercentage));

    // Calcula a razão entre passes interceptados e o número de passes tentados
    let interceptionsPercentage = (passesInterceptados - 0.095) / 0.04;
    interceptionsPercentage = Math.min(2.375, Math.max(0, interceptionsPercentage));

    // Calcula o QB Rating
    let qbRating = (completionsPercentage + yardsPerAttempt + touchdownPercentage + interceptionsPercentage) * 100 / 6;

    return qbRating.toFixed(2); // Arredonda para 2 casas decimais
}

// Exemplo de uso
let passesTentados = 200;
let passesCompletos = 150;
let jardasPassadas = 2000;
let passesTouchdown = 15;
let passesInterceptados = 5;

let qbRating = calculateQBRating(passesTentados, passesCompletos, jardasPassadas, passesTouchdown, passesInterceptados);

console.log("QB Rating: " + qbRating);