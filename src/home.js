import "./styles.css";
import { menuDisplay } from "./menu"
import {aboutDisplay} from "./aboutUs"
import pizzaImg from "./Pizza.jpg"

const mainDisplay = () => {

const content = document.getElementById("content")
const img = document.createElement("img")
const header = document.createElement("h1")
const text = document.createElement("p")
const buttons = document.querySelector(".buttons")

header.textContent = "Main Restaurant Page"
text.textContent  = "Welcome to the world famaous pizza palace!!"
img.src = pizzaImg


buttons.addEventListener("click", (e) =>{
    if(e.target.id === "menu"){
    content.textContent =""
    menuDisplay()
    }else if(e.target.id === "home"){
        content.textContent =""
        mainDisplay()
    }else if (e.target.id === "about"){
        content.textContent =""
        aboutDisplay()
    }
})

content.appendChild(header)
content.appendChild(text)
content.appendChild(img)
}

mainDisplay()