<!-- Web Development and Programming (CSCI-UA 61) - 001 
Assignment 7 
Subi Hwang  
Dec 03, 2023 -->

<!-- quiz.php -->

<!-- The PHP program output the result to the user using HTML  -->

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Subi Hwang</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- use an external CSS file linked within the PHP program to design the output. -->
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

        <h2>Quiz Results</h2>

        <?php
        $answers = array("Q1" => "Seoul", "Q2" => "Hanbok", "Q3" => "Kimchi");
        $score = 0;

        // You should also provide the correct answers to all of the questions. You can store the correct answers in an array or a dictionary (associative array).

        foreach ($answers as $question => $correctAnswer) {
            $userAnswer = $_POST[$question];
            echo "<p>$question<br>";
            echo "Your answer: $userAnswer<br>";
            if ($userAnswer == $correctAnswer) {
                echo "Awesome!<br>" . "</p>" ;
                $score++;
            } else {
                echo "Incorrect. The correct answer was: $correctAnswer<br>" . "</p>";
            }
        }

        // On the results page, provide the user’s answers to each question, whether the answer is correct or not, and the total score out of 100%. 
        $totalScore = ($score / count($answers)) * 100;
        echo "<p>Total score: $totalScore%</p>";
        ?>
    </main>
  
   <footer>
        Footer <br>
        &copy; 2023 Subi Hwang
    </footer>

  </body>
</html>