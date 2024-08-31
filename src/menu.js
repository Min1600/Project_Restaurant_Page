

const menuDisplay = () => {
    const content = document.getElementById("content")
    const img = document.createElement("img")
    const header = document.createElement("h1")
    const text = document.createElement("p")
    
    header.textContent = "Menu"
    text.textContent  = "Choose from our variety of delicious pizzas!!"
    
    content.appendChild(header)
    content.appendChild(text)
    }

export {menuDisplay}