const quizData = [
  {
    question: "HTML stands for?",
    answers: [
      "Hyper Text Markup Language",
      "High Transfer Machine Language",
      "Home Tool Markup Language",
      "None"
    ],
    correct: 0
  },
  {
    question: "CSS is used for?",
    answers: [
      "Database",
      "Styling",
      "Programming",
      "Hosting"
    ],
    correct: 1
  },
  {
    question: "JavaScript is?",
    answers: [
      "Styling Language",
      "Database",
      "Programming Language",
      "Server"
    ],
    correct: 2
  }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
  const q = quizData[currentQuestion];
  document.getElementById("question").innerText = q.question;

  const answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = "";

  q.answers.forEach((answer, index) => {
    const btn = document.createElement("button");
    btn.innerText = answer;

    btn.onclick = () => {
      if(index === q.correct) {
        score++;
      }
      nextQuestion();
    };

    answersDiv.appendChild(btn);
  });
}

function nextQuestion() {
  currentQuestion++;

  if(currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    document.getElementById("quiz-box").innerHTML = `
      <h2>Quiz Finished!</h2>
      <h3>Your Score: ${score}/${quizData.length}</h3>
    `;
  }
}

loadQuestion();

// CGPA CALCULATOR

function calculateCGPA() {
  let g1 = parseFloat(document.getElementById("g1").value) || 0;
  let g2 = parseFloat(document.getElementById("g2").value) || 0;
  let g3 = parseFloat(document.getElementById("g3").value) || 0;

  let cgpa = ((g1 + g2 + g3) / 3).toFixed(2);

  document.getElementById("cgpa-result").innerText = "Your CGPA: " + cgpa;
}

// STUDY TIMER

let timeLeft = 1500;
let timer;

function updateTimer() {
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;

  seconds = seconds < 10 ? "0" + seconds : seconds;

  document.getElementById("time").innerText = `${minutes}:${seconds}`;
}

function startTimer() {
  clearInterval(timer);

  timer = setInterval(() => {
    if(timeLeft > 0) {
      timeLeft--;
      updateTimer();
    }
  }, 1000);
}

function resetTimer() {
  clearInterval(timer);
  timeLeft = 1500;
  updateTimer();
}

updateTimer();