console.log("Hello World!")

document.body.onclick = addElement

function addElement() {

    let newDiv = document.createElement("div")
    let newContent = document.createTextNode("Text added via 'onclick'")
    newDiv.appendChild(newContent)

    let currentDiv = document.getElementById("start")
    document.insertBefore(newDiv, currentDiv)

}
