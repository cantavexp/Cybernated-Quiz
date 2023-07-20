let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 60;








const quizContainer = document.getElementById('quiz-container');
const startButton = document.getElementById('start-button');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const timerElement = document.getElementById('timer');
const initialsElement = document.getElementById('initials');
const initialsInput = document.getElementById('initials');
const saveButton = document.getElementById('save-button');




const startQuiz = () => {
    quizContainer.style.display = 'block';
    startButton.style.display = 'none';
    setNextQuestion();
    startTimer();
}


const questions = [
    {
        question: "what is JavaScript?",
        answers: [
            { text: 'a programming language', correct: true },
            { text: 'wedsite', correct: false },
            { text: 'computer', correct: false },
            { text: 'file name', correct: false }
        ]
    },
    {
        question: "what do HTML stand for ?",
        answers: [
            { text: 'HyperText Mark Language', correct: false },
            { text: 'Hyper Markdown Language', correct: false },
            { text: 'HyperText Marklook Language', correct: false },
            { text: 'HyperText Markup Language', correct: true }
        ]
    },
    {
        question: "what does CSS stand for?",
        answers: [
            { text: 'Cascading Super Sheets', correct: false },
            { text: 'Cascading Style Shifts', correct: false },
            { text: 'Cascading Style Sheets', correct: true },
            { text: 'Cassing Style Sheets', correct: false }
        ]
    },
];



const selectAnswer = (event) => {
    const selectedButton = event.target;
    const correct = selectedButton.dataset.correct;

    if (correct) {
        score++;
    } else {
        timeLeft -= 10;
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        setNextQuestion();
    } else {
        endQuiz();
    }
}





const setNextQuestion = () => {
    resetState();
    showQuestion(questions[currentQuestionIndex]);
}




const showQuestion = (question) => {
    questionElement.textContent = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.textContent = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        answerButtonsElement.appendChild(button);
    })
}







const startTimer = () => {
    const timer = setInterval(() => {
        timeLeft--;
        timerElement.textContent = `Time: ${timeLeft}`;
        if (timeLeft <= 0 || currentQuestionIndex >= questions.length) {
            clearInterval(timer);
            endQuiz();
        }
    }, 1000);
}





const resetState = () => {
    clearStatusClass(document.body);
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

const clearStatusClass = (element) => {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

const endQuiz = () => {
    quizContainer.style.display = 'none';
    initialsInput.style.display = 'block';
    saveButton.style.display = 'block';
    initialsInput.focus();
    initialsInput.value = '';
    timerElement.textContent = "Time: 0";
}



    const saveScore = () => {
        const initials = initialsInput.value.trim();
        if (initials !== '') {
            console.log(`initials: ${initials} score: ${score}`);
        }
    }

startButton.addEventListener('click', startQuiz);
answerButtonsElement.addEventListener('click', selectAnswer);
saveButton.addEventListener('click', saveScore);




