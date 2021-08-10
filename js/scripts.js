console.log("Hello World!")

let text = "This was added via JS";
var newParagraph = document.createElement("p"); //creates a new paragraph element
var newText = document.createTextNode(text); //creates text along with output to be displayed 
newParagraph.appendChild(newText); //created text is appended to the paragraph element created
document.body.appendChild(newParagraph); // created paragraph and text along with output is appended to the document body
