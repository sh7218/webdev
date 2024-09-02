<!-- Web Development and Programming (CSCI-UA 61) - 001 
Assignment 7 
Subi Hwang  
Dec 03, 2023 -->

<!-- online.php -->

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Subi Hwang</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Include a CSS file to design the HTML output (receipt.) -->
    <link rel="stylesheet" href="styles/styles.css">
  </head>
  <body>
     <header>
          <h1>Web Development and Programming</h1>         
     </header>       
       <nav>        
              <a href="../index.html">Home</a>
              <a href="../contact.html">Contact</a>
              <a href="../asg2">Assignment #2</a>
              <a href="../asg3">Assignment #3</a>
              <a href="../asg4">Assignment #4</a>
              <a href="../asg5"> Assignment #5 </a>
              <a href="../asg5/products.html"> Products </a>
              <a href="../asg6/index.html"> Assignment #6 </a>
              <a href="../asg6/jQweb/index.html"> Animal Crossing </a>
              <a href="index.html"> Assignment #7 </a>
              <a href="../final/products.html"> Final Project</a>
        </nav>
    <main>

        <h2>Order Receipt</h2>

         <!-- Your PHP program should output all of the elements from the form. You should have also a price for each product to calculate the total.-->

         <!-- You should include the names of the elements and the values for each of the form elements that the user entered on the receipt. You should also include the total for the purchase on the receipt. -->

        <?php
        $name = $_POST['name'];
        $email = $_POST['email'];
        $product = $_POST['product'];
        $quantity = intval($_POST['quantity']);
        $prices = array("Cherry" => 10, "Coconut" => 20);
        $total = $prices[$product] * $quantity;

        echo "<p>Name: $name</p>";
        echo "<p>Email: $email</p>";
        echo "<p>Product: $product</p>";
        echo "<p>Quantity: $quantity</p>";
        echo "<p>Total Price: $" . $total . "</p>";
        ?>  
    </main>
  
   <footer>
        Footer <br>
        &copy; 2023 Subi Hwang
    </footer>

  </body>
</html>