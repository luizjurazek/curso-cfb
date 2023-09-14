const grafico1 = document.getElementById("grafico1")

let oee = ["Disponibilidade", "Qualidade", "Performance"]

let valores = [];


let grafico = new Chart(grafico1, {
    type: 'bar',
    data: {
        labels: oee,
        datasets: [{
            label: 'OEE',
            data: valores,
            borderWidth: 1,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
            ],
            borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
            ]
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

const obterDados = () => {
    let endpointLocal = "https://cfbcursos.luizjurazekk.repl.co/"
    fetch(endpointLocal).then(res => res.json())
    .then(dados => {
        valores[0]= dados.disponibilidade;
        valores[1] = dados.qualidade;
        valores[2] = dados.performance;
        console.log(valores)
        grafico.update()
        
    }).catch(err => {
        console.error(err)
    })
}

let intervalo = setInterval(obterDados, 3000)