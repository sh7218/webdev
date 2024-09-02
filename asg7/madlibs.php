<!-- Web Development and Programming (CSCI-UA 61) - 001 
Assignment 7 
Subi Hwang  
Dec 03, 2023 --> 

<!-- madlibs.php -->

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Subi Hwang</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
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
      <h2>Story</h2>

      <!-- Then the madlibs.php should output the following story:
      The purple bear entered the ancient house.
      There she saw a dragon playing with 3 cats. -->

        <?php
        $adj1 = $_POST['adj1'];
        $adj2 = $_POST['adj2'];
        $noun1 = $_POST['noun1'];
        $verb1 = $_POST['verb1'];
        $noun2 = $_POST['noun2'];
        $number = $_POST['number'];
        $verb2 = $_POST['verb2'];
        $noun3 = $_POST['noun3'];

        echo "The $adj1 $noun1 $verb1 the $adj2 house.<br>";
        echo "There she saw a $noun2 $verb2 with $number $noun3.";
        ?>
    </main>
  
   <footer>
        Footer <br>
        &copy; 2023 Subi Hwang
    </footer>

  </body>
</html>
