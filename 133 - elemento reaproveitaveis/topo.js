const head = document.head;
const body = document.body;

const style = "<link rel='stylesheet' type='text/css' href='topo.css'>"
head.innerHTML += style


const topo = document.createElement("div")
topo.setAttribute("id", "topo")
topo.setAttribute("class", "topo")

const logo =
    `<div id="logo" class="wrapper-logo">
    <img src="./img/logo.png" title="logo"/>
</div>`

const menu =
    `<div id="wrapper-menu" class="wrapper-menu">
        <ul id="menu" class="menu">
            <li class="menu-item">
                <a href="#">Item</a>
            </li>
            <li class="menu-item">
                <a href="#">Item</a>
            </li>
            <li class="menu-item">
                <a href="#">Item</a>
            </li>
            <li class="menu-item">
                <a href="#">Item</a>
            </li>
        </ul>
     </div>`

     console.log(menu)
     
topo.innerHTML += logo
topo.innerHTML += menu
body.prepend(topo)