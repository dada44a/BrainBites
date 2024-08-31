const quizzes = {
    food: [
        {
            question: "What is the main ingredient in guacamole?",
            options: ["Tomato", "Onion", "Avocado", "Pepper"],
            answer: "Avocado"
        },
        {
            question: "Which fruit is known as the 'king of fruits'?",
            options: ["Mango", "Apple", "Banana", "Durian"],
            answer: "Durian"
        },
        {
            question: "Which vegetable is also known as 'courgette'?",
            options: ["Cucumber", "Zucchini", "Pumpkin", "Squash"],
            answer: "Zucchini"
        }
    ],
    math: [
        {
            question: "What is 2 + 2?",
            options: ["3", "4", "5", "6"],
            answer: "4"
        },
        {
            question: "What is the square root of 16?",
            options: ["2", "4", "8", "16"],
            answer: "4"
        },
        {
            question: "What is the value of pi up to two decimal places?",
            options: ["3.12", "3.14", "3.16", "3.18"],
            answer: "3.14"
        }
    ],
    science: [
        {
            question: "What is the chemical symbol for gold?",
            options: ["Au", "Ag", "Pb", "Fe"],
            answer: "Au"
        },
        {
            question: "Which planet is known as the Red Planet?",
            options: ["Venus", "Earth", "Mars", "Jupiter"],
            answer: "Mars"
        },
        {
            question: "What is the hardest natural substance on Earth?",
            options: ["Diamond", "Graphite", "Quartz", "Ruby"],
            answer: "Diamond"
        }
    ],
    music: [
        {
            question: "Who composed the Four Seasons?",
            options: ["Beethoven", "Bach", "Vivaldi", "Mozart"],
            answer: "Vivaldi"
        },
        {
            question: "What is the term for a musical composition for piano alone?",
            options: ["Sonata", "Concerto", "Symphony", "Nocturne"],
            answer: "Sonata"
        },
        {
            question: "Who is known as the 'King of Pop'?",
            options: ["Elvis Presley", "Michael Jackson", "Prince", "Madonna"],
            answer: "Michael Jackson"
        }
    ]
};

const answer = [];
let currentTitle = '';
let currentQuestionIndex = 0;
const quizOptions = document.getElementById('quiz-button');
const quizQuestion = document.getElementById('quiz-question-block');
const submit = document.getElementById('submit');
const next = document.getElementById('next');
const options = document.getElementById('quiz-options-block');
const titles = Object.keys(quizzes);
const display = document.getElementById('ans');

titles.forEach((title) => {
    const button = document.createElement('a');
    button.href = '';
    button.innerHTML = title;
    button.className = 'option-button';
    quizOptions.appendChild(button);
    button.addEventListener('click', (e) => {
        e.preventDefault();
        handleClick(title); // Call your function with the title as an argument
    });
});

const handleClick = (title) => {
    currentTitle = title;
    currentQuestionIndex = 0; // Reset question index for the new quiz
    answer.length = 0; // Clear previous answers
    displayQuestion();
};

const displayQuestion = () => {
    const questionData = quizzes[currentTitle][currentQuestionIndex];
    quizQuestion.innerHTML = `<p>${questionData.question}</p>`;
    displayOptions(questionData.options);
    submit.classList.add('hidden'); // Hide submit button initially
};

next.addEventListener('click', () => {
    if (currentQuestionIndex < quizzes[currentTitle].length - 1) {
        currentQuestionIndex++;
        displayQuestion();
    } else {
        submit.classList.remove('hidden'); // Show submit button if it's the last question
    }
});

const displayOptions = (optionsArray) => {
    options.innerHTML = ''; // Clear previous options
    optionsArray.forEach((ans) => {
        const button = document.createElement('button');
        button.innerHTML = ans;
        button.className = 'option-button';

        button.addEventListener('click', () => {
            if (!button.classList.contains('clicked')) {
                addToArray(ans); // Store the selected answer
                button.classList.add('clicked'); // Mark the button as clicked
                button.disabled = true; // Disable clicked button

                // Disable all other buttons
                const allButtons = options.querySelectorAll('.option-button');
                allButtons.forEach((btn) => {
                    btn.disabled = true;
                });
            }
        });

        options.appendChild(button);
    });
};

const addToArray = (ans) => {
    answer[currentQuestionIndex] = ans; // Store the answer at the current question index
};

submit.addEventListener('click', () => {
    let count = 0; // Reset count for each submission
    for (let j = 0; j < answer.length; j++) {
        // Check the user's answer against the correct answer for the current question
        if (answer[j] === quizzes[currentTitle][j].answer) {
            count++;
        }
    }

    display.innerHTML=``;
    // Optionally, display the count in the UI
    const resultMessage = document.createElement('p');
    resultMessage.innerHTML = `${count}`;
    display.appendChild(resultMessage);
});