let nome = new String("Luiz Claudio Jurazek de alvarenga Luiz")

console.log(nome)

console.log(nome.search(/claudio/i)) // i - indica que nao deve ser usado case sensitive

console.log(nome.match(/e/ig)) // G indica que que quero todas as ocorrencias

console.log(nome.replace(/luiz/ig, 'Jose'))