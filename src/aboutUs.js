const aboutDisplay = () => {
    const content = document.getElementById("content")
    const img = document.createElement("img")
    const header = document.createElement("h1")
    const text = document.createElement("p")
    
    header.textContent = "About Us"
    text.textContent  = "We have been serving Pizzas since the 1800s! One of the longest standing pizza companies providing top quality Pizzas!!"
    
    content.appendChild(header)
    content.appendChild(text)
    }

export {aboutDisplay}