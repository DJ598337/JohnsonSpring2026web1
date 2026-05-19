let currentQuestion = 0;
let score = 0;

const questions = [
  {
    question: "What genre is a movie with big battles and high speed chases?",
    answers: ["Action", "Comedy", "Horror"],
    correct: "Action"
  },
  {
    question: "What is a movie genre that makes you laugh a lot?",
    answers: ["Drama", "Comedy", "Action"],
    correct: "Comedy"
  },
  {
    question: "What is the name of Dorothy's dog in The Wizard of Oz?",
    answers: ["Buster", "Carl", "Toto"],
    correct: "Toto"
  },
  {
    question: "What is the name of the killer from the hit Halloween movie series? ",
    answers: ["Kevin", "Michel Myers", "Jeffery Dahamer"],
    correct: "Michel Myers"
  },
  {
    question: "What movie is this quote from?: You like Jazz? ",
    answers: ["The Priness and The Frog", "We Need To Talk About Kevin", "The Bee Movie"],
    correct: "The Bee Movie"
  },
   {
    question: "When did talkies emerge?",
    answers: ["1888", "1920's", "1950's"],
    correct: "1920's"
  },
  {
    question: "What movie was the first to be a Talkie? ",
    answers: ["The Jazz Singer", "Singing In The Rain", "Casablanca"],
    correct: "The Jazz Singer"
  }
];

function loadQuestion() {
  const q = questions[currentQuestion];

  document.getElementById("question").innerText = q.question;

  const answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = "";

  q.answers.forEach(answer => {
    const btn = document.createElement("button");
    btn.innerText = answer;
    btn.onclick = () => checkAnswer(answer);
    answersDiv.appendChild(btn);
  });

  document.getElementById("result").innerText = "";
}

function checkAnswer(answer) {
  const correct = questions[currentQuestion].correct;

  if (answer === correct) {
    document.getElementById("result").innerText = "Correct!";
    score++;
  } else {
    document.getElementById("result").innerText = "Try again!";
  }
}

function nextQuestion() {

  currentQuestion++;

  // QUIZ FINISHED
  if (currentQuestion >= questions.length) {

    document.getElementById("question").innerText =
      "Quiz finished! Score: " + score + "/" + questions.length;

    document.getElementById("answers").innerHTML = "";

    document.getElementById("result").innerText =
      "Correct! Enjoy the movie!";

    // SHOW THEATER BUTTON
    $("#theaterButton").fadeIn();

    return;
  }

  // LOAD NEXT QUESTION
  loadQuestion();
}

loadQuestion();

