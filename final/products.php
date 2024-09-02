<!-- Web Development and Programming (CSCI-UA 61) - 001 
Final Project: products.php 
Subi Hwang  
Dec 16, 2023 --> 

<!-- products.php (we will go over the details during next week): This product form should be connected to products.php script to store all the values from the products form such as name, email, phone, credit card and address into a clients.txt file. It should also send a thank you for their purchase. -->

<HTML>
    <head>
    <title>Fashion Shop - PHP</title>
    <link rel="stylesheet" href="styles/styles.css">
    </head>
    <body>
    <?php
    // Check if the form is submitted
    if (!empty($_POST)) {
        // Extract specific data from the POST array
        $firstname = $_POST['firstname'];
        $lastname = $_POST['lastname'];
        $email = $_POST['email'];
        $phone = $_POST['phoneNumber'];
        $creditCard = $_POST['creditCardCompany'];
        $creditCardNum = $_POST['cardNumber'];
        $address = $_POST['address'];

        // Extract only the last four digits of the credit card
        $creditCardLastFour = substr($creditCardNum, -4);

        // Prepare the data to be written
        $clientData = "Name: $firstname $lastname\nEmail: $email\nPhone: $phone\nCredit Card: $creditCard\nCredit Card Number: **** **** **** $creditCardLastFour\nAddress: $address\n";

        echo "<h2>Thank you for shopping with us!</h2>";
        print("<center><li> Firstname: $firstname </center>");
        print("<center><li> Lastname: $lastname </center>");
        print("<center><li> Email: $email </center>");
        print("<center><li> Phone: $phone </center>");
        print("<center><li> CreditCard: $creditCard </center>");
        print("<center><li> Card Number: **** **** **** $creditCardLastFour </center>");
        print("<center><li> address: $address ");

        // Open the file in append mode
        $file = fopen("clients.txt", "a") or die("Unable to open file!");

        // Write the data to the file
        fwrite($file, $clientData);

        // Close the file
        fclose($file);
    }
    ?>
    </body>
</html>