// Web Development and Programming (CSCI-UA 61) - 001 
// Assignment 2
// Subi Hwang
// Oct 1, 2023 

// JavaScript #2 Requirements:
 
// You need to create 3 different JavaScript functions within one .js external file called asg2.js.  
 
// Make sure to place all the scripts and files for this assignment inside asg2 folder.

// 1) JavaScript Simple Style Application: change() function (30%):

// Associate this button with an event onclick=”change()”. So, when the user clicks this button, 
// then the function change() should be executed.
// The change() function should be placed inside an external asg2.js file.


// When the user clicks on this button “change styles”, you need to change 3 styles 
// of one or more element(s) within the document such as a <div>, <p>, <h1> or <body> element/object. 
// You could, for instance, change the background color, the text color, the font size and font type, 
// the border, or the padding of an element.

function changeStyles()
{
	// access the object t, <p> element,  with id =text

	let t = document.getElementById("text");

    t.innerHTML = "UPPER"; // 1. change the text content 
	t.style.fontSize = '40px'; // 2. change the font size
	t.style.fontWeight = 'bold'; // 3. change the font weight
}

// 2) JavaScript Swap Text Application: swapT() function (30%):
 
// Create a JavaScript function called swapT() within the asg2.js  to do the following:
 
// The function should be triggered when the user clicks anywhere on these two paragraphs using the onclick() event.
 
// The function should swap the text of the two paragraphs each time you click on either of the paragraphs.

function swapT()

{
// access the first object with id=p1
let obj1 = document.getElementById('p1');

let textHtml1 = obj1.innerHTML;

// access the 2nd object with id=p2

let obj2 = document.getElementById('p2');

let textHtml2 = obj2.innerHTML;

// swap content of the two objects

// reset the text and html content of the obj1 to the content of the obj2
obj1.innerHTML = textHtml2;

// reset the text and html content of the obj2 to the content of the obj1

obj2.innerHTML = textHtml1;

}

// 3) Swap Image Application: swapImg() function (30%):
 
// Create a JavaScript function called swapImg() within asg2.js to do the following:
 
// The function should be triggered when the user clicks anywhere on these two images using the onclick() event.
// The function should swap the two images each time you click on either of the images.

function swapImg()

{
// access the first object with id=p1
let obj3 = document.getElementById('img1');

let textHtml3 = obj3.innerHTML;

// access the 2nd object with id=p2

let obj4 = document.getElementById('img2');

let textHtml4 = obj4.innerHTML;

// swap content of the two objects

// reset the text and html content of the obj3 to the content of the obj4
obj3.innerHTML = textHtml4;

// reset the text and html content of the obj4 to the content of the obj3

obj4.innerHTML = textHtml3;

}
