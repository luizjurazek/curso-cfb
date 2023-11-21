function calcularCrescimentoPopulacional(populacaoA, taxaA, populacaoB, taxaB) {
    let anos = 0;
  
    while (populacaoA <= populacaoB) {
      populacaoA *= 1 + taxaA / 100; // Aumento da população A com a taxa de natalidade
      populacaoB *= 1 + taxaB / 100; // Aumento da população B com a taxa de natalidade
      anos++;
    }
  
    return anos;
  }
  
  const populacaoA = 5000000;
  const taxaNatalidadeA = 3;
  
  const populacaoB = 7000000;
  const taxaNatalidadeB = 2;
  
  const tempoNecessario = calcularCrescimentoPopulacional(populacaoA, taxaNatalidadeA, populacaoB, taxaNatalidadeB);
  
  console.log(`Serão necessários ${tempoNecessario} anos para que a população do país A ultrapasse a população do país B.`);