const configDataGridView = {
    endpoint: "http://127.0.0.1:3000/produtos",
    idDestino: "dgvDados"
}

const dataGridView = (config) => {
    const dgvDados = document.getElementById(config.idDestino)
    dgvDados.innerHTML = ""
    fetch(config.endpoint)
        .then(res => {
            if (!res.ok) {
                throw new Error('Erro na solicitação')
            }
            return res.json()
        })
        .then(res => {
            res.forEach((el) => {
                const dgvLinha = document.createElement("div")
                dgvLinha.setAttribute("class", "dgvLinha")

                const c1 = criarElemento("div", "item c1", el.n_id_produto)
                dgvLinha.appendChild(c1)

                const c2 = criarElemento("div", "item c2", el.s_nome_produto)
                dgvLinha.appendChild(c2)

                const c3 = criarElemento("div", "item c3", el.s_marca_produto)
                dgvLinha.appendChild(c3)

                const c4 = criarElemento("div", "item c4", el.s_modelo_produto)
                dgvLinha.appendChild(c4)

                // Deletar item no banco de dados
                const iconDelete = criarIconesElementos("./icons/delete.svg", (evt) => {
                    const id = el.n_id_produto;
                    const linha = evt.target.parentNode.parentNode;
                    const endpoint = `http://127.0.0.1:3000/removerproduto/${id}`;
                    fetch(endpoint)
                        .then(res => {
                            if (res.status == 200) {
                                linha.remove()
                            } else {
                                throw new Error('Erro na solicitação')
                            }
                            return res.json()
                        })
                        alert(`Produto de id ${id} removido com sucesso!`)
                })

                // Editar produto na Janela
                const iconEdit = criarIconesElementos("./icons/edit.svg", (evt) => {
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

                // Visualizar produto na janela
                const iconView = document.createElement("img")
                iconView.setAttribute("src", "./icons/visibility.svg")
                iconView.addEventListener("click", (evt) => {
                    document.querySelector("#janelaView").classList.remove("ocultar")
                    const id = el.n_id_produto;
                    const endpoint = `http://127.0.0.1:3000/getproduto/${id}`;
                    fetch(endpoint)
                        .then(res => {
                            if (!res.ok) {
                                throw new Error('Erro na solicitação')
                            }
                            return res.json()
                        })
                        .then(res => {
                            console.log(res)
                            document.querySelector("#f_id").value = res[0].n_id_produto;
                            document.querySelector("#f_produto").value = res[0].s_nome_produto;
                            document.querySelector("#f_marca").value = res[0].s_marca_produto;
                            document.querySelector("#f_modelo").value = res[0].s_modelo_produto;

                        })
                })

                const c5 = criarElemento("div", "item c5", null)
                c5.append(iconView, iconEdit, iconDelete)
                dgvLinha.appendChild(c5)

                dgvDados.appendChild(dgvLinha)
            })
        })
        .catch(error => {
            console.log("Erro na requisição: " + error)
        })
}

dataGridView(configDataGridView)

// Salvar edição no produto
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

// Fechar o janela view
document.querySelector("#btn_ok").addEventListener("click", (evt) => {
    document.querySelector("#janelaView").classList.add("ocultar")
})

// Fechar o janela edit
document.querySelector("#btn_cancelar").addEventListener("click", (evt) => {
    document.querySelector("#janelaEdit").classList.add("ocultar")
})

// Fechar o Janela criar
document.querySelector("#btn_cancelar_criar").addEventListener("click", (evt) => {
    document.querySelector("#janelaCriar").classList.add("ocultar")
})

// Fechar o janela criar
document.querySelector("#btn_criar_element").addEventListener("click", (evt) => {
    document.querySelector("#janelaCriar").classList.remove("ocultar")
})


// Criar elemento 
document.querySelector("#btn_criar_elemento").addEventListener("click", (evt) => {
    const produto = document.getElementById("f_produto_criar").value;
    const marca = document.getElementById("f_marca_criar").value;
    const modelo = document.getElementById("f_modelo_criar").value;

    if (produto == "" || marca == "" || modelo == "") {
        alert("Preencha todos os itens")
    } else {
        // Criar um objeto com os dados a serem enviados no corpo da solicitação
        const data = {
            produto: produto,
            marca: marca,
            modelo: modelo
        };

        // Criar as opções da solicitação
        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json" // Indica que estamos enviando JSON no corpo da solicitação
            },
            body: JSON.stringify(data) // Converte o objeto de dados em JSON
        };

        // Especifique o URL do endpoint de destino
        const endpoint = "http://127.0.0.1:3000/criarproduto";

        // Realize a solicitação POST
        fetch(endpoint, requestOptions)
            .then(response => {
                if (response.ok) {
                    console.log("Solicitação bem-sucedida");
                } else {
                    console.error("Erro na solicitação");
                }
            })
            .catch(error => {
                console.error("Erro na solicitação:", error);
            });

        document.querySelector("#janelaCriar").classList.add("ocultar")
        location.reload()
    }
});

// Funções auxiliares
// Criar elementos da tabela
function criarElemento(tipoElemento, classes, conteudo) {
    const el = document.createElement(tipoElemento)
    el.setAttribute("class", classes)
    el.innerHTML = conteudo
    return el
}

// Criar icones dos elementos
function criarIconesElementos(src, clickHandler) {
    const icon = document.createElement("img")
    icon.setAttribute("class", "dgvIcone")
    icon.setAttribute("src", src)
    icon.addEventListener("click", clickHandler)
    return icon
}