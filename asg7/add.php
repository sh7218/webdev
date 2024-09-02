<!-- Web Development and Programming (CSCI-UA 61) - 001 
Assignment 7 
Subi Hwang  
Dec 03, 2023 -->

<!-- add.php -->

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

        <h2>Calculation Result</h2>

        <!-- Note: when using <input type="number">, make sure to convert the number to float using floatval(). -->

        <!--The program should extract the value of the two numbers and the operator selected, and then send an HTML page to the user that contains the two numbers, the operator, and the answer. 
 
        For example, if the user typed:
         
        Enter first number: 23.2
        Enter second number: 400.00
        Choose an operator: +
        The PHP program should output the following:
         
        23.2 + 400.0 = 423.20.-->
        
        <?php
        $num1 = floatval($_POST['num1']);
        $num2 = floatval($_POST['num2']);
        $operator = $_POST['operator'];
        $result = 0;

        switch ($operator) {
            case '+':
                $result = $num1 + $num2;
                break;

            case '-':
                $result = $num1 - $num2;
                break;

            case '*':
                $result = $num1 * $num2;
                break;

            case '/':
                if ($num2 != 0) {
                    $result = $num1 / $num2;
                } else {
                    echo "Divisor cannot be zero.";
                    return;
                }
                break;
            default:
                echo "Choose valid operator.";
                return;
        }

        echo "$num1 $operator $num2 = $result";
        ?>
    </main>
  
   <footer>
        Footer <br>
        &copy; 2023 Subi Hwang
    </footer>

  </body>
</html>
