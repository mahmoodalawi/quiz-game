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
let Score = 0;


/*------------------------ Cached Element References ------------------------*/

const resultElement = document.getElementById('result')
const questionElement = document.getElementById('question');
const resetButton = document.getElementById('reset-button');
const scoreElement = document.getElementById('score');
const progressBar = document.getElementById('progress-bar');
const answersElement = document.getElementById('answers');




// console.log(resultElement);
// console.log(questionElement);
// console.log(resetButton);
// console.log(scoreElement);
// console.log(answersElement);


/*----------------------------- Event Listeners -----------------------------*/

resetButton.addEventListener('click', resetQuiz);
/*-------------------------------- Functions --------------------------------*/

function init() {
    resetButton.style.display = 'none';
    statusButton.style.display = 'none';
    
    startButton.addEventListener('click', startQuiz);
    
    // Hide question container initially
    questionContainer.style.display = 'none';
    scoreElement.style.display = 'none';
}
    


function startQuiz() {
    startButton.style.display = 'none';
    questionContainer.style.display = 'block';
    scoreElement.style.display = 'block';
    showQuestion();
    updateScore();

}

function showQuestion() {
    if (currentQuestionIndex >= quizlist.length) {
        endQuiz();
        return;
    }

  currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.textContent = answer;
        button.addEventListener('click', () => selectAnswer(answer));
        answersElement.appendChild(button);
    });

    updateProgressBar();
   
}

function selectAnswer(selectedAnswer) {
    const currentQuestion = quizlist[currentQuestionIndex];
    if (selectedAnswer === currentQuestion.correct) {
        score++;
        resultElement.textContent = "Correct!";
        resultElement.style.color = "green";
    } else {
        resultElement.textContent = `Wrong! The correct answer is: ${currentQuestion.correct}`;
        resultElement.style.color = "red";
    }

    currentQuestionIndex++;
    updateScore();
    setTimeout(() => {
        resultElement.textContent = '';
        showQuestion();
    }, );
}

function updateScore() {
    scoreElement.textContent = `Your Score: ${score}/${quizlist.length}`;
}

function updateProgressBar() {
    const progress = ((currentQuestionIndex) / quizlist.length) * 100;
    progressBar.style.width = `${progress}%`;
}

function endQuiz() {
    
    questionContainer.style.display = 'none';
    scoreElement.style.display = 'none';
    progressBar.style.width = '100%';
    
    resultElement.textContent = `Final Score: ${score}/${quizlist.length}`;
    resultElement.style.color = "black";
    resultElement.style.fontSize = '24px';
    resultElement.style.margin = '20px 0';
    
    resetButton.style.display = 'block';
    statusButton.style.display = 'block';

    const r = ( score / quizlist.length) * 100;

    if(r >= 70.0){
        statusButton.textContent = "Passed";
        statusButton.style.color = "green";
    }else{
        statusButton.textContent = "Failed";
        statusButton.style.color = "green";
    }

}


function resetQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    //quizStarted = false;
    resultElement.textContent = '';
    progressBar.style.width = '0px';
    resetButton.style.display = 'none';
    startButton.style.display = 'block';
    init();
}



// Initialize the quiz
init();
