// Função para verificar se um ano é bissexto
function isBissexto(ano) {
    if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}

// Exemplos de uso
const anosBisextos = [1600, 1996, 2000, 2004, 2008, 2012, 2016, 2400, 2800];
const anosNaoBisextos = [1500, 1974, 1982, 1983, 1990, 2018, 2022, 2030, 2038];

anosBisextos.forEach(ano => {
    console.log(`${ano} é bissexto? ${isBissexto(ano)}`);
});

anosNaoBisextos.forEach(ano => {
    console.log(`${ano} é bissexto? ${isBissexto(ano)}`);
});
