const grafico1 = document.getElementById("grafico1")

let meses = ["Janeiro", "Feveiro", "Março", "Abril"]



new Chart(grafico1, {
    type: 'bar',
    data: {
        labels: meses,
        datasets: [{
            label: 'Clicks',
            data: [05, 10, 14, 33],
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