class Login {
    static logado = false;
    static matlogado = null;
    static nomelogado = null;
    static acessologado = null;
    static estilocss = null;
    static callback_ok = null;
    static callback_nao_ok = null;
    // static endpoint = "https://loginv1.luizjurazekk.repl.co/"
    // //https://loginv1.luizjurazekk.repl.co/?matricula=123&senha=321
    static config = {
        btnColor: "#048",
        imgPath: 'img/logo.png'
    };


    static login = (callback_ok, callback_nao_ok, config = null) => {
        if(config != null){
            this.config = config
        }

        this.callback_ok = () => {callback_ok()}
        this.callback_nao_ok = () => {callback_nao_ok()}

        // this.endpoint += `?matricula=${this.mat}&senha=${this.pass}`
        this.estilocss = `.fundoLogin {display: flex;justify-content: center;align-items: center;width: 100%;
            height: 100vh;position: absolute;top: 0px;left: 0px;background-color: rgba(0, 0, 0, 0.75);box-sizing: border-box;}
        
            .baseLogin {display: flex;justify-content: center;align-items: stretch;width: 60vw;box-sizing: inherit;}
        
            .elementosLogin {display: flex;flex-direction: column;justify-content: center;align-items: flex-start;width: 50%;
            background-color: #bbb;padding: 10px;border-radius: 10px 0px 0px 10px;box-sizing: inherit;}
        
            .logoLogin {display: flex;flex-direction: column;justify-content: center;align-items: center;
            width: 50%;background-color: #bbb;padding: 10px;border-radius: 0px 10px 10px 0px;box-sizing: inherit;}
        
            .logoLogin img {width: 90%;}
        
            .campoLogin {display: flex;justify-content: flex-start;align-items: flex-start;flex-direction: column;box-sizing: inherit;
            margin-bottom: 15px;width: 100%;}
        
            .campoLogin label {font-size: 18px;margin-bottom: 3px;}
        
            .campoLogin input {font-size: 18px;padding: 5px;background-color: #fff;border-radius: 5px;
            outline: none;width: 100%;}
        
            .botoesLogin {display: flex;justify-content: space-around;align-items: center;
            width: 100%;box-sizing: inherit;}
        
            .botoesLogin button {cursor: pointer;background-color: ${this.config.btnColor};color: #fff;border-radius: 5px;
            padding: 10px 5px;width: 12vw;box-sizing: inherit;}`
            const linkestilo =  document.createElement("style")
            linkestilo.setAttribute("id","id_estiloLogin")
            linkestilo.innerHTML = this.estilocss
            document.head.appendChild(linkestilo)

            const corpo = document.body;
            const fundoLogin = criarElemento("div", "fundoLogin", "fundoLogin", "", "")

            const baseLogin = criarElemento("div", "baseLogin", "baseLogin", "", "")
            fundoLogin.appendChild(baseLogin)

            const elementosLogin = criarElemento("div", "elementosLogin", "elementosLogin", "", "")
            baseLogin.appendChild(elementosLogin)

            const campoLoginUsername = criarElemento("div", "campoLoginUsername", "campoLogin", "", "")
            elementosLogin.appendChild(campoLoginUsername)

            const labelUsername = document.createElement("label")
            labelUsername.innerHTML = "Username"
            campoLoginUsername.appendChild(labelUsername)

            const inputName = criarElemento("input", "f_username", "f_username", "", "text")
            inputName.setAttribute("name","f_username")
            campoLoginUsername.appendChild(inputName)

            const campoLoginPassword = criarElemento("div", "campoLoginPassword", "campoLogin", "", "")
            elementosLogin.appendChild(campoLoginPassword)

            const labelPassword = document.createElement("label")
            labelPassword.innerHTML = "Password"
            campoLoginPassword.appendChild(labelPassword)

            const inputPassword = criarElemento("input", "f_senha", "f_senha", "", "password")
            inputPassword.setAttribute("name","f_senha")
            campoLoginPassword.appendChild(inputPassword)

            const botoesLogin = document.createElement("div")
            botoesLogin.setAttribute("class", "botoesLogin")

            const btnLogin = document.createElement("button")
            btnLogin.setAttribute("id", "btn_login")
            btnLogin.innerHTML = "Login"
            btnLogin.addEventListener("click", (evt)=>{
               this.verificaLogin()
            })

            const btnCancelar = document.createElement("button")
            btnCancelar.setAttribute("id", "btn_cancelar")
            btnCancelar.innerHTML = "Cancelar"
            btnCancelar.addEventListener("click", (evt)=> {
                this.fechar();
            })

            botoesLogin.append(btnLogin, btnCancelar)
            elementosLogin.appendChild(botoesLogin)

            const logoLogin = document.createElement("div")
            logoLogin.setAttribute("id", "logoLogin")
            logoLogin.setAttribute("class", "logoLogin")

            const imgLogo = document.createElement("img")
            imgLogo.setAttribute("src", config.imgPath)
            logoLogin.appendChild(imgLogo)
            
            baseLogin.appendChild(logoLogin)

            document.body.prepend(fundoLogin)
    }

    static verificaLogin = () => {
        const mat = document.getElementById("f_username").value;
        const pass = document.getElementById("f_senha").value;

        const endpoint = `https://loginv1.luizjurazekk.repl.co/?matricula=${mat}&senha=${pass}`

        fetch(endpoint)
            .then(res => res.json())
            .then(res => {
                if(res){
                    this.logado = true;
                    this.matlogado = mat;
                    this.nomelogado = res.nome;
                    this.acessologado = res.acesso;
                    console.log(res)
                    this.callback_ok()
                    this.fechar()
                    return true;  
                } else {
                    this.logado = false;
                    this.matlogado = null;
                    this.nomelogado = null;
                    this.acessologado = null;
                    console.log(res)
                    this.callback_nao_ok()
                    alert("Usuário não encontrado")
                    return false  
                }
            })
    }

    static fechar = () => {
        const id_estiloLogin = document.getElementById("id_estiloLogin")
        id_estiloLogin.remove()

        const fundoLogin = document.getElementById("fundoLogin")
        fundoLogin.remove()
    }
}

function criarElemento(elName, elId, elClass, elContent, elType){
    const elemento = document.createElement(elName)
    elemento.id = elId
    elemento.type = elType
    elemento.classList.add(elClass)
    elemento.innerHTML = elContent

    return elemento
}

export {
    Login
}