let score = 0;
let currentQuestionIndex = 0;

let questions = [
  {
    question: "Was ist die Hauptstadt von Deutschland?",
    answers: ["Paris", "London", "Berlin", "Madrid"],
    correctAnswer: 2,
  },
  {
    question: "Welche Farbe hat eine Zitrone?",
    answers: ["blau", "gelb", "grün", "rot"],
    correctAnswer: 1,
  },
  {
    question: "Wie groß ist England?",
    answers: ["135.453km2", "400.200km2", "120.543km2", "130.279km2"],
    correctAnswer: 3,
  },
];

function displayQuestion() {
  if (currentQuestionIndex >= questions.length) {
    document.getElementById("quiz-container").hidden = true;
    document.getElementById("result").hidden = false;
    document.getElementById("score").textContent = score;
    return;
  }

  let question = questions[currentQuestionIndex];

  document.getElementById("question").textContent = question.question;

  let answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = "";

  question.answers.forEach((answer, index) => {
    let answerButton = document.createElement("button");
    answerButton.classList.add("btn", "btn-info", "me-2");
    answerButton.textContent = answer;
    answerButton.onclick = () => checkAnswer(index);
    answersDiv.appendChild(answerButton);
  });
}

displayQuestion();

function checkAnswer(userAnswer) {
  let correctAnswer = questions[currentQuestionIndex].correctAnswer;

  if (userAnswer == correctAnswer) {
    score++;
  }
  nextQuestion();
}

function nextQuestion() {
  currentQuestionIndex++;
  displayQuestion();
}
