// Web Development and Programming (CSCI-UA 61) - 001 
// Assignment 5
// Subi Hwang
// Nov 6, 2023 

// Part #2: Creating a new HTML elements and text nodes Application:
// Adding New Nodes Elements application (newNodes.html):  
// Adding new nodes elements and text to an already existing HTML document! 

// Create a newNodes.js script to create two more items (nodes and also text nodes for each such as Products and About.
// The script should also change the colors of all the items in the navigations by changing the CSS class style name within your .js script.
// Make sure to link to this html page (newNodes.html) from your assignment 5 index.

var obj = document.getElementById("bt1");
obj.addEventListener("click", myFunction);

function myFunction() {
    
    var node = document.createElement("li");
    var textnode = document.createTextNode("Products");
    node.appendChild(textnode);
    document.getElementById("myList").appendChild(node);

    let node2 = document.createElement("li");
    let textnode2 = document.createTextNode("About");
    node2.appendChild(textnode2);
    document.getElementById("myList").appendChild(node2);

//querySelectorAll('li') is a method that selects an array collection of object of the same 
//type as all <p> or all <h1> or all <div> and so on.

let listItems = document.querySelectorAll('li');          

// ADD A CLASS OF blue TO ALL LIST ITEMS
                                                 
    for (let i = 0; i < listItems.length; i++) {            
      listItems[i].className = 'blue';                                 
      
    }

}