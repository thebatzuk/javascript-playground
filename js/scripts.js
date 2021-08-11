console.log("Hello World!")

document.body.onload = init

function init() {
    var titleElem = document.getElementById("title")
    titleElem.onclick = addElement
}

function addElement() {

    var newDiv = document.createElement("div")
    var newContent = document.createTextNode("Text added via 'onclick'")
    newDiv.appendChild(newContent)
    
    var mainSection = document.getElementById("main")
    var currentDiv = document.getElementById("start")
    mainSection.insertBefore(newDiv, currentDiv)

}
