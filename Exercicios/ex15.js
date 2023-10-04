// Num dia de sol, você deseja medir a altura de um prédio, porém, a trena não é
// suficientemente longa. Assumindo que seja possível medir sua sombra e a do prédio no
// chão, e que você lembre da sua altura, faça um programa para ler os dados necessários e
// calcular a altura do prédio.

// Calcula a altura do prédio usando a proporção entre as sombras e as alturas
function calcAlturaPredio(altPessoa, sombPredio, sombPessoa){
    let alturaPredio = (altPessoa * sombPredio) / sombPessoa;
    console.log("A altura estimada do prédio é de aproximadamente " + alturaPredio.toFixed(2) + " metros.");
}

calcAlturaPredio(20, 12, 1.67)

