// Faça um algoritmo que transforme uma velocidade fornecida em m/s pelo usuário para
// Km/h. Para tal, multiplique o valor em m/s por 3,6.


function metrosPorSegundoParaKMporHora(metrosPorSegundo){
    let kmPorHora = metrosPorSegundo * 3.6
    console.log(metrosPorSegundo + "m/s é igual a "+ kmPorHora +" Km/h.")
}

metrosPorSegundoParaKMporHora(100)