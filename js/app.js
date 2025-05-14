/*-------------------------------- Constants --------------------------------*/
const quizlist = [
    {
        question: "What is the maximum probation period allowed in Bahrain?",
        answers: ["3 months", "6 months", "1 year", "No limit"],
        correct: "3 months"
    },
    {
        question: "How many days of annual leave in Bahrain Labour Law?",
        answers: ["100 days", "28 days", "30 days"],
        correct: "30 days"
    },
    {
        question: "What is the minimum basic salary for workers in Bahrain as per the Labour Law?",
        answers: ["BD 1000", "BD 200", "BD 350"],
        correct: "BD 350"
    }
  ];
/*-------------------------------- Variables --------------------------------*/

let questionsIndex = 0;
Score = 0;


/*------------------------ Cached Element References ------------------------*/

const resultElement = document.getElementById('result')
const questionElement = document.getElementById('question');
const resetButton = document.getElementById('reset-button');
const scoreElement = document.getElementById('score');
const answersElement = document.getElementById('answers');

/*----------------------------- Event Listeners -----------------------------*/

/*-------------------------------- Functions --------------------------------*/
