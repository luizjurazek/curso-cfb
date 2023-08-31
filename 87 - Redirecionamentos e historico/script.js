const url = document.getElementById("url")
const btn_url = document.getElementById("btn_url")

btn_url.addEventListener("click", (evt)=>{
    // window.location = "https://www.google.com.br"  
    // window.location.replace("https://www.google.com.br")
    // window.location.assign("https://www.google.com.br")
    // window.location.reload()
    window.history.back()
})