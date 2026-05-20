// QUIZ

const quizData = [
{
question:"HTML stands for?",
answers:[
"Hyper Text Markup Language",
"Home Tool Markup Language",
"Hyperlinks Text",
"None"
],
correct:0
},
{
question:"CSS used for?",
answers:[
"Styling",
"Database",
"Server",
"Hosting"
],
correct:0
}
];

let currentQuestion = 0;

function loadQuestion(){

const q = quizData[currentQuestion];

document.getElementById("question").innerText = q.question;

const answersDiv = document.getElementById("answers");

answersDiv.innerHTML = "";

q.answers.forEach((answer,index)=>{

const btn = document.createElement("button");

btn.innerText = answer;

btn.onclick = ()=>{

if(index === q.correct){
alert("Correct Answer");
}else{
alert("Wrong Answer");
}

currentQuestion++;

if(currentQuestion < quizData.length){
loadQuestion();
}else{
document.getElementById("quiz-box").innerHTML =
"<h2>Quiz Finished</h2>";
}

};

answersDiv.appendChild(btn);

});

}

if(document.getElementById("question")){
loadQuestion();
}

// CGPA

function calculateCGPA(){

let g1 = parseFloat(document.getElementById("g1").value)||0;

let g2 = parseFloat(document.getElementById("g2").value)||0;

let g3 = parseFloat(document.getElementById("g3").value)||0;

let cgpa = ((g1+g2+g3)/3).toFixed(2);

document.getElementById("cgpa-result").innerText =
"Your CGPA: " + cgpa;

}

// TIMER

let timeLeft = 1500;

let timer;

function updateTimer(){

let minutes = Math.floor(timeLeft/60);

let seconds = timeLeft%60;

seconds = seconds < 10 ? "0"+seconds : seconds;

document.getElementById("time").innerText =
`${minutes}:${seconds}`;

}

function startTimer(){

clearInterval(timer);

timer = setInterval(()=>{

if(timeLeft > 0){
timeLeft--;
updateTimer();
}

},1000);

}

function resetTimer(){

clearInterval(timer);

timeLeft = 1500;

updateTimer();

}

if(document.getElementById("time")){
updateTimer();
}

// SIGNUP

function signupUser(){

const name =
document.getElementById("signupName").value;

const email =
document.getElementById("signupEmail").value;

const password =
document.getElementById("signupPassword").value;

const user = {
name,
email,
password
};

localStorage.setItem(
"studentHubUser",
JSON.stringify(user)
);

alert("Signup Successful");

window.location.href = "login.html";

}

// LOGIN

function loginUser(){

const email =
document.getElementById("loginEmail").value;

const password =
document.getElementById("loginPassword").value;

const savedUser =
JSON.parse(localStorage.getItem("studentHubUser"));

if(
savedUser &&
email === savedUser.email &&
password === savedUser.password
){
alert("Login Successful");

window.location.href = "dashboard.html";

}else{

alert("Invalid Email or Password");

}

}

// LOGOUT

function logoutUser(){

alert("Logged Out");

window.location.href = "login.html";

}