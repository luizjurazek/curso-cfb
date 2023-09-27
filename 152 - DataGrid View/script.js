const configDataGridView = {
    endpoint: "produtos.json",
    idDestino: "dgvDados"
}

const dataGridView = (config) => {
    const dgvDados = document.getElementById(config.idDestino)
    fetch(config.endpoint)
    .then(res => res.json())
    .then(res => {
        res.forEach((el) => {
            const dgvLinha = document.createElement("div")
            dgvLinha.setAttribute("class", "dgvLinha")

            const c1 = document.createElement("div")
            c1.setAttribute("class", "item c1")
            c1.innerHTML = el.id
            dgvLinha.appendChild(c1)

            const c2 = document.createElement("div")
            c2.setAttribute("class", "item c2")
            c2.innerHTML = el.produto
            dgvLinha.appendChild(c2)

            const c3 = document.createElement("div")
            c3.setAttribute("class", "item c3")
            c3.innerHTML = el.marca
            dgvLinha.appendChild(c3)

            const c4 = document.createElement("div")
            c4.setAttribute("class", "item c4")
            c4.innerHTML = el.modelo
            dgvLinha.appendChild(c4)

            const c5 = document.createElement("div")
            c5.setAttribute("class", "item c5")
            c5.innerHTML = "D - E - V"
            dgvLinha.appendChild(c5)

            dgvDados.appendChild(dgvLinha)
        })
        console.log(res)
    })
}

dataGridView(configDataGridView)



/* <div class="dgvLinha">
    <div class="item c1">01</div>
    <div class="item c2">Processador</div>
    <div class="item c3">Intel</div>
    <div class="item c4">i7</div>
    <div class="item c5">D - E - V</div>
</div> */