const long = document.getElementById("long")
const lati = document.getElementById("lati")

function mostrarLocalizacao(pos){
    console.log(pos)
    lati.innerHTML = `Latitude: ${pos.coords.latitude}`
    long.innerHTML = `Longitude: ${pos.coords.longitude}`
}

function erroLocalizacao(erro){
    console.log("erro ao obter a localização: " + erro)
}

if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(mostrarLocalizacao, erroLocalizacao)
} else {
    console.log("Geolocalização não suportada")
}



console.log()