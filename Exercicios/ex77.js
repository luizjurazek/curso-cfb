// Função para inverter uma string
function inverterString(str) {
    return str.split('').reverse().join('');
  }
  
  // Função para ler uma string, inverter e imprimir
  function processarString() {
    // Lê a string do usuário
    let entrada = prompt('Digite uma string: ');
  
    // Inverte a string
    let invertida = inverterString(entrada);
  
    // Imprime a string invertida
    console.log('String invertida: ' + invertida);
  }
  
  // Chama a função para processar a string
  processarString();