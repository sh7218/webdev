// Web Development and Programming (CSCI-UA 61) - 001 
// Assignment 4
// Subi Hwang
// Oct 29, 2023 

/*JavaScript  Requirements:
 
You need to create 1 J one external javascript file called asg4.js (sign.js).  
 
Make sure to place all the scripts and files for this assignment inside asg4 folder.

Guidelines:

Your html page should include an input field with type=date.
You should have a button with onclick="sign()" to check their sign.
Link to an external sign.js
Tip: You can have a multidimensional array called mysign that will include for each sign the following: 
the first Month for the sign, the 2nd Month for the sign, the first day and the last day for the first month range, 
the first day and the last day for the 2nd month range for that sign, the name of the sign, the fortune, 
and finally, the image src for that sign.

Provide the output in the same page inside a textarea field with no id used for this form value. 
Make sure the webpage is well designed.

*/

function sign()
{

// get the date value from the form
const objValue = document.querySelector("#mydate").value;

// create date object based on value (birthday) from the user
let mydate = new Date(objValue);

// get the day and the month

let birthDate = mydate.getUTCDate(); 

let birthMonth = mydate.getUTCMonth() + 1;

console.log(birthMonth); //

// set up multi arrays for Zodiac Signs
let mysign = new Array (12);

// initialize the multidimensional array manually for each row
// initialize the multidimensional arrays with these elements:
// [startMonth,  start date for first month, end date for first month, endMonth, start date for 2nd month, end date for 2nd month, holiday name, image source]  

mysign[0] = [3, 21, 31, 4, 1, 20, "Aries", "Your fiery spirit will guide you through challenges today. Embrace your inner warrior and charge forward with confidence.", "images/aries.png"];

mysign[1] = [4, 21, 30, 5, 1, 21, "Taurus", "Patience will bring you the rewards you seek. Stay grounded and trust in the process, as good things are coming your way.", "images/taurus.png"];

mysign[2] = [5, 22, 31, 6, 1, 21, "Gemini", "Curiosity will lead you to new adventures. Be open to exploring new ideas and connections; variety is your spice of life today.", "images/gemini.png"];

mysign[3] = [6, 22, 30, 7, 1, 22, "Cancer", "Your caring nature will create a harmonious environment. Nurture your relationships, but remember to take time for self-care as well.", "images/cancer.png"];

mysign[4] = [7, 23, 31, 8, 1, 22, "Leo", "Your vibrant energy will attract positivity today. Shine bright and share your joy; you’re destined to make an impact.", "images/leo.png"];

mysign[5] = [8, 23, 31, 9, 1, 21, "Virgo", "Precision and attention to detail will serve you well. Stay organized, and your efforts will lead to success.", "images/virgo.png"];

mysign[6] = [9, 22, 30, 10, 1, 22, "Libra", "Harmony and balance are within reach. Foster your relationships and seek peace in your surroundings; beauty is all around you.", "images/libra.png"];

mysign[7] = [10, 23, 31, 11, 1, 21, "Scorpio", "Your passion and determination are your greatest assets today. Dive deep and pursue your goals with intensity; success is on the horizon.", "images/scorpio.png"];

mysign[8] = [11, 22, 30, 12, 1, 21, "Sagittarius", "Adventure and optimism will brighten your day. Keep an open mind and be ready to embrace new opportunities with enthusiasm.", "images/sagittarius.png"];

mysign[9] = [12, 22, 31, 1, 1, 20, "Capricorn", "Your hard work and discipline will pay off. Stay committed to your goals, and you will achieve greatness.", "images/capricorn.png"];

mysign[10] = [1, 21, 31, 2, 1, 19, "Aquarius", "Innovation and uniqueness are your strengths. Share your visionary ideas; you have the power to inspire change.", "images/aquarius.png"];

mysign[11] = [2, 20, 28, 3, 1, 20, "Pisces", "Your intuition and creativity will lead to fulfillment. Trust your instincts, and let your artistic spirit flourish.", "images/pisces.png"];


let flag =0;

for (let index=0; index < mysign.length; index++)
{
	// check to see if birthday within the range of dates and month
	if ((((birthMonth == mysign[index][0]) && (birthDate >= mysign[index][1])) && (birthDate <= mysign[index][2])) || ((birthMonth == mysign[index][3]) && (birthDate >= mysign[index][4]) && (birthDate <= mysign[index][5])))

	{
		const textarea = document.querySelector('textarea[readonly]');

		let formattedBirthdate = (birthMonth < 10 ? '0' : '') + birthMonth + '/' + (birthDate < 10 ? '0' : '') + birthDate + '/' + mydate.getFullYear();

    	textarea.value = "Your birthday: " + formattedBirthdate + ". \nYou are a " + mysign[index][6] +"! \nFortune Cookie: " + mysign[index][7];
    	
    	document.querySelector("#display").innerHTML = "<p> <img src='" + mysign[index][8] + "' width='200' height='354'></p>";

	// set flag to 1 if it's a valid birthday
	flag=1;
	break;
	}

   }
   // check to see if it's not a valid birthday
   if (flag == 0)
   		document.querySelector("#display").innerHTML = " This is not a valid birthday for zodiac sign!";
 }





