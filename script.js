const questions = [
    {
        question: "What is 50% of 200?",
        options: ["100", "50", "150", "25"],
        correct: 0
    },
    {
        question: "If you have 5 apples and you take away 3, how many do you have?",
        options: ["3", "2", "5", "8"],
        correct: 0
    },
    {
        question: "What is the next number in the sequence: 2, 5, 8, 11, __?",
        options: ["14", "13", "12", "19"],
        correct: 0
    },
    {
        question: "If you divide 30 by half and add 10, what do you get?",
        options: ["25", "70", "40", "50"],
        correct: 1
    },
    {
        question: "Which number is missing in the sequence: 3, 9, 27, __, 243?",
        options: ["81", "63", "36", "72"],
        correct: 0
    },
    {
        question: "What is 8 + 2 × 5?",
        options: ["50", "18", "40", "26"],
        correct: 1
    },
    {
        question: "What has keys but can't open locks?",
        options: ["A Piano", "A Map", "A computer", "A Book"],
        correct: 0
    }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const question = questions[currentQuestion];
    document.getElementById('question').textContent = question.question;
    const answers = document.querySelectorAll('.answer');
    answers.forEach((button, index) => {
        button.textContent = question.options[index];
    });
}

function checkAnswer(selected) {
    if (selected === questions[currentQuestion].correct) {
        score++;
    }
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    document.getElementById('question-container').classList.add('hidden');
    const resultContainer = document.getElementById('result-container');
    resultContainer.classList.remove('hidden');
    document.getElementById('score').textContent = `Your score is: ${score} out of ${questions.length}`;
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    document.getElementById('result-container').classList.add('hidden');
    document.getElementById('question-container').classList.remove('hidden');
    loadQuestion();
}

window.onload = loadQuestion;
