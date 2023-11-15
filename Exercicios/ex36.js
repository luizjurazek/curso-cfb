// Função para ler a nota de um exame
function lerNota(nomeExame) {
    return parseFloat(prompt("Digite a nota do exame " + nomeExame + ":"));
}

// Lê as notas dos exames
var notaI = lerNota("I");
var notaII = lerNota("II");
var notaIII = lerNota("III");
var notaIV = lerNota("IV");
var notaV = lerNota("V");

// Calcula a média das notas
var media = (notaI + notaII + notaIII + notaIV + notaV) / 5;

// Determina a classificação do aluno
if (media >= 70) {
    console.log("Classificação: A - Passou em todos os exames.");
} else if (notaI >= 60 && notaII >= 60 && notaIV >= 60 && (notaIII < 60 || notaV < 60)) {
    console.log("Classificação: B - Passou em I, II e IV, mas não em III ou V.");
} else if (notaI >= 60 && notaII >= 60 && (notaIII >= 60 || notaIV >= 60) && notaV < 60) {
    console.log("Classificação: C - Passou em I e II, III ou IV, mas não em V.");
} else {
    console.log("Reprovado - Outras situações.");
}