

let currentQuestionIndex = 0;
let timer;
let score = 0;
let timeLeft = 60;


const questions = [
  {
    question: "what is JavaScript?",
    answers: [
      { text: 'a programming language', correct: true },
      { text: 'website', correct: false },
      { text: 'computer', correct: false },
      { text: 'file name', correct: false }
    ]
  },
  {
    question: "what do HTML stand for?",
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

function startQuiz() {
  document.getElementById("start-screen").classList.add("hide");
  document.getElementById("question").classList.remove("hide");

  startTimer();
  displayQuestion();
}

function displayQuestion() {
  const questionElement = document.getElementById("question-title");
  const choicesElement = document.getElementById("choices");
  const feedbackElement = document.getElementById("feedback");

  if (currentQuestionIndex < questions.length) {
    questionElement.textContent = questions[currentQuestionIndex].question;
    choicesElement.innerHTML = "";
    feedbackElement.innerHTML = "";

    questions[currentQuestionIndex].answers.forEach((answer, index) => {
      const choiceButton = document.createElement("button");
      choiceButton.textContent = answer.text;
      choiceButton.setAttribute("data-index", index);
      choiceButton.addEventListener("click", checkAnswer);
      choicesElement.appendChild(choiceButton);
    });

    feedbackElement.textContent = "";
  } else {
    endQuiz();
  }
}

function checkAnswer(event) {
  const selectedChoice = event.target;
  const feedbackElement = document.getElementById("feedback");

  if (selectedChoice.getAttribute("data-index") == questions[currentQuestionIndex].correctChoice) {
    feedbackElement.textContent = "Correct!";
    score += 10;
  } else {
    feedbackElement.textContent = "Wrong!";
    timeLeft -= 10;
  }

  currentQuestionIndex++;
  displayQuestion();
}

function startTimer() {
  const timerElement = document.getElementById("time");
  timer = setInterval(() => {
    timeLeft--;
    timerElement.textContent = timeLeft;

    if (timeLeft <= 0) {
      clearInterval(timer);
      endQuiz();
    }
  }, 1000);
}

function endQuiz() {
  clearInterval(timer);
  document.getElementById("question").classList.add("hide");
  document.getElementById("end-screen").classList.remove("hide");
  document.getElementById("final-score").textContent = score;
}

document.getElementById("start-button").addEventListener("click", startQuiz);
document.getElementById("submit-score").addEventListener("click", saveScore);

function initQuiz() {
  setupQuestions(questions);
  
}


initQuiz();

function setupQuestions(questions) {
  window.quizQuestions = questions;
  
}
















































