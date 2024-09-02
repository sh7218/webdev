// Web Development and Programming (CSCI-UA 61) - 001 
// Assignment 3
// Subi Hwang
// Oct 8, 2023 

// referred to the class example 

// JavaScript Requirements:
 
// You need to create 3 different JavaScript functions within one external file called asg3.js.  
 
//Make sure to place all the scripts and files for this assignment inside asg3 folder.

// 1) Prize application (30%):
// Include a JavaScript function called randArray()  that does the following:

function randArray()
{

// Create an array of at least five items that people can win.
let sweets = ["chocolate", "caramel", "icecream", "candy", "scone"]; 

// Create an array with images matching each of the prize from above 
// (The index of name of the prize and it's image should be the same in both arrays).

let sweetsImages= ["sweets/chocolate.jpeg", "sweets/caramel.jpeg", "sweets/icecream.jpeg"
	, "sweets/candy.jpeg", "sweets/scone.jpeg"];

// Use a loop to output all of the array elements (i.e. outputs the prize names so 
// the user can see the list of prizes)

let output = "";

for (i = 0; i < sweets.length; i++)
{

output += "<p>" + " sweets " + String(i+1) + " is " + sweets[i];
}

// Hint: Remember that you are randomizing the array index value.
let rand = Math.floor (Math.random()* sweets.length);

output += "<h3 id='header'> Congratulations! You won a " + sweets[rand] + "</h3>";

//The output should be displayed along with the prize and also the photo of the prize 
//in a new html document. The new document should also use a style .css.

document.open();
document.write("<!DOCTYPE html><html><head><meta charset='utf-8'>");
document.write("<title>Subi Hwang</title><meta name='viewport' content='width=device-width, initial-scale=1.0'>");
document.write("<link rel='stylesheet' href='styles/styles.css'></head><body>'");	

document.write("<header><h1>Web Development and Programming</h1></header><nav>");    	
document.write("<a href='../index.html'>Home</a><a href='../contact.html'>Contact</a><a href='../asg2/index.html'>");  
document.write("Assignment #2</a><a href='index.html'>Assignment #3</a></nav><main><h2>Random Sweets For You</h2><p><hr>");

// output the new conetnt
document.write(output);

// output the image from the array image with index selected at random
document.write("<p><img src='" + sweetsImages[rand] + "'>");

// add a link to go back to the main script page
document.write("<p><a href='index.html'> go back to the previous page </a>");

document.write("</main><footer>Footer <br>&copy; 2023 Subi Hwang</footer></body></html>");

}

// 2) Random Image Application: (30%):
 
// Create an application that displays a random image every time you load the page.

// Use window.onload() to execute this script
window.onload= randImage;

// Include a JavaScript function called randImage() that does the following:

function randImage(){

// Create an array for all the images (the array values should be the names of the src for each image)
// Use at least 5 images in this example
let imgArray = new Array("paris.jpeg","london.jpeg", "italy.jpeg", "germany.jpeg", "switzerland.jpeg");

let index = Math.floor(Math.random() * imgArray.length);

let obj = document.getElementById('imgone');

obj.src= imgArray[index];
}

// 3) Slideshow Application (30%):
// Create an application that displays a slideshow with a strat and stops buttons. 
// The start button should be connected to a start() javascript function and the 
// stop() should be connected to stop() javascript function. 

// use an array to store images to cycle through for slideshow
var imagearray = ["cat1.jpeg","cat2.jpeg", "cat3.jpeg", "cat4.jpeg", "cat5.jpeg"];

var index = 0;

var myFlag; // use to stop slideshow


// The functions should be triggered when the user clicks on the start or the stop buttons.
// Make sure to use one of the timer (setTimeout or setInterval) functions to create 
// the repetition controlled by time.

function start()
{

	// make sure to reset the index when it exceed the length of the array (index out of bound error)
	if (index == imagearray.length)
	{
	 index=0;

	}
	// change src of image in document to an image within the array
	document.images[1].src= imagearray[index];

	document.images[1].style.width="200px";
	document.images[1].style.height="200px";

	// keep track of the index
	index++; 

	// use setTimeout builtin JavaScript function to call function (recursive) every second
	myFlag = setTimeout(start, 1000)

}

function stop()
{
	clearTimeout(myFlag)// use Window DOM event built-in function to clear time
}





























