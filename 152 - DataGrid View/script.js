const configDataGridView = {
    endpoint: "http://127.0.0.1:1880/produtos",
    idDestino: "dgvDados"
}

const dataGridView = (config) => {
    const dgvDados = document.getElementById(config.idDestino)
    dgvDados.innerHTML = ""
    fetch(config.endpoint)
        .then(res => res.json())
        .then(res => {
            res.forEach((el) => {
                const dgvLinha = document.createElement("div")
                dgvLinha.setAttribute("class", "dgvLinha")

                const c1 = document.createElement("div")
                c1.setAttribute("class", "item c1")
                c1.innerHTML = el.n_id_produto
                dgvLinha.appendChild(c1)

                const c2 = document.createElement("div")
                c2.setAttribute("class", "item c2")
                c2.innerHTML = el.s_nome_produto
                dgvLinha.appendChild(c2)

                const c3 = document.createElement("div")
                c3.setAttribute("class", "item c3")
                c3.innerHTML = el.s_marca_produto
                dgvLinha.appendChild(c3)

                const c4 = document.createElement("div")
                c4.setAttribute("class", "item c4")
                c4.innerHTML = el.s_modelo_produto
                dgvLinha.appendChild(c4)

                const iconDelete = document.createElement("img")
                iconDelete.setAttribute("class", "dgvIcone")
                iconDelete.setAttribute("src", "./icons/delete.svg")
                iconDelete.addEventListener("click", (evt) => {
                    const id = el.n_id_produto;
                    const linha = evt.target.parentNode.parentNode;
                    const endpoint = `http://127.0.0.1:1880/removeproduto/${id}`;
                    fetch(endpoint)
                        .then(res => {
                            if (res.status == 200) {
                                linha.remove()
                            }
                        })
                })

                const iconEdit = document.createElement("img")
                iconEdit.setAttribute("class", "dgvIcone")
                iconEdit.setAttribute("src", "./icons/edit.svg")

                iconEdit.addEventListener("click", (evt) => {
                    document.querySelector("#janelaEdit").classList.remove("ocultar")
                    const id = el.n_id_produto;
                    const produto = el.s_nome_produto;
                    const marca = el.s_marca_produto;
                    const modelo = el.s_modelo_produto;

                    document.querySelector("#f_id_editar").value = id;
                    document.querySelector("#f_produto_editar").value = produto;
                    document.querySelector("#f_marca_editar").value = marca;
                    document.querySelector("#f_modelo_editar").value = modelo;
                })

                const iconView = document.createElement("img")
                iconView.setAttribute("class", "dgvIcone")
                iconView.setAttribute("src", "./icons/visibility.svg")
                iconView.addEventListener("click", (evt) => {
                    document.querySelector("#janelaView").classList.remove("ocultar")
                    const id = el.n_id_produto;
                    const endpoint = `http://127.0.0.1:1880/getproduto/${id}`;
                    fetch(endpoint)
                        .then(res => res.json())
                        .then(res => {
                            console.log(res)
                            document.querySelector("#f_id").value = res[0].n_id_produto;
                            document.querySelector("#f_produto").value = res[0].s_nome_produto;
                            document.querySelector("#f_marca").value = res[0].s_marca_produto;
                            document.querySelector("#f_modelo").value = res[0].s_modelo_produto;

                        })
                })

                const c5 = document.createElement("div")
                c5.setAttribute("class", "item c5")
                c5.append(iconView, iconEdit, iconDelete)
                dgvLinha.appendChild(c5)


                dgvDados.appendChild(dgvLinha)
            })
            console.log(res)
        })
}

dataGridView(configDataGridView)

document.querySelector("#btn_ok").addEventListener("click", (evt) => {
    document.querySelector("#janelaView").classList.add("ocultar")
})

document.querySelector("#btn_salvar").addEventListener("click", (evt) => {
    const id = document.querySelector("#f_id_editar").value;
    const produto = document.querySelector("#f_produto_editar").value;
    const marca = document.querySelector("#f_marca_editar").value;
    const modelo = document.querySelector("#f_modelo_editar").value;

    const endpoint = `http://127.0.0.1:1880/editarproduto/${id}/${produto}/${marca}/${modelo}`;

    fetch(endpoint)
        .then(res => {
            console.log(res.status)
        })
    document.querySelector("#janelaEdit").classList.add("ocultar")
    location.reload()
})


/* <div class="dgvLinha">
    <div class="item c1">01</div>
    <div class="item c2">Processador</div>
    <div class="item c3">Intel</div>
    <div class="item c4">i7</div>
    <div class="item c5">D - E - V</div>
</div> */