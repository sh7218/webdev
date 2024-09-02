// Web Development and Programming (CSCI-UA 61) - 001 
// Assignment 5
// Subi Hwang
// Nov 6, 2023 
// Part #1: Simple Shopping cart application (products.html): Using EventListener() method and events (focusing on submit and change), and the DOM’s forms[ ] and elements[ ] array collection objects to validate a form. 

// JavaScript requirements

// Make sure to be using addEventlistener within the .js to execute all functions needed here. 
// Do not invoke events from within the HTML document anymore as it’s not efficient 
// (There should not be any events within the HTML page.)
 
// Write your code in an external JavaScript file called asg5cart.js.
// Use addEventlistener method with change, submit to execute functions needed for this assignment.

// Use focus(), selec(), alert() to make sure to that the user entered a value 
// and when specific elements such as zip code and email are valid.

// Include the following JavaScript functions:
// 1) total(): When the user enters the quantity number of item to order, you should trigger a function ”total()” to display the current subtotal and the grand total immediately into the document (use the “change” event).
// Make sure to add a shipping amount to the grand total if the user selected shipping.

var qt1, qt2, qt3, subTotal1, subTotal2, subTotal3, shippingAmount, grandTotal;
// Event listener for form submission
document.forms[0].addEventListener("submit", receipt);

var price1= document.getElementById("cherryPrice");
var price2= document.getElementById("coconutPrice");
var price3= document.getElementById("acornPrice");

var obj1= document.getElementById("qt1");
var obj2= document.getElementById("qt2");
var obj3= document.getElementById("qt3");
var obj4= document.getElementById("shippingAmount");


obj1.addEventListener("change", total);
obj2.addEventListener("change", total);
obj3.addEventListener("change", total);
obj4.addEventListener("change", total);
document.querySelectorAll('input[name="ShippingMethod"]').forEach(function(element) {
    element.addEventListener("change", total);
});


function total()
{

var cherryPrice = document.getElementById("cherryPrice").value;
 qt1 = parseFloat(obj1.value);
 subTotal1= qt1 * parseFloat(cherryPrice);
document.getElementById("subTotal1").innerHTML= subTotal1 + " bells";

var coconutPrice = document.getElementById("coconutPrice").value;
 qt2 = parseFloat(obj2.value);
 subTotal2= qt2 * parseFloat(coconutPrice);
document.getElementById("subTotal2").innerHTML= subTotal2 + " bells";

var acornPrice = document.getElementById("acornPrice").value;
 qt3 = parseFloat(obj3.value);
 subTotal3= qt3 * parseFloat(acornPrice);
document.getElementById("subTotal3").innerHTML= subTotal3;
    
    shippingAmount = parseFloat(document.getElementById("shippingAmount").value) || 0;
    var shippingMethod = document.querySelector('input[name="ShippingMethod"]:checked')?.value;
    
    if (shippingMethod === "shipping") {
        grandTotal = subTotal1 + subTotal2 + subTotal3 +shippingAmount;
    }
    else
        grandTotal = subTotal1 + subTotal2 + subTotal3;
    
    document.getElementById("grandTotal").innerHTML = grandTotal + " bells";
}

// 2) receipt(): When the user clicks the checkout button, a function called receipt() should be executed to validate all of the form elements:
// Make sure that the type of the submit button is type=submit:
// <input type=submit value=checkout>

// You should make sure to validate all of the form elements using JavaScript:
// Check if the fields are empty or null;

// Validate the zip code making sure that it’s contains 5 digits(length is 5.)
// Make sure that the email includes an at-sign (“@“) and a dot (“.“);
// If the validation fails, alert the user and ask it to enter valid information, using focus(), select(), alert(), and change the background color to red of that specific element.

// Use also e.preventDefault() to stop the form from submitting to another blank/empty page. This will allow you to see the receipt/output of the script on the same page or in a new page. 
// When all the validation is fine, then this function should display a receipt with all the information entered such as products, quantity purchased, current date, subtotal, and grand Total inside in a new HTML document. Make sure the new document is well designed using .css.
// List the credit card number as x for all digits in the receipt except the last four digits, which should appear as they are.

function receipt(e){
        //access the first form object
        let obj= document.forms[0];

            // to stop form from submitting to new page (stays anchored on the same page so you can see the output)
             e.preventDefault();

            // get how many elements in the form
            let len = obj.elements.length;

            let text =  "<h2> Thanks for your purchase today ⋆˚🐾˖°: </h2>";

            // iterate through all of the form elements making sure there is a value entered for each element and validate zip code, and email

            const now = new Date();

            const cardNumber = document.getElementById('cardNumber').value;
            const maskedCardNumber = 'xxxx-xxxx-xxxx-' + cardNumber.slice(-4);

            for (let i= 0; i < len -2; i++)
            {

                if ((obj.elements[i].value == "") || (obj.elements[i].value == null))
                {

                    alert("Make sure to input " + obj.elements[i].name);

                    // bring focus to the element that has no value
                    obj.elements[i].focus();

                    // selects the element that has no value
                    obj.elements[i].select();

                    // highlights the background with red so it brings attention to the element that's empty and requires the user to enter a value
                    obj.elements[i].style.backgroundColor="red";

                    // return so nothing would be done as user needs to enter the missing value
                    return;
                }

                // if there is a value, and this is the 3rd element (zip code) then make sure it's has 5 digits (validating the zip code)
                else if ((i == 14 ) && (obj.elements[i].value.length != 5)  )
                {

                    alert("Make sure to input the 5 digits for " + obj.elements[i].name);
                    obj.elements[i].focus();
                    obj.elements[i].select();
                    obj.elements[i].style.backgroundColor="red";
                    return;
                }

                // if there is a value, and this is the 4th element (email) then make sure it's has an '@' in the email (validating the email)
                else if ((i == 12 ) && (obj.elements[i].value.indexOf("@") == -1))
                {
                    alert("Your email should include the '@' for this " + obj.elements[i].name);
                    obj.elements[i].focus();
                    obj.elements[i].select();
                    obj.elements[i].style.backgroundColor="red";
                    return;
                }

                // if there is a value, and this is the 4th element (email) then make sure it's has a '.' the email (validating the email)

                else if ((i == 12 ) &&  (obj.elements[i].value.indexOf(".") == -1))
                {

                    alert("Your email should include the '.' for this " + obj.elements[i].name);
                    obj.elements[i].focus();
                    obj.elements[i].select();
                    obj.elements[i].style.backgroundColor="red";
                    return;
                }
                             
            }

      text += "Current date: " + now;
      text += "<br><br>Quantity of cherry: " + qt1 + "&nbsp;&nbsp;&nbsp Subtotal of cherry: " + subTotal1 + "&nbsp bells";
      text += "<br>Quantity of coconut: " + qt2 + "&nbsp;&nbsp;&nbsp Subtotal of coconut: " + subTotal2 + "&nbsp bells";
      text += "<br>Quantity of acorn: " + qt3 + "&nbsp;&nbsp;&nbsp Subtotal of acorn: " + subTotal3 + "&nbsp bells";
      text += "<br><br>Grand Total: " + grandTotal + "&nbsp bells (with shipping amount (fee) &nbsp" + shippingAmount +"&nbsp bells)";
                
      let receiptWindow = window.open('', 'ReceiptWindow', 'width=600,height=490');
      receiptWindow.document.write('<html><head><title>Receipt</title>');

      receiptWindow.document.write('<link rel="stylesheet" href="styles/styles.css">');
      receiptWindow.document.write('<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">');

      receiptWindow.document.write('</head><body>');
      receiptWindow.document.write('<header><h1>Online Receipt</h1></header>');
      

      receiptWindow.document.write('<div style="text-align: center;">');
      receiptWindow.document.write('<p><i style="font-size:24px" class="fa fa-credit-card"></i> Credit Card: ' + maskedCardNumber + '</p>');
      receiptWindow.document.write('</div><hr>');
      receiptWindow.document.write('<div class="container">' + text + '</div>');
      receiptWindow.document.write('<footer> Footer <br>&copy; 2023 Subi Hwang</footer></body></html>');
      receiptWindow.document.close();

    } 









