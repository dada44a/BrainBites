<?php
session_start();

if(!isset($_SESSION['username']))
{
    header('location:Signin.html');
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="/css/quiz.css">
    <link rel="stylesheet" href="/src/output.css">
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        .option-button {
    padding: 10px 20px;
    margin: 5px; /* Ensure uniform margin for all buttons */
    background-color: #444281; /* Green */
    color: white;
    border: none;

    border-radius: 20px;
    cursor: pointer;
    display: inline-block; /* Ensure buttons are inline */
    vertical-align: middle; /* Align vertically */
}
    </style>
</head>
<body>
    <header class="flex items-center justify-between p-3">
        <div class="logo">
            <p class="font-[600] text-[25px]">BrainBites</p>
        </div>
        <nav class="flex gap-5 font-semibold">
                <a href="/">Home</a>
                <a href="/about.html">About Us</a>
                <a href="/contact.html">Contact</a>
                <a href="/quiz.html">Quizzes</a>
        </nav>
    </header>
    <section id="quiz-button" class="flex gap-5 items-center justify-center">
        

    </section>
    <section id="quiz-section" class="flex flex-col items-center justify-center mt-10">
        <div id="quiz-question-block" class="text-xl font-medium p-5 bg-gray-100 rounded-lg shadow-md">
            <!-- The question will be inserted here -->
        </div>
        <div id="quiz-options-block" class="mt-5 flex gap-5 items-center justify-center flex-wrap" >
            <!-- The options will be inserted here -->
        </div>
        <div id="ans" class="font-medium w-[50px] h-[50px] bg-gray-100 rounded-lg shadow-md mt-5 border-2 border-[#444281] flex items-center justify-center">

        </div>

        <div class="flex gap-5">
        <button id="next" class="mt-5 px-4 py-2 bg-[#4CAF50] text-white rounded hover:bg-[#4CAF50]">
            Next
        </button>
        <button id="submit" class="mt-5 px-4 py-2 bg-[#4CAF50] text-white rounded hover:bg-[#4CAF50] hidden">Submit</button>
    </div>
    </section>
   
    <footer>

    </footer>

    <script src="/js/quiz_block.js"></script>
</body>
</html>