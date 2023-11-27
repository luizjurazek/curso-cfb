// Função para calcular a média de um array
function calcularMedia(array) {
    const soma = array.reduce((acc, valor) => acc + valor, 0);
    return soma / array.length;
}

// Array para armazenar os índices pluviométricos de cada dia do mês de junho
const indicePluviometrico = [];

// Preencher o array com dados fictícios para teste
for (let i = 1; i <= 30; i++) {
    // Substitua esta linha pelo código que lê o índice pluviométrico de cada dia
    indicePluviometrico.push(Math.random() * 10); // Gera valores aleatórios entre 0 e 10 para teste
}

// Encontrar o dia que mais choveu
const diaMaisChuvoso = indicePluviometrico.indexOf(Math.max(...indicePluviometrico)) + 1;

// Encontrar o dia que menos choveu
const diaMenosChuvoso = indicePluviometrico.indexOf(Math.min(...indicePluviometrico)) + 1;

// Dividir o mês em duas quinzenas
const primeiraQuinzena = indicePluviometrico.slice(0, 15);
const segundaQuinzena = indicePluviometrico.slice(15);

// Calcular a média pluviométrica de cada quinzena
const mediaPrimeiraQuinzena = calcularMedia(primeiraQuinzena);
const mediaSegundaQuinzena = calcularMedia(segundaQuinzena);

// Exibir os resultados
console.log(`Dia mais chuvoso: ${diaMaisChuvoso}`);
console.log(`Dia menos chuvoso: ${diaMenosChuvoso}`);
console.log(`Média pluviométrica primeira quinzena: ${mediaPrimeiraQuinzena}`);
console.log(`Média pluviométrica segunda quinzena: ${mediaSegundaQuinzena}`);